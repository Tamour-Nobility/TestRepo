using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AutoDealer.Models;
using AutoDealer.ViewModels;
using System.Web.Hosting;
using iTextSharp.text;
using MvcRazorToPdf;
using iTextSharp.text.pdf;
using System.IO;
using System.Configuration;
namespace AutoDealer.Controllers
{
    [Authorize]
    public class HomeController : Controller
    {
        AutoDealerDbEntities db = new AutoDealerDbEntities();

        [Authorize]
        public ActionResult Index()
        {
            ViewBag.Message = "Modify this template to jump-start your ASP.NET MVC application.";

            return View();
        }


        [Authorize]
        public ActionResult DealerInfo()
        {
            Dealer obj = db.Dealers.SingleOrDefault();
            DealerViewModel objDealerViewModel = new DealerViewModel();
            if (obj != null)
            {
                objDealerViewModel.Address = obj.Address;
                objDealerViewModel.City = obj.City;
                objDealerViewModel.City_Tax_Account_Number = obj.City_Tax_Account_Number;
                objDealerViewModel.Colorado_Tax_Account = obj.Colorado_Tax_Account;
                objDealerViewModel.DealerID = obj.DealerID;
                objDealerViewModel.DealerName = obj.DealerName;
                objDealerViewModel.LicenseNumber = obj.LicenseNumber;
                objDealerViewModel.Name_Owner_Or_Agent_ID = obj.Name_Owner_Or_Agent_ID;
                objDealerViewModel.Permit_Date_Expired = obj.Permit_Date_Expired;
                objDealerViewModel.Permit_Date_Issued = obj.Permit_Date_Issued;
                objDealerViewModel.Permit_Number = obj.Permit_Number;
                objDealerViewModel.State = obj.State;
                objDealerViewModel.Trade_In_Allowance = obj.Trade_In_Allowance;
                objDealerViewModel.Trade_In_Body_Type = obj.Trade_In_Body_Type;
                objDealerViewModel.Trade_In_Make = obj.Trade_In_Make;
                objDealerViewModel.Trade_In_Model = obj.Trade_In_Model;
                objDealerViewModel.Trade_In_VIN = obj.Trade_In_VIN;
                objDealerViewModel.Trade_In_Year = obj.Trade_In_Year;
                objDealerViewModel.Zip = obj.Zip;
                
                
            }

            return View(objDealerViewModel);
        }

        [HttpPost]
        public ActionResult SaveDealerInfo(DealerViewModel obj)
        {
            if (ModelState.IsValid)
            {
                Dealer objDealerViewModel = db.Dealers.SingleOrDefault();
                if (objDealerViewModel == null)
                    objDealerViewModel = new Dealer();

                objDealerViewModel.Address = obj.Address;
                objDealerViewModel.City = obj.City;
                objDealerViewModel.City_Tax_Account_Number = obj.City_Tax_Account_Number;
                objDealerViewModel.Colorado_Tax_Account = obj.Colorado_Tax_Account;
                objDealerViewModel.DealerID = obj.DealerID;
                objDealerViewModel.DealerName = obj.DealerName;
                objDealerViewModel.LicenseNumber = obj.LicenseNumber;
                objDealerViewModel.Name_Owner_Or_Agent_ID = obj.Name_Owner_Or_Agent_ID;
                objDealerViewModel.Permit_Date_Expired = obj.Permit_Date_Expired;
                objDealerViewModel.Permit_Date_Issued = obj.Permit_Date_Issued;
                objDealerViewModel.Permit_Number = obj.Permit_Number;
                objDealerViewModel.State = obj.State;
                objDealerViewModel.Trade_In_Allowance = obj.Trade_In_Allowance;
                objDealerViewModel.Trade_In_Body_Type = obj.Trade_In_Body_Type;
                objDealerViewModel.Trade_In_Make = obj.Trade_In_Make;
                objDealerViewModel.Trade_In_Model = obj.Trade_In_Model;
                objDealerViewModel.Trade_In_VIN = obj.Trade_In_VIN;
                objDealerViewModel.Trade_In_Year = obj.Trade_In_Year;
                objDealerViewModel.Zip = obj.Zip;

                Dealer objDealer = db.Dealers.SingleOrDefault();
                if (objDealer == null)
                    db.Dealers.AddObject(objDealerViewModel);
                else
                db.ObjectStateManager.ChangeObjectState(objDealerViewModel, System.Data.EntityState.Modified);
                db.SaveChanges();
                return RedirectToAction("DealerInfo");
            }

            return View(obj);
        }

        public ActionResult NewSale(long saleId =0)
        {
            SaleViewModel objSale = new SaleViewModel();
            if (saleId != 0)
            {
                ApplicationForTitle objTitleApplication = db.ApplicationForTitles.SingleOrDefault(apt => apt.TitleApplicationID == saleId);
                BuyerInfo objBuyerInfo = db.BuyerInfoes.SingleOrDefault(bi => bi.BuyerID == objTitleApplication.BuyerInfoID);
                VehicleInfo objVehicleInfo = db.VehicleInfoes.SingleOrDefault(vi => vi.TitleApplicationID == objTitleApplication.TitleApplicationID);
                RetailPurchaseAgreement objRetailPurAgreement = db.RetailPurchaseAgreements.SingleOrDefault(rpa => rpa.TitleApplicationID == objTitleApplication.TitleApplicationID);

                if (objBuyerInfo.BuyerID != 0)
                {
                     objSale.BuyerID = objBuyerInfo.BuyerID;
                     objSale.Address = objBuyerInfo.Address;
                     objSale.BuyerLegalName1 = objBuyerInfo.BuyerLegalName1;
                     objSale.BuyerLegalName2 = objBuyerInfo.BuyerLegalName2;
                     objSale.City = objBuyerInfo.City;
                     objSale.County = objBuyerInfo.County;
                     objSale.DLExpiryDate = objBuyerInfo.DLExpiryDate ;
                     objSale.DLNumber = objBuyerInfo.DLNumber;
                     objSale.DLState = objBuyerInfo.DLState;
                     objSale.DOB = objBuyerInfo.DOB;
                     objSale.DR2421Attached = objBuyerInfo.DR2421Attached;
                     objSale.First_Lien_Amount = objBuyerInfo.First_Lien_Amount;
                     objSale.First_LienHolder_Name = objBuyerInfo.First_LienHolder_Name;
                     objSale.HomePhoneNumber = objBuyerInfo.HomePhoneNumber;
                     objSale.LienHolder_Address = objBuyerInfo.LienHolder_Address;
                     objSale.LienHolder_City = objBuyerInfo.LienHolder_City;
                     objSale.LienHolder_State = objBuyerInfo.LienHolder_State;
                     objSale.LienHolder_Zip = objBuyerInfo.LienHolder_Zip;
                     objSale.OtherName = objBuyerInfo.OtherName;
                     objSale.State = objBuyerInfo.State;
                     objSale.Zip = objBuyerInfo.Zip;

                     if (objBuyerInfo.IsColaradoIdDL == 1)
                         objSale.IsColaradoIdDL = 1;
                    else if (objBuyerInfo.IsColaradoIdDL == 2)
                         objSale.IsColaradoIdDL = 2;
                     else if (objBuyerInfo.IsColaradoIdDL == 3)
                     {
                         objSale.IsColaradoIdDL = 3;
                         objSale.OtherIDName = objBuyerInfo.OtherIDName;
                     }



                }
                if (objTitleApplication.TitleApplicationID != 0)
                {
                    objSale.DateOfSale = objTitleApplication.DateOfSale;
                    objSale.DateOf_TitleApp = objTitleApplication.DateOf_TitleApp;
                    objSale.Cash_Price_After_DownPayment = objTitleApplication.Cash_Price_After_DownPayment;
                    objSale.Daily_Fee_For_Use_Credit_Fails = objTitleApplication.Daily_Fee_For_Use_Credit_Fails;
                    objSale.Daily_Fee_For_Milage_Credit_Fails = objTitleApplication.Daily_Fee_For_Milage_Credit_Fails;
                    objSale.Dealer_Reps_Name = objTitleApplication.Dealer_Reps_Name;
                    objSale.Gross_Selling_Price = objTitleApplication.Gross_Selling_Price;
                    objSale.Gross_Amount_Trade_In = objTitleApplication.Gross_Amount_Trade_In;
                    objSale.Net_Selling_Price = objTitleApplication.Net_Selling_Price;
                    objSale.SalesPerson = objTitleApplication.SalesPerson;
                    objSale.TitleApplicationID = objTitleApplication.TitleApplicationID;
                }
                if (objVehicleInfo.VehicleID != 0)
                {
                    objSale.Commercial_Use = objVehicleInfo.Commercial_Use;
                    objSale.CWT = objVehicleInfo.CWT;
                    objSale.FuelType = objVehicleInfo.FuelType;
                    //objSale.FuelTypeName;
                    objSale.Odometer = objVehicleInfo.Odometer;
                    objSale.Odometer_Statement_Date = objVehicleInfo.Odometer_Statement_Date;

                    objSale.Vehicle_Status = objVehicleInfo.Vehicle_Status;
                    objSale.VehicleBody = objVehicleInfo.VehicleBody;
                    objSale.VehicleColor = objVehicleInfo.VehicleColor;
                    objSale.VehicleMake = objVehicleInfo.VehicleMake;
                    objSale.VehicleModel = objVehicleInfo.VehicleModel;
                    objSale.VehicleStockNumber = objVehicleInfo.VehicleStockNumber;
                    objSale.VehicleYear = objVehicleInfo.VehicleYear;
                    objSale.VIN = objVehicleInfo.VIN;
                    objSale.VehicleID = objVehicleInfo.VehicleID;
                    objSale.IsElectricPluggedIn = objVehicleInfo.IsElectricPluggedIn;


                    // trade in 
                    objSale.Trade_In_Allowance = objVehicleInfo.Trade_In_Allowance;
                    objSale.Trade_In_Body_Type = objVehicleInfo.Trade_In_Body_Type;
                    objSale.Trade_In_Color = objVehicleInfo.Trade_In_Color;
                    objSale.Trade_In_Make = objVehicleInfo.Trade_In_Make;
                    objSale.Trade_In_Model = objVehicleInfo.Trade_In_Model;
                    objSale.Trade_In_OdometerReading = objVehicleInfo.Trade_In_OdometerReading;
                    objSale.Trade_In_VIN = objVehicleInfo.Trade_In_VIN;
                    objSale.Trade_In_Year = objVehicleInfo.Trade_In_Year;
                    objSale.Trade_In_BalanceOwedLineHolder = objVehicleInfo.Trade_In_BalanceOwedLineHolder;
                    // trade in 
                }

                if (objRetailPurAgreement != null && objRetailPurAgreement.RetailPurchaseID != 0)
                {
                    objSale.CashPrice = objRetailPurAgreement.CashPrice;
                    objSale.CityTax = objRetailPurAgreement.CityTax;
                    objSale.CountyTax = objRetailPurAgreement.CountyTax;
                    objSale.DownPayment = objRetailPurAgreement.DownPayment;
                    objSale.DeferredDownPayment = objRetailPurAgreement.deferredDownPayment;
                    objSale.GAP = objRetailPurAgreement.GAP;
                    objSale.GrossAmountofTradeIn = objRetailPurAgreement.GrossAmountofTradeIn;
                    objSale.RTDTax = objRetailPurAgreement.RTDTax;
                    objSale.ServiceContract = objRetailPurAgreement.ServiceContract;
                    objSale.StateTax = objRetailPurAgreement.StateTax;
                    objSale.UnPaidBalanceDue = objRetailPurAgreement.UnPaidBalanceDue;
                    objSale.RetailPurchaseID = objRetailPurAgreement.RetailPurchaseID;

                    objSale.TotalSalesPrice = objRetailPurAgreement.TotalSalesPrice;
                    objSale.SubTotal = objRetailPurAgreement.SubTotal;
                    objSale.TotalDue = objRetailPurAgreement.TotalDue;
                    objSale.TotalTax = objRetailPurAgreement.TotalTax;
                }
            }
            objSale.FuelTypeList = db.FuelTypes.ToList();
            return View(objSale);
        }

