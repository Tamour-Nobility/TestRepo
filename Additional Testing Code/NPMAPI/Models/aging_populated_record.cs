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
    
    public partial class aging_populated_record
    {
        public long practice_code { get; set; }
        public long provider_code { get; set; }
        public long patient_account { get; set; }
        public long claim_no { get; set; }
        public Nullable<decimal> amt_due { get; set; }
        public string patient_name { get; set; }
        public Nullable<System.DateTimeOffset> BILL_DATE { get; set; }
        public Nullable<int> bill_date_days { get; set; }
        public Nullable<System.DateTimeOffset> max_date_adj_pmt { get; set; }
        public Nullable<int> max_date_adj_pmt_days { get; set; }
        public string pri_status { get; set; }
        public Nullable<long> pri_insurance_id { get; set; }
        public Nullable<long> pri_inspayer_id { get; set; }
        public string sec_status { get; set; }
        public Nullable<long> sec_insurance_id { get; set; }
        public Nullable<long> sec_inspayer_id { get; set; }
        public string oth_status { get; set; }
        public Nullable<long> oth_insurance_id { get; set; }
        public Nullable<long> oth_inspayer_id { get; set; }
        public string pat_status { get; set; }
        public string Physician_type { get; set; }
        public Nullable<long> Location_Code { get; set; }
        public Nullable<System.DateTime> dos { get; set; }
    }
}
