using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.Entity.Validation;
using System.Linq;
using System.Web;
using System.Web.Http;
using NPMAPI.App_Start;
using NPMAPI.Models;
using NPMAPI.Models.ViewModels;
using NPMAPI.Repositories;
using NPMAPI.com.gatewayedi.services;
using System.Data.Entity;
using System.Web.UI;

namespace NPMAPI.Controllers
{
    public class DemographicController : BaseController
    {
        private readonly IDemographicRepository _demographicService;
        private readonly IFileHandler _fileHandler;
        private readonly IScrubberRepository _scrubberService;
        public DemographicController(IDemographicRepository demographicService, IFileHandler fileHandler, IScrubberRepository scrubberService)
        {
            _scrubberService = scrubberService;
            _demographicService = demographicService;
            _fileHandler = fileHandler;
        }
        public ResponseModel GetPatientList()
        {
            return _demographicService.GetPatientList();

        }
        public ResponseModel GetstateList()
        {
            return _demographicService.GetState();

        }

        [HttpPost]
        public ResponseModel SearchPatient([FromBody] PatientSearchModel SearchModel)
        {
            return _demographicService.SearchPatient(SearchModel);
        }
        [HttpPost]
        public ResponseModel IsPatientAlreadyExist(DublicatePatientCheckModel model)
        {
            ResponseModel response = new ResponseModel();
            if (!ModelState.IsValid)
            {
                response.Status = string.Join(";", ModelState.Values.SelectMany(e => e.Errors).Select(e => e.ErrorMessage));
                return response;
            }
            return _demographicService.IsPatientAlreadyExist(model);
        }
        [HttpGet]
        public ResponseModel GetPatientModel(long practiceCode)
        {
            return _demographicService.GetPatientModel(practiceCode);
        }
        [HttpGet]
        public ResponseModel GetPatient(long PatientAccount)
        {
            return _demographicService.GetPatient(PatientAccount);
        }
        [HttpGet]
        public ResponseModel DeletePatient(long PatientAccount)
        {
            return _demographicService.DeletePatient(PatientAccount);
        }
        public ResponseModel GetFinancialGurantor(string Name)
        {
            return _demographicService.GetFinancialGurantor(Name);
        }
        public ResponseModel GetFinancialGurantorSubscriber(string Name)
        {
            return _demographicService.GetFinancialGurantorSubscriber(Name);
        }
        public ResponseModel GetCityState(string ZipCode)
        {
            return _demographicService.GetCityState(ZipCode);
        }
        [HttpPost]
        public ResponseModel AddEditPatient([FromBody] PatientCreateViewModel PatientModel)
        {
            ResponseModel objResponse = new ResponseModel();
            try
            {
                // email or email not available
                if (PatientModel.emailnotonfile && ModelState["PatientModel.Email_Address"] != null)
                    ModelState["PatientModel.Email_Address"].Errors.Clear();
                if (!PatientModel.emailnotonfile && ModelState["PatientModel.emailnotonfile"] != null)
                    ModelState["PatientModel.emailnotonfile"].Errors.Clear();
                if (PatientModel.PTL_STATUS && ModelState["PatientModel.Last_Name"] == null && ModelState["PatientModel.First_Name"] == null)
                {
                    // Model validation to save as draft
                    List<string> draftPatModelErr = ModelState.Values.SelectMany(m => m.Errors).Select(m => m.ErrorMessage).ToList().Where(e => !e.ToLowerInvariant().Contains("required.")).ToList();
                    if (draftPatModelErr.Count > 0)
                    {
                        var a = ModelState.Values.SelectMany(m => m.Errors).Select(m => m.ErrorMessage).ToList();
                        objResponse.Status = string.Join(";", draftPatModelErr);
                        return objResponse;
                    }
                }
                else if (!ModelState.IsValid)
                {
                    // Model validation to save
                    objResponse.Status = string.Join(";", ModelState.Values.SelectMany(m => m.Errors).Select(m => m.ErrorMessage));
                    return objResponse;
                }
                objResponse = _demographicService.AddEditPatient(PatientModel, GetUserId());
                if (objResponse.Status == "Sucess" && PatientModel.PatientInsuranceList != null && PatientModel.PatientInsuranceList.Count() > 0)
                {
                    PatientModel.PatientInsuranceList.ForEach(PI =>
                    {
                        if (PI.Patient_Account == 0 || PI.Patient_Account == null)
                            PI.Patient_Account = objResponse.Response;
                        SavePatientInsurace(PI);
                    });
                }
            }
            catch (Exception ex)
            {
                objResponse.Status = ex.ToString();
            }
            return objResponse;
        }
        private ResponseModel SavePatientInsurace(PatientInsuranceViewModel model)
        {
            return _demographicService.SavePatientInsurance(model, GetUserId());
        }

