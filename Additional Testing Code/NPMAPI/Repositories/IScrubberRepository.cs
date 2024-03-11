using NPMAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NPMAPI.Repositories
{
    public interface IScrubberRepository
    {
        ResponseModel GetAllViolated(string practiceCode);

        ResponseModel GetAllCleanClaims(string practiceCode);

        ResponseModel AddToScrubberQueue(ClaimsViewModel claimModel);
        ResponseModel GetScrubberRejection(string practiceCode, DateTime Date_From, DateTime Date_To);
        ResponseModel GetScrubberRejectionDetail(string practiceCode, DateTime Date_From, DateTime Date_To);

        //ResponseModel GetAllClaimsInQueue();
        //Hamza Ikhlaq 20/9/2023 For Custom_Edits
   
        List<GetColumn_List> GetColumnList_FrontEnd();
        ResponseModel GetColumnList(GetColumnList GC_L);
        ResponseModel GetTableList();
        ResponseModel AddCustom_Edits_Rules(CustomEdits_ColumnsList ce,string userName);
      
        List<Custom_Scrubber_Rules> GetAllCustomEdits(long Practice_Code);
        ResponseModel GetCustomRuleById(int id);
        ResponseModel CustomEditsStatus(int id);


    }
}