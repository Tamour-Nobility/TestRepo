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
    
    public partial class TEAM_SUPERVISORS
    {
        public long Team_Supervisors_Id { get; set; }
        public string Team_Id { get; set; }
        public string Supervisor_Id { get; set; }
        public string Created_By { get; set; }
        public Nullable<System.DateTime> Created_Date { get; set; }
        public string Modified_By { get; set; }
        public Nullable<System.DateTime> Modified_Date { get; set; }
        public Nullable<bool> Deleted { get; set; }
        public Nullable<bool> REPORTED { get; set; }
    }
}
