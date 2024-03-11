using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Dynamic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using EdiFabric.Templates.Hipaa5010;
using NPMAPI.Models;
using NPMAPI.Models.ViewModels;
using NPMAPI.Repositories;
using Org.BouncyCastle.Ocsp;

namespace NPMAPI.Services
{
    public class ReportService : IReportRepository
    {
        #region Reports
        public string sp_name = "";
        public bool hasMatch = false;
        [HttpGet]
        public ResponseModel AgingSummaryAnalysisReport(long PracticeCode)
        {
            ResponseModel objResponse = new ResponseModel();
            try
            {
                List<Aging_Summary_Analysis_Reporting_Result> objAgingAnalysisReport = null;
                using (var ctx = new NPMDBEntities())
                {
                    objAgingAnalysisReport = ctx.Aging_Summary_Analysis_Reporting(PracticeCode).ToList();
                }

                if (objAgingAnalysisReport != null)
                {
                    objResponse.Status = "Sucess";
                    objResponse.Response = objAgingAnalysisReport;
                }
                else
                {
                    objResponse.Status = "Error";
                }
            }
            catch (Exception)
            {
                throw;
            }
            return objResponse;
        }

        public async Task<ResponseModel> DormantClaimsReport(long PracticeCode, int page, int size)
        {
            ResponseModel objResponse = new ResponseModel();
            var pagingResponse = new PagingResponse();
            try
            {
                List<SP_PATIENTSTATEMENTCOUNT_Result> objDormantClaimsReport = null;
                using (var ctx = new NPMDBEntities())
                {

                    objDormantClaimsReport = ctx.SP_PATIENTSTATEMENTCOUNT(PracticeCode)
                        .OrderByDescending(s => s.CLAIM_NO)
                        .Skip((page - 1) * size).Take(size).ToList();
                    pagingResponse.TotalRecords = ctx.SP_PATIENTSTATEMENTCOUNT(PracticeCode).Count();
                    pagingResponse.FilteredRecords = objDormantClaimsReport.Count(); // Count after pagination
                    pagingResponse.CurrentPage = page;
                    pagingResponse.data = objDormantClaimsReport;
                    
                }

                objResponse.Status = "success";
                objResponse.Response = pagingResponse;
            }
            catch (Exception)
            {
                throw;
            }
            return objResponse;
        }


        [HttpGet]
        public ResponseModel DormantClaimsReports(long Claim_no)
        {
            ResponseModel objResponse = new ResponseModel();
            try
            {
                List<SP_PATIENTSTATEMENTCOUNT_BYCLAIM_Result> objDormantClaimsReport = null;
                using (var ctx = new NPMDBEntities())
                {
                    objDormantClaimsReport = ctx.SP_PATIENTSTATEMENTCOUNT_BYCLAIM(Claim_no).ToList();
                }

                if (objDormantClaimsReport != null)
                {
                    objResponse.Status = "Sucess";
                    objResponse.Response = objDormantClaimsReport;
                }
                else
                {
                    objResponse.Status = "Error";
                }
            }
            catch (Exception)
            {
                throw;
            }
            return objResponse;
        }

        [HttpGet]
        public ResponseModel DormantClaimsReportsPagination(long PracticeCode)
        {
            ResponseModel objResponse = new ResponseModel();
            try
            {
                List<SP_PATIENTSTATEMENTCOUNT_Result> objDormantClaimsReport = null;
                using (var ctx = new NPMDBEntities())
                {
                    objDormantClaimsReport = ctx.SP_PATIENTSTATEMENTCOUNT(PracticeCode).ToList();
                }

                if (objDormantClaimsReport != null)
                {
                    objResponse.Status = "Sucess";
                    objResponse.Response = objDormantClaimsReport;
                }
                else
                {
                    objResponse.Status = "Error";
                }
            }
            catch (Exception)
            {
                throw;
            }
            return objResponse;
        }
        [HttpGet]
        public ResponseModel AgingSummaryPatientAnalysisReport(long PracticeCode)
        {
            ResponseModel objResponse = new ResponseModel();
            try
            {
                List<Aging_Summary_Analysis_Report_Patient_Result> objAgingAnalysisReport = null;
                using (var ctx = new NPMDBEntities())
                {
                    objAgingAnalysisReport = ctx.Aging_Summary_Analysis_Report_Patient(PracticeCode).ToList();
                }

                if (objAgingAnalysisReport != null)
                {
                    objResponse.Status = "Sucess";
                    objResponse.Response = objAgingAnalysisReport;
                }
                else
                {
                    objResponse.Status = "Error";
                }
                return objResponse;

            }
            catch (Exception)
            {
                throw;
            }
            return objResponse;
        }

        [HttpGet]
        public ResponseModel FinancialAnalysisByProviderandProcCodesReport(long PracticeCode, DateTime DateFrom, DateTime DateTo)
        {
            ResponseModel objResponse = new ResponseModel();
            try
            {
                List<Financial_Analysis_by_Provider_and_Procedure_Codes_Result> objFinancialAnalysisReport = null;
                using (var ctx = new NPMDBEntities())
                {
                    objFinancialAnalysisReport = ctx.Financial_Analysis_by_Provider_and_Procedure_Codes(PracticeCode, DateFrom, DateTo).ToList();
                }

                if (objFinancialAnalysisReport != null)
                {
                    objResponse.Status = "Sucess";
                    objResponse.Response = objFinancialAnalysisReport;
                }
                else
                {
                    objResponse.Status = "Error";
                }
                return objResponse;

            }
            catch (Exception)
            {
                throw;
            }
        }

