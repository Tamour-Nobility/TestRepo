using System.Collections.Generic;

namespace NPMAPI.Models
{
    public class DashboardViewModel
    {
        public List<SP_AGINGCOMPDEMO_Result> AgingWithlastReport { get; set; }
        public List<SP_CPADEMO_Result> ChargesPaymentComparisonReport { get; set; }
        public List<SP_AGINGDEMO_Result> AgingAnalysis { get; set; }

        public List<dynamic> AgingComparisonChartLabels { get; set; }
        public List<dynamic> AgingComparisonChartData { get; set; }


        public List<dynamic> ChargesVsPaymentsChartLabels { get; set; }
        public List<dynamic> ChargesVsPaymentsChartData { get; set; }
    }

    public class ReportData
    {
        public string[] data { get; set; }
        public string lablel { get; set; }
    }
}