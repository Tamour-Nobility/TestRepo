namespace NPMAPI.Models.ViewModels
{
    public class ReportRequestModel
    {
        public long PracticeCode { get; set; }
        public string DateTo { get; set; }
        public string DateFrom { get; set; }
        public long[] LocationCode { get; set; }
        public string Date { get; set; }
        public string Month { get; set; }
        public string DateType { get; set; }
        public string DataType { get; set; }
    }
}