        [HttpPost]
        public ActionResult NewSale(SaleViewModel objSale)
        {
            ModelState["IsColaradoIdDL"].Errors.Clear();
            if (ModelState.IsValid)
            {
                ApplicationForTitle objApplicactionTitle = null;
                BuyerInfo objBuyerInfo = null;
                VehicleInfo objVehicleInfo = null;
                RetailPurchaseAgreement objRetailPurAgreement = null;
                if (objSale.TitleApplicationID == 0)
                {
                    objApplicactionTitle = new ApplicationForTitle();
                    objVehicleInfo = new VehicleInfo();
                    objBuyerInfo = new BuyerInfo();
                    objRetailPurAgreement = new RetailPurchaseAgreement();
                }
                else
                {
                    objApplicactionTitle = db.ApplicationForTitles.SingleOrDefault(aft => aft.TitleApplicationID == objSale.TitleApplicationID);
                    objBuyerInfo = db.BuyerInfoes.SingleOrDefault(bi => bi.BuyerID == objSale.BuyerID);
                    objVehicleInfo = db.VehicleInfoes.SingleOrDefault(vi => vi.VehicleID == objSale.VehicleID);
                    objRetailPurAgreement = db.RetailPurchaseAgreements.SingleOrDefault(rpa => rpa.TitleApplicationID == objApplicactionTitle.TitleApplicationID);
                    if(objRetailPurAgreement == null)
                        objRetailPurAgreement = new RetailPurchaseAgreement();
                }

                // Value Assigning of Title Application //


                #region BuyerInfo
                objBuyerInfo.Address = objSale.Address;
                objBuyerInfo.BuyerLegalName1 = objSale.BuyerLegalName1;
                objBuyerInfo.BuyerLegalName2 = objSale.BuyerLegalName2;
                objBuyerInfo.City = objSale.City;
                objBuyerInfo.County = objSale.County;
                objBuyerInfo.DLExpiryDate = objSale.DLExpiryDate;
                objBuyerInfo.DLNumber = objSale.DLNumber;
                objBuyerInfo.DLState = objSale.DLState;
                objBuyerInfo.DOB = objSale.DOB;
                objBuyerInfo.DR2421Attached = objSale.DR2421Attached;
                objBuyerInfo.First_Lien_Amount = objSale.First_Lien_Amount;
                objBuyerInfo.First_LienHolder_Name = objSale.First_LienHolder_Name;
                objBuyerInfo.HomePhoneNumber = objSale.HomePhoneNumber;
                objBuyerInfo.LienHolder_Address = objSale.LienHolder_Address;
                objBuyerInfo.LienHolder_City = objSale.LienHolder_City;
                objBuyerInfo.LienHolder_State = objSale.LienHolder_State;
                objBuyerInfo.LienHolder_Zip = objSale.LienHolder_Zip;
                objBuyerInfo.OtherName = objSale.OtherName;
                objBuyerInfo.State = objSale.State;
                objBuyerInfo.Zip = objSale.Zip;

                if (objSale.IsColaradoIdDL == 1)
                    objBuyerInfo.IsColaradoIdDL = 1;
                else if (objSale.IsColaradoIdDL == 2)
                    objBuyerInfo.IsColaradoIdDL = 2;
                else if (objSale.IsColaradoIdDL == 3)
                {
                    objBuyerInfo.IsColaradoIdDL = 3;
                    objBuyerInfo.OtherIDName = objSale.OtherIDName;
                }


                
                if (objSale.BuyerID == 0)
                {
                    objBuyerInfo.CreatedDate = System.DateTime.Now;
                    db.BuyerInfoes.AddObject(objBuyerInfo);
                }
                else
                {
                    db.ObjectStateManager.ChangeObjectState(objBuyerInfo, System.Data.EntityState.Modified);
                }
                db.SaveChanges();
                #endregion BuyerInfo



                #region TitleApp
                objApplicactionTitle.DateOfSale = objSale.DateOfSale;
                objApplicactionTitle.DateOf_TitleApp = objSale.DateOfSale;
                objApplicactionTitle.Cash_Price_After_DownPayment = objSale.Cash_Price_After_DownPayment;
                objApplicactionTitle.Daily_Fee_For_Use_Credit_Fails = objSale.Daily_Fee_For_Use_Credit_Fails;
                objApplicactionTitle.Daily_Fee_For_Milage_Credit_Fails = objSale.Daily_Fee_For_Milage_Credit_Fails;
                objApplicactionTitle.Dealer_Reps_Name = objSale.Dealer_Reps_Name;
                objApplicactionTitle.Gross_Selling_Price = objSale.Gross_Selling_Price;
                objApplicactionTitle.Gross_Amount_Trade_In = objSale.Gross_Amount_Trade_In;
                objApplicactionTitle.Net_Selling_Price = objSale.Net_Selling_Price;
                objApplicactionTitle.SalesPerson = objSale.Dealer_Reps_Name;
                objApplicactionTitle.BuyerInfoID = objBuyerInfo.BuyerID;
                objApplicactionTitle.AdditionalComments = objSale.additionalcomments;
                if (objSale.TitleApplicationID == 0)
                {
                    db.ApplicationForTitles.AddObject(objApplicactionTitle);
                }
                else
                {
                    db.ObjectStateManager.ChangeObjectState(objApplicactionTitle, System.Data.EntityState.Modified);
                }
                db.SaveChanges();
                #endregion TitleApp



               
                #region VehicleInfo
                objVehicleInfo.IsElectricPluggedIn = objSale.IsElectricPluggedIn;
                objVehicleInfo.Commercial_Use = objSale.Commercial_Use;
                objVehicleInfo.CWT = objSale.CWT;
                objVehicleInfo.FuelType = objSale.FuelType;
                //objVehicleInfo.FuelTypeName = objSale.FuelTypeName;
                objVehicleInfo.Odometer = objSale.Odometer;
                
                //objVehicleInfo.Odometer_Statement_Date = objSale.Odometer_Statement_Date;
                objVehicleInfo.Odometer_Statement_Date = objSale.DateOfSale;

                objVehicleInfo.Vehicle_Status = objSale.Vehicle_Status;
                objVehicleInfo.VehicleBody = objSale.VehicleBody;
                objVehicleInfo.VehicleColor = objSale.VehicleColor;
                objVehicleInfo.VehicleMake = objSale.VehicleMake;
                objVehicleInfo.VehicleModel = objSale.VehicleModel;
                objVehicleInfo.VehicleStockNumber = objSale.VehicleStockNumber;
                objVehicleInfo.VehicleYear = objSale.VehicleYear;
                objVehicleInfo.VIN = objSale.VIN;
             //   objVehicleInfo.IsElectricPluggedIn = objSale.IsElectricPluggedIn;


                // trade in 
            //    objVehicleInfo.Trade_In_Allowance = objSale.Trade_groIn_Allowance;
                objVehicleInfo.Trade_In_Allowance = objSale.Gross_Amount_Trade_In;
                objVehicleInfo.Trade_In_Body_Type = objSale.Trade_In_Body_Type;
                objVehicleInfo.Trade_In_Color = objSale.Trade_In_Color;
                objVehicleInfo.Trade_In_Make = objSale.Trade_In_Make;
                objVehicleInfo.Trade_In_Model = objSale.Trade_In_Model;
                objVehicleInfo.Trade_In_OdometerReading = objSale.Trade_In_OdometerReading;
                objVehicleInfo.Trade_In_VIN = objSale.Trade_In_VIN;
                objVehicleInfo.Trade_In_Year = objSale.Trade_In_Year;
                objVehicleInfo.Trade_In_BalanceOwedLineHolder =objSale.Trade_In_BalanceOwedLineHolder;
                // trade in 

                if (objSale.VehicleID == 0)
                {
                    objVehicleInfo.TitleApplicationID = objApplicactionTitle.TitleApplicationID;
                    db.VehicleInfoes.AddObject(objVehicleInfo);
                }
                else
                {
                    db.ObjectStateManager.ChangeObjectState(objVehicleInfo, System.Data.EntityState.Modified);
                }
                db.SaveChanges();
                #endregion VehicleInfo


                #region RetailPurchaseAgreement


                double objTotalSalesPrice = 0;
                double.TryParse(objSale.CashPrice, out objTotalSalesPrice);
                objTotalSalesPrice += 397.20;
                double objStateTax = 0; objStateTax = (objTotalSalesPrice * 2.9) / 100;
                double objRtdTax = 0; objRtdTax = (objTotalSalesPrice * 1.1) / 100;
                double objCityTax = 0; objCityTax = (objTotalSalesPrice * 3.5) / 100;
                double objCountyTax = 0; objCountyTax = (objTotalSalesPrice * 0.5) / 100;

               
                   if(!string.IsNullOrEmpty(objSale.StateTax))
                       objRetailPurAgreement.StateTax = objSale.StateTax;
                   else if (!string.IsNullOrEmpty(objSale.State) && objSale.State.Trim().ToUpper() == "CO")
                       objRetailPurAgreement.StateTax = Math.Round(objStateTax, 2).ToString();
                  

                   if (!string.IsNullOrEmpty(objSale.RTDTax))
                       objRetailPurAgreement.RTDTax = objSale.RTDTax;
                   else if (!string.IsNullOrEmpty(objSale.State) && objSale.State.Trim().ToUpper() == "CO")
                       objRetailPurAgreement.RTDTax = Math.Round(objRtdTax, 2).ToString();


                   if (!string.IsNullOrEmpty(objSale.CountyTax))
                       objRetailPurAgreement.CountyTax = objSale.CountyTax;
                   else if (!string.IsNullOrEmpty(objSale.County) && objSale.County.Trim().ToUpper() == "JEFFERSON")
                       objRetailPurAgreement.CountyTax = Math.Round(objCountyTax, 2).ToString();

                   if (!string.IsNullOrEmpty(objSale.CityTax))
                       objRetailPurAgreement.CityTax = objSale.CityTax;
                   else if (!string.IsNullOrEmpty(objSale.City) && objSale.City.Trim().ToUpper() == "WHEAT RIDGE")
                       objRetailPurAgreement.CityTax = Math.Round(objCityTax, 2).ToString();
                    

                  


                    if (string.IsNullOrEmpty(objSale.TotalTax))
                    {
                        //if (!string.IsNullOrEmpty(objSale.County) && !string.IsNullOrEmpty(objSale.County) && objSale.City.ToUpper() == "WHEAT RIDGE" && objSale.County.ToUpper() == "JEFFERSON")
                        //    pdfFormFields.SetField("TotalTaxes", Math.Round(objStateTax + objRtdTax + objCityTax + objCountyTax, 2).ToString());
                        //else if (!string.IsNullOrEmpty(objSale.County) && objSale.County.ToUpper() == "JEFFERSON")
                        //    pdfFormFields.SetField("TotalTaxes", Math.Round(objStateTax + objRtdTax + objCountyTax, 2).ToString());
                        //else
                        //    pdfFormFields.SetField("TotalTaxes", Math.Round(objStateTax + objRtdTax, 2).ToString());

                        if (!string.IsNullOrEmpty(objSale.County) && !string.IsNullOrEmpty(objSale.City) && objSale.City.Trim().ToUpper() == "WHEAT RIDGE" && objSale.County.Trim().ToUpper() == "JEFFERSON")
                            objRetailPurAgreement.TotalTax = Math.Round(objStateTax + objRtdTax + objCityTax + objCountyTax, 2).ToString();
                        else if (!string.IsNullOrEmpty(objSale.County) && objSale.County.Trim().ToUpper() == "JEFFERSON")
                            objRetailPurAgreement.TotalTax = Math.Round(objStateTax + objRtdTax + objCountyTax, 2).ToString();
                        else if (!string.IsNullOrEmpty(objSale.State) && objSale.State.Trim().ToUpper() == "CO")
                            objRetailPurAgreement.TotalTax = Math.Round(objStateTax + objRtdTax, 2).ToString();

                    }
                    else
                    {
                        objRetailPurAgreement.TotalTax = objSale.TotalTax;
                    }
              
               

                //objRetailPurAgreement.StateTax = objSale.StateTax;
                //objRetailPurAgreement.RTDTax = objSale.RTDTax;
                //objRetailPurAgreement.CountyTax = objSale.CountyTax;
                //objRetailPurAgreement.CityTax = objSale.CityTax;
                //objRetailPurAgreement.TotalTax = objSale.TotalTax;


                objRetailPurAgreement.CashPrice = objSale.CashPrice;
                
                
                objRetailPurAgreement.DownPayment = objSale.DownPayment;
                objRetailPurAgreement.deferredDownPayment = objSale.DeferredDownPayment;
                objRetailPurAgreement.GAP = objSale.GAP;
                
               // objRetailPurAgreement.GrossAmountofTradeIn = objSale.GrossAmountofTradeIn;
                objRetailPurAgreement.GrossAmountofTradeIn = objSale.Gross_Amount_Trade_In;
                
                objRetailPurAgreement.ServiceContract = objSale.ServiceContract;
                
                objRetailPurAgreement.TotalDue = objSale.TotalDue;
                objRetailPurAgreement.UnPaidBalanceDue = objSale.UnPaidBalanceDue;

                ////
               // objRetailPurAgreement.TotalSalesPrice = objSale.TotalSalesPrice;
                objRetailPurAgreement.TotalSalesPrice = objSale.Net_Selling_Price;
                objRetailPurAgreement.SubTotal = objSale.Net_Selling_Price;
                //objRetailPurAgreement.SubTotal = objSale.SubTotal;
                ////
                

                if (objSale.RetailPurchaseID == 0)
                {
                    objRetailPurAgreement.TitleApplicationID = objApplicactionTitle.TitleApplicationID;
                    db.RetailPurchaseAgreements.AddObject(objRetailPurAgreement);
                }
                else
                {
                    db.ObjectStateManager.ChangeObjectState(objRetailPurAgreement, System.Data.EntityState.Modified);
                }
                db.SaveChanges();
                #endregion RetailPurchaseAgreement


                return RedirectToAction("SalesListView");
            }
            objSale.FuelTypeList = db.FuelTypes.ToList();
            return View(objSale);
        }

        public ActionResult SalesListView()
        {
            List<ApplicationForTitle> objTitleApplicationList = db.ApplicationForTitles.Where(a => a.Deleted == null || a.Deleted == false).OrderByDescending(aa => aa.TitleApplicationID).ToList();
            return View(objTitleApplicationList);
        }

        public ActionResult Delete(long saleId)
        {
            ApplicationForTitle objTitleApplication = db.ApplicationForTitles.SingleOrDefault(a => a.TitleApplicationID == saleId);
            objTitleApplication.Deleted = true;

            db.ObjectStateManager.ChangeObjectState(objTitleApplication, System.Data.EntityState.Modified);
            db.SaveChanges();

            return RedirectToAction("SalesListView");
        }

        public JsonResult saleData(int draw, int start, int length)
        {
            var Mainresult = db.ApplicationForTitles.Count();


            var result = db.ApplicationForTitles.OrderByDescending(pp => pp.TitleApplicationID).Skip(start).Take(length).ToList();

                if (Mainresult < start)
                    start = 0;
            
                //DataTableData dataTableData = new DataTableData();
                //dataTableData.draw = draw;
                //dataTableData.recordsTotal = Mainresult;
                //int recordsFiltered = 0;
                //dataTableData.data = result.ToString();




                return Json(new
                {
                    draw = draw,
                    recordsTotal = result.Count(),
                    recordsFiltered = Mainresult,
                    data = result
                },
                    JsonRequestBehavior.AllowGet);
            

        }


        public ActionResult CreateTitleApplication(long id = 0)
        {
            SaleViewModel objSale = GetSaleModel(id);
            if (objSale == null)
            {
                return HttpNotFound();
            }

          //  FillApplicationTitleForm(saleModel);
           // TestFillApplicationTitleForm(saleModel);
            //var fileStream = new FileStream("C:\\1\\TitleApplication_Filled.pdf",
            //                         FileMode.Open,
            //                         FileAccess.Read
            //                       );
            //var fsResult = new FileStreamResult(fileStream, "application/pdf");
            //fileStream.Close();

            var fsResult = FillApplicationTitleForm(objSale);

            //var fileStream = new FileStream("C:\\1\\TitleApplication_Filled.pdf",
            //                         FileMode.Open,
            //                         FileAccess.Read
            //                       );
            
            //var fsResult = new FileStreamResult(fileStream, "application/pdf");
            //return fsResult;



            MemoryStream msNew = new MemoryStream(fsResult.ToArray());
            var fileStream = new FileStreamResult(msNew, "application/pdf");

            return fileStream;
            //}
        }

        public ActionResult SalesTaxReciept(long id = 0)
        {
            SaleViewModel saleModel = GetSaleModel(id);
            if (saleModel == null)
            {
                return HttpNotFound();
            }

          MemoryStream ms=  FillSalesTaxRecipt(saleModel);
            //var fileStream = new FileStream("C:\\1\\SalesTaxReciept_Filled.pdf",
            //                         FileMode.Open,
            //                         FileAccess.Read
            //                       );
            //var fsResult = new FileStreamResult(fileStream, "application/pdf");
            MemoryStream msNew = new MemoryStream(ms.ToArray());
            var fsResult = new FileStreamResult(msNew, "application/pdf");
            return fsResult;

        }


        public ActionResult DR2421Form(long id = 0)
        {
           // string pdfTemplate = ConfigurationManager.AppSettings["pdfFilesPath"] + "DR2421.pdf";
            string pdfTemplate = Server.MapPath(ConfigurationManager.AppSettings["pdfFilesPath"].ToString() + "DR2421.pdf");
            // "~/pdfFiles/DR2421.pdf";//"C:\\DR2421.pdf";
         //   string newFile = "C:\\1\\DR2421_Filled.pdf";
            PdfReader pdfReader = new PdfReader(pdfTemplate);
            //PdfStamper pdfStamper = new PdfStamper(pdfReader, new FileStream(
            //    newFile, FileMode.Create));

            MemoryStream ms = new MemoryStream();
            PdfStamper pdfStamper = new PdfStamper(pdfReader, ms);

            pdfStamper.FormFlattening = false;
            pdfStamper.Close();

            //var fileStream = new FileStream("C:\\1\\DR2421_Filled.pdf",
            //                         FileMode.Open,
            //                         FileAccess.Read
            //                       );
            MemoryStream msNew = new MemoryStream(ms.ToArray());
            var fsResult = new FileStreamResult(msNew, "application/pdf");
            return fsResult;

        }

        public ActionResult Permit(long id = 0)
        {
            SaleViewModel saleModel = GetSaleModel(id);
            if (saleModel == null)
            {
                return HttpNotFound();
            }

        MemoryStream ms=    FillPermit(saleModel);
            //var fileStream = new FileStream("C:\\1\\Permit_Filled.pdf",
            //                         FileMode.Open,
            //                         FileAccess.Read
            //                       );
            //var fsResult = new FileStreamResult(fileStream, "application/pdf");

        MemoryStream msNew = new MemoryStream(ms.ToArray());
        var fsResult = new FileStreamResult(msNew, "application/pdf");
            return fsResult;

        }


        public ActionResult Disclosure(long id = 0)
        {
            SaleViewModel saleModel = GetSaleModel(id);
            if (saleModel == null)
            {
                return HttpNotFound();
            }

       // MemoryStream ms=    FillDisclosure(saleModel);

            MemoryStream ms = TestFillDisclosure(saleModel); 
            //var fileStream = new FileStream("C:\\1\\Disclosure_Filled.pdf",
            //                         FileMode.Open,
            //                         FileAccess.Read
            //                       );
            //var fsResult = new FileStreamResult(fileStream, "application/pdf");

        MemoryStream msNew = new MemoryStream(ms.ToArray());
        var fsResult = new FileStreamResult(msNew, "application/pdf");
           
            return fsResult;

        }

        public ActionResult PurchAgreement(long id = 0)
        {
            SaleViewModel saleModel = GetSaleModel(id);
            if (saleModel == null)
            {
                return HttpNotFound();
            }

           var fsResult = FillPurchaseAgreement(saleModel);
            //var fileStream = new FileStream("C:\\1\\pur_agreement_Filled.pdf",
            //                         FileMode.Open,
            //                         FileAccess.Read
            //                       );
            //var fsResult = new FileStreamResult(fileStream, "application/pdf");

            //fileStream.Close();
            //return fsResult;
            MemoryStream msNew = new MemoryStream(fsResult.ToArray());
            var fileStream = new FileStreamResult(msNew, "application/pdf");

            return fileStream;

            

        }

