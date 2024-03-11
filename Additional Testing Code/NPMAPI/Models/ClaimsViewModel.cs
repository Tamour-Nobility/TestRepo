using System;
using System.Collections.Generic;

namespace NPMAPI.Models
{
    public class ClaimsViewModel
    {
        public long PatientAccount { get; set; }
        public long PracticeCode { get; set; }
        public Claim ClaimModel { get; set; }
   
        public string PTLReasonDetail { get; set; }

        public string PTLReasonDoctorFeedback { get; set; }

        /////////// Below are the prefilled lists for claim
        public List<SelectListViewModel> PTLReasons { get; set; }
        public List<PatientInsuranceViewModel> PatientInsuranceList { get; set; }
        public List<ClaimInsuranceViewModel> claimInusrance { get; set; }
        public List<SelectListViewModelForProvider> AttendingPhysiciansList { get; set; }
        public List<SelectListViewModelForProvider> BillingPhysiciansList { get; set; }
        public List<SelectListViewModel> PracticeLocationsList { get; set; }
        public List<SelectListViewModel> ReferralPhysiciansList { get; set; }
        public List<Place_Of_Services> POSList { get; set; }
        public List<EOB_Adjustment_Codes> AdjustCodeList { get; set; }
        public List<ClaimChargesViewModel> claimCharges { get; set; }
        public List<ClaimPaymentViewModel> claimPayments { get; set; }
        public CLAIM_NOTES claimNotes { get; set; }
        public DateTime ClaimDate { get; set; }
        public string DX1Description { get; set; }
        public string DX2Description { get; set; }
        public string DX3Description { get; set; }
        public string DX4Description { get; set; }
        public string DX5Description { get; set; }
        public string DX6Description { get; set; }
        public string DX7Description { get; set; }
        public string DX8Description { get; set; }
        public string DX9Description { get; set; }
        public string DX10Description { get; set; }
        public string DX11Description { get; set; }
        public string DX12Description { get; set; }
        public List<SelectListViewModel> ResubmissionCodes { get; set; }
        public ClaimsViewModel()
        {
            ClaimModel = new Claim();
            claimNotes = new CLAIM_NOTES();
        }
    }

    public class ClaimPaymentViewModel
    {
        public string InsurancePayerName { get; set; }
        public Claim_Payments claimPayments { get; set; }
    }

    public class ClaimInsuranceViewModel
    {
        public string InsurancePayerName { get; set; }
        public string SubscriberName { get; set; }
        public Claim_Insurance claimInsurance { get; set; }
    }
    public class ClaimChargesViewModel
    {
        public string amt { get; set; }
        public string Description { get; set; }
        public string Drug_Code { get; set; }
        public bool IsAnesthesiaCpt { get; set; }
        public Claim_Charges claimCharges { get; set; }
    }


    public class CPTWiseCharges
    {
        public string ProviderCode { get; set; }
        public string ProcedureCode { get; set; }
        public string LocationCode { get; set; }
        public string ModifierCode { get; set; }
        public string FacilityCode { get; set; }
        public string IsSelfPay { get; set; }
        public string InsuranceID { get; set; }
        public string PracticeCode { get; set; }
        public string PracticeState { get; set; }
    }
    public class ClaimSearchViewModel
    {
        public DateTime? DOSFrom { get; set; }
        public DateTime? DOSTo { get; set; }
        public List<long> PatientAccount { get; set; }
        public List<long> Provider { get; set; }
        public bool? icd9 { get; set; }
        public string type { get; set; }
        public string status { get; set; }
        public List<long> insurance { get; set; }
        public List<long> location { get; set; }
        public long PracticeCode { get; set; }
    }
    public class GetPatientForClaims
    {
        public string Address { get; set; }
        public long practiceCode { get; set; }
    }
}