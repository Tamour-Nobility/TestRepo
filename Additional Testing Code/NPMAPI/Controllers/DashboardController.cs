using System.Collections.Generic;
using System.Web.Http;
using NPMAPI.Models;
using NPMAPI.Repositories;

namespace NPMAPI.Controllers
{
    public class DashboardController : BaseController
    {
        private readonly IDashboardRepository _dashboardService;
        public DashboardController(IDashboardRepository dashboardService)
        {
            _dashboardService = dashboardService;
        }

        [HttpGet]
        public ResponseModel GetDashboardData(long practiceCode)
        {
            return _dashboardService.GetDashboardData(practiceCode, GetUserId());
        }

        [HttpGet]
        public ResponseModel GetExternalPractices()
        {
            return _dashboardService.GetExternalPractices();
        }
       

    }
}