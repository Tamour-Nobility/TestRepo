﻿using System;
using System.Collections.Generic;

namespace NPMAPI.Models
{
    public class InsurancePayerVM
    {
        public long Inspayer_Id { get; set; }
        public long Insname_Id { get; set; }
        public string Inspayer_Description { get; set; }
        public string Inspayer_Plan { get; set; }
        public string Inspayer_State { get; set; }
        public string Inspayer_837_Id { get; set; }
        public string Inspayer_835_Id { get; set; }
        public string Inspayer_Referral_Id { get; set; }
        public Nullable<bool> Deleted { get; set; }
        public Nullable<long> Created_By { get; set; }
        public Nullable<System.DateTimeOffset> Created_Date { get; set; }
        public Nullable<long> Modified_By { get; set; }
        public Nullable<System.DateTimeOffset> Modified_Date { get; set; }
        public string Submission_type { get; set; }
        public Nullable<bool> Is_Sec_Paper { get; set; }
        public Nullable<bool> Electronic_Corrected_Claims { get; set; }
        public Nullable<bool> Electronic_Late_Filing { get; set; }
        public Nullable<int> Timely_Filing_Days { get; set; }
        public Nullable<bool> Is_RTA_Payer { get; set; }
        public string Restricted_Calls { get; set; }
        public Nullable<long> SERVER_ID { get; set; }
        public Nullable<bool> Is_Part_A { get; set; }
        public Nullable<long> Ivr_Server_Id { get; set; }
        public Nullable<bool> Edisetup_Required { get; set; }
        public Nullable<bool> Erasetup_Required { get; set; }
        public Nullable<bool> EFTSETUPREQUIRED { get; set; }
        public Nullable<int> Npi_Type { get; set; }
        public Nullable<long> MU_Category { get; set; }
        public string InsPayer_Description_old { get; set; }
        public Nullable<bool> Is_Nonpar_Era { get; set; }
        public Nullable<bool> Is_Nonpar_CS { get; set; }
        public string Acknowledgement_Type { get; set; }
        public string InsPayer_Eligibility_Id { get; set; }
        public string InsPayer_Claim_Status_Id { get; set; }
        public string InsuranceNameDescription { get; set; }

        public Nullable<long> insGroupId { get; set; }
        public List<SelectListViewModel> InsuraceNamesList { get; set; }

    }

    public class InsurancePayerModelVM
    {
        //Payer
        public long Inspayer_Id { get; set; }
        public string Inspayer_Description { get; set; }
        public string Inspayer_Plan { get; set; }
        public string Inspayer_State { get; set; }
        public string Submission_type { get; set; }
        public Nullable<int> Timely_Filing_Days { get; set; }
        public Nullable<bool> Erasetup_Required { get; set; }
        public Nullable<bool> Edisetup_Required { get; set; }
        public Nullable<bool> Is_Part_A { get; set; }
        public Nullable<bool> Is_RTA_Payer { get; set; }
        public string Inspayer_837_Id { get; set; }
        public string Inspayer_835_Id { get; set; }
        public Nullable<bool> Deleted { get; set; }
        public Nullable<long> Created_By { get; set; }
        public Nullable<System.DateTimeOffset> Created_Date { get; set; }
        public Nullable<long> Modified_By { get; set; }
        public Nullable<System.DateTimeOffset> Modified_Date { get; set; }
        //Group
        public long Insgroup_Id { get; set; }
        public string Insgroup_name { get; set; }
        //Name
        public long Insname_Id { get; set; }
        public string Insname_Description { get; set; }

        public SelectListViewModel InsuranceGroup { get; set; }
        public SelectListViewModel InsuranceName { get; set; }

    }
}