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
    
    public partial class GetAppointment_Result
    {
        public long Appointment_Id { get; set; }
        public long Patient_Account { get; set; }
        public string Patient_Name { get; set; }
        public Nullable<System.DateTime> Appointment_Date_Time { get; set; }
        public string Time_From { get; set; }
        public Nullable<long> Duration { get; set; }
    }
}
