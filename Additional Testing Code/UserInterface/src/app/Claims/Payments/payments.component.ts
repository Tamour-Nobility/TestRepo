import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { claimPayment, EnteredFrom } from '../Classes/claimPayments'
import { IMyDpOptions } from 'mydatepicker';
import { ClaimCharges } from '../Classes/ClaimCharges'
import { PaymentServiceService } from '../../services/payment-service.service';
import { claimInusrance } from '../Classes/ClaimsModel'
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { DatePipe } from '@angular/common';
import { ModalDirective, ModalOptions } from 'ngx-bootstrap/modal';
import { AlertService } from '../../services/data/Alert.service';
import { GvarsService } from '../../services/G_vars/gvars.service';


@Component({
    selector: 'app-payments',
    templateUrl: './payments.component.html',
    styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
    isPayExpand: boolean = false;
    @Input() Amount;
    @Input() paymentDetails
    @Input() chargeDetails;
    @Input() insDetails;
    @ViewChild(ModalDirective) modalWindow: ModalDirective;
    enteredFromListInsurane: EnteredFrom[];
    enteredFromListPatient: EnteredFrom[];
    enteredFromInboxpay: EnteredFrom[];
    tempVariable_P: string = "";
    claimCharges: ClaimCharges[];
    claimInusrance: claimInusrance[];
    chargesUnits: string;
    notGreaterThan:number;
    chargesAmt: any = [];
    isFromposting:boolean;
    claimPaymentModel: claimPayment[];
    Dateoptions = { year: "numeric", month: "2-digit", day: "2-digit" };
    isViewMode: boolean;
    enteredFromRefund:EnteredFrom[];
    firstAlert: any;
    constructor(public PC:PaymentServiceService,public datepipe: DatePipe, private alertService: AlertService, public Gv: GvarsService,) {
        this.claimPaymentModel = [];
        this.claimCharges = [];
        this.claimInusrance = [];
        this.enteredFromListInsurane = [
            { EfId: 1, EfName: "IOU CASH REGISTER" },
            { EfId: 2, EfName: "SUPER BILL" },
            //{ EfId: 3, EfName: "MAZING CHARTS" },
            { EfId: 4, EfName: "EOB" },
            { EfId: 5, EfName: "ERA – PAYMENT" },
            { EfId: 6, EfName: "ERA - REJECTED" },
            { EfId: 7, EfName: "ERA - UNMATCHED" },
            //{ EfId: 8, EfName: "EBCASE" },
            { EfId: 9, EfName: "ALL RESULT" },
            //{ EfId: 10, EfName: "WEBSITE" },
            //{ EfId: 11, EfName: "ARU" },
            //{ EfId: 12, EfName: "RECTIFICATION" },
            { EfId: 13, EfName: "NCO" },
            { EfId: 14, EfName: "PTL FEEDBACK" },
            { EfId: 15, EfName: "SPECIAL INSTRUCTION" },
            { EfId: 16, EfName: "REAL TIME CLAIM STATUS" },
            { EfId: 17, EfName: "PATIENT CALL" },
            { EfId: 18, EfName: "PATIENT PAYMENT" },
            //{ EfId: 19, EfName: "MEDICAID SECONDARY" },
            //{ EfId: 20, EfName: "IOU POLICY" },
            //{ EfId: 21, EfName: "FAX" },
            //{ EfId: 22, EfName: "CCI Edits" },
            //{ EfId: 23, EfName: "PROVIDER INSTRUCTIONS ON SSC" },
            //{ EfId: 24, EfName: "PATIENT CREDIT" },
            //{ EfId: 25, EfName: "ESTIMATED CAPITATION" },
            //{ EfId: 26, EfName: "E-MAIL" },
            //{ EfId: 27, EfName: "WEBPT" },
            //{ EfId: 28, EfName: "EMR NOTES" },
            //{ EfId: 29, EfName: "SIGN IN SHEET" },
            //{ EfId: 30, EfName: "PHREESIA" },
            //{ EfId: 31, EfName: "INSURANCE LETTER" },
            //{ EfId: 32, EfName: "STERN ASSOCIATES" },
            //{ EfId: 33, EfName: "EOB FROM WEBSITE" },
            //{ EfId: 34, EfName: "State Law" },
            //{ EfId: 35, EfName: "KPI REJECTION" },
            //{ EfId: 36, EfName: "CRITERION" },
            //{ EfId: 37, EfName: "PROVIDER REMARKS" },
            //{ EfId: 38, EfName: "REAL TIME ELIGIBILITY" },
            //{ EfId: 39, EfName: "CAPITATION" },
            //{ EfId: 40, EfName: "PATIENT PAID IN OFFICE" },
            //{ EfId: 41, EfName: "THEOS" },
            //{ EfId: 42, EfName: "DECEASED PATIENT" },
            //{ EfId: 43, EfName: "PATIENT PAID AT THE TIME OF VISIT" },
            //{ EfId: 44, EfName: "PATIENT PAID AFTER GETTING STATEMENT" },
            //{ EfId: 45, EfName: "PROVIDER ADJUSTMENT" }
            //{ EfId: 46, EfName: "PRIVATE PAY" }
        ];
        this.enteredFromListPatient = [
            { EfId: 40, EfName: "PATIENT PAID IN OFFICE" },
            { EfId: 43, EfName: "PATIENT PAID AT THE TIME OF VISIT" },
            { EfId: 44, EfName: "PATIENT PAID AFTER GETTING STATEMENT" }
        ];

        this.enteredFromInboxpay = [
            { EfId: 40, EfName: "Inbox interface Payment" },

        ];
        this.enteredFromRefund=[
            {
                EfId:50, EfName:"Patient Refund"
            }
        ];
    }

    ngOnInit() {
        if(this.paymentDetails != null || this.paymentDetails !== undefined ){
            this.claimPaymentModel=this.paymentDetails;  
        }
        if(this.chargeDetails != null || this.chargeDetails != undefined ){
            this.claimCharges=this.chargeDetails;
         
        }
        if(this.insDetails != null || this.insDetails != undefined ){
            this.claimInusrance=this.insDetails;
        
        }
        if(this.insDetails != null || this.insDetails != undefined ){
            if(this.Amount =='edit'){
                 this.isFromposting=true
            }else{
                this.isFromposting=false
            }
        } 
        
       
      
        this.PC.message.subscribe(
            mess =>{
                if(mess == 'sentdata'){
                    this.PC.sendData(this.claimPaymentModel)
                }
            }
        )
    }
    callShow() {
        this.alertService.getAlert().subscribe((data) => {
          if (data.Status === 'Success' && data.Response && data.Response.length > 0) {
            this.firstAlert = data.Response[0];
            console.log('Received alert data:', this.firstAlert);
            console.log('this.firstAlert.AddNewPayment', this.firstAlert.AddNewPayment);
            if (this.isAlertNotExpired()) {
              if (
                this.firstAlert.ApplicableFor == 'S' &&
                this.Gv.currentUser.userId == this.firstAlert.Created_By &&
                this.firstAlert.AddNewPayment === true
              ) {
                this.show();
              } else if (this.firstAlert.ApplicableFor == 'A' && this.firstAlert.AddNewPayment === true) {
                this.show();
              } else {
                console.log('Conditions not met.');
              }
            } else {
              console.log('Alert is expired.');
            }
          } else {
            console.log('No alert data available.');
            debugger;
          }
        });
      }
      isAlertNotExpired(): boolean {
        console.log('this.firstAlert.EffectiveFrom', this.firstAlert.EffectiveFrom);
        console.log('this.firstAlert.EffectiveTo', this.firstAlert.EffectiveTo);
        console.log('new Date()', new Date());
        debugger;
      
        // Check if firstAlert or EffectiveFrom is null or undefined
        if (!this.firstAlert || !this.firstAlert.EffectiveFrom) {
          console.log('EffectiveFrom.jsdate is null or undefined');
          return false; // Or handle it according to your requirements
        }
      
        // Parse the EffectiveFrom date string into a JavaScript Date object
        const effectiveFromDate = new Date(this.firstAlert.EffectiveFrom);
      
        // If EffectiveTo is not defined, consider the alert to be lifetime from EffectiveFrom date
        if (!this.firstAlert.EffectiveTo) {
          // Set the time to midnight for comparison
          effectiveFromDate.setHours(0, 0, 0, 0);
          const currentDate = new Date();
          currentDate.setHours(0, 0, 0, 0);
          return currentDate >= effectiveFromDate; // Display modal if current date is equal to or greater than EffectiveFrom date
        }
      
        // Parse the EffectiveTo date string into a JavaScript Date object
        const effectiveToDate = new Date(this.firstAlert.EffectiveTo);
      
        // Set the time to midnight for comparison
        effectiveFromDate.setHours(0, 0, 0, 0);
        effectiveToDate.setHours(0, 0, 0, 0);
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0);
      
        // Check if the current date is between EffectiveFrom and EffectiveTo dates
        return currentDate >= effectiveFromDate && currentDate <= effectiveToDate;
      }
      
      
      

    public myDatePicker: IMyDpOptions = {
        dateFormat: 'mm/dd/yyyy',
        height: '25px',
        width: '93%',
    };
    NewRowPayments(event: KeyboardEvent, ndx: number) {
        debugger;
        if (event.keyCode == 40) {
            let claimPaymentLength = 0;
            for (var notDel = 0; notDel < this.claimPaymentModel.length; notDel++) {
                if (!this.claimPaymentModel[notDel].claimPayments.Deleted)
                    claimPaymentLength++;
            }
            let rowFlag: number = -1;
            var element = $("#payments-section table tbody tr:visible");
            if (claimPaymentLength - 1 > ndx) {
                var input = $($(element)[ndx]).find(":focus").is("input");
                if (input) {
                    $($($(element[ndx + 1]).find("select"))[0]).focus();
                    return;
                }
            }
            for (var i = 0; i < element.length - 1; i++) {
                var hasfocus = $($(element)[i]).find(":focus").length;
                var isInput = $($(element)[i]).find(":focus").is("input");
                if (hasfocus > 0 && isInput) {
                    if (claimPaymentLength <= ndx + 1 && (this.claimPaymentModel[ndx] != null && this.claimPaymentModel[ndx].claimPayments.Payment_Source != "" && this.claimPaymentModel[ndx].claimPayments.Payment_Source != undefined && this.claimPaymentModel[ndx].claimPayments.Payment_Source != null && this.claimPaymentModel[ndx].claimPayments.Payment_Source != undefined)) {
                        this.AddNewPayment();
                        rowFlag = i;
                    }
                    else
                        $($($(element[i + 1]).find("select"))[0]).focus();
                }
            }
            if (rowFlag > -1) {
                setTimeout(function () {
                    $($($($("#payments-section table tbody tr:visible")[rowFlag + 1]).find("select"))[0]).focus();
                }, 200);
            }
        }
    }
 // Added by Pir Ubaid (USER STORY 204 : NPM ALERT )
  show() {
    //set the modal body static.will close on click OK or Cross
    const modalOptions: ModalOptions = {
        backdrop: 'static'
      };
      this.modalWindow.config = modalOptions;
    this.modalWindow.show();
  }

  hide() {
    this.modalWindow.hide();
  }
  
    AddNewPayment() {
        debugger;
        let canCreateRow = false;
        if (this.claimPaymentModel.length <= 0)
            canCreateRow = true;
        let deleted = 0;
        if (this.claimPaymentModel.filter(del => del.claimPayments.Deleted == false).length > 0) {
            if (this.claimPaymentModel.length > 0) {
                for (var check = this.claimPaymentModel.length; check > 0; check--) {
                    if (!this.claimPaymentModel[check - 1].claimPayments.Deleted && (this.claimPaymentModel[check - 1].claimPayments.Payment_Source != null && this.claimPaymentModel[check - 1].claimPayments.Payment_Source != undefined && this.claimPaymentModel[check - 1].claimPayments.Payment_Source != "")) {
                        canCreateRow = true;
                        break;
                    }
                    else {
                        if (!this.claimPaymentModel[check - 1].claimPayments.Deleted && (this.claimPaymentModel[check - 1].claimPayments.Payment_Source != null || this.claimPaymentModel[check - 1].claimPayments.Payment_Source != undefined || this.claimPaymentModel[check - 1].claimPayments.Payment_Source != "")) {
                            canCreateRow = false;
                            break;
                        }
                    }
                }
            }
        }
        else
            canCreateRow = true;
        if (canCreateRow) {
            var cp = new claimPayment();
            //cp.canDelete = true;
            cp.claimPayments.Deleted = false;
            cp.claimPayments.claim_payments_id = 0;
            cp.claimPayments.Claim_No = 355139;
            cp.claimPayments.Payment_No = 0;
            cp.claimPayments.Deleted = false;
            cp.claimPayments.Date_Entry = (new Date()).toLocaleString('en-US', { hour12: false });
            if(this.paymentDetails != null || this.paymentDetails !== undefined ){
                this.isFromposting=true
            }else{
                this.isFromposting=false
            }
            // if (GlobalVariables.DepositSlipIDGlobal != null && GlobalVariables.DepositSlipIDGlobal != undefined) {
            //     cp.DEPOSITSLIP_ID = GlobalVariables.DepositSlipIDGlobal.toString();
            //     cp.PaymentType = GlobalVariables.PaymentMethodGlobal;
            //     cp.EnteredFrom = GlobalVariables.PaySourceGlobal;
            //     cp.FillingDate = GlobalVariables.PaymentDateGlobal;
            //     cp.Batch_No = GlobalVariables.BatchNoGlobal;
            //     cp.Batch_date = GlobalVariables.BatchDateGlobal;
            //     cp.ChequeNo = GlobalVariables.CheckNoGlobal;
            // }
            this.claimPaymentModel.push(cp);
            //alert(this.claimPayments.length);
            let setIndex = -1;
            if (this.claimPaymentModel.length > 1) {
                for (var k = 0; k < this.claimPaymentModel.length; k++) {
                    if (this.claimPaymentModel[k].claimPayments.Deleted != true) {
                        setIndex++;
                    }
                }
            }
            else
                setIndex = 0;
            //this.claimPayments[k].SerialNo = setIndex + 1;
            cp.claimPayments.Sequence_No = (setIndex + 1).toString();// (this.claimPayments.length).toString();

            
        }
    }
    calculateAdjustedAmount(ndx: number, event: any) {
        let selectedValues = event.split(" ");
        let selectedProcedureCode = selectedValues[0];
        let selectedDosFrom = selectedValues[1];
        let selectedDosTo = selectedValues[2];
    
        if (selectedProcedureCode != undefined && selectedProcedureCode != null) {
            const listCharges = this.claimCharges.filter(x => x.claimCharges.Procedure_Code == selectedProcedureCode);
            if (listCharges.length > 0) {
                listCharges.forEach(element => {
                    if (element.claimCharges.Dos_From == selectedDosFrom && element.claimCharges.Dos_To == selectedDosTo && element.claimCharges.Procedure_Code == selectedProcedureCode) {
                            console.log("listCharges", element)
                           //condition 1 
                           this.chargesAmt[ndx] = element.claimCharges.Amount;
                           console.log("this.chargesAmt[ndx] = listCharges[0].claimCharges.Amount; ", this.chargesAmt[ndx])
                           this.claimPaymentModel[ndx].claimPayments.Units = element.claimCharges.Units.toString();
                           this.claimPaymentModel[ndx].claimPayments.Paid_Proc_Code = element.claimCharges.Procedure_Code;
    
                                this.claimPaymentModel[ndx].claimPayments.Dos_From =this.datepipe.transform( element.claimCharges.Dos_From, 'MM/dd/yyyy');
                              //  this.claimViewModel.claimCharges[x].claimCharges.Dos_From = this.datepipe.transform(this.claimViewModel.claimCharges[x].claimCharges.Dos_From, 'MM/dd/yyyy');
                                this.claimPaymentModel[ndx].claimPayments.Dos_To = element.claimCharges.Dos_To;
                                
                               this.claimPaymentModel[ndx].claimPayments.Amount_Adjusted = element.claimCharges.Amount;
                               console.log("Element amnt: ",element.claimCharges.Amount);
                                this.claimPaymentModel[ndx].claimPayments.Units = element.claimCharges.Units.toString();
                               // this.claimPaymentModel[ndx].claimPayments.Paid_Proc_Code = element.claimCharges.Procedure_Code;
                               if (this.claimPaymentModel[ndx].claimPayments.Payment_Source == "1" || this.claimPaymentModel[ndx].claimPayments.Payment_Source == "2" || this.claimPaymentModel[ndx].claimPayments.Payment_Source == "3") {
                                this.claimPaymentModel[ndx].claimPayments.MODI_CODE1 = element.claimCharges.Modi_Code1;
                                this.claimPaymentModel[ndx].claimPayments.MODI_CODE2 = element.claimCharges.Modi_Code2;
                            }
                                // this.claimPaymentModel[ndx].claimPayments.MODI_CODE1 = element.claimCharges.Modi_Code1;
                                // this.claimPaymentModel[ndx].claimPayments.MODI_CODE2 = element.claimCharges.Modi_Code2;
    
                                var charges = this.chargesAmt[ndx];
                                debugger
                                console.log("charges :", charges)
                                if (this.claimPaymentModel[ndx].claimPayments.Amount_Approved != null && this.claimPaymentModel[ndx].claimPayments.Amount_Approved != undefined) {
                
                                    if (charges == null || charges == undefined || charges == "")
                                        charges = "0.00";
                                    this.claimPaymentModel[ndx].claimPayments.Amount_Adjusted = (parseFloat(charges) - this.claimPaymentModel[ndx].claimPayments.Amount_Approved).toString();
                                    this.claimPaymentModel[ndx].claimPayments.Units = element.claimCharges.Units.toString();
                                }
                                if(this.claimPaymentModel[ndx].claimPayments.Payment_Source == 'Q' || this.claimPaymentModel[ndx].claimPayments.Payment_Source  == 'O'){
                                    this.claimPaymentModel[ndx].claimPayments.Amount_Adjusted = null;
                                }
                                else {
                                    this.claimPaymentModel[ndx].claimPayments.Amount_Adjusted = charges;
                                }
                        }
                    });
                }
            }
        if (this.claimPaymentModel[ndx].claimPayments.Charged_Proc_Code != undefined && this.claimPaymentModel[ndx].claimPayments.Charged_Proc_Code != null) {
            var listCharges = this.claimCharges.filter(x => x.claimCharges.Procedure_Code == this.claimPaymentModel[ndx].claimPayments.Charged_Proc_Code);
            if (listCharges.length > 0) {
                this.chargesAmt[ndx] = listCharges[0].claimCharges.Amount;
                this.claimPaymentModel[ndx].claimPayments.Units = listCharges[0].claimCharges.Units.toString();
                this.claimPaymentModel[ndx].claimPayments.Paid_Proc_Code = listCharges[0].claimCharges.Procedure_Code;

                if (this.claimPaymentModel[ndx].claimPayments.Payment_Source == "1" || this.claimPaymentModel[ndx].claimPayments.Payment_Source == "2" || this.claimPaymentModel[ndx].claimPayments.Payment_Source == "3") {
                    this.claimPaymentModel[ndx].claimPayments.MODI_CODE1 = listCharges[0].claimCharges.Modi_Code1;
                    this.claimPaymentModel[ndx].claimPayments.MODI_CODE2 = listCharges[0].claimCharges.Modi_Code2;
                }

                var charges = this.chargesAmt[ndx];
                if (this.claimPaymentModel[ndx].claimPayments.Amount_Approved != null && this.claimPaymentModel[ndx].claimPayments.Amount_Approved != undefined) {

                    if (charges == null || charges == undefined || charges == "")
                        charges = "0.00";
                    this.claimPaymentModel[ndx].claimPayments.Amount_Adjusted = (parseFloat(charges) - this.claimPaymentModel[ndx].claimPayments.Amount_Approved).toString();
                    this.claimPaymentModel[ndx].claimPayments.Units = listCharges[0].claimCharges.Units.toString();
                }
                else {
                    this.claimPaymentModel[ndx].claimPayments.Amount_Adjusted = charges;
                }

            }
        }
        //  let index: number = event.target["selectedIndex"];
        // this.chargesAmt[ndx] = this.claimCharges[index].claimCharges.Amount;
        // this.claimPaymentModel[ndx].claimPayments.Units = this.claimCharges[index].claimCharges.Units.toString();
        // this.claimPaymentModel[ndx].claimPayments.Paid_Proc_Code = this.claimCharges[index].claimCharges.Procedure_Code;
        // if (this.claimPaymentModel[ndx].claimPayments.Payment_Source == "1" || this.claimPaymentModel[ndx].claimPayments.Payment_Source == "2" || this.claimPaymentModel[ndx].claimPayments.Payment_Source == "3") {
        //this.claimPaymentModel[ndx].claimPayments.MODI_CODE1 = this.claimCharges[index].claimCharges.Modi_Code1;
        //  this.claimPaymentModel[ndx].claimPayments.MODI_CODE2 = this.claimCharges[index].claimCharges.Modi_Code2;
        //}

        // var charges = this.chargesAmt[ndx];
        // if (this.claimPaymentModel[ndx].claimPayments.Amount_Approved != null && this.claimPaymentModel[ndx].claimPayments.Amount_Approved != "" && this.claimPaymentModel[ndx].claimPayments.Amount_Approved != undefined) {

        //     if (charges == null || charges == undefined || charges == "")
        //         charges = "0.00";
        //     this.claimPaymentModel[ndx].claimPayments.Amount_Adjusted = (parseFloat(charges) - parseFloat(this.claimPaymentModel[ndx].claimPayments.Amount_Approved)).toString();
        //     this.claimPaymentModel[ndx].claimPayments.Units = this.claimCharges[ndx].claimCharges.Units.toString();
        // }
        // else {
        //     this.claimPaymentModel[ndx].claimPayments.Amount_Adjusted = charges;
        // }
        this.checkPaidCharges(ndx);
    }

    calculateAdjustedAmount_Approved(ndx: number) {
        if (this.claimPaymentModel[ndx].claimPayments.Charged_Proc_Code != undefined && this.claimPaymentModel[ndx].claimPayments.Charged_Proc_Code != null) {
            var listCharges = this.claimCharges.filter(x => x.claimCharges.Procedure_Code == this.claimPaymentModel[ndx].claimPayments.Charged_Proc_Code);
            if (listCharges.length > 0) {
                this.claimPaymentModel[ndx].claimPayments.Units = listCharges[0].claimCharges.Units.toString();
                this.claimPaymentModel[ndx].claimPayments.Paid_Proc_Code = listCharges[0].claimCharges.Procedure_Code;
            }
        }
        //let index = ndx;
        if (this.claimPaymentModel[ndx].claimPayments.Amount_Approved != null && this.claimPaymentModel[ndx].claimPayments.Amount_Approved != undefined) {
            let a = this.claimPaymentModel[ndx].claimPayments.Amount_Adjusted;
            let b = this.claimPaymentModel[ndx].claimPayments.Amount_Approved

            let data = parseFloat(a)-b;
            var charges = this.chargesAmt[ndx];
            if (charges == null || charges == undefined || charges == "")
                charges = 0.00;
            const formatter = new Intl.NumberFormat('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            });
            let adjAmt = parseFloat(charges) - this.claimPaymentModel[ndx].claimPayments.Amount_Approved;
            this.claimPaymentModel[ndx].claimPayments.Amount_Adjusted = formatter.format(adjAmt);
            // this.claimPaymentModel[ndx].claimPayments.Units = this.claimCharges[ndx].claimCharges.Units.toString();
            let rejAmt = this.claimPaymentModel[ndx].claimPayments.Amount_Approved - this.claimPaymentModel[ndx].claimPayments.Amount_Paid;
            this.claimPaymentModel[ndx].claimPayments.Reject_Amount = parseFloat(formatter.format(rejAmt));
            if (this.claimPaymentModel[ndx].claimPayments.Reject_Amount.toString() == "NaN") {
                this.claimPaymentModel[ndx].claimPayments.Reject_Amount = 0;
            }
        }
        this.checkPaidCharges(ndx);
    }

    AmountPaidChange(event: KeyboardEvent, ndx: number) {
        const formatter = new Intl.NumberFormat('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });

  
       //  Added By Pir Ubaid USER STORY (Amount paid can 	not be greater than 0)
       let enteredAmount = parseFloat((event.target as HTMLInputElement).value);
       const paymentSource = this.claimPaymentModel[ndx].claimPayments.Payment_Source;
   
       if ((paymentSource == 'Q' || paymentSource == 'O') && enteredAmount > -1) {
           swal('Error', "Amount paid can 	not be greater than 0", 'error');
           this.claimPaymentModel[ndx].claimPayments.Amount_Paid = null;
          //  (event.target as HTMLInputElement).value = "";
          return;// Update enteredAmount to 0
       }
   
       let diff = this.claimPaymentModel[ndx].claimPayments.Amount_Approved - this.claimPaymentModel[ndx].claimPayments.Amount_Paid;
           this.claimPaymentModel[ndx].claimPayments.Reject_Amount = parseFloat(formatter.format(diff));
           if (this.claimPaymentModel[ndx].claimPayments.Reject_Amount.toString() == "NaN") {
               this.claimPaymentModel[ndx].claimPayments.Reject_Amount = 0;
           }
           if(this.claimPaymentModel[ndx].claimPayments.Payment_Source == 'Q' || this.claimPaymentModel[ndx].claimPayments.Payment_Source == 'O'){
               this.claimPaymentModel[ndx].claimPayments.Reject_Amount = 0;
           }
           this.checkPaidCharges(ndx);
       }
   

    checkPaidCharges(ndx: number) {
        var listCharges = this.claimCharges.filter(x => x.claimCharges.Procedure_Code == this.claimPaymentModel[ndx].claimPayments.Charged_Proc_Code);
        if (listCharges.length > 0) {
            this.chargesAmt[ndx] = listCharges[0].claimCharges.Amount;
            this.claimPaymentModel[ndx].claimPayments.Units = listCharges[0].claimCharges.Units.toString();
            this.claimPaymentModel[ndx].claimPayments.Paid_Proc_Code = listCharges[0].claimCharges.Procedure_Code;
            var charges = this.chargesAmt[ndx];
        }
        // Bug ID 406 
        if (this.claimPaymentModel[ndx].claimPayments.Amount_Paid > parseFloat(charges)) {
            this.claimPaymentModel[ndx].claimPayments.Amount_Paid = 0;
            this.claimPaymentModel[ndx].claimPayments.Amount_Adjusted = "0";
            swal('Failed', "Amount paid can't be greated then charges.", 'error');
        }
        if (this.claimPaymentModel[ndx].claimPayments.Amount_Approved > parseFloat(charges)) {
            this.claimPaymentModel[ndx].claimPayments.Amount_Approved = 0;
            this.claimPaymentModel[ndx].claimPayments.Amount_Adjusted = "0";
            this.claimPaymentModel[ndx].claimPayments.Amount_Paid = 0;
            swal('Failed', "Amount approved can't be greated then charges.", 'error');
        }

        if (+this.claimPaymentModel[ndx].claimPayments.Amount_Paid > +this.claimPaymentModel[ndx].claimPayments.Amount_Approved) {
            this.claimPaymentModel[ndx].claimPayments.Amount_Paid = 0;
            swal('Failed', "Amount paid can't be greated then amount approved.", 'error');
        }
    }

    Tooltip(name: number, index: number) {
        if (index == undefined) {
            index = 0;
        }
        this.tempVariable_P = $.trim($($("select[name='" + name + "']")[index]).find("option:selected").text());
    }

    DeletePayment(ndx: number) {

        if (this.claimPaymentModel[ndx].claimPayments.claim_payments_id == 0) {
            this.claimPaymentModel.splice(ndx, 1);
            if(this.paymentDetails != null || this.paymentDetails !== undefined ){
                this.isFromposting=false;
            }else{
                this.isFromposting=false
            }
            return;
        }

       
        if ((new Date(this.claimPaymentModel[ndx].claimPayments.Date_Entry).getMonth() == new Date().getMonth())
            &&
            (new Date(this.claimPaymentModel[ndx].claimPayments.Date_Entry).getFullYear() == new Date().getFullYear())) {           
            let setIndex = 0;
            this.claimPaymentModel[ndx].claimPayments.Deleted = true;

            if (this.claimPaymentModel.length > 1 && ndx != this.claimPaymentModel.length - 1) {
                for (var k = 0; k < this.claimPaymentModel.length; k++) {
                    if (this.claimPaymentModel[k].claimPayments.Deleted != true) {
                        setIndex++;
                        this.claimPaymentModel[k].claimPayments.Sequence_No = setIndex.toString();
                    }
                }
            }
            else {
                this.claimPaymentModel[ndx].claimPayments.Deleted = true;
                if (this.claimPaymentModel.length > 1 && ndx != this.claimPaymentModel.length - 1) {
                    for (var k = 0; k < this.claimPaymentModel.length; k++) {
                        if (this.claimPaymentModel[k].claimPayments.Deleted != true) {
                            setIndex++;
                            this.claimPaymentModel[k].claimPayments.Sequence_No = setIndex.toString();
                        }
                    }
                }
            }
        }
        else {
            swal('Failed', "Cannot delete entry of previous month(s)", 'error');
        }

    }
    PaymentSourceSelectionChangeEvent(ndx: number) {
        for (var i = 0; i < this.claimInusrance.length; i++) {

            if (this.claimInusrance[i].claimInsurance.Pri_Sec_Oth_Type == "P" && this.claimPaymentModel[ndx].claimPayments.Payment_Source == "1") {
                this.claimPaymentModel[ndx].InsurancePayerName = this.claimInusrance[i].InsurancePayerName;
                this.claimPaymentModel[ndx].claimPayments.Insurance_Id = this.claimInusrance[i].claimInsurance.Insurance_Id;
                break;
            } else if (this.claimInusrance[i].claimInsurance.Pri_Sec_Oth_Type == "S" && this.claimPaymentModel[ndx].claimPayments.Payment_Source == "2") {
                this.claimPaymentModel[ndx].InsurancePayerName = this.claimInusrance[i].InsurancePayerName;
                this.claimPaymentModel[ndx].claimPayments.Insurance_Id = this.claimInusrance[i].claimInsurance.Insurance_Id;
                break;
            } else if (this.claimInusrance[i].claimInsurance.Pri_Sec_Oth_Type == "O" && this.claimPaymentModel[ndx].claimPayments.Payment_Source == "3") {
                this.claimPaymentModel[ndx].InsurancePayerName = this.claimInusrance[i].InsurancePayerName;
                this.claimPaymentModel[ndx].claimPayments.Insurance_Id = this.claimInusrance[i].claimInsurance.Insurance_Id;
                break;
            } else {
                this.claimPaymentModel[ndx].InsurancePayerName = "";
                this.claimPaymentModel[ndx].claimPayments.Insurance_Id = null;
            }
        }
    }

    payExpand() {
        this.isPayExpand = !this.isPayExpand;
    }

    validateDateFormat(dt: string, Type: string, ndx: number, event: KeyboardEvent = null) {
        if (event.keyCode == 8 || event.keyCode == 46)
            return;
        if (dt == undefined || dt == null)
            return;
        if (dt.length == 2 || dt.length == 5) {
            if (Type == "BatchDate")
                this.claimPaymentModel[ndx].claimPayments.BATCH_DATE = dt + "/";
            else if (Type == "FilingDate")
                this.claimPaymentModel[ndx].claimPayments.Date_Filing = dt + "/";
            else if (Type == "DepositDate")
                this.claimPaymentModel[ndx].claimPayments.DepositDate = dt + "/";
        }
    }
}
