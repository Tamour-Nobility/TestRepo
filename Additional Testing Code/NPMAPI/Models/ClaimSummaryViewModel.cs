using System.Collections.Generic;

namespace NPMAPI.Models
{
    public class ClaimSummaryViewModel
    {

        public string TOTAL_CHARGES { get; set; }
        public string TOTAL_PAYMENT { get; set; }
        public string InboxPaymnet { get; set; }
        public string INSURANCE_DUE { get; set; }
        public string PAT_DUE { get; set; }
        public string INS_TOTAL_PAYMENT { get; set; }
        public string PATIENT_PAYMENTS { get; set; }
        public List<Claim> claimList { get; set; }

    }
}