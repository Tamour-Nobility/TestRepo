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
    
    public partial class Payments_at_CPT_Level_Result
    {
        public string Insurance { get; set; }
        public string Claim_Date { get; set; }
        public string Service_Date { get; set; }
        public string Patient_Account_No { get; set; }
        public string Claim_ID { get; set; }
        public string CPT_Code { get; set; }
        public string CPT_Code_Description { get; set; }
        public int Payment_Paid { get; set; }
        public int Patient_Payment { get; set; }
        public int Insurance_Payment { get; set; }
        public int Contractual { get; set; }
        public int Insurance_Withheld { get; set; }
    }
}