        public ActionResult BuyerGuideFront(long id = 0)
        {
            SaleViewModel saleModel = GetSaleModel(id);
            if (saleModel == null)
            {
                return HttpNotFound();
            }

         var ms=   FillBuyerGuideFront(saleModel);
            //var fileStream = new FileStream("C:\\1\\BuyersGUIDEFront_Filled.pdf",
            //                         FileMode.Open,
            //                         FileAccess.Read
            //                       );
            //var fsResult = new FileStreamResult(fileStream, "application/pdf");

            MemoryStream msNew = new MemoryStream(ms.ToArray());
            var fsResult = new FileStreamResult(msNew, "application/pdf");
            return fsResult;

        }

        public ActionResult BuyerGuideBack(long id = 0)
        {
            //SaleViewModel saleModel = GetSaleModel(id);
            //if (saleModel == null)
            //{
            //    return HttpNotFound();
            //}

           var ms= FillBuyerGuideBack();//saleModel);
            //var fileStream = new FileStream("C:\\1\\BuyersGUIDEBack_Filled.pdf",
            //                         FileMode.Open,
            //                         FileAccess.Read
            //                       );
            //var fsResult = new FileStreamResult(fileStream, "application/pdf");
           MemoryStream msNew = new MemoryStream(ms.ToArray());
           var fsResult = new FileStreamResult(msNew, "application/pdf");
            return fsResult;

        }


        public ActionResult BillOfSale(long id = 0)
        {
            SaleViewModel saleModel = GetSaleModel(id);
            if (saleModel == null)
            {
                return HttpNotFound();
            }

            // MemoryStream ms=    FillDisclosure(saleModel);

            MemoryStream ms = FillBillOfSale(saleModel);
            //var fileStream = new FileStream("C:\\1\\Disclosure_Filled.pdf",
            //                         FileMode.Open,
            //                         FileAccess.Read
            //                       );
            //var fsResult = new FileStreamResult(fileStream, "application/pdf");

            MemoryStream msNew = new MemoryStream(ms.ToArray());
            var fsResult = new FileStreamResult(msNew, "application/pdf");

            return fsResult;

        }

        public ActionResult CoolingOff(long id = 0)
        {
            SaleViewModel saleModel = GetSaleModel(id);
            if (saleModel == null)
            {
                return HttpNotFound();
            }

            MemoryStream ms = FillCoolingOff(saleModel);
           
            MemoryStream msNew = new MemoryStream(ms.ToArray());
            var fsResult = new FileStreamResult(msNew, "application/pdf");

            return fsResult;

        }

        public ActionResult PowerOfAttorny(long id = 0)
        {
            SaleViewModel saleModel = GetSaleModel(id);
            if (saleModel == null)
            {
                return HttpNotFound();
            }

            MemoryStream ms = FillPowerOfAttorney(saleModel);

            MemoryStream msNew = new MemoryStream(ms.ToArray());
            var fsResult = new FileStreamResult(msNew, "application/pdf");

            return fsResult;

        }

        public ActionResult DealerDamage(long id = 0)
        {
            SaleViewModel saleModel = GetSaleModel(id);
            if (saleModel == null)
            {
                return HttpNotFound();
            }

            MemoryStream ms = FillDealerDamage(saleModel);

            MemoryStream msNew = new MemoryStream(ms.ToArray());
            var fsResult = new FileStreamResult(msNew, "application/pdf");

            return fsResult;

        }
        public SaleViewModel GetSaleModel(long saleId)
        {
            SaleViewModel objSale = new SaleViewModel();
            if (saleId != 0)
            {
                ApplicationForTitle objTitleApplication = db.ApplicationForTitles.SingleOrDefault(apt => apt.TitleApplicationID == saleId);
                BuyerInfo objBuyerInfo = db.BuyerInfoes.SingleOrDefault(bi => bi.BuyerID == objTitleApplication.BuyerInfoID);
                VehicleInfo objVehicleInfo = db.VehicleInfoes.SingleOrDefault(vi => vi.TitleApplicationID == objTitleApplication.TitleApplicationID);
                RetailPurchaseAgreement objRetailPurAgreement = db.RetailPurchaseAgreements.SingleOrDefault(rpa => rpa.TitleApplicationID == objTitleApplication.TitleApplicationID);


                if (objBuyerInfo.BuyerID != 0)
                {
                    objSale.BuyerID = objBuyerInfo.BuyerID;
                    objSale.Address = objBuyerInfo.Address;
                    objSale.BuyerLegalName1 = objBuyerInfo.BuyerLegalName1;
                    objSale.BuyerLegalName2 = objBuyerInfo.BuyerLegalName2;
                    objSale.City = objBuyerInfo.City;
                    objSale.County = objBuyerInfo.County;
                    if (objBuyerInfo.DLExpiryDate != null)
                    objSale.DLExpiryDate = objBuyerInfo.DLExpiryDate;
                    objSale.DLNumber = objBuyerInfo.DLNumber;
                    objSale.DLState = objBuyerInfo.DLState;
                    if (objBuyerInfo.DOB != null)
                    objSale.DOB = objBuyerInfo.DOB;
                    if(objBuyerInfo.DR2421Attached != null)
                    objSale.DR2421Attached = objBuyerInfo.DR2421Attached;
                    else
                        objSale.DR2421Attached = false;

                    objSale.First_Lien_Amount = objBuyerInfo.First_Lien_Amount;
                    objSale.First_LienHolder_Name = objBuyerInfo.First_LienHolder_Name;
                    objSale.HomePhoneNumber = objBuyerInfo.HomePhoneNumber;
                    objSale.LienHolder_Address = objBuyerInfo.LienHolder_Address;
                    objSale.LienHolder_City = objBuyerInfo.LienHolder_City;
                    objSale.LienHolder_State = objBuyerInfo.LienHolder_State;
                    objSale.LienHolder_Zip = objBuyerInfo.LienHolder_Zip;
                    objSale.OtherName = objBuyerInfo.OtherName;
                    objSale.State = objBuyerInfo.State;
                    objSale.Zip = objBuyerInfo.Zip;

                    if (objBuyerInfo.IsColaradoIdDL == 1)
                        objSale.IsColaradoIdDL = 1;
                    else if (objBuyerInfo.IsColaradoIdDL == 2)
                        objSale.IsColaradoIdDL = 2;
                    else if (objBuyerInfo.IsColaradoIdDL == 3)
                    {
                        objSale.IsColaradoIdDL = 3;
                        objSale.OtherIDName = objBuyerInfo.OtherIDName;
                    }
                }
                if (objTitleApplication.TitleApplicationID != 0)
                {
                    if (objTitleApplication.DateOfSale != null)
                        objSale.DateOfSale = objTitleApplication.DateOfSale;
                    if (objTitleApplication.DateOf_TitleApp != null)
                        objSale.DateOf_TitleApp = objTitleApplication.DateOf_TitleApp;
                    objSale.Cash_Price_After_DownPayment = objTitleApplication.Cash_Price_After_DownPayment;
                    objSale.Daily_Fee_For_Use_Credit_Fails = objTitleApplication.Daily_Fee_For_Use_Credit_Fails;
                    objSale.Daily_Fee_For_Milage_Credit_Fails = objTitleApplication.Daily_Fee_For_Milage_Credit_Fails;
                    objSale.Dealer_Reps_Name = objTitleApplication.Dealer_Reps_Name;
                    objSale.Gross_Selling_Price = objTitleApplication.Gross_Selling_Price;
                    objSale.Gross_Amount_Trade_In = objTitleApplication.Gross_Amount_Trade_In;
                    objSale.Net_Selling_Price = objTitleApplication.Net_Selling_Price;
                    objSale.SalesPerson = objTitleApplication.SalesPerson;
                    objSale.TitleApplicationID = objTitleApplication.TitleApplicationID;
                    objSale.additionalcomments = objTitleApplication.AdditionalComments;
                }
                if (objVehicleInfo.VehicleID != 0)
                {
                    objSale.Commercial_Use = objVehicleInfo.Commercial_Use;
                    objSale.CWT = objVehicleInfo.CWT;
                    objSale.FuelType = objVehicleInfo.FuelType;
                    if(objVehicleInfo.FuelType != null && objVehicleInfo.FuelType != 0)
                    objSale.FuelTypeName = db.FuelTypes.SingleOrDefault(ft => ft.FuelTypeID == objVehicleInfo.FuelType).Description;
                    objSale.Odometer = objVehicleInfo.Odometer;
                    if (objVehicleInfo.Odometer_Statement_Date != null)
                    objSale.Odometer_Statement_Date = objVehicleInfo.Odometer_Statement_Date;

                    objSale.Vehicle_Status = objVehicleInfo.Vehicle_Status;
                    objSale.VehicleBody = objVehicleInfo.VehicleBody;
                    objSale.VehicleColor = objVehicleInfo.VehicleColor;
                    objSale.VehicleMake = objVehicleInfo.VehicleMake;
                    objSale.VehicleModel = objVehicleInfo.VehicleModel;
                    objSale.VehicleStockNumber = objVehicleInfo.VehicleStockNumber;
                    objSale.VehicleYear = objVehicleInfo.VehicleYear;
                    objSale.VIN = objVehicleInfo.VIN;
                    objSale.VehicleID = objVehicleInfo.VehicleID;
                    objSale.IsElectricPluggedIn = objVehicleInfo.IsElectricPluggedIn;



                    // trade in 
                    objSale.Trade_In_Allowance =objVehicleInfo.Trade_In_Allowance;
                     objSale.Trade_In_Body_Type =objVehicleInfo.Trade_In_Body_Type ;
                     objSale.Trade_In_Color= objVehicleInfo.Trade_In_Color ;
                    objSale.Trade_In_Make = objVehicleInfo.Trade_In_Make ;
                    objSale.Trade_In_Model = objVehicleInfo.Trade_In_Model;
                    objSale.Trade_In_OdometerReading = objVehicleInfo.Trade_In_OdometerReading;
                    objSale.Trade_In_VIN = objVehicleInfo.Trade_In_VIN;
                    objSale.Trade_In_Year = objVehicleInfo.Trade_In_Year;
                    objSale.Trade_In_BalanceOwedLineHolder = objVehicleInfo.Trade_In_BalanceOwedLineHolder; 
                    // trade in 
                }
                if (objRetailPurAgreement != null && objRetailPurAgreement.RetailPurchaseID != 0)
                {
                    objSale.CashPrice = objRetailPurAgreement.CashPrice;
                    objSale.CityTax = objRetailPurAgreement.CityTax;
                    objSale.CountyTax = objRetailPurAgreement.CountyTax;
                    objSale.DownPayment = objRetailPurAgreement.DownPayment;
                    objSale.DeferredDownPayment = objRetailPurAgreement.deferredDownPayment;
                    objSale.GAP = objRetailPurAgreement.GAP;
                    objSale.GrossAmountofTradeIn = objRetailPurAgreement.GrossAmountofTradeIn;
                    objSale.RTDTax = objRetailPurAgreement.RTDTax;
                    objSale.ServiceContract = objRetailPurAgreement.ServiceContract;
                    objSale.StateTax = objRetailPurAgreement.StateTax;
                    objSale.UnPaidBalanceDue = objRetailPurAgreement.UnPaidBalanceDue;
                    objSale.RetailPurchaseID = objRetailPurAgreement.RetailPurchaseID;

                    objSale.TotalSalesPrice = objRetailPurAgreement.TotalSalesPrice;
                    objSale.TotalDue = objRetailPurAgreement.TotalDue;
                    objSale.SubTotal = objRetailPurAgreement.SubTotal;

                    objSale.TotalTax = objRetailPurAgreement.TotalTax;
                }
            }

            return objSale;
        }

        private void OldFillApplicationTitleForm(SaleViewModel objSale)
        {
            string pdfTemplate = "C:\\TitleApplication.pdf";
            string newFile = "C:\\1\\TitleApplication_Filled.pdf";
            PdfReader pdfReader = new PdfReader(System.IO.File.ReadAllBytes(pdfTemplate));
            PdfStamper pdfStamper = new PdfStamper(pdfReader, new FileStream(
                newFile, FileMode.Create));
            AcroFields pdfFormFields = pdfStamper.AcroFields;
           
            // Dealer Info
            Dealer objDealer = db.Dealers.SingleOrDefault();
            //

            pdfFormFields.SetField("Vehicle _dentification_Number_VIN", objSale.VIN);
            pdfFormFields.SetField("Year", objSale.VehicleYear);
            pdfFormFields.SetField("Make",objSale.VehicleMake );
            pdfFormFields.SetField("Body", objSale.VehicleBody );
            pdfFormFields.SetField("Model", objSale.VehicleModel );
            pdfFormFields.SetField("Color", objSale.VehicleColor);
            pdfFormFields.SetField("CWT", objSale.CWT );
            pdfFormFields.SetField("Dealer", objDealer.LicenseNumber);

            pdfFormFields.SetField("MSRP", "NA");
            pdfFormFields.SetField("Size_W_x_L", "NA");
            pdfFormFields.SetField("FuelType", objSale.FuelTypeName);
            
            if(objSale.DateOfSale != null)
            pdfFormFields.SetField("Date_Purchased", objSale.DateOfSale.Value.ToShortDateString());
          
           //pdfFormFields.SetField("Legal_Names_as_it_Appears_on_Identification_and_Physical_Address_of_Lessee", objSale.BuyerLegalName1);

            if (objSale.DR2421Attached != null)
            {
                if (objSale.DR2421Attached == true)
                    pdfFormFields.SetField("Legal_name_as_it_appears_on_identification_and_address_of_owner(s)_or_entity", objSale.BuyerLegalName1 + "\r\n" + objSale.Address + "\r\n " + objSale.City + ", " + objSale.State + " " + objSale.Zip); // + "\r\n *X DR 2421 Attached");
                else
                    pdfFormFields.SetField("" +
                        "", objSale.BuyerLegalName1 + "\r\n" + objSale.Address + "\r\n " + objSale.City + ", " + objSale.State + " " + objSale.Zip);
            }

            pdfFormFields.SetField("first_lienholder_name_and_address_or_elte_number", objSale.First_LienHolder_Name + "\r\n" + objSale.LienHolder_Address  + objSale.LienHolder_City + ", " + objSale.LienHolder_State + " " + objSale.LienHolder_Zip);

            pdfFormFields.SetField("Lien_Amount", objSale.First_Lien_Amount);
            pdfFormFields.SetField("Date", System.DateTime.Now.ToShortDateString());
            pdfFormFields.SetField("Printed_name_of_OwnerAgent_as_it_appears_on_Identification", objSale.BuyerLegalName1);
           // pdfFormFields.SetField("Secure_and_Verifiable_ID_of_OwnerAgent_Colorado_DL_Colorado_ID_Other", objSale.ID);
            if(objSale.DOB != null)
                pdfFormFields.SetField("DOB", objSale.DOB.Value.ToShortDateString());
           
            pdfFormFields.SetField("Date_2", System.DateTime.Now.ToShortDateString());


            pdfFormFields.SetField("Previous Title Number", objDealer.Permit_Number);
            pdfFormFields.SetField("ID", objSale.DLNumber);
            if (objSale.DLExpiryDate != null)
            pdfFormFields.SetField("Expires", objSale.DLExpiryDate.Value.ToShortDateString());

            if (objSale.FuelType == 4)
            {
                if (objSale.IsElectricPluggedIn != null)
                {
                    if (objSale.IsElectricPluggedIn == true)
                        pdfFormFields.SetField("Check_Box9", "Yes");
                    if (objSale.IsElectricPluggedIn == false)
                        pdfFormFields.SetField("Check_Box10", "Yes");
                }
            }
            if(objSale.IsColaradoIdDL== 1)
                pdfFormFields.SetField("Check_Box18", "Yes");
            else if (objSale.IsColaradoIdDL == 2)
                pdfFormFields.SetField("Check_Box19", "Yes");
            else if (objSale.IsColaradoIdDL == 3)
            {
                pdfFormFields.SetField("Check_Box20", "Yes");
                pdfFormFields.SetField("Secure_and_Verifiable_ID_of_OwnerAgent_Colorado_DL_Colorado_ID_Other", objSale.OtherIDName);
            }

            if (objSale.DR2421Attached != null)
            {
                if (objSale.DR2421Attached == true)
                    pdfFormFields.SetField("Check_Box17", "Yes");
            }

            // Commercial Use Checkbox Name
            if(objSale.Commercial_Use == true)
                pdfFormFields.SetField("Check_Box11", "Yes");
            else
                pdfFormFields.SetField("Check_Box12", "Yes");


            //pdfFormFields.SetField("Dealer_42901", objDealer.Permit_Number);

            pdfStamper.FormFlattening = false;
            // close the pdf

            pdfStamper.Close();
        }


