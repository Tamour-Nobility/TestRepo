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
    
    public partial class room_booking_appointment
    {
        public string BOOKED_BY { get; set; }
        public Nullable<System.DateTime> BOOKED_DATE { get; set; }
        public Nullable<System.DateTime> CREATED_DATE { get; set; }
        public Nullable<int> LOCATION_ID { get; set; }
        public string APP_TOPIC { get; set; }
        public string AAP_DESCRIPTION { get; set; }
        public string REMARKS { get; set; }
        public Nullable<System.DateTime> SCHEDULE_DATE { get; set; }
        public Nullable<System.DateTime> START_TIME { get; set; }
        public Nullable<System.DateTime> END_TIME { get; set; }
        public Nullable<int> STATUS_ID { get; set; }
        public Nullable<long> USER_ID { get; set; }
        public Nullable<bool> EVERYWEEK { get; set; }
        public Nullable<long> Criteria_id { get; set; }
        public Nullable<bool> Deleted { get; set; }
        public long app_id { get; set; }
    }
}
