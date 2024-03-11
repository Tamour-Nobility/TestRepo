using System;
using System.Threading.Tasks;
using System.Web.Http;
using NPMAPI.Models;
using NPMAPI.Models.ViewModels;
using NPMAPI.Repositories;

namespace NPMAPI.Controllers
{
    public class ReportController : BaseController
    {

        private readonly IReportRepository _reportService;

        public ReportController(IReportRepository reportService)
        {
            _reportService = reportService;
        }

        #region Reports

        [HttpGet]
        public ResponseModel AgingSummaryAnalysisReport(long PracticeCode)
        {
            return _reportService.AgingSummaryAnalysisReport(PracticeCode);
        }
        [HttpGet]
        public Task<ResponseModel> DormantClaimsReport(long PracticeCode, int page, int size)
        {
            return _reportService.DormantClaimsReport(PracticeCode, page, size);
        }

        [HttpGet]
        public ResponseModel DormantClaimsReports(long Claim_no)
        {
            return _reportService.DormantClaimsReports(Claim_no);
        }

        [HttpGet]
        public ResponseModel DormantClaimsReportsPagination(long PracticeCode)
        {
            return _reportService.DormantClaimsReportsPagination(PracticeCode);
        }

        [HttpGet]
        public ResponseModel AgingSummaryPatientAnalysisReport(long PracticeCode)
        {
            return _reportService.AgingSummaryPatientAnalysisReport(PracticeCode);
        }

        [HttpGet]
        public ResponseModel FinancialAnalysisByProviderandProcCodesReport(long PracticeCode, DateTime DateFrom, DateTime DateTo)
        {
            return _reportService.FinancialAnalysisByProviderandProcCodesReport(PracticeCode, DateFrom, DateTo);
        }

        [HttpGet]
        public ResponseModel FinancialAnalysisCPTLevelReport(long PracticeCode, DateTime DateFrom, DateTime DateTo)
        {
            return _reportService.FinancialAnalysisCPTLevelReport(PracticeCode, DateFrom, DateTo);
        }

        [HttpGet]
        public ResponseModel PaymentDetail(long? PracticeCode, DateTime? DateFrom, DateTime? DateTo, long? PatientAccount)
        {
            return _reportService.PaymentDetail(PracticeCode, DateFrom, DateTo, PatientAccount);
        }

        [HttpGet]
        public ResponseModel CPTWisePaymentDetail(long? PracticeCode, DateTime? DateFrom, DateTime? DateTo)
        {
            return _reportService.CPTWisePaymentDetail(PracticeCode, DateFrom, DateTo);
        }

        [HttpGet]
        public ResponseModel AppointmentDetailReport(long PracticeCode, string DateFrom, string DateTo)
        {
            return _reportService.AppointmentDetailReport(PracticeCode, DateFrom, DateTo);
        }

        [HttpGet]
        public ResponseModel holdReport(long PracticeCode)
        {
            return _reportService.holdReport(PracticeCode);
        }


        [HttpPost]
        public ResponseModel ClaimPaymentsDetailReport([FromBody] ClaimPaymentsDetailRequest request)
        {
            if (ModelState.IsValid)
                return _reportService.ClaimPaymentsDetailReport(request);
            else
                return new ResponseModel
                {
                    Status = "Error",
                    Response = "Validation"
                };
        }

        [HttpGet]
        public ResponseModel MissingAppointmentDetailReport(long PracticeCode, string DateFrom, string DateTo)
        {
            return _reportService.MissingAppointmentDetailReport(PracticeCode, DateFrom, DateTo);
        }

        [HttpPost]
        public ResponseModel RecallVisits(ReportRequestModel req)
        {
            return _reportService.RecallVisits(req, GetUserId());
        }

        [HttpPost]
        public ResponseModel PeriodAnalysisAndClosing(ReportRequestModel req)
        {
            return _reportService.PeriodAnalysisAndClosing(req, GetUserId());
        }

