﻿using Microsoft.AspNetCore.Mvc;
using NPMAPI.Models;
using NPMAPI.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;



namespace NPMAPI.Controllers
{
    public class ScrubberController : BaseController
    {
        private readonly IScrubberRepository _scrubberService;



        public ScrubberController(IScrubberRepository scrubberService)
        {
            _scrubberService = scrubberService;



        }

        [HttpPost]
        public ResponseModel getAllCleanClaims(string practiceCode)
        {
            var val = practiceCode;
            return _scrubberService.GetAllCleanClaims(practiceCode);
        }
        [HttpPost]
        public ResponseModel getViolatedClaims(string practiceCode)
        {
            return _scrubberService.GetAllViolated(practiceCode);
        }

        public ResponseModel AddTOScrubber(ClaimsViewModel claimModel)
        {
            return _scrubberService.AddToScrubberQueue(claimModel);
        }

        #region Custom_Edits
        //Added By Hamza Ikhlaq For Custom_Edits
        [HttpGet]
        public List<GetColumn_List> GetColumn_Lists_FrontEnd()
        {
            return _scrubberService.GetColumnList_FrontEnd();
        }

        [HttpPost]
        public ResponseModel GetColumsList(GetColumnList GC_L)
        {
            return _scrubberService.GetColumnList(GC_L);
        }

        [HttpGet]
        public ResponseModel GetTableList()
        {
            return _scrubberService.GetTableList();
        }


        [HttpPost]
        public ResponseModel AddCustom_Edits_Rules(CustomEdits_ColumnsList ce)
        {

            return _scrubberService.AddCustom_Edits_Rules(ce, GetUserName());

        }

        [HttpPost]
        public ResponseModel GetScrubberReport(string practiceCode, DateTime Date_From, DateTime Date_To)
        {
            return _scrubberService.GetScrubberRejection(practiceCode, Date_From, Date_To);
        }
        [HttpPost]
        public ResponseModel GetScrubberRejectionDetail(string practiceCode, DateTime Date_From, DateTime Date_To)
        {
            return _scrubberService.GetScrubberRejectionDetail(practiceCode, Date_From, Date_To);
        }
        [HttpGet]
        public List<Custom_Scrubber_Rules> GetAllCustomEdits(long Practice_Code)
        {
            return _scrubberService.GetAllCustomEdits(Practice_Code);
        }

        [HttpGet]
        public ResponseModel GetCustomRuleById(int id)
        {
            return _scrubberService.GetCustomRuleById(id);
        }

        [HttpGet]
        public ResponseModel CustomEditsStatus( int id)
        {
            return _scrubberService.CustomEditsStatus(id);
        }

        #endregion
    }
}