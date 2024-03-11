using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace NPMAPI.Models
{
    public class BatchCreateViewModel
    {
        public long BatchId { get; set; }
        public string BatchName { get; set; }
        public long? ProviderCode { get; set; }
        [Required]
        public DateTime Date { get; set; }
        public string DateStr { get; set; }
        public string BatchType { get; set; }
        [Required]
        public long PracticeCode { get; set; }
    }
    public class BatchListViewModel
    {
        public long BatchId { get; set; }
        public string BatchName { get; set; }
        public long? ProviderCode { get; set; }
        public DateTime Date { get; set; }
        public string BatchType { get; set; }
        public long PracticeCode { get; set; }
        public bool? BatchLock { get; set; }
        public int TotalClaims { get; set; }
    }
    public class BatchListRequestViewModel
    {
        [Required]
        public long PracticeCode { get; set; }
        public long? ProviderCode { get; set; }
    }
    public class BatchListResponseViewModel
    {
        public int TotalBatch { get; set; }
        public List<SP_GetBatchDetail_Result> Batches { get; set; }
    }

    public class AddInBatchRequestViewModel
    {
        [MinLength(1)]
        public int[] ClaimIds { get; set; }
        [Required]
        public int BatchId { get; set; }
        public long PracticeCode { get; set; }
        public string SystemIP { get; set; }
    }
    public class LockBatchRequestViewModel
    {
        [Required]
        public long BatchId { get; set; }
        public long? UserId { get; set; }
    }
    public class DateRangeViewModel
    {
        [Required]
        public DateTime BeginDate { get; set; }
        [Required]
        public string BeginDateStr { get; set; }
        [Required]
        public DateTime EndDate { get; set; }
        [Required]
        public string EndDateStr { get; set; }
    }
    public class BatchUploadViewModel
    {
        public long PatientAccount { get; set; }
        public long ClaimId { get; set; }
        public long BatchId { get; set; }
        public long? PracticeCode { get; set; }
        public DateTime? DOS { get; internal set; }
        public string PatientName { get; internal set; }
    }

    public class BatchUploadRequest
    {
        public long[] BatcheIds { get; set; }
    }

    public class BatchClaimSubmissionResponse
    {
        public dynamic response { get; set; }
        public long ClaimId { get; set; }
        public long? PracticeCode { get; set; }
        public long BatchId { get; set; }
    }

    public class ProcessedBatchResponse
    {
        public long BatchId { get; set; }
        public string BatchName { get; set; }
        public long? ProviderId { get; set; }
        public string ProviderName { get; set; }
        public long? UploadedBy { get; set; }
        public string UploadedByName { get; set; }
        public DateTime? UplodedOn { get; set; }
        public DateTime? Date { get; internal set; }
        public string BatchStatus { get; internal set; }
        public string BatchStatusDetail { get; internal set; }
        public DateTime? DateProcessed { get; internal set; }
    }
}