using NPMAPI.Models;
using System.Collections.Generic;

namespace NPMAPI.Repositories
{
    public interface IDashboardRepository
    {
        ResponseModel GetDashboardData(long practiceCode, long userId);

        ResponseModel GetExternalPractices();
    }

    
}