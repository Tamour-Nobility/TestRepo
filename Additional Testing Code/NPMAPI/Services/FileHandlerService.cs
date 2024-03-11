using System;
using System.IO;
using System.Linq;
using System.Web;
using NPMAPI.Models;
using NPMAPI.Repositories;

namespace NPMAPI.Services
{
    public class FileHandlerService : IFileHandler
    {
        public ResponseModel UploadImage(HttpPostedFile File, string FilePath, string[] SupportedTypes, string fileNewName, long? MaximumUploadSize)
        {
            try
            {
                string fileName = File.FileName;
                string ext = Path.GetExtension(fileName).ToLower();
                if (!SupportedTypes.Contains(ext))
                    return new ResponseModel() { Status = "failure", Response = "Invalid file type." };
                if (File.ContentLength > MaximumUploadSize)
                    return new ResponseModel() { Status = "failure", Response = "Maximum file size exceeded." };
                if (ValidateDirectory(FilePath))
                    File.SaveAs($"{FilePath}{ext}");
                return new ResponseModel() { Status = "success", Response = $"{fileNewName}{ext}" };
            }
            catch (Exception ex)
            {
                return new ResponseModel() { Status = ex.ToString() };
            }
        }

        public ResponseModel DownloadFile(string FilePath)
        {
            try
            {
                DirectoryInfo directoryInfo = new DirectoryInfo(FilePath);
                if (directoryInfo == null)
                    return new ResponseModel() { Status = "Directory not found." };
                if (File.Exists(FilePath))
                {
                    byte[] imgData = File.ReadAllBytes($"{FilePath}");
                    return new ResponseModel() { Status = "success", Response = imgData };
                }
                else
                {
                    return new ResponseModel()
                    {
                        Status = "error",
                        Response = "File not found"
                    };
                }
            }
            catch (Exception)
            {
                throw;
            }
        }

        private bool ValidateDirectory(string path)
        {
            string directory = path.Substring(0, path.LastIndexOf("\\"));
            if (!Directory.Exists(directory))
                Directory.CreateDirectory(directory);
            return true;
        }
    }
}