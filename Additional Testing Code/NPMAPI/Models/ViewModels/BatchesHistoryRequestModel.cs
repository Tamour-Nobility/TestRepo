using System;

namespace NPMAPI.Models.ViewModels
{
    public class BatchesHistoryRequestModel
    {
        public long? Practice_Code { get; set; }
        public long? Provider_Code { get; set; }
        public DateTime? Date_From { get; set; }
        public DateTime? @Date_To { get; set; }
        public string @Date_Type { get; set; }
    }
}