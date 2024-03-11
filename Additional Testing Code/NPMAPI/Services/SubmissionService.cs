using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Diagnostics;
using System.Dynamic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web.Hosting;
using EdiFabric.Core.Model.Edi;
using EdiFabric.Framework.Readers;
using EdiFabric.Templates.Hipaa5010;
using Microsoft.Ajax.Utilities;
using Newtonsoft.Json;
using NPMAPI.Enums;
using NPMAPI.Models;
using NPMAPI.Models.ViewModels;
using NPMAPI.Repositories;
using Renci.SshNet;
using static NPMAPI.Controllers.SubmissionController;

namespace NPMAPI.Services
{
    public class SubmissionService : ISubmissionRepository
    {
        private readonly IPracticeRepository _practiceService;
        public SubmissionService(IPracticeRepository practiceService)
        {
            _practiceService = practiceService;
        }

        public ResponseModel GenerateBatch_5010_P(long practice_id, long claim_id)
        {
            ResponseModel objResponse = new ResponseModel();
            try
            {
                string strBatchString = "";
                int segmentCount = 0;
                List<string> errorList;

                //string billingOrganizationName = "practiceName";//practiceName
                string sumbitterId = "";
                string submitterCompanyName = "";
                string submitterContactPerson = "";
                string submitterCompanyEmail = "";
                string submitterCompanyPhone = "";
                string batchId = "";

                errorList = new List<string>();

                List<spGetBatchCompanyDetails_Result> batchCompanyInfo = null;
                List<spGetBatchClaimsInfo_Result> batchClaimInfo = null;
                List<spGetBatchClaimsDiagnosis_Result> batchClaimDiagnosis = null;
                List<spGetBatchClaimsProcedurestest_Result> batchClaimProcedures = null;
                List<spGetBatchClaimsInsurancesInfo_Result> insuraceInfo = null;

                List<ClaimSubmissionModel> claimSubmissionInfo = new List<ClaimSubmissionModel>();

                using (var ctx = new NPMDBEntities())
                {
                    batchCompanyInfo = ctx.spGetBatchCompanyDetails(practice_id.ToString()).ToList();
                }

                if (batchCompanyInfo != null && batchCompanyInfo.Count > 0)
                {
                    sumbitterId = batchCompanyInfo[0].Submitter_Id;
                    submitterCompanyName = batchCompanyInfo[0].Company_Name;
                    submitterContactPerson = batchCompanyInfo[0].Contact_Person;
                    submitterCompanyEmail = batchCompanyInfo[0].Company_Email;
                    submitterCompanyPhone = batchCompanyInfo[0].Company_Phone;
                }

                if (string.IsNullOrEmpty(sumbitterId))
                {
                    errorList.Add("Patient Submitter ID is missing.");
                }
                if (string.IsNullOrEmpty(submitterCompanyName))
                {
                    errorList.Add("Company ClearingHouse information is missing.");
                }
                if (string.IsNullOrEmpty(submitterCompanyEmail) && string.IsNullOrEmpty(submitterCompanyPhone))
                {
                    errorList.Add("Submitter Contact Information is Missing.");
                }

                if (errorList.Count == 0)
                {
                    using (var ctx = new NPMDBEntities())
                    {
                        batchClaimInfo = ctx.spGetBatchClaimsInfo(practice_id.ToString(), claim_id.ToString(), "claim_id").ToList();
                        batchClaimDiagnosis = ctx.spGetBatchClaimsDiagnosis(practice_id.ToString(), claim_id.ToString(), "claim_id").ToList();
                        batchClaimProcedures = ctx.spGetBatchClaimsProcedurestest(practice_id.ToString(), claim_id.ToString(), "claim_id").ToList();
                        insuraceInfo = ctx.spGetBatchClaimsInsurancesInfo(practice_id.ToString(), claim_id.ToString(), "claim_id").ToList();
                    }

                    foreach (var claim in batchClaimInfo)
                    {

                        if (claim.Patient_Id == null)
                        {
                            errorList.Add("Patient identifier is missing. DOS:" + claim.Dos);
                        }
                        else if (claim.Billing_Physician == null)
                        {
                            errorList.Add("Billing Physician identifier is missing. DOS:" + claim.Dos);
                        }


                        IEnumerable<spGetBatchClaimsInsurancesInfo_Result> claimInsurances = (from ins in insuraceInfo
                                                                                              where ins.Claim_No == claim.Claim_No
                                                                                              select ins).ToList();

                        spGetBatchClaimsDiagnosis_Result claimDiagnosis = (from spGetBatchClaimsDiagnosis_Result diag in batchClaimDiagnosis
                                                                           where diag.Claim_No == claim.Claim_No
                                                                           select diag).FirstOrDefault();

                        IEnumerable<spGetBatchClaimsProcedurestest_Result> claimProcedures = (from spGetBatchClaimsProcedurestest_Result proc in batchClaimProcedures
                                                                                          where proc.Claim_No == claim.Claim_No
                                                                                          select proc).ToList();







                        ClaimSubmissionModel claimSubmissionModel = new ClaimSubmissionModel();
                        claimSubmissionModel.claim_No = claim.Claim_No;
                        claimSubmissionModel.claimInfo = claim;
                        claimSubmissionModel.claimInsurance = claimInsurances as List<spGetBatchClaimsInsurancesInfo_Result>;
                        claimSubmissionModel.claimDiagnosis = claimDiagnosis as spGetBatchClaimsDiagnosis_Result;
                        claimSubmissionModel.claimProcedures = claimProcedures as List<spGetBatchClaimsProcedurestest_Result>;



                        List<uspGetBatchClaimsProviderPayersDataFromUSP_Result> claimBillingProviderPayerInfo;
                        foreach (var ins in claimInsurances)
                        {
                            if (ins.Insurace_Type.Trim().ToUpper().Equals("P") && ins.Inspayer_Id != null)//primary
                            {

                                using (var ctx = new NPMDBEntities())
                                {
                                    claimBillingProviderPayerInfo = ctx.uspGetBatchClaimsProviderPayersDataFromUSP(ins.Inspayer_Id.ToString(), claim.Claim_No.ToString(), "CLAIM_ID").ToList();

                                    if (claimBillingProviderPayerInfo != null && claimBillingProviderPayerInfo.Count > 0)
                                    {
                                        claimSubmissionModel.claimBillingProviderPayer = claimBillingProviderPayerInfo[0];
                                    }
                                }
                                break;
                            }
                        }

                        /*
                         * Assign Other objects of hospital claim
                         *  
                         * 
                         * */
                        claimSubmissionInfo.Add(claimSubmissionModel);

                    }

                    if (claimSubmissionInfo.Count > 0)
                    {
                        batchId = claimSubmissionInfo[0].claim_No.ToString(); // Temporariy ... will be populated by actual batch id.

                        string dateTime_yyMMdd = DateTime.Now.ToString("yyMMdd");
                        string dateTime_yyyyMMdd = DateTime.Now.ToString("yyyyMMdd");
                        string dateTime_HHmm = DateTime.Now.ToString("HHmm");

                        // ISA02 Authorization Information AN 10 - 10 R
                        string authorizationInfo = string.Empty.PadRight(10);// 10 characters

                        //ISA04 Security Information AN 10-10 R
                        string securityInfo = string.Empty.PadRight(10);// 10 characters

                        segmentCount = 0;

                        #region ISA Header
                        // INTERCHANGE CONTROL HEADER
                        strBatchString = "ISA*";
                        strBatchString += "00*" + authorizationInfo + "*00*" + securityInfo + "*ZZ*" + sumbitterId.PadRight(15) + "*ZZ*263923727000000*";
                        strBatchString += dateTime_yyMMdd + "*";
                        strBatchString += dateTime_HHmm + "*";
                        strBatchString += "^*00501*000000001*0*P*:~";
                        segmentCount++;
                        //FUNCTIONAL GROUP HEADER
                        strBatchString += "GS*HC*" + sumbitterId + "*263923727*";
                        strBatchString += dateTime_yyyyMMdd + "*";
                        strBatchString += dateTime_HHmm + "*";
                        strBatchString += batchId.ToString() + "*X*005010X222A1~";  //-->5010 GS08 Changed from 004010X098A1 to 005010X222 in 5010
                                                                                    // need to send batch_id in GS06 instead of 16290 so that can be traced from 997 response file
                        segmentCount++;
                        //TRANSACTION SET HEADER
                        strBatchString += "ST*837*0001*005010X222A1~";  //-->5010 new element addedd. ST03 Implementation Convention Reference (005010X222)
                        segmentCount++;
                        //BEGINNING OF HIERARCHICAL TRANSACTION
                        strBatchString += "BHT*0019*00*000000001*";
                        strBatchString += dateTime_yyyyMMdd + "*";
                        strBatchString += dateTime_HHmm + "*";
                        strBatchString += "CH~";
                        segmentCount++;

                        #endregion

                        #region LOOP 1000A (Sumbitter Information)


                        #region Submitter Company Name
                        strBatchString += "NM1*41*2*";  //-->5010 NM103  Increase from 35 - 60
                        strBatchString += submitterCompanyName; // -->5010 NM104  Increase from 25 - 35
                        strBatchString += "*****46*" + sumbitterId;// -->5010 New element added NM112 Name Last or Organization Name 1-60
                        strBatchString += "~";
                        segmentCount++;
                        #endregion

                        #region SUBMITTER EDI CONTACT INFORMATION
                        strBatchString += "PER*IC*";
                        if (!string.IsNullOrEmpty(submitterContactPerson))
                        {
                            strBatchString += submitterContactPerson;
                        }

                        if (!string.IsNullOrEmpty(submitterCompanyPhone))
                        {
                            strBatchString += "*TE*" + submitterCompanyPhone.Replace("-", "").Replace("(", "").Replace(")", "").Replace(" ", "").Trim();

                        }
                        if (!string.IsNullOrEmpty(submitterCompanyEmail))
                        {
                            strBatchString += "*EM*" + submitterCompanyEmail;
                        }
                        strBatchString += "~";
                        segmentCount++;
                        #endregion

                        #endregion

                        #region LOOP 1000B (RECEIVER NAME)
                        strBatchString += "NM1*40*2*263923727000000*****46*" + sumbitterId + "~";
                        segmentCount++;
                        #endregion

                        int HL = 1;


                        foreach (var claim in claimSubmissionInfo)
                        {
                            long patientId = (long)claim.claimInfo.Patient_Id;
                            long claimId = claim.claimInfo.Claim_No;
                            string DOS = claim.claimInfo.Dos;
                            string patientName = claim.claimInfo.Lname + ", " + claim.claimInfo.Fname;

                            string paperPayerID = "";
                            string Billing_Provider_NPI = "";
                            string TaxonomyCode = "";
                            string FederalTaxID = "";
                            string FederalTaxIDType = "";

                            string box_33_type = "";

                            #region Check If Payer Validation Expires
                            // check if payer validation expires
                            
                            if (claim.claimBillingProviderPayer != null)
                            {
                                if (string.IsNullOrEmpty(claim.claimBillingProviderPayer.Validation_Expiry_Date.ToString()) && claim.claimBillingProviderPayer.Validation_Expiry_Date.ToString() != "01/01/1900")
                                {

                                    string validationExpriyDate = claim.claimBillingProviderPayer.Validation_Expiry_Date.ToString();
                                    DateTime dtExpiry = DateTime.Parse(validationExpriyDate);
                                    DateTime dtToday = new DateTime();

                                    if (DateTime.Compare(dtExpiry, dtToday) >= 0) // expires
                                    {
                                        errorList.Add("VALIDATION EXPIRED : Provider validation with the Payer has been expired.");
                                    }

                                }
                            }
                            #endregion

                            #region Provider NPI/Group NPI on the basis of Box 33 Type . Group or Individual | Federal Tax ID | Box33                         
                            if (claim.claimBillingProviderPayer != null)
                            {
                                if (!string.IsNullOrEmpty(claim.claimBillingProviderPayer.Provider_Identification_Number_Type)
                                    && !string.IsNullOrEmpty(claim.claimBillingProviderPayer.Provider_Identification_Number))
                                {

                                    FederalTaxIDType = claim.claimBillingProviderPayer.Provider_Identification_Number_Type;
                                    FederalTaxID = claim.claimBillingProviderPayer.Provider_Identification_Number;
                                }

                                if (!string.IsNullOrEmpty(claim.claimBillingProviderPayer.Box_33_Type))
                                {
                                    box_33_type = claim.claimBillingProviderPayer.Box_33_Type;
                                }
                            }
                            if (string.IsNullOrEmpty(FederalTaxIDType) || string.IsNullOrEmpty(FederalTaxID))
                            {
                                FederalTaxIDType = claim.claimInfo.Federal_Taxidnumbertype;
                                FederalTaxID = claim.claimInfo.Federal_Taxid;
                            }



                            if (string.IsNullOrEmpty(box_33_type))
                            {
                                switch (FederalTaxIDType)
                                {
                                    case "EIN": // Group
                                        box_33_type = "GROUP";
                                        break;
                                    case "SSN": // Individual
                                        box_33_type = "INDIVIDUAL";
                                        break;
                                }
                            }
                            switch (box_33_type)
                            {
                                case "GROUP": // Group  
                                    if (!string.IsNullOrEmpty(claim.claimInfo.Bl_Group_Npi))
                                    {
                                        Billing_Provider_NPI = claim.claimInfo.Bl_Group_Npi;
                                    }
                                    if (!string.IsNullOrEmpty(claim.claimInfo.Grp_Taxonomy_Id))
                                    {
                                        TaxonomyCode = claim.claimInfo.Grp_Taxonomy_Id;
                                    }
                                    break;
                                case "INDIVIDUAL": // Individual
                                    if (!string.IsNullOrEmpty(claim.claimInfo.Bl_Npi))
                                    {
                                        Billing_Provider_NPI = claim.claimInfo.Bl_Npi;
                                    }

                                    if (!string.IsNullOrEmpty(claim.claimInfo.Taxonomy_Code))
                                    {
                                        TaxonomyCode = claim.claimInfo.Taxonomy_Code;
                                    }
                                    break;
                            }
                            #endregion

                            #region LOOP 2000A

                            #region BILLING PROVIDER HIERARCHICAL LEVEL

                            strBatchString += "HL*" + HL + "**";
                            strBatchString += "20*1~";
                            segmentCount++;

                            #endregion

                            #region BILLING PROVIDER SPECIALTY INFORMATION

                            strBatchString += "PRV*BI*PXC*" + TaxonomyCode + "~";
                            segmentCount++;

                            #endregion

                            #endregion

                            #region LOOP 2010AA (Billing Provider Information)

                            #region Billing Provider Name

                            switch (box_33_type)
                            {
                                case "GROUP": // Group                                                        
                                    if (!string.IsNullOrEmpty(submitterCompanyName))
                                    {

                                        strBatchString += "NM1*85*2*";
                                        strBatchString += submitterCompanyName + "*****XX*";

                                    }
                                    else
                                    {
                                        errorList.Add("2010AA - Billing Provider Organization Name Missing.");
                                    }

                                    if (!string.IsNullOrEmpty(Billing_Provider_NPI))
                                    {
                                        strBatchString += Billing_Provider_NPI;
                                    }
                                    else
                                    {
                                        errorList.Add("2010AA - Billing Provider Group NPI Missing.");
                                    }
                                    break;
                                case "INDIVIDUAL": // Individual  
                                    if (!string.IsNullOrEmpty(claim.claimInfo.Bl_Lname)
                                            && string.IsNullOrEmpty(claim.claimInfo.Bl_Fname))
                                    {

                                        strBatchString += "NM1*85*1*";
                                        strBatchString += claim.claimInfo.Bl_Lname + "*" + claim.claimInfo.Bl_Fname + "*" + claim.claimInfo.Bl_Mi + "***XX*";

                                    }
                                    else
                                    {
                                        errorList.Add("2010AA - Billing Provider Name Missing.");
                                    }

                                    if (!string.IsNullOrEmpty(Billing_Provider_NPI))
                                    {
                                        strBatchString += Billing_Provider_NPI;
                                    }
                                    else
                                    {
                                        errorList.Add("2010AA - Billing Provider Individual NPI Missing.");
                                    }

                                    break;
                            }
                            strBatchString += "~";
                            segmentCount++;

                            #endregion

                            #region BILLING PROVIDER ADDRESS

                            switch (box_33_type)
                            {
                                case "GROUP": // Group                                                                               
                                    if (string.IsNullOrEmpty(claim.claimInfo.Bill_Address_Grp.Trim())
                                            || string.IsNullOrEmpty(claim.claimInfo.Bill_City_Grp.Trim())
                                            || string.IsNullOrEmpty(claim.claimInfo.Bill_State_Grp.Trim())
                                            || string.IsNullOrEmpty(claim.claimInfo.Bill_Zip_Grp.Trim()))
                                    {
                                        errorList.Add("BILLING ADDRESS ! Billing Provider Group Address is Missing.");
                                    }
                                    else
                                    {
                                        strBatchString += "N3*";
                                        strBatchString += claim.claimInfo.Bill_Address_Grp.Trim() + "~";
                                        segmentCount++;
                                        strBatchString += "N4*";
                                        strBatchString += claim.claimInfo.Bill_City_Grp.Trim() + "*";
                                        strBatchString += claim.claimInfo.Bill_State_Grp.Trim() + "*";
                                        if (string.IsNullOrEmpty(claim.claimInfo.Bill_Zip_Grp.Trim()))
                                        {
                                            strBatchString += "     ";
                                        }
                                        else
                                        {
                                            strBatchString += claim.claimInfo.Bill_Zip_Grp.Trim() + "~";
                                        }
                                        segmentCount++;
                                    }
                                    break;
                                case "INDIVIDUAL": // Individual  

                                    if (string.IsNullOrEmpty(claim.claimInfo.Bl_Address.Trim())
                                           || string.IsNullOrEmpty(claim.claimInfo.Bl_City.Trim())
                                           || string.IsNullOrEmpty(claim.claimInfo.Bl_State.Trim())
                                           || string.IsNullOrEmpty(claim.claimInfo.Bl_Zip.Trim()))
                                    {
                                        errorList.Add("BILLING ADDRESS ! Billing Provider Individual Address is Missing.");
                                    }
                                    else
                                    {
                                        strBatchString += "N3*";
                                        strBatchString += claim.claimInfo.Bl_Address.Trim() + "~";
                                        segmentCount++;
                                        strBatchString += "N4*";
                                        strBatchString += claim.claimInfo.Bl_City.Trim() + "*";
                                        strBatchString += claim.claimInfo.Bl_State.Trim() + "*";
                                        if (string.IsNullOrEmpty(claim.claimInfo.Bl_Zip.Trim()))
                                        {
                                            strBatchString += "     ";
                                        }
                                        else
                                        {
                                            strBatchString += claim.claimInfo.Bl_Zip.Trim() + "~";
                                        }
                                        segmentCount++;

                                    }

                                    break;
                            }


                            #endregion

                            #region BILLING PROVIDER Tax Identification
                            // hcfa box 25.. 
                            if (!string.IsNullOrEmpty(FederalTaxIDType) && !string.IsNullOrEmpty(FederalTaxID))
                            {
                                if (FederalTaxIDType.Equals("EIN"))
                                {
                                    strBatchString += "REF*EI*";
                                }
                                else if (FederalTaxIDType.Equals("SSN"))
                                {
                                    strBatchString += "REF*SY*";
                                }
                                strBatchString += FederalTaxID + "~";
                                segmentCount += 1;
                            }
                            else
                            {
                                errorList.Add("Billing provider federal tax id number/type missing.");
                            }

                            #endregion

                            #region  BILLING PROVIDER CONTACT INFORMATION
                            switch (FederalTaxIDType)
                            {
                                case "EIN":
                                    if (!string.IsNullOrEmpty(submitterCompanyName)
                                            && !string.IsNullOrEmpty(claim.claimInfo.Phone_No))
                                    {
                                        strBatchString += "PER*IC*" + submitterCompanyName;
                                        strBatchString += "*TE*" + claim.claimInfo.Phone_No.Replace("-", "").Replace("(", "").Replace(")", "").Replace(" ", "").Trim() + "~";
                                        segmentCount++;
                                    }
                                    else
                                    {
                                        errorList.Add("Billing Provider Contact Information Missing.");

                                    }
                                    break;
                                case "SSN":
                                    if (!string.IsNullOrEmpty(claim.claimInfo.Bl_Lname)
                                            && !string.IsNullOrEmpty(claim.claimInfo.Phone_No))
                                    {
                                        strBatchString += "PER*IC*" + claim.claimInfo.Bl_Lname;
                                        strBatchString += "*TE*" + claim.claimInfo.Phone_No.Replace("-", "").Replace("(", "").Replace(")", "").Replace(" ", "").Trim() + "~";
                                        segmentCount++;
                                    }
                                    else
                                    {
                                        errorList.Add("Billing Provider Contact Information Missing.");
                                    }
                                    break;
                            }
                            #endregion

                            #endregion

                            #region LOOP 2010AB (PAY-TO ADDRESS NAME)
                            switch (box_33_type)
                            {
                                case "GROUP": // Group                                                                               
                                    if (!string.IsNullOrEmpty(claim.claimInfo.Pay_To_Address_Grp.Trim())
                                            || !string.IsNullOrEmpty(claim.claimInfo.Pay_To_City_Grp.Trim())
                                            || !string.IsNullOrEmpty(claim.claimInfo.Pay_To_State_Grp.Trim())
                                            || !string.IsNullOrEmpty(claim.claimInfo.Pay_To_Zip_Grp.Trim()))
                                    {

                                        if (string.IsNullOrEmpty(claim.claimInfo.Pay_To_Address_Grp.Trim())
                                                || string.IsNullOrEmpty(claim.claimInfo.Pay_To_City_Grp.Trim())
                                                || string.IsNullOrEmpty(claim.claimInfo.Pay_To_State_Grp.Trim()))
                                        {
                                            errorList.Add("2010AB : Pay to Provider Group Address is incomplete.");
                                        }
                                        else
                                        {
                                            switch (FederalTaxIDType)
                                            {
                                                case "EIN":
                                                    strBatchString += "NM1*87*2~";
                                                    segmentCount++;
                                                    break;
                                                case "SSN":
                                                    strBatchString += "NM1*87*1~";
                                                    segmentCount++;
                                                    break;
                                            }

                                            strBatchString += "N3*";
                                            strBatchString += claim.claimInfo.Pay_To_Address_Grp + "~";
                                            segmentCount++;

                                            strBatchString += "N4*";
                                            strBatchString += claim.claimInfo.Pay_To_City_Grp.Trim() + "*";
                                            strBatchString += claim.claimInfo.Pay_To_State_Grp + "*";
                                            if (string.IsNullOrEmpty(claim.claimInfo.Pay_To_Zip_Grp.Trim()))
                                            {
                                                strBatchString += "     ";
                                            }
                                            else
                                            {
                                                strBatchString += claim.claimInfo.Pay_To_Zip_Grp.Trim() + "~";
                                            }
                                            segmentCount++;

                                        }
                                    }
                                    break;
                                case "INDIVIDUAL": // Individual  
                                    if (!string.IsNullOrEmpty(claim.claimInfo.Pay_To_Address.Trim())
                                            || !string.IsNullOrEmpty(claim.claimInfo.Pay_To_City.Trim())
                                            || !string.IsNullOrEmpty(claim.claimInfo.Pay_To_State.Trim())
                                            || !string.IsNullOrEmpty(claim.claimInfo.Pay_To_Zip.Trim()))
                                    {

                                        if (string.IsNullOrEmpty(claim.claimInfo.Pay_To_Address.Trim())
                                                || string.IsNullOrEmpty(claim.claimInfo.Pay_To_City.Trim())
                                                || string.IsNullOrEmpty(claim.claimInfo.Pay_To_State.Trim()))
                                        {
                                            errorList.Add("2010AB : Pay to Provider Individual Address is incomplete");
                                        }
                                        else
                                        {
                                            switch (FederalTaxIDType)
                                            {
                                                case "EIN":
                                                    strBatchString += "NM1*87*2~";
                                                    segmentCount++;
                                                    break;
                                                case "SSN":
                                                    strBatchString += "NM1*87*1~";
                                                    segmentCount++;
                                                    break;
                                            }

                                            strBatchString += "N3*";
                                            strBatchString += claim.claimInfo.Pay_To_Address + "~";
                                            segmentCount++;

                                            strBatchString += "N4*";
                                            strBatchString += claim.claimInfo.Pay_To_City.Trim() + "*";
                                            strBatchString += claim.claimInfo.Pay_To_State + "*";
                                            if (string.IsNullOrEmpty(claim.claimInfo.Pay_To_Zip.Trim()))
                                            {
                                                strBatchString += "     ";
                                            }
                                            else
                                            {
                                                strBatchString += claim.claimInfo.Pay_To_Zip.Trim() + "~";
                                            }
                                            segmentCount++;

                                        }
                                    }
                                    break;
                            }

                            #endregion


                            int P = HL;
                            HL = HL + 1;
                            int CHILD = 0;

                            string SBR02 = "18";


                            //---Extract Primar Secondary and Other Insurance Information before processing-----------
                            spGetBatchClaimsInsurancesInfo_Result primaryIns = null;
                            spGetBatchClaimsInsurancesInfo_Result SecondaryIns = null;
                            spGetBatchClaimsInsurancesInfo_Result otherIns = null;

                            if (claim.claimInsurance != null && claim.claimInsurance.Count > 0)
                            {
                                foreach (var ins in claim.claimInsurance)
                                {
                                    switch (ins.Insurace_Type.ToUpper().Trim())
                                    {
                                        case "P":
                                            primaryIns = ins;
                                            break;
                                        case "S":
                                            SecondaryIns = ins;
                                            break;
                                        case "O":
                                            otherIns = ins;
                                            break;
                                    }
                                }
                            }

                            //--End

                            if (claim.claimInsurance == null || claim.claimInsurance.Count == 0)
                            {
                                errorList.Add("Patient Insurance Information is missing.");
                            }
                            else if (primaryIns == null)
                            {
                                errorList.Add("Patient Primary Insurance Information is missing.");
                            }
                            else
                            {
                                if (!string.IsNullOrEmpty(primaryIns.GRelationship)
                           && primaryIns.GRelationship.Trim().ToUpper().Equals("S"))
                                {
                                    primaryIns.Glname = claim.claimInfo.Lname;
                                    primaryIns.Gfname = claim.claimInfo.Fname;
                                    primaryIns.Gmi = claim.claimInfo.Mname;
                                    primaryIns.Gaddress = claim.claimInfo.Address;
                                    primaryIns.Gcity = claim.claimInfo.City;
                                    primaryIns.Gdob = claim.claimInfo.Dob;
                                    primaryIns.Ggender = claim.claimInfo.Gender.ToString();
                                    primaryIns.Gstate = claim.claimInfo.State;
                                    primaryIns.Gzip = claim.claimInfo.Zip;
                                }


                                if (!primaryIns.GRelationship.Trim().ToUpper().Equals("S") && primaryIns.Guarantor_Id == null)
                                {
                                    errorList.Add("Subscriber information is missing.");

                                }
                                if (primaryIns.Inspayer_Id == null)
                                {
                                    errorList.Add("Payer's information is missing.");
                                }

                                if (
                                    !primaryIns.GRelationship.Trim().ToUpper().Equals("S")
                                    && !string.IsNullOrEmpty(primaryIns.GRelationship))
                                {
                                    SBR02 = "";
                                    CHILD = 1;
                                }


                                #region LOOP 2000B

                                #region HL: SUBSCRIBER HIERARCHICAL LEVEL
                                strBatchString += "HL*";
                                strBatchString += HL + "*" + P + "*";
                                strBatchString += "22*" + CHILD + "~";
                                segmentCount++;
                                #endregion

                                #region SBR: SUBSCRIBER INFORMATION
                                strBatchString += "SBR*";
                                if (primaryIns != null)
                                {
                                    strBatchString += "P";
                                }
                                else if (SecondaryIns != null)
                                {
                                    strBatchString += "S";
                                }
                                else if (otherIns != null)
                                {
                                    strBatchString += "T";
                                }
                                strBatchString += "*";
                                string groupNo = "";
                                string planName = "";
                                string payerTypeCode = "";

                                if (!string.IsNullOrEmpty(primaryIns.Group_Number))
                                {
                                    groupNo = primaryIns.Group_Number;
                                }
                                else
                                {
                                    groupNo = "";
                                }





                                if (!string.IsNullOrEmpty(primaryIns.Insgroup_Name) && primaryIns.Insgroup_Name.Equals("MEDICARE"))
                                {
                                    if (!string.IsNullOrEmpty(primaryIns.plan_name) && primaryIns.plan_name.ToUpper().Contains("MEDICARE"))
                                    {
                                        planName = primaryIns.plan_name;
                                    }
                                    else
                                    {
                                        planName = "MEDICARE";
                                    }
                                }
                                else
                                {
                                    planName = primaryIns.plan_name;
                                }

                                // MISSING [To Do]
                                //payerTypeCode = primaryIns.getPayertype_code()
                                payerTypeCode = primaryIns.insurance_type_code;


                                //---------***********************************-------------
                                strBatchString += SBR02 + "*" + groupNo + "*" + planName + "*****" + payerTypeCode + "~";
                                segmentCount++;
                                #endregion

                                #endregion

                                #region LOOP 2000BA (SUBSCRIBER Information)

                                strBatchString += "NM1*IL*1*";
                                if ((string.IsNullOrEmpty(primaryIns.Glname)
                                || string.IsNullOrEmpty(primaryIns.Gfname))
                                && string.IsNullOrEmpty(primaryIns.GRelationship)
                                && !primaryIns.GRelationship.Trim().ToUpper().Equals("S"))
                                {
                                    errorList.Add("Subscriber Last/First Name missing.");
                                }

                                //Entering Subscriber Information if Relationship is SELF-----
                                if (SBR02.Equals("18"))
                                {
                                    if (!isAlphaNumeric(claim.claimInfo.Lname)
                                        || !isAlphaNumeric(claim.claimInfo.Fname)
                                        )
                                    {
                                        errorList.Add("Subscriber Name must be Alpha Numeric.");
                                    }
                                    else
                                    {

                                        strBatchString += claim.claimInfo.Lname + "*"
                                                + claim.claimInfo.Fname + "*"
                                                + claim.claimInfo.Mname + "***MI*"
                                                + primaryIns.Policy_Number.ToUpper() + "~";
                                        segmentCount++;

                                    }

                                    if (string.IsNullOrEmpty(claim.claimInfo.Address)
                                        || string.IsNullOrEmpty(claim.claimInfo.City)
                                         || string.IsNullOrEmpty(claim.claimInfo.State)
                                         || string.IsNullOrEmpty(claim.claimInfo.Zip))
                                    {
                                        errorList.Add("Patient Address is incomplete.");
                                    }
                                    else
                                    {
                                        strBatchString += "N3*" + claim.claimInfo.Address + "~";
                                        segmentCount++;
                                        strBatchString += "N4*" + claim.claimInfo.City + "*"
                                                + claim.claimInfo.State + "*";
                                        strBatchString += (!string.IsNullOrEmpty(claim.claimInfo.Zip) ? claim.claimInfo.Zip : "     ") + "~";
                                        segmentCount++;
                                    }


                                    strBatchString += "DMG*D8*";
                                    if (string.IsNullOrEmpty(claim.claimInfo.Dob))
                                    {
                                        errorList.Add("Patient DOB is missing.");
                                    }
                                    else
                                    {
                                        strBatchString += !string.IsNullOrEmpty(claim.claimInfo.Dob) ? claim.claimInfo.Dob.Split('/')[0] + claim.claimInfo.Dob.Split('/')[1] + claim.claimInfo.Dob.Split('/')[2] : "";
                                        strBatchString += "*";
                                    }
                                    if (string.IsNullOrEmpty(claim.claimInfo.Gender.ToString()))
                                    {
                                        errorList.Add("Patient Gender is missing.");
                                    }
                                    else
                                    {
                                        strBatchString += claim.claimInfo.Gender.ToString();

                                    }
                                    strBatchString += "~";
                                    segmentCount++;
                                } //--END
                                else //---Entering Subscriber Information In case of other than SELF---------
                                {
                                    strBatchString += primaryIns.Glname + "*"
                                            + primaryIns.Gfname + "*"
                                            + primaryIns.Gmi + "***MI*"
                                            + primaryIns.Policy_Number.ToUpper() + "~";
                                    segmentCount++;

                                    if (string.IsNullOrEmpty(primaryIns.Gaddress)
                                       || string.IsNullOrEmpty(primaryIns.Gcity)
                                        || string.IsNullOrEmpty(primaryIns.Gstate)
                                        || string.IsNullOrEmpty(primaryIns.Gzip))
                                    {
                                        errorList.Add("Subscriber Address is incomplete.");
                                    }
                                    else
                                    {
                                        strBatchString += "N3*" + primaryIns.Gaddress + "~";
                                        segmentCount++;
                                        strBatchString += "N4*" + primaryIns.Gcity + "*"
                                                + primaryIns.Gstate + "*";
                                        strBatchString += (string.IsNullOrEmpty(primaryIns.Gzip) ? primaryIns.Gzip : "     ") + "~";
                                        segmentCount++;
                                    }


                                    strBatchString += "DMG*D8*";
                                    if (string.IsNullOrEmpty(primaryIns.Gdob))
                                    {
                                        errorList.Add("Subscriber DOB is missing.");
                                    }
                                    else
                                    {
                                        strBatchString += string.IsNullOrEmpty(primaryIns.Gdob) ? primaryIns.Gdob.Split('/')[0] + primaryIns.Gdob.Split('/')[1] + primaryIns.Gdob.Split('/')[2] : "";
                                        strBatchString += "*";
                                    }

                                    if (string.IsNullOrEmpty(primaryIns.Ggender))
                                    {
                                        errorList.Add("Subscriber Gender is missing.");
                                    }
                                    else
                                    {
                                        strBatchString += primaryIns.Ggender;

                                    }
                                    strBatchString += "~";
                                    segmentCount++;
                                }

                                #endregion

                                #region LOOP 2010BB (PAYER INFORMATION)

                                if (string.IsNullOrEmpty(primaryIns.plan_name))
                                {
                                    errorList.Add("Payer name missing.");

                                }
                                string paperPayerName = "";
                                if (!string.IsNullOrEmpty(primaryIns.plan_name) && primaryIns.plan_name.Trim().ToUpper().Equals("MEDICARE"))
                                {
                                    paperPayerName = "MEDICARE";
                                }
                                else
                                {
                                    paperPayerName = primaryIns.plan_name;
                                }

                                paperPayerID = primaryIns.Payer_Number;
                                if (!string.IsNullOrEmpty(paperPayerID))
                                {
                                    strBatchString += "NM1*PR*2*" + paperPayerName + "*****PI*" + paperPayerID + "~";
                                    segmentCount++;
                                }
                                else
                                {
                                    errorList.Add("Payer id is compulsory in case of Gateway EDI Clearing house.");
                                }
                                if (!string.IsNullOrEmpty(primaryIns.Insgroup_Name) && primaryIns.plan_name.Trim().ToUpper().Equals("WORK COMP"))
                                {
                                    if (string.IsNullOrEmpty(primaryIns.Sub_Empaddress)
                                            || string.IsNullOrEmpty(primaryIns.Sub_Emp_City)
                                            || string.IsNullOrEmpty(primaryIns.Sub_Emp_State)
                                            || string.IsNullOrEmpty(primaryIns.Sub_Emp_Zip))
                                    {
                                        errorList.Add("Payer is Worker Company, so its subscriber employer’s address is necessary.");

                                    }
                                    strBatchString += "N3*" + primaryIns.Sub_Empaddress + "~";
                                    segmentCount++;

                                    strBatchString += "N4*" + primaryIns.Sub_Emp_City + "*"
                                            + primaryIns.Sub_Emp_State + "*";
                                    if (!string.IsNullOrEmpty(primaryIns.Sub_Emp_Zip))
                                    {
                                        strBatchString += primaryIns.Sub_Emp_Zip;

                                    }
                                    else
                                    {
                                        strBatchString += "     ";
                                    }
                                    strBatchString += "~";
                                    segmentCount++;
                                }
                                else
                                {
                                    if (string.IsNullOrEmpty(primaryIns.Ins_Address)
                                            || string.IsNullOrEmpty(primaryIns.Ins_City)
                                            || string.IsNullOrEmpty(primaryIns.Ins_State)
                                            || string.IsNullOrEmpty(primaryIns.Ins_Zip))
                                    {
                                        errorList.Add("Payer address incomplete.");
                                    }
                                    strBatchString += "N3*" + primaryIns.Ins_Address;
                                    strBatchString += "~";
                                    segmentCount++;

                                    strBatchString += "N4*" + primaryIns.Ins_City + "*" + primaryIns.Ins_State + "*";
                                    strBatchString += (string.IsNullOrEmpty(primaryIns.Ins_Zip)) ? "     " : primaryIns.Ins_Zip.Trim();
                                    strBatchString += "~";
                                    segmentCount++;
                                }

                                #endregion

                                #region LOOP 2010C , 2010CA

                                if (!string.IsNullOrEmpty(primaryIns.GRelationship)
                                   && !primaryIns.GRelationship.ToUpper().Trim().Equals("S"))
                                {

                                    #region LOOP 2000C

                                    #region HL : (PATIENT HIERARCHICAL LEVEL)
                                    int PHL = HL;
                                    HL++;
                                    strBatchString += "HL*" + HL + "*" + PHL + "*23*0~";
                                    segmentCount++;
                                    #endregion


                                    #region PAT : (PATIENT RELATIONAL INFORMATION)
                                    strBatchString += "PAT*";
                                    String temp = "";
                                    if (string.IsNullOrEmpty(primaryIns.GRelationship))
                                    {
                                        errorList.Add("Subscriber relationship is missing.");
                                    }
                                    else
                                    {
                                        if (primaryIns.GRelationship.Trim().ToUpper().Equals("S"))
                                        {
                                            temp = "18";
                                        }
                                        else if (primaryIns.GRelationship.Trim().ToUpper().Equals("P"))
                                        {
                                            temp = "01";
                                        }
                                        else if (primaryIns.GRelationship.Trim().ToUpper().Equals("C"))
                                        {
                                            temp = "19";
                                        }
                                        else if (primaryIns.GRelationship.Trim().ToUpper().Equals("O"))
                                        {
                                            temp = "G8";
                                        }
                                    }

                                    strBatchString += temp + "****D8***~";
                                    segmentCount++;
                                    #endregion

                                    #endregion


                                    #region LOOP 2010CA

                                    #region PATIENT NAME INFORMATION
                                    strBatchString += "NM1*QC*1*";

                                    //----ENTERING PATIENT INFORMATION NOW------------
                                    strBatchString += claim.claimInfo.Lname + "*";
                                    strBatchString += claim.claimInfo.Fname + "*";
                                    strBatchString += claim.claimInfo.Mname + "***MI*";
                                    if (string.IsNullOrEmpty(primaryIns.Policy_Number))
                                    {
                                        errorList.Add("Subscriber policy number  missing.");
                                    }
                                    strBatchString += primaryIns.Policy_Number.ToUpper() + "~";
                                    segmentCount++;
                                    strBatchString += "N3*" + claim.claimInfo.Address.Trim() + "~";
                                    segmentCount++;
                                    strBatchString += "N4*" + claim.claimInfo.City.Trim() + "*" + claim.claimInfo.State.Trim() + "*"
                                            + claim.claimInfo.Zip.Trim() + "~";
                                    segmentCount++;

                                    if (string.IsNullOrEmpty(claim.claimInfo.Gender.ToString()))
                                    {
                                        errorList.Add("Patient gender missing.");
                                    }

                                    strBatchString += "DMG*D8*" + claim.claimInfo.Dob.Split('/')[0] + claim.claimInfo.Dob.Split('/')[1] + claim.claimInfo.Dob.Split('/')[2] + "*" + claim.claimInfo.Gender.ToString() + "~";
                                    segmentCount++;
                                    #endregion

                                    #endregion

                                }

                                #endregion

                                HL++;

                                #region LOOP 2300
                                strBatchString += "CLM*" + claim.claim_No + "*";

                                decimal total_amount = 0;

                                if (claim.claimInfo.Is_Resubmitted)
                                {
                                    foreach (var proc in claim.claimProcedures)
                                    {
                                        if (proc.Is_Resubmitted)
                                        {
                                            total_amount = total_amount + (decimal)proc.Total_Charges;
                                        }
                                    }

                                }
                                else
                                {
                                    total_amount = claim.claimInfo.Claim_Total;
                                }


                                string ClaimFrequencyCode = (bool)claim.claimInfo.Is_Corrected ? claim.claimInfo.RSCode.ToString() : "1";
                                string PatFirstVisitDatesegmentCount = "";

                                strBatchString += string.Format("{0:0.00}", total_amount) + "***" + claim.claimInfo.Claim_Pos + ":B:" + ClaimFrequencyCode + "*Y*A*Y*Y*P"; // 5010


                                #region Accident Info
                                int isErrorInAccident = 0;

                                if (!string.IsNullOrEmpty(claim.claimInfo.Accident_Type))
                                {

                                    switch (claim.claimInfo.Accident_Type.ToUpper())
                                    {
                                        case "OA":
                                            strBatchString += "*OA";
                                            break;
                                        case "AA":
                                            strBatchString += "*AA";
                                            break;
                                        case "EM":
                                            strBatchString += "*EM";
                                            break;
                                        default:
                                            isErrorInAccident = 1;
                                            break;
                                    }


                                    if (isErrorInAccident == 0)
                                    {
                                        if (!string.IsNullOrEmpty(claim.claimInfo.Accident_State))
                                        {
                                            strBatchString += ":::" + claim.claimInfo.Accident_State + "~";
                                            segmentCount++;
                                        }
                                        else
                                        {
                                            if (claim.claimInfo.Accident_Type.ToUpper().Equals("OA")
                                                || claim.claimInfo.Accident_Type.ToUpper().Equals("EM"))
                                            {
                                                strBatchString += "~";
                                                segmentCount++;
                                            }
                                            else
                                            {
                                                isErrorInAccident = 2;
                                            }
                                        }

                                        if (isErrorInAccident == 0)
                                        {
                                            #region DATE  ACCIDENT
                                            strBatchString += "DTP*439*D8*";
                                            if (!string.IsNullOrEmpty(claim.claimInfo.Accident_Date) && !claim.claimInfo.Accident_Date.Equals("1900/01/01"))
                                            {
                                                string[] splitedAccidentDate = claim.claimInfo.Accident_Date.Split('/');
                                                if (splitedAccidentDate.Count() != 3)
                                                {
                                                    isErrorInAccident = 3;
                                                }
                                                strBatchString += splitedAccidentDate[0] + splitedAccidentDate[1] + splitedAccidentDate[2] + "~";
                                                segmentCount++;
                                            }
                                            else
                                            {
                                                isErrorInAccident = 4;
                                            }

                                            #endregion
                                        }
                                    }
                                }
                                else
                                {
                                    strBatchString += "~";
                                    segmentCount++;
                                }
                                #endregion

                                #region DATE - INITIAL TREATMENT
                                if (!string.IsNullOrEmpty(PatFirstVisitDatesegmentCount))
                                {
                                    strBatchString += PatFirstVisitDatesegmentCount;
                                    segmentCount++;
                                }

                                #endregion

                                #region DATE -  Last X-Ray Date

                                if (!string.IsNullOrEmpty(claim.claimInfo.Last_Xray_Date) && !claim.claimInfo.Last_Xray_Date.Equals("1900/01/01"))
                                {
                                    string[] spltdlastXrayDate = claim.claimInfo.Last_Xray_Date.Split('/');
                                    string LastXrayDate = spltdlastXrayDate[0] + spltdlastXrayDate[1] + spltdlastXrayDate[2];
                                    strBatchString += "DTP*455*D8*" + LastXrayDate + "~";
                                    segmentCount++;
                                }

                                #endregion

                                #region DATE - ADMISSION (HOSPITALIZATION)


                                if (!string.IsNullOrEmpty(claim.claimInfo.Hospital_From) && !claim.claimInfo.Hospital_From.Equals("1900/01/01"))
                                {
                                    string[] spltdHospitalFromDate = claim.claimInfo.Hospital_From.Split('/');
                                    if (spltdHospitalFromDate.Count() != 3)
                                    {
                                        isErrorInAccident = 3;
                                    }
                                    string hospitalFromDate = spltdHospitalFromDate[0] + spltdHospitalFromDate[1] + spltdHospitalFromDate[2];
                                    strBatchString += "DTP*435*D8*" + hospitalFromDate + "~";
                                    segmentCount++;
                                }

                                #endregion


                                if (isErrorInAccident >= 1)
                                {
                                    if (isErrorInAccident == 1)
                                    {
                                        errorList.Add("Accident Type is missing.");
                                    }
                                    else if (isErrorInAccident == 2)
                                    {
                                        errorList.Add("State of accident is necessary.");
                                    }
                                    else if (isErrorInAccident == 3)
                                    {
                                        errorList.Add("Format of date of accident is not correct.");
                                    }
                                    else if (isErrorInAccident == 4)
                                    {
                                        errorList.Add("Date of accident is missing.");
                                    }
                                }


                                #region PRIOR AUTHORIZATION
                                if (!string.IsNullOrEmpty(claim.claimInfo.Prior_Authorization))
                                {
                                    strBatchString += "REF*G1*" + claim.claimInfo.Prior_Authorization + "~";
                                    segmentCount++;
                                }
                                #endregion

                                #region PAYER CLAIM CONTROL NUMBER
                                if (!string.IsNullOrEmpty(claim.claimInfo.Claim_Number))
                                {
                                    strBatchString += "REF*F8*" + claim.claimInfo.Claim_Number + "~";
                                    segmentCount++;
                                }
                                #endregion

                                #region CLINICAL LABORATORY IMPROVEMENT AMENDMENT (CLIA) NUMBER
                                if (!string.IsNullOrEmpty(claim.claimInfo.Clia_Number))
                                {
                                    strBatchString += "REF*X4*" + claim.claimInfo.Clia_Number + "~";
                                    segmentCount++;
                                }
                                #endregion

                                #region National Clinical trial Number (NCT)

                                if (!string.IsNullOrEmpty(claim.claimInfo.Additional_Claim_Info)&&claim.claimInfo.Additional_Claim_Info.StartsWith("CT") && claim.claimInfo.Additional_Claim_Info.Length > 2)
                                {
                                    string newValue = claim.claimInfo.Additional_Claim_Info.Substring(2);
                                    if (!string.IsNullOrEmpty(newValue))
                                    {
                                        strBatchString += "REF*P4*" + newValue + "~";
                                        segmentCount++;
                                    }
                                }
                                
                                #endregion

                                #region CLAIM NOTE (LUO)
                                if (!string.IsNullOrEmpty(claim.claimInfo.Luo))
                                {
                                    strBatchString += "NTE*ADD*" + claim.claimInfo.Luo + "~";
                                    segmentCount++;
                                }
                                #endregion

                                #region HEALTH CARE DIAGNOSIS CODE

                                strBatchString += "HI*";

                                // ICD-10 Claim
                                if ((bool)claim.claimInfo.Icd_10_Claim)
                                {
                                    strBatchString += "ABK:";  // BK=ICD-9 ABK=ICD-10
                                }
                                else // ICD-9 Claim
                                {
                                    strBatchString += "BK:";  // BK=ICD-9 ABK=ICD-10 
                                }

                                //Adding claim ICDS Diagnosis COdes
                                int diagCount = 0;
                                if (claim.claimDiagnosis != null)
                                {
                                    if (!string.IsNullOrEmpty(claim.claimDiagnosis.DX_Code1))
                                    {
                                        strBatchString += appendDxCodesegmentCount(diagCount, (bool)claim.claimInfo.Icd_10_Claim, claim.claimDiagnosis.DX_Code1);
                                        diagCount++;
                                    }

                                    if (!string.IsNullOrEmpty(claim.claimDiagnosis.DX_Code2))
                                    {
                                        strBatchString += appendDxCodesegmentCount(diagCount, (bool)claim.claimInfo.Icd_10_Claim, claim.claimDiagnosis.DX_Code2);
                                        diagCount++;
                                    }

                                    if (!string.IsNullOrEmpty(claim.claimDiagnosis.DX_Code3))
                                    {
                                        strBatchString += appendDxCodesegmentCount(diagCount, (bool)claim.claimInfo.Icd_10_Claim, claim.claimDiagnosis.DX_Code3);
                                        diagCount++;
                                    }
                                    if (!string.IsNullOrEmpty(claim.claimDiagnosis.DX_Code4))
                                    {
                                        strBatchString += appendDxCodesegmentCount(diagCount, (bool)claim.claimInfo.Icd_10_Claim, claim.claimDiagnosis.DX_Code4);
                                        diagCount++;
                                    }
                                    if (!string.IsNullOrEmpty(claim.claimDiagnosis.DX_Code5))
                                    {
                                        strBatchString += appendDxCodesegmentCount(diagCount, (bool)claim.claimInfo.Icd_10_Claim, claim.claimDiagnosis.DX_Code5);
                                        diagCount++;
                                    }
                                    if (!string.IsNullOrEmpty(claim.claimDiagnosis.DX_Code6))
                                    {
                                        strBatchString += appendDxCodesegmentCount(diagCount, (bool)claim.claimInfo.Icd_10_Claim, claim.claimDiagnosis.DX_Code6);
                                        diagCount++;
                                    }
                                    if (!string.IsNullOrEmpty(claim.claimDiagnosis.DX_Code7))
                                    {
                                        strBatchString += appendDxCodesegmentCount(diagCount, (bool)claim.claimInfo.Icd_10_Claim, claim.claimDiagnosis.DX_Code7);
                                        diagCount++;
                                    }
                                    if (!string.IsNullOrEmpty(claim.claimDiagnosis.DX_Code8))
                                    {
                                        strBatchString += appendDxCodesegmentCount(diagCount, (bool)claim.claimInfo.Icd_10_Claim, claim.claimDiagnosis.DX_Code8);
                                        diagCount++;
                                    }
                                    if (!string.IsNullOrEmpty(claim.claimDiagnosis.DX_Code9))
                                    {
                                        strBatchString += appendDxCodesegmentCount(diagCount, (bool)claim.claimInfo.Icd_10_Claim, claim.claimDiagnosis.DX_Code9);
                                        diagCount++;
                                    }
                                    if (!string.IsNullOrEmpty(claim.claimDiagnosis.DX_Code10))
                                    {
                                        strBatchString += appendDxCodesegmentCount(diagCount, (bool)claim.claimInfo.Icd_10_Claim, claim.claimDiagnosis.DX_Code10);
                                        diagCount++;
                                    }
                                    if (!string.IsNullOrEmpty(claim.claimDiagnosis.DX_Code11))
                                    {
                                        strBatchString += appendDxCodesegmentCount(diagCount, (bool)claim.claimInfo.Icd_10_Claim, claim.claimDiagnosis.DX_Code11);
                                        diagCount++;
                                    }
                                    if (!string.IsNullOrEmpty(claim.claimDiagnosis.DX_Code12))
                                    {
                                        strBatchString += appendDxCodesegmentCount(diagCount, (bool)claim.claimInfo.Icd_10_Claim, claim.claimDiagnosis.DX_Code12);
                                        diagCount++;
                                    }
                                }
                                if (diagCount == 0)
                                {
                                    if ((bool)claim.claimInfo.Icd_10_Claim)
                                    {
                                        errorList.Add("HI*ABK:ABF!Claims Diagnosis (ICD-10) are missing.");
                                    }
                                    else
                                    {
                                        errorList.Add("HI*BK:BF!Claims Diagnosis (ICD-9) are missing.");
                                    }


                                }
                                strBatchString += "~";
                                segmentCount++;


                                #endregion

                                #endregion

                                #region LOOP 2310A (REFERRING PROVIDER)
                                if (claim.claimInfo.Referring_Physician != null)
                                {
                                    if (!string.IsNullOrEmpty(claim.claimInfo.Ref_Npi))
                                    {

                                        if (!isAlphaNumeric(claim.claimInfo.Ref_Lname)
                                                || !isAlphaNumeric(claim.claimInfo.Ref_Fname))
                                        {
                                            errorList.Add("Referring provider’s Name must be Alpha Numeric..");
                                        }
                                        else
                                        {
                                            strBatchString += "NM1*DN*1*" + claim.claimInfo.Ref_Lname + "*"
                                                    + claim.claimInfo.Ref_Fname + "****XX*"
                                                    + claim.claimInfo.Ref_Npi + "~";

                                            segmentCount++;
                                        }
                                    }
                                    else
                                    {
                                        errorList.Add("Referring provider’s NPI is missing.");
                                    }
                                }
                                #endregion

                                #region LOOP 2310B (RENDERING PROVIDER)
                                if (claim.claimInfo.Attending_Physician != null)
                                {
                                    #region RENDERING PROVIDER NAME
                                    if (!string.IsNullOrEmpty(claim.claimInfo.Att_Npi))
                                    {

                                        if (!isAlphaNumeric(claim.claimInfo.Att_Lname)
                                                && !isAlphaNumeric(claim.claimInfo.Att_Fname))
                                        {
                                            errorList.Add("Rendering provider’s Name must be Alpha Numeric.");
                                        }
                                        else
                                        {
                                            strBatchString += "NM1*82*1*" + claim.claimInfo.Att_Lname + "*"
                                                    + claim.claimInfo.Att_Fname + "****XX*"
                                                    + claim.claimInfo.Att_Npi + "~";

                                            segmentCount++;
                                        }

                                    }
                                    else
                                    {
                                        errorList.Add("Rendering Provider NPI Missing.");

                                    }
                                    #endregion

                                    #region RENDERING PROVIDER SPECIALTY INFORMATION

                                    if (!string.IsNullOrEmpty(claim.claimInfo.Att_Taxonomy_Code))
                                    {
                                        strBatchString += "PRV*PE*PXC*" + claim.claimInfo.Att_Taxonomy_Code + "~"; //5010 CODE CHAGED FROM ZZ TO PXC
                                        segmentCount++;
                                    }
                                    else
                                    {
                                        errorList.Add("Gateway edi require Rendering Provider Taxonomy Code.");
                                    }
                                    #endregion

                                    #region RENDERING PROVIDER SPECIALTY INFORMATION                                
                                    if (!string.IsNullOrEmpty(claim.claimInfo.Att_State_License))
                                    {

                                        strBatchString += "REF*0B*" + claim.claimInfo.Att_State_License + "~";
                                        segmentCount++;
                                    }
                                    #endregion

                                }
                                else
                                {
                                    errorList.Add("Rendering Provider Information missing..");
                                }
                                #endregion

                               

                                #region LOOP 2310C (SERVICE FACILITY LOCATION)
                          
                             
                                    if (claim.claimInfo.Facility_Code != 0)
                                    {

                                        if (!string.IsNullOrEmpty(claim.claimInfo.Facility_Npi))
                                        {
                                            strBatchString += "NM1*77*2*" + claim.claimInfo.Facility_Name + "*****XX*"
                                                    + claim.claimInfo.Facility_Npi + "~";
                                        }
                                        else
                                        {
                                            strBatchString += "NM1*77*2*" + claim.claimInfo.Facility_Name + "*****XX*~";
                                        }
                                        segmentCount++;

                                        if (string.IsNullOrEmpty(claim.claimInfo.Facility_Address)
                                                || string.IsNullOrEmpty(claim.claimInfo.Facility_City)
                                                || string.IsNullOrEmpty(claim.claimInfo.Facility_State)
                                                || string.IsNullOrEmpty(claim.claimInfo.Facility_Zip))
                                        {
                                            errorList.Add("Facility's address incomplete.");
                                        }

                                        strBatchString += "N3*" + claim.claimInfo.Facility_Address + "~";
                                        segmentCount++;
                                        strBatchString += "N4*" + claim.claimInfo.Facility_City + "*"
                                                + claim.claimInfo.Facility_State + "*";
                                        if (string.IsNullOrEmpty(claim.claimInfo.Facility_Zip))
                                        {
                                            strBatchString += "     " + "~";
                                        }
                                        else
                                        {
                                            strBatchString += claim.claimInfo.Facility_Zip + "~";
                                        }
                                        segmentCount++;
                                    }
                               
                               
                                #endregion


                                if (SecondaryIns != null)
                                {
                                    #region LOOP 2320

                                    #region OTHER SUBSCRIBER INFORMATION

                                    string SBR02_secondary = "18";

                                    if (!string.IsNullOrEmpty(SecondaryIns.GRelationship))
                                    {
                                        switch (SecondaryIns.GRelationship.ToUpper())
                                        {
                                            case "C":// Child
                                                SBR02_secondary = "19";
                                                break;
                                            case "P"://SPOUSE
                                                SBR02_secondary = "01";
                                                break;
                                            case "S"://Self
                                                SBR02_secondary = "18";
                                                break;
                                            case "O": // Other
                                                SBR02_secondary = "G8";
                                                break;
                                        }
                                    }

                                    strBatchString += "SBR*S*";
                                    string PlanNameSec = "", InsPayerTypeCodeSec = "", payerTypeCodeSec = "";

                                    if (!string.IsNullOrEmpty(SecondaryIns.Insgroup_Name) && SecondaryIns.Insgroup_Name.Contains("MEDICARE"))
                                    {
                                        if (!string.IsNullOrEmpty(SecondaryIns.plan_name) && SecondaryIns.plan_name.ToUpper().Contains("MEDICARE"))
                                        {
                                            PlanNameSec = SecondaryIns.plan_name;
                                        }
                                        else
                                        {
                                            PlanNameSec = "MEDICARE";
                                        }

                                        payerTypeCodeSec = "47"; //5010 required in case of medicare is secondary or ter.
                                        /*                        
                                         12	Medicare Secondary Working Aged Beneficiary or Spouse with Employer Group Health Plan
                                         13	Medicare Secondary End Stage Renal Disease
                                         14	Medicare Secondary , No Fault Insurance including Auto is Primary
                                         15	Medicare Secondary Worker’s Compensation
                                         16	Medicare Secondary Public Health Service (PHS) or other Federal Agency
                                         16	Medicare Secondary Public Health Service
                                         41	Medicare Secondary Black Lung
                                         42	Medicare Secondary Veteran’s Administration
                                         43	Medicare Secondary Veteran’s Administration
                                         47	Medicare Secondary, Other Liability Insurance is Primary
                                         */

                                    }
                                    else
                                    {
                                        PlanNameSec = SecondaryIns.plan_name;
                                        payerTypeCodeSec = SecondaryIns.insurance_type_code;
                                    }


                                    strBatchString += SBR02_secondary + "*" + SecondaryIns.Group_Number + "*" + PlanNameSec + "*" + InsPayerTypeCodeSec + "****" + payerTypeCodeSec + "~";
                                    segmentCount++;

                                    #endregion

                                    #region OTHER INSURANCE COVERAGE INFORMATION

                                    if (!string.IsNullOrEmpty(SecondaryIns.GRelationship)
                               && SecondaryIns.GRelationship.ToUpper().Equals("S"))
                                    {
                                        strBatchString += "OI***Y*P**Y~"; //- Changed C to P as per 5010
                                        segmentCount++;

                                    }
                                    else
                                    {
                                        strBatchString += "OI***Y*P**Y~"; //- Changed C to P as per 5010
                                        segmentCount++;
                                    }


                                    #endregion

                                    #endregion

                                    #region LOOP 2330A (OTHER SUBSCRIBER NAME and Address)
                                    if (!string.IsNullOrEmpty(SecondaryIns.GRelationship)
                                && SecondaryIns.GRelationship.ToUpper().Trim().Equals("S"))
                                    {

                                        strBatchString += "NM1*IL*1*";

                                        if (string.IsNullOrEmpty(claim.claimInfo.Lname) || string.IsNullOrEmpty(claim.claimInfo.Fname))
                                        {
                                            errorList.Add("Self -- Secondary Insurnace'subscriber Last/First Name missing.");
                                        }
                                        else
                                        {
                                            strBatchString += claim.claimInfo.Lname + "*"
                                                    + claim.claimInfo.Fname + "*"
                                                    + claim.claimInfo.Mname + "***MI*"
                                                    + SecondaryIns.Policy_Number.ToUpper() + "~";
                                            segmentCount++;
                                        }
                                        if (string.IsNullOrEmpty(claim.claimInfo.Address)
                                                || string.IsNullOrEmpty(claim.claimInfo.City)
                                                || string.IsNullOrEmpty(claim.claimInfo.State)
                                                || string.IsNullOrEmpty(claim.claimInfo.Zip))
                                        {
                                            errorList.Add("Self -- Subscriber Address incomplete.");
                                        }
                                        else
                                        {
                                            strBatchString += "N3*" + claim.claimInfo.Address + "~";
                                            segmentCount++;

                                            strBatchString += "N4*" + claim.claimInfo.City + "*"
                                                    + claim.claimInfo.State + "*";
                                            if (string.IsNullOrEmpty(claim.claimInfo.Zip))
                                            {
                                                strBatchString += "     " + "~";
                                            }
                                            else
                                            {
                                                strBatchString += claim.claimInfo.Zip + "~";
                                            }
                                            segmentCount++;
                                        }
                                    }
                                    else
                                    {
                                        strBatchString += "NM1*IL*1*";

                                        if (string.IsNullOrEmpty(SecondaryIns.Glname) || string.IsNullOrEmpty(SecondaryIns.Gfname))
                                        {
                                            errorList.Add("Secondary Insurnace'subscriber Last/First Name missing.");

                                        }
                                        else
                                        {
                                            strBatchString += SecondaryIns.Glname + "*"
                                                    + SecondaryIns.Gfname + "*"
                                                    + SecondaryIns.Gmi + "***MI*"
                                                    + SecondaryIns.Policy_Number.ToUpper() + "~";
                                            segmentCount++;
                                        }
                                        if (string.IsNullOrEmpty(SecondaryIns.Gaddress)
                                                || string.IsNullOrEmpty(SecondaryIns.Gcity)
                                                || string.IsNullOrEmpty(SecondaryIns.Gstate)
                                                || string.IsNullOrEmpty(SecondaryIns.Gzip))
                                        {
                                            errorList.Add("Secondary Subscriber Address incomplete.");
                                        }
                                        else
                                        {
                                            strBatchString += "N3*" + SecondaryIns.Gaddress + "~";
                                            segmentCount++;

                                            strBatchString += "N4*" + SecondaryIns.Gcity + "*"
                                                    + SecondaryIns.Gstate + "*";
                                            if (string.IsNullOrEmpty(SecondaryIns.Gzip))
                                            {
                                                strBatchString += "     " + "~";
                                            }
                                            else
                                            {
                                                strBatchString += SecondaryIns.Gzip + "~";
                                            }
                                            segmentCount++;
                                        }
                                    }
                                    #endregion


                                    #region LOOP 2330B (OTHER PAYER AND AND ADDRESS)
                                    string SecInsPayerName = "";
                                    if (string.IsNullOrEmpty(SecondaryIns.plan_name))
                                    {
                                        errorList.Add("Secondary's payer name missing.");
                                    }
                                    else
                                    {
                                        if (SecondaryIns.Insgroup_Name.Trim().Contains("MEDICARE"))
                                        {
                                            SecInsPayerName = "MEDICARE";
                                        }
                                        else
                                        {
                                            SecInsPayerName = SecondaryIns.plan_name;
                                        }
                                    }
                                    if (!string.IsNullOrEmpty(SecondaryIns.Payer_Number))
                                    {
                                        string secPayerNumber = primaryIns.Payer_Number.Equals(SecondaryIns.Payer_Number) ? SecondaryIns.Payer_Number + "A" : SecondaryIns.Payer_Number;
                                        strBatchString += "NM1*PR*2*" + SecInsPayerName + "*****PI*" + secPayerNumber + "~";
                                        segmentCount++;
                                    }
                                    else
                                    {
                                        errorList.Add("Secondary's insurance payer id is compulsory in case of Gateway EDI Clearing house.");
                                    }

                                    //Obsolete
                                    //strBatchString += "N3*" + SecondaryIns.Gaddress + "~";
                                    //segmentCount++;
                                    //strBatchString += "N4*" + SecondaryIns.Gcity + "*" + SecondaryIns.Gstate + "*" + SecondaryIns.Gzip.Trim() + "~";
                                    //segmentCount++;

                                    strBatchString += "N3*" + SecondaryIns.Ins_Address + "~";
                                    segmentCount++;
                                    strBatchString += "N4*" + SecondaryIns.Ins_City + "*" + SecondaryIns.Ins_State + "*" + SecondaryIns.Ins_Zip.Trim() + "~";
                                    segmentCount++;

                                    #endregion
                                }


                                //---Adding Submit/RESUBMIT CLAIM CPTS-----------
                                int line_no = 0;
                                if (claim.claimProcedures != null && claim.claimProcedures.Count() > 0)
                                {
                                    foreach (var proc in claim.claimProcedures)
                                    {

                                        if (claim.claimInfo.Is_Resubmitted && !proc.Is_Resubmitted)
                                        {
                                            continue;
                                        }

                                        line_no = line_no + 1;

                                        #region LOOP 2400

                                        #region SERVICE LINE                
                                        strBatchString += "LX*" + line_no + "~";
                                        segmentCount++;
                                        #endregion

                                          
                                        #region PROFESSIONAL SERVICE
                                        if (!string.IsNullOrEmpty(claim.claimInfo.Claim_Pos))
                                        {

                                            if (proc.Total_Charges > 0)
                                            {
                                                string modifiers = "";
                                                if (!string.IsNullOrEmpty(proc.Mod1.Trim()))
                                                {
                                                    modifiers += ":" + proc.Mod1.Trim();
                                                }
                                                else
                                                {
                                                    modifiers += ":";
                                                }
                                                if (!string.IsNullOrEmpty(proc.Mod2.Trim()))
                                                {
                                                    modifiers += ":" + proc.Mod2.Trim();
                                                }
                                                else
                                                {
                                                    modifiers += ":";
                                                }
                                                if (!string.IsNullOrEmpty(proc.Mod3.Trim()))
                                                {
                                                    modifiers += ":" + proc.Mod3.Trim();
                                                }
                                                else
                                                {
                                                    modifiers += ":";
                                                }
                                                if (!string.IsNullOrEmpty(proc.Mod4.Trim()))
                                                {
                                                    modifiers += ":" + proc.Mod4.Trim();
                                                }
                                                else
                                                {
                                                    modifiers += ":";
                                                }

                                                strBatchString += "SV1*HC:" + proc.Proc_Code.Trim() + modifiers +":"+proc.ProcedureDescription+ "*"
                                                        + string.Format("{0:0.00}", proc.Total_Charges) + "*UN*"
                                                        + proc.Units + "*"
                                                        + claim.claimInfo.Claim_Pos + "*"
                                                        + "*";
                                            }
                                            else
                                            {
                                                errorList.Add("Procedure Code:  " + proc.Proc_Code.Trim() + " has ZERO charges");
                                            }
                                        }
                                        else
                                        {
                                            errorList.Add("Claim's pos code missing");
                                        }

                                        string pointers = "";
                                        if (proc.Dx_Pointer1 > 0)
                                        {
                                            pointers = proc.Dx_Pointer1.ToString();
                                        }
                                        if (proc.Dx_Pointer2 > 0)
                                        {
                                            pointers += ":" + proc.Dx_Pointer1.ToString();
                                        }
                                        if (proc.Dx_Pointer3 > 0)
                                        {
                                            pointers += ":" + proc.Dx_Pointer3.ToString();
                                        }
                                        if (proc.Dx_Pointer4 > 0)
                                        {
                                            pointers += ":" + proc.Dx_Pointer4.ToString();
                                        }

                                        strBatchString += pointers + "~";
                                        segmentCount++;

                                        #endregion

                                        #region SERVICE Date
                                  
                                        strBatchString += "DTP*472*RD8*";

                                        string[] splittedFROMDOS = proc.DosFrom.Split('/');
                                        string[] splittedTODOS = proc.Dos_To.Split('/');
                                        string Date_Of_Service_FROM = splittedFROMDOS[0] + splittedFROMDOS[1] + splittedFROMDOS[2];
                                        string Date_Of_Service_TO = splittedTODOS[0] + splittedTODOS[1] + splittedTODOS[2];
                                        strBatchString += Date_Of_Service_FROM + "-" + Date_Of_Service_TO + "~";
                                        segmentCount++;
                                        #endregion

                                        #region LINE ITEM CONTROL NUMBER (CLAIM PROCEDURES ID)
                                        strBatchString += "REF*6R*" + proc.Claim_Procedures_Id.ToString() + "~";
                                        segmentCount++;
                                        #endregion

                                        #region LINE Note
                                        if (!string.IsNullOrEmpty(proc.Notes.Trim()))
                                        {
                                            strBatchString += "NTE*ADD*" + proc.Notes.Trim() + "~";
                                            segmentCount++;
                                        }

                                        #endregion

                                        #endregion


                                        #region LOOP 2410 (DRUG IDENTIFICATION)


                                        if (!string.IsNullOrEmpty(proc.Ndc_Code))
                                        {
                                            strBatchString += "LIN**N4*" + proc.Ndc_Code.Trim() + "~";
                                            segmentCount++;
                                            if (proc.Ndc_Qty > 0)
                                            {
                                                if (!string.IsNullOrEmpty(proc.Ndc_Measure))
                                                {
                                                    strBatchString += "CTP****" + proc.Ndc_Qty.ToString() + "*" + proc.Ndc_Measure + "*~";
                                                    segmentCount++;
                                                }
                                                else
                                                {
                                                    errorList.Add("Procedure NDC Quantity/Qual or Unit Price is missing.");
                                                }
                                            }

                                        }

                                        #endregion
                                    }
                                }
                                if (line_no == 0)
                                {
                                    errorList.Add("Claim Procedures missing.");
                                }
                            }
                        }

                    }
                }


                if (errorList.Count == 0)
                {
                    segmentCount += 3;
                    strBatchString += "SE*" + segmentCount + "*0001~GE*1*" + batchId + "~IEA*1*000000001~";

                    objResponse.Status = "Success";
                    objResponse.Response = strBatchString;

                    //using (var w = new StreamWriter(HttpContext.Current.Server.MapPath("/SubmissionFile/" + claim_id + ".txt"), false))
                    //{
                    //    w.WriteLine(strBatchString);
                    //}

                }
                else
                {
                    objResponse.Status = "Error";
                    objResponse.Response = errorList;
                }

            }
            catch (Exception)
            {
                throw;
            }
            return objResponse;

        }
        //Save File in practice document for record or save string in database and then delete file from FTP
        //currently we have response_file_path in claim batch table,
        //update batch entry in db
        //Test Text
        //ParseFile("ISA*00*          *00*          *ZZ*263923727000000*ZZ*2TK6           *190423*1027*^*00501*423102733*0*P*:~GS*FA*263923727*2TK6*20190423*1027*423102733*X*005010X231~ST*999*0001*005010X231~AK1*HC*50010123437*005010X222A1~AK2*837*0001*005010X222A1~IK5*A~AK9*A*1*1*1~SE*6*0001~GE*1*423102733~IEA*1*423102733~");
        public void ParseFile(string file_Data)
        {
            String date_of_interchange = "";
            String batch_process_id = "";
            String batch_status = "";
            String batch_status_detail = "";
            string response_file_path = "";
            string[] Segment = file_Data.Split('~');
            if (Segment.Length > 0)
            {
                for (int i = 0; i < Segment.Length; i++)
                {
                    string[] SubSegments = Segment[i].Split('*');
                    if (SubSegments.Length > 0)
                    {
                        if (SubSegments[0].ToUpper() == "ISA")
                        {
                            if (SubSegments.Length > 8)
                            {
                                date_of_interchange = SubSegments[9];
                            }
                        }
                        else if (SubSegments[0].ToUpper() == "AK1")
                        {
                            if (SubSegments.Length > 2)
                            {
                                batch_process_id = SubSegments[2];
                            }
                        }
                        else if (batch_process_id != null && batch_process_id != "")
                        {
                            if (SubSegments[0].ToUpper() == "AK9")
                            {
                                batch_status = SubSegments[1];
                                if (SubSegments[1].ToUpper() == "A")
                                {
                                    batch_status_detail = "Accepted";
                                }
                                else if (SubSegments[1].ToUpper() == "E")
                                {
                                    batch_status_detail = "Accepted, but errors were noted";
                                }
                                else if (SubSegments[1].ToUpper() == "M")
                                {
                                    batch_status_detail = "Rejected, message authentication code (MAC) failed";
                                }
                                else if (SubSegments[1].ToUpper() == "P")
                                {
                                    batch_status_detail = "Partially accepted, at least one transaction set was rejected";
                                }
                                else if (SubSegments[1].ToUpper() == "R")
                                {
                                    batch_status_detail = "Rejected";
                                }
                                else if (SubSegments[1].ToUpper() == "W")
                                {
                                    batch_status_detail = "Rejected, assurance failed validity tests";
                                }
                                else if (SubSegments[1].ToUpper() == "X")
                                {
                                    batch_status_detail = "Rejected, content after decryption could not be analyzed";
                                }
                            }
                        }
                    }
                }

            }

            string query = "update claim_batch set date_processed='" + date_of_interchange + "',batch_status='" + batch_status + "',batch_status_detail='" + batch_status_detail + "',response_file_path='" + response_file_path + "' where batch_id='" + batch_process_id + "'";
        }
        private string appendDxCodesegmentCount(int diagCount, bool isICD_10, string diagCode)
        {
            string strDiagsegmentCount = "";

            if (!string.IsNullOrEmpty(diagCode))
            {
                if (diagCount == 0)
                {
                    strDiagsegmentCount += diagCode.Trim().Replace(".", "");
                }
                else if (isICD_10)
                {
                    strDiagsegmentCount += "*ABF:" + diagCode.Trim().Replace(".", "");
                    //BF==ICD-9 ABF=ICD-10
                }
                else // ICD-9 Claim
                {
                    strDiagsegmentCount += "*BF:" + diagCode.Trim().Replace(".", "");
                    //BF==ICD-9 ABF=ICD-10
                }

            }

            return strDiagsegmentCount;
        }
        private bool isAlphaNumeric(string value)
        {
            Regex regxAlphaNum = new Regex("^[a-zA-Z0-9 ]*$");

            return regxAlphaNum.IsMatch(value);
        }
        public ResponseModel GetClaimsSearchModels()
        {
            ResponseModel responseModel = new ResponseModel();
            try
            {
                using (var ctx = new NPMDBEntities())
                {

                }
            }
            catch (Exception ex)
            {
                responseModel.Status = ex.ToString();
            }
            return responseModel;
        }
        public ResponseModel SearchClaim(ClaimSearchViewModel model)
        {
            ResponseModel resModel = new ResponseModel();
            List<SP_ClaimsSearch_Result> result = new List<SP_ClaimsSearch_Result>();
            try
            {
                using (var ctx = new NPMDBEntities())
                {
                    result = ctx.SP_ClaimsSearch(model.DOSFrom, model.DOSTo, string.Join(",", model.PatientAccount), string.Join(",", model.Provider), string.Join(",", model.location), model.icd9, model.type, model.status, string.Join(",", model.insurance), model.PracticeCode).ToList();
                    
                }
                if (result != null)
                {
                    resModel.Status = "Success";
                    resModel.Response = result;
                }
                else
                {
                    resModel.Status = "No record found";
                }
            }
            catch (Exception ex)
            {
                resModel.Status = ex.ToString();
            }
            return resModel;
        }
        public ResponseModel AddUpdateBatch(BatchCreateViewModel model, long userId)
        {
            DateTime parsedDate;
            if (DateTime.TryParse(model.DateStr, out parsedDate))
            {
                model.Date = parsedDate;
            }
            ResponseModel responseModel = new ResponseModel();
            GenerateBatchName(model);
            claim_batch batch;
            try
            {
                using (var ctx = new NPMDBEntities())
                {

                    if (model.BatchId != 0)
                    {
                        batch = ctx.claim_batch.FirstOrDefault(b => b.batch_id == model.BatchId);
                        if (batch != null)
                        {
                            batch.batch_name = model.BatchName;
                            batch.batch_type = model.BatchType;
                            batch.practice_id = model.PracticeCode;
                            batch.provider_id = model.ProviderCode == -1 ? null : model.ProviderCode;
                            batch.modified_user = userId;
                            batch.date_modified = DateTime.Now;
                            batch.date = model.Date;
                            ctx.Entry(batch).State = System.Data.Entity.EntityState.Modified;
                        }
                    }
                    else
                    {
                        batch = new claim_batch()
                        {

                            batch_id = Convert.ToInt64(ctx.SP_TableIdGenerator("batch_id").FirstOrDefault()),
                            batch_status = "Pending",
                            batch_name = GenerateBatchName(model),
                            batch_type = model.BatchType,
                            practice_id = model.PracticeCode,
                            provider_id = model.ProviderCode == -1 ? null : model.ProviderCode,
                            created_user = userId,
                            date = model.Date,
                            date_created = DateTime.Now
                        };
                        ctx.claim_batch.Add(batch);
                    }
                    if (ctx.SaveChanges() > 0)
                    {
                        responseModel.Status = "Success";
                        responseModel.Response = model.BatchId;
                    }
                    else
                    {
                        responseModel.Status = "Error";
                    }
                }
            }
            catch (Exception ex)
            {
                responseModel.Status = ex.ToString();
            }
            return responseModel;
        }
        private string GenerateBatchName(BatchCreateViewModel model)
        {
            string batchName = string.Empty;
            try
            {
                claim_batch batch = null;
                using (var ctx = new NPMDBEntities())
                {
                    if (model.ProviderCode != null && model.ProviderCode != -1)
                    {
                        var provider = ctx.Providers.FirstOrDefault(p => p.Provider_Code == model.ProviderCode && p.Practice_Code == model.PracticeCode);
                        if (provider != null)
                        {
                            batchName = provider.Provid_LName.Substring(0, 1).ToUpper() + provider.Provid_FName.Substring(0, 1).ToUpper() + "_" + "P" + "_" + model.Date.ToString("MMddyyyy") + "_";
                        }
                        batch = ctx.claim_batch.Where(b => b.provider_id == model.ProviderCode && b.practice_id == model.PracticeCode && b.date == model.Date).OrderByDescending(d => d.date_created).FirstOrDefault();
                    }
                    else
                    {
                        batchName = "AL" + "_" + "P" + "_" + model.Date.ToString("MMddyyyy") + "_";
                        batch = ctx.claim_batch.Where(b => b.provider_id == null && b.practice_id == model.PracticeCode && b.date == model.Date).OrderByDescending(d => d.date_created).FirstOrDefault();
                    }
                    int counter = 0;
                    if (batch != null)
                    {
                        counter = Convert.ToInt32(batch.batch_name.Substring(batch.batch_name.LastIndexOf("_") + 1));
                        counter++;
                    }
                    else
                    {
                        counter++;
                    }
                    batchName += model.PracticeCode;
                    batchName += $"_{counter}";
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return batchName;
        }
        public ResponseModel GetPendingBatchSelectList(long practiceCode, long? providerCode)
        {
            ResponseModel responseModel = new ResponseModel();
            List<SelectListViewModel> list;
            try
            {
                using (var ctx = new NPMDBEntities())
                {
                    providerCode = providerCode == -1 ? null : providerCode;
                    if (providerCode == null || providerCode == 0)
                    {
                        list = ctx.claim_batch.Where(b => (b.practice_id == practiceCode && (b.deleted ?? false) == false && (b.batch_lock ?? false) == false && (b.batch_status == "Pending" || b.batch_status == "" || b.batch_status == null))).Select(b => new SelectListViewModel()
                        {
                            Id = b.batch_id,
                            Name = b.batch_id + "|" + b.batch_name
                        }).ToList();
                    }
                    else
                    {
                        list = ctx.claim_batch.Where(b => (b.practice_id == practiceCode && (b.deleted ?? false) == false && b.provider_id == providerCode && (b.batch_lock ?? false) == false && (b.batch_status == "Pending" || b.batch_status == "" || b.batch_status == null))).Select(b => new SelectListViewModel()
                        {
                            Id = b.batch_id,
                            Name = b.batch_id + "|" + b.batch_name
                        }).ToList();
                    }
                    if (list != null)
                    {
                        responseModel.Status = "Success";
                        responseModel.Response = list;
                    }
                    else
                    {
                        responseModel.Status = "Error";
                    }
                }
            }
            catch (Exception ex)
            {
                responseModel.Status = ex.ToString();
            }
            return responseModel;
        }
        public ResponseModel GetSentBatchSelectList(string searchText, long practiceCode, long? providerCode)
        {
            ResponseModel responseModel = new ResponseModel();
            List<SelectListViewModel> list;
            try
            {
                using (var ctx = new NPMDBEntities())
                {
                    providerCode = providerCode == -1 ? null : providerCode;
                    if (providerCode == null || providerCode == 0)
                    {
                        list = ctx.claim_batch.Where(b => (b.practice_id == practiceCode && (b.deleted ?? false) == false && (b.batch_lock ?? false) == false && b.batch_status == "Sent") && (b.batch_name.Contains(searchText) ||
                       b.batch_status.Contains(searchText) || b.batch_type.Contains(searchText) || b.batch_id.ToString().Contains(searchText))).Select(b => new SelectListViewModel()
                       {
                           Id = b.batch_id,
                           Name = b.batch_id + "|" + b.batch_name
                       }).ToList();
                    }
                    else
                    {
                        list = ctx.claim_batch.Where(b => (b.practice_id == practiceCode && (b.deleted ?? false) == false && b.provider_id == providerCode && (b.batch_lock ?? false) == false && b.batch_status == "Sent") && (b.batch_name.Contains(searchText) ||
                        b.batch_status.Contains(searchText) || b.batch_type.Contains(searchText) || b.batch_id.ToString().Contains(searchText))).Select(b => new SelectListViewModel()
                        {
                            Id = b.batch_id,
                            Name = b.batch_id + "|" + b.batch_name
                        }).ToList();
                    }
                    if (list != null)
                    {
                        responseModel.Status = "Success";
                        responseModel.Response = list;
                    }
                    else
                    {
                        responseModel.Status = "Error";
                    }
                }
            }
            catch (Exception ex)
            {
                responseModel.Status = ex.ToString();
            }
            return responseModel;
        }
        public ResponseModel GetBatchesDetail(BatchListRequestViewModel model)
        {
            ResponseModel responseModel = new ResponseModel();
            List<SP_GetBatchDetail_Result> results;
            try
            {
                using (var ctx = new NPMDBEntities())
                {
                    results = ctx.SP_GetBatchDetail(model.PracticeCode, model.ProviderCode).OrderByDescending(o => o.batch_id).ToList();
                    if (results != null)
                    {
                        responseModel.Status = "Success";
                        responseModel.Response = results;
                    }
                    else
                    {
                        responseModel.Status = "No Record Found";
                    }
                }
            }
            catch (Exception ex)
            {
                responseModel.Status = ex.ToString();
            }
            return responseModel;
        }
        public ResponseModel AddInBatch(AddInBatchRequestViewModel model, long userId)
        {

            ResponseModel responseModel = new ResponseModel();
            try
            {
                using (var ctx = new NPMDBEntities())
                {
                    var claimsResponse = SearchClaim(new ClaimSearchViewModel()
                    {
                        DOSFrom = null,
                        DOSTo = null,
                        PatientAccount = new List<long>(),
                        PracticeCode = model.PracticeCode,
                        Provider = new List<long>(),
                        icd9 = null,
                        insurance = new List<long>(),
                        location = new List<long>(),
                        status = "unprocessed",
                        type = null
                    });
                    List<SP_ClaimsSearch_Result> claims = new List<SP_ClaimsSearch_Result>();
                    if (claimsResponse.Status == "Success")
                        claims = claimsResponse.Response;
                    for (int i = 0; i < model.ClaimIds.Length; i++)
                    {
                        var claimId = model.ClaimIds[i];
                        var claimBatch = (from c in ctx.Claims
                                          join cbd in ctx.claim_batch_detail on c.Claim_No equals cbd.claim_id
                                          join cb in ctx.claim_batch on cbd.batch_id equals cb.batch_id
                                          where c.Claim_No == claimId && (cbd.deleted ?? false) == false
                                          && cb.batch_status == "Pending"
                                          select cb).FirstOrDefault();

                        //var claimBatch = ctx.claim_batch_detail.FirstOrDefault(c => c.claim_id == claimId && c.practice_id == model.PracticeCode && (c.deleted ?? false) == false);
                        if (claimBatch != null)
                            continue;
                        var claimBatchDetail = new claim_batch_detail()
                        {
                            detail_id = Convert.ToInt64(ctx.SP_TableIdGenerator("detail_id").FirstOrDefault()),
                            claim_id = model.ClaimIds[i],
                            practice_id = model.PracticeCode,
                            batch_id = model.BatchId,
                            created_user = userId,
                            date_created = DateTime.Now,
                            amount_due = claims.Where(c => c.Claim_No == model.ClaimIds[i]).Select(c => c.claim_total).FirstOrDefault()
                        };
                        ctx.claim_batch_detail.Add(claimBatchDetail);
                    }
                    if (ctx.SaveChanges() > 0)
                    {
                        responseModel.Status = "Success";
                    }
                    else
                    {
                        responseModel.Status = "Selected claims are already present in Claim Batch.";
                    }
                }
            }
            catch (Exception ex)
            {
                responseModel.Status = ex.ToString();
            }
            return responseModel;
        }
        public ResponseModel LockBatch(LockBatchRequestViewModel model)
        {
            ResponseModel responseModel = new ResponseModel();
            try
            {
                using (var ctx = new NPMDBEntities())
                {
                    claim_batch batch = ctx.claim_batch.FirstOrDefault(c => c.batch_id == model.BatchId);
                    if (batch != null)
                    {
                        batch.batch_lock = true;
                        batch.modified_user = model.UserId;
                        batch.date_modified = DateTime.Now;
                        if (ctx.SaveChanges() > 0)
                        {
                            responseModel.Status = "Success";
                        }
                        else
                        {
                            responseModel.Status = "Error";

                        }
                    }
                    else
                    {
                        responseModel.Status = "Error";
                    }
                }
            }
            catch (Exception ex)
            {
                responseModel.Status = ex.ToString();
            }
            return responseModel;
        }
        public ResponseModel UploadBatches(BatchUploadRequest model, long v)
        {
            ResponseModel responseModel = new ResponseModel();
            try
            {
                using (var ctx = new NPMDBEntities())
                {
                    bool isAllClaimsSuccess = true;
                    var batches = (from cb in ctx.claim_batch
                                   join cbd in ctx.claim_batch_detail on cb.batch_id equals cbd.batch_id
                                   join c in ctx.Claims on cbd.claim_id equals c.Claim_No
                                   join p in ctx.Patients on c.Patient_Account equals p.Patient_Account
                                   where model.BatcheIds.Contains(cb.batch_id) && cb.batch_status.ToLower() == "pending"
                                   select new BatchUploadViewModel()
                                   {
                                       BatchId = cb.batch_id,
                                       ClaimId = c.Claim_No,
                                       PatientAccount = p.Patient_Account,
                                       PracticeCode = c.practice_code,
                                       DOS = c.DOS,
                                       PatientName = p.Last_Name + ", " + p.First_Name,

                                   }).GroupBy(b => b.BatchId).ToList();
                    if (batches != null && batches.Count > 0)
                    {
                        foreach (var batch in batches)
                        {
                            bool batchHasError = false;
                            List<BatchClaimSubmissionResponse> responsedPerBatch = new List<BatchClaimSubmissionResponse>();
                            foreach (var claim in batch)
                            {
                                if (!batchHasError)
                                {
                                    var res = GenerateBatch_5010_P(Convert.ToInt64(claim.PracticeCode), claim.ClaimId);
                                    if (res.Status == "Error")
                                    {
                                        isAllClaimsSuccess = false;
                                        batchHasError = true;
                                        AddUpdateClaimBatchError(claim.BatchId, claim.ClaimId, v, string.Join(";", res.Response), claim.PatientName, claim.PatientAccount, claim.DOS);
                                    }
                                    responsedPerBatch.Add(new BatchClaimSubmissionResponse() { ClaimId = claim.ClaimId, PracticeCode = claim.PracticeCode, response = res.Response, BatchId = claim.BatchId });
                                }
                            }
                            if (!batchHasError)
                            {
                                // Update batch status
                                var batchToUpdate = ctx.claim_batch.Where(b => b.batch_id == batch.Key).FirstOrDefault();
                                batchToUpdate.date_uploaded = DateTime.Now;
                                batchToUpdate.batch_status = "Sent";
                                batchToUpdate.uploaded_user = v;
                                batchToUpdate.batch_lock = true;

                                try
                                {
                                    var responses = responsedPerBatch.Select(r => r.response).ToList();
                                    string stringToWrite = string.Join("\n", responses.Select(r => r));
                                    if (!Directory.Exists(HostingEnvironment.MapPath("~/" + ConfigurationManager.AppSettings["ClaimBatchSubmissionPath"])))
                                        Directory.CreateDirectory(HostingEnvironment.MapPath("~/" + ConfigurationManager.AppSettings["ClaimBatchSubmissionPath"]));
                                    File.WriteAllText(HostingEnvironment.MapPath("~/" + ConfigurationManager.AppSettings["ClaimBatchSubmissionPath"] + "/" + batchToUpdate.batch_name + ".txt"),
                                stringToWrite);
                                    batchToUpdate.file_path = batchToUpdate.batch_name + ".txt";
                                    batchToUpdate.file_generated = true;

                                    // Uploading File to FTP
                                    string fileUploadStatus = "success";
                                    if (!Debugger.IsAttached)
                                    {
                                        fileUploadStatus = UploadFileToFTP(HostingEnvironment.MapPath("~/" + ConfigurationManager.AppSettings["ClaimBatchSubmissionPath"] + "/" + batchToUpdate.batch_name + ".txt"), (long)batchToUpdate.practice_id, v, "Upload Batch");
                                    }
                                    //To Update Status of Claim
                                    var claimsToUpdate = batch.Select(bb => bb.ClaimId).ToList<long>();
                                    if (claimsToUpdate.Count() > 0)
                                    {
                                        var claims = ctx.Claims.Where(c => claimsToUpdate.Contains(c.Claim_No));
                                        List<CLAIM_NOTES> cLAIM_NOTEs = new List<CLAIM_NOTES>();
                                        claims.ForEach(c =>
                                        {
                                            if (!string.IsNullOrEmpty(c.Pri_Status) && (c.Pri_Status.ToLower() == "n" || c.Pri_Status.ToLower() == "r"))
                                            {
                                                c.Pri_Status = "B";
                                                cLAIM_NOTEs.Add(new CLAIM_NOTES
                                                {
                                                    Claim_Notes_Id = Convert.ToInt64(ctx.SP_TableIdGenerator("Claim_Notes_Id").FirstOrDefault().ToString()),
                                                    Claim_No = c.Claim_No,
                                                    Note_Detail = $"Claim submitted to Primary Insurance",
                                                    Created_By = v,
                                                    Created_Date = DateTime.Now
                                                });
                                            }
                                            else if (!string.IsNullOrEmpty(c.Sec_Status) && (c.Sec_Status.ToLower() == "n" || c.Sec_Status.ToLower() == "r"))
                                            {
                                                c.Sec_Status = "B";
                                                cLAIM_NOTEs.Add(new CLAIM_NOTES
                                                {
                                                    Claim_Notes_Id = Convert.ToInt64(ctx.SP_TableIdGenerator("Claim_Notes_Id").FirstOrDefault().ToString()),
                                                    Claim_No = c.Claim_No,
                                                    Note_Detail = $"Claim submitted to Secondary Insurance",
                                                    Created_By = v,
                                                    Created_Date = DateTime.Now
                                                });
                                            }
                                            else if (!string.IsNullOrEmpty(c.Oth_Status) && (c.Oth_Status.ToLower() == "n" || c.Oth_Status.ToLower() == "r"))
                                            {
                                                c.Oth_Status = "B";
                                                cLAIM_NOTEs.Add(new CLAIM_NOTES
                                                {
                                                    Claim_Notes_Id = Convert.ToInt64(ctx.SP_TableIdGenerator("Claim_Notes_Id").FirstOrDefault().ToString()),
                                                    Claim_No = c.Claim_No,
                                                    Note_Detail = $"Claim submitted to Other Insurance",
                                                    Created_By = v,
                                                    Created_Date = DateTime.Now
                                                });
                                            }
                                        });
                                        ctx.CLAIM_NOTES.AddRange(cLAIM_NOTEs);
                                    }
                                    ctx.SaveChanges();
                                    if (fileUploadStatus == "error")
                                    {
                                        responseModel.Status = "error";
                                        responseModel.Response = "File generation success, but file uploaded has been failed.";
                                        return responseModel;
                                    }
                                }
                                catch (Exception)
                                {
                                    throw;
                                }
                            }
                        }
                        if (isAllClaimsSuccess)
                        {
                            responseModel.Response = new ExpandoObject();
                            responseModel.Response.Type = 1;
                            responseModel.Response.Message = "Batches has been uploaded successfully.";
                        }
                        else
                        {
                            responseModel.Response = new ExpandoObject();
                            responseModel.Response.Type = 2;
                            responseModel.Response.Message = "An errors occurred while uploading batches, please see \"Batch File Errors\" for error details.";
                        }

                    }
                    else
                    {
                        responseModel.Response = new ExpandoObject();
                        responseModel.Response.Type = 3;
                        responseModel.Response.Message = "No unprocessed batch has been found.";
                    }
                    responseModel.Status = "Success";
                }
            }
            catch (Exception ex)
            {
                responseModel.Status = "error";
                responseModel.Response = ex.ToString();
            }
            return responseModel;
        }
        public ResponseModel GetBatchFileErrors(BatchErrorsRequestModel model)
        {
            ResponseModel response = new ResponseModel();
            List<SP_Search_Claim_Batch_Error_Result> list;
            try
            {
                using (var ctx = new NPMDBEntities())
                {
                    list = ctx.SP_Search_Claim_Batch_Error(model.practiceCode, model.providerCode == -1 ? null : model.providerCode, model.bactchId, model.dateFrom, model.dateTo).ToList();
                    if (list != null)
                    {
                        response.Response = list;
                        response.Status = "Success";
                    }
                    else
                    {
                        response.Status = "Error";
                    }
                }
            }
            catch (Exception ex)
            {
                response.Status = ex.ToString();
            }
            return response;
        }
        public ResponseModel GetBatchesHistory(BatchesHistoryRequestModel model)
        {
            ResponseModel responseModel = new ResponseModel();
            List<sp_getBatchHistory_Result> list;
            try
            {
                using (var ctx = new NPMDBEntities())
                {

                    list = ctx.sp_getBatchHistory(model.Practice_Code, model.Provider_Code == -1 ? null : model.Provider_Code, model.Date_From, model.Date_To, !String.IsNullOrEmpty(model.Date_Type) ? model.Date_Type : null).ToList();
                    if (list != null)
                    {
                        responseModel.Response = list;
                        responseModel.Status = "Success";
                    }
                    else
                    {
                        responseModel.Status = "Error";
                    }
                }
            }
            catch (Exception ex)
            {
                responseModel.Status = ex.ToString();
            }
            return responseModel;
        }
        public ResponseModel GetBatcheDetalis(long batchId)
        {
            ResponseModel res = new ResponseModel();
            List<BatchClaimsDetail> bcdList = new List<BatchClaimsDetail>();
            using (var ctx = new NPMDBEntities())
            {
                try
                {
                    var batchDetClaimIdList = (from cl in ctx.Claims
                                               join cbd in ctx.claim_batch_detail on cl.Claim_No equals cbd.claim_id
                                               where cbd.batch_id == batchId
                                               select new BatchClaimsDetail()
                                               {
                                                   Claim_No = cl.Claim_No,
                                                   DOS = (DateTime)cl.DOS,
                                                   Billed_Amount = cbd.amount_due == null ? 0 : (decimal)cbd.amount_due,
                                               }).ToList();
                    bcdList = batchDetClaimIdList;
                    if (bcdList.Count > 0)
                    {
                        res.Status = "Success";
                        res.Response = bcdList;
                    }
                    else
                    {
                        res.Status = "No Claims Found";
                    }
                }
                catch (Exception)
                {
                    throw;
                }

            }
            return res;
        }
        public string UploadFileToFTP(string source, long practiceCode, long userId, string caller = "")
        {
            try
            {
                NPMLogger.GetInstance().Info($"Upload Batch File to FTP Called by user '{userId}' from {caller}");
                var practInfo = _practiceService.GetPracticeFTPInfo(practiceCode, FTPType.EDI);
                if (practInfo != null)
                {
                    using (SftpClient client = new SftpClient(practInfo.Host, practInfo.Port, practInfo.Username, practInfo.Password))
                    {
                        client.Connect();
                        NPMLogger.GetInstance().Info($"Practice '{practiceCode}' connection successs");
                        if (client.IsConnected)
                        {
                            client.ChangeDirectory(practInfo.Destination);
                            using (FileStream fs = new FileStream(source, FileMode.Open))
                            {
                                client.BufferSize = 4 * 1024;
                                client.UploadFile(fs, Path.GetFileName(source));
                                NPMLogger.GetInstance().Info($"{source} File uploaded to Practice {practiceCode} FTP by user {userId} from {caller}");
                            }
                        }
                        else
                        {
                            NPMLogger.GetInstance().Info($"Connection failed/lost to FTP of '{practiceCode}'");
                        }
                        return "success";
                    }
                }
                else
                {
                    NPMLogger.GetInstance().Info($"FTP Information not found in database for practice {practiceCode}");
                    return "error";
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public ResponseModel GetBatchFilePath(long batchId)
        {
            ResponseModel response = new ResponseModel();
            try
            {
                using (var ctx = new NPMDBEntities())
                {
                    var batch = ctx.claim_batch.FirstOrDefault(b => b.batch_id == batchId);
                    if (batch != null && !string.IsNullOrEmpty(batch.file_path))
                    {
                        response.Status = "success";
                        response.Response = batch.file_path;
                    }
                    else
                    {
                        response.Status = "error";
                        response.Response = "No batch or batch file found";
                    }
                    return response;
                }
            }
            catch (Exception)
            {
                throw;
            }
        }

        public void AddUpdateClaimBatchError(long batchId, long claimNo, long userId, string errorResponse, string patientName, long? patientAccount, DateTime? Dos)
        {
            try
            {
                using (var ctx = new NPMDBEntities())
                {
                    var claimBatchError = ctx.claim_batch_error.FirstOrDefault(cbe => cbe.batch_id == batchId && cbe.claim_id == claimNo);
                    if (claimBatchError != null)
                    {
                        claimBatchError.dos = Dos;
                        claimBatchError.error = errorResponse;
                        ctx.Entry(claimBatchError).State = System.Data.Entity.EntityState.Modified;
                    }
                    else
                    {
                        claim_batch_error error = new claim_batch_error()
                        {
                            id = Convert.ToInt64(ctx.SP_TableIdGenerator("claim_batch_error_id").FirstOrDefault()),
                            batch_id = batchId,
                            claim_id = claimNo,
                            created_user = userId,
                            date_created = DateTime.Now,
                            deleted = false,
                            dos = Dos,
                            error = errorResponse,
                            patient_id = patientAccount,
                            patient_name = patientName
                        };
                        ctx.claim_batch_error.Add(error);
                    }
                    ctx.SaveChanges();
                }
            }
            catch (Exception)
            {
                throw;
            }
        }

        public ResponseModel RegenerateBatchFile(RegenerateBatchFileRequestModel model, long userId)
        {
            // error codes
            // success : claims processing completed
            // error : Exception
            // 1 : Some claims has errors (Get user confirmation to process only perfect claims)
            // 2 : All claims has errors (Can't regenerate and upload batch file)
            // 3 : Batch Can't be regenerated and uploaded, batch has no valid claim
            // 4 : Claims has errors while file generation
            ResponseModel responseModel = new ResponseModel();
            try
            {
                using (var ctx = new NPMDBEntities())
                {
                    bool isAllClaimsSuccess = true;
                    IDictionary<long, string> errors = new Dictionary<long, string>();
                    var claims = ctx.GetBatchClaims(model.Batch_Id).ToList();
                    // Check if any claim errors
                    claims.ForEach(claim =>
                    {
                        // claim is deleted
                        if (claim.Deleted)
                        {
                            errors.Add(claim.Claim_No, "Claim is deleted.");
                        }
                        // Amount due is less than zero
                        else if (claim.Amt_Due <= 0)
                        {
                            errors.Add(claim.Claim_No, "Amount due is 0.");
                        }
                        else if (claim.Is_Payment_Posted == 1)
                        {
                            errors.Add(claim.Claim_No, "Payment posted.");
                        }
                    });
                    if (!model.Confirmation && errors.Count() > 0 && errors.Count() >= claims.Count())
                    {
                        responseModel.Status = "2";
                        responseModel.Response = errors;
                    }
                    else if (!model.Confirmation && errors.Count() > 0)
                    {
                        responseModel.Status = "1";
                        responseModel.Response = errors;
                    }
                    else if (model.Confirmation || errors.Count() == 0)
                    {
                        // Process claims
                        var claimsToProcess = claims.Where(c => c.Amt_Due > 0 && c.Deleted == false && c.Is_Payment_Posted == 0).ToList();
                        if (claimsToProcess.Count() == 0)
                        {
                            responseModel.Status = "3";
                        }
                        else
                        {
                            bool batchHasError = false;
                            List<BatchClaimSubmissionResponse> responsedPerBatch = new List<BatchClaimSubmissionResponse>();
                            foreach (var claim in claimsToProcess)
                            {
                                if (!batchHasError)
                                {
                                    var res = GenerateBatch_5010_P(Convert.ToInt64(model.Practice_Code), claim.Claim_No);
                                    if (res.Status == "Error")
                                    {
                                        isAllClaimsSuccess = false;
                                        batchHasError = true;
                                        AddUpdateClaimBatchError(model.Batch_Id, claim.Claim_No, userId, string.Join(";", res.Response), claim.patient_name, claim.Patient_Account, claim.DOS);
                                    }
                                    responsedPerBatch.Add(new BatchClaimSubmissionResponse()
                                    {
                                        ClaimId = claim.Claim_No,
                                        PracticeCode = model.Practice_Code,
                                        response = res.Response,
                                        BatchId = model.Batch_Id
                                    });
                                }
                            }
                            if (!batchHasError)
                            {
                                // Update batch status
                                var batchToUpdate = ctx.claim_batch.Where(b => b.batch_id == model.Batch_Id).FirstOrDefault();
                                batchToUpdate.date_uploaded = DateTime.Now;
                                batchToUpdate.batch_status = "Sent";
                                batchToUpdate.uploaded_user = userId;
                                batchToUpdate.batch_lock = true;
                                try
                                {
                                    var responses = responsedPerBatch.Select(r => r.response).ToList();
                                    string stringToWrite = string.Join("\n", responses.Select(r => r));
                                    if (!Directory.Exists(HostingEnvironment.MapPath("~/" + ConfigurationManager.AppSettings["ClaimBatchSubmissionPath"])))
                                        Directory.CreateDirectory(HostingEnvironment.MapPath("~/" + ConfigurationManager.AppSettings["ClaimBatchSubmissionPath"]));
                                    File.WriteAllText(HostingEnvironment.MapPath("~/" + ConfigurationManager.AppSettings["ClaimBatchSubmissionPath"] + "/" + batchToUpdate.batch_name + ".txt"),
                                stringToWrite);
                                    batchToUpdate.file_path = batchToUpdate.batch_name + ".txt";
                                    batchToUpdate.file_generated = true;
                                    ctx.SaveChanges();

                                    //Uploading File to FTP
                                    string fileUploadStatus = "success";
                                    if (!Debugger.IsAttached)
                                    {
                                        fileUploadStatus = UploadFileToFTP(HostingEnvironment.MapPath("~/" + ConfigurationManager.AppSettings["ClaimBatchSubmissionPath"] + "/" + batchToUpdate.batch_name + ".txt"), model.Practice_Code, userId, "Regenerate Batch File");
                                    }
                                    if (fileUploadStatus == "error")
                                    {
                                        responseModel.Status = "error";
                                        responseModel.Response = "File generation success, but file uploaded has been failed.";
                                        return responseModel;
                                    }

                                }
                                catch (Exception ex)
                                {
                                    responseModel.Status = "error";
                                    responseModel.Response = ex.ToString();
                                    return responseModel;
                                }
                            }
                        }
                        if (isAllClaimsSuccess)
                        {
                            responseModel.Status = "success";
                            responseModel.Response = "Batches has been uploaded successfully.";
                        }
                        else
                        {
                            responseModel.Status = "4";
                            responseModel.Response = "An errors occurred while uploading batches, please see \"Batch File Errors\" for error details.";
                        }
                    }
                }
                // Some claims has errors, but user confirms to regenerate and upload
                return responseModel;
            }
            catch (Exception)
            {
                throw;
            }
        }
        public ResponseModel Read()
        {
            try
            {
                var ediStream = File.OpenRead(HostingEnvironment.MapPath($"~/DocumentDirectory/payment.txt"));
                List<IEdiItem> ediItems;
                using (var ediReader = new X12Reader(ediStream, "EdiFabric.Examples.X12.Templates.V5010.NoValidation"))
                    ediItems = ediReader.ReadToEnd().ToList();
                var transactions = ediItems.OfType<TS835>();
                List<era> eras = new List<era>();
                foreach (var transaction in transactions)
                {
                    if (transaction.HasErrors)
                    {
                        var errors = transaction.ErrorContext.Flatten();
                    }
                    else
                    {
                        var _era = new era()
                        {
                            // transaction
                            transaction_handling_code = transaction.BPR_FinancialInformation.TransactionHandlingCode_01,
                            check_amount = Convert.ToDecimal(transaction.BPR_FinancialInformation.TotalPremiumPaymentAmount_02),
                            check_date = new DateTime(long.Parse(transaction.BPR_FinancialInformation.CheckIssueorEFTEffectiveDate_16)),
                            check_number = transaction.TRN_ReassociationTraceNumber.CurrentTransactionTraceNumber_02,
                            production_date = new DateTime(long.Parse(transaction.DTM_ProductionDate.Date_02)),
                            // Payer
                            payer_identifier_qualifier = transaction.AllN1.Loop1000A.N1_PayerIdentification.EntityIdentifierCode_01,
                            payer_identifier = transaction.TRN_ReassociationTraceNumber.OriginatingCompanyIdentifier_03,
                            //payer_contact_information =
                            payer_name = transaction.AllN1.Loop1000A.N1_PayerIdentification.PremiumPayerName_02,
                            payer_address = transaction.AllN1.Loop1000A.N3_PayerAddress.ResponseContactAddressLine_01,
                            payer_state = transaction.AllN1.Loop1000A.N4_PayerCity_State_ZIPCode.AdditionalPatientInformationContactStateCode_02,
                            payer_city = transaction.AllN1.Loop1000A.N4_PayerCity_State_ZIPCode.AdditionalPatientInformationContactCityName_01,
                            payer_zip = transaction.AllN1.Loop1000A.N4_PayerCity_State_ZIPCode.AdditionalPatientInformationContactPostalZoneorZIPCode_03,
                            //Payee
                            payee_name = transaction.AllN1.Loop1000B.N1_PayeeIdentification.PremiumPayerName_02,
                            payee_identifier_code_qualifier = transaction.AllN1.Loop1000B.N1_PayeeIdentification.IdentificationCodeQualifier_03,
                            payee_identifier_code = transaction.AllN1.Loop1000B.N1_PayeeIdentification.EntityIdentifierCode_01,
                            payee_address = transaction.AllN1.Loop1000B.N3_PayeeAddress.ResponseContactAddressLine_01 + ' ' + transaction.AllN1.Loop1000B.N3_PayeeAddress.ResponseContactAddressLine_02,
                            payee_city = transaction.AllN1.Loop1000B.N4_PayeeCity_State_ZIPCode.AdditionalPatientInformationContactCityName_01,
                            payee_state = transaction.AllN1.Loop1000B.N4_PayeeCity_State_ZIPCode.AdditionalPatientInformationContactStateCode_02,
                            payee_zip = transaction.AllN1.Loop1000B.N4_PayeeCity_State_ZIPCode.AdditionalPatientInformationContactPostalZoneorZIPCode_03,
                            additional_payee_identifier_code_qualifier = transaction.AllN1.Loop1000B.REF_PayeeAdditionalIdentification[0].ReferenceIdentificationQualifier_01,
                            additional_payee_identifier_code = transaction.AllN1.Loop1000B.REF_PayeeAdditionalIdentification[0].MemberGrouporPolicyNumber_02,
                            // Provider
                            //provider_summary=
                            payer_business_contact_information = JsonConvert.SerializeObject(transaction.AllN1.Loop1000A.AllPER.PER_PayerBusinessContactInformation),
                            payer_technical_contact_information = JsonConvert.SerializeObject(transaction.AllN1.Loop1000A.AllPER.PER_PayerTechnicalContactInformation),

                        };
                        var _era_claim = new era_claim()
                        {
                            //        //era_claim_id= system generated
                            //        //era_id= foreign key from era
                            //claim_id=
                            //        //patient_id
                            //        //claim_billed_amount
                            //        //claim_paid_amount
                            //        //patient_responsibility
                            //        //claim_filing_indicator_code
                            //        //payer_claim_control_number
                            //        //claim_adj_amount
                            //        //claim_adj_codes
                            //        //claim_remark_codes
                            //        //patient_fname
                            //        //patient_lname
                            //        //patient_mname
                            //        //patient_identifier_qualfier
                            //        //patient_identifier
                            //        //subscriber_entity_type
                            //        //subscriber_identifier_qualfier
                            //        //subscriber_identifier
                            //        //subscriber_fname
                            //        //subscriber_lname
                            //        //subscriber_mname
                            //        //rendering_provider_lname
                            //        //rendering_provider_fname
                            //        //rendering_provider_identifier_qualifier
                            //        //rendering_provider_identifier
                            //        //claim_statement_period_start
                            //        //claim_statemnent_period_end
                            //        //coverage_amount
                            //        //claim_interest
                            //        //non_convered_estimated_NE
                            //        //claim_status_code
                            //        //claim_supplemental_information_quantity_qualifier
                            //        //claim_supplemental_information_quantity
                            //        //patient_responsibility_reason_code
                            //        //practice_id
                            //        //mapped_by
                            //        //date_mapped
                            //        //posted
                            //        //posted_by
                            //        //date_posted
                            //        //created_user
                            //        //client_date_created
                            //        //modified_user
                            //        //client_date_modified
                            //        //date_created
                            //        //date_modified
                            //        //system_ip
                            //        //deleted
                            //        //corrected_insured_entity_type
                            //        //corrected_insured_lname
                            //        //corrected_insured_fname
                            //        //corrected_insured_mname
                            //        //corrected_insured_identifier_qualifier
                            //        //corrected_insured_identifier
                            //        //mapped_insurance_id
                            //        //crossover_carrier_name

                        };
                    }
                }
                return new ResponseModel()
                {
                    Status = "sucess",
                    Response = transactions
                };
            }
            catch (Exception error)
            {
                return new ResponseModel()
                {
                    Status = "error",
                    Response = error?.Message
                };
            }

        }
        public ResponseModel SearchERA(ERASearchRequestModel model)
        {
            ResponseModel res = new ResponseModel();
            try
            {
                model.checkNo = string.IsNullOrEmpty(model.checkNo) || string.IsNullOrWhiteSpace(model.checkNo) ? null : model.checkNo.Trim();
                model.checkAmount = string.IsNullOrEmpty(model.checkAmount) || string.IsNullOrWhiteSpace(model.checkAmount) ? null : model.checkAmount.Trim();
                model.dateFrom = string.IsNullOrEmpty(model.dateFrom) || string.IsNullOrWhiteSpace(model.dateFrom) ? null : model.dateFrom.Trim();
                model.dateTo = string.IsNullOrEmpty(model.dateTo) || string.IsNullOrWhiteSpace(model.dateTo) ? null : model.dateTo.Trim();
                model.patientAccount = string.IsNullOrEmpty(model.patientAccount) || string.IsNullOrWhiteSpace(model.patientAccount) ? null : model.patientAccount.Trim();
                model.icnNo = string.IsNullOrEmpty(model.icnNo) || string.IsNullOrWhiteSpace(model.icnNo) ? null : model.icnNo;
                model.status = !string.IsNullOrEmpty(model.status) && model.status.ToLower() == "all" ? null : model.status;
                model.dateType = !string.IsNullOrEmpty(model.dateType) && !string.IsNullOrWhiteSpace(model.dateType) ? model.dateType.ToUpper() : null;
                using (var ctx = new NPMDBEntities())
                {
                    var results = ctx.SP_ERASEARCH(null, model.checkNo, model.checkAmount, model.dateFrom, model.dateTo, model.patientAccount, model.icnNo, model.status, model.dateType, model.practiceCode).ToList();
                    res.Status = "success";
                    res.Response = results;
                }
            }
            catch (Exception e)
            {
                res.Status = "error";
                res.Response = e.Message;
            }
            return res;
        }
        public ResponseModel EraSummary(EraSummaryRequest model)
        {
            ResponseModel res = new ResponseModel();
            res.Response = new ExpandoObject();
            try
            {
                using (var ctx = new NPMDBEntities())
                {
                    var eraDetails = ctx.SP_ERASEARCH(model.eraId, null, null, null, null, null, null, null, null, null).FirstOrDefault();
                    var eraClaims_sp_result = ctx.SP_ERACLAIMDETAIL(null, model.eraId, null, null, null).ToList();
                    var glossary = ctx.SP_ERAADJCODEGLOSSARY(model.eraId).ToList();
                    List<object> claimsList = new List<object>();
                    dynamic claim = "";
                    if (eraDetails != null && eraClaims_sp_result != null)
                    {

                        var claimDetails = eraClaims_sp_result.GroupBy(c => c.PATIENTACCOUNTNUMBER).Select(group => new
                        {
                            claims = group.Select(v =>
                            {
                                var PATIENTRESPONSIBILITYREASONCODE = "";
                                var PRTYPE = "";
                                var PRCode = "";

                                double PATIENTRESPONSIBILITY = 0;

                                var ADJCODE1 = "";
                                var ADJCODE2 = "";
                                string ADJAMT1 = "";

                                if (v.ADJCODE1 == "PR")
                                {
                                    PATIENTRESPONSIBILITYREASONCODE = v.ADJCODE1 + '-' + v.ADJCODE2;
                                    PRCode= v.ADJCODE2;
                                    switch (v.ADJCODE2)
                                    {
                                        case "1":
                                            PRTYPE = "DEDCUTIBLE";
                                            break;
                                        case "2":
                                            PRTYPE = "COINS";
                                            break;
                                        case "3":
                                            PRTYPE = "COPAY";
                                            break;
                                    }
                                    PATIENTRESPONSIBILITY = double.Parse(v.ADJAMT1);
                                }
                                else
                                {
                                    if (v.ADJCODE3 != null)
                                    {
                                        ADJCODE1 = v.ADJCODE1 + '-' + v.ADJCODE2 + ',' + v.ADJCODE1 + '-' + v.ADJCODE3;
                                    }
                                    else
                                    {
                                        ADJCODE1 = v.ADJCODE1 + '-' + v.ADJCODE2;
                                    }
                                    ADJCODE2 = v.ADJCODE2;
                                    ADJAMT1 = double.Parse(v.ADJAMT1).ToString();
                                }

                                if (v.PATIENTRESPONSIBILITYREASONCODE == "PR" && v.PATIENTRESPONSIBILITYREASONCODE !=null)
                                {
                                    PATIENTRESPONSIBILITYREASONCODE = v.PATIENTRESPONSIBILITYREASONCODE + '-' + v.PRTYPE;
                                    PRCode = v.PRTYPE;
                                    switch (v.PRTYPE)
                                    {
                                        case "1":
                                            PRTYPE = "DEDCUTIBLE";
                                            break;
                                        case "2":
                                            PRTYPE = "COINS";
                                            break;
                                        case "3":
                                            PRTYPE = "COPAY";
                                            break;
                                    }
                                    PATIENTRESPONSIBILITY = double.Parse(v.PATIENTRESPONSIBILITY);
                                }
                                else
                                {
                                    if (v.PATIENTRESPONSIBILITYREASONCODE != null)
                                    {
                                        ADJCODE1 = ADJCODE1 + "," + v.PATIENTRESPONSIBILITYREASONCODE + "-" + v.PRTYPE;
                                        ADJCODE2 = ADJCODE2 + "," + v.PRTYPE;
                                        ADJAMT1 = ADJAMT1 + ',' + v.PATIENTRESPONSIBILITY;
                                    }
                                }



                                return new
                                {
                                    ERAID = v.ERAID,
                                    CLAIMNO = v.CLAIMNO,
                                    PATIENTNAME = v.PATIENTNAME,
                                    INSUREDNAME = v.INSUREDNAME,
                                    CLAIMSTATUS = v.CLAIMSTATUS,
                                    CLAIMPAYMENTAMOUNT = v.CLAIMPAYMENTAMOUNT,
                                    CLAIMADJAMT = v.CLAIMADJAMT,
                                    CLAIMADJCODES = v.CLAIMADJCODES,
                                    CLAIMREMARKCODES = v.CLAIMREMARKCODES,
                                    MEMBERIDENTIFICATION_ = v.MEMBERIDENTIFICATION_,
                                    INSUREDMEMBERIDENTIFICATION_ = v.INSUREDMEMBERIDENTIFICATION_,
                                    PATIENTACCOUNTNUMBER = v.PATIENTACCOUNTNUMBER,
                                    RENNDERINGPROVIDER = v.RENNDERINGPROVIDER,
                                    RENDERINGNPI = v.RENDERINGNPI,
                                    PAYERCLAIMCONTROLNUMBERICN_ = v.PAYERCLAIMCONTROLNUMBERICN_,
                                    PATIENTRESPONSIBILITY = PATIENTRESPONSIBILITY,
                                    PATIENTRESPONSIBILITYREASONCODE = PATIENTRESPONSIBILITYREASONCODE,
                                    PATIENTGROUP_ = v.PATIENTGROUP_,
                                    BEGINSERVICEDATE = v.BEGINSERVICEDATE,
                                    ENDSERVICEDATE = v.ENDSERVICEDATE,
                                    PAIDUNITS = v.PAIDUNITS,
                                    PROCCODE = v.PROCCODE,
                                    MODI = v.MODI,
                                    BILLEDAMOUNT = double.Parse(v.BILLEDAMOUNT),
                                    ALLOWEDAMOUNT = double.Parse(v.ALLOWEDAMOUNT),
                                    PRTYPE = PRTYPE,
                                    ADJCODE1 = ADJCODE1,
                                    ADJCODE2 = ADJCODE2,
                                    ADJCODE3 = v.ADJCODE3,
                                    ADJAMT1 = ADJAMT1,
                                    ADJAMT2 = double.Parse(v.ADJAMT2),
                                    ADJUCODE1 = v.ADJUCODE1,
                                    ADJUCODE2 = v.ADJUCODE2,
                                    ADJUCODE3 = v.ADJUCODE3,
                                    PROVIDERPAID = double.Parse(v.PROVIDERPAID),
                                    DEDUCTAMOUNT = PRTYPE != null && PRCode == "1" ? PATIENTRESPONSIBILITY : 0.00,
                                    COINSAMOUNT = PRTYPE != null && PRCode == "2" ? PATIENTRESPONSIBILITY : 0.00,
                                    COPAYAMOUNT = PRTYPE != null && PRCode == "3" ? PATIENTRESPONSIBILITY : 0.00,
                                    OTHERADJUSTMENT = (double.Parse(v.ADJAMT2) != 0)? (ADJAMT1 + ',' + double.Parse(v.ADJAMT2).ToString()): (ADJAMT1 != "" ? ADJAMT1 : "00"),
                                };
                            }),

                            claimsTotal = new
                            {
                                BILLEDAMOUNT = group.Sum(v => double.Parse(v.BILLEDAMOUNT)),
                                ALLOWEDAMOUNT = group.Sum(v => double.Parse(v.ALLOWEDAMOUNT)),
                                DEDUCTAMOUNT = group.Sum(v =>
                                {
                                    double PATIENTRESPONSIBILITY = 0;
                                    if (v.PATIENTRESPONSIBILITYREASONCODE == "PR" && v.PRTYPE != null && v.PRTYPE == "1")
                                    {
                                        PATIENTRESPONSIBILITY = double.Parse(v.PATIENTRESPONSIBILITY);
                                    }

                                    if (v.ADJCODE1 == "PR" && v.ADJCODE2 != null && v.ADJCODE2 == "1")
                                    {
                                        PATIENTRESPONSIBILITY = double.Parse(v.ADJAMT1);
                                    }
                                    return PATIENTRESPONSIBILITY;
                                }),
                                //DEDUCTAMOUNT = group.Sum(v => v.PRTYPE != null && v.PRTYPE == "1" ? double.Parse(v.PATIENTRESPONSIBILITY) : 0.00),
                                COINSAMOUNT = group.Sum(v =>
                                {
                                    double PATIENTRESPONSIBILITY = 0;
                                    if (v.PATIENTRESPONSIBILITYREASONCODE == "PR" && v.PRTYPE != null && v.PRTYPE == "2")
                                    {
                                        PATIENTRESPONSIBILITY = double.Parse(v.PATIENTRESPONSIBILITY);
                                    }

                                    if (v.ADJCODE1 == "PR" && v.ADJCODE2 != null && v.ADJCODE2 == "2")
                                    {
                                        PATIENTRESPONSIBILITY = double.Parse(v.ADJAMT1);
                                    }
                                    return PATIENTRESPONSIBILITY;
                                }),
                                //COINSAMOUNT = group.Sum(v => v.PRTYPE != null && v.PRTYPE == "2" ? double.Parse(v.PATIENTRESPONSIBILITY) : 0.00),
                                COPAYAMOUNT = group.Sum(v =>
                                {
                                    double PATIENTRESPONSIBILITY = 0;
                                    if (v.PATIENTRESPONSIBILITYREASONCODE == "PR" && v.PRTYPE != null && v.PRTYPE == "3")
                                    {
                                        PATIENTRESPONSIBILITY = double.Parse(v.PATIENTRESPONSIBILITY);
                                    }

                                    if (v.ADJCODE1 == "PR" && v.ADJCODE2 != null && v.ADJCODE2 == "3")
                                    {
                                        PATIENTRESPONSIBILITY =  double.Parse(v.ADJAMT1);
                                    }
                                    return PATIENTRESPONSIBILITY;
                                }),


                                //OTHERADJUSTMENT = group.Sum(v => double.Parse(v.ADJAMT1) + double.Parse(v.ADJAMT2)),


                                OTHERADJUSTMENT = group.Sum(v =>
                                {
                                    double ADJAMT1 = 0;

                                    if (v.PATIENTRESPONSIBILITYREASONCODE != "PR" && v.PATIENTRESPONSIBILITYREASONCODE != null)
                                    {
                                        ADJAMT1 = double.Parse(v.PATIENTRESPONSIBILITY);
                                    }

                                    if (v.ADJCODE1 != "PR")
                                    {
                                        ADJAMT1 += double.Parse(v.ADJAMT1);
                                    }

                                    double sum = 0;
                                    if (v.ADJAMT2 != null)
                                    {
                                        sum = ADJAMT1 + double.Parse(v.ADJAMT2);
                                        return sum;
                                    }

                                    //double adjamt1Value = 0.0;
                                    //if (!string.IsNullOrEmpty(ADJAMT1) && double.TryParse(ADJAMT1, out adjamt1Value))
                                    //{
                                    //    return adjamt1Value + double.Parse(v.ADJAMT2);
                                    //}

                                    return sum;
                                }),

                                PROVIDERPAID = group.Sum(v => double.Parse(v.PROVIDERPAID))
                            }
                        });

                        if (eraClaims_sp_result != null && eraClaims_sp_result.Count() > 0)
                        {
                            var checkTotal = eraClaims_sp_result.GroupBy(c => c.ERAID).Select(group => new
                            {
                                BILLEDAMOUNT = group.Sum(v => double.Parse(v.BILLEDAMOUNT)),
                                ALLOWEDAMOUNT = group.Sum(v => double.Parse(v.ALLOWEDAMOUNT)),

                                //DEDUCTAMOUNT = group.Sum(v => v.PRTYPE != null && v.PRTYPE == "1" ? double.Parse(v.PATIENTRESPONSIBILITY) : 0.00),
                                //COINSAMOUNT = group.Sum(v => v.PRTYPE != null && v.PRTYPE == "2" ? double.Parse(v.PATIENTRESPONSIBILITY) : 0.00),
                                //COPAYAMOUNT = group.Sum(v => v.PRTYPE != null && v.PRTYPE == "3" ? double.Parse(v.PATIENTRESPONSIBILITY) : 0.00),
                                DEDUCTAMOUNT = group.Sum(v =>
                                {
                                    double PATIENTRESPONSIBILITY = 0;
                                    if (v.PATIENTRESPONSIBILITYREASONCODE == "PR" && v.PRTYPE != null && v.PRTYPE == "1")
                                    {
                                        PATIENTRESPONSIBILITY = double.Parse(v.PATIENTRESPONSIBILITY);
                                    }

                                    if (v.ADJCODE1 == "PR" && v.ADJCODE2 != null && v.ADJCODE2 == "1")
                                    {
                                        PATIENTRESPONSIBILITY = double.Parse(v.ADJAMT1);
                                    }
                                    return PATIENTRESPONSIBILITY;
                                }),
                                //DEDUCTAMOUNT = group.Sum(v => v.PRTYPE != null && v.PRTYPE == "1" ? double.Parse(v.PATIENTRESPONSIBILITY) : 0.00),
                                COINSAMOUNT = group.Sum(v =>
                                {
                                    double PATIENTRESPONSIBILITY = 0;
                                    if (v.PATIENTRESPONSIBILITYREASONCODE == "PR" && v.PRTYPE != null && v.PRTYPE == "2")
                                    {
                                        PATIENTRESPONSIBILITY = double.Parse(v.PATIENTRESPONSIBILITY);
                                    }

                                    if (v.ADJCODE1 == "PR" && v.ADJCODE2 != null && v.ADJCODE2 == "2")
                                    {
                                        PATIENTRESPONSIBILITY = double.Parse(v.ADJAMT1);
                                    }
                                    return PATIENTRESPONSIBILITY;
                                }),
                                //COINSAMOUNT = group.Sum(v => v.PRTYPE != null && v.PRTYPE == "2" ? double.Parse(v.PATIENTRESPONSIBILITY) : 0.00),
                                COPAYAMOUNT = group.Sum(v =>
                                {
                                    double PATIENTRESPONSIBILITY = 0;
                                    if (v.PATIENTRESPONSIBILITYREASONCODE == "PR" && v.PRTYPE != null && v.PRTYPE == "3")
                                    {
                                        PATIENTRESPONSIBILITY = double.Parse(v.PATIENTRESPONSIBILITY);
                                    }

                                    if (v.ADJCODE1 == "PR" && v.ADJCODE2 != null && v.ADJCODE2 == "3")
                                    {
                                        PATIENTRESPONSIBILITY = double.Parse(v.ADJAMT1);
                                    }
                                    return PATIENTRESPONSIBILITY;
                                }),
                                //OTHERADJUSTMENT = group.Sum(v => double.Parse(v.ADJAMT1) + double.Parse(v.ADJAMT2)),
                                OTHERADJUSTMENT = group.Sum(v =>
                                {
                                    string ADJAMT1 = "";

                                    if (v.PATIENTRESPONSIBILITYREASONCODE != "PR")
                                    {
                                        ADJAMT1 = v.PATIENTRESPONSIBILITYREASONCODE;
                                    }

                                    if (v.ADJAMT1 != "PR")
                                    {
                                        ADJAMT1 += v.ADJAMT1;
                                    }

                                    double adjamt1Value = 0.0;
                                    if (!string.IsNullOrEmpty(ADJAMT1) && double.TryParse(ADJAMT1, out adjamt1Value))
                                    {
                                        return adjamt1Value + double.Parse(v.ADJAMT2);
                                    }

                                    return double.Parse(v.ADJAMT2);
                                }),
                                PROVIDERPAID = group.Sum(v => double.Parse(v.PROVIDERPAID))
                            }).Single();
                            res.Response.checkTotal = checkTotal;
                        }
                        else
                        {
                            res.Response.checkTotal = new
                            {
                                BILLEDAMOUNT = 0.00,
                                ALLOWEDAMOUNT = 0.00,
                                DEDUCTAMOUNT = 0.00,
                                COINSAMOUNT = 0.00,
                                COPAYAMOUNT = 0.00,
                                OTHERADJUSTMENT = 0.00,
                                PROVIDERPAID = 0.00
                            };
                        }


                        var testing = eraDetails;


                        res.Status = "success";
                        res.Response.era = eraDetails;
                        res.Response.eraClaims = claimDetails;
                        res.Response.glossary = glossary;
                    }
                    else
                    {
                        res.Status = "invalid-era-id";
                        res.Response = "No ERA found with id " + model.eraId;
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }
            return res;
        }




        //public ResponseModel EraSummary(EraSummaryRequest model)
        //{
        //    ResponseModel res = new ResponseModel();
        //    res.Response = new ExpandoObject();
        //    try
        //    {
        //        using (var ctx = new NPMDBEntities())
        //        {
        //            var eraDetails = ctx.SP_ERASEARCH(model.eraId, null, null, null, null, null, null, null, null, null).FirstOrDefault(    );
        //            var eraClaims_sp_result = ctx.SP_ERACLAIMDETAIL(null, model.eraId, null, null, null).ToList();
        //            var glossary = ctx.SP_ERAADJCODEGLOSSARY(model.eraId).ToList();
        //            if (eraDetails != null && eraClaims_sp_result != null)
        //            {
        //                var claimDetails = eraClaims_sp_result.GroupBy(c => c.PATIENTACCOUNTNUMBER).Select(group => new
        //                {
        //                    claims = group.Select(v => new
        //                    {
        //                        ERAID = v.ERAID,
        //                        CLAIMNO = v.CLAIMNO,
        //                        PATIENTNAME = v.PATIENTNAME,
        //                        INSUREDNAME = v.INSUREDNAME,
        //                        CLAIMSTATUS = v.CLAIMSTATUS,
        //                        CLAIMPAYMENTAMOUNT = v.CLAIMPAYMENTAMOUNT,
        //                        CLAIMADJAMT = v.CLAIMADJAMT,
        //                        CLAIMADJCODES = v.CLAIMADJCODES,
        //                        CLAIMREMARKCODES = v.CLAIMREMARKCODES,
        //                        MEMBERIDENTIFICATION_ = v.MEMBERIDENTIFICATION_,
        //                        INSUREDMEMBERIDENTIFICATION_ = v.INSUREDMEMBERIDENTIFICATION_,
        //                        PATIENTACCOUNTNUMBER = v.PATIENTACCOUNTNUMBER,
        //                        RENNDERINGPROVIDER = v.RENNDERINGPROVIDER,
        //                        RENDERINGNPI = v.RENDERINGNPI,
        //                        PAYERCLAIMCONTROLNUMBERICN_ = v.PAYERCLAIMCONTROLNUMBERICN_,
        //                        PATIENTRESPONSIBILITY = v.PATIENTRESPONSIBILITY,
        //                        PATIENTRESPONSIBILITYREASONCODE = v.PATIENTRESPONSIBILITYREASONCODE,
        //                        PATIENTGROUP_ = v.PATIENTGROUP_,
        //                        BEGINSERVICEDATE = v.BEGINSERVICEDATE,
        //                        ENDSERVICEDATE = v.ENDSERVICEDATE,
        //                        PAIDUNITS = v.PAIDUNITS,
        //                        PROCCODE = v.PROCCODE,
        //                        MODI = v.MODI,
        //                        BILLEDAMOUNT = double.Parse(v.BILLEDAMOUNT),
        //                        ALLOWEDAMOUNT = double.Parse(v.ALLOWEDAMOUNT),
        //                        PRTYPE = v.PRTYPE,
        //                        ADJCODE1 = v.ADJCODE1,
        //                        ADJCODE2 = v.ADJCODE2,
        //                        ADJCODE3 = v.ADJCODE3,
        //                        ADJAMT1 = double.Parse(v.ADJAMT1),
        //                        ADJAMT2 = double.Parse(v.ADJAMT2),
        //                        ADJUCODE1 = v.ADJUCODE1,
        //                        ADJUCODE2 = v.ADJUCODE2,
        //                        ADJUCODE3 = v.ADJUCODE3,
        //                        PROVIDERPAID = double.Parse(v.PROVIDERPAID),
        //                        DEDUCTAMOUNT = v.PRTYPE != null && v.PRTYPE.ToLower() == "deduct" ? double.Parse(v.PATIENTRESPONSIBILITY) : 0.00,
        //                        COINSAMOUNT = v.PRTYPE != null && v.PRTYPE.ToLower() == "coins" ? double.Parse(v.PATIENTRESPONSIBILITY) : 0.00,
        //                        COPAYAMOUNT = v.PRTYPE != null && v.PRTYPE.ToLower() == "copay" ? double.Parse(v.PATIENTRESPONSIBILITY) : 0.00,
        //                        OTHERADJUSTMENT = double.Parse(v.ADJAMT1) + double.Parse(v.ADJAMT2),
        //                    }),
        //                    claimsTotal = new
        //                    {
        //                        BILLEDAMOUNT = group.Sum(v => double.Parse(v.BILLEDAMOUNT)),
        //                        ALLOWEDAMOUNT = group.Sum(v => double.Parse(v.ALLOWEDAMOUNT)),
        //                        DEDUCTAMOUNT = group.Sum(v => v.PRTYPE != null && v.PRTYPE.ToLower() == "deduct" ? double.Parse(v.PATIENTRESPONSIBILITY) : 0.00),
        //                        COINSAMOUNT = group.Sum(v => v.PRTYPE != null && v.PRTYPE.ToLower() == "coins" ? double.Parse(v.PATIENTRESPONSIBILITY) : 0.00),
        //                        COPAYAMOUNT = group.Sum(v => v.PRTYPE != null && v.PRTYPE.ToLower() == "copay" ? double.Parse(v.PATIENTRESPONSIBILITY) : 0.00),
        //                        OTHERADJUSTMENT = group.Sum(v => double.Parse(v.ADJAMT1) + double.Parse(v.ADJAMT2)),
        //                        PROVIDERPAID = group.Sum(v => double.Parse(v.PROVIDERPAID))
        //                    }
        //                });
        //                if (eraClaims_sp_result != null && eraClaims_sp_result.Count() > 0)
        //                {
        //                    var checkTotal = eraClaims_sp_result.GroupBy(c => c.ERAID).Select(group => new
        //                    {
        //                        BILLEDAMOUNT = group.Sum(v => double.Parse(v.BILLEDAMOUNT)),
        //                        ALLOWEDAMOUNT = group.Sum(v => double.Parse(v.ALLOWEDAMOUNT)),
        //                        DEDUCTAMOUNT = group.Sum(v => v.PRTYPE != null && v.PRTYPE.ToLower() == "deduct" ? double.Parse(v.PATIENTRESPONSIBILITY) : 0.00),
        //                        COINSAMOUNT = group.Sum(v => v.PRTYPE != null && v.PRTYPE.ToLower() == "coins" ? double.Parse(v.PATIENTRESPONSIBILITY) : 0.00),
        //                        COPAYAMOUNT = group.Sum(v => v.PRTYPE != null && v.PRTYPE.ToLower() == "copay" ? double.Parse(v.PATIENTRESPONSIBILITY) : 0.00),
        //                        OTHERADJUSTMENT = group.Sum(v => double.Parse(v.ADJAMT1) + double.Parse(v.ADJAMT2)),
        //                        PROVIDERPAID = group.Sum(v => double.Parse(v.PROVIDERPAID))
        //                    }).Single();
        //                    res.Response.checkTotal = checkTotal;
        //                }
        //                else
        //                {
        //                    res.Response.checkTotal = new
        //                    {
        //                        BILLEDAMOUNT = 0.00,
        //                        ALLOWEDAMOUNT = 0.00,
        //                        DEDUCTAMOUNT = 0.00,
        //                        COINSAMOUNT = 0.00,
        //                        COPAYAMOUNT = 0.00,
        //                        OTHERADJUSTMENT = 0.00,
        //                        PROVIDERPAID = 0.00
        //                    };
        //                }

        //                res.Status = "success";
        //                res.Response.era = eraDetails;
        //                res.Response.eraClaims = claimDetails;
        //                res.Response.glossary = glossary;
        //            }
        //            else
        //            {
        //                res.Status = "invalid-era-id";
        //                res.Response = "No ERA found with id " + model.eraId;
        //            }
        //        }
        //    }
        //    catch (Exception)
        //    {
        //        throw;
        //    }
        //    return res;
        //}

        public ResponseModel ERAClaimSummary(claimsummaryrequest model)
        {
            ResponseModel res = new ResponseModel();
            try
            {
                using (var ctx = new NPMDBEntities())
                {
                    var eraDetails = ctx.SP_ERASEARCH(model.eraId, null, null, null, null, null, null, null, null, null).FirstOrDefault();
                    var eraClaims = ctx.SP_ERACLAIMDETAIL(null, model.eraId, null, null, null).ToList();
                    if (eraDetails != null && eraClaims != null)
                    {
                        res.Status = "success";
                        res.Response = new ExpandoObject();
                        res.Response.era = eraDetails;
                        res.Response.eraClaims = eraClaims;
                    }
                    else
                    {
                        res.Status = "invalid-era-id";
                        res.Response = "No ERA found with id " + model.eraId;
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }
            return res;
        }

        public ResponseModel ApplyERA(ApplyERARequestModel req, long userId)
        {
            ResponseModel res = new ResponseModel();
            try
            {
                using (var ctx = new NPMDBEntities())
                {
                    var status = ctx.SP_ERACLAIMSAUTOPOST(req.eraId, string.Join(",", req.claims), userId, req.depositDate);
                    var eraDetails = ctx.SP_ERASEARCH(req.eraId, null, null, null, null, null, null, null, null, null).FirstOrDefault();
                    var eraClaims = ctx.SP_ERACLAIMDETAIL(null, req.eraId, null, null, null).ToList();
                    res.Response = new ExpandoObject();
                    res.Response.era = eraDetails;
                    res.Response.eraClaims = eraClaims;
                    res.Status = "success";
                }
            }
            catch (Exception ex)
            {
                throw;
            }
            return res;
        }

        public ResponseModel AutoPost(ERAAutoPostRequestModel request, long userId)
        {
            ResponseModel res = new ResponseModel();
            try
            {
                using (var ctx = new NPMDBEntities())
                {
                    var status = ctx.SP_ERAAUTOPOST(request.id, userId, request.depositDate);
                    var eraDetails = ctx.SP_ERASEARCH(request.id, null, null, null, null, null, null, null, null, null).FirstOrDefault();
                    var eraClaims = ctx.SP_ERACLAIMDETAIL(null, request.id, null, null, null).ToList();
                    res.Response = new ExpandoObject();
                    res.Response.era = eraDetails;
                    res.Response.eraClaims = eraClaims;
                    res.Status = "success";
                }
            }
            catch (Exception)
            {
                throw;
            }
            return res;
        }
    }
}