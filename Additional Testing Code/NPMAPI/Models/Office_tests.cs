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
    
    public partial class Office_tests
    {
        public long Office_tests_ID { get; set; }
        public string DESCRIPTION { get; set; }
        public string CREATED_BY { get; set; }
        public System.DateTime CREATED_DATE { get; set; }
        public string MODIFIED_BY { get; set; }
        public System.DateTime MODIFIED_DATE { get; set; }
        public bool DELETED { get; set; }
        public Nullable<long> Practice_code { get; set; }
        public Nullable<int> Office_Index { get; set; }
        public Nullable<bool> SHOW_CHECKBOXES { get; set; }
        public Nullable<bool> SELECT_ONE_ITEM { get; set; }
        public Nullable<bool> SHOW_OFFICE_TEST { get; set; }
    }
}