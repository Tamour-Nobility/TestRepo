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
    
    public partial class Insurance_Notes
    {
        public long Insurance_Id { get; set; }
        public System.DateTimeOffset Note_Date { get; set; }
        public string Note_Content { get; set; }
        public string Note_User { get; set; }
        public Nullable<bool> Deleted { get; set; }
        public Nullable<long> Created_By { get; set; }
        public Nullable<System.DateTimeOffset> Created_Date { get; set; }
        public Nullable<long> MODIFIED_BY { get; set; }
        public Nullable<System.DateTimeOffset> MODIFIED_DATE { get; set; }
    }
}