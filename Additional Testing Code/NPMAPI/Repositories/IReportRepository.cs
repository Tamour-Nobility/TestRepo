using System;
using System.Threading.Tasks;
using NPMAPI.Models;
using NPMAPI.Models.ViewModels;

namespace NPMAPI.Repositories
{
    public interface IReportRepository
    {
        ResponseModel AgingSummaryAnalysisReport(long PracticeCode);
        Task<ResponseModel> DormantClaimsReport(long PracticeCode, int page, int size);
        ResponseModel DormantClaimsReports(long Claim_no);
        ResponseModel DormantClaimsReportsPagination(long PracticeCode);
        ResponseModel AgingSummaryPatientAnalysisReport(long PracticeCode);
        ResponseModel FinancialAnalysisCPTLevelReport(long PracticeCode, DateTime DateFrom, DateTime DateTo);
        ResponseModel FinancialAnalysisByProviderandProcCodesReport(long PracticeCode, DateTime DateFrom, DateTime DateTo);
        ResponseModel RecallVisits(ReportRequestModel req, long v);
        ResponseModel PeriodAnalysisAndClosing(ReportRequestModel req, long v);
        ResponseModel PracticeAnalysis(ReportRequestModel req, long v);
        ResponseModel PatientBirthDays(ReportRequestModel req, long v);
        ResponseModel OverAllChargesDos(ReportRequestModel req, long v);
        ResponseModel ByCPTDos(ReportRequestModel req, long v);
        ResponseModel ByHospitalDos(ReportRequestModel req, long v);
        ResponseModel ByPrimaryDXDos(ReportRequestModel req, long v);
        ResponseModel ByCarrierDos(ReportRequestModel req, long v);
        ResponseModel PaymentMonthWise(ReportRequestModel req, long v);
        ResponseModel PaymentDailyRefresh(ReportRequestModel req, long v);
        ResponseModel PaymentByCarrier(ReportRequestModel req, long v);
        ResponseModel PaymentPrimaryDX(ReportRequestModel req, long v);
        ResponseModel PaymentByPrimaryICD10(ReportRequestModel req, long v);
        ResponseModel PaymentDetail(long? PracticeCode, DateTime? DateFrom, DateTime? DateTo, long? PatientAccount);
        ResponseModel AgingSummaryRecent(ReportRequestModel req, long v);
        ResponseModel ChargesPaymentsRecent(ReportRequestModel req, long v);
        ResponseModel CPTWisePaymentDetail(long? practiceCode, DateTime? dateFrom, DateTime? dateTo);
        ResponseModel GetAgingDashboard(ReportRequestModel req, long v);
        ResponseModel GetInsuranceDetailReport(long? PracCode, long v);
        ResponseModel GetUserReport(string PracCode, string userid, string dateFrom, string dateTo);
        ResponseModel CPA(ReportRequestModel req, long v);
        ResponseModel AppointmentDetailReport(long practiceCode, string dateFrom, string dateTo);
        ResponseModel MissingAppointmentDetailReport(long practiceCode, string dateFrom, string dateTo);
        ResponseModel holdReport(long? PracCode);
        ResponseModel ClaimPaymentsDetailReport(ClaimPaymentsDetailRequest request);

        ResponseModel ClaimAssignmentReport(long PracticeCode, string DateFrom, string DateTo);
        ResponseModel AccounAssignmentReport(long practiceCode, string dateFrom, string dateTo);
        ResponseModel GetRollingSummaryReport(string PracCode, string duration);
    }
}