        public ResponseModel FinancialAnalysisCPTLevelReport(long PracticeCode, DateTime DateFrom, DateTime DateTo)
        {
            ResponseModel objResponse = new ResponseModel();
            try
            {
                List<Financial_Analysis_At_CPT_Level_Result> objFinancialAnalysisReport = null;
                using (var ctx = new NPMDBEntities())
                {
                    objFinancialAnalysisReport = ctx.Financial_Analysis_At_CPT_Level(PracticeCode, DateFrom, DateTo).ToList();
                }

                if (objFinancialAnalysisReport != null)
                {
                    objResponse.Status = "Sucess";
                    objResponse.Response = objFinancialAnalysisReport;
                }
                else
                {
                    objResponse.Status = "Error";
                }
                return objResponse;

            }
            catch (Exception)
            {
                throw;
            }
        }

        public ResponseModel PaymentDetail(long? PracticeCode, DateTime? DateFrom, DateTime? DateTo, long? PatientAccount)
        {
            ResponseModel res = new ResponseModel();
            try
            {
                using (var ctx = new NPMDBEntities())
                {
                    var paymentDetailList = ctx.Payment_Detail(PracticeCode, DateFrom, DateTo, PatientAccount).ToList();
                    if (paymentDetailList.Count > 0)
                    {
                        foreach (var pay in paymentDetailList)
                        {
                            pay.amount_adjusted = pay.amount_adjusted == null ? 0 : pay.amount_adjusted;
                            pay.Amount_Paid = pay.Amount_Paid == null ? 0 : pay.Amount_Paid;
                            pay.reject_amount = pay.reject_amount == null ? 0 : pay.reject_amount;
                        }
                        res.Status = "Success";
                        res.Response = paymentDetailList;
                    }
                    else
                    {
                        res.Status = "Failed";
                        res.Response = "No Records";
                    }
                    return res;
                }
            }
            catch (Exception)
            {
                throw;
            }

        }

        public ResponseModel CPTWisePaymentDetail(long? PracticeCode, DateTime? DateFrom, DateTime? DateTo)
        {
            ResponseModel res = new ResponseModel();
            using (var ctx = new NPMDBEntities())
            {
                try
                {
                    List<Payment_detail_Proctest_Result> cptPaymentDetailList = ctx.Payment_detail_Proctest(PracticeCode, DateFrom, DateTo).ToList();
                    if (cptPaymentDetailList.Count > 0)
                    {
                        foreach (var pay in cptPaymentDetailList)
                        {
                            pay.AMOUNT_ADJUSTED = pay.AMOUNT_ADJUSTED == null ? 0 : pay.AMOUNT_ADJUSTED;
                            pay.AMOUNT_PAID = pay.AMOUNT_PAID == null ? 0 : pay.AMOUNT_PAID;
                            pay.REJECT_AMOUNT = pay.REJECT_AMOUNT == null ? 0 : pay.REJECT_AMOUNT;
                        }
                        res.Status = "Success";
                        res.Response = cptPaymentDetailList;
                    }
                    else
                    {
                        res.Status = "Failed";
                        res.Response = "No Records";
                    }
                }
                catch (Exception)
                {
                    throw;
                }
            }
            return res;
        }
        public ResponseModel AppointmentDetailReport(long PracticeCode, string DateFrom, string DateTo)
        {
            ResponseModel res = new ResponseModel();
            using (var ctx = new NPMDBEntities())
            {
                try
                {
                    List<SP_Appointment_Detail_Report_Result> appDtlList = ctx.SP_Appointment_Detail_Report(PracticeCode, DateFrom, DateTo).ToList();
                    if (appDtlList.Count > 0)
                    {
                        res.Status = "Success";
                        res.Response = appDtlList;
                    }
                    else
                    {
                        res.Status = "Failed";
                        res.Response = "No Records";
                    }
                }
                catch (Exception)
                {
                    throw;
                }
            }
            return res;
        }

        public ResponseModel ClaimPaymentsDetailReport(ClaimPaymentsDetailRequest request)
        {
            ResponseModel res = new ResponseModel();
            using (var ctx = new NPMDBEntities())
            {
                try
                {
                    //add sp here
                    res.Response = new
                    {
                        paymentId = 012,
                        postedBy = "",
                        paymentFrom = "",
                        paymentType = "",
                        checkNo = 1231,
                        checkDate = DateTime.Now.Day,
                        depositDate = DateTime.Now.Day,
                        totalAmount = 230,
                        postedAmount = 500
                    };
                }
                catch (Exception)
                {
                    throw;
                }
            }
            return res;
        }

        public ResponseModel MissingAppointmentDetailReport(long PracticeCode, string DateFrom, string DateTo)
        {
            ResponseModel res = new ResponseModel();
            using (var ctx = new NPMDBEntities())
            {
                try
                {
                    List<SP_Missing_Appointment_Report_Result> appDtlList = ctx.SP_Missing_Appointment_Report(PracticeCode, DateFrom, DateTo).ToList();
                    if (appDtlList.Count > 0)
                    {
                        res.Status = "Success";
                        res.Response = appDtlList;
                    }
                    else
                    {
                        res.Status = "Failed";
                        res.Response = "No Records";
                    }
                }
                catch (Exception)
                {
                    throw;
                }
            }
            return res;
        }

        bool AddProperty(ExpandoObject obj, string key, object value)
        {
            var dynamicDict = obj as IDictionary<string, object>;
            if (dynamicDict.ContainsKey(key))
                return false;
            else
                dynamicDict.Add(key, value);
            return true;
        }

