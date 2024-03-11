namespace NPMAPI.Models
{
    public class ResponseModel
    {
        public string Status { get; set; }
        public dynamic Response { get; set; }
    }

    public class ResponseModelForE
    {
        public string Status { get; set; }

        public dynamic Response { get; set; }
        public dynamic Data { get; set; }

        public dynamic SuccessCode { get; set; }

        public string[] SuccessCodeText { get; set; }

    }
}