using NPMAPI.Models;
using NPMAPI.Models.ViewModels;
using static NPMAPI.Controllers.SubmissionController;

namespace NPMAPI.Repositories
{
    public interface ISubmissionRepository
    {
        ResponseModel GenerateBatch_5010_P(long practice_id, long claim_id);
        ResponseModel SearchClaim(ClaimSearchViewModel model);
        ResponseModel AddUpdateBatch(BatchCreateViewModel model, long userId);
        ResponseModel GetPendingBatchSelectList(long practiceCode, long? providerCode);
        ResponseModel GetSentBatchSelectList(string searchText, long practiceCode, long? providerCode);
        ResponseModel GetBatchesDetail(BatchListRequestViewModel model);
        ResponseModel AddInBatch(AddInBatchRequestViewModel model, long userId);
        ResponseModel LockBatch(LockBatchRequestViewModel model);
        ResponseModel GetBatchFileErrors(BatchErrorsRequestModel model);
        ResponseModel UploadBatches(BatchUploadRequest model, long userId);
        ResponseModel GetBatchesHistory(BatchesHistoryRequestModel model);
        ResponseModel GetBatcheDetalis(long batchId);
        ResponseModel GetBatchFilePath(long batchId);
        ResponseModel RegenerateBatchFile(RegenerateBatchFileRequestModel model, long userId);
        ResponseModel Read();
        ResponseModel SearchERA(ERASearchRequestModel model);
        ResponseModel EraSummary(EraSummaryRequest model);
        ResponseModel ERAClaimSummary(claimsummaryrequest model);
        ResponseModel ApplyERA(ApplyERARequestModel req, long userId);
        ResponseModel AutoPost(ERAAutoPostRequestModel request, long v);
    }
}