        private MemoryStream FillApplicationTitleForm(SaleViewModel objSale)
        {
           // string pdfTemplate = "C:\\TitleApplication.pdf";
            string pdfTemplate = HostingEnvironment.MapPath(ConfigurationManager.AppSettings["pdfFilesPath"].ToString() + "TitleApplication.pdf");
            string newFile = "C:\\1\\TitleApplication_Filled.pdf";


            PdfReader reader = new PdfReader(pdfTemplate);//Server.MapPath(P_InputStream2));
            //using (MemoryStream ms = new MemoryStream())
            //{
            MemoryStream ms = new MemoryStream();
            
                PdfStamper pdfStamper = new PdfStamper(reader, ms);


                //PdfReader pdfReader = new PdfReader(System.IO.File.ReadAllBytes(pdfTemplate));
                //PdfStamper pdfStamper = new PdfStamper(pdfReader, new FileStream(
                //    newFile, FileMode.Create));
                AcroFields pdfFormFields = pdfStamper.AcroFields;

                // Dealer Info
                Dealer objDealer = db.Dealers.SingleOrDefault();
                //

            if(objSale.VIN != null && objSale.VIN.Length > 0)
            {
                for (int i = 0; i < 17; i++)
                {
                    if (objSale.VIN.Length <= i)
                        break;

                    if(i == 0)
                        pdfFormFields.SetField("VehicleIdentificationNumberVin", objSale.VIN[i].ToString());
                    else
                        pdfFormFields.SetField("VehicleIdentificationNumberVin" + (i), objSale.VIN[i].ToString());
                }
            }

            if (objSale.VIN != null && objSale.VIN.Length > 0)
            {
                for (int i = 0; i < 17; i++)
                {
                    if (objSale.VIN.Length <= i)
                        break;

                    if (i == 0)
                        pdfFormFields.SetField("VehicleIdentificationNumberVin_1", objSale.VIN[i].ToString());
                    else
                        pdfFormFields.SetField($"VehicleIdentificationNumberVin{i}_1", objSale.VIN[i].ToString());
                }
            }

            if (objSale.VIN != null && objSale.VIN.Length > 0)
            {
                for (int i = 0; i < 17; i++)
                {
                    if (objSale.VIN.Length <= i)
                        break;

                    if (i == 0)
                        pdfFormFields.SetField("VehicleIdentificationNumberVin_2", objSale.VIN[i].ToString());
                    else
                        pdfFormFields.SetField($"VehicleIdentificationNumberVin{i}_2", objSale.VIN[i].ToString());
                }
            }


            pdfFormFields.SetField("Vehicle _dentification_Number_VIN", objSale.VIN);
                pdfFormFields.SetField("Year", objSale.VehicleYear);
                pdfFormFields.SetField("Make", objSale.VehicleMake);
                pdfFormFields.SetField("Body", objSale.VehicleBody);
                pdfFormFields.SetField("Model", objSale.VehicleModel);
                pdfFormFields.SetField("Color", objSale.VehicleColor);
                pdfFormFields.SetField("CWT", objSale.CWT);
                pdfFormFields.SetField("Dealer", objDealer.LicenseNumber);

                pdfFormFields.SetField("MSRP", "NA");
                pdfFormFields.SetField("Size_W_x_L", "NA");
                pdfFormFields.SetField("FuelType", objSale.FuelTypeName);
            pdfFormFields.SetField("OdometerReadingAndIndicator",objSale.Odometer);

            //pdfFormFields.SetField("AdditionalComments", "123456");

            if (objSale.DateOfSale != null)
                    pdfFormFields.SetField("Date_Purchased", objSale.DateOfSale.Value.ToShortDateString());

                //pdfFormFields.SetField("Legal_Names_as_it_Appears_on_Identification_and_Physical_Address_of_Lessee", objSale.BuyerLegalName1);

                if (objSale.DR2421Attached != null)
                {
                    if (objSale.DR2421Attached == true)
                    {
                        if (String.IsNullOrEmpty(objSale.BuyerLegalName2))
                        {
                            pdfFormFields.SetField("Legal_name_as_it_appears_on_identification_and_address_of_owner(s)_or_entity", objSale.BuyerLegalName1 + "\r\n" + objSale.Address + "\r\n " + objSale.City + ", " + objSale.State + " " + objSale.Zip); // + "\r\n *X DR 2421 Attached");
                        }
                        else
                        {
                            pdfFormFields.SetField("Legal_name_as_it_appears_on_identification_and_address_of_owner(s)_or_entity", objSale.BuyerLegalName1 + " and " + objSale.BuyerLegalName2 + "\r\n" + objSale.Address + "\r\n " + objSale.City + ", " + objSale.State + " " + objSale.Zip); // + "\r\n *X DR 2421 Attached");
                        }
                    }
                    else
                    {
                        if (String.IsNullOrEmpty(objSale.BuyerLegalName2))
                                pdfFormFields.SetField("Legal_name_as_it_appears_on_identification_and_address_of_owner(s)_or_entity", objSale.BuyerLegalName1 + "\r\n" + objSale.Address + "\r\n " + objSale.City + ", " + objSale.State + " " + objSale.Zip);
                        else
                            pdfFormFields.SetField("Legal_name_as_it_appears_on_identification_and_address_of_owner(s)_or_entity", objSale.BuyerLegalName1 +" and "+ objSale.BuyerLegalName2 + "\r\n" + objSale.Address + "\r\n " + objSale.City + ", " + objSale.State + " " + objSale.Zip);
                    }
                }


            if (objSale.DR2421Attached != null)
            {
                if (objSale.DR2421Attached == true)
                {
                    if (String.IsNullOrEmpty(objSale.BuyerLegalName2))
                    {
                        pdfFormFields.SetField("Legal_name_as_it_appears_on_identification_of_owner(s)_or_entity_lessor", objSale.BuyerLegalName1 ); // + "\r\n *X DR 2421 Attached");
                        pdfFormFields.SetField("Address_of_owner(s)_or_entity_lessor", objSale.Address + ",  " + objSale.City + ", " + objSale.State + " " + objSale.Zip); // + "\r\n *X DR 2421 Attached");
                    }
                    else
                    {
                        pdfFormFields.SetField("Legal_name_as_it_appears_on_identification_of_owner(s)_or_entity_lessor", objSale.BuyerLegalName1 + " and " + objSale.BuyerLegalName2); // + "\r\n *X DR 2421 Attached");
                        pdfFormFields.SetField("Address_of_owner(s)_or_entity_lessor",  objSale.Address + ", " + objSale.City + ", " + objSale.State + " " + objSale.Zip); // + "\r\n *X DR 2421 Attached");
                    }
                }
                else
                {
                    if (String.IsNullOrEmpty(objSale.BuyerLegalName2))
                    {
                        pdfFormFields.SetField("Legal_name_as_it_appears_on_identification_of_owner(s)_or_entity_lessor", objSale.BuyerLegalName1 );
                        pdfFormFields.SetField("Address_of_owner(s)_or_entity_lessor", objSale.Address + ", " + objSale.City + ", " + objSale.State + " " + objSale.Zip);
                    }
                    else
                    {
                        pdfFormFields.SetField("Legal_name_as_it_appears_on_identification_of_owner(s)_or_entity_lessor", objSale.BuyerLegalName1 + " and " + objSale.BuyerLegalName2);
                        pdfFormFields.SetField("Address_of_owner(s)_or_entity_lessor",objSale.Address + ", " + objSale.City + ", " + objSale.State + " " + objSale.Zip);
                    }
                }
            }
            


                pdfFormFields.SetField("first_lienholder_name_and_address_or_elte_number", objSale.First_LienHolder_Name + "\r\n" + objSale.LienHolder_Address + objSale.LienHolder_City + ", " + objSale.LienHolder_State + " " + objSale.LienHolder_Zip);

            pdfFormFields.SetField("first_lienholder_name", objSale.First_LienHolder_Name );
            pdfFormFields.SetField("first_lienholder_address_or_elte_number",  objSale.LienHolder_Address + objSale.LienHolder_City + ", " + objSale.LienHolder_State + " " + objSale.LienHolder_Zip);

            pdfFormFields.SetField("Lien_Amount", objSale.First_Lien_Amount);
                pdfFormFields.SetField("Date2", System.DateTime.Now.ToShortDateString());
                pdfFormFields.SetField("Printed_name_of_OwnerAgent_as_it_appears_on_Identification", objSale.BuyerLegalName1);
                // pdfFormFields.SetField("Secure_and_Verifiable_ID_of_OwnerAgent_Colorado_DL_Colorado_ID_Other", objSale.ID);
                if (objSale.DOB != null)
                    pdfFormFields.SetField("DOB", objSale.DOB.Value.ToShortDateString());

                pdfFormFields.SetField("Date4", System.DateTime.Now.ToShortDateString());


                //pdfFormFields.SetField("Previous Title Number", objDealer.Permit_Number);
                pdfFormFields.SetField("ID", objSale.DLNumber);
                if (objSale.DLExpiryDate != null)
                    pdfFormFields.SetField("Expires", objSale.DLExpiryDate.Value.ToShortDateString());

                if (objSale.FuelType == 4)
                {
                    if (objSale.IsElectricPluggedIn != null)
                    {
                        if (objSale.IsElectricPluggedIn == true)
                            pdfFormFields.SetField("Check_Box9", "Yes");
                        if (objSale.IsElectricPluggedIn == false)
                            pdfFormFields.SetField("Check_Box10", "Yes");
                    }
                }
                if (objSale.IsColaradoIdDL == 1)
                    pdfFormFields.SetField("Check_Box18", "Yes");
                else if (objSale.IsColaradoIdDL == 2)
                    pdfFormFields.SetField("Check_Box19", "Yes");
                else if (objSale.IsColaradoIdDL == 3)
                {
                    pdfFormFields.SetField("Check_Box20", "Yes");
                    pdfFormFields.SetField("Secure_and_Verifiable_ID_of_OwnerAgent_Colorado_DL_Colorado_ID_Other", objSale.OtherIDName);
                }

                if (objSale.DR2421Attached != null)
                {
                    if (objSale.DR2421Attached == true)
                        pdfFormFields.SetField("Check_Box17", "Yes");
                }

                // Commercial Use Checkbox Name
                if (objSale.Commercial_Use == true)
                    pdfFormFields.SetField("Check_Box11", "Yes");
                else
                    pdfFormFields.SetField("Check_Box12", "Yes");


            pdfFormFields.SetField("AdditionalComments", objSale.additionalcomments);
            //pdfFormFields.SetField("Dealer_42901", objDealer.Permit_Number);



            // 17 may 2023
            pdfFormFields.SetField("JT_VehicleIdentificationNumber", objSale.VIN);
            pdfFormFields.SetField("JT_Year", objSale.VehicleYear);
            pdfFormFields.SetField("JT_Make", objSale.VehicleMake);
            pdfFormFields.SetField("JT_Model", objSale.VehicleModel);
            //end 17 may 2023

            pdfStamper.FormFlattening = false;
                // close the pdf

                pdfStamper.Close();
             //   var fsResult = new FileStreamResult(ms, "application/pdf");
                return ms;
            //}
        }

