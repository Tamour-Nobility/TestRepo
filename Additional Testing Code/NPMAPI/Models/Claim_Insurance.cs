//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace NPMAPI.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Claim_Insurance
    {
        public long Claim_Insurance_Id { get; set; }
        public long Patient_Account { get; set; }
        public long Claim_No { get; set; }
        public long Insurance_Id { get; set; }
        public string Pri_Sec_Oth_Type { get; set; }
        public Nullable<decimal> Co_Payment { get; set; }
        public Nullable<decimal> Deductions { get; set; }
        public string Policy_Number { get; set; }
        public string Group_Number { get; set; }
        public Nullable<System.DateTime> Effective_Date { get; set; }
        public Nullable<System.DateTime> Termination_Date { get; set; }
        public Nullable<long> Subscriber { get; set; }
        public string Access_Carolina_Number { get; set; }
        public string Relationship { get; set; }
        public Nullable<bool> Is_Capitated_Claim { get; set; }
        public Nullable<int> Allowed_Visits { get; set; }
        public Nullable<int> Remaining_Visits { get; set; }
        public Nullable<System.DateTime> Visits_Start_Date { get; set; }
        public Nullable<System.DateTime> Visits_End_Date { get; set; }
        public Nullable<bool> Deleted { get; set; }
        public Nullable<long> Created_By { get; set; }
        public Nullable<System.DateTimeOffset> Created_Date { get; set; }
        public Nullable<long> Modified_By { get; set; }
        public Nullable<System.DateTimeOffset> Modified_Date { get; set; }
        public string CCN { get; set; }
        public string Group_Name { get; set; }
        public Nullable<bool> Print_Center { get; set; }
        public Nullable<bool> Corrected_Claim { get; set; }
        public string ICN { get; set; }
        public Nullable<bool> Late_Filing { get; set; }
        public string Late_Filing_Reason { get; set; }
        public string MCR_SEC_Payer { get; set; }
        public Nullable<long> MCR_SEC_Payer_Code { get; set; }
        public string Notes { get; set; }
        public Nullable<bool> Send_notes { get; set; }
        public string Certification_Number { get; set; }
        public string Certification_Action { get; set; }
        public Nullable<System.DateTime> Certification_Issue_Date { get; set; }
        public Nullable<System.DateTime> Certification_Expiry_Date { get; set; }
        public string Rej_Code { get; set; }
        public Nullable<System.DateTime> Response_Date { get; set; }
        public Nullable<bool> Send_Appeal { get; set; }
        public string Admission_Type_Code { get; set; }
        public string Admission_Source_Code { get; set; }
        public string Patient_Status_Code { get; set; }
        public string Filing_Indicator_Code { get; set; }
        public string Filing_Indicator { get; set; }
        public string Plan_type { get; set; }
        public string Coverage_Description { get; set; }
        public Nullable<bool> Reconsideration { get; set; }
        public Nullable<bool> Medical_Notes { get; set; }
        public Nullable<bool> Claim_Status_Request { get; set; }
        public Nullable<int> Co_Payment_Per { get; set; }
        public string Plan_Name { get; set; }
        public string PLAN_NAME_TYPE { get; set; }
        public string Co_Insurance { get; set; }
        public Nullable<bool> Returned_Hcfa { get; set; }
        public Nullable<bool> Appeal_Required { get; set; }
    }
}