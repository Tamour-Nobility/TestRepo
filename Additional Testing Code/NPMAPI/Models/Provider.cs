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
    
    public partial class Provider
    {
        public long Provider_Code { get; set; }
        public long Practice_Code { get; set; }
        public string Provid_FName { get; set; }
        public string Provid_MName { get; set; }
        public string Provid_LName { get; set; }
        public string Provid_UPIN { get; set; }
        public string Provid_State_License { get; set; }
        public string License_No { get; set; }
        public string Site_Id { get; set; }
        public string DEA_No { get; set; }
        public Nullable<System.DateTime> DEA_Expiry_Date { get; set; }
        public Nullable<System.DateTime> Date_Of_Birth { get; set; }
        public string Email_Address { get; set; }
        public string SSN { get; set; }
        public string Taxonomy_Code { get; set; }
        public int Provider_Id { get; set; }
        public string Provider_Title { get; set; }
        public Nullable<bool> Patient_Statement { get; set; }
        public Nullable<long> Created_By { get; set; }
        public Nullable<System.DateTimeOffset> Created_Date { get; set; }
        public Nullable<long> Modified_By { get; set; }
        public string Authorize_Comments { get; set; }
        public Nullable<System.DateTimeOffset> Modified_Date { get; set; }
        public string Gender { get; set; }
        public Nullable<bool> Sent_To_Collection_Agency { get; set; }
        public Nullable<bool> Status_Authorize { get; set; }
        public string Authorized_By { get; set; }
        public Nullable<System.DateTime> Authorized_Date { get; set; }
        public Nullable<bool> Is_Active { get; set; }
        public string WCB_Rating_Code { get; set; }
        public string WCB_Authorization_No { get; set; }
        public Nullable<bool> Stop_Submission { get; set; }
        public string Phone_One { get; set; }
        public string Phone_Two { get; set; }
        public string Phone_Three { get; set; }
        public string Phone_Type_One { get; set; }
        public string Phone_Type_Two { get; set; }
        public string Phone_Type_Three { get; set; }
        public Nullable<bool> Is_Billing_Physician { get; set; }
        public Nullable<int> Setup_Info_Send { get; set; }
        public string NPI { get; set; }
        public Nullable<bool> Deleted { get; set; }
        public Nullable<System.DateTime> First_DOS { get; set; }
        public Nullable<bool> Old_Billing { get; set; }
        public Nullable<System.DateTime> Old_Billing_Date { get; set; }
        public Nullable<bool> Temination { get; set; }
        public Nullable<System.DateTime> Termination_Date { get; set; }
        public string Dormant_Day { get; set; }
        public string SPECIALIZATION_CODE { get; set; }
        public string Phone_Four { get; set; }
        public string Phone_Type_Four { get; set; }
        public Nullable<bool> Pt_Overpayment_Auth { get; set; }
        public string Phone_Ext_One { get; set; }
        public string Phone_Ext_Two { get; set; }
        public string Phone_Ext_Three { get; set; }
        public string Phone_Ext_Four { get; set; }
        public Nullable<bool> MDOS_Automation { get; set; }
        public Nullable<System.DateTime> MDOS_Automation_date { get; set; }
        public string SPI { get; set; }
        public Nullable<bool> Provider_Is_Attending_Physician { get; set; }
        public string Provider_Display_Name { get; set; }
        public string ADDRESS { get; set; }
        public string CITY { get; set; }
        public string STATE { get; set; }
        public string ZIP { get; set; }
        public string Provider_Color { get; set; }
        public string Arrived_Color { get; set; }
        public string Provid_Middle_Name { get; set; }
        public string Address_Line2 { get; set; }
        public string Direct_Email_Address { get; set; }
        public string Direct_Email_Password { get; set; }
        public Nullable<bool> Epcs { get; set; }
        public string Provider_Address { get; set; }
        public string License_State { get; set; }
        public Nullable<bool> Is_Billable { get; set; }
        public Nullable<bool> EPCS_Agreement { get; set; }
        public Nullable<double> Billing_Rate { get; set; }
        public string Medicare_Status { get; set; }
        public string Pointer_setting { get; set; }
        public Nullable<bool> Is_Bill_Provider { get; set; }
        public Nullable<bool> Is_Credentialing { get; set; }
        public string STOP_SUBMISSION_REASONS { get; set; }
        public string federal_taxid { get; set; }
        public string federal_taxidnumbertype { get; set; }
        public string grp_taxonomy_id { get; set; }
        public string group_npi { get; set; }
    }
}