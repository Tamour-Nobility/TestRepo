using System;
using System.Configuration;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web;
using System.Web.Http;
using NPMAPI.App_Start;
using NPMAPI.Models.ViewModels;
using NPMAPI.Repositories;

namespace NPMAPI.Controllers
{
    public class PatientAttachmentsController : BaseController
    {
        private readonly IFileHandler _fileHandler;
        private readonly IPatientAttachment _patientAttachment;
        public PatientAttachmentsController(IFileHandler fileHandler, IPatientAttachment patientAttachment)
        {
            _fileHandler = fileHandler;
            _patientAttachment = patientAttachment;
        }

        [HttpPost]
        public IHttpActionResult Attach()
        {
            try
            {
                string typeCode = HttpContext.Current.Request.Form["TypeCode"];
                string patientAccount = HttpContext.Current.Request.Form["PatientAccount"];
                if (string.IsNullOrEmpty(typeCode))
                    return BadRequest("Please provide TypeCode field");
                if (string.IsNullOrEmpty(patientAccount))
                    return BadRequest("Please provide PatientAccount field");
                string fileNewName = $"{(Int32)(DateTime.UtcNow.Subtract(new DateTime(1970, 1, 1))).TotalSeconds}{Guid.NewGuid().ToString()}";
                var fileUploadResponse = _fileHandler.UploadImage(
                      HttpContext.Current.Request.Files[0],
                      HttpContext.Current.Server.MapPath($"~/{ConfigurationManager.AppSettings["PatientAttachments"]}/{fileNewName}"),
                      new string[] {
                          ".jpg",
                          ".jpeg",
                          ".png",
                          ".gif",
                          ".jfif",
                          ".doc",
                          ".docx",
                          ".csv",
                          ".pdf",
                          ".xls",
                          ".xlsx",
                          ".txt"
                      },
                      fileNewName,
                      GlobalVariables.MaximumPatientAttachmentSize);
                if (fileUploadResponse.Status == "success")
                {
                    var attachmentResponse = _patientAttachment.Save(new CreateAttachmentRequest()
                    {
                        Attachment_TypeCode_Id = Convert.ToInt32(typeCode),
                        FileName = HttpContext.Current.Request.Files[0].FileName,
                        FilePath = fileUploadResponse.Response,
                        Patient_Account = Convert.ToInt64(patientAccount)
                    }, GetUserId());
                    return Ok(attachmentResponse);
                }
                else
                {
                    return Ok(fileUploadResponse);
                }
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpGet]
        public IHttpActionResult Delete(long id)
        {
            return Ok(_patientAttachment.Delete(id, GetUserId()));
        }

        [HttpGet]
        public IHttpActionResult GetAll(long patientAccount)
        {
            return Ok(_patientAttachment.GetAll(patientAccount));
        }

        [HttpGet]
        public IHttpActionResult GetAttachmentCodeList()
        {
            return Ok(_patientAttachment.GetAttachmentTypeCodesList());
        }
        [HttpGet]
        public HttpResponseMessage Download(long id)
        {
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK);
            var fileInfo = _patientAttachment.Get(id);
            string filePath;
            if (fileInfo.Status == "success" && fileInfo != null)
            {
                filePath = HttpContext.Current.Server.MapPath($"~/{ConfigurationManager.AppSettings["PatientAttachments"] + "/" + fileInfo.Response.FilePath}");
                if (!File.Exists(filePath))
                {
                    response.StatusCode = HttpStatusCode.NotFound;
                    response.ReasonPhrase = string.Format("File not found: {0} .", fileInfo.Response.FileName);
                    return response;
                }
                byte[] bytes = File.ReadAllBytes(filePath);
                response.Content = new ByteArrayContent(bytes);
                response.Content.Headers.ContentLength = bytes.LongLength;
                response.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment");
                response.Content.Headers.ContentDisposition.FileName = fileInfo.Response.FileName;
                response.Content.Headers.ContentType = new MediaTypeHeaderValue(MimeMapping.GetMimeMapping(fileInfo.Response.FileName));
                return response;
            }
            else
            {
                response.StatusCode = HttpStatusCode.NotFound;
                response.ReasonPhrase = string.Format("File not found: {0} .", fileInfo.Response.FileName);
                return response;
            }
        }

    }
}