        private MemoryStream FillSalesTaxRecipt(SaleViewModel objSale)
        {
            //string pdfTemplate = "C:\\SalesTaxReciept.pdf";
            string pdfTemplate = HostingEnvironment.MapPath(ConfigurationManager.AppSettings["pdfFilesPath"].ToString() + "SalesTaxReciept.pdf");
         //   string newFile = "C:\\1\\SalesTaxReciept_Filled.pdf";
            PdfReader pdfReader = new PdfReader(pdfTemplate);
            //PdfStamper pdfStamper = new PdfStamper(pdfReader, new FileStream(
            //    newFile, FileMode.Create));
            MemoryStream ms = new MemoryStream();
            PdfStamper pdfStamper = new PdfStamper(pdfReader, ms);
            AcroFields pdfFormFields = pdfStamper.AcroFields;

            // Dealer Info
            Dealer objDealer = db.Dealers.SingleOrDefault();
            //


            pdfFormFields.SetField("Colorado_Tax_Account", objDealer.Colorado_Tax_Account);
            pdfFormFields.SetField("Gross_Selling_Price", objSale.Gross_Selling_Price);
            pdfFormFields.SetField("Gross_Amount_of_Tradein_if_any", objSale.Gross_Amount_Trade_In);
            pdfFormFields.SetField("Net_Selling_Pr", objSale.Net_Selling_Price);
            if (objSale.DateOfSale != null)
            pdfFormFields.SetField("Date_of_Sale",objSale.DateOfSale.Value.ToShortDateString());
            pdfFormFields.SetField("City_Tax_Account", objDealer.City_Tax_Account_Number);
            pdfFormFields.SetField("Model_year", objSale.VehicleYear);
            pdfFormFields.SetField("Make", objSale.VehicleMake);

            pdfFormFields.SetField("Body_Type", objSale.VehicleBody);
            pdfFormFields.SetField("Identification_Number", objSale.VIN);
            pdfFormFields.SetField("TradeIn_Model_year", objSale.Trade_In_Year);
            pdfFormFields.SetField("TradeIn_Make", objSale.Trade_In_Make);
            pdfFormFields.SetField("TradeIn_Body_Type", objSale.Trade_In_Body_Type);
            pdfFormFields.SetField("TradeIn_Identification_Number", objSale.Trade_In_VIN);
            if(string.IsNullOrEmpty(objSale.BuyerLegalName2))
                pdfFormFields.SetField("Name_of_Purchaser", objSale.BuyerLegalName1);
            else
                pdfFormFields.SetField("Name_of_Purchaser", objSale.BuyerLegalName1 +" and "+ objSale.BuyerLegalName2);

            pdfFormFields.SetField("Address", objSale.Address + "\r\n " + objSale.City + ", " + objSale.State + " " + objSale.Zip);
          //  pdfFormFields.SetField("Total_Tax_Collected", );
            pdfFormFields.SetField("By", objSale.SalesPerson);
            pdfFormFields.SetField("Address_2", objDealer.Address +" "+ objDealer.City +", "+ objDealer.State +" "+objDealer.Zip);
            pdfFormFields.SetField("TotalTax", objSale.TotalTax);

            //pdfFormFields.SetField("state_2.9%", "u1");
            //pdfFormFields.SetField("RTD/CD/FD", "u2");
            //pdfFormFields.SetField("city_of", "u3");
            //pdfFormFields.SetField("city_of_1", "u4");
            //pdfFormFields.SetField("city_of_2", "u5");
            //pdfFormFields.SetField("country_of", "u6");
            //pdfFormFields.SetField("country_of_1", "u7");
            //pdfFormFields.SetField("country_of_2", "u8");
            pdfFormFields.SetField("Dealer_number", objDealer.LicenseNumber);
            //pdfFormFields.SetField("Dealer_invoice_number", "u10");
            //pdfFormFields.SetField("fill_31", "fill_31");
            pdfFormFields.SetField("Dealer_name", objDealer.DealerName);
            pdfFormFields.SetField("VehicleDeliveredNo", "Yes");
            



            //  Tax Portion
            //double objTotalSalesPrice = 0;
            //double.TryParse(objSale.TotalSalesPrice, out objTotalSalesPrice);
            //double objStateTax = 0; objStateTax = (objTotalSalesPrice * 2.9) / 100;
            //double objRtdTax = 0; objRtdTax = (objTotalSalesPrice * 1.1) / 100;
            //double objCityTax = 0; objCityTax = (objTotalSalesPrice * 3.5) / 100;
            //double objCountyTax = 0; objCountyTax = (objTotalSalesPrice * 0.5) / 100;


            //if (!string.IsNullOrEmpty(objSale.State) && objSale.State.ToUpper() == "CO")
            //{
            //    pdfFormFields.SetField("StateSalesTax", Math.Round(objStateTax, 2).ToString());
            //    pdfFormFields.SetField("RTDSalesTax", Math.Round(objRtdTax, 2).ToString());

            //    if (!string.IsNullOrEmpty(objSale.County) && objSale.County.ToUpper() == "JEFFERSON")
            //        pdfFormFields.SetField("CountySalesTax", Math.Round(objCountyTax, 2).ToString());

            //    if (objSale.City.ToUpper() == "WHEAT RIDGE")
            //        pdfFormFields.SetField("CitySalesTax", Math.Round(objCityTax, 2).ToString());

            //    if (!string.IsNullOrEmpty(objSale.County) && !string.IsNullOrEmpty(objSale.County) && objSale.City.ToUpper() == "WHEAT RIDGE" && objSale.County.ToUpper() == "JEFFERSON")
            //        pdfFormFields.SetField("TotalSalesTax", Math.Round(objStateTax + objRtdTax + objCityTax + objCountyTax, 2).ToString());
            //    else if (!string.IsNullOrEmpty(objSale.County) && objSale.County.ToUpper() == "JEFFERSON")
            //        pdfFormFields.SetField("TotalSalesTax", Math.Round(objStateTax + objRtdTax + objCountyTax, 2).ToString());
            //    else
            //        pdfFormFields.SetField("TotalSalesTax", Math.Round(objStateTax + objRtdTax, 2).ToString());
            //}

            //commented on 27 jan 2020
            //pdfFormFields.SetField("StateSalesTax", objSale.StateTax);
            //pdfFormFields.SetField("RTDSalesTax", objSale.RTDTax);
            //pdfFormFields.SetField("CitySalesTax", objSale.CityTax);
            //pdfFormFields.SetField("CountySalesTax", objSale.CountyTax);
            //End commented on 27 jan 2020
            //    pdfFormFields.SetField("TotalSalesTax", objSale.TotalTax);









            ////if (objSale.State.ToUpper() == "CO")
            ////{
            ////    pdfFormFields.SetField("StateSalesTax", Math.Round(objStateTax, 2).ToString());
            ////    pdfFormFields.SetField("RTDSalesTax", Math.Round(objRtdTax, 2).ToString());

            ////    if (objSale.County.ToUpper() == "JEFFERSON")
            ////        pdfFormFields.SetField("CountySalesTax", Math.Round(objCountyTax, 2).ToString());

            ////    if (objSale.City.ToUpper() == "WHEAT RIDGE")
            ////    pdfFormFields.SetField("CitySalesTax", Math.Round(objCityTax, 2).ToString());

            ////    if (objSale.City.ToUpper() == "WHEAT RIDGE" && objSale.County.ToUpper() == "JEFFERSON")
            ////        pdfFormFields.SetField("TotalSalesTax", Math.Round(objStateTax + objRtdTax + objCityTax + objCountyTax, 2).ToString());
            ////    else if (objSale.County.ToUpper() == "JEFFERSON")
            ////        pdfFormFields.SetField("TotalSalesTax", Math.Round(objStateTax + objRtdTax + objCountyTax, 2).ToString());
            ////    else
            ////        pdfFormFields.SetField("TotalSalesTax", Math.Round(objStateTax + objRtdTax, 2).ToString());
            ////}


            pdfFormFields.SetField("CityNameTax", objSale.City);
            pdfFormFields.SetField("CountyName", objSale.County);

            pdfFormFields.SetField("StateTaxPercentage", "2.9");
            pdfFormFields.SetField("RTDTaxPercentage", "1.1");
            pdfFormFields.SetField("CityTaxPercentage", "3.5");
            pdfFormFields.SetField("CountyTaxPercentage", "0.5");
            //End Tax Portion


            // changes made on 27 jan 2020
            pdfFormFields.SetField("Net_Sales_Price", objSale.Net_Selling_Price);
            
            pdfFormFields.SetField("Sales Tax Remitted with DR 0100", objSale.StateTax);
            pdfFormFields.SetField("Sales Tax Remitted with DR 0100 1.0.0", objSale.RTDTax);
            pdfFormFields.SetField("Sales Tax Remitted with DR 0100 1.0.1", objSale.CityTax);
            pdfFormFields.SetField("Sales Tax Remitted with DR 0100 1.0.3", objSale.CountyTax);
            //End changes made on 27 jan 2020

            pdfStamper.FormFlattening = false;
            // close the pdf

            pdfStamper.Close();

            return ms;
        }

        private MemoryStream FillPermit(SaleViewModel objSale)
        {
            //string pdfTemplate = "C:\\Permit.pdf";
            string pdfTemplate = HostingEnvironment.MapPath(ConfigurationManager.AppSettings["pdfFilesPath"].ToString() + "Permit.pdf");
     //       string newFile = "C:\\1\\Permit_Filled.pdf";
            PdfReader pdfReader = new PdfReader(pdfTemplate);
            //PdfStamper pdfStamper = new PdfStamper(pdfReader, new FileStream(
            //    newFile, FileMode.Create));
            MemoryStream ms = new MemoryStream();
            PdfStamper pdfStamper = new PdfStamper(pdfReader, ms);

            //PdfReader pdfReader = new PdfReader(System.IO.File.ReadAllBytes(pdfTemplate));
            AcroFields pdfFormFields = pdfStamper.AcroFields;

            // Dealer Info
            Dealer objDealer = db.Dealers.SingleOrDefault();
            //


            pdfFormFields.SetField("permit_number", objDealer.Permit_Number);
            pdfFormFields.SetField("owner", objSale.BuyerLegalName1);
            pdfFormFields.SetField("owner1", objSale.BuyerLegalName2);
            pdfFormFields.SetField("address", objSale.Address);
            pdfFormFields.SetField("city", objSale.City);
            pdfFormFields.SetField("state", objDealer.State);
            pdfFormFields.SetField("year", objSale.VehicleYear);
            pdfFormFields.SetField("zip", objSale.Zip);

            pdfFormFields.SetField("make", objSale.VehicleMake);
            pdfFormFields.SetField("cwt", objSale.CWT);
            pdfFormFields.SetField("vin", objSale.VIN);
            if (objDealer.Permit_Date_Issued != null)
            pdfFormFields.SetField("date_issued", objDealer.Permit_Date_Issued.Value.ToShortDateString());
            if (objDealer.Permit_Date_Expired != null)
            pdfFormFields.SetField("date_exp", objDealer.Permit_Date_Expired.Value.ToShortDateString());
            pdfFormFields.SetField("dealer", objDealer.DealerName);
            pdfFormFields.SetField("dealer_lic#", objDealer.LicenseNumber);
           // pdfFormFields.SetField("Counter_Signed", "CounterSigned");
            //pdfFormFields.SetField("Address", objSale.Address);
           


            pdfStamper.FormFlattening = false;
            // close the pdf

            pdfStamper.Close();
            return ms;
        }

        private MemoryStream FillDisclosure(SaleViewModel objSale)
        {
            iTextSharp.text.Rectangle objrect = new Rectangle(4, 6);
            Document objdoc = new Document(objrect);
            //string pdfTemplate = "C:\\Disclosure.pdf";
            string pdfTemplate = HostingEnvironment.MapPath(ConfigurationManager.AppSettings["pdfFilesPath"].ToString() + "Disclosure.pdf");
          //  string newFile = "C:\\1\\Disclosure_Filled.pdf";
            PdfReader pdfReader = new PdfReader(pdfTemplate);
            //PdfStamper pdfStamper = new PdfStamper(pdfReader, new FileStream(
            //    newFile, FileMode.Create));
            MemoryStream ms = new MemoryStream();
            PdfStamper pdfStamper = new PdfStamper(pdfReader, ms);

            AcroFields pdfFormFields = pdfStamper.AcroFields;

            // Dealer Info
            Dealer objDealer = db.Dealers.SingleOrDefault();
            //


            pdfFormFields.SetField("Vehicle_Identification_Numb", objSale.VIN);
            //pdfFormFields.SetField("Text19", "Text19");
            pdfFormFields.SetField("Date", System.DateTime.Now.ToShortDateString());
            pdfFormFields.SetField("Date_2", System.DateTime.Now.ToShortDateString());

            if(string.IsNullOrEmpty(objSale.BuyerLegalName2))
            pdfFormFields.SetField("Buyers_Printed_Name", objSale.BuyerLegalName1);
            else
                pdfFormFields.SetField("Buyers_Printed_Name", objSale.BuyerLegalName1 +" and "+ objSale.BuyerLegalName2);

            pdfFormFields.SetField("DealerRepresentatives_Printed_Name", objSale.Dealer_Reps_Name);
            
            //pdfFormFields.SetField("dealer_lic#", objDealer.LicenseNumber);
            // pdfFormFields.SetField("Counter_Signed", "CounterSigned");
            //pdfFormFields.SetField("Address", objSale.Address);



            pdfStamper.FormFlattening = false;
            // close the pdf

            pdfStamper.Close();

            return ms;
        }

        private MemoryStream FillPurchaseAgreement(SaleViewModel objSale)
        {
           // string pdfTemplate = "C:\\pur_agreement.pdf";
            string pdfTemplate = HostingEnvironment.MapPath(ConfigurationManager.AppSettings["pdfFilesPath"].ToString() + "pur_agreement.pdf");

            
           // string newFile = "C:\\1\\pur_agreement_Filled.pdf";
            //PdfReader pdfReader = new PdfReader(pdfTemplate);

            MemoryStream ms = new MemoryStream();

            PdfReader pdfReader = new PdfReader(System.IO.File.ReadAllBytes(pdfTemplate));
            //PdfStamper pdfStamper = new PdfStamper(pdfReader, new FileStream(
            //    newFile, FileMode.Create));
            PdfStamper pdfStamper = new PdfStamper(pdfReader, ms);
            AcroFields pdfFormFields = pdfStamper.AcroFields;

            // Dealer Info
            Dealer objDealer = db.Dealers.SingleOrDefault();
            //

            if(string.IsNullOrEmpty(objSale.BuyerLegalName2))
            pdfFormFields.SetField("PurchasersNames", objSale.BuyerLegalName1);
            else
                pdfFormFields.SetField("PurchasersNames", objSale.BuyerLegalName1 +" and "+ objSale.BuyerLegalName2);
            pdfFormFields.SetField("Address", objSale.Address + " " + objSale.City + " " + objSale.State + " " + objSale.Zip);
            pdfFormFields.SetField("Date", System.DateTime.Now.ToShortDateString());
            pdfFormFields.SetField("AddressCounty", objSale.County);
            pdfFormFields.SetField("HomePhone", objSale.HomePhoneNumber);
            if (objSale.DOB != null)
                pdfFormFields.SetField("D08", objSale.DOB.Value.ToShortDateString());

            pdfFormFields.SetField("DLStateID", objSale.DLNumber);



            pdfFormFields.SetField("IssuingState", objSale.DLState);

            //if (objSale.IsColaradoIdDL == 1)
            //    pdfFormFields.SetField("lssuingState", "CL");
            //else if (objSale.IsColaradoIdDL == 2)
            //    pdfFormFields.SetField("lssuingState", "CL");
            //else if (objSale.IsColaradoIdDL == 3)
            //{
            //    pdfFormFields.SetField("lssuingState", objSale.OtherIDName);
            //}

            if (objSale.DLExpiryDate != null)
            pdfFormFields.SetField("ExpDate", objSale.DLExpiryDate.Value.ToShortDateString());


            pdfFormFields.SetField("VYear", objSale.VehicleYear);
            pdfFormFields.SetField("VColor", objSale.VehicleColor);
            pdfFormFields.SetField("VModel", objSale.VehicleModel);
            pdfFormFields.SetField("VMake", objSale.VehicleMake);
            pdfFormFields.SetField("SERIALNO", objSale.VIN);
            pdfFormFields.SetField("COLORISTOCKNO", objSale.VehicleStockNumber);
            pdfFormFields.SetField("SalesPerson", objSale.SalesPerson);
          
            // Odometer Need to Set
            pdfFormFields.SetField("OdometerReading", objSale.Odometer);


            pdfFormFields.SetField("TradeVMake", objSale.Trade_In_Make);
            pdfFormFields.SetField("TradeVYear", objSale.Trade_In_Year);
            pdfFormFields.SetField("TradeVModel", objSale.Trade_In_Model);
            pdfFormFields.SetField("TradeVColor", objSale.Trade_In_Color);
            pdfFormFields.SetField("OdometerReadingTradeIn", objSale.Trade_In_OdometerReading);
            pdfFormFields.SetField("SerialNo", objSale.Trade_In_VIN);
         //   pdfFormFields.SetField("TradelnAllowance", objSale.Trade_In_Allowance);
            pdfFormFields.SetField("BalanceOwedLienholder", objSale.Trade_In_BalanceOwedLineHolder);

            
            //pdfFormFields.SetField("dealer", objDealer.DealerName);
            //pdfFormFields.SetField("dealer_lic#", objDealer.LicenseNumber);

            pdfFormFields.SetField("CASHPRICEOFVEHICLE", objSale.CashPrice);
            pdfFormFields.SetField("TotalSalesPrice", objSale.TotalSalesPrice);
            pdfFormFields.SetField("LESSTRADE", objSale.Gross_Amount_Trade_In);
            //pdfFormFields.SetField("LESSTRADE_2", objSale.CashPrice);

            //4 may 2019
            //pdfFormFields.SetField("SubTotal", objSale.SubTotal);

            double objCashPrice = 0; double.TryParse(objSale.CashPrice, out objCashPrice);
            pdfFormFields.SetField("TotalSalesPrice", Math.Round(objCashPrice + 397.20, 2).ToString());

            double objlesstrade = 0; double.TryParse(objSale.Gross_Amount_Trade_In, out objlesstrade);
            double newSubTotal = (Math.Round(objCashPrice + 397.20, 2) - objlesstrade);
            pdfFormFields.SetField("SubTotal", newSubTotal.ToString());

            double objTotalTax = 0; double.TryParse(objSale.TotalTax, out objTotalTax);
            double objgap = 0; double.TryParse(objSale.GAP, out objgap);
            double objServiceContract = 0; double.TryParse(objSale.ServiceContract, out objServiceContract);
            double newTotalDue = Math.Round(objTotalTax) + newSubTotal + objgap + objServiceContract;

            pdfFormFields.SetField("TOTALDUE", newTotalDue.ToString());


            double objDownPayment = 0; double.TryParse(objSale.DownPayment, out objDownPayment);
            double objDeferredDownPayment = 0; double.TryParse(objSale.DeferredDownPayment, out objDeferredDownPayment);
            pdfFormFields.SetField("UnbalanceDue", Math.Round((newTotalDue - objDownPayment - objDeferredDownPayment),2).ToString());

            // 22 march 2017
            //////////pdfFormFields.SetField("STATETAX", objSale.StateTax);
            //////////pdfFormFields.SetField("RTDTAX", objSale.RTDTax);
            //////////pdfFormFields.SetField("CITYTAX", objSale.CityTax);
            //////////pdfFormFields.SetField("COUNTYTAX", objSale.CountyTax);
            pdfFormFields.SetField("GAP", objSale.GAP);
            pdfFormFields.SetField("SERVICECONTRACT", objSale.ServiceContract);
            //pdfFormFields.SetField("TOTALDUE", objSale.TotalDue);
            pdfFormFields.SetField("DOWNPAYMENT", objSale.DownPayment);
            pdfFormFields.SetField("DEFERREDDOWNPAYMENT", objSale.DeferredDownPayment);
            //pdfFormFields.SetField("UnbalanceDue", objSale.UnPaidBalanceDue);



            pdfFormFields.SetField("STATETAX", objSale.StateTax);
            pdfFormFields.SetField("RTDTAX", objSale.RTDTax);
            pdfFormFields.SetField("CITYTAX", objSale.CityTax);
            pdfFormFields.SetField("COUNTYTAX", objSale.CountyTax);
            pdfFormFields.SetField("TotalTaxes", objSale.TotalTax);

            //  Tax Portion
            //double objTotalSalesPrice = 0;  
            //double.TryParse(objSale.TotalSalesPrice, out objTotalSalesPrice);
            //double objStateTax = 0;     objStateTax = (objTotalSalesPrice * 2.9)/100;
            //double objRtdTax = 0;       objRtdTax = (objTotalSalesPrice * 1.1)/100;
            //double objCityTax = 0;      objCityTax = (objTotalSalesPrice * 3.5)/100;
            //double objCountyTax = 0;    objCountyTax = (objTotalSalesPrice * 0.5)/100;


            //pdfFormFields.SetField("STATETAX", Math.Round(objStateTax, 2).ToString());
            //pdfFormFields.SetField("RTDTAX", Math.Round(objRtdTax, 2).ToString());
            //if (objSale.City.ToUpper() == "WHEAT RIDGE")
            //    pdfFormFields.SetField("CITYTAX", Math.Round(objCityTax, 2).ToString());
            //pdfFormFields.SetField("COUNTYTAX", Math.Round(objCountyTax, 2).ToString());
            //if (objSale.City.ToUpper() == "WHEAT RIDGE")
            //    pdfFormFields.SetField("TotalTaxes", Math.Round(objStateTax + objRtdTax + objCityTax + objCountyTax, 2).ToString());
            //else
            //    pdfFormFields.SetField("TotalTaxes", Math.Round(objStateTax + objRtdTax + objCountyTax, 2).ToString());

            //if (!string.IsNullOrEmpty(objSale.State) && objSale.State.ToUpper() == "CO")
            //{

            //    pdfFormFields.SetField("STATETAX", Math.Round(objStateTax, 2).ToString());
            //    pdfFormFields.SetField("RTDTAX", Math.Round(objRtdTax, 2).ToString());

            //    if (!string.IsNullOrEmpty(objSale.County) && objSale.County.ToUpper() == "JEFFERSON")
            //        pdfFormFields.SetField("COUNTYTAX", Math.Round(objCountyTax, 2).ToString());

            //    if (objSale.City.ToUpper() == "WHEAT RIDGE")
            //        pdfFormFields.SetField("CITYTAX", Math.Round(objCityTax, 2).ToString());


            //    if (string.IsNullOrEmpty(objSale.TotalTax))
            //    {
            //        if (!string.IsNullOrEmpty(objSale.County) && !string.IsNullOrEmpty(objSale.County) && objSale.City.ToUpper() == "WHEAT RIDGE" && objSale.County.ToUpper() == "JEFFERSON")
            //            pdfFormFields.SetField("TotalTaxes", Math.Round(objStateTax + objRtdTax + objCityTax + objCountyTax, 2).ToString());
            //        else if (!string.IsNullOrEmpty(objSale.County) && objSale.County.ToUpper() == "JEFFERSON")
            //            pdfFormFields.SetField("TotalTaxes", Math.Round(objStateTax + objRtdTax + objCountyTax, 2).ToString());
            //        else
            //            pdfFormFields.SetField("TotalTaxes", Math.Round(objStateTax + objRtdTax, 2).ToString());
            //    }
            //    else
            //    {
            //        pdfFormFields.SetField("TotalTaxes", objSale.TotalTax);
            //    }
            //}

            
            //End Tax Portion

            pdfStamper.FormFlattening = false;
            // close the pdf

            pdfStamper.Close();

            return ms;
        }

