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
    
    public partial class Practice_Termination
    {
        public long Practice_Termination_ID { get; set; }
        public Nullable<long> Practice_ID { get; set; }
        public Nullable<long> Termination_Step_ID { get; set; }
        public string Status { get; set; }
        public Nullable<System.DateTime> Effective_Date { get; set; }
        public Nullable<System.DateTime> Confirmation_Date { get; set; }
        public string Remarks { get; set; }
        public string Created_By { get; set; }
        public Nullable<System.DateTime> Created_Date { get; set; }
        public string Modified_By { get; set; }
        public Nullable<System.DateTime> Modified_Date { get; set; }
        public Nullable<bool> Deleted { get; set; }
        public Nullable<System.DateTime> FOLLOW_UP_DURATION_PERIOD { get; set; }
    }
}
