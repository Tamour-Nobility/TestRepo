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
    
    public partial class Practice_SignUp_Referring_Physician
    {
        public long RefPhysician_ID { get; set; }
        public Nullable<long> Physician_ID { get; set; }
        public string Referring_Physician_Name { get; set; }
        public string Physician_UPIN { get; set; }
        public string Physician_PhoneNo { get; set; }
    }
}