using System;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web;
using System.Web.Http;
using NPMAPI.Models;
using NPMAPI.Models.ViewModels;
using NPMAPI.Repositories;

namespace NPMAPI.Controllers
{
    public class SubmissionController : BaseController
    {
        private readonly ISubmissionRepository _submissionService;

        public SubmissionController(ISubmissionRepository submissionService)
        {
            _submissionService = submissionService;
        }

        [HttpGet]
        public ResponseModel GenerateBatch_5010_P(long practice_id, long claim_id)
        {
            return _submissionService.GenerateBatch_5010_P(practice_id, claim_id);
        }
        [HttpPost]
        public ResponseModel SearchClaim(ClaimSearchViewModel model) => _submissionService.SearchClaim(model);
        #region ClaimsBatch
        [HttpPost]
        public ResponseModel AddUpdateBatch(BatchCreateViewModel model)
        {
            ResponseModel responseModel = new ResponseModel();
            if (!ModelState.IsValid)
            {
                responseModel.Status = string.Join(";", ModelState.Values.SelectMany(x => x.Errors).Select(x => x.ErrorMessage));
                return responseModel;
            }
            return _submissionService.AddUpdateBatch(model, GetUserId());
        }

        [HttpGet]
        public ResponseModel GetPendingBatchSelectList(long practiceCode, long? providerCode)
        {
            return _submissionService.GetPendingBatchSelectList(practiceCode, providerCode);
        }

        [HttpGet]
        public ResponseModel GetSentBatchSelectList(string searchText, long practiceCode, long? providerCode)
        {
            return _submissionService.GetSentBatchSelectList(searchText, practiceCode, providerCode);
        }

        [HttpPost]
        public ResponseModel GetBatchesDetail(BatchListRequestViewModel model)
        {
            ResponseModel responseModel = new ResponseModel();
            if (!ModelState.IsValid)
            {
                responseModel.Status = string.Join(";", ModelState.Values.SelectMany(x => x.Errors).Select(x => x.ErrorMessage));
                return responseModel;
            }
            return _submissionService.GetBatchesDetail(model);
        }

        [HttpPost]
        public ResponseModel AddInBatch(AddInBatchRequestViewModel model)
        {
            ResponseModel responseModel = new ResponseModel();
            if (!ModelState.IsValid)
            {
                responseModel.Status = string.Join(";", ModelState.Values.SelectMany(m => m.Errors).Select(m => m.ErrorMessage));
                return responseModel;
            }
            return _submissionService.AddInBatch(model, GetUserId());
        }

        [HttpPost]
        public ResponseModel LockBatch(LockBatchRequestViewModel model)
        {
            ResponseModel responseModel = new ResponseModel();
            if (!ModelState.IsValid)
            {
                responseModel.Status = string.Join(";", ModelState.Values.SelectMany(x => x.Errors).Select(x => x.ErrorMessage));
                return responseModel;
            }
            model.UserId = GetUserId();
            return _submissionService.LockBatch(model);
        }

        [HttpPost]
        public ResponseModel UploadBatches(BatchUploadRequest model)
        {
            ResponseModel responseModel = new ResponseModel();
            if (!ModelState.IsValid)
            {
                responseModel.Status = string.Join(";", ModelState.Values.SelectMany(e => e.Errors).Select(e => e.ErrorMessage));
                return responseModel;
            }
            return _submissionService.UploadBatches(model, GetUserId());
        }

        [HttpPost]
        public ResponseModel GetBatchFileErrors(BatchErrorsRequestModel model)
        {
            return _submissionService.GetBatchFileErrors(model);
        }

        [HttpPost]
        public ResponseModel GetBatchesHistory(BatchesHistoryRequestModel model)
        {
            return _submissionService.GetBatchesHistory(model);
        }

        [HttpGet]
        public ResponseModel GetBatcheDetalis(long batchId)
        {
            return _submissionService.GetBatcheDetalis(batchId);
        }

        [HttpGet]
        public HttpResponseMessage DownloadEDIFile(long batchId)
        {
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK);
            var fileInfo = _submissionService.GetBatchFilePath(batchId);
            string filePath;
            if (fileInfo.Status == "success")
            {
                filePath = HttpContext.Current.Server.MapPath($"~/{ConfigurationManager.AppSettings["ClaimBatchSubmissionPath"] + "/" + fileInfo.Response}");
                if (!File.Exists(filePath))
                {
                    response.StatusCode = HttpStatusCode.NotFound;
                    response.ReasonPhrase = string.Format("File not found: {0} .", fileInfo.Response);
                    return response;
                }
                byte[] bytes = File.ReadAllBytes(filePath);
                response.Content = new ByteArrayContent(bytes);
                response.Content.Headers.ContentLength = bytes.LongLength;
                response.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment");
                response.Content.Headers.ContentDisposition.FileName = fileInfo.Response;
                response.Content.Headers.ContentType = new MediaTypeHeaderValue(MimeMapping.GetMimeMapping(fileInfo.Response));
                return response;
            }
            else
            {
                response.StatusCode = HttpStatusCode.NotFound;
                response.ReasonPhrase = string.Format("File not found: {0} .", fileInfo.Response);
                return response;
            }
        }

        [HttpPost]
        public ResponseModel RegenerateBatchFile(RegenerateBatchFileRequestModel model)
        {
            return _submissionService.RegenerateBatchFile(model, GetUserId());
        }
        #endregion

        [HttpGet]
        [AllowAnonymous]
        public ResponseModel Read()
        {
            return _submissionService.Read();
        }

        [HttpPost]
        public ResponseModel SearchERA(ERASearchRequestModel model)
        {
            return _submissionService.SearchERA(model);
        }

        [HttpPost]
        public ResponseModel EraSummary(EraSummaryRequest model)
        {
            return _submissionService.EraSummary(model);
        }

        public class claimsummaryrequest
        {
            public long? claimNo { get; set; }
            public long? eraId { get; set; }
        }

        public class ApplyERARequestModel
        {
            public long[] claims { get; set; }
            public long eraId { get; set; }
            public DateTime depositDate { get; set; }
        }

        public class ERAAutoPostRequestModel
        {
            public int id { get; set; }
            public DateTime depositDate { get; set; }
        }
        [HttpPost]
        public ResponseModel ERAClaimSummary(claimsummaryrequest req)
        {
            return _submissionService.ERAClaimSummary(req);
        }

        [HttpPost]
        public ResponseModel ApplyERA(ApplyERARequestModel req)
        {
            return _submissionService.ApplyERA(req, GetUserId());
        }

        [HttpPost]
        public ResponseModel AutoPost(ERAAutoPostRequestModel request)
        {
            return _submissionService.AutoPost(request, GetUserId());
        }
    }
}