        [HttpGet]
        public ResponseModelForE InquiryByPracPatProvider(long PracticeCode, long PatAcccount, long ProviderCode,long insurance_id)
        {
            return _demographicService.InquiryByPracPatProvider(PracticeCode, PatAcccount, ProviderCode, insurance_id);
        }

        [HttpPost]
        public ResponseModel SearchInsurance([FromBody] InsuranceSearchViewModel model)
        {
            return _demographicService.SearchInsurance(model);
        }
        [HttpPost]
        public ResponseModel SavePatientInsurance([FromBody] Patient_Insurance Model)
        {
            ResponseModel objResponse = new ResponseModel();
            if (!ModelState.IsValid)
            {
                objResponse.Status = "Error in Model";
                return objResponse;
            }

            return _demographicService.SavePatientInsurance(Model);
        }
        [HttpGet]
        public ResponseModel DeletePatientInsurance(long PatientAccount, long PatientInsuranceId)
        {
            return _demographicService.DeletePatientInsurance(PatientAccount, PatientInsuranceId);
        }
        public ResponseModel GetPatientNotes(long PatientAccount)
        {
            return _demographicService.GetPatientNotes(PatientAccount);
        }
        public ResponseModel GetPatientNote(long PatientNotesId)
        {
            return _demographicService.GetPatientNote(PatientNotesId);
        }
        [HttpPost]
        public ResponseModel SavePatientNotes([FromBody] Patient_Notes PatientNote)
        {
            ResponseModel objResponse = new ResponseModel();
            if (!ModelState.IsValid)
            {
                objResponse.Status = string.Join(";", ModelState.Values.SelectMany(error => error.Errors).Select(error => error.ErrorMessage));
                return objResponse;
            }

            return _demographicService.SavePatientNotes(PatientNote, GetUserId());


        }
        public ResponseModel DeletePatientNote(long PatientAccount, long PatientNotesId)
        {
            return _demographicService.DeletePatientNote(PatientAccount, PatientNotesId);
        }

        [HttpPost]
        public ResponseModel UploadImage()
        {
            try
            {
                string fileNewName = $"{(Int32)(DateTime.UtcNow.Subtract(new DateTime(1970, 1, 1))).TotalSeconds}{Guid.NewGuid().ToString()}";
                return _fileHandler.UploadImage(
                      HttpContext.Current.Request.Files[0],
                      HttpContext.Current.Server.MapPath($"~/{ConfigurationManager.AppSettings["PatientPicturesPath"]}/{fileNewName}"),
                      new string[] { ".jpg", ".jpeg", ".png", ".gif" },
                      fileNewName,
                      GlobalVariables.MaximumPatientPictureSize);
            }
            catch (Exception ex)
            {
                return new ResponseModel() { Status = ex.ToString() };
            }
        }

