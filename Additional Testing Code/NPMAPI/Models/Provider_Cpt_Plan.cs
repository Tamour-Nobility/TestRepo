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
    
    public partial class Provider_Cpt_Plan
    {
        public string Provider_Cpt_Plan_Id { get; set; }
        public Nullable<long> Practice_Code { get; set; }
        public Nullable<long> Provider_Code { get; set; }
        public Nullable<long> InsPayer_Id { get; set; }
        public string Insurance_State { get; set; }
        public Nullable<long> Location_Code { get; set; }
        public Nullable<long> Facility_Code { get; set; }
        public string Cpt_Plan { get; set; }
        public Nullable<decimal> Percentage_Higher { get; set; }
        public Nullable<bool> Deleted { get; set; }
        public Nullable<long> Created_By { get; set; }
        public Nullable<System.DateTimeOffset> Created_Date { get; set; }
        public Nullable<long> Modified_By { get; set; }
        public Nullable<System.DateTimeOffset> Modified_Date { get; set; }
        public Nullable<bool> self_pay { get; set; }
        public Nullable<bool> modification_allowed { get; set; }
    }
}