using System;
using System.Configuration;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web.Http;

namespace NPMAPI.Controllers
{
    public class HCFAController : BaseController
    {
        [HttpGet]
        public HttpResponseMessage GenerateHcfa(string claimNo, bool isPrintable = false)
        {
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(ConfigurationManager.AppSettings["HCFAAPIBaseAddress"]);
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                var urlParameters = $"/api/hcfa?claimNo={claimNo}&isPrintable={isPrintable}";
                return client.GetAsync(urlParameters).Result;
            }
        }
    }
}