        private MemoryStream FillBuyerGuideFront(SaleViewModel objSale)
        {
            //string pdfTemplate = "C:\\BuyersGUIDEFront.pdf";
            string pdfTemplate = HostingEnvironment.MapPath(ConfigurationManager.AppSettings["pdfFilesPath"].ToString() + "BuyersGUIDEFront.pdf");
          //  string newFile = "C:\\1\\BuyersGUIDEFront_Filled.pdf";
            PdfReader pdfReader = new PdfReader(pdfTemplate);
            //PdfStamper pdfStamper = new PdfStamper(pdfReader, new FileStream(
            //    newFile, FileMode.Create));
            MemoryStream ms = new MemoryStream();
            PdfStamper pdfStamper = new PdfStamper(pdfReader, ms);

            AcroFields pdfFormFields = pdfStamper.AcroFields;

            // Dealer Info
            Dealer objDealer = db.Dealers.SingleOrDefault();
            //


            pdfFormFields.SetField("VehicleMake", objSale.VehicleMake);
            pdfFormFields.SetField("VehicleModel", objSale.VehicleModel);
            pdfFormFields.SetField("VehicleYear", objSale.VehicleYear);
            pdfFormFields.SetField("VehicleVIN", objSale.VIN);
            pdfFormFields.SetField("VehicleDealerStockNumber", objSale.VehicleStockNumber);
            pdfFormFields.SetField("NoWarrantyCheckBox", "Yes");
            


            pdfStamper.FormFlattening = false;
            // close the pdf

            pdfStamper.Close();

            return ms;
        }

        private MemoryStream FillBuyerGuideBack()//SaleViewModel objSale)
        {
            //string pdfTemplate = "C:\\BuyersGUIDEBack.pdf";
            string pdfTemplate = HostingEnvironment.MapPath(ConfigurationManager.AppSettings["pdfFilesPath"].ToString() + "BuyersGUIDEBack.pdf");
            string newFile = "C:\\1\\BuyersGUIDEBack_Filled.pdf";
            PdfReader pdfReader = new PdfReader(pdfTemplate);
            //PdfStamper pdfStamper = new PdfStamper(pdfReader, new FileStream(
            //    newFile, FileMode.Create));

            MemoryStream ms = new MemoryStream();
            PdfStamper pdfStamper = new PdfStamper(pdfReader, ms);

            AcroFields pdfFormFields = pdfStamper.AcroFields;

            // Dealer Info
            Dealer objDealer = db.Dealers.SingleOrDefault();
            //

            pdfFormFields.SetField("DealerName", objDealer.DealerName);
            pdfFormFields.SetField("Address1", objDealer.Address);
            pdfFormFields.SetField("Address2",  objDealer.City + ", " + objDealer.State + " " + objDealer.Zip);

            pdfFormFields.SetField("SeeForComplaints", objDealer.Name_Owner_Or_Agent_ID);

            pdfStamper.FormFlattening = false;
            // close the pdf

            pdfStamper.Close();

            return ms;
        }


        // Print All

        public ActionResult PrintAll(long id = 0)
        {
            SaleViewModel saleModel = GetSaleModel(id);
            if (saleModel == null)
            {
                return HttpNotFound();
            }

            MemoryStream ms = FillAll(saleModel);

            MemoryStream msNew = new MemoryStream(ms.ToArray());
            var fsResult = new FileStreamResult(msNew, "application/pdf");
            return fsResult;

        }

