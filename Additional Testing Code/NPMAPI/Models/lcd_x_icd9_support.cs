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
    
    public partial class lcd_x_icd9_support
    {
        public int lcd_id { get; set; }
        public int lcd_version { get; set; }
        public string icd9_code_id { get; set; }
        public int icd9_code_version { get; set; }
        public int icd9_support_group { get; set; }
        public string asterisk { get; set; }
        public string range { get; set; }
        public System.DateTime last_updated { get; set; }
    }
}