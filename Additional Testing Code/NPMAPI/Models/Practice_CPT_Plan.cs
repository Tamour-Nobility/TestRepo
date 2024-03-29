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
    
    public partial class Practice_CPT_Plan
    {
        public long S_No { get; set; }
        public Nullable<long> Practice_Code { get; set; }
        public string CPT_Code { get; set; }
        public Nullable<double> Rate { get; set; }
        public string Type { get; set; }
        public Nullable<System.DateTime> Created_Date { get; set; }
        public string Created_By { get; set; }
        public Nullable<System.DateTime> Modfied_Date { get; set; }
        public string Modfied_By { get; set; }
        public Nullable<bool> Is_Active { get; set; }
        public Nullable<bool> Deleted { get; set; }
        public Nullable<long> Group_Id { get; set; }
        public Nullable<long> Invoice_Plan_ID { get; set; }
        public Nullable<decimal> BILLING_REMITS { get; set; }
        public Nullable<decimal> BASE_FEE { get; set; }
        public string MIN_MAX_PLAN_BASIS { get; set; }
        public Nullable<decimal> HACFA_ATTACHMENTS { get; set; }
        public Nullable<decimal> CAPITATED_CLAIMS { get; set; }
        public Nullable<decimal> PATIENT_STATEMENTS { get; set; }
        public Nullable<double> POSTAGE_EMDEON { get; set; }
        public Nullable<double> POSTAGE_NJ { get; set; }
        public Nullable<double> POSTAGE_DATAMEDIA { get; set; }
        public Nullable<double> PAT_SHIP_HANDLING { get; set; }
        public Nullable<double> PAT_FIRST_PAGE { get; set; }
        public Nullable<double> PAT_ADDITIONAL_PAGE { get; set; }
        public Nullable<double> PAT_BAD_ADDR_FIRST_PAGE { get; set; }
        public Nullable<double> PAT_BAD_ADD_ADDIT_PAGE { get; set; }
        public Nullable<double> Patient_Management { get; set; }
        public Nullable<double> Scribe_Services { get; set; }
        public Nullable<double> Coding_Services { get; set; }
        public Nullable<double> Coding_Services_Rate { get; set; }
        public Nullable<double> Postage { get; set; }
        public Nullable<double> Indexing_Services { get; set; }
        public Nullable<double> EMR_Support_Services { get; set; }
        public Nullable<double> E_Statements { get; set; }
        public Nullable<double> Balance_Reminder_Calls { get; set; }
        public Nullable<double> Full_Time_Equivalents { get; set; }
        public Nullable<double> Acutomated_Appintments_Calls { get; set; }
        public Nullable<double> EDI_Charges { get; set; }
        public Nullable<double> Eligiblity_Services { get; set; }
        public Nullable<double> Electronic_Remittance_Advice { get; set; }
        public Nullable<double> Capitation_Flat_Fee { get; set; }
        public Nullable<double> Paper_Claims { get; set; }
        public Nullable<double> Electronic_Claims { get; set; }
        public Nullable<double> Clearing_House_Setup_Fees { get; set; }
        public Nullable<double> Transcription_Services { get; set; }
        public Nullable<bool> IS_PATIENT_STATEMENT { get; set; }
        public Nullable<bool> Is_Record { get; set; }
        public string CR_INSURANCE_NAME { get; set; }
        public Nullable<bool> IS_CR_INS { get; set; }
    }
}