        [HttpGet]
        [AllowAnonymous]
        public ResponseModel GetImage(long PatientAccount)
        {

            var picturePath = _demographicService.GetPatientPicturePath(PatientAccount);
            if (string.IsNullOrEmpty(picturePath))
            {
                return new ResponseModel()
                {
                    Status = "error"
                };
            }
            return _fileHandler.DownloadFile(HttpContext.Current.Server.MapPath($"~/{ConfigurationManager.AppSettings["PatientPicturesPath"]}/{picturePath}"));
        }
        public ResponseModel GetAppointments(long PatientAccount = 0)
        {
            return _demographicService.GetAppointments(PatientAccount);
        }
        public ResponseModel GetClaimModel(long PatientAccount, long ClaimNo = 0)
        {
            return _demographicService.GetClaimModel(PatientAccount, ClaimNo);
        }
        [HttpPost]
        public ResponseModel SaveClaim(ClaimsViewModel ClaimModel)
        {
            try
            {
                ResponseModel objResponse = new ResponseModel();
                if (!ModelState.IsValid)
                {
                    objResponse.Status = "Error in Model";
                    return objResponse;
                }

                return _demographicService.SaveClaim(ClaimModel, GetUserId());
            }
            catch (DbEntityValidationException e)
            {
                foreach (var eve in e.EntityValidationErrors)
                {
                    Console.WriteLine("Entity of type \"{0}\" in state \"{1}\" has the following validation errors:",
                        eve.Entry.Entity.GetType().Name, eve.Entry.State);
                    foreach (var ve in eve.ValidationErrors)
                    {
                        Console.WriteLine("- Property: \"{0}\", Error: \"{1}\"",
                            ve.PropertyName, ve.ErrorMessage);
                    }
                }
                throw;
            }

        }
        public ResponseModel GetPatientClaims(long ClaimNo = 0)
        {
            return _demographicService.GetPatientClaim(ClaimNo);
        }
        public ResponseModel DeleteClaim(long ClaimNo)
        {
            return _demographicService.DeleteClaim(ClaimNo);
        }
        public ResponseModel GetClaimNotes(long ClaimNo)
        {
            return _demographicService.GetClaimNotes(ClaimNo);
        }
        public ResponseModel GetClaimNote(long ClaimNotesId)
        {
            return _demographicService.GetClaimNote(ClaimNotesId);
        }
        [HttpGet]
        public ResponseModel GetServiceTypeCodesDescription()
        {
            return _demographicService.GetServiceTypeCodesDescription(GetUserId());
        }


