using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using EdiFabric.Core.Model.Edi.X12;
using iTextSharp.text;
using NPMAPI.Models;
using NPMAPI.Models.ViewModels;
using NPMAPI.Repositories;

namespace NPMAPI.Services
{

    public class DashboardService : IDashboardRepository
    {
        private readonly IReportRepository _reportService;
        public DashboardService(IReportRepository reportService)
        {
            _reportService = reportService;
        }

        public ResponseModel GetDashboardData(long practiceCode, long userId)
        {
            ResponseModel res = new ResponseModel();
            try
            {
                var req = new ReportRequestModel();
                req.PracticeCode = practiceCode;
                var recentAgingSummary = _reportService.AgingSummaryRecent(req, userId);
                var recentChargesPayment = _reportService.ChargesPaymentsRecent(req, userId);
                var agingDashboard = _reportService.GetAgingDashboard(req, userId);
                res.Response = new ExpandoObject();
                res.Response.recentAgingSummary = recentAgingSummary.Response.Count == 0 ? null : recentAgingSummary.Response;
                res.Response.recentChargesPayment = recentChargesPayment.Response.Count == 0 ? null : recentChargesPayment.Response;
                res.Response.agingDashboard = agingDashboard.Response.Count == 0 ? null : agingDashboard.Response;
                res.Status = "success";
                return res;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public ResponseModel GetExternalPractices()
        {
            List<int?> practices = new List<int?>(); 
            
            ResponseModel res = new ResponseModel();
            try { 
            using (var ctx = new NPMDBEntities())
            {
                    //  practices = ctx.Practice_Reporting.Where(pr => (pr.Deleted ?? false) == false).Select(pr => pr.Practice_Code).ToList();
                    res.Response = ctx.Practice_Reporting.Where(pr => (pr.Deleted ?? false) == false).Select(pr => pr.Practice_Code).ToList();
            }
                res.Status = "success";
            }
            catch(Exception e) {
                res.Status="error";
                throw e;
            }

            return res;
        }

    }
}