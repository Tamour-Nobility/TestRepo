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
    
    public partial class payment
    {
        public decimal CLAIM_NO { get; set; }
        public int PAYMENT_NO { get; set; }
        public string PAYMENT_TYPE { get; set; }
        public string PAYMENT_SOURCE { get; set; }
        public Nullable<System.DateTime> DATE_ENTRY { get; set; }
        public Nullable<System.DateTime> DATE_ADJ_PMT { get; set; }
        public Nullable<System.DateTime> DATE_FILING { get; set; }
        public Nullable<decimal> AMT_APPROVED { get; set; }
        public Nullable<decimal> AMT_PAID { get; set; }
        public string C { get; set; }
        public Nullable<decimal> AMT_ADJUSTED { get; set; }
        public string DETAILS { get; set; }
        public string REJECT_TYPE { get; set; }
        public Nullable<decimal> REJECT_AMT { get; set; }
        public string PROCEDURE_CODE { get; set; }
        public string CHARGED_PROC_CODE { get; set; }
        public string UNITS { get; set; }
        public string INSURANCE_CODE { get; set; }
        public string CHECK_NO { get; set; }
        public string created_by { get; set; }
        public string A { get; set; }
        public string modified_by { get; set; }
        public Nullable<System.DateTime> modified_date { get; set; }
        public string CREATED_FROM { get; set; }
        public string B { get; set; }
    }
}