        private MemoryStream FillAll(SaleViewModel objSale)
        {
            string pdfTemplate = HostingEnvironment.MapPath(ConfigurationManager.AppSettings["pdfFilesPath"].ToString() + "Merged.pdf");
            PdfReader pdfReader = new PdfReader(pdfTemplate);
            MemoryStream ms = new MemoryStream();
            PdfStamper pdfStamper = new PdfStamper(pdfReader, ms);

            AcroFields pdfFormFields = pdfStamper.AcroFields;

            // Dealer Info
            Dealer objDealer = db.Dealers.SingleOrDefault();
            //


            pdfFormFields.SetField("Disclosure_Vehicle_Identification_Numb", objSale.VIN);
            pdfFormFields.SetField("Disclosure_Date", System.DateTime.Now.ToShortDateString());
            pdfFormFields.SetField("Disclosure_Date_2", System.DateTime.Now.ToShortDateString());

            if (string.IsNullOrEmpty(objSale.BuyerLegalName2))
                pdfFormFields.SetField("Disclosure_Buyers_Printed_Name", objSale.BuyerLegalName1);
            else
                pdfFormFields.SetField("Disclosure_Buyers_Printed_Name", objSale.BuyerLegalName1 + " and " + objSale.BuyerLegalName2);

            pdfFormFields.SetField("Disclosure_DealerRepresentatives_Printed_Name", objSale.Dealer_Reps_Name);



            // Buyer back
            pdfFormFields.SetField("BGBack_DealerName", objDealer.DealerName);
            pdfFormFields.SetField("BGBack_Address1", objDealer.Address);
            pdfFormFields.SetField("BGBack_Address2", objDealer.City + ", " + objDealer.State + " " + objDealer.Zip);

            pdfFormFields.SetField("BGBack_SeeForComplaints", objDealer.Name_Owner_Or_Agent_ID);
            // Buyer back ends

            // Buyer front
            pdfFormFields.SetField("BGFront_VehicleMake", objSale.VehicleMake);
            pdfFormFields.SetField("BGFront_VehicleModel", objSale.VehicleModel);
            pdfFormFields.SetField("BGFront_VehicleYear", objSale.VehicleYear);
            pdfFormFields.SetField("BGFront_VehicleVIN", objSale.VIN);
            pdfFormFields.SetField("BGFront_VehicleDealerStockNumber", objSale.VehicleStockNumber);
            pdfFormFields.SetField("BGFront_NoWarrantyCheckBox", "Yes");
            // Buyer front ends



            // purchase agreement

            if (string.IsNullOrEmpty(objSale.BuyerLegalName2))
                pdfFormFields.SetField("RPAgree_PurchasersNames", objSale.BuyerLegalName1);
            else
                pdfFormFields.SetField("RPAgree_PurchasersNames", objSale.BuyerLegalName1 + " and " + objSale.BuyerLegalName2);
            pdfFormFields.SetField("RPAgree_Address", objSale.Address + " " + objSale.City + " " + objSale.State + " " + objSale.Zip);
            pdfFormFields.SetField("RPAgree_Date", System.DateTime.Now.ToShortDateString());
            pdfFormFields.SetField("RPAgree_AddressCounty", objSale.County);
            pdfFormFields.SetField("RPAgree_HomePhone", objSale.HomePhoneNumber);
            if (objSale.DOB != null)
                pdfFormFields.SetField("RPAgree_D08", objSale.DOB.Value.ToShortDateString());

            pdfFormFields.SetField("RPAgree_DLStateID", objSale.DLNumber);



            pdfFormFields.SetField("RPAgree_IssuingState", objSale.DLState);


            if (objSale.DLExpiryDate != null)
                pdfFormFields.SetField("RPAgree_ExpDate", objSale.DLExpiryDate.Value.ToShortDateString());


            pdfFormFields.SetField("RPAgree_VYear", objSale.VehicleYear);
            pdfFormFields.SetField("RPAgree_VColor", objSale.VehicleColor);
            pdfFormFields.SetField("RPAgree_VModel", objSale.VehicleModel);
            pdfFormFields.SetField("RPAgree_VMake", objSale.VehicleMake);
            pdfFormFields.SetField("RPAgree_SERIALNO", objSale.VIN);
            pdfFormFields.SetField("RPAgree_COLORISTOCKNO", objSale.VehicleStockNumber);
            pdfFormFields.SetField("RPAgree_SalesPerson", objSale.SalesPerson);

            // Odometer Need to Set
            pdfFormFields.SetField("RPAgree_OdometerReading", objSale.Odometer);
           


            pdfFormFields.SetField("RPAgree_TradeVMake", objSale.Trade_In_Make);
            pdfFormFields.SetField("RPAgree_TradeVYear", objSale.Trade_In_Year);
            pdfFormFields.SetField("RPAgree_TradeVModel", objSale.Trade_In_Model);
            pdfFormFields.SetField("RPAgree_TradeVColor", objSale.Trade_In_Color);
            pdfFormFields.SetField("RPAgree_OdometerReadingTradeIn", objSale.Trade_In_OdometerReading);
            pdfFormFields.SetField("RPAgree_SerialNo", objSale.Trade_In_VIN);
         //   pdfFormFields.SetField("RPAgree_TradelnAllowance", objSale.Trade_In_Allowance);
            pdfFormFields.SetField("RPAgree_BalanceOwedLienholder", objSale.Trade_In_BalanceOwedLineHolder);



            pdfFormFields.SetField("RPAgree_CASHPRICEOFVEHICLE", objSale.CashPrice);
            pdfFormFields.SetField("RPAgree_TotalSalesPrice", objSale.TotalSalesPrice);
            pdfFormFields.SetField("RPAgree_LESSTRADE", objSale.Gross_Amount_Trade_In);
            //pdfFormFields.SetField("LESSTRADE_2", objSale.CashPrice);
            pdfFormFields.SetField("RPAgree_SubTotal", objSale.SubTotal);
            pdfFormFields.SetField("RPAgree_STATETAX", objSale.StateTax);
            pdfFormFields.SetField("RPAgree_RTDTAX", objSale.RTDTax);
            pdfFormFields.SetField("RPAgree_CITYTAX", objSale.CityTax);
            pdfFormFields.SetField("RPAgree_COUNTYTAX", objSale.CountyTax);
            pdfFormFields.SetField("RPAgree_GAP", objSale.GAP);
            pdfFormFields.SetField("RPAgree_SERVICECONTRACT", objSale.ServiceContract);
            pdfFormFields.SetField("RPAgree_TOTALDUE", objSale.TotalDue);
            pdfFormFields.SetField("RPAgree_DOWNPAYMENT", objSale.DownPayment);
            pdfFormFields.SetField("DEFERREDDOWNPAYMENT", objSale.DeferredDownPayment);
            pdfFormFields.SetField("RPAgree_UnbalanceDue", objSale.UnPaidBalanceDue);


            pdfFormFields.SetField("GAP", objSale.GAP);
            //pdfFormFields.SetField("SERVICECONTRACT", objSale.ServiceContract);
            //pdfFormFields.SetField("TOTALDUE", objSale.TotalDue);
            //pdfFormFields.SetField("DOWNPAYMENT", objSale.DownPayment);
            //pdfFormFields.SetField("UnbalanceDue", objSale.UnPaidBalanceDue);



            pdfFormFields.SetField("RPAgree_STATETAX", objSale.StateTax);
            pdfFormFields.SetField("RPAgree_RTDTAX", objSale.RTDTax);
            pdfFormFields.SetField("RPAgree_CITYTAX", objSale.CityTax);
            pdfFormFields.SetField("RPAgree_COUNTYTAX", objSale.CountyTax);
            pdfFormFields.SetField("RPAgree_TotalTaxes", objSale.TotalTax);
          //  pdfFormFields.SetField("TotalTaxes", objSale.TotalTax);


            //double objCashPrice = 0; double.TryParse(objSale.CashPrice, out objCashPrice);
            //pdfFormFields.SetField("RPAgree_TotalSalesPrice", Math.Round(objCashPrice + 397.20, 2).ToString());


            //4 may 2019
            //pdfFormFields.SetField("SubTotal", objSale.SubTotal);

            double objCashPrice = 0; double.TryParse(objSale.CashPrice, out objCashPrice);
            pdfFormFields.SetField("RPAgree_TotalSalesPrice", Math.Round(objCashPrice + 397.20, 2).ToString());

            double objlesstrade = 0; double.TryParse(objSale.Gross_Amount_Trade_In, out objlesstrade);
            double newSubTotal = (Math.Round(objCashPrice + 397.20, 2) - objlesstrade);
            pdfFormFields.SetField("SubTotal", newSubTotal.ToString());

            double objTotalTax = 0; double.TryParse(objSale.TotalTax, out objTotalTax);
            double objgap = 0; double.TryParse(objSale.GAP, out objgap);
            double objServiceContract = 0; double.TryParse(objSale.ServiceContract, out objServiceContract);
            double newTotalDue = Math.Round(objTotalTax) + newSubTotal + objgap + objServiceContract;
            pdfFormFields.SetField("RPAgree_TOTALDUE", newTotalDue.ToString());


            double objDownPayment = 0; double.TryParse(objSale.DownPayment, out objDownPayment);
            double objDeferredDownPayment = 0; double.TryParse(objSale.DeferredDownPayment, out objDeferredDownPayment);
            pdfFormFields.SetField("RPAgree_UnbalanceDue", (newTotalDue - objDownPayment - objDeferredDownPayment).ToString());

            pdfFormFields.SetField("AdditionalComments", objSale.additionalcomments);
            
            // purchase agreement ends


            // application title

            if (objSale.VIN != null && objSale.VIN.Length > 0)
            {
                for (int i = 0; i < 17; i++)
                {
                    if (objSale.VIN.Length <= i)
                        break;

                    if (i == 0)
                        pdfFormFields.SetField("AppTitle_VehicleIdentificationNumberVin", objSale.VIN[i].ToString());
                    else
                        pdfFormFields.SetField("AppTitle_VehicleIdentificationNumberVin" + (i), objSale.VIN[i].ToString());
                }
            }

            if (objSale.VIN != null && objSale.VIN.Length > 0)
            {
                for (int i = 0; i < 17; i++)
                {
                    if (objSale.VIN.Length <= i)
                        break;

                    if (i == 0)
                        pdfFormFields.SetField("AppTitle_VehicleIdentificationNumberVin_1", objSale.VIN[i].ToString());
                    else
                        pdfFormFields.SetField($"AppTitle_VehicleIdentificationNumberVin{i}_1", objSale.VIN[i].ToString());
                }
            }

            if (objSale.VIN != null && objSale.VIN.Length > 0)
            {
                for (int i = 0; i < 17; i++)
                {
                    if (objSale.VIN.Length <= i)
                        break;

                    if (i == 0)
                        pdfFormFields.SetField("AppTitle_VehicleIdentificationNumberVin_2", objSale.VIN[i].ToString());
                    else
                        pdfFormFields.SetField($"AppTitle_VehicleIdentificationNumberVin{i}_2", objSale.VIN[i].ToString());
                }
            }

            pdfFormFields.SetField("AppTitle_Vehicle_dentification_Number_VIN", objSale.VIN);
            pdfFormFields.SetField("AppTitle_Year", objSale.VehicleYear);
            pdfFormFields.SetField("AppTitle_Make", objSale.VehicleMake);
            pdfFormFields.SetField("AppTitle_Body", objSale.VehicleBody);
            pdfFormFields.SetField("AppTitle_Model", objSale.VehicleModel);
            pdfFormFields.SetField("AppTitle_Color", objSale.VehicleColor);
            pdfFormFields.SetField("AppTitle_CWT", objSale.CWT);
            pdfFormFields.SetField("AppTitle_Dealer", objDealer.LicenseNumber);

            pdfFormFields.SetField("AppTitle_MSRP", "NA");
            pdfFormFields.SetField("AppTitle_Size_W_x_L", "NA");
            pdfFormFields.SetField("AppTitle_FuelType", objSale.FuelTypeName);

            pdfFormFields.SetField("AppTitle_OdometerReadingAndIndicator", objSale.Odometer);

            //pdfFormFields.SetField("AdditionalComments", "123456");

            if (objSale.DateOfSale != null)
                pdfFormFields.SetField("AppTitle_Date_Purchased", objSale.DateOfSale.Value.ToShortDateString());

            //pdfFormFields.SetField("Legal_Names_as_it_Appears_on_Identification_and_Physical_Address_of_Lessee", objSale.BuyerLegalName1);

            if (objSale.DR2421Attached != null)
            {
                if (objSale.DR2421Attached == true)
                {
                    if (String.IsNullOrEmpty(objSale.BuyerLegalName2))
                    {
                        pdfFormFields.SetField("AppTitle_Legal_name_as_it_appears_on_identification_and_address_of_owner(s)_or_entity", objSale.BuyerLegalName1 + "\r\n" + objSale.Address + "\r\n " + objSale.City + ", " + objSale.State + " " + objSale.Zip); // + "\r\n *X DR 2421 Attached");
                    }
                    else
                    {
                        pdfFormFields.SetField("AppTitle_Legal_name_as_it_appears_on_identification_and_address_of_owner(s)_or_entity", objSale.BuyerLegalName1 + " and " + objSale.BuyerLegalName2 + "\r\n" + objSale.Address + "\r\n " + objSale.City + ", " + objSale.State + " " + objSale.Zip); // + "\r\n *X DR 2421 Attached");
                    }
                }
                else
                {
                    if (String.IsNullOrEmpty(objSale.BuyerLegalName2))
                        pdfFormFields.SetField("AppTitle_Legal_name_as_it_appears_on_identification_and_address_of_owner(s)_or_entity", objSale.BuyerLegalName1 + "\r\n" + objSale.Address + "\r\n " + objSale.City + ", " + objSale.State + " " + objSale.Zip);
                    else
                        pdfFormFields.SetField("AppTitle_Legal_name_as_it_appears_on_identification_and_address_of_owner(s)_or_entity", objSale.BuyerLegalName1 + " and " + objSale.BuyerLegalName2 + "\r\n" + objSale.Address + "\r\n " + objSale.City + ", " + objSale.State + " " + objSale.Zip);
                }
            }

            if (objSale.DR2421Attached != null)
            {
                if (objSale.DR2421Attached == true)
                {
                    if (String.IsNullOrEmpty(objSale.BuyerLegalName2))
                    {
                        pdfFormFields.SetField("AppTitle_Legal_name_as_it_appears_on_identification_of_owner(s)_or_entity_lessor", objSale.BuyerLegalName1); // + "\r\n *X DR 2421 Attached");
                        pdfFormFields.SetField("AppTitle_Address_of_owner(s)_or_entity_lessor", objSale.Address + ",  " + objSale.City + ", " + objSale.State + " " + objSale.Zip); // + "\r\n *X DR 2421 Attached");
                    }
                    else
                    {
                        pdfFormFields.SetField("AppTitle_Legal_name_as_it_appears_on_identification_of_owner(s)_or_entity_lessor", objSale.BuyerLegalName1 + " and " + objSale.BuyerLegalName2); // + "\r\n *X DR 2421 Attached");
                        pdfFormFields.SetField("AppTitle_Address_of_owner(s)_or_entity_lessor", objSale.Address + ", " + objSale.City + ", " + objSale.State + " " + objSale.Zip); // + "\r\n *X DR 2421 Attached");
                    }
                }
                else
                {
                    if (String.IsNullOrEmpty(objSale.BuyerLegalName2))
                    {
                        pdfFormFields.SetField("AppTitle_Legal_name_as_it_appears_on_identification_of_owner(s)_or_entity_lessor", objSale.BuyerLegalName1);
                        pdfFormFields.SetField("AppTitle_Address_of_owner(s)_or_entity_lessor", objSale.Address + ", " + objSale.City + ", " + objSale.State + " " + objSale.Zip);
                    }
                    else
                    {
                        pdfFormFields.SetField("AppTitle_Legal_name_as_it_appears_on_identification_of_owner(s)_or_entity_lessor", objSale.BuyerLegalName1 + " and " + objSale.BuyerLegalName2);
                        pdfFormFields.SetField("AppTitle_Address_of_owner(s)_or_entity_lessor", objSale.Address + ", " + objSale.City + ", " + objSale.State + " " + objSale.Zip);
                    }
                }
            }



            pdfFormFields.SetField("AppTitle_first_lienholder_name_and_address_or_elte_number", objSale.First_LienHolder_Name + "\r\n" + objSale.LienHolder_Address + objSale.LienHolder_City + ", " + objSale.LienHolder_State + " " + objSale.LienHolder_Zip);

            pdfFormFields.SetField("AppTitle_first_lienholder_name", objSale.First_LienHolder_Name);
            pdfFormFields.SetField("AppTitle_first_lienholder_address_or_elte_number", objSale.LienHolder_Address + objSale.LienHolder_City + ", " + objSale.LienHolder_State + " " + objSale.LienHolder_Zip);

            //pdfFormFields.SetField("AppTitle_first_lienholder_name_and_address_or_elte_number", objSale.First_LienHolder_Name + "\r\n" + objSale.LienHolder_Address + objSale.LienHolder_City + ", " + objSale.LienHolder_State + " " + objSale.LienHolder_Zip);

            pdfFormFields.SetField("AppTitle_Lien_Amount", objSale.First_Lien_Amount);
            pdfFormFields.SetField("AppTitle_Date", System.DateTime.Now.ToShortDateString());
            pdfFormFields.SetField("AppTitle_Printed_name_of_OwnerAgent_as_it_appears_on_Identification", objSale.BuyerLegalName1);
            // pdfFormFields.SetField("Secure_and_Verifiable_ID_of_OwnerAgent_Colorado_DL_Colorado_ID_Other", objSale.ID);
            if (objSale.DOB != null)
                pdfFormFields.SetField("AppTitle_DOB", objSale.DOB.Value.ToShortDateString());

            pdfFormFields.SetField("AppTitle_Date2", System.DateTime.Now.ToShortDateString());
            pdfFormFields.SetField("AppTitle_Date4", System.DateTime.Now.ToShortDateString());


            // pdfFormFields.SetField("AppTitle_Previous_Title_Number", objDealer.Permit_Number);
            pdfFormFields.SetField("AppTitle_ID", objSale.DLNumber);
            if (objSale.DLExpiryDate != null)
                pdfFormFields.SetField("AppTitle_Expires", objSale.DLExpiryDate.Value.ToShortDateString());

            if (objSale.FuelType == 4)
            {
                if (objSale.IsElectricPluggedIn != null)
                {
                    if (objSale.IsElectricPluggedIn == true)
                        pdfFormFields.SetField("AppTitle_Check_Box9", "Yes");
                    if (objSale.IsElectricPluggedIn == false)
                        pdfFormFields.SetField("AppTitle_Check_Box10", "Yes");
                }
            }
            if (objSale.IsColaradoIdDL == 1)
                pdfFormFields.SetField("AppTitle_Check_Box18", "Yes");
            else if (objSale.IsColaradoIdDL == 2)
                pdfFormFields.SetField("AppTitle_Check_Box19", "Yes");
            else if (objSale.IsColaradoIdDL == 3)
            {
                pdfFormFields.SetField("AppTitle_Check_Box20", "Yes");
                pdfFormFields.SetField("AppTitle_Secure_and_Verifiable_ID_of_OwnerAgent_Colorado_DL_Colorado_ID_Other", objSale.OtherIDName);
            }

            if (objSale.DR2421Attached != null)
            {
                if (objSale.DR2421Attached == true)
                    pdfFormFields.SetField("AppTitle_Check_Box17", "Yes");
            }

            // Commercial Use Checkbox Name
            if (objSale.Commercial_Use == true)
                pdfFormFields.SetField("AppTitle_Check_Box11", "Yes");
            else
                pdfFormFields.SetField("AppTitle_Check_Box12", "Yes");



            // 17 may 2023
            pdfFormFields.SetField("JT_VehicleIdentificationNumber", objSale.VIN);
            pdfFormFields.SetField("JT_Year", objSale.VehicleYear);
            pdfFormFields.SetField("JT_Make", objSale.VehicleMake);
            pdfFormFields.SetField("JT_Model", objSale.VehicleModel);
            //end 17 may 2023

            // application title ends






            // Sales tax reciept
            pdfFormFields.SetField("str_Colorado_Tax_Account", objDealer.Colorado_Tax_Account);
            pdfFormFields.SetField("str_Gross_Selling_Price", objSale.Gross_Selling_Price);
            pdfFormFields.SetField("str_Gross_Amount_of_Tradein_if_any", objSale.Gross_Amount_Trade_In);
            pdfFormFields.SetField("str_Net_Selling_Pr", objSale.Net_Selling_Price);
            if (objSale.DateOfSale != null)
                pdfFormFields.SetField("str_Date_of_Sale", objSale.DateOfSale.Value.ToShortDateString());
            pdfFormFields.SetField("str_City_Tax_Account", objDealer.City_Tax_Account_Number);
            pdfFormFields.SetField("str_Model_year", objSale.VehicleYear);
            pdfFormFields.SetField("str_Make", objSale.VehicleMake);

            pdfFormFields.SetField("str_Body_Type", objSale.VehicleBody);
            pdfFormFields.SetField("str_Identification_Number", objSale.VIN);
            pdfFormFields.SetField("str_TradeIn_Model_year", objSale.Trade_In_Year);
            pdfFormFields.SetField("str_TradeIn_Make", objSale.Trade_In_Make);
            pdfFormFields.SetField("str_TradeIn_Body_Type", objSale.Trade_In_Body_Type);
            pdfFormFields.SetField("str_TradeIn_Identification_Number", objSale.Trade_In_VIN);
            if (string.IsNullOrEmpty(objSale.BuyerLegalName2))
                pdfFormFields.SetField("str_Name_of_Purchaser", objSale.BuyerLegalName1);
            else
                pdfFormFields.SetField("str_Name_of_Purchaser", objSale.BuyerLegalName1 + " and " + objSale.BuyerLegalName2);

            pdfFormFields.SetField("str_Address", objSale.Address + "\r\n " + objSale.City + ", " + objSale.State + " " + objSale.Zip);
            //pdfFormFields.SetField("Total_Tax_Collected", );
            pdfFormFields.SetField("str_By", objSale.SalesPerson);
            pdfFormFields.SetField("str_Address_2", objDealer.Address + " " + objDealer.City + ", " + objDealer.State + " " + objDealer.Zip);
            pdfFormFields.SetField("TotalTax", objSale.TotalTax);
            pdfFormFields.SetField("VehicleDeliveredNo", "Yes");
            //pdfFormFields.SetField("state_2.9%", "u1");
            //pdfFormFields.SetField("RTD/CD/FD", "u2");
            //pdfFormFields.SetField("city_of", "u3");
            //pdfFormFields.SetField("city_of_1", "u4");
            //pdfFormFields.SetField("city_of_2", "u5");
            //pdfFormFields.SetField("country_of", "u6");
            //pdfFormFields.SetField("country_of_1", "u7");
            //pdfFormFields.SetField("country_of_2", "u8");
            pdfFormFields.SetField("str_Dealer_number", objDealer.LicenseNumber);
            //pdfFormFields.SetField("Dealer_invoice_number", "u10");
            //pdfFormFields.SetField("fill_31", "fill_31");
            pdfFormFields.SetField("str_Dealer_name", objDealer.DealerName);
            // Sales tax reciept ends




            //  Tax Portion
            //double objTotalSalesPrice = 0;
            //double.TryParse(objSale.TotalSalesPrice, out objTotalSalesPrice);
            //double objStateTax = 0; objStateTax = (objTotalSalesPrice * 2.9) / 100;
            //double objRtdTax = 0; objRtdTax = (objTotalSalesPrice * 1.1) / 100;
            //double objCityTax = 0; objCityTax = (objTotalSalesPrice * 3.5) / 100;
            //double objCountyTax = 0; objCountyTax = (objTotalSalesPrice * 0.5) / 100;


            //if (!string.IsNullOrEmpty(objSale.State) && objSale.State.ToUpper() == "CO")
            //{
            //    pdfFormFields.SetField("StateSalesTax", Math.Round(objStateTax, 2).ToString());
            //    pdfFormFields.SetField("RTDSalesTax", Math.Round(objRtdTax, 2).ToString());

            //    if (!string.IsNullOrEmpty(objSale.County) && objSale.County.ToUpper() == "JEFFERSON")
            //        pdfFormFields.SetField("CountySalesTax", Math.Round(objCountyTax, 2).ToString());

            //    if (objSale.City.ToUpper() == "WHEAT RIDGE")
            //        pdfFormFields.SetField("CitySalesTax", Math.Round(objCityTax, 2).ToString());

            //    if (!string.IsNullOrEmpty(objSale.County) && !string.IsNullOrEmpty(objSale.County) && objSale.City.ToUpper() == "WHEAT RIDGE" && objSale.County.ToUpper() == "JEFFERSON")
            //        pdfFormFields.SetField("TotalSalesTax", Math.Round(objStateTax + objRtdTax + objCityTax + objCountyTax, 2).ToString());
            //    else if (!string.IsNullOrEmpty(objSale.County) && objSale.County.ToUpper() == "JEFFERSON")
            //        pdfFormFields.SetField("TotalSalesTax", Math.Round(objStateTax + objRtdTax + objCountyTax, 2).ToString());
            //    else
            //        pdfFormFields.SetField("TotalSalesTax", Math.Round(objStateTax + objRtdTax, 2).ToString());
            //}

            // changes made on 27 jan 2020
            //pdfFormFields.SetField("StateSalesTax", objSale.StateTax);
            //pdfFormFields.SetField("RTDSalesTax", objSale.RTDTax);
            //pdfFormFields.SetField("CitySalesTax", objSale.CityTax);
            //pdfFormFields.SetField("CountySalesTax", objSale.CountyTax);
            //end changes made on 27 jan 2020
            // pdfFormFields.SetField("TotalSalesTax", objSale.TotalTax);


            pdfFormFields.SetField("CityNameTax", objSale.City);
            pdfFormFields.SetField("CountyName", objSale.County);

            pdfFormFields.SetField("StateTaxPercentage", "2.9");
            pdfFormFields.SetField("RTDTaxPercentage", "1.1");
            pdfFormFields.SetField("CityTaxPercentage", "3.5");
            pdfFormFields.SetField("CountyTaxPercentage", "0.5");


            // changes made on 27 jan 2020
            pdfFormFields.SetField("str_Net_Sales_Price", objSale.Net_Selling_Price);

            pdfFormFields.SetField("Sales Tax Remitted with DR 0100", objSale.StateTax);
            pdfFormFields.SetField("Sales Tax Remitted with DR 0100 1.0.0", objSale.RTDTax);
            pdfFormFields.SetField("Sales Tax Remitted with DR 0100 1.0.1", objSale.CityTax);
            pdfFormFields.SetField("Sales Tax Remitted with DR 0100 1.0.3", objSale.CountyTax);
            //End changes made on 27 jan 2020

            //End Tax Portion



            // coolingOff

            //pdfFormFields.SetField("CoolingOff_VIN", objSale.VIN);
            //pdfFormFields.SetField("CoolingOff_VinForm1", objSale.VIN);
            //if (objSale.BuyerLegalName2 != null && !string.IsNullOrEmpty(objSale.BuyerLegalName2))
            //    pdfFormFields.SetField("CoolingOff_BUYERSNAME", objSale.BuyerLegalName1 + " , " + objSale.BuyerLegalName2);
            //else
            //    pdfFormFields.SetField("CoolingOff_BUYERSNAME", objSale.BuyerLegalName1);


            pdfFormFields.SetField("VinForm1", objSale.VIN);
            pdfFormFields.SetField("VIN", objSale.VIN);

            if (objSale.BuyerLegalName2 != null && !string.IsNullOrEmpty(objSale.BuyerLegalName2))
                pdfFormFields.SetField("BUYERSNAME", objSale.BuyerLegalName1 + " , " + objSale.BuyerLegalName2);
            else
                pdfFormFields.SetField("BUYERSNAME", objSale.BuyerLegalName1);




            // Power Of Attorney
            pdfFormFields.SetField("BuyerNamePOA", objSale.BuyerLegalName1);
            pdfFormFields.SetField("POA_Buyer1", objSale.BuyerLegalName1);
            pdfFormFields.SetField("POA_DATE1", DateTime.Now.ToShortDateString());

            if (objSale.BuyerLegalName2 != null && !string.IsNullOrEmpty(objSale.BuyerLegalName2))
            {
                pdfFormFields.SetField("POA_BUYER2", objSale.BuyerLegalName2);
                pdfFormFields.SetField("POA_DATE2", DateTime.Now.ToShortDateString());
            }



            // Dealer damage 
            pdfFormFields.SetField("DamageVIN", objSale.VIN);
            pdfFormFields.SetField("DamageYear", objSale.VehicleYear);
            pdfFormFields.SetField("Make", objSale.VehicleMake);
            pdfFormFields.SetField("DamageModel", objSale.VehicleModel);

            // Dealer Info
            //Dealer objDealer = db.Dealers.SingleOrDefault();
            //

            //pdfFormFields.SetField("DealerNumber", objDealer.LicenseNumber);
            pdfFormFields.SetField("DamagePrintedName", objDealer.DealerName);
            pdfFormFields.SetField("DamagePrintedAddress", objDealer.Address);
            pdfFormFields.SetField("DamagePrintedCity", objDealer.City);
            pdfFormFields.SetField("DamagePrintedState", objDealer.State);
            pdfFormFields.SetField("DamagePrintedZip", objDealer.Zip);
            pdfFormFields.SetField("DamagePrintedDate", (objSale.DateOfSale != null ? objSale.DateOfSale.Value.ToShortDateString() : ""));


            if (objSale.BuyerLegalName2 != null && !string.IsNullOrEmpty(objSale.BuyerLegalName2))
                pdfFormFields.SetField("PrintedBuyerName", objSale.BuyerLegalName1 + " , " + objSale.BuyerLegalName2);
            else
                pdfFormFields.SetField("PrintedBuyerName", objSale.BuyerLegalName1);
            pdfFormFields.SetField("PrintedBuyerAddress", objSale.Address);
            pdfFormFields.SetField("PrintedBuyerCity", objSale.City);
            pdfFormFields.SetField("PrintedBuyerState", objSale.State);
            pdfFormFields.SetField("PrintedBuyerZip", objSale.Zip);
            pdfFormFields.SetField("PrintedBuyerDate", (objSale.DateOfSale != null ? objSale.DateOfSale.Value.ToShortDateString() : ""));








            // close the pdf

            pdfStamper.Close();
            return ms;
        }




