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
    
    public partial class GetInsurancesByPayers_Result
    {
        public long Insurance_Id { get; set; }
        public string Insurance_Address { get; set; }
        public string Insurance_City { get; set; }
        public string Insurance_State { get; set; }
        public string Insurance_Zip { get; set; }
        public Nullable<long> Created_By { get; set; }
        public Nullable<System.DateTimeOffset> Created_Date { get; set; }
        public Nullable<long> Modified_By { get; set; }
        public Nullable<System.DateTimeOffset> Modified_Date { get; set; }
        public string InsurancePayerDescription { get; set; }
        public string InsuranceName { get; set; }
        public string InsuranceGroup { get; set; }
        public string Created_By_Name { get; set; }
        public string Modified_By_Name { get; set; }
    }
}