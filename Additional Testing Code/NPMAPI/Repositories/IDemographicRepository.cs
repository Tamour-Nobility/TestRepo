using System.Collections.Generic;
using NPMAPI.Models;
using System.Web.Http;
using NPMAPI.com.gatewayedi.services;

namespace NPMAPI.Repositories
{
    public interface IDemographicRepository
    {
        ResponseModel SearchPatient(PatientSearchModel SearchModel);

        ResponseModel GetPatientList();

        ResponseModel GetPatientModel(long practiceCode);

        ResponseModel IsPatientAlreadyExist(DublicatePatientCheckModel model);

        ResponseModel GetPatient(long PatientAccount);

        ResponseModel DeletePatient(long PatientAccount);

        ResponseModel GetFinancialGurantor(string Name);

        ResponseModel GetFinancialGurantorSubscriber(string Name);

        ResponseModel SearchInsurance(InsuranceSearchViewModel model);

        ResponseModel DeletePatientInsurance(long PatientAccount, long PatientInsuranceId);

        ResponseModel SavePatientInsurance(Patient_Insurance model);
        ResponseModel SavePatientInsurance(PatientInsuranceViewModel model, long userId);


        ResponseModel GetPatientPicture(long PatientAccount);

        ResponseModel GetCityState(string ZipCode);
        ResponseModel GetState();

        ResponseModel AddEditPatient(PatientCreateViewModel PatientModel, long UserId);

        ResponseModel GetPatientNotes(long PatientAccount);

        ResponseModel GetPatientNote(long PatientNotesId);

        ResponseModel SavePatientNotes(Patient_Notes PatientNote, long userId);

        ResponseModel DeletePatientNote(long PatientAccount, long PatientNotesId);

        ResponseModel GetAppointments(long PatientAccount);

        List<Practice> GetPatientReferrals(long PatientAccount);

        ResponseModel GetClaimModel(long PatientAccount, long ClaimNo = 0);

        ResponseModel SaveClaim(ClaimsViewModel ClaimModel, long userId);

        ResponseModel DeleteClaim(long ClaimNo);

        ResponseModel GetPatientClaimsSummary(long PatientAccount = 0, bool IncludeDeleted = false, bool isAmountDueGreaterThanZero = false);

        ResponseModel GetPatientClaim(long ClaimNo = 0);

        ResponseModel GetClaimNotes(long ClaimNo);

        ResponseModel GetClaimNote(long ClaimNotesId);

        ResponseModel GetServiceTypeCodesDescription(long userId);

        ResponseModel GetModifiers();

        ResponseModel SaveClaimNotes(CLAIM_NOTES ClaimNote);

        ResponseModel DeleteClaimNote(long ClaimNo, long ClaimNotesId);

        // Claim Screen Calls During Claims Generation
        ResponseModel GetFacility(long PracticeCode);

        //Added by HAMZA ZULFIQAR as per USER STORY 119: Reporting Dashboard Implementation For All Practices
        ResponseModel GetFacilitySelectList(long practiceCode);

        ResponseModel SearchFacilities(FacilitySearchModel FacilityModel);

        ResponseModel GetDiagnosis(string DiagCode, string DiagDesc, long PracticeCode);

        ResponseModel SavePatientClaimDiagnose(string DiagCode, long ClaimNo, bool IsEdit, int Sequence);

        ResponseModel EditDiagnosis(string DiagCode, long ClaimNo);

        ResponseModel GetProcedures(long PracticeCode);

        ResponseModel GetProcedureCharges(CPTWiseCharges obj);

        ResponseModel ValidateAddress(ValidateAddreesRequestViewModel model);

        ResponseModel GetPracticeClaims(ClaimSearchViewModel model);

        ResponseModel GetPatientSelectList(string searchText, long practiceCode);

        ResponseModel GetInsuranceSelectList(string searchText);

        ResponseModel GetProviderSelectList(string searchText, long practiceCode, bool all = false);

        ResponseModel GetLocationSelectList(string searchText, long practiceCode, bool all = false);

        ResponseModel GetPatientSummary(long patientAccount, long practiceCode);

        ResponseModel GetClaimSummaryByNo(long claimNo, long practiceCode);

        ResponseModel GetPatientClaimsForStatement(long patientAccount);

        ResponseModel GeneratePatientStatement(PatientStatementRequest model, long v);

        ResponseModel GetStatementPatient(long practiceCode);

        string GetPatientPicturePath(long patientAccount);

        ResponseModel GetPracticeDefaultLocation(long practiceCode);

        ResponseModel GetCitiesByZipCode(string ZipCode);

        //Added By Pir Ubaid (USER STORY : 205 Prior Authorization)
        ResponseModel GetPAByAccount(long aCCOUNT_NO);

        // Added by Pir Ubaid (USER STORY 204 : NPM ALERT )
        ResponseModel GetClaimAndDos(long patientAcc);

        List<Packet277CAClaimReason_Messages> Show277CAClaimReasons(string claimNo);

        ResponseModel AddPatientStatementNote(PatientStatementResponse patientStatementResponse, long userId);

        ResponseModelForE InquiryByPracPatProvider(long practiceCode, long patAcccount, long providerCode, long insurance_id);
        ResponseModel AddDxToProvider(string diagCode, long practiceCode);
    }
}