        [HttpGet]
        public ResponseModel GetModifiers()
        {
            return _demographicService.GetModifiers();
        }
        [HttpPost]
        public ResponseModel SaveClaimNotes([FromBody] CLAIM_NOTES ClaimNote)
        {
            ResponseModel objResponse = new ResponseModel();
            if (!ModelState.IsValid)
            {
                objResponse.Status = "Error in Model";
                return objResponse;
            }

            return _demographicService.SaveClaimNotes(ClaimNote);

        }
        public ResponseModel DeleteClaimNote(long PatientAccount, long PatientNotesId)
        {
            return _demographicService.DeleteClaimNote(PatientAccount, PatientNotesId);
        }
        //Added by HAMZA ZULFIQAR as per USER STORY 119: Reporting Dashboard Implementation For All Practices
        public ResponseModel GetFacilitySelectList(long PracticeCode)
        {
            return _demographicService.GetFacilitySelectList(PracticeCode);
        }
        public ResponseModel GetFacility(long PracticeCode)
        {
            return _demographicService.GetFacility(PracticeCode);
        }
        public ResponseModel SearchFacilities([FromBody] FacilitySearchModel FacilityModel)
        {
            return _demographicService.SearchFacilities(FacilityModel);
        }
        [HttpGet]
        public ResponseModel GetDiagnosis(string DiagCode, string DiagDesc, long PracticeCode)
        {
            return _demographicService.GetDiagnosis(DiagCode, DiagDesc, PracticeCode);
        }
        [HttpPost]
        public ResponseModel AddDxToProvider([FromBody] PracticeDxModel PracDxModel)
        {
            if (PracDxModel.DiagCode != null && (PracDxModel.PracticeCode).ToString() != null)
            {
                return _demographicService.AddDxToProvider(PracDxModel.DiagCode, PracDxModel.PracticeCode);
            }
            else
            {
                return new ResponseModel
                {
                    Status = "error",
                    Response = "Diagnsis Code or Practice Code is Empty"
                };
            }
        }
        public ResponseModel SavePatientClaimDiagnose(string DiagCode, long ClaimNo, bool IsEdit, int Sequence)
        {
            ResponseModel objResponse = new ResponseModel();
            if (string.IsNullOrEmpty(DiagCode) || ClaimNo == 0)
            {
                objResponse.Status = "Error in Parameters, Check and Send Again";
                return objResponse;
            }

            return _demographicService.SavePatientClaimDiagnose(DiagCode, ClaimNo, IsEdit, Sequence);
        }
        public ResponseModel GetPatientClaimsSummary(long PatientAccount = 0, bool IncludeDeleted = false, bool isAmountDueGreaterThanZero = false)
        {
            return _demographicService.GetPatientClaimsSummary(PatientAccount, IncludeDeleted, isAmountDueGreaterThanZero);
        }
        [HttpPost]
        public ResponseModel GetProcedureCharges([FromBody] CPTWiseCharges obj)
        {
            return _demographicService.GetProcedureCharges(obj);
        }
        [HttpPost]
        public ResponseModel ValidateAddress([FromBody] ValidateAddreesRequestViewModel model)
        {
            ResponseModel resp = new ResponseModel();
            if (!ModelState.IsValid)
            {
                resp.Status = string.Join(";", ModelState.Values.SelectMany(e => e.Errors).Select(e => e.ErrorMessage));
                return resp;
            }
            return _demographicService.ValidateAddress(model);
        }
        [HttpPost]
        public ResponseModel GetPracticeClaims(ClaimSearchViewModel model)
        {
            ResponseModel responseModel = new ResponseModel();
            if (!ModelState.IsValid)
            {
                responseModel.Status = string.Join(";", ModelState.Values.SelectMany(t => t.Errors).SelectMany(t => t.ErrorMessage));
                return responseModel;
            }
            return _demographicService.GetPracticeClaims(model);
        }
        [HttpGet]
        public ResponseModel GetPatientSelectList(string searchText, long practiceCode)
        {
            return _demographicService.GetPatientSelectList(searchText, practiceCode);
        }
        [HttpGet]
        public ResponseModel GetInsuranceSelectList(string searchText)
        {
            return _demographicService.GetInsuranceSelectList(searchText);
        }
        [HttpGet]
        public ResponseModel GetProviderSelectList(string searchText, long practiceCode, bool all = false)
        {
            return _demographicService.GetProviderSelectList(searchText, practiceCode, all);
        }
        [HttpGet]
        public ResponseModel GetLocationSelectList(string searchText, long practiceCode, bool all = false)
        {
            return _demographicService.GetLocationSelectList(searchText, practiceCode, all);
        }
        [HttpGet]
        public ResponseModel GetPracticeDefaultLocation(long practiceCode)
        {
            return _demographicService.GetPracticeDefaultLocation(practiceCode);
        }
        [HttpGet]
        public ResponseModel GetPatientSummary(long patientAccount, long practiceCode)
        {
            return _demographicService.GetPatientSummary(patientAccount, practiceCode);
        }
        [HttpGet]
        public ResponseModel GetClaimSummaryByNo(long claimNo, long practiceCode)
        {
            return _demographicService.GetClaimSummaryByNo(claimNo, practiceCode);
        }
        [HttpGet]
        public ResponseModel GetPatientClaimsForStatement(long patientAccount)
        {
            return _demographicService.GetPatientClaimsForStatement(patientAccount);
        }
        [HttpPost]
        public ResponseModel GeneratePatientStatement(PatientStatementRequest model)
        {
            ResponseModel responseModel = new ResponseModel();
            if (!ModelState.IsValid)
            {
                responseModel.Status = String.Join(";", ModelState.Values.SelectMany(m => m.Errors).Select(m => m.ErrorMessage));
                return responseModel;
            }
            return _demographicService.GeneratePatientStatement(model, GetUserId());
        }

