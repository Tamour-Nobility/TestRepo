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
    
    public partial class Cpt_Current_Status
    {
        public long Cpt_Status_ID { get; set; }
        public Nullable<long> InsPayer_Id { get; set; }
        public string Location_State { get; set; }
        public string Cpt_Code { get; set; }
        public string Cpt_Description { get; set; }
        public string CPT_Modifier { get; set; }
        public string CPT_Current_Status1 { get; set; }
        public Nullable<System.DateTime> CPT_Deleted_Expiry_Date { get; set; }
        public Nullable<bool> Deleted { get; set; }
        public string Replace_CPT_Codes { get; set; }
        public string Created_By { get; set; }
        public Nullable<System.DateTime> Created_Date { get; set; }
        public string Modified_By { get; set; }
        public Nullable<System.DateTime> Modified_Date { get; set; }
        public string Status_code { get; set; }
        public Nullable<bool> Not_Used_for_Medicare { get; set; }
        public string PC_TC_Indicator { get; set; }
        public string Global_surgery_period { get; set; }
        public Nullable<double> Pre_Operative_Percentage { get; set; }
        public Nullable<double> Intra_operative_Percentage { get; set; }
        public Nullable<double> Postoperative_Percentage { get; set; }
        public string Multiple_Procedure { get; set; }
        public string Bilateral_Surgery { get; set; }
        public string Assistant_at_Surgery { get; set; }
        public string Co_surgeons { get; set; }
        public string Team_Surgery { get; set; }
        public string Physician_Supervision { get; set; }
        public string Endoscopic_Base_Code { get; set; }
    }
}
