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
    
    public partial class Fee_Plan_Update
    {
        public long Fee_Plan_Update_ID { get; set; }
        public string Insurance_Id { get; set; }
        public Nullable<decimal> Claim_No { get; set; }
        public string Procedure_Code { get; set; }
        public Nullable<decimal> Billed_Amount { get; set; }
        public Nullable<decimal> Amount_Approved { get; set; }
        public Nullable<decimal> Suggested_Fee_100_Increased { get; set; }
        public Nullable<decimal> CSS_Payer_Feed_Back { get; set; }
        public Nullable<decimal> Amount_Paid { get; set; }
        public Nullable<decimal> Call_Id { get; set; }
        public Nullable<long> Claim_Charges_Id { get; set; }
        public string Created_By { get; set; }
        public Nullable<System.DateTime> Created_Date { get; set; }
        public string Modified_By { get; set; }
        public Nullable<System.DateTime> Modified_Date { get; set; }
        public string Modified_From { get; set; }
        public Nullable<bool> Fee_Plan_Updated { get; set; }
        public Nullable<bool> Deleted { get; set; }
        public string Remarks { get; set; }
        public Nullable<decimal> Web_Computed { get; set; }
        public Nullable<decimal> OAD_Approved_Charges { get; set; }
        public Nullable<System.DateTime> Payment_Entry_Date { get; set; }
        public Nullable<long> claim_payments_id { get; set; }
        public string UPDATE_TYPE { get; set; }
        public Nullable<long> CLAIM_NOTES_ID { get; set; }
    }
}
