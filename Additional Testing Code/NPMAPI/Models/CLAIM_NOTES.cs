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
    
    public partial class CLAIM_NOTES
    {
        public long Claim_No { get; set; }
        public long Note_Id { get; set; }
        public string Note_Detail { get; set; }
        public string Scan_No { get; set; }
        public string Note_State { get; set; }
        public string No_of_Days { get; set; }
        public Nullable<bool> Deleted { get; set; }
        public Nullable<long> Created_By { get; set; }
        public Nullable<System.DateTimeOffset> Created_Date { get; set; }
        public Nullable<long> Modified_By { get; set; }
        public Nullable<System.DateTimeOffset> Modified_Date { get; set; }
        public long Claim_Notes_Id { get; set; }
        public Nullable<System.DateTime> Scan_Date { get; set; }
        public Nullable<int> Page_No { get; set; }
        public Nullable<long> SENT_APPEAL_ID { get; set; }
        public Nullable<decimal> Proposal_Amount { get; set; }
        public Nullable<long> Depositslip_Id { get; set; }
    }
}