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
    
    public partial class GetOfficeTiming_Result
    {
        public string Weekday_Id { get; set; }
        public Nullable<System.DateTime> Time_From { get; set; }
        public Nullable<System.DateTime> Time_To { get; set; }
        public Nullable<System.DateTime> Break_Time_From { get; set; }
        public Nullable<System.DateTime> Break_Time_To { get; set; }
        public Nullable<System.DateTime> Date_From { get; set; }
        public Nullable<System.DateTime> Date_To { get; set; }
        public Nullable<bool> Day_On { get; set; }
        public Nullable<int> Time_slot_size { get; set; }
    }
}