        [HttpPost]
        public ResponseModel PracticeAnalysis(ReportRequestModel req)
        {
            return _reportService.PracticeAnalysis(req, GetUserId());
        }

        [HttpPost]
        public ResponseModel PatientBirthDays(ReportRequestModel req)
        {
            return _reportService.PatientBirthDays(req, GetUserId());
        }

        [HttpPost]
        public ResponseModel AgingSummaryRecent(ReportRequestModel req)
        {
            return _reportService.AgingSummaryRecent(req, GetUserId());
        }

        [HttpPost]
        public ResponseModel ChargesPaymentsRecent(ReportRequestModel req)
        {
            return _reportService.ChargesPaymentsRecent(req, GetUserId());
        }

        [HttpPost]
        public ResponseModel GetAgingDashboard(ReportRequestModel req)
        {
            return _reportService.GetAgingDashboard(req, GetUserId());
        }
        [HttpGet]
        public ResponseModel GetInsuranceDetailReport(long? PracCode)
        {
            return _reportService.GetInsuranceDetailReport(PracCode, GetUserId());
        }
        [HttpGet]
        public ResponseModel GetUserReport(string PracCode, string userid,string dateFrom,string dateTo)
        {
            return _reportService.GetUserReport(PracCode, userid, dateFrom, dateTo);
        }

        [HttpGet]
        public ResponseModel GetRollingSummaryReport(string PracCode, string duration)
        {
            return _reportService.GetRollingSummaryReport(PracCode, duration);
        }
        #endregion

        #region Charges

        [HttpPost]
        public ResponseModel OverAllChargesDos(ReportRequestModel req)
        {
            return _reportService.OverAllChargesDos(req, GetUserId());
        }

        [HttpPost]
        public ResponseModel ByCPTDos(ReportRequestModel req)
        {
            return _reportService.ByCPTDos(req, GetUserId());
        }

        [HttpPost]
        public ResponseModel ByHospitalDos(ReportRequestModel req)
        {
            return _reportService.ByHospitalDos(req, GetUserId());
        }

        [HttpPost]
        public ResponseModel ByPrimaryDXDos(ReportRequestModel req)
        {
            return _reportService.ByPrimaryDXDos(req, GetUserId());
        }

        [HttpPost]
        public ResponseModel ByCarrierDOS(ReportRequestModel req)
        {
            return _reportService.ByCarrierDos(req, GetUserId());
        }

        [HttpPost]
        public ResponseModel CPA(ReportRequestModel req)
        {
            return _reportService.CPA(req, GetUserId());
        }

        //CLAIMS AND ACCOUNTS ASSIGNMENT

        [HttpGet]
        public ResponseModel ClaimAssignmentReport(long PracticeCode, string DateFrom, string DateTo)
        {
            return _reportService.ClaimAssignmentReport(PracticeCode, DateFrom, DateTo);
        }

        [HttpGet]
        public ResponseModel AccounAssignmentReport(long PracticeCode, string DateFrom, string DateTo)
        {
            return _reportService.AccounAssignmentReport(PracticeCode, DateFrom, DateTo);
        }


        #endregion

        #region Payments

        [HttpPost]
        public ResponseModel PaymentDailyRefresh(ReportRequestModel req)
        {
            return _reportService.PaymentDailyRefresh(req, GetUserId());
        }

        [HttpPost]
        public ResponseModel PaymentMonthWise(ReportRequestModel req)
        {
            return _reportService.PaymentMonthWise(req, GetUserId());
        }

        [HttpPost]
        public ResponseModel PaymentByCarrier(ReportRequestModel req)
        {
            return _reportService.PaymentByCarrier(req, GetUserId());
        }

        [HttpPost]
        public ResponseModel PaymentPrimaryDX(ReportRequestModel req)
        {
            return _reportService.PaymentPrimaryDX(req, GetUserId());
        }

        [HttpPost]
        public ResponseModel PaymentByPrimaryICD10(ReportRequestModel req)
        {
            return _reportService.PaymentByPrimaryICD10(req, GetUserId());
        }
        #endregion
    }
}