        public ResponseModel OverAllChargesDos(ReportRequestModel req, long v)
        {
            ResponseModel res = new ResponseModel();
            try
            {
                CultureInfo culture = new CultureInfo("en-US");
              
                DateTime dDateFrom = Convert.ToDateTime(req.DateFrom, culture);
                DateTime dDateTo = Convert.ToDateTime(req.DateTo, culture);
                //Added by HAMZA ZULFIQAR as per USER STORY 119: Reporting Dashboard Implementation For All Practices
                findPractice(req.PracticeCode);
                using (var db = new NPMDBEntities())
                {
                    db.Database.Connection.Open();
                    var cmd = db.Database.Connection.CreateCommand();
                    //Updated by HAMZA ZULFIQAR as per USER STORY 119: Reporting Dashboard Implementation For All Practices
                    sp_name = hasMatch ? "OVER_ALL_CHARGES_DOS" : "USP_NPM_OVER_ALL_CHARGES";
                    cmd.CommandText = "exec " + sp_name + " @PracticeCode, @DATEFROM, @DATETO, @locationcode, @DateType";
                    cmd.Parameters.Add(new SqlParameter("PracticeCode", req.PracticeCode));
                    cmd.Parameters.Add(new SqlParameter("DATEFROM", dDateFrom));
                    cmd.Parameters.Add(new SqlParameter("DATETO", dDateTo));
                    cmd.Parameters.Add(new SqlParameter("locationcode", string.Join(",", req.LocationCode)));
                    cmd.Parameters.Add(new SqlParameter("DateType", req.DateType));
                    var reader = cmd.ExecuteReader();
                    var list = new List<dynamic>();
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            dynamic obj = new ExpandoObject();
                            for (int i = 0; i < reader.FieldCount; i++)
                            {
                                AddProperty(obj, reader.GetName(i), reader[i]);
                            }
                            list.Add(obj);
                        }
                    }
                    res.Status = "success";
                    res.Response = list;
                }
            }
            catch (Exception)
            {
                throw;
            }
            return res;
        }

        public ResponseModel ByCPTDos(ReportRequestModel req, long v)
        {
            ResponseModel res = new ResponseModel();
            try
            {
                DateTime dDateTo;
                DateTime dDateFrom;
                DateTime.TryParse(req.DateFrom, out dDateFrom);
                DateTime.TryParse(req.DateTo, out dDateTo);
                //Added by HAMZA ZULFIQAR as per USER STORY 119: Reporting Dashboard Implementation For All Practices
                findPractice(req.PracticeCode);
                using (var db = new NPMDBEntities())
                {
                    db.Database.Connection.Open();
                    var cmd = db.Database.Connection.CreateCommand();
                    //Updated by HAMZA ZULFIQAR as per USER STORY 119: Reporting Dashboard Implementation For All Practices
                    sp_name = hasMatch ? "By_Cpt_DOS" : "USP_NPM_By_Cpt_DOS";
                    cmd.CommandText = "exec " + sp_name + " @PracticeCode, @DATEFROM, @DATETO, @locationcode, @DateType";
                    cmd.Parameters.Add(new SqlParameter("PracticeCode", req.PracticeCode));
                    cmd.Parameters.Add(new SqlParameter("DATEFROM", dDateFrom));
                    cmd.Parameters.Add(new SqlParameter("DATETO", dDateTo));
                    cmd.Parameters.Add(new SqlParameter("locationcode", string.Join(",", req.LocationCode)));
                    cmd.Parameters.Add(new SqlParameter("DateType", req.DateType));
                    var reader = cmd.ExecuteReader();
                    var list = new List<dynamic>();
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            dynamic obj = new ExpandoObject();
                            for (int i = 0; i < reader.FieldCount; i++)
                            {
                                AddProperty(obj, reader.GetName(i), reader[i]);
                            }
                            list.Add(obj);
                        }
                    }
                    res.Status = "success";
                    res.Response = list;
                }
            }
            catch (Exception)
            {
                throw;
            }
            return res;
        }

        public ResponseModel ByHospitalDos(ReportRequestModel req, long v)
        {
            ResponseModel res = new ResponseModel();
            try
            {
                DateTime dDateTo;
                DateTime dDateFrom;
                DateTime.TryParse(req.DateFrom, out dDateFrom);
                DateTime.TryParse(req.DateTo, out dDateTo);
                //Added by HAMZA ZULFIQAR as per USER STORY 119: Reporting Dashboard Implementation For All Practices
                findPractice(req.PracticeCode);
                using (var db = new NPMDBEntities())
                {
                    db.Database.Connection.Open();
                    var cmd = db.Database.Connection.CreateCommand();
                    //Added by HAMZA ZULFIQAR as per USER STORY 119: Reporting Dashboard Implementation For All Practices
                    sp_name = hasMatch ? "By_Hospital_DOS" : "USP_NPM_By_Hospital";
                    cmd.CommandText = "exec " + sp_name + " @PracticeCode, @DATEFROM, @DATETO, @DateType";
                    cmd.Parameters.Add(new SqlParameter("PracticeCode", req.PracticeCode));
                    cmd.Parameters.Add(new SqlParameter("DATEFROM", dDateFrom));
                    cmd.Parameters.Add(new SqlParameter("DATETO", dDateTo));
                    cmd.Parameters.Add(new SqlParameter("DateType", req.DateType));
                    var reader = cmd.ExecuteReader();
                    var list = new List<dynamic>();
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            dynamic obj = new ExpandoObject();
                            for (int i = 0; i < reader.FieldCount; i++)
                            {
                                AddProperty(obj, reader.GetName(i), reader[i]);
                            }
                            list.Add(obj);
                        }
                    }
                    res.Status = "success";
                    res.Response = list;
                    db.Database.Connection.Close();
                }
            }
            catch (Exception)
            {
                throw;
            }
            return res;
        }

        public ResponseModel ByPrimaryDXDos(ReportRequestModel req, long v)
        {
            ResponseModel res = new ResponseModel();
            try
            {
                DateTime dDateTo;
                DateTime dDateFrom;
                DateTime.TryParse(req.DateFrom, out dDateFrom);
                DateTime.TryParse(req.DateTo, out dDateTo);
                //Added by HAMZA ZULFIQAR as per USER STORY 119: Reporting Dashboard Implementation For All Practices
                findPractice(req.PracticeCode);
                using (var db = new NPMDBEntities())
                {
                    db.Database.Connection.Open();
                    var cmd = db.Database.Connection.CreateCommand();
                    //Added by HAMZA ZULFIQAR as per USER STORY 119: Reporting Dashboard Implementation For All Practices
                    sp_name = hasMatch ? "By_Primary_Dx_DOS" : "USP_NPM_By_Primary_Dx_DOS";
                    cmd.CommandText = "exec " + sp_name + " @PracticeCode, @DATEFROM, @DATETO, @locationcode, @DateType";
                    cmd.Parameters.Add(new SqlParameter("PracticeCode", req.PracticeCode));
                    cmd.Parameters.Add(new SqlParameter("DATEFROM", dDateFrom));
                    cmd.Parameters.Add(new SqlParameter("DATETO", dDateTo));
                    cmd.Parameters.Add(new SqlParameter("locationcode", string.Join(",", req.LocationCode)));
                    cmd.Parameters.Add(new SqlParameter("DateType", req.DateType));
                    var reader = cmd.ExecuteReader();
                    var list = new List<dynamic>();
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            dynamic obj = new ExpandoObject();
                            for (int i = 0; i < reader.FieldCount; i++)
                            {
                                AddProperty(obj, reader.GetName(i), reader[i]);
                            }
                            list.Add(obj);
                        }
                    }
                    res.Status = "success";
                    res.Response = list;
                }
            }
            catch (Exception)
            {
                throw;
            }
            return res;
        }

        public ResponseModel ByCarrierDos(ReportRequestModel req, long v)
        {
            ResponseModel res = new ResponseModel();
            try
            {
                DateTime dDateTo;
                DateTime dDateFrom;
                DateTime.TryParse(req.DateFrom, out dDateFrom);
                DateTime.TryParse(req.DateTo, out dDateTo);
                //Added by HAMZA ZULFIQAR as per USER STORY 119: Reporting Dashboard Implementation For All Practices
                findPractice(req.PracticeCode);
                using (var db = new NPMDBEntities())
                {
                    db.Database.Connection.Open();
                    var cmd = db.Database.Connection.CreateCommand();
                    //Added by HAMZA ZULFIQAR as per USER STORY 119: Reporting Dashboard Implementation For All Practices
                    sp_name = hasMatch ? "By_Carrier_DOS" : "USP_NPM_By_Carrier_DOS";
                    cmd.CommandText = "exec " + sp_name + " @PracticeCode, @DATEFROM, @DATETO, @locationcode, @DateType";
                    cmd.Parameters.Add(new SqlParameter("PracticeCode", req.PracticeCode));
                    cmd.Parameters.Add(new SqlParameter("DATEFROM", dDateFrom));
                    cmd.Parameters.Add(new SqlParameter("DATETO", dDateTo));
                    cmd.Parameters.Add(new SqlParameter("locationcode", string.Join(",", req.LocationCode)));
                    cmd.Parameters.Add(new SqlParameter("DateType", req.DateType));
                    var reader = cmd.ExecuteReader();
                    var list = new List<dynamic>();
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            dynamic obj = new ExpandoObject();
                            for (int i = 0; i < reader.FieldCount; i++)
                            {
                                AddProperty(obj, reader.GetName(i), reader[i]);
                            }
                            list.Add(obj);
                        }
                    }
                    res.Status = "success";
                    res.Response = list;
                }
            }
            catch (Exception)
            {
                throw;
            }
            return res;
        }

        public ResponseModel PaymentMonthWise(ReportRequestModel req, long v)
        {
            ResponseModel res = new ResponseModel();
            try
            {
                DateTime dDateTo;
                DateTime dDateFrom;
                DateTime.TryParse(req.DateFrom, out dDateFrom);
                DateTime.TryParse(req.DateTo, out dDateTo);
                //Added by HAMZA ZULFIQAR as per USER STORY 119: Reporting Dashboard Implementation For All Practices
                findPractice(req.PracticeCode);
                using (var db = new NPMDBEntities())
                {
                    db.Database.Connection.Open();
                    var cmd = db.Database.Connection.CreateCommand();
                    //Updated by HAMZA ZULFIQAR as per USER STORY 119: Reporting Dashboard Implementation For All Practices
                    //cmd.CommandText = "exec Payment_Month_Wise @PracticeCode, @DATEFROM, @DATETO, @locationcode, @DateType";
                    sp_name = hasMatch ? "Payment_Month_Wise" : "USP_NPM_Payment_Month_Wise";
                    cmd.CommandText = "exec " + sp_name + " @PracticeCode, @DATEFROM, @DATETO, @locationcode, @DateType";
                    cmd.Parameters.Add(new SqlParameter("PracticeCode", req.PracticeCode));
                    cmd.Parameters.Add(new SqlParameter("DATEFROM", dDateFrom));
                    cmd.Parameters.Add(new SqlParameter("DATETO", dDateTo));
                    cmd.Parameters.Add(new SqlParameter("locationcode", string.Join(",", req.LocationCode)));
                    cmd.Parameters.Add(new SqlParameter("DateType", req.DateType));
                    var reader = cmd.ExecuteReader();
                    var list = new List<dynamic>();
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            dynamic obj = new ExpandoObject();
                            for (int i = 0; i < reader.FieldCount; i++)
                            {
                                AddProperty(obj, reader.GetName(i), reader[i]);
                            }
                            list.Add(obj);
                        }
                    }
                    res.Status = "success";
                    res.Response = list;
                }
            }
            catch (Exception)
            {
                throw;
            }
            return res;
        }

        public ResponseModel PaymentDailyRefresh(ReportRequestModel req, long v)
        {
            ResponseModel res = new ResponseModel();
            try
            {
                DateTime dDateTo;
                DateTime dDateFrom;
                DateTime.TryParse(req.DateFrom, out dDateFrom);
                DateTime.TryParse(req.DateTo, out dDateTo);
                //Added by HAMZA ZULFIQAR as per USER STORY 119: Reporting Dashboard Implementation For All Practices
                findPractice(req.PracticeCode);
                using (var db = new NPMDBEntities())
                {
                    db.Database.Connection.Open();
                    var cmd = db.Database.Connection.CreateCommand();
                    //Added by HAMZA ZULFIQAR as per USER STORY 119: Reporting Dashboard Implementation For All Practices
                    //cmd.CommandText = "exec Payment_Daily_Refresh @PracticeCode, @DATEFROM, @DATETO, @locationcode, @DateType";
                    sp_name = hasMatch ? "Payment_Daily_Refresh" : "USP_NPM_Payment_Daily_Refresh";
                    cmd.CommandText = "exec " + sp_name + " @PracticeCode, @DATEFROM, @DATETO, @locationcode, @DateType";
                    cmd.Parameters.Add(new SqlParameter("PracticeCode", req.PracticeCode));
                    cmd.Parameters.Add(new SqlParameter("DATEFROM", dDateFrom));
                    cmd.Parameters.Add(new SqlParameter("DATETO", dDateTo));
                    cmd.Parameters.Add(new SqlParameter("locationcode", string.Join(",", req.LocationCode)));
                    cmd.Parameters.Add(new SqlParameter("DateType", req.DateType));
                    var reader = cmd.ExecuteReader();
                    var list = new List<dynamic>();
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            dynamic obj = new ExpandoObject();
                            for (int i = 0; i < reader.FieldCount; i++)
                            {
                                AddProperty(obj, reader.GetName(i), reader[i]);
                            }
                            list.Add(obj);
                        }
                    }
                    res.Status = "success";
                    res.Response = list;
                }
            }
            catch (Exception)
            {
                throw;
            }
            return res;
        }

        public ResponseModel PaymentByCarrier(ReportRequestModel req, long v)
        {
            ResponseModel res = new ResponseModel();
            try
            {
                DateTime dDateTo;
                DateTime dDateFrom;
                DateTime.TryParse(req.DateFrom, out dDateFrom);
                DateTime.TryParse(req.DateTo, out dDateTo);
                //Added by HAMZA ZULFIQAR as per USER STORY 119: Reporting Dashboard Implementation For All Practices
                findPractice(req.PracticeCode);
                using (var db = new NPMDBEntities())
                {
                    db.Database.Connection.Open();
                    var cmd = db.Database.Connection.CreateCommand();
                    //Added by HAMZA ZULFIQAR as per USER STORY 119: Reporting Dashboard Implementation For All Practices
                    //cmd.CommandText = "exec Payment_By_Carrier @PracticeCode, @DATEFROM, @DATETO, @locationcode, @DateType";
                    sp_name = hasMatch ? "Payment_By_Carrier" : "USP_NPM_Payment_By_Carrier";
                    cmd.CommandText = "exec " + sp_name + " @PracticeCode, @DATEFROM, @DATETO, @locationcode, @DateType";
                    cmd.Parameters.Add(new SqlParameter("PracticeCode", req.PracticeCode));
                    cmd.Parameters.Add(new SqlParameter("DATEFROM", dDateFrom));
                    cmd.Parameters.Add(new SqlParameter("DATETO", dDateTo));
                    cmd.Parameters.Add(new SqlParameter("locationcode", string.Join(",", req.LocationCode)));
                    cmd.Parameters.Add(new SqlParameter("DateType", req.DateType));
                    var reader = cmd.ExecuteReader();
                    var list = new List<dynamic>();
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            dynamic obj = new ExpandoObject();
                            for (int i = 0; i < reader.FieldCount; i++)
                            {
                                AddProperty(obj, reader.GetName(i), reader[i]);
                            }
                            list.Add(obj);
                        }
                    }
                    res.Status = "success";
                    res.Response = list;
                }
            }
            catch (Exception)
            {
                throw;
            }
            return res;
        }

        public ResponseModel PaymentPrimaryDX(ReportRequestModel req, long v)
        {
            ResponseModel res = new ResponseModel();
            try
            {
                DateTime dDateTo;
                DateTime dDateFrom;
                DateTime.TryParse(req.DateFrom, out dDateFrom);
                DateTime.TryParse(req.DateTo, out dDateTo);
                //Added by HAMZA ZULFIQAR as per USER STORY 119: Reporting Dashboard Implementation For All Practices
                findPractice(req.PracticeCode);
                using (var db = new NPMDBEntities())
                {
                    db.Database.Connection.Open();
                    var cmd = db.Database.Connection.CreateCommand();
                    //Updated by HAMZA ZULFIQAR as per USER STORY 119: Reporting Dashboard Implementation For All Practices
                    //cmd.CommandText = "exec By_Primary_DX_Payment @PracticeCode, @DATEFROM, @DATETO, @locationcode, @DateType";
                    sp_name = hasMatch ? "By_Primary_DX_Payment" : "USP_NPM_By_Primary_DX_Payment";
                    cmd.CommandText = "exec " + sp_name + " @PracticeCode, @DATEFROM, @DATETO, @locationcode, @DateType";
                    cmd.Parameters.Add(new SqlParameter("PracticeCode", req.PracticeCode));
                    cmd.Parameters.Add(new SqlParameter("DATEFROM", dDateFrom));
                    cmd.Parameters.Add(new SqlParameter("DATETO", dDateTo));
                    cmd.Parameters.Add(new SqlParameter("locationcode", string.Join(",", req.LocationCode)));
                    cmd.Parameters.Add(new SqlParameter("DateType", req.DateType));
                    var reader = cmd.ExecuteReader();
                    var list = new List<dynamic>();
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            dynamic obj = new ExpandoObject();
                            for (int i = 0; i < reader.FieldCount; i++)
                            {
                                AddProperty(obj, reader.GetName(i), reader[i]);
                            }
                            list.Add(obj);
                        }
                    }
                    res.Status = "success";
                    res.Response = list;
                }
            }
            catch (Exception)
            {
                throw;
            }
            return res;
        }

        public ResponseModel PaymentByPrimaryICD10(ReportRequestModel req, long v)
        {
            ResponseModel res = new ResponseModel();
            try
            {
                DateTime dDateTo;
                DateTime dDateFrom;
                DateTime.TryParse(req.DateFrom, out dDateFrom);
                DateTime.TryParse(req.DateTo, out dDateTo);
                //Added by HAMZA ZULFIQAR as per USER STORY 119: Reporting Dashboard Implementation For All Practices
                findPractice(req.PracticeCode);
                using (var db = new NPMDBEntities())
                {
                    db.Database.Connection.Open();
                    var cmd = db.Database.Connection.CreateCommand();
                    //Added by HAMZA ZULFIQAR as per USER STORY 119: Reporting Dashboard Implementation For All Practices
                    //cmd.CommandText = "exec Payment_By_Primary_ICD10 @PracticeCode, @DATEFROM, @DATETO, @locationcode, @DateType";
                    sp_name = hasMatch ? "Payment_By_Primary_ICD10" : "USP_NPM_Payment_By_Primary_ICD10";
                    cmd.CommandText = "exec " + sp_name + " @PracticeCode, @DATEFROM, @DATETO, @locationcode, @DateType";
                    cmd.Parameters.Add(new SqlParameter("PracticeCode", req.PracticeCode));
                    cmd.Parameters.Add(new SqlParameter("DATEFROM", dDateFrom));
                    cmd.Parameters.Add(new SqlParameter("DATETO", dDateTo));
                    cmd.Parameters.Add(new SqlParameter("locationcode", string.Join(",", req.LocationCode)));
                    cmd.Parameters.Add(new SqlParameter("DateType", req.DateType));
                    var reader = cmd.ExecuteReader();
                    var list = new List<dynamic>();
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            dynamic obj = new ExpandoObject();
                            for (int i = 0; i < reader.FieldCount; i++)
                            {
                                AddProperty(obj, reader.GetName(i), reader[i]);
                            }
                            list.Add(obj);
                        }
                    }
                    res.Status = "success";
                    res.Response = list;
                }
            }
            catch (Exception)
            {
                throw;
            }
            return res;
        }

        public ResponseModel RecallVisits(ReportRequestModel req, long userId)
        {
            ResponseModel res = new ResponseModel();
            try
            {
                using (var ctx = new NPMDBEntities())
                {
                    var results = ctx.SP_GETRECALLVISITS_EGD(req.PracticeCode, req.DateFrom, req.DateTo).ToList();
                    res.Response = results;
                    res.Status = "success";
                }
            }
            catch (Exception)
            {
                throw;
            }
            return res;
        }

        public ResponseModel PeriodAnalysisAndClosing(ReportRequestModel req, long userId)
        {
            ResponseModel res = new ResponseModel();
            try
            {
                using (var ctx = new NPMDBEntities())
                {
                    var results = ctx.SP_GETPERIODANALYSISANDCLOSING(req.PracticeCode, req.DateFrom, req.DateTo).ToList();
                    res.Response = results;
                    res.Status = "success";
                }
            }
            catch (Exception)
            {
                throw;
            }
            return res;
        }

        public ResponseModel PracticeAnalysis(ReportRequestModel req, long userId)
        {
            ResponseModel res = new ResponseModel();
            try
            {
                using (var ctx = new NPMDBEntities())
                {
                    var results = ctx.SP_GETPRACTICEANALYSIS(req.PracticeCode, req.DateFrom, req.DateTo).ToList();
                    res.Response = results;
                    res.Status = "success";
                }
            }
            catch (Exception)
            {
                throw;
            }
            return res;
        }

        public ResponseModel PatientBirthDays(ReportRequestModel req, long userId)
        {
            ResponseModel res = new ResponseModel();
            try
            {
                using (var ctx = new NPMDBEntities())
                {
                    if (!string.IsNullOrEmpty(req.Month) && req.Month.Length == 7)
                    {
                        req.Month = req.Month + "-01";
                    }
                    var results = ctx.SP_GETPATIENTBDAYS(req.PracticeCode, req.Month).ToList();
                    res.Response = results;
                    res.Status = "success";
                }
            }
            catch (Exception)
            {
                throw;
            }
            return res;
        }

        public ResponseModel AgingSummaryRecent(ReportRequestModel req, long v)
        {
            ResponseModel res = new ResponseModel();
            try
            {
                using (var ctx = new NPMDBEntities())
                {
                  var results = ctx.Aging_Summary_report_Top_5_Payers(req.PracticeCode).ToList();
                    res.Response = results;
                    res.Status = "success";
                }
            }
            catch (Exception)
            {
                throw;
            }
            return res;
        }

        public ResponseModel ChargesPaymentsRecent(ReportRequestModel req, long v)
        {
            ResponseModel res = new ResponseModel();
            try
            {
                using (var db = new NPMDBEntities())
                {
                    db.Database.Connection.Open();
                    var cmd = db.Database.Connection.CreateCommand();
                    cmd.CommandText = "exec SP_GETChargesPaymentsLastMonthsTets @PRAC";
                    cmd.Parameters.Add(new SqlParameter("PRAC", req.PracticeCode));
                    var reader = cmd.ExecuteReader();
                    var list = new List<dynamic>();
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            dynamic obj = new ExpandoObject();
                            for (int i = 0; i < reader.FieldCount; i++)
                            {
                                AddProperty(obj, reader.GetName(i), reader[i]);
                            }
                            list.Add(obj);
                        }
                    }
                    res.Status = "success";
                    res.Response = list;
                }
            }
            catch (Exception)
            {
                throw;
            }
            return res;
        }

        public ResponseModel GetAgingDashboard(ReportRequestModel req, long v)
        {
            ResponseModel res = new ResponseModel();
            try
            {
                using (var ctx = new NPMDBEntities())
                {
                    var results = ctx.SP_GETAGINGDASHBOARD_Tets(req.PracticeCode).ToList();
                    res.Response = results;
                    res.Status = "success";
                }
            }
            catch (Exception)
            {
                throw;
            }
            return res;
        }

        public ResponseModel GetInsuranceDetailReport(long? PracCode, long v)
        {
            ResponseModel res = new ResponseModel();
            try
            {
                using (var ctx = new NPMDBEntities())
                {
                    var results = ctx.sp_insuranceardetailreport(PracCode).ToList();

                    if (results.Count > 0)
                    {
                        res.Response = results;
                        res.Status = "success";
                    }
                    else
                    {
                        res.Status = "Failed";
                        res.Response = "No Records";

                    }

                }
            }
            catch (Exception)
            {
                throw;
            }

            return res;

        }
        public ResponseModel GetUserReport(string PracCode, string v, string dateFrom, string dateTo)
        {
            if (v == "0")
            {
                v = null;
            }
            if (dateFrom == "null")
            {
                dateFrom = null;
            }
            if (dateTo == "null")
            {
                dateTo = null;
            }
            ResponseModel res = new ResponseModel();
            try
            {
                List<SP_getuserDailyReport1_Result> list = null;
                using (var ctx = new NPMDBEntities())
                {
                     list = ctx.SP_getuserDailyReport1(PracCode, v, dateFrom, dateTo).ToList();

                    if (list.Count > 0)
                    {
                        res.Response = list;
                        res.Status = "success";
                    }
                    else
                    {
                        res.Status = "Failed";
                        res.Response = "No Records";

                    }

                }
            }
            catch (Exception)
            {
                throw;
            }

            return res;

        }
        //public ResponseModel GetUserReport(string PracCode, string v)
        //{
        //    if (v == "0")
        //            {
        //              v = null;
        //          }
        //        ResponseModel res = new ResponseModel();
        //    try
        //    {
        //        using (var db = new NPMDBEntities())
        //        {
        //            db.Database.Connection.Open();
        //            var cmd = db.Database.Connection.CreateCommand();
        //            cmd.CommandText = "exec [SP_userReportCharges] @practice_code, @userid";
        //            cmd.Parameters.Add(new SqlParameter("practice_code", PracCode));
        //            cmd.Parameters.Add(new SqlParameter("userid", v));
        //            var reader = cmd.ExecuteReader();
        //            var list = new List<dynamic>();
        //            if (reader.HasRows)
        //            {
        //                while (reader.Read())
        //                {
        //                    dynamic obj = new ExpandoObject();
        //                    for (int i = 0; i < reader.FieldCount; i++)
        //                    {
        //                        AddProperty(obj, reader.GetName(i), reader[i]);
        //                    }
        //                    list.Add(obj);
        //                }
        //            }
        //            res.Status = "success";
        //            res.Response = list;
        //        }
        //    }
        //    catch (Exception)
        //    {
        //        throw;
        //    }
        //    return res;
        //}
        public ResponseModel holdReport(long? PracCode)
        {
            ResponseModel res = new ResponseModel();
            try
            {
                using (var ctx = new NPMDBEntities())
                {
                    var results = ctx.DelayClaimReports(PracCode).ToList();

                    if (results.Count > 0)
                    {
                       res.Response = results;
                      res.Status = "success";
                    }
                    else
                   {
                      res.Status = "Failed";
                        res.Response = "No Records";

                    }

                }
            }
            catch (Exception)
            {
                throw;
            }

            return res;

        }

        public ResponseModel GetRollingSummaryReport(string PracCode, string duration)
        {
            long pr = Convert.ToInt64(PracCode);
            int du=Convert.ToInt32('-'+duration);
            ResponseModel res = new ResponseModel();
            try
            {
                using (var db = new NPMDBEntities())
                {
                    db.Database.Connection.Open();
                    var cmd = db.Database.Connection.CreateCommand();
                    cmd.CommandText = "exec SP_rollingReport @PracticeCode,@duration";
                    cmd.Parameters.Add(new SqlParameter("PracticeCode", pr));
                    cmd.Parameters.Add(new SqlParameter("duration", du));
            
                    var reader = cmd.ExecuteReader();
                    var list = new List<dynamic>();
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            dynamic obj = new ExpandoObject();
                            for (int i = 0; i < reader.FieldCount; i++)
                            {
                                AddProperty(obj, reader.GetName(i), reader[i]);
                            }
                            list.Add(obj);
                        }
                    }
                    res.Response = list;
                    res.Status = "success";
                }
            }
            catch (Exception)
            {
                throw;
            }
            return res;

        }




        //CLAIMS AND ACCOUNT ASSIGNMENT REPORTS

        public ResponseModel ClaimAssignmentReport(long PracticeCode, string DateFrom, string DateTo)
        {
            ResponseModel objResponse = new ResponseModel();
            List<ClaimAssignee_CL> assignedclaims = null;

            {
                using (var ctx = new NPMDBEntities())
                    try
                    {
                        DateTime dDateTo;
                        DateTime dDateFrom;
                        DateTime.TryParse(DateFrom, out dDateFrom);
                        DateTime.TryParse(DateTo, out dDateTo);
                        dDateTo = dDateTo.AddHours(23).AddMinutes(59);

                        assignedclaims = ctx.ClaimAssignee_CL.Where(c => c.PracticeCode == PracticeCode && c.Created_Date >= dDateFrom && c.Created_Date <= dDateTo).ToList();

                        if (assignedclaims != null)
                        {
                            objResponse.Status = "Sucess";
                            objResponse.Response = assignedclaims;


                        }
                    }

                    catch (Exception)
                    {
                        throw;
                    }
            }
            return objResponse;
        }



        public ResponseModel AccounAssignmentReport(long PracticeCode, string DateFrom, string DateTo)
        {
            ResponseModel objResponse = new ResponseModel();
            List<AccountAssignee_AL> assignedaccounts = null;

            {
                using (var ctx = new NPMDBEntities())
                    try
                    {
                        DateTime dDateTo;
                        DateTime dDateFrom;
                        DateTime.TryParse(DateFrom, out dDateFrom);
                        DateTime.TryParse(DateTo, out dDateTo);
                        dDateTo = dDateTo.AddHours(23).AddMinutes(59);

                        assignedaccounts = ctx.AccountAssignee_AL.Where(c => c.PracticeCode == PracticeCode && c.Created_Date >= dDateFrom && c.Created_Date <= dDateTo).ToList();

                        if (assignedaccounts != null)
                        {
                            objResponse.Status = "Sucess";
                            objResponse.Response = assignedaccounts;


                        }
                    }

                    catch (Exception)
                    {
                        throw;
                    }
            }
            return objResponse;
        }


        public ResponseModel CPA(ReportRequestModel req, long v)
        {
            //Added by HAMZA ZULFIQAR as per USER STORY 119: Reporting Dashboard Implementation For All Practices
            findPractice(req.PracticeCode);
            ResponseModel res = new ResponseModel();
            try
            {
                using (var db = new NPMDBEntities())
                {
                    db.Database.Connection.Open();
                    var cmd = db.Database.Connection.CreateCommand();
                    //Updated by HAMZA ZULFIQAR as per USER STORY 119: Reporting Dashboard Implementation For All Practices
                    if (hasMatch)
                    {
                        cmd.CommandText = "exec SP_COSSCPABYADDCRT @datecriteria,@datacriteria,@Fromdate,@Todate,@facname";
                        cmd.Parameters.Add(new SqlParameter("facname", string.Join(",", req.LocationCode)));
                    }
                    else
                    {
                        cmd.CommandText = "exec USP_NPM_COSSCPABYADDCRT @datecriteria,@datacriteria,@PracticeCode,@Fromdate,@Todate,@locationcode";
                        cmd.Parameters.Add(new SqlParameter("locationcode", string.Join(",", req.LocationCode)));
                        cmd.Parameters.Add(new SqlParameter("PracticeCode", req.PracticeCode));
                    }
                    cmd.Parameters.Add(new SqlParameter("datecriteria", req.DateType));
                    cmd.Parameters.Add(new SqlParameter("datacriteria", req.DataType));
                    cmd.Parameters.Add(new SqlParameter("Fromdate", req.DateFrom));
                    cmd.Parameters.Add(new SqlParameter("Todate", req.DateTo));
                    //cmd.Parameters.Add(new SqlParameter("facname", string.Join(",", req.LocationCode)));
                    var reader = cmd.ExecuteReader();
                    var list = new List<dynamic>();
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            dynamic obj = new ExpandoObject();
                            for (int i = 0; i < reader.FieldCount; i++)
                            {
                                AddProperty(obj, reader.GetName(i), reader[i]);
                            }
                            list.Add(obj);
                        }
                    }
                    res.Response = list;
                    res.Status = "success";
                }
            }
            catch (Exception)
            {
                throw;
            }
            return res;
        }


        //Added by HAMZA ZULFIQAR as per USER STORY 119: Reporting Dashboard Implementation For All Practices
        public ResponseModel CheckPractice(long PracticeCode)
        {
            ResponseModel res = new ResponseModel();
            try
            {
                var result = this.findPractice(PracticeCode);
                res.Response = result;
                res.Status = "success";
            }
            catch (Exception e)
            {
                throw e;
            }
            return res;
        }
        //Added by HAMZA ZULFIQAR as per USER STORY 119: Reporting Dashboard Implementation For All Practices
        public bool findPractice(long PracticeCode)
        {
            using (var db = new NPMDBEntities())
            {
                hasMatch = db.Practice_Reporting.Any(o => o.Practice_Code == PracticeCode && o.Deleted != true);
            }
            return hasMatch;
        }


        #endregion Reports
    }
}