        private MemoryStream FillBillOfSale(SaleViewModel objSale)
        {

            string pdfTemplate = HostingEnvironment.MapPath(ConfigurationManager.AppSettings["pdfFilesPath"].ToString() + "BillOfSale.pdf");
            PdfReader pdfReader = new PdfReader(pdfTemplate);

            MemoryStream ms = new MemoryStream();
            PdfStamper pdfStamper = new PdfStamper(pdfReader, ms);
            AcroFields pdfFormFields = pdfStamper.AcroFields;

            // Dealer Info
            Dealer objDealer = db.Dealers.SingleOrDefault();
            //

            pdfFormFields.SetField("DealerNumber", objDealer.LicenseNumber);
            pdfFormFields.SetField("DealerName", objDealer.DealerName);
            pdfFormFields.SetField("StreetAddress", objDealer.Address);
            pdfFormFields.SetField("City", objDealer.City);
            pdfFormFields.SetField("State", objDealer.State);
            pdfFormFields.SetField("ZipCode", objDealer.Zip);


            pdfFormFields.SetField("DateOfSale", objSale.DateOfSale.Value.ToShortDateString());
            pdfFormFields.SetField("OdometerReading", objSale.Odometer);

            pdfFormFields.SetField("VIN", objSale.VIN);

            pdfFormFields.SetField("Year", objSale.VehicleYear);
            pdfFormFields.SetField("Make", objSale.VehicleMake);
            pdfFormFields.SetField("Body", objSale.VehicleBody);
            pdfFormFields.SetField("Model", objSale.VehicleModel);

            pdfFormFields.SetField("DateOfStatement", objSale.DateOfSale.Value.ToShortDateString());


            pdfFormFields.SetField("Buyer1", objSale.BuyerLegalName1);
            pdfFormFields.SetField("Buyer2", objSale.BuyerLegalName2);

            pdfFormFields.SetField("BuyerAddress", objSale.Address);
            pdfFormFields.SetField("BuyerCity", objSale.City);
            pdfFormFields.SetField("BuyerState", objSale.State);
            pdfFormFields.SetField("BuyerZipCode", objSale.Zip);



            pdfFormFields.SetField("DealerRepresentatives_Printed_Name", objSale.Dealer_Reps_Name);

            //pdfFormFields.SetField("dealer_lic#", objDealer.LicenseNumber);
            // pdfFormFields.SetField("Counter_Signed", "CounterSigned");
            //pdfFormFields.SetField("Address", objSale.Address);



            pdfStamper.FormFlattening = false;
            // close the pdf

            pdfStamper.Close();

            return ms;
        }

        private MemoryStream FillCoolingOff(SaleViewModel objSale)
        {

            string pdfTemplate = HostingEnvironment.MapPath(ConfigurationManager.AppSettings["pdfFilesPath"].ToString() + "CoolingOff.pdf");
            PdfReader pdfReader = new PdfReader(pdfTemplate);

            MemoryStream ms = new MemoryStream();
            PdfStamper pdfStamper = new PdfStamper(pdfReader, ms);
            AcroFields pdfFormFields = pdfStamper.AcroFields;

            // Dealer Info
            Dealer objDealer = db.Dealers.SingleOrDefault();
            //


            pdfFormFields.SetField("VinForm1", objSale.VIN);
            pdfFormFields.SetField("VIN", objSale.VIN);

            if (objSale.BuyerLegalName2 != null && !string.IsNullOrEmpty(objSale.BuyerLegalName2))
                pdfFormFields.SetField("BUYERSNAME", objSale.BuyerLegalName1 + " , " + objSale.BuyerLegalName2);
            else
                pdfFormFields.SetField("BUYERSNAME", objSale.BuyerLegalName1);
            
            pdfStamper.FormFlattening = false;
            // close the pdf

            pdfStamper.Close();

            return ms;
        }


        private MemoryStream FillDealerDamage(SaleViewModel objSale)
        {

            string pdfTemplate = HostingEnvironment.MapPath(ConfigurationManager.AppSettings["pdfFilesPath"].ToString() + "DR2710.pdf");
            PdfReader pdfReader = new PdfReader(pdfTemplate);

            MemoryStream ms = new MemoryStream();
            PdfStamper pdfStamper = new PdfStamper(pdfReader, ms);
            AcroFields pdfFormFields = pdfStamper.AcroFields;

            pdfFormFields.SetField("DamageVIN", objSale.VIN);
            pdfFormFields.SetField("DamageYear", objSale.VehicleYear);
            pdfFormFields.SetField("Make", objSale.VehicleMake);
            pdfFormFields.SetField("DamageModel", objSale.VehicleModel);

            // Dealer Info
            Dealer objDealer = db.Dealers.SingleOrDefault();
            //

            //pdfFormFields.SetField("DealerNumber", objDealer.LicenseNumber);
            pdfFormFields.SetField("DamagePrintedName", objDealer.DealerName);
            pdfFormFields.SetField("DamagePrintedAddress", objDealer.Address);
            pdfFormFields.SetField("DamagePrintedCity", objDealer.City);
            pdfFormFields.SetField("DamagePrintedState", objDealer.State);
            pdfFormFields.SetField("DamagePrintedZip", objDealer.Zip);
            pdfFormFields.SetField("DamagePrintedDate", (objSale.DateOfSale != null ? objSale.DateOfSale.Value.ToShortDateString() : ""));


            if (objSale.BuyerLegalName2 != null && !string.IsNullOrEmpty(objSale.BuyerLegalName2))
                pdfFormFields.SetField("PrintedBuyerName", objSale.BuyerLegalName1 + " , " + objSale.BuyerLegalName2);
            else
                pdfFormFields.SetField("PrintedBuyerName", objSale.BuyerLegalName1);
            pdfFormFields.SetField("PrintedBuyerAddress", objSale.Address);
            pdfFormFields.SetField("PrintedBuyerCity", objSale.City);
            pdfFormFields.SetField("PrintedBuyerState", objSale.State);
            pdfFormFields.SetField("PrintedBuyerZip", objSale.Zip);
            pdfFormFields.SetField("PrintedBuyerDate", (objSale.DateOfSale != null ? objSale.DateOfSale.Value.ToShortDateString() : ""));
            
            pdfStamper.FormFlattening = false;
            // close the pdf

            pdfStamper.Close();

            return ms;
        }

        private MemoryStream FillPowerOfAttorney(SaleViewModel objSale)
        {

            string pdfTemplate = HostingEnvironment.MapPath(ConfigurationManager.AppSettings["pdfFilesPath"].ToString() + "PowerOfAttorney.pdf");
            PdfReader pdfReader = new PdfReader(pdfTemplate);

            MemoryStream ms = new MemoryStream();
            PdfStamper pdfStamper = new PdfStamper(pdfReader, ms);
            AcroFields pdfFormFields = pdfStamper.AcroFields;


            pdfFormFields.SetField("BuyerNamePOA", objSale.BuyerLegalName1);
            pdfFormFields.SetField("POA_Buyer1", objSale.BuyerLegalName1);
            pdfFormFields.SetField("POA_DATE1", DateTime.Now.ToShortDateString());

            if (objSale.BuyerLegalName2 != null && !string.IsNullOrEmpty(objSale.BuyerLegalName2))
            {
                pdfFormFields.SetField("POA_BUYER2", objSale.BuyerLegalName2);
                pdfFormFields.SetField("POA_DATE2", DateTime.Now.ToShortDateString());
            }



            pdfStamper.FormFlattening = false;
            // close the pdf

            pdfStamper.Close();

            return ms;
        }

        private MemoryStream TestFillDisclosure(SaleViewModel objSale)
        {
            //iTextSharp.text.Rectangle objrect = new Rectangle(4, 6);
            
            //string pdfTemplate = "C:\\Disclosure.pdf";
            string pdfTemplate = HostingEnvironment.MapPath(ConfigurationManager.AppSettings["pdfFilesPath"].ToString() + "Disclosure.pdf");
            //  string newFile = "C:\\1\\Disclosure_Filled.pdf";
            PdfReader pdfReader = new PdfReader(pdfTemplate);
            //PdfStamper pdfStamper = new PdfStamper(pdfReader, new FileStream(
            //    newFile, FileMode.Create));
            MemoryStream ms = new MemoryStream();
            PdfStamper pdfStamper = new PdfStamper(pdfReader, ms);

            AcroFields pdfFormFields = pdfStamper.AcroFields;

            // Dealer Info
            Dealer objDealer = db.Dealers.SingleOrDefault();
            //


            pdfFormFields.SetField("Vehicle_Identification_Numb", objSale.VIN);
            //pdfFormFields.SetField("Text19", "Text19");
            pdfFormFields.SetField("Date", System.DateTime.Now.ToShortDateString());
            pdfFormFields.SetField("Date_2", System.DateTime.Now.ToShortDateString());

            if (string.IsNullOrEmpty(objSale.BuyerLegalName2))
                pdfFormFields.SetField("Buyers_Printed_Name", objSale.BuyerLegalName1);
            else
                pdfFormFields.SetField("Buyers_Printed_Name", objSale.BuyerLegalName1 + " and " + objSale.BuyerLegalName2);

            pdfFormFields.SetField("DealerRepresentatives_Printed_Name", objSale.Dealer_Reps_Name);

            //pdfFormFields.SetField("dealer_lic#", objDealer.LicenseNumber);
            // pdfFormFields.SetField("Counter_Signed", "CounterSigned");
            //pdfFormFields.SetField("Address", objSale.Address);



            pdfStamper.FormFlattening = false;
            // close the pdf


            PdfContentByte cb = pdfStamper.GetOverContent(1);
            iTextSharp.text.Rectangle rectangle = new Rectangle(2, 2);
            cb.Rectangle(rectangle);

            pdfStamper.Close();



            
           

            return ms;
        }



    //[HttpPost]
    public JsonResult SearchLienHolder(string prefix)
        {
            //NorthwindEntities entities = new NorthwindEntities();
            var customers = (from customer in db.BuyerInfoes
                             where customer.First_LienHolder_Name.StartsWith(prefix)
                             select new
                             {
                                 label = customer.First_LienHolder_Name,
                                 val = customer.BuyerID,
                                 address = customer.LienHolder_Address,
                                 city = customer.LienHolder_City,
                                 state = customer.LienHolder_State,
                                 zip = customer.LienHolder_Zip
                             }).Distinct().ToList();

            customers = customers.GroupBy(x => new { x.label, x.address, x.city, x.state }).Select(c => c.First()).Take(10).ToList();

            return Json(customers,JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetLienHolderInfo(long lienholderId)
        {
            var customerObj = (from customer in db.BuyerInfoes
                             where customer.BuyerID.Equals(lienholderId)
                             select new
                             {
                                 name = customer.First_LienHolder_Name,
                                 Id = customer.BuyerID,
                                 address = customer.LienHolder_Address,
                                 city = customer.LienHolder_City,
                                 state = customer.LienHolder_State,
                                 zip = customer.LienHolder_Zip
                             });

            return Json(customerObj, JsonRequestBehavior.AllowGet);
        }
    }

    public class DataTableData
    {
        public int draw { get; set; }
        public int recordsTotal { get; set; }
        public int recordsFiltered { get; set; }
        public string data { get; set; }
    }
}