        //[HttpGet]
        //public ResponseModel GenItemizedPatientStatement(Patient_Statement_Itemized model)
        //{
        //    ResponseModel responseModel = new ResponseModel();
        //    if (!ModelState.IsValid)
        //    {
        //        responseModel.Status = String.Join(";", ModelState.Values.SelectMany(m => m.Errors).Select(m => m.ErrorMessage));
        //        return responseModel;
        //    }
        //    return _demographicService.GenItemizedPatientStatement(model);
        //}

        [HttpGet]
        public ResponseModel GetStatementPatient(long PracticeCode)
        {
            return _demographicService.GetStatementPatient(PracticeCode);
        }

        [HttpGet]
        public ResponseModel GetCitiesByZipCode(string zipCode)
        {
            return _demographicService.GetCitiesByZipCode(zipCode);
        }

        //Added By Pir Ubaid (USER STORY : 205 Prior Authorization)
        [HttpGet]
        public ResponseModel GetPAByAccount(long aCCOUNT_NO)
        {
            return _demographicService.GetPAByAccount(aCCOUNT_NO);
        }
   
        // Added by Pir Ubaid (USER STORY 204 : NPM ALERT )
        [HttpGet]
        public ResponseModel GetClaimAndDos(long patientAcc) 
        {
            return _demographicService.GetClaimAndDos(patientAcc);
        }

        #region View277CA_ClaimMessage
        //[HttpPost]
        public ResponseModel ShowPacket277CAClaimReason(string claimNo)
        {
            ResponseModel respMod = new ResponseModel();
            try
            {
                var res = _demographicService.Show277CAClaimReasons(claimNo);
                if (res.Count == 0)
                {
                    respMod.Status = "Success";
                    respMod.Response = null;
                    return respMod;
                }
                else if (res.Count > 0)
                {
                    List<Packet277CAClaimReason_Messages> ediHistory = new List<Packet277CAClaimReason_Messages>();

                    // Handling duplications in EDI History
                    #region EDI History Duplications Removal
                    var newRes = res.OrderBy(i => i.Submit_Date).ThenBy(i => i.Status_Date).GroupBy(d => new { d.Status, d.Batch_Name, d.Batch_Status, d.Claims, d.DOS, d.Insurance_Name, d.Message, d.Practice_Code, d.Status_Level, d.Submit_Date, d.File277CA })
                        .Select(g => g.First()).ToList();

                    Dictionary<string, string> statusDate_Record = new Dictionary<string, string>();
                    List<Packet277CAClaimReason_Messages> finalRes = new List<Packet277CAClaimReason_Messages>();

                    foreach (var item in newRes)
                    {

                        //if (item.Status.ToLower() == "rejected" && !statusDate_Record.ContainsKey(item.Submit_Date))
                        if (item.Status.ToLower() == "rejected")
                        {
                            finalRes.Add(item);
                            statusDate_Record.Add(item.Submit_Date, item.Status);
                        }
                        else if (item.Status.ToLower() == "accepted")
                        {
                            finalRes.Add(item);
                        }
                        else
                        {
                            continue;
                        }
                    }

                    #endregion

                    respMod.Response = finalRes.ToList();
                    respMod.Status = "Success";
                    return respMod;
                }

                return respMod;
            }
            catch (Exception ex)
            {
                respMod.Response = null;
                respMod.Status = "Error FOUND : " + ex.Message;
                throw;
            }

        }

        #endregion
    }
}
