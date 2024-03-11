import { AfterViewInit, Component, ElementRef, HostListener, KeyValueChanges, KeyValueDiffer, KeyValueDiffers, OnInit } from '@angular/core';
import { ViewChild, ChangeDetectorRef } from '@angular/core';

import { APIService } from '../components/services/api.service';
import { GvarsService } from '../services/G_vars/gvars.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common'
import { PatientInsuranceResponse, CPTRequest, ClaimViewModel, ClaimModel } from './Classes/ClaimsModel'
import { DiagnosisComponent } from './Diagnosis/diagnosis.component'
import { ClaimInsurancesComponent } from './Insurances/claim-insurances.component'
import { PaymentsComponent } from './Payments/payments.component';
import { IMyDpOptions } from 'mydatepicker';
import { ClaimsAssignmentComponent } from './claims-assignment/claims-assignment.component';
import { FacilitiesComponent } from '../setups/Facility/facilities.component'
import { ClaimNotesComponent } from './claimNotes/claim-notes.component';
import { ClaimCharges, charges } from './Classes/index';
import { Diag } from './Classes/Diagnosis'
import { ChangeDetectionStrategy } from '@angular/core';
import { Common } from '../services/common/common';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ClaimService } from '../services/claim/claim.service';
import { Subscription } from 'rxjs';
import { IMyDateRangeModel, IMyDate } from 'mydaterangepicker';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';
import _ from 'lodash';
import { saveAs } from 'file-saver';
import { DebugContext } from '@angular/core/src/view';
import { PatientStatementReport } from '../reports/classes/appointment-detail-report';
import { ModalDirective, ModalOptions } from 'ngx-bootstrap/modal';
import { AlertService } from '../services/data/Alert.service';

declare var $: any
@Component({
    selector: 'app-claims',
    templateUrl: './claims.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./claims.component.css']

})
export class ClaimsComponent implements  OnInit {
    Diag: Diag[];
    public placeholder: string = 'MM/DD/YYYY';
    dxList: Array<{ name: string }> = [];
    // This is used to access the Claim Insurance Values from Child Component of Insurance.
    @ViewChild(ClaimInsurancesComponent) InsChild;
    @ViewChild(FacilitiesComponent) vfc: FacilitiesComponent
    dueRespSide: string;
    billingPhyforFee: string;
    alreadySaveOnce: boolean;
    private customerDiffer: KeyValueDiffer<string, any>;
    PTLReasons: any[] = [];
    listPatientReportStatement: PatientStatementReport[];
    modifiers: any;
    updatedvalue:any='W'
    states: any;
    showButton: boolean;
    changeFieldName: any;
    fieldName: string;
    procedureCode: any = '';
    isValidationError: boolean = false;
    CTValue!: boolean;
    setE: any;
    firstAlert: any;
    PrirAuthorization: string[] = [];
    claimForAlert: any;
    fetchedClaimNo: string;
    yourMethodValue: any='';
    
    resetPopup() {
        debugger
        this.vfc.ClearSearchFields();
    }
    ngAfterViewInit(): void {
        this.vfc.ClearSearchFields();
        //throw new Error('Method not implemented.');
    }

    @ViewChild(ClaimNotesComponent) ChildNotes;
    @ViewChild(ClaimsAssignmentComponent) childAssignment;
    @ViewChild(ModalDirective) modalWindow: ModalDirective;
    Dateoptions = { year: "numeric", month: "2-digit", day: "2-digit" };
    ClaimNumber: number;
    currentDate: any;
    @ViewChild(PaymentsComponent) paymentChild;
    @ViewChild(DiagnosisComponent) ChildDiagnosis: DiagnosisComponent;

    claimCharges: ClaimCharges[];
    cPTRequest: CPTRequest;
    chargesList: charges;
    callFrom: string;
    claimDos: string;
    today = new Date();
    // Declarations
    public dosDatePickerOptions: IMyDpOptions = {
        dateFormat: 'mm/dd/yyyy', height: '25px', width: '100%',
        disableSince: {
            year: this.today.getFullYear(),
            month: this.today.getMonth() + 1,
            day: this.today.getDate() + 1,
        }
    };

    public myDateRangePickerOptions: IMyDpOptions = {
        dateFormat: 'mm/dd/yyyy', height: '25px', width: '100%',
        // disableSince: {
        //     year: this.today.getFullYear(),
        //     month: this.today.getMonth() + 1,
        //     day: this.today.getDate() + 1,
        // },
    };

    public scanDatePickerOptions: IMyDpOptions = {
        dateFormat: 'mm/dd/yyyy',
        height: '25px',
        width: '100%',
        disableSince: {
            year: this.today.getFullYear(),
            month: this.today.getMonth() + 1,
            day: this.today.getDate() + 1,
        }
    };

    claimViewModel: ClaimViewModel;
    claimviewmodel_default: ClaimViewModel;
    currentInsuranceNumber: number;
    isClaimEdit: number;
    blnEditDemoChk: boolean = false;
    showInsuranceNamePopup: boolean = false;
    isChargesExpand: boolean = false;
    dataTable: any;
    charges: any = [];

    //#region dates
    selDOS: IMyDate = {
        day: 0,
        month: 0,
        year: 0
    };
    selDOI: IMyDate = {
        day: 0,
        month: 0,
        year: 0
    };
    selScanDate: IMyDate = {
        day: 0,
        month: 0,
        year: 0
    };
    selBillDate: IMyDate = {
        day: 0,
        month: 0,
        year: 0
    };
    //#endregion
    assigneeID: any = null;
    dxNumber: string;
    PatientInsuranceResponse: PatientInsuranceResponse[];
    disableForm: boolean = false;
    disableSave: boolean = false;
    claimInfo: any;
    claimForm: FormGroup;
    // subscriptions
    facilitySubscription: Subscription;
    ptlSubscription: Subscription;
    physicalMoifiersList: any = [
        { key: 'P1', value: 0 },
        { key: 'P2', value: 0 },
        { key: 'P3', value: 1 },
        { key: 'P4', value: 2 },
        { key: 'P5', value: 3 },
        { key: 'P6', value: 0 },
    ]; //..This variable is declared by Tamour Ali for Anestheisa task purpose
    constructor(private claimService: ClaimService,
        private cd: ChangeDetectorRef,
        public router: Router,
        public route: ActivatedRoute,
        public datepipe: DatePipe,
        public API: APIService,
        public Gv: GvarsService,
        private alertService: AlertService,
        private toast: ToastrService) {

        this.PTLReasons = [
            {
                id: 'OCBO', name: 'NOT COVERED BY THIS PAYER'
            },
            {
                id: 'OAUT', name: 'NEED AUTH'
            },
            {
                id: 'OCFI', name: '	SEE FIN NOTE'
            },
            {
                id: 'OCPT', name: 'NEED CPT CODE'
            },
            {
                id: 'ODIA', name: 'DIAGNOSIS NEEDED'
            },
            {
                id: 'OIDN', name: 'INSURANCE POLICY NUMBER IS INCORRECT'
            },
            {
                id: 'ONOT', name: '	NOTES NEEDED'
            },
            {
                id: 'ODOS', name: 'DATE OF SERVICE CLARIFICATION NEEDED'
            },
            {
                id: 'OPOS', name: 'NEED CORRECTED PLACE OF SERVICE'
            },
            {
                id: 'OREF', name: 'REFERRING PHYSICAN NEEDED'
            },
            {
                id: 'OPTA', name: 'PATIENTS ADDRESS NEEDED'
            },
            {
                id: 'OPTB', name: 'PATIENTS BIRTHDAY NEEDED'
            },
            {
                id: 'OPTS', name: 'PATIENTS SEX NEEDED'
            }

        ]
        this.claimViewModel = new ClaimViewModel();
        this.claimviewmodel_default = new ClaimViewModel();
        this.PatientInsuranceResponse = [];
        this.cPTRequest = new CPTRequest
        this.claimCharges = [];
        this.chargesList = new charges;
        this.clearClaimAmount();
        this.Diag = [];
        // this.getClaimModel();
    }

    ngOnInit() {
        console.log('ClaimNumber :', this.claimViewModel.ClaimModel.Claim_No);
        console.log('ClaimNumber :',);
        
        this.claimService.claimTabActive.next("claims");
        this.initForm();
        this.getModifiers();
        this.getSates();
        this.dynamicValidationFacility();
        this.claimDos = "";
        this.route.params.subscribe(params => {
            if (params) {
                this.claimInfo = JSON.parse(Common.decodeBase64(params['param']));
                this.Gv.Patient_Account = this.claimInfo.Patient_Account; 
                this.disableForm = this.claimInfo.disableForm;
                if (this.disableForm) {
                    this.claimForm.disable();
                    this.InsChild.isViewMode = true;
                    this.ChildDiagnosis.isViewMode = true;
                    this.paymentChild.isViewMode = true;
                }
                else
                    this.claimForm.enable();
                if (this.claimInfo.claimNo > 0) {
                    this.getClaimModel();
                    if (this.claimViewModel.ClaimModel.PTL_Status)
                        this.dynamicValidationPTL();
                }
                else {
                    this.InsChild.isNewClaim = true;
                    this.getEmptyClaim();
                    this.alreadySaveOnce = false;
                }
            }
        });

        // this.formControls['hospitalization'].get('ptlStatus').setValue(this.claimViewModel.ClaimModel.PTL_Status)

   
    


        //Added By Pir Ubaid (USER STORY : 205 Prior Authorization)
        this.getPAByAccount(); 

       



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
    

    shouldHide(provider: any): boolean {
        // if(this.claimInfo.claimNo > 0){

        //     return provider.Is_Active;
        // }
        return !provider.Is_Active;
    }






    // this.formControls['hospitalization'].get('ptlStatus').setValue(this.claimViewModel.ClaimModel.PTL_Status)



    dynamicValidationPTL() {
        if (this.ptlSubscription != null && this.ptlSubscription != undefined)
            this.ptlSubscription.unsubscribe();

        this.ptlSubscription = this.formControls['hospitalization'].get('ptlStatus').valueChanges.subscribe(() => {
            if (this.formControls['hospitalization'].get('ptlStatus').value) {
                this.formControls['hospitalization'].get('ptlReason').setValidators([Validators.required]);
                this.formControls['hospitalization'].get('ptlReason').updateValueAndValidity({ onlySelf: true, emitEvent: false });
            } else {

                this.formControls['hospitalization'].get('ptlReason').clearValidators();
                this.formControls['hospitalization'].get('ptlReason').setValue(null);
                this.formControls['hospitalization'].get('ptlReason').updateValueAndValidity({ onlySelf: true, emitEvent: true });
            }
        })

    }

    dynamicValidationFacility() {
        if (this.facilitySubscription != null && this.facilitySubscription != undefined)
            this.facilitySubscription.unsubscribe();
        this.facilitySubscription = this.formControls['hospitalization'].get('facility').valueChanges.subscribe(() => {
            if (!Common.isNullOrEmpty(this.claimViewModel.ClaimModel.Facility_Code) && !Common.isNullOrEmpty(this.formControls['hospitalization'].get('facility').value)) {
                this.formControls['hospitalization'].get('facilityDates').setValidators([Validators.required]);
                this.formControls['hospitalization'].get('facilityDates').updateValueAndValidity({ onlySelf: true, emitEvent: false });
            } else {
                this.formControls['hospitalization'].get('facilityDates').clearValidators();
                this.formControls['hospitalization'].get('facilityDates').updateValueAndValidity({ onlySelf: true, emitEvent: false });
                this.formControls['hospitalization'].get('facilityDates').reset()
                this.claimViewModel.ClaimModel.Facility_Code = null;
                this.claimViewModel.ClaimModel.Hospital_To = "";
                this.claimViewModel.ClaimModel.Hospital_From = "";
            }
        });
    }

    onDateRangeChanged(event: IMyDateRangeModel) {
        this.claimViewModel.ClaimModel.Hospital_From = Common.isNullOrEmpty(event.beginJsDate) ? null : event.beginJsDate.toDateString();
        this.claimViewModel.ClaimModel.Hospital_To = Common.isNullOrEmpty(event.endJsDate) ? null : event.endJsDate.toDateString();
    }

    initForm() {
        this.claimForm = new FormGroup({
            main: new FormGroup({
                selfPay: new FormControl(false),
                dos: new FormControl(null, [Validators.required]),
                scanDate: new FormControl(null, [Validators.required]),
                claimDate: new FormControl(null),
                location: new FormControl(null, [Validators.required]),
                rendPhy: new FormControl(null),
                billPhy: new FormControl(null, [Validators.required]),
                refPhy: new FormControl(null),
                supPhy: new FormControl(null),
                referral: new FormControl('', [Validators.maxLength(50)]),
                pa: new FormControl('', [Validators.maxLength(50)]),
                additionalClaimInfo: new FormControl('', [Validators.minLength(10), Validators.maxLength(80)]),
                patientStatus: new FormControl(null),
                priStatus: new FormControl(null),
                secStatus: new FormControl(null),
                othStatus: new FormControl(null)
            }),
            hospitalization: new FormGroup({
                facility: new FormControl(null),
                facilityDates: new FormControl(''),
                ptlStatus: new FormControl(false),
                ptlReason: new FormControl(null),
                ptlReasonDetail: new FormControl(''),
                docFeedback: new FormControl('')
            }),
            correctedClaimGroup: new FormGroup({
                ICN_Number: new FormControl(null),
                Is_Corrected: new FormControl(false),
                RSCode: new FormControl(null)
            })
        });
    }

    get formControls() {
        return this.claimForm.controls;
    }

    getClaimModel() {
        debugger
        this.API.getData('/Demographic/GetClaimModel?PatientAccount= ' + this.claimInfo.Patient_Account + '&ClaimNo=' + this.claimInfo.claimNo + '').subscribe(
            data => {
                this.claimViewModel = new ClaimViewModel();
                this.claimviewmodel_default = new ClaimViewModel();
                this.clearClaimAmount();
                this.refresh();
                this.claimviewmodel_default = data.Response;
                this.claimViewModel = data.Response;
                  // Accessing the claim number from the response and passing it to another method
                  const fetchedClaimNo = this.claimViewModel.ClaimModel.Claim_No;
                  console.log('Fetched Claim Number:', fetchedClaimNo);
                  this.yourMethod(fetchedClaimNo)
                  if(fetchedClaimNo != null ||fetchedClaimNo != undefined){
                    this.showModalForSelectedClaim(fetchedClaimNo);
                  }
                if (this.claimViewModel.ClaimModel != null) {

                    if (this.claimViewModel.AttendingPhysiciansList.length > 0) {
                        // let filteredAttendingPhy = this.claimViewModel.AttendingPhysiciansList.filter(x => x.Id === this.claimViewModel.ClaimModel.Attending_Physician && !x.Is_Active);
                        // if (filteredAttendingPhy.length > 0) {
                        //     this.claimViewModel.ClaimModel.Attending_Physician = -1;
                        // }

                        //       this.claimViewModel.ClaimModel.Attending_Physician = this.claimViewModel.AttendingPhysiciansList[0].Id;
                        //this.claimViewModel.ClaimModel.Attending_Physician = this.claimViewModel.AttendingPhysiciansList[0].Id;



                    }
                    if (this.claimViewModel.BillingPhysiciansList.length > 0) {
                        // let filteredBillingPhy = this.claimViewModel.BillingPhysiciansList.filter(x => x.Id === this.claimViewModel.ClaimModel.Billing_Physician && !x.Is_Active);
                        // if (filteredBillingPhy.length > 0) {
                        //     this.claimViewModel.ClaimModel.Billing_Physician = -1;
                        // }
                        // this.claimViewModel.ClaimModel.Billing_Physician = this.claimViewModel.BillingPhysiciansList[0].Id;
                    }
                    // if (this.claimViewModel.ClaimModel.Supervising_Physician !== -1) {
                    //     this.claimViewModel.ClaimModel.Supervising_Physician = -1;
                    // }

                    this.ClaimNumber = this.claimViewModel.ClaimModel.Claim_No;
                    //#region Dates Setup
                    if (!Common.isNullOrEmpty(this.claimViewModel.ClaimModel.DOS)) {
                        this.claimViewModel.ClaimModel.DOS = this.datepipe.transform(this.claimViewModel.ClaimModel.DOS, 'MM/dd/yyyy');
                        this.selDOS = this.setDate(this.claimViewModel.ClaimModel.DOS);
                        this.claimDos = this.claimViewModel.ClaimModel.DOS;
                    }
                    if (!Common.isNullOrEmpty(this.claimViewModel.ClaimModel.Scan_Date)) {
                        this.claimViewModel.ClaimModel.Scan_Date = this.datepipe.transform(this.claimViewModel.ClaimModel.Scan_Date, 'MM/dd/yyyy');
                        this.selScanDate = this.setDate(this.claimViewModel.ClaimModel.Scan_Date);
                    }

                    if (!Common.isNullOrEmpty(this.claimViewModel.ClaimModel.Injury_Date)) {
                        this.claimViewModel.ClaimModel.Injury_Date = this.datepipe.transform(this.claimViewModel.ClaimModel.Injury_Date, 'MM/dd/yyyy');
                        this.selDOI = this.setDate(this.claimViewModel.ClaimModel.Injury_Date);
                    }



                    if (!Common.isNullOrEmpty(this.claimViewModel.ClaimModel.Bill_Date)) {
                        this.claimViewModel.ClaimModel.Bill_Date = this.datepipe.transform(this.claimViewModel.ClaimModel.Bill_Date, 'MM/dd/yyyy');
                        this.selBillDate = this.setDate(this.claimViewModel.ClaimModel.Bill_Date);
                    }
                    if (!Common.isNullOrEmpty(this.claimViewModel.ClaimModel.Batch_Date)) {
                        this.claimViewModel.ClaimModel.Batch_Date = this.datepipe.transform(this.claimViewModel.ClaimModel.Batch_Date, 'MM/dd/yyyy');
                    }
                    if (!Common.isNullOrEmpty(this.claimViewModel.ClaimModel.Hospital_From)) {
                        this.claimViewModel.ClaimModel.Hospital_From = this.datepipe.transform(this.claimViewModel.ClaimModel.Hospital_From, 'MM/dd/yyyy');
                    }
                    if (!Common.isNullOrEmpty(this.claimViewModel.ClaimModel.Hospital_To)) {
                        this.claimViewModel.ClaimModel.Hospital_To = this.datepipe.transform(this.claimViewModel.ClaimModel.Hospital_To, 'MM/dd/yyyy');
                    }
                    if (!Common.isNullOrEmpty(this.claimViewModel.ClaimModel.Hospital_From) && !Common.isNullOrEmpty(this.claimViewModel.ClaimModel.Hospital_To)) {
                        this.setDateRange(this.claimViewModel.ClaimModel.Hospital_From, this.claimViewModel.ClaimModel.Hospital_To);

                    }
                    //#endregion
                    //#region Diagnosis Codes
                    if (this.claimViewModel.ClaimModel.DX_Code1 != undefined) {
                        var cp: Diag;
                        cp = new Diag();
                        cp.Diagnosis.Code = this.claimViewModel.ClaimModel.DX_Code1;
                        cp.Diagnosis.Description = this.claimViewModel.DX1Description;
                        this.Diag.push(cp)
                    }
                    if (this.claimViewModel.ClaimModel.DX_Code2 != undefined) {
                        var cp: Diag;
                        cp = new Diag();
                        cp.Diagnosis.Code = this.claimViewModel.ClaimModel.DX_Code2;
                        cp.Diagnosis.Description = this.claimViewModel.DX2Description;
                        this.Diag.push(cp)
                    }
                    if (this.claimViewModel.ClaimModel.DX_Code3 != undefined) {
                        var cp: Diag;
                        cp = new Diag();
                        cp.Diagnosis.Code = this.claimViewModel.ClaimModel.DX_Code3;
                        cp.Diagnosis.Description = this.claimViewModel.DX3Description;
                        this.Diag.push(cp)
                    }
                    if (this.claimViewModel.ClaimModel.DX_Code4 != undefined) {
                        var cp: Diag;
                        cp = new Diag();
                        cp.Diagnosis.Code = this.claimViewModel.ClaimModel.DX_Code4;
                        cp.Diagnosis.Description = this.claimViewModel.DX4Description;
                        this.Diag.push(cp)
                    }
                    if (this.claimViewModel.ClaimModel.DX_Code5 != undefined) {
                        var cp: Diag;
                        cp = new Diag();
                        cp.Diagnosis.Code = this.claimViewModel.ClaimModel.DX_Code5;
                        cp.Diagnosis.Description = this.claimViewModel.DX5Description;
                        this.Diag.push(cp)
                    }
                    if (this.claimViewModel.ClaimModel.DX_Code6 != undefined) {
                        var cp: Diag;
                        cp = new Diag();
                        cp.Diagnosis.Code = this.claimViewModel.ClaimModel.DX_Code6;
                        cp.Diagnosis.Description = this.claimViewModel.DX6Description;
                        this.Diag.push(cp)
                    }
                    if (this.claimViewModel.ClaimModel.DX_Code7 != undefined) {
                        var cp: Diag;
                        cp = new Diag();
                        cp.Diagnosis.Code = this.claimViewModel.ClaimModel.DX_Code7;
                        cp.Diagnosis.Description = this.claimViewModel.DX7Description;
                        this.Diag.push(cp)
                    }
                    if (this.claimViewModel.ClaimModel.DX_Code8 != undefined) {
                        var cp: Diag;
                        cp = new Diag();
                        cp.Diagnosis.Code = this.claimViewModel.ClaimModel.DX_Code8;
                        cp.Diagnosis.Description = this.claimViewModel.DX8Description;
                        this.Diag.push(cp)
                    }
                    if (this.claimViewModel.ClaimModel.DX_Code9 != undefined) {
                        var cp: Diag;
                        cp = new Diag();
                        cp.Diagnosis.Code = this.claimViewModel.ClaimModel.DX_Code9;
                        cp.Diagnosis.Description = this.claimViewModel.DX9Description;
                        this.Diag.push(cp)
                    }
                    if (this.claimViewModel.ClaimModel.DX_Code10 != undefined) {
                        var cp: Diag;
                        cp = new Diag();
                        cp.Diagnosis.Code = this.claimViewModel.ClaimModel.DX_Code10;
                        cp.Diagnosis.Description = this.claimViewModel.DX10Description;
                        this.Diag.push(cp)
                    }
                    if (this.claimViewModel.ClaimModel.DX_Code11 != undefined) {
                        var cp: Diag;
                        cp = new Diag();
                        cp.Diagnosis.Code = this.claimViewModel.ClaimModel.DX_Code11;
                        cp.Diagnosis.Description = this.claimViewModel.DX11Description;
                        this.Diag.push(cp)
                    }
                    if (this.claimViewModel.ClaimModel.DX_Code12 != undefined) {
                        var cp: Diag;
                        cp = new Diag();
                        cp.Diagnosis.Code = this.claimViewModel.ClaimModel.DX_Code12;
                        cp.Diagnosis.Description = this.claimViewModel.DX12Description;
                        this.Diag.push(cp)
                    }
                    this.ChildDiagnosis.Diag = this.Diag;
                    //#endregion
                    //#region Claim Charges
                    if (this.claimViewModel.claimCharges != null) {

                        this.claimCharges = this.claimViewModel.claimCharges;
                        for (var x = 0; x < this.claimCharges.length; x++) {

                            if (+this.claimCharges[x].claimCharges.Amount > 0 && +this.claimCharges[x].claimCharges.Units > 1)
                                this.claimCharges[x].amt = (+this.claimCharges[x].claimCharges.Amount / +this.claimCharges[x].claimCharges.Units) + "";
                            else
                                this.claimCharges[x].amt = this.claimCharges[x].claimCharges.Amount;

                            if (this.claimCharges[x].IsAnesthesiaCpt == true) {

                                //..For Anesthesia default units are coming from database procedure table where for remainig cpt's its calculated of front-end.
                                if (+this.claimCharges[x].claimCharges.Amount > 0 && +this.claimCharges[x].claimCharges.Units > 1)
                                    this.claimCharges[x].amt = ((+this.claimCharges[x].amt * 100) / 200) + "";
                            }

                            this.claimCharges[x].claimCharges.NDCList = this.claimViewModel.claimCharges[x].claimCharges.NDCCodeList;
                            this.claimViewModel.claimCharges[x].claimCharges.DOE = this.datepipe.transform(this.claimViewModel.claimCharges[x].claimCharges.DOE, 'MM/dd/yyyy');
                            if (this.claimViewModel.claimCharges[x].claimCharges.Dos_From != null) {
                                this.claimViewModel.claimCharges[x].claimCharges.Dos_From = this.datepipe.transform(this.claimViewModel.claimCharges[x].claimCharges.Dos_From, 'MM/dd/yyyy');
                            }
                            if (this.claimViewModel.claimCharges[x].claimCharges.Dos_To != null) {
                                this.claimViewModel.claimCharges[x].claimCharges.Dos_To = this.datepipe.transform(this.claimViewModel.claimCharges[x].claimCharges.Dos_To, 'MM/dd/yyyy');
                            }
                            if (this.claimViewModel.claimCharges[x].claimCharges.Start_Time != null) {
                                let start_time = this.claimViewModel.claimCharges[x].claimCharges.Start_Time.slice(11, 16)
                                this.claimViewModel.claimCharges[x].claimCharges.Start_Time = start_time
                            }
                            if (this.claimViewModel.claimCharges[x].claimCharges.Stop_Time != null) {
                                let stop_Time = this.claimViewModel.claimCharges[x].claimCharges.Stop_Time.slice(11, 16)
                                this.claimViewModel.claimCharges[x].claimCharges.Stop_Time = stop_Time
                            }


                        }
                        this.paymentChild.claimCharges = this.claimViewModel.claimCharges;
                    }
                    //#endregion
                    //#region added Hours 
                    this.currentDate = new Date();
                    this.claimViewModel.claimPayments.forEach((item) => {
                        let entryDate: any = new Date(item.claimPayments.Date_Entry)
                        item.claimPayments.hoursSinceAdded = Math.abs(this.currentDate.getTime() - entryDate.getTime()) / 3600000;
                    })

                    if (this.claimViewModel.claimInusrance.length > 0) {

                        if (this.claimViewModel.claimInusrance[0].InsurancePayerName.includes("Medicaid") || this.claimViewModel.claimInusrance[0].InsurancePayerName.includes("Medicaid MCO")) {
                            if (this.claimViewModel.BillingPhysiciansList.length > 0) {
                                if (this.claimViewModel.BillingPhysiciansList[0].SPECIALIZATION_CODE == '050' && this.claimViewModel.BillingPhysiciansList[0].provider_State == 'OH') {
                                    //  $("#Modifier_Code option[value=SA]").attr('selected', 'selected');

                                    this.claimCharges.forEach(x => {
                                        x.claimCharges.Modi_Code1 = "SA"
                                    })


                                }
                            }

                        }
                    }

                    this.claimViewModel.claimPayments.forEach((item) => {
                        item.claimPayments.Date_Entry = this.datepipe.transform(item.claimPayments.Date_Entry, 'MM/dd/yyyy');
                        item.claimPayments.Date_Filing = this.datepipe.transform(item.claimPayments.Date_Filing, 'MM/dd/yyyy');
                        item.claimPayments.DepositDate = this.datepipe.transform(item.claimPayments.DepositDate, 'MM/dd/yyyy');
                        item.claimPayments.BATCH_DATE = this.datepipe.transform(item.claimPayments.BATCH_DATE, 'MM/dd/yyyy');
                    })


                    this.paymentChild.claimPaymentModel = this.claimViewModel.claimPayments;

                    if (!Common.isNullOrEmpty(this.claimViewModel.ClaimModel.Billing_Physician)) {
                        this.billingPhyforFee = this.claimViewModel.ClaimModel.Billing_Physician.toString();
                    }

                    //#endregion
                    //#region Claim Insurance
                    this.paymentChild.claimInusrance = this.claimViewModel.claimInusrance;
                    if (this.claimViewModel.claimInusrance.length > 1) {
                        this.claimViewModel.claimInusrance[0].claimInsurance.SubscriberName = this.claimViewModel.claimInusrance[0].SubscriberName;
                    }
                    this.InsChild.claimInsuranceModel = this.claimViewModel.claimInusrance;
                    this.InsChild.getPatientInsurances();
                    this.dueRespSide = this.ResponsibleParty(this.claimViewModel.ClaimModel);
                    //#endregion
                    if (!this.claimViewModel.ClaimModel.PTL_Status)
                        this.alreadySaveOnce = true;
                    else
                        this.alreadySaveOnce = false;
                    this.refresh();
                }
            });
           
            console.log('this.claimInfo.claimNo ',this.claimInfo.claimNo )
            this.yourMethod(this.fetchedClaimNo);
            
            // this.getClaims();
           // this.yourMethod(fetchedClaimNo);
    }
    // showModalForSelectedClaim(claimNum : any): void {
    //     this.vfc.ClearSearchFields();
    //     //throw new Error('Method not implemented.');
    //     debugger;
    //     this.alertService.getAlert().subscribe((data) => {
    //       if (data.Status === 'Success' && data.Response && data.Response.length > 0) {
    //         this.firstAlert = data.Response[0];
    //         this.yourMethod(this.fetchedClaimNo);
    //         console.log('Received alert data:', this.firstAlert);
    //         console.log('this.firstAlert.ClaimSummary', this.firstAlert.ClaimSummary);
    //         console.log('claimtext :',this.firstAlert.ClaimText);
    //         console.log('claimtext========================== :',this.fetchedClaimNo);
    //         console.log('claimNum:',claimNum);
    //         if (this.isAlertNotExpired()) {
    //           if (
    //             this.firstAlert.ApplicableFor == 'S' &&
    //             this.Gv.currentUser.userId == this.firstAlert.Created_By &&
    //             this.firstAlert.ClaimText === claimNum
    //           ) {
    //             this.show();
    //           } else if (this.firstAlert.ApplicableFor == 'A') {
    //             this.show();
    //           } else {
    //             console.log('Conditions not met.');
    //           }
    //         } else {
    //           console.log('Alert is expired.');
    //         }
    //       } else {
    //         console.log('No alert data available.');
    //         debugger;
    //       }
    //     });
    //   }
      
    showModalForSelectedClaim(claimNum: any): void {
        this.vfc.ClearSearchFields();
        debugger;
        this.alertService.getAlert().subscribe((data) => {
            if (data.Status === 'Success' && data.Response && data.Response.length > 0) {
                this.firstAlert = data.Response[0];
                console.log('Received alert data:', this.firstAlert);
                console.log('claimNum:', claimNum);
                console.log('ClaimText:', this.firstAlert.ClaimText);
                
                // Check if claimNum exists within ClaimText
                if (this.firstAlert.ClaimText.includes(claimNum)) {
                    console.log('Condition Check: true');
                    if (this.isAlertNotExpired()) {
                        if (
                            this.firstAlert.ApplicableFor == 'S' &&
                            this.Gv.currentUser.userId == this.firstAlert.Created_By
                        ) {
                            this.show();
                        } else if (this.firstAlert.ApplicableFor == 'A') {
                            this.show();
                        } else {
                            console.log('Conditions not met.');
                        }
                    } else {
                        console.log('Alert is expired.');
                    }
                } else {
                    console.log('Condition Check: false');
                    console.log('No match found or alert is expired.');
                }
            } else {
                console.log('No alert data available.');
            }
        });
    }
    

    // yourMethod(claimNo: string) {
    //     // Use claimNo as needed in yourMethod
    //     console.log('Fetched Claim Number in yourMethod:', claimNo);
    // }
    yourMethod(value :any) {
        // Use this.fetchedClaimNo here
        console.log('Fetched Claim Number in yourMethod:', value);
        this.yourMethodValue=value
    }
    // getClaims() {
    //     console.log('this.claimInfo.claimNo ', this.claimInfo.claimNo);
    //     this.claimForAlert = this.claimInfo.claimNo;
    // }
    

    getModifiers() {
        this.API.getData('/Demographic/GetModifiers').subscribe(
            data => {
                if (data.Status == 'Sucess') {

                    this.modifiers = data.Response;
                }

            })
    }
    getSates() {
        this.API.getData('/Demographic/GetstateList').subscribe(
            data => {

                if (data.Status == 'Sucess') {

                    this.states = data.Response;
                }

            })
    }
    addIns(data: any) {

        let count = 0;
        this.InsChild.claimInsuranceModel.forEach(
            x => {
                if (x.claimInsurance.Deleted == true) {
                    count++
                }
            }
        )
        if (this.InsChild.claimInsuranceModel[0].claimInsurance.Deleted == false) {
            count = 0;
        }
        if (this.InsChild.claimInsuranceModel.length > 0 && this.InsChild.claimInsuranceModel.length != count) {

            if (this.InsChild.claimInsuranceModel[count].InsurancePayerName.includes("Medicaid") || this.InsChild.claimInsuranceModel[count].InsurancePayerName.includes("Medicaid MCO")) {
                if (this.claimViewModel.BillingPhysiciansList.length > 0) {
                    if (this.claimViewModel.BillingPhysiciansList[0].SPECIALIZATION_CODE == '050' && this.claimViewModel.BillingPhysiciansList[0].provider_State == 'OH') {
                        //  $("#Modifier_Code option[value=SA]").attr('selected', 'selected');

                        this.claimCharges.forEach(x => {
                            x.claimCharges.Modi_Code1 = "SA"
                        })


                    }
                }

            } else {
                this.claimCharges.forEach(x => {
                    x.claimCharges.Modi_Code1 = ""
                })
            }

        } else {
            this.claimCharges.forEach(x => {
                x.claimCharges.Modi_Code1 = ""
            })
        }


    }
    ResponsibleParty(claim: ClaimModel) {


        if (claim.Amt_Due > 0 && claim.Pri_Status && (claim.Pri_Status.toLowerCase() == 'n' || claim.Pri_Status.toLowerCase() == 'r' || claim.Pri_Status.toLowerCase() == 'b')) {
            return 'Primary Ins Due';
        }
        else if (claim.Amt_Due > 0 && claim.Sec_Status && (claim.Sec_Status.toLowerCase() == 'n' || claim.Sec_Status.toLowerCase() == 'r' || claim.Sec_Status.toLowerCase() == 'b')) {
            return 'Secondary Ins Due';
        }
        else if (+claim.Amt_Due > 0 && claim.Oth_Status && (claim.Oth_Status.toLowerCase() == 'n' || claim.Oth_Status.toLowerCase() == 'r' || claim.Oth_Status.toLowerCase() == 'b')) {
            return 'Other Ins Due';
        }
        else if (+claim.Amt_Due > 0 && claim.Pat_Status && (claim.Pat_Status.toLowerCase() == 'n' || claim.Pat_Status.toLowerCase() == 'r' || claim.Pat_Status.toLowerCase() == 'b')) {
            return 'Patient Due';
        }
        else {
            return 'Due Amount';
        }
    }

    setDate(dateParam: any) {
        let date = new Date(dateParam);
        return {
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate()
        };
    }

    removeINS() {
        if (!this.claimViewModel.ClaimModel.Is_Self_Pay && this.claimViewModel.claimInusrance && this.claimViewModel.claimInusrance.length > 0) {
            for (var i = 0; i < this.claimViewModel.claimInusrance.length; i++) {
                this.claimViewModel.claimInusrance[i].claimInsurance.Deleted = true;
            }
        }
    }
    refresh() {
        this.cd.detectChanges();
    }

    EnableDisable(isRectify: boolean, EntryDate: string) {
        let enable;
        if (((new Date(EntryDate).getFullYear() < new Date().getFullYear()) && new Date(EntryDate).getMonth() <= new Date().getMonth() && isRectify) || ((new Date(EntryDate).getFullYear() < new Date().getFullYear()) && new Date(EntryDate).getMonth() <= new Date().getMonth() && !isRectify)) {
            enable =
            {
                'opacity': '0.5',
                'cursor': 'not-allowed',
            };
        }
        else if (new Date(EntryDate).getFullYear() <= new Date().getFullYear()) {
            if (new Date(EntryDate).getMonth() <= new Date().getMonth()) {
                if (isRectify) {
                    enable =
                    {
                        'opacity': '0.5',
                        'cursor': 'not-allowed',
                    };
                }
                else {
                    enable =
                    {
                        'opacity': 'none',
                    };
                }
            }
            else {
                enable =
                {
                    'opacity': 'none',
                };
            }
        }

        else {
            enable =
            {
                'opacity': 'none',
            };
        }
        return enable;
    }

    setCursorStyle(isRectified: boolean = false) {
        let styles;
        if (isRectified) {
            styles = {
                'cursor': 'not-allowed',
            };
        } else {
            styles = {
                'cursor': 'auto',
            };
        }
        return styles;
    }

//Added By Pir Ubaid (USER STORY : 205 Prior Authorization)
getPAByAccount(){
    this.API.getData('/Demographic/GetPAByAccount?aCCOUNT_NO= '+ this.claimInfo.Patient_Account).subscribe(
        data => {
            if (data.Status == 'Success') {

                this.PrirAuthorization = data.Response;
                console.log('PrirAuthorization values: ',this.PrirAuthorization);
                console.log('PrirAuthorization is : ', data.Response);
            }

        })
} 


    getEmptyClaim() {
        this.API.getData('/Demographic/GetClaimModel?PatientAccount=' + this.claimInfo.Patient_Account + '&ClaimNo=0').subscribe(

            data => {
                var curDate = new Date();
                this.claimViewModel = data.Response;
                this.claimViewModel.ClaimModel.Is_Draft = false;
                this.claimViewModel.ClaimModel.Bill_Date = this.datepipe.transform(curDate, 'MM/dd/yyyy');
                this.claimViewModel.ClaimModel.Scan_Date = this.datepipe.transform(curDate, 'MM/dd/yyyy');
                this.selBillDate = this.setDate(this.claimViewModel.ClaimModel.Bill_Date);
                this.selScanDate = this.setDate(this.claimViewModel.ClaimModel.Bill_Date);
                this.InsChild.PatientInsuranceResponse = data.Response.PatientInsuranceList;
                this.InsChild.getPatientInsurances();
                this.PatientInsuranceResponse = data.Response.PatientInsuranceList;
                // Select default values to select lists
                // Location

                if (this.claimViewModel.PracticeLocationsList.length > 0)
                    this.claimViewModel.ClaimModel.Location_Code = this.claimViewModel.PracticeLocationsList[0].Id;
                //  Rendering Phy
                // if (this.claimViewModel.AttendingPhysiciansList.length > 0)
                //     this.claimViewModel.ClaimModel.Attending_Physician = this.claimViewModel.AttendingPhysiciansList[0].Id;

                if (this.claimViewModel.AttendingPhysiciansList.length > 0) {
                    let filteredAttendingPhy = this.claimViewModel.AttendingPhysiciansList.filter(x => x.Id === this.claimViewModel.ClaimModel.Attending_Physician && !x.Is_Active);
                    if (filteredAttendingPhy.length > 0) {
                        this.claimViewModel.ClaimModel.Attending_Physician = -1;
                    }

                }


                // Billing Phy
                if (this.claimViewModel.BillingPhysiciansList.length > 0)
                    this.claimViewModel.ClaimModel.Billing_Physician = this.claimViewModel.BillingPhysiciansList[0].Id;

                if (!Common.isNullOrEmpty(this.claimViewModel.ClaimModel.Billing_Physician)) {
                    this.billingPhyforFee = this.claimViewModel.ClaimModel.Billing_Physician.toString();
                }
                // // Referring Physician
                // if (this.claimViewModel.ReferralPhysiciansList.length > 0)
                //     this.claimViewModel.ClaimModel.Referring_Physician = this.claimViewModel.ReferralPhysiciansList[0].Id;
                // // Supervising Physician
                if (this.claimViewModel.AttendingPhysiciansList.length > 0)
                    // this.claimViewModel.ClaimModel.Supervising_Physician = this.claimViewModel.AttendingPhysiciansList[0].Id;
                    this.refresh();
            });
    }

    // This method is used to get the Values of All Insurances 
    FillInsurances() {
        //   this.claimViewModel.ClaimModel.PatientInsuranceResponse=[];
        //   this.claimViewModel.ClaimModel.PatientInsuranceResponse=this.InsChild.claimInsuranceModel.Response;
    }

    validateD(testdate) {
        var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)[0-9]{2}$/;
        return date_regex.test(testdate);
    }
    // DOS Checks
    onDateChanged(event: any, dateType: string) {
        if (dateType != undefined && dateType != "") {

            if (event.formatted != "" && !this.validateD(event.formatted)) {
                swal('Failed', "Invalid Date format", 'error');
            }
        }
        if (dateType == "DOS") {
            let dos = event.formatted == "" ? null : this.formatDate(event.formatted);
            this.claimViewModel.ClaimModel.DOS = this.claimDos = dos;
            let currentDate = new Date();
            let dosToComp = new Date(dos);
            if (dosToComp > currentDate) {
                this.disableSave = true;
            } else {
                this.disableSave = false;
            }
        }
        if (dateType == "BillDate") {
            this.claimViewModel.ClaimModel.Bill_Date = event.formatted == "" ? null : event.formatted;
        }

        if (dateType == "ScanDate") {
            this.claimViewModel.ClaimModel.Scan_Date = event.formatted == "" ? null : event.formatted;
        }
        if (dateType == "injury_date") {
            this.claimViewModel.ClaimModel.Injury_Date = event.formatted == "" ? null : event.formatted;
        }

        // if (dateType == "DOS" && (this.claimViewModel.ClaimModel.Bill_Date != null && this.claimViewModel.ClaimModel.Bill_Date != "" && this.claimViewModel.ClaimModel.Bill_Date != undefined) && this.claimViewModel.ClaimModel.Bill_Date.length == 10) {
        //     this.claimViewModel.ClaimModel.DOS = event.formatted == "" ? null : this.formatDate(event.formatted);
        // }
    }
    onEmpChange(event: any) {

        if (event == '0') {
            this.claimViewModel.ClaimModel.Employment = false;
        } else {
            this.claimViewModel.ClaimModel.Employment = true;
        }



    }
    onChangeAccident(event: any, d: any) {
        if (d == 'auto') {
            this.claimViewModel.ClaimModel.Accident_Auto = true;
            this.claimViewModel.ClaimModel.Accident_Other = false;
        }
        if (d == 'noAuto') {
            this.claimViewModel.ClaimModel.Accident_Other = true;
            this.claimViewModel.ClaimModel.Accident_Auto = false;
        }


    }
    formatDate(date: string) {
        if (date == null)
            return;
        var day = parseInt(date.split('/')[1]) < 10 ? date.split('/')[1] : date.split('/')[1];
        var month = parseInt(date.split('/')[0]) < 10 ? date.split('/')[0] : date.split('/')[0];
        var year = date.split('/')[2];
        if (year != undefined && month != undefined && day != undefined)
            return month + "/" + day + "/" + year;
    }

    // changesInFields(a){
    //     console.log('changes in fields',a)
    //     this.showButton=false

    //     if(this.changeFieldName.includes(a)==false){
    //         this.changeFieldName.push(a)
    //     }
    // }

    addtoScrubber() {
        this.showButton = true
        if (this.showButton) {
            var modeValue = this.claimViewModel.ClaimModel;
            console.log("this.claimViewModel.ClaimModel.Pat_Status", this.claimViewModel.ClaimModel.Pat_Status);
            console.log("this.claimViewModel.ClaimModel.Pri_Status", this.claimViewModel.ClaimModel.Pri_Status);
            console.log("this.claimViewModel.ClaimModel.Sec_Status", this.claimViewModel.ClaimModel.Sec_Status);
            console.log("this.claimViewModel.ClaimModel.Oth_Status", this.claimViewModel.ClaimModel.Oth_Status);

            var myArray = [];
            myArray.push(modeValue.Pat_Status);
            myArray.push(modeValue.Pri_Status);
            myArray.push(modeValue.Sec_Status);
            myArray.push(modeValue.Oth_Status);

            if (myArray.includes('N') || myArray.includes('R')) {

                this.API.PostData('/Scrubber/AddTOScrubber', this.claimViewModel, (d) => {
                    console.log("add Cliam to Scrubber", d)
                    // if (d.Status == "Sucess") {
                    //     if (this.claimViewModel.ClaimModel.Claim_No == undefined || this.claimViewModel.ClaimModel.Claim_No == null || this.claimViewModel.ClaimModel.Claim_No == 0) {
                    //         this.ClaimNumber = d.Response;
                    //         this.claimViewModel.ClaimModel.Claim_No = this.ClaimNumber;
                    //         this.claimInfo.claimNo = this.ClaimNumber;
                    //     }
                    //     this.ClaimNumber = this.claimViewModel.ClaimModel.Claim_No;
                    //     this.claimInfo.claimNo = this.ClaimNumber;
                    //     this.refresh();
                    //     if (this.claimInfo.claimNo > 0)
                    //         this.getClaimModel();
                    //     else
                    //         this.getEmptyClaim();
                    //     this.refresh();
                    //     swal('Claim', 'Patient Claim has been saved successfully.', 'success');
                    //     this.getSetStatus();
                    // }
                    // else {
                    //     console.log(d.Response)
                    //     swal('Failed', d.Status, 'error');
                    // }
                })

            }
            else {
                swal('Failed', 'Pleased checking the Patient Status: ' + this.claimViewModel.ClaimModel.Pat_Status + ' Primary Status : ' + this.claimViewModel.ClaimModel.Pri_Status + ' Secondary Status : ' + this.claimViewModel.ClaimModel.Sec_Status + ' Other Status : ' + this.claimViewModel.ClaimModel.Oth_Status, 'error');
            }
        } else {
            for (let i = 0; i < this.changeFieldName.length; i++) {
                this.fieldName = this.fieldName + ' ' + this.changeFieldName[i];
                console.log("fieldName", this.fieldName)
            }
            swal('Failed', 'Pleased checking  and Save that Changes ' + ' ' + this.fieldName, 'error');
        }



    }
    // Check by PIR UBAID  for NCT(Additional Claim Info) validation
    checkInputValue() {
        debugger;
        let inputValue: any;
        if(this.claimViewModel.ClaimModel.Additional_Claim_Info!==null)
        inputValue= this.claimViewModel.ClaimModel.Additional_Claim_Info.toUpperCase();
        // Define a regular expression pattern to match "CT" followed by one or more digits
        const ctPattern = /^CT\d+/;
        // for (let count = 0; count < this.claimCharges.length; count++) {
            for (let count = 0; count < this.claimViewModel.claimCharges.length; count++) {
            // Check if the inputValue matches the pattern
            // if ((this.claimCharges[count].claimCharges.Procedure_Code == '0275T' || this.claimCharges[count].claimCharges.Procedure_Code == '0275t') && !ctPattern.test(inputValue)) {
            if(this.claimViewModel.claimCharges[count].claimCharges.Deleted==null)
                this.claimViewModel.claimCharges[count].claimCharges.Deleted=false;
            if ((this.claimViewModel.claimCharges[count].claimCharges.Procedure_Code == '0275T' || this.claimViewModel.claimCharges[count].claimCharges.Procedure_Code == '0275t') && !ctPattern.test(inputValue) && this.claimViewModel.claimCharges[count].claimCharges.Deleted==false ) {
                swal('Failed', 'Additional Claim Info (NCT) must start with "CT" and should be at least 10 characters long.', 'error').then((result) => {
                    if (result) {
                        const additionalClaimInfoElement = document.getElementById("additionalClaimInfo");
                        if (additionalClaimInfoElement) {
                            additionalClaimInfoElement.focus();
                            window.scrollTo({
                                top: additionalClaimInfoElement.offsetTop,
                                behavior: 'smooth',
                            });
                        }
                    }
                });
                return false;
            }
        }
        // for (let count = 0; count < this.claimCharges.length; count++) {
        //     let startsWithCT = false;
        //     if (inputValue) {
        //         startsWithCT = ctPattern.test(inputValue);
        //     }
        //     this.CTValue = !startsWithCT;
        //     if (
        //         !startsWithCT &&
        //         (this.claimCharges[count].claimCharges.Procedure_Code == '0275T' || this.claimCharges[count].claimCharges.Procedure_Code == '0275t') &&
        //         (inputValue != null || inputValue !== '')
        //     ) {
        //         swal('Failed', 'Additional Claim Info (NCT) must start with "CT" and should be at least 10 characters long.', 'error').then((result) => {
        //             if (result) {
        //                 const additionalClaimInfoElement = document.getElementById("additionalClaimInfo");
        //                 if (additionalClaimInfoElement) {
        //                     additionalClaimInfoElement.focus();
        //                     window.scrollTo({
        //                         top: additionalClaimInfoElement.offsetTop,
        //                         behavior: 'smooth',
        //                     });
        //                 }
        //             }
                    
        //         })
        //     }
        // }
        // for (let count = 0; count < this.claimCharges.length; count++) {// Check if the inputValue is less than 10 characters
        //     if ((this.claimCharges[count].claimCharges.Procedure_Code == '0275T' || this.claimCharges[count].claimCharges.Procedure_Code == '0275t') && inputValue.length < 10) {
        //         swal('Failed', 'Additional Claim Info (NCT) should be at least 10 characters long.', 'error').then((result) => {
        //             if (result) {
        //                 const additionalClaimInfoElement = document.getElementById("additionalClaimInfo");
        //                 if (additionalClaimInfoElement) {
        //                     additionalClaimInfoElement.focus();
        //                     window.scrollTo({
        //                         top: additionalClaimInfoElement.offsetTop,
        //                         behavior: 'smooth',
        //                     });
        //                 }
        //             }
        //         });

        //     }
        // }
    }

    // added by Pir Ubaid User Story 181 
    getPatientStatementReport(practice_code: any) {
        debugger;
        console.log("Fetching patient statement report for Practice_Code:", practice_code);
        return this.API.getData('/Report/DormantClaimsReports?Claim_no=' + practice_code);
    }

    saveClaim(callType: string) {
        console.log("practice_code is : ", this.claimViewModel.ClaimModel.practice_code);
        this.claimViewModel.ClaimModel.Is_Draft = callType === 'Draft' ? true : false;

        console.log(this.claimViewModel.ClaimModel.Delay_Reason_Code)
        if (callType == 'Draft') {
            if (this.claimViewModel.ClaimModel.Delay_Reason_Code == null || this.claimViewModel.ClaimModel.Delay_Reason_Code == undefined || this.claimViewModel.ClaimModel.Delay_Reason_Code == "") {
                this.claimForm.get('hospitalization.ptlStatus').setValue(false)
                $(document).scrollTop(60) // any value you need
                return
            }
            this.claimForm.get('hospitalization.ptlStatus').setValue(true)
            this.claimViewModel.ClaimModel.PTL_Status = true

        } else {
            this.claimViewModel.ClaimModel.Delay_Reason_Code = null
            this.claimViewModel.ClaimModel.PTL_Status = false
        }
        this.claimViewModel.ClaimModel.Patient_Account = this.claimInfo.Patient_Account;
        this.claimViewModel.PatientAccount = this.claimInfo.Patient_Account;
        this.claimViewModel.PracticeCode = this.Gv.currentUser.selectedPractice.PracticeCode;
        this.claimViewModel.claimCharges = this.claimCharges;
        this.claimViewModel.claimPayments = this.paymentChild.claimPaymentModel;

        // this.claimViewModel.PTLReasons = [];
        this.Diag = this.ChildDiagnosis.Diag;
        if (this.Diag[0] != undefined && this.Diag[0].Diagnosis.Code != '')
            this.claimViewModel.ClaimModel.DX_Code1 = this.Diag[0].Diagnosis.Code;
        else
            this.claimViewModel.ClaimModel.DX_Code1 = null;
        if (this.Diag[1] != undefined && this.Diag[1].Diagnosis.Code != '')
            this.claimViewModel.ClaimModel.DX_Code2 = this.Diag[1].Diagnosis.Code;
        else
            this.claimViewModel.ClaimModel.DX_Code2 = null;
        if (this.Diag[2] != undefined && this.Diag[2].Diagnosis.Code != '')
            this.claimViewModel.ClaimModel.DX_Code3 = this.Diag[2].Diagnosis.Code;
        else
            this.claimViewModel.ClaimModel.DX_Code3 = null;
        if (this.Diag[3] != undefined && this.Diag[3].Diagnosis.Code != '')
            this.claimViewModel.ClaimModel.DX_Code4 = this.Diag[3].Diagnosis.Code;
        else
            this.claimViewModel.ClaimModel.DX_Code4 = null;
        if (this.Diag[4] != undefined && this.Diag[4].Diagnosis.Code != '')
            this.claimViewModel.ClaimModel.DX_Code5 = this.Diag[4].Diagnosis.Code;
        else
            this.claimViewModel.ClaimModel.DX_Code5 = null;
        if (this.Diag[5] != undefined && this.Diag[5].Diagnosis.Code != '')
            this.claimViewModel.ClaimModel.DX_Code6 = this.Diag[5].Diagnosis.Code;
        else
            this.claimViewModel.ClaimModel.DX_Code6 = null;
        if (this.Diag[6] != undefined && this.Diag[6].Diagnosis.Code != '')
            this.claimViewModel.ClaimModel.DX_Code7 = this.Diag[6].Diagnosis.Code;
        else
            this.claimViewModel.ClaimModel.DX_Code7 = null;
        if (this.Diag[7] != undefined && this.Diag[7].Diagnosis.Code != '')
            this.claimViewModel.ClaimModel.DX_Code8 = this.Diag[7].Diagnosis.Code;
        else
            this.claimViewModel.ClaimModel.DX_Code8 = null;
        if (this.Diag[8] != undefined && this.Diag[8].Diagnosis.Code != '')
            this.claimViewModel.ClaimModel.DX_Code9 = this.Diag[8].Diagnosis.Code;
        else
            this.claimViewModel.ClaimModel.DX_Code9 = null;
        if (this.Diag[9] != undefined && this.Diag[9].Diagnosis.Code != '')
            this.claimViewModel.ClaimModel.DX_Code10 = this.Diag[9].Diagnosis.Code;
        else
            this.claimViewModel.ClaimModel.DX_Code10 = null;
        if (this.Diag[10] != undefined && this.Diag[10].Diagnosis.Code != '')
            this.claimViewModel.ClaimModel.DX_Code11 = this.Diag[10].Diagnosis.Code;
        else
            this.claimViewModel.ClaimModel.DX_Code11 = null;
        if (this.Diag[11] != undefined && this.Diag[11].Diagnosis.Code != '')
            this.claimViewModel.ClaimModel.DX_Code12 = this.Diag[11].Diagnosis.Code;
        else
            this.claimViewModel.ClaimModel.DX_Code12 = null;



        // this.claimViewModel.ClaimModel.DX_Code1 = (this.ChildDiagnosis.dx1.DiagnoseCode == undefined || this.ChildDiagnosis.dx1.DiagnoseCode == null) ? undefined : $.trim(this.ChildDiagnosis.dx1.DiagnoseCode);
        // this.claimViewModel.ClaimModel.DX_Code2 = (this.ChildDiagnosis.dx2.DiagnoseCode == undefined || this.ChildDiagnosis.dx2.DiagnoseCode == null ? undefined : $.trim(this.ChildDiagnosis.dx2.DiagnoseCode));
        // this.claimViewModel.ClaimModel.DX_Code3 = (this.ChildDiagnosis.dx3.DiagnoseCode == undefined || this.ChildDiagnosis.dx3.DiagnoseCode == null ? undefined : $.trim(this.ChildDiagnosis.dx3.DiagnoseCode));
        // this.claimViewModel.ClaimModel.DX_Code4 = (this.ChildDiagnosis.dx4.DiagnoseCode == undefined || this.ChildDiagnosis.dx4.DiagnoseCode == null ? undefined : $.trim(this.ChildDiagnosis.dx4.DiagnoseCode));
        // this.claimViewModel.ClaimModel.DX_Code5 = (this.ChildDiagnosis.dx5.DiagnoseCode == undefined || this.ChildDiagnosis.dx5.DiagnoseCode == null ? undefined : $.trim(this.ChildDiagnosis.dx5.DiagnoseCode));
        // this.claimViewModel.ClaimModel.DX_Code6 = (this.ChildDiagnosis.dx6.DiagnoseCode == undefined || this.ChildDiagnosis.dx6.DiagnoseCode == null ? undefined : $.trim(this.ChildDiagnosis.dx6.DiagnoseCode));
        // this.claimViewModel.ClaimModel.DX_Code7 = (this.ChildDiagnosis.dx7.DiagnoseCode == undefined || this.ChildDiagnosis.dx7.DiagnoseCode == null ? undefined : $.trim(this.ChildDiagnosis.dx7.DiagnoseCode));
        // this.claimViewModel.ClaimModel.DX_Code8 = (this.ChildDiagnosis.dx8.DiagnoseCode == undefined || this.ChildDiagnosis.dx8.DiagnoseCode == null ? undefined : $.trim(this.ChildDiagnosis.dx8.DiagnoseCode));
        // this.claimViewModel.ClaimModel.DX_Code9 = (this.ChildDiagnosis.dx9.DiagnoseCode == undefined || this.ChildDiagnosis.dx9.DiagnoseCode == null ? undefined : $.trim(this.ChildDiagnosis.dx9.DiagnoseCode));
        // this.claimViewModel.ClaimModel.DX_Code10 = (this.ChildDiagnosis.dx10.DiagnoseCode == undefined || this.ChildDiagnosis.dx10.DiagnoseCode == null ? undefined : $.trim(this.ChildDiagnosis.dx10.DiagnoseCode));
        // this.claimViewModel.ClaimModel.DX_Code11 = (this.ChildDiagnosis.dx11.DiagnoseCode == undefined || this.ChildDiagnosis.dx11.DiagnoseCode == null ? undefined : $.trim(this.ChildDiagnosis.dx11.DiagnoseCode));
        // this.claimViewModel.ClaimModel.DX_Code12 = (this.ChildDiagnosis.dx12.DiagnoseCode == undefined || this.ChildDiagnosis.dx12.DiagnoseCode == null ? undefined : $.trim(this.ChildDiagnosis.dx12.DiagnoseCode));
        //   this.funDXCalculation();

        this.claimViewModel.claimInusrance = this.InsChild.claimInsuranceModel;
        if (!this.canSave()) {
            return;
        }
        if (this.isNewClaim())
            this.claimViewModel.ClaimModel.Is_Corrected = false;
        console.log("CLaimModel value --> ", this.claimViewModel);
        this.claimViewModel.claimCharges.forEach(x => {
            if (x.claimCharges.Start_Time != null && x.claimCharges.Start_Time != undefined) {
                //..below change done by tamour for start time conversion to datetime..
                let timeArr = x.claimCharges.Start_Time.split(":");
                if (timeArr.length === 2) {
                    let hours = parseInt(timeArr[0]);
                    let minutes = parseInt(timeArr[1]);

                    if (!isNaN(hours) && !isNaN(minutes) && hours >= 0 && hours < 24 && minutes >= 0 && minutes < 60) {
                        let dt = new Date();
                        dt.setHours(hours);
                        dt.setMinutes(minutes);
                        dt.setSeconds(0);
                        x.claimCharges.Start_Time = dt.toLocaleString('en-US');
                    }
                }
                //.....
            }
            if (x.claimCharges.Stop_Time != null && x.claimCharges.Stop_Time != undefined) {
                //..below change done by tamour for stop time conversion to datetime..
                let timeArr = x.claimCharges.Stop_Time.split(":");
                if (timeArr.length === 2) {
                    let hours = parseInt(timeArr[0]);
                    let minutes = parseInt(timeArr[1]);

                    if (!isNaN(hours) && !isNaN(minutes) && hours >= 0 && hours < 24 && minutes >= 0 && minutes < 60) {
                        let dt = new Date();
                        dt.setHours(hours);
                        dt.setMinutes(minutes);
                        dt.setSeconds(0);
                        x.claimCharges.Stop_Time = dt.toLocaleString('en-US');
                    }
                }
                //.....
            }
        })

        this.dormantCheck().then(result => {
            if (result) {
                swal('Failed', 'Max statement count is not met.', 'error');
                return false;
            } else {

                debugger;
                this.claimViewModel.claimPayments.forEach(procedure => {
                    debugger;
                    // if(procedure.claimPayments.Payment_Source!== ('P'&&'I'&&'C'&&''))
                    if (procedure.claimPayments.Payment_Source !== 'P' && procedure.claimPayments.Payment_Source !== 'I' && procedure.claimPayments.Payment_Source !== 'C') {


                        if (procedure.claimPayments.Paid_Proc_Code !== null && procedure.claimPayments.Charged_Proc_Code !== null && procedure.claimPayments.Charged_Proc_Code !== undefined) {
                            procedure.claimPayments.Paid_Proc_Code = procedure.claimPayments.Paid_Proc_Code.substring(0, 5);
                        }

                        if (procedure.claimPayments.Charged_Proc_Code !== null && procedure.claimPayments.Charged_Proc_Code !== null && procedure.claimPayments.Charged_Proc_Code !== undefined) {
                            procedure.claimPayments.Charged_Proc_Code = procedure.claimPayments.Charged_Proc_Code.substring(0, 5);
                        }
                    }

                });
debugger;
                if(this.claimViewModel.ClaimModel.Pat_Status=== 'D')
                {
                    this.claimViewModel.ClaimModel.Pri_Status= 'P';
                    this.claimViewModel.ClaimModel.Sec_Status= 'P';
                    this.claimViewModel.ClaimModel.Oth_Status= 'P'  
                }
                this.API.PostData('/Demographic/SaveClaim', this.claimViewModel, (d) => {
                    if (d.Status == "Sucess") {
                        if (this.claimViewModel.ClaimModel.Claim_No == undefined || this.claimViewModel.ClaimModel.Claim_No == null || this.claimViewModel.ClaimModel.Claim_No == 0) {
                            this.ClaimNumber = d.Response;
                            this.claimViewModel.ClaimModel.Claim_No = this.ClaimNumber;
                            this.claimInfo.claimNo = this.ClaimNumber;
                        }
                        this.ClaimNumber = this.claimViewModel.ClaimModel.Claim_No;
                        this.claimInfo.claimNo = this.ClaimNumber;
                        this.refresh();
                        if (this.claimInfo.claimNo > 0)
                            this.getClaimModel();
                        else
                            this.getEmptyClaim();
                        this.refresh();
                        swal('Claim', 'Patient Claim has been saved successfully.', 'success');
                        this.getSetStatus();
                    }
                    else {
                        console.log(d.Response)
                        swal('Failed', d.Status, 'error');
                    }
                })
            }
        });



    }

    updateClaimChargesSequenceNumbers() {
        let deletedClaimCharges = this.claimCharges.filter(c => c.claimCharges.Deleted === true);
        this.claimCharges = this.claimCharges.filter(c => c.claimCharges.Deleted === false || c.claimCharges.Deleted === null).map((cc, index) => ({
            ...cc,
            claimCharges: {
                ...cc.claimCharges,
                Sequence_No: index + 1
            }
        }));
        this.claimCharges = [...this.claimCharges, ...deletedClaimCharges];
    }

    DeleteCPT(ndx: number) {
        if (this.claimCharges[ndx].claimCharges.claim_charges_id == undefined || this.claimCharges[ndx].claimCharges.claim_charges_id == null || this.claimCharges[ndx].claimCharges.claim_charges_id == 0) {
            this.claimCharges.splice(ndx, 1);
            this.updateClaimChargesSequenceNumbers();
            return;
        }
        // By Sohail Ahmed as per Instructions of Ibrahim Bahi : Dated 02/25/2019
        this.claimViewModel.claimPayments = this.paymentChild.claimPaymentModel;
        for (var i = 0; i < this.claimViewModel.claimPayments.length; i++) {
            if (this.claimViewModel.claimPayments[i].claimPayments.Deleted == false)
                if (this.claimCharges[ndx].claimCharges.Procedure_Code == this.claimViewModel.claimPayments[i].claimPayments.Charged_Proc_Code) {
                    swal('Failed', "Can't delete entry because charges are used in payments.", 'error');
                    return;
                }
        }
        if (this.alreadySaveOnce) {
            if ((new Date(this.claimCharges[ndx].claimCharges.Created_Date).getMonth() == new Date().getMonth())
                &&
                (new Date(this.claimCharges[ndx].claimCharges.Created_Date).getFullYear() == new Date().getFullYear())) {
                this.claimCharges[ndx].claimCharges.Deleted = true;
                this.updateClaimChargesSequenceNumbers();
            }
            else if (isNaN(new Date(this.claimCharges[ndx].claimCharges.Created_Date).getMonth())) {
                this.claimCharges[ndx].claimCharges.Deleted = true;
                this.updateClaimChargesSequenceNumbers();
            }
            else {
                swal('Failed', "Cannot delete entry of previous month(s).", 'error');
            }
        }
        else {
            this.claimCharges[ndx].claimCharges.Deleted = true;
            this.updateClaimChargesSequenceNumbers();
        }
    }
    dateMask(event: any) {
        var v = event.target.value;
        if (v.match(/^\d{2}$/) !== null) {
            event.target.value = v + '/';
        } else if (v.match(/^\d{2}\/\d{2}$/) !== null) {
            event.target.value = v + '/';
        }
    }

    AddNewCPT() {
        debugger;

        let AddRow = false;
        let allDeleted = 0;
        let chargesLength = 0;
        if (this.claimCharges != undefined) {
            chargesLength = this.claimCharges.length;
            if (chargesLength > 0) {
                for (var count = 0; count <= chargesLength - 1; count++)
                    if (this.claimCharges[count].claimCharges.Deleted == true)
                        allDeleted++;
            }
        }
        if (chargesLength > 0) {
            if (allDeleted == chargesLength)
                AddRow = true;
        }
        if (chargesLength >= 1) {
            let index = 1;
            for (var chkDel = 1; chkDel <= chargesLength; chkDel++) {
                if (this.claimCharges[chargesLength - chkDel].claimCharges.Deleted && (this.claimCharges[chargesLength - 1].claimCharges.Procedure_Code == undefined || this.claimCharges[chargesLength - 1].claimCharges.Procedure_Code == null)) {
                    index++;
                }
                else
                    chkDel = chargesLength;
            }
            if (index <= chargesLength) {
                if (this.claimCharges[chargesLength - index].claimCharges.Procedure_Code != undefined && this.claimCharges[chargesLength - index].claimCharges.Procedure_Code != "" && this.claimCharges[chargesLength - index].claimCharges.Procedure_Code != null && this.claimCharges[chargesLength - index].claimCharges.Sequence_No != null && this.claimCharges[chargesLength - index].claimCharges.Sequence_No != undefined)
                    AddRow = true;
            }
            else
                AddRow = true;
        }
        else
            AddRow = true;
        if (AddRow) {
            var cc = new ClaimCharges();
        }
        cc.claimCharges.IsRectify = false;
        cc.claimCharges.Include_In_Edi = false;
        cc.claimCharges.Deleted = false;
        cc.claimCharges.POS = 20;

        if (this.Diag[0] && this.Diag[0].Diagnosis && !Common.isNullOrEmpty(this.Diag[0].Diagnosis.Code))
            cc.claimCharges.DX_Pointer1 = 1;
        if (this.Diag[1] && this.Diag[1].Diagnosis && !Common.isNullOrEmpty(this.Diag[1].Diagnosis.Code))
            cc.claimCharges.DX_Pointer2 = 2;
        if (this.Diag[2] && this.Diag[2].Diagnosis && !Common.isNullOrEmpty(this.Diag[2].Diagnosis.Code))
            cc.claimCharges.DX_Pointer3 = 3;
        if (this.Diag[3] && this.Diag[3].Diagnosis && !Common.isNullOrEmpty(this.Diag[3].Diagnosis.Code))
            cc.claimCharges.DX_Pointer4 = 4;

        cc.claimCharges.DOE = moment(new Date()).format("MM/DD/YYYY");
        cc.claimCharges.Dos_From = this.claimDos;
        cc.claimCharges.Dos_To = this.claimDos;
        // as we know that, if we delete any saved claim charges, it will deleted locally.
        // and after deleting any saved claim charges, if user add the new claim charges before saving the deleted in database.
        // in get CPT charges we will get the wrong index of adding new CPT charges.
        // to fix this issue, while adding any new claim charges, we will move the deleted claim charges at the end of array.
        let deletedCharges = this.claimCharges.filter(c => c.claimCharges.Deleted === true);
        let notDeletedCharges = this.claimCharges.filter(c => c.claimCharges.Deleted !== true);
        this.claimCharges = [...notDeletedCharges, cc, ...deletedCharges];


        this.updateClaimChargesSequenceNumbers();
        let count2 = 0;
        this.InsChild.claimInsuranceModel.forEach(
            x => {
                if (x.claimInsurance.Deleted == true) {
                    count2++
                }
            }
        )
        if (this.InsChild.claimInsuranceModel[0].claimInsurance.Deleted == false) {
            count2 = 0;
        }

        if (this.InsChild.claimInsuranceModel.length > 0 && this.InsChild.claimInsuranceModel.length != count2) {

            if (this.InsChild.claimInsuranceModel[count2].InsurancePayerName.includes("Medicaid") || this.InsChild.claimInsuranceModel[count2].InsurancePayerName.includes("Medicaid MCO")) {
                if (this.claimViewModel.BillingPhysiciansList.length > 0) {
                    if (this.claimViewModel.BillingPhysiciansList[0].SPECIALIZATION_CODE == '050' && this.claimViewModel.BillingPhysiciansList[0].provider_State == 'OH') {
                        //  $("#Modifier_Code option[value=SA]").attr('selected', 'selected');

                        this.claimCharges.forEach(x => {
                            x.claimCharges.Modi_Code1 = "SA"
                        })


                    }
                }

            }

        }

    }
    NewRowCharges(event: KeyboardEvent, ndx: number) {
        let claimChargesLength = 0;
        if (event.keyCode == 40) {//down key
            for (var notDel = 0; notDel < this.claimCharges.length; notDel++) {
                if (!this.claimCharges[notDel].claimCharges.Deleted)
                    claimChargesLength++;
            }
            let rowFlag: number = -1;
            var element = $("#procedure-section table tbody tr:visible");
            let p = 0;
            $($(element)[ndx]).find("input").each(function () {
                p++;
                if ($(this).is(":focus")) {
                    return false;
                }
            });
            if (claimChargesLength - 1 > ndx) {
                var input = $($(element)[ndx]).find(":focus").is("input");
                if (input) {
                    $($($(element[ndx + 1]).find("input"))[p - 1]).focus();
                    return;
                }
            }

            for (var i = 0; i < element.length - 1; i++) {
                var hasfocus = $($(element)[i]).find(":focus").length;
                var isInput = $($(element)[i]).find(":focus").is("input");
                if (hasfocus > 0 && isInput) {
                    if (claimChargesLength <= ndx + 1 && (this.claimCharges[ndx].claimCharges.Procedure_Code != null && this.claimCharges[ndx].claimCharges.Procedure_Code != "" && this.claimCharges[ndx].claimCharges.Procedure_Code != undefined && this.claimCharges[ndx].claimCharges.Sequence_No != null && this.claimCharges[ndx].claimCharges.Sequence_No != undefined)) {
                        this.AddNewCPT();
                        rowFlag = i;
                    }
                    else
                        $($($(element[i + 1]).find("input"))[4]).focus();
                }
            }
            if (rowFlag > -1) {
                setTimeout(function () {
                    $($($($("#procedure-section table tbody tr:visible")[rowFlag + 1]).find("input"))[4]).focus();
                }, 200);
            }
        }
        if (event.keyCode == 38) {// up key
            for (var notDel = 0; notDel < this.claimCharges.length; notDel++) {
                if (!this.claimCharges[notDel].claimCharges.Deleted)
                    claimChargesLength++;
            }
            var element = $("#procedure-section table tbody tr:visible");
            let p = 0;
            $($(element)[ndx]).find("input").each(function () {
                p++;
                if ($(this).is(":focus")) {
                    return false;
                }
            });
            if (ndx > 0) {
                var input = $($(element)[ndx]).find(":focus").is("input");
                if (input) {
                    $($($(element[ndx - 1]).find("input"))[p - 1]).focus();
                    return;
                }
            }
            for (var i = 0; i < element.length - 1; i++) {
                var hasfocus = $($(element)[i]).find(":focus").length;
                var isInput = $($(element)[i]).find(":focus").is("input");
                if (hasfocus > 0 && isInput) {
                    $($($(element[i - 1]).find("input"))[4]).focus();
                }
            }
        }
    }
    CPTKeyPressEvent(event: KeyboardEvent, value: any, index: number) {
debugger
        if (value) {

            if (event.shiftKey == false && (event.key == "Enter" || event.key == "Tab")) {
                //to avoid auto fill drug code
                if (this.claimCharges[index].claimCharges.NDCList.length > 0) {
                    this.claimCharges[index].claimCharges.NDCList = [];
                }
                this.getCPTCharges(index).then(() => {
                    if (this.claimCharges[index].claimCharges.NDCList && this.claimCharges[index].claimCharges.NDCList.length > 0) {
                        // this.claimCharges[index].claimCharges.Drug_Code = this.claimCharges[index].claimCharges.NDCList[0].Id;
                        // this.claimCharges[index].Drug_Code = this.claimCharges[index].claimCharges.NDCList[0].Id;
                        this.onChangeDrugCode(index);
                        this.refresh();
                    }
                    // this.claimCharges[index].ClaimCharges.DosFrom = this.claimViewModel.ClaimModel.DOS;
                    // this.claimCharges[index].ClaimCharges.DosTo = this.claimViewModel.ClaimModel.DOS;
                    // //}

                    if (this.Diag[0] && this.Diag[0].Diagnosis && !Common.isNullOrEmpty(this.Diag[0].Diagnosis.Code))
                        this.claimCharges[index].claimCharges.DX_Pointer1 = 1;
                    if (this.Diag[1] && this.Diag[1].Diagnosis && !Common.isNullOrEmpty(this.Diag[1].Diagnosis.Code))
                        this.claimCharges[index].claimCharges.DX_Pointer2 = 2;
                    if (this.Diag[2] && this.Diag[2].Diagnosis && !Common.isNullOrEmpty(this.Diag[2].Diagnosis.Code))
                        this.claimCharges[index].claimCharges.DX_Pointer3 = 3;
                    if (this.Diag[3] && this.Diag[3].Diagnosis && !Common.isNullOrEmpty(this.Diag[3].Diagnosis.Code))
                        this.claimCharges[index].claimCharges.DX_Pointer4 = 4;
                    // this.claimCharges[index].ClaimCharges.Unit = this.daysDiff(this.claimCharges[index].ClaimCharges.DosFrom, this.claimCharges[index].ClaimCharges.DosTo, -1).toString();
                    // this.getCPTCharges(index);
                    // this.getNDC(index);
                }).catch((error) => {
                    console.log("ERROR  ERROR  ", error)
                });

            }
            else if (event.shiftKey && event.key == "Tab") {
                return;
            }
            else if (event.code != "Arrowleft" && event.code != "ArrowUp" && event.code != "ArrowDown" && event.code != "ArrowRight" && event.key != "Shift" && event.code != "Control" && event.code != "Alt" && event.code != "Pause" && event.code != "CapsLock" && event.code != "MetaLeft" && event.code != "MetaRight" && event.code != "NumLock" && event.code != "ScrollLock") {
                //this.claimCharges[index].ClaimCharges.Description = "";
                this.claimCharges[index].Description = "";
                this.claimCharges[index].claimCharges.POS = 0;
                this.claimCharges[index].claimCharges.Modi_Code1 = "";
                this.claimCharges[index].claimCharges.Modi_Code2 = "";
                this.claimCharges[index].claimCharges.Modi_Code3 = "";
                this.claimCharges[index].claimCharges.Modi_Code4 = "";
                this.claimCharges[index].claimCharges.Units = null;
                this.claimCharges[index].claimCharges.Actual_amount = null;
                this.claimCharges[index].claimCharges.Contractual_Amt = null;
                this.claimCharges[index].claimCharges.Include_In_Edi = false;
                this.claimCharges[index].claimCharges.Include_In_Sdf = false;
                this.claimCharges[index].claimCharges.NDC_Qualifier = "";
                this.claimCharges[index].claimCharges.Amount = null;
                this.claimCharges[index].claimCharges.NDCCodeList.length = 0;
                //..below changes done by tamour for Anesthesia Task on 24/08/2023
                this.claimCharges[index].IsAnesthesiaCpt = false;
                this.claimCharges[index].claimCharges.Physical_Modifier = "";
                this.updateClaimChargesProperty(index, 'Start_Time', '');
                this.updateClaimChargesProperty(index, 'Stop_Time', '');
                //..above changes done by tamour for Anesthesia Task on 24/08/2023
            }
        }
    }

    getCPTCharges(index: number) {
debugger
        return new Promise((resolve, reject) => {
            this.claimViewModel.claimInusrance = this.InsChild.claimInsuranceModel;
            // Implemented as per saad requirment.     // Now commented in August build as discussed with Ibrahim Fazal
            // if (this.claimViewModel.ClaimModel.Is_Self_Pay) {
            //     if (this.claimViewModel.claimInusrance == undefined) {
            //         setTimeout(function () {
            //             swal('Failed', "Select Insurance Payer.", 'error');
            //         }, 100);

            //         return;
            //     }
            //     else if (this.claimViewModel.claimInusrance.length == 0) { 
            //         setTimeout(function () {
            //             swal('Failed', "Select Insurance Payer.", 'error');
            //         }, 100);

            //         return;
            //     }
            // }


            this.cPTRequest.IsSelfPay = this.claimViewModel.ClaimModel.Is_Self_Pay == true ? "True" : "False";
            this.cPTRequest.FacilityCode = (this.claimViewModel.ClaimModel.Facility_Code == null || this.claimViewModel.ClaimModel.Facility_Code == undefined).toString() ? "0" : this.claimViewModel.ClaimModel.Facility_Code.toString();
            var insfoundFlag = false;
            this.claimViewModel.claimInusrance = this.InsChild.claimInsuranceModel;

            for (var i = 0; i < this.claimViewModel.claimInusrance.length; i++) {
                if (this.claimViewModel.claimInusrance[i].claimInsurance.Pri_Sec_Oth_Type == "P") {
                    this.cPTRequest.InsuranceID = this.claimViewModel.claimInusrance[i].claimInsurance.Insurance_Id.toString();
                    insfoundFlag = true;
                    break;
                }
            }
            if (!insfoundFlag) {
                for (var i = 0; i < this.claimViewModel.claimInusrance.length; i++) {
                    if (this.claimViewModel.claimInusrance[i].claimInsurance.Pri_Sec_Oth_Type == "S") {
                        this.cPTRequest.InsuranceID = this.claimViewModel.claimInusrance[i].claimInsurance.Insurance_Id.toString();
                        insfoundFlag = true;
                        break;
                    }
                }
                if (!insfoundFlag) {
                    for (var i = 0; i < this.claimViewModel.claimInusrance.length; i++) {
                        if (this.claimViewModel.claimInusrance[i].claimInsurance.Pri_Sec_Oth_Type == "O") {
                            this.cPTRequest.InsuranceID = this.claimViewModel.claimInusrance[i].claimInsurance.Insurance_Id.toString();
                            insfoundFlag = true;
                            break;
                        }
                    }
                }
            }
            this.cPTRequest.ProviderCode = this.billingPhyforFee;
            this.cPTRequest.ProcedureCode = this.claimCharges[index].claimCharges.Procedure_Code;

            if (this.claimViewModel.ClaimModel.Location_Code == undefined || this.claimViewModel.ClaimModel.Location_Code == 0) {
                setTimeout(function () {
                    swal('Failed', "Select Location Code.", 'error');
                }, 100);

                return;
            }

            this.cPTRequest.LocationCode = this.claimViewModel.ClaimModel.Location_Code.toString();
            //..below condition is updated by tamour to resolve the null case check on ModifierCode on api level...
            this.cPTRequest.ModifierCode = this.claimCharges[index].claimCharges.Modi_Code1 == null ? "" : this.claimCharges[index].claimCharges.Modi_Code1;
            this.cPTRequest.FacilityCode = "0";
            this.cPTRequest.PracticeState = "AZ";
            this.cPTRequest.PracticeCode = this.Gv.currentUser.selectedPractice.PracticeCode.toString();
            this.claimCharges[index].Description = "";
            // this.cPTRequest.PracticeState = "";
            // this.cPTRequest.ModifierCode = this.claimCharges[index].ClaimCharges.Mod1 == null ? "" : this.claimCharges[index].ClaimCharges.Mod1;
            // this.
            // this.claimCharges[index].ClaimCharges.ProcedureCode=  "";
            // Chee
            return this.API.PostData('/Demographic/GetProcedureCharges/', this.cPTRequest, (d) => {

                if (d.Response.NDCCodeList.length == 0 && d.Status == "Error") {
                    this.claimCharges[index].claimCharges.Procedure_Code = "";
                    this.claimCharges[index].Description = "";
                    //..below conditions are for Anesthesia Case added by tamour
                    this.claimCharges[index].IsAnesthesiaCpt = false;
                    this.claimCharges[index].claimCharges.Units = 0;
                    this.claimCharges[index].claimCharges.Start_Time = null;
                    this.claimCharges[index].claimCharges.Stop_Time = null;
                    this.claimCharges[index].claimCharges.Physical_Modifier = "";
                    this.claimCharges[index].claimCharges.Amount = '0';
                    this.claimCharges[index].amt = '0';
                    //..above conditions are for Anesthesia Case added by tamour
                    swal('Failed', "Invalid/Deleted CPT.", 'error');
                    return;
                }

                this.chargesList = d;
                this.claimCharges[index].claimCharges.NDCList = this.chargesList.Response.NDCCodeList;
                this.claimCharges[index].claimCharges.Amount = this.chargesList.Response.Charges;
                this.claimCharges[index].amt = this.claimCharges[index].claimCharges.Amount;
                //this.claimCharges[index].amt =this.chargesList.Response.Charges;
                this.claimCharges[index].Description = this.chargesList.Response.Description
                if (this.claimCharges[index].claimCharges.POS == undefined || this.claimCharges[index].claimCharges.POS == null || this.claimCharges[index].claimCharges.POS == 0) {
                    this.claimCharges[index].claimCharges.POS = this.chargesList.Response.POS;
                }
                if (this.claimCharges[index].claimCharges.Amount != "0.00")
                    this.claimCharges[index].claimCharges.Include_In_Edi = true;
                else
                    this.claimCharges[index].claimCharges.Include_In_Edi = false;
                let IsRectified;
                for (var x = 0; x < this.claimCharges.length; x++) {
                    if (this.claimCharges[x].claimCharges.IsRectify) {
                        IsRectified++;
                        let amt = this.claimCharges[x].claimCharges.Actual_amount;
                        for (var y = x + 1; y < this.claimCharges.length; y++) {
                            if (this.claimCharges[y].claimCharges.Actual_amount.toString() == "-" + amt)
                                this.claimCharges[y].claimCharges.Sequence_No = this.claimCharges[x].claimCharges.Sequence_No;
                        }
                    }
                }

                //..This condition is added by Tamour Ali on 14/08/2023, to check if CPT is of Anesthesia Practice., else case old logic will work for other CPTs.
                if (this.chargesList.Response.IsAnesthesiaCpt == true) {
                    //..For Anesthesia default units are coming from database procedure table where for remainig cpt's its calculated of front-end.
                    this.claimCharges[index].IsAnesthesiaCpt = true; //..this is trial condition                   
                    this.claimCharges[index].claimCharges.Units = this.chargesList.Response.DefaultUnits;
                    this.claimCharges[index].claimCharges.Start_Time = null;
                    this.claimCharges[index].claimCharges.Stop_Time = null;
                    this.claimCharges[index].claimCharges.Physical_Modifier = "";

                    this.CPTKeyPressEventUnit(null, this.claimCharges[index].claimCharges.Units.toString(), index, "Anesthesia");
                } else {
                    this.claimCharges[index].IsAnesthesiaCpt = false; //..this is trial condition
                    this.claimCharges[index].claimCharges.Start_Time = null;
                    this.claimCharges[index].claimCharges.Stop_Time = null;
                    this.claimCharges[index].claimCharges.Physical_Modifier = "";
                    this.daysDiff(this.claimCharges[index].claimCharges.Dos_From, this.claimCharges[index].claimCharges.Dos_To, index);
                }

                let max = 0;
                for (var c = 0; c < this.claimCharges.length - 1; c++) {
                    if (!this.claimCharges[c].claimCharges.Deleted)
                        if (this.claimCharges[c].claimCharges.Sequence_No > max)
                            max = this.claimCharges[c].claimCharges.Sequence_No;
                }
                this.refresh();
                if (!this.claimCharges[this.claimCharges.length - 1].claimCharges.IsRectify && !this.claimCharges[this.claimCharges.length - 1].claimCharges.Deleted)
                    this.claimCharges[this.claimCharges.length - 1].claimCharges.Sequence_No = max + 1;

                this.refresh();
                // USER STORY 16 : commented by HAMZA & Date: 08/02/2023
                //      this.checkDuplicateCPT(index);
                return resolve(true);
            });
        })
    }
    addItem(data: any) {
        if (data.claimInsurance.Pri_Sec_Oth_Type == 'P') {
            this.claimForm.get('main.patientStatus').setValue(null);
            this.claimForm.get('main.priStatus').setValue(null);
            this.claimForm.get('main.secStatus').setValue(null);
            this.claimForm.get('main.othStatus').setValue(null);
            if (!data.InsurancePayerName.includes("Medicaid") || !data.InsurancePayerName.includes("Medicaid MCO")) {
                this.claimCharges.forEach(x => {
                    x.claimCharges.Modi_Code1 = ""
                })
            }

        }



    }
    changeEvent(data: any) {
        this.billingPhyforFee = data
        console.log(data)
    }



    verifyDate(date: string): boolean {
        var match = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(date);
        if (!match)
            return false;
        else
            return true;
    }
    CheckPreviousDX(from: number) {
        let hasReturn = false;
        for (var start = from; start > 1; start--) {
            if (!$("#DX0" + start).val()) {
                this.dxNumber = "#DX0" + start;
                return false;
            }
        }
        if (!hasReturn) {
            this.dxNumber = "";
            return true;
        }
    }
    // ValidateDXSequence(): boolean {
    //     this.dxNumber = "";
    //     if ($("#DX012").val())
    //         this.CheckPreviousDX(11);
    //     else if ($("#DX011").val())
    //         this.CheckPreviousDX(10);
    //     else if ($("#DX010").val())
    //         this.CheckPreviousDX(9);
    //     else if ($("#DX09").val())
    //         this.CheckPreviousDX(8);
    //     else if ($("#DX08").val())
    //         this.CheckPreviousDX(7);
    //     else if ($("#DX07").val())
    //         this.CheckPreviousDX(6);
    //     else if ($("#DX06").val())
    //         this.CheckPreviousDX(5);
    //     else if ($("#DX05").val())
    //         this.CheckPreviousDX(4);
    //     else if ($("#DX04").val())
    //         this.CheckPreviousDX(3);
    //     else if ($("#DX03").val())
    //         this.CheckPreviousDX(2);
    //     else if ($("#DX02").val()) {
    //         if (!$("#DX01").val()) {
    //             this.dxNumber = "#DX01";
    //             return false;
    //         }
    //         else
    //             return true;
    //     }
    //     else if (!$("#DX01").val()) {
    //         this.dxNumber = "At least one DX is required";
    //         return false;
    //     }
    //     else {
    //         this.dxNumber = "";
    //         return true;
    //     }

    // }


    checkDuplicateCPT(index: number) {

        if (!this.claimCharges[index].claimCharges.Procedure_Code) {
            if (!this.claimCharges[index].Description) {
                return;
            }
            return;
        }
        else {
            // USER STORY 16 : Updated by HAMZA & Date: 08/02/2023
            // if(this.Gv.currentUser.selectedPractice.PracticeCode != 35510227  ){

            //     let notDeletedCharges = this.claimCharges.filter(c => c.claimCharges.Deleted !== true);
            //     for (var i = 0; i < notDeletedCharges.length; i++) {
            //           

            //         if (notDeletedCharges[i].claimCharges.Dos_From == notDeletedCharges[index].claimCharges.Dos_From
            //             && notDeletedCharges[i].claimCharges.Dos_To == notDeletedCharges[index].claimCharges.Dos_To
            //             && notDeletedCharges[i].claimCharges.Units == notDeletedCharges[index].claimCharges.Units
            //             && notDeletedCharges[i].claimCharges.Procedure_Code == notDeletedCharges[index].claimCharges.Procedure_Code
            //             && notDeletedCharges[i].claimCharges.Modi_Code1 == notDeletedCharges[index].claimCharges.Modi_Code1
            //             && notDeletedCharges[i].claimCharges.Modi_Code2 == notDeletedCharges[index].claimCharges.Modi_Code2
            //             && notDeletedCharges[i].claimCharges.Modi_Code3 == notDeletedCharges[index].claimCharges.Modi_Code3
            //             && notDeletedCharges[i].claimCharges.Modi_Code4 == notDeletedCharges[index].claimCharges.Modi_Code4
            //             && i != index) {
            //             swal('Failed', "Duplicate CPT.", 'error');
            //             // notDeletedCharges[index].claimCharges.Procedure_Code = null;
            //             // notDeletedCharges[index].claimCharges.Units = 0;
            //             // notDeletedCharges[index].claimCharges.Amount = "";
            //             // notDeletedCharges[index].amt = "0";
            //             // notDeletedCharges[index].claimCharges.Modi_Code1 = null;
            //             return true;
            //         }
            //     return ;
            // }



            let notDeletedCharges = this.claimCharges.filter(c => c.claimCharges.Deleted !== true);
            for (let i = 0; i < notDeletedCharges.length; i++) {
                for (let index = i + 1; index < notDeletedCharges.length; index++) {
                    if (areClaimChargesEqual(notDeletedCharges[i].claimCharges, notDeletedCharges[index].claimCharges)) {
                        swal('Failed', 'Duplicate CPT.', 'error');
                        // Perform any additional actions you need for handling duplicates.
                        return true;
                    }
                }
            }

            // Helper function to check if two values are equal, considering null and empty string as equal
            function isEqual(value1, value2) {
                return (value1 === null || value1 === '') && (value2 === null || value2 === '') || value1 === value2;
            }
            // Helper function to check if two claimCharges objects are equal
            function areClaimChargesEqual(claimCharge1, claimCharge2) {
                return isEqual(claimCharge1.Dos_From, claimCharge2.Dos_From)
                    && isEqual(claimCharge1.Dos_To, claimCharge2.Dos_To)
                    && isEqual(claimCharge1.Units, claimCharge2.Units)
                    && isEqual(claimCharge1.Procedure_Code, claimCharge2.Procedure_Code)
                    && isEqual(claimCharge1.Modi_Code1, claimCharge2.Modi_Code1)
                    && isEqual(claimCharge1.Modi_Code2, claimCharge2.Modi_Code2)
                    && isEqual(claimCharge1.Modi_Code3, claimCharge2.Modi_Code3)
                    && isEqual(claimCharge1.Modi_Code4, claimCharge2.Modi_Code4);
            }
            //}
        }
        return;
    }

    //  Added below function by HAMZA & Date: 08/02/2023 & USER STORY 16 : CPT Duplication issue
    checkCPTlines(): boolean {
        let notDeletedCharges = this.claimCharges.filter(c => c.claimCharges.Deleted !== true);
        if (notDeletedCharges.length > 1) {
            for (var index = 0; index < notDeletedCharges.length; index++) {
                if (this.checkDuplicateCPT(index)) {
                    swal('Failed', "Duplicate CPT.", 'error');
                    return false;
                }
            }
        }
        return true;
    }
// on new claim handle the patient status on D
    handlePatientStatusD(event) {
        this.updatedvalue=event.target.value;
        debugger
        if(event.target.value == 'D'){

            if 
            ((this.claimViewModel.ClaimModel.Pri_Status == 'N' || this.claimViewModel.ClaimModel.Pri_Status == 'B' || this.claimViewModel.ClaimModel.Pri_Status == 'R' ) ||
            (this.claimViewModel.ClaimModel.Sec_Status == 'N' || this.claimViewModel.ClaimModel.Sec_Status == 'B' || this.claimViewModel.ClaimModel.Sec_Status == 'R') ||
            (this.claimViewModel.ClaimModel.Oth_Status == 'N' || this.claimViewModel.ClaimModel.Oth_Status == 'B' || this.claimViewModel.ClaimModel.Oth_Status == 'R'))
        {
                swal('Failed', 'Pending Insurance Due, Please Check Status.', 'error');
               // this.claimViewModel.ClaimModel.Pat_Status = 'W';
                return ;  
            }

            else if (this.claimViewModel.ClaimModel.Claim_No === null || this.claimViewModel.ClaimModel.Claim_No === undefined || this.claimViewModel.ClaimModel.Claim_No === 0) {
                swal('Failed','Max statement count is not met.', 'error');
                //this.claimViewModel.ClaimModel.Pat_Status = '';
                return ;
            }
            else
            {
                return true;
            }
        }
        // Continue with other logic for Patient Status "D" if needed
    }  
    dormantCheck(): Promise<boolean> {
        debugger;
        return new Promise<boolean>((resolve, reject) => {
            const practice_code = this.Gv.currentUser.selectedPractice.PracticeCode;
            // const practice_code = this.claimViewModel.ClaimModel.practice_code;
            const claim_no = this.claimViewModel.ClaimModel.Claim_No;

            this.getPatientStatementReport(claim_no).subscribe(
                (d: any) => {

                    // if(d.Response.length==0)
                    // {
                    //     if(this.claimViewModel.ClaimModel.Pat_Status=='D')
                    //     {
                    //     resolve(true);
                    //     return false;
                    // }
                    // }
                    debugger;
                    if (d && d.Response && d.Response.length > 0) {
                        const specificData = d.Response.filter(item => item.PRACTICE_CODE === practice_code);
                        if (specificData.length > 0) {
                            const statementData = specificData.find(item => item.CLAIM_NO === claim_no);
                            if (statementData) {
                                const statement_count = statementData.COUNT_STATEMENT;
                                if (this.claimViewModel.ClaimModel.Pat_Status === 'D' && this.claimViewModel.ClaimModel.Amt_Due > 0) {
                                    if (statement_count < 3) {
                                        resolve(true); // Return true to indicate a failure condition
                                    } else {
                                        resolve(false); // Return false to indicate a successful condition
                                    }
                                } else {
                                    resolve(false); // Return false for other conditions
                                }
                            }
                        }
                    }
                    else if(d.Response.length==0)
                    {
                        if(this.claimViewModel.ClaimModel.Pat_Status=='D')
                        {
                        resolve(true);
                        return false;
                    }
                    }
                    // Handle other cases and return accordingly
                    resolve(false);
                },
                error => {
                    console.error("Error fetching data:", error);
                    resolve(false); // Handle the error and return false
                }
            );
        });
    }



    canSave(): boolean {

        if(this.checkInputValue()==false)
        {
            debugger;
            return false;
        }
        // debugger
        // this.dormantCheck().then(result => {
        //     if (result) {
        //         swal('Failed', 'Max statement count is not met.', 'error');
        //         return false;
        //     }
        // });
        // if (this.dormantCheck()) {
        //     debugger
        //     swal('Failed', 'Max statement count is not met.', 'error');
        //     return false;
        // }

        if(this.updatedvalue=='D')
        {
        const event = { target: { value: this.updatedvalue } };
        if(!this.handlePatientStatusD(event))
        {
        return false;
        }
    }


        //  Added below code by HAMZA & Date: 08/02/2023 & USER STORY 16 : CPT Duplication issue
        if (!this.checkCPTlines()) {
            return false;
        }

        // for (let count = 0; count < this.claimCharges.length; count++) {
            for (let count = 0; count < this.claimViewModel.claimCharges.length; count++) {
debugger;
            this.claimCharges[count].claimCharges.Procedure_Code=this.claimCharges[count].claimCharges.Procedure_Code.toUpperCase();
          //  this.procedureCode = this.claimViewModel.claimCharges[count].claimCharges.Procedure_Code == '0275T' 
            if ((this.claimCharges[count].claimCharges.Procedure_Code == '0275T' || this.claimCharges[count].claimCharges.Procedure_Code == '0275t') && this.claimViewModel.claimCharges[count].claimCharges.Deleted==false &&
                (this.claimViewModel.ClaimModel.Additional_Claim_Info == null ||
                    this.claimViewModel.ClaimModel.Additional_Claim_Info.trim() === '')) {
                this.isValidationError = true;
                break;
            }
        }
        // for (let count = 0; count < this.claimCharges.length; count++) {
            for (let count = 0; count < this.claimViewModel.claimCharges.length; count++) {
debugger;
            if (this.isValidationError = true && this.claimViewModel.claimCharges[count].claimCharges.Procedure_Code == '0275T' && this.claimViewModel.claimCharges[count].claimCharges.Deleted==false &&
                (this.claimViewModel.ClaimModel.Additional_Claim_Info == null ||
                    this.claimViewModel.ClaimModel.Additional_Claim_Info.trim() === '')) {
                swal('Failed', 'Additional Claim info cannot be empty when CPT code is 0275T, please enter additional info (NCT).', 'error')
                    .then((result) => {
                        if (result) {
                            const additionalClaimInfoElement = document.getElementById("additionalClaimInfo");
                            if (additionalClaimInfoElement) {
                                additionalClaimInfoElement.focus();
                                window.scrollTo({
                                    top: additionalClaimInfoElement.offsetTop,
                                    behavior: 'smooth',
                                });
                            }
                        }
                    });
                return;
            }
        }
        if (this.claimViewModel.ClaimModel.Is_Draft == true) {
            return true;
        }

        let hasCPT = false;
        let hasDescripction = true;
        let validFromDate = false;
        let validToDate = false;
        let deletedInsurance = 0;
        let chargesLength = this.claimViewModel.claimInusrance.length;
        if (chargesLength > 0) {
            for (var count = 0; count < chargesLength; count++) {
                if (this.claimViewModel.claimInusrance[count].claimInsurance.Deleted) {
                    deletedInsurance++;
                }
            }
        }
        console.log(this.claimViewModel.ClaimModel.PTL_Status)
        for (let count = 0; count < this.claimViewModel.claimPayments.length; count++) {

            if(
                !(this.claimViewModel.claimPayments[count].claimPayments.Payment_Source=='I') &&
                !(this.claimViewModel.claimPayments[count].claimPayments.Payment_Source=='Q') &&
                !(this.claimViewModel.claimPayments[count].claimPayments.Payment_Source=='P') &&
                !(this.claimViewModel.claimPayments[count].claimPayments.Payment_Source=='C')
                )
            {
                debugger
                if (this.claimViewModel.claimPayments[count].claimPayments.Paid_Proc_Code==null ||
                    this.claimViewModel.claimPayments[count].claimPayments.ENTERED_FROM==""
                    ) {
                    swal('Failed', "Claim can not be saved without the mandatory payment information, please fill the 	required fields", 'error');
                    return false;
                }

            }
            if (!this.claimViewModel.claimPayments[count].claimPayments.Payment_Type) {
                swal('Failed', "Claim can not be saved without the mandatory payment information, please fill the 	required fields", 'error');
                return false;
            }


        }
        if (!this.claimViewModel.ClaimModel.PTL_Status) {
            // if (this.claimViewModel.ClaimModel.Delay_Reason_Code == null || this.claimViewModel.ClaimModel.Delay_Reason_Code == undefined || this.claimViewModel.ClaimModel.Delay_Reason_Code == "") {
            //     swal('Failed', "Select PTL Reasons.", 'error');
            //     return false;
            // }


            if (!this.verifyDate(this.claimViewModel.ClaimModel.DOS)) {
                swal('Failed', "Invalid DOS (MM/DD/YYYY).", 'error');
                return false;
            }
            if (!this.verifyDate(this.claimViewModel.ClaimModel.Scan_Date)) {
                swal('Failed', "Invalid Scan Date  (MM/DD/YYYY).", 'error');
                return false;
            }
            if (this.claimViewModel.ClaimModel.DOS == undefined || this.claimViewModel.ClaimModel.DOS == null || this.claimViewModel.ClaimModel.DOS == "") {
                swal('Failed', "Enter DOS.", 'error');
                return false;
            }
            var bit = false
            let counttheins: number = 0;
            this.claimViewModel.claimInusrance.forEach(x => {
                if (x.claimInsurance.Deleted == true) {
                    counttheins++
                }
            })
            if (this.InsChild.claimInsuranceModel.length == counttheins) {
                bit = true;
            }

            if (this.claimViewModel.ClaimModel.Is_Self_Pay != true && (bit) && !this.claimViewModel.ClaimModel.PTL_Status) {
                swal('Failed', "Either selfpay should be checked or there should be atleast one insurance.", 'error');
                return false;
            }
            if (this.claimViewModel.ClaimModel.Location_Code == undefined || this.claimViewModel.ClaimModel.Location_Code == null || this.claimViewModel.ClaimModel.Location_Code.toString() == "" || this.claimViewModel.ClaimModel.Location_Code == 0) {
                swal('Failed', "Select Location.", 'error');
                return false;
            }
            if (this.claimViewModel.ClaimModel.Billing_Physician == undefined || this.claimViewModel.ClaimModel.Billing_Physician == null || this.claimViewModel.ClaimModel.Billing_Physician.toString() == "" || this.claimViewModel.ClaimModel.Billing_Physician == 0) {
                swal('Failed', "Select Billing Physician.", 'error');
                return false;
            }
            if (this.claimViewModel.ClaimModel.Attending_Physician == undefined || this.claimViewModel.ClaimModel.Attending_Physician == null || this.claimViewModel.ClaimModel.Attending_Physician.toString() == "" || this.claimViewModel.ClaimModel.Attending_Physician == 0) {
                swal('Failed', "Select Rendering Physician.", 'error');
                return false;
            }
            if (!this.claimViewModel.ClaimModel.Hospital_From == null && !this.verifyDate(this.claimViewModel.ClaimModel.Hospital_From)) {
                swal('Failed', "Invalid From Date (MM/DD/YYYY).", 'error');
                return false;
            }
            if (!this.claimViewModel.ClaimModel.Hospital_To == null && !this.verifyDate(this.claimViewModel.ClaimModel.Hospital_To)) {
                swal('Failed', "Invalid To Date (MM/DD/YYYY).", 'error');
                return false;
            }
            if (this.claimViewModel.ClaimModel.Facility_Code != undefined || this.claimViewModel.ClaimModel.Facility_Code != null || this.claimViewModel.ClaimModel.Facility_Code > 0) {
                if (this.claimViewModel.ClaimModel.Hospital_From == null) {
                    swal('Failed', "In case of Facility selected enter From Date", 'error');
                    return false;
                }
                if (this.claimViewModel.ClaimModel.Hospital_To == null) {
                    swal('Failed', "In case of Facility selected enter To Date", 'error');
                    return false;
                }
            }
            if (new Date(this.claimViewModel.ClaimModel.Hospital_To) < new Date(this.claimViewModel.ClaimModel.Hospital_From)) {
                swal('Failed', "From Date Should Be Less Than To Date.", 'error');
                return false;
            }
            // if ($("#hfrom input").val() && !$("#hto input").val()) {
            //     this.showErrorPopup('Enter To Date.', 'Hospital Information');
            //     return false;
            // }
            // if (!$("#hfrom input").val() && $("#hto input").val()) {
            //     this.showErrorPopup('Enter From Date.', 'Hospital Information');
            //     return false;
            // }

            //this.ValidateDXSequence();
            this.dxValidation();
            if (this.dxNumber == "At least one DX is required") {
                swal('Failed', "Atleast one DX is required.", 'error');
                return false;
            }
            else if (this.dxNumber != "" && this.dxNumber != undefined) {
                swal('Failed', "Enter the Diagnosis Code serial wise.", 'error');
                this.dxNumber = "";
                return false;
            }

            let claimIns = 0;
            let flagPri = 0;
            let flagSec = 0;
            let flagOth = 0;
            claimIns = this.claimViewModel.claimInusrance.length;
            if (claimIns > 0) {
                let isPri = "false";
                let allDeleted = 0;
                for (var v = 0; v < claimIns; v++) {
                    if (!this.claimViewModel.claimInusrance[v].claimInsurance.Deleted) {
                        if (this.claimViewModel.claimInusrance[v].claimInsurance.Pri_Sec_Oth_Type == "P")
                            flagPri++;
                        else if (this.claimViewModel.claimInusrance[v].claimInsurance.Pri_Sec_Oth_Type == "S")
                            flagSec++;
                        else
                            flagOth++;
                    }
                    if (this.claimViewModel.claimInusrance[v].claimInsurance.Pri_Sec_Oth_Type == "P" && !this.claimViewModel.claimInusrance[v].claimInsurance.Deleted) {
                        isPri = "true";
                        //    this.claim.PatientStatus = "W";
                    }
                }
                for (var v = 0; v < claimIns; v++) {
                    if (this.claimViewModel.claimInusrance[v].claimInsurance.Deleted)
                        allDeleted++;
                }
                if (isPri == "false" && allDeleted != claimIns) {
                    swal('Failed', "Select a Primary Insurance before selecting Secondary or Other Insurance", 'error');
                    return false;
                }
                if (flagPri > 1 || flagSec > 1 || flagOth > 1) {
                    swal('Failed', "Primary, Secondary or Other Insurance is selected more than once.", 'error');
                    return false;
                }
            }
            for (var i = 0; i < claimIns; i++) {
                if (this.claimViewModel.claimInusrance[i].claimInsurance.Deleted)
                    continue;
                if (this.claimViewModel.claimInusrance[i].InsurancePayerName == null || this.claimViewModel.claimInusrance[i].InsurancePayerName == "" || this.claimViewModel.claimInusrance[i].InsurancePayerName == undefined) {
                    swal('Failed', "Select Payer.", 'error');
                    return false;
                }
                if (this.claimViewModel.claimInusrance[i].claimInsurance.Pri_Sec_Oth_Type == null || this.claimViewModel.claimInusrance[i].claimInsurance.Pri_Sec_Oth_Type == "" || this.claimViewModel.claimInusrance[i].claimInsurance.Pri_Sec_Oth_Type == undefined) {
                    swal('Failed', "Select Ins.Mode for Insurance.", 'error');
                    return false;
                }
                if (this.claimViewModel.claimInusrance[i].claimInsurance.Policy_Number == null || this.claimViewModel.claimInusrance[i].claimInsurance.Policy_Number == "" || this.claimViewModel.claimInusrance[i].claimInsurance.Policy_Number == undefined) {
                    swal('Failed', "Enter Policy # for Insurance " + this.claimViewModel.claimInusrance[i].InsurancePayerName + "", 'error');
                    return false;
                }
                if (!Common.isNullOrEmpty(this.claimViewModel.claimInusrance[i].claimInsurance.Relationship)) {
                    if ((this.claimViewModel.claimInusrance[i].claimInsurance.Relationship != "7" && Common.isNullOrEmpty(this.claimViewModel.claimInusrance[i].claimInsurance.Subscriber))) {
                        swal('Failed', "Select Subscriber for insurance " + this.claimViewModel.claimInusrance[i].InsurancePayerName + " .", 'error');
                        return false;
                    }
                } else {
                    swal('Failed', "Select Relationship for insurance " + this.claimViewModel.claimInusrance[i].InsurancePayerName + " .", 'error');
                    return false;
                }
                if (this.claimViewModel.claimInusrance[i].claimInsurance.Corrected_Claim == true && (this.claimViewModel.claimInusrance[i].claimInsurance.ICN == undefined || this.claimViewModel.claimInusrance[i].claimInsurance.ICN == null || this.claimViewModel.claimInusrance[i].claimInsurance.ICN.length < 4)) {
                    swal('Failed', "Enter ICN code for Insurance " + this.claimViewModel.claimInusrance[i].InsurancePayerName + "", 'error');
                    return false;
                }
            }
            if (this.claimViewModel.claimCharges.length == 0) {
                swal('Failed', "Atleast one CPT is required.", 'error');
                return false;
            }
            if (this.claimCharges.length > 0) {
                for (var count = 0; count < this.claimCharges.length; count++) {
                    if (this.claimCharges[count].claimCharges.Deleted != true) {
                        hasCPT = true
                        let dos = new Date(this.claimViewModel.ClaimModel.DOS);
                        let dosFrom = new Date(this.claimCharges[count].claimCharges.Dos_From);
                        let dosTo = new Date(this.claimCharges[count].claimCharges.Dos_From);
                        if ((this.claimCharges[count].claimCharges.Dos_From) && (dosFrom >= dos))
                            validFromDate = true;
                        else {
                            validFromDate = false;
                            swal('Validation', 'From Date cannot be empty or less than DOS', 'warning');
                            return false;
                        }
                        if ((this.claimCharges[count].claimCharges.Dos_To) && (dosTo >= dosFrom))
                            validToDate = true;
                        else {
                            validToDate = false;
                            swal('Validation', 'To Date cannot be empty or less than From Date', 'warning');
                            return false;
                        }

                        //  if (this.claimCharges[count].ClaimCharges.Description == undefined || this.claimCharges[count].ClaimCharges.Description == "" || this.claimCharges[count].ClaimCharges.Description == null) {
                        //  hasDescripction = false;
                        // }
                        if (this.claimCharges[count].Description == undefined || this.claimCharges[count].Description == "" || this.claimCharges[count].Description == null) {
                            hasDescripction = false;
                        }

                    }
                    if (this.claimCharges[count].claimCharges.Deleted == false && (this.claimCharges[count].claimCharges.Procedure_Code == undefined || this.claimCharges[count].claimCharges.Procedure_Code == "" || this.claimCharges[count].claimCharges.Procedure_Code == null)) {
                        swal('Failed', "Enter CPT code.", 'error');
                        return false;
                    }

                    if (this.claimCharges[count].claimCharges.Deleted == false && (this.claimCharges[count].claimCharges.POS == undefined || this.claimCharges[count].claimCharges.POS == null)) {
                        swal('Failed', "Select Place of Service.", 'error');
                        return false;
                    }

                    if (this.claimCharges[count].IsAnesthesiaCpt == true) {
                        //..This validation is added by Tamour Ali on 14/08/2023 for Physica Modifier and Start/Stop Time fields if Cpt is Anesthesia based.
                        if (this.claimCharges[count].claimCharges.Physical_Modifier === null || this.claimCharges[count].claimCharges.Physical_Modifier === "") {
                            swal('Required', 'Physical Status Modifier for CPT "' + this.claimCharges[count].claimCharges.Procedure_Code + '" Charges is required!', 'error');
                            return false;
                        }
                        if (this.claimCharges[count].claimCharges.Start_Time === null || this.claimCharges[count].claimCharges.Start_Time === "") {
                            swal('Required', 'Start Time for CPT "' + this.claimCharges[count].claimCharges.Procedure_Code + '" Charges is required!', 'error');
                            return false;
                        }
                        if (this.claimCharges[count].claimCharges.Stop_Time === null || this.claimCharges[count].claimCharges.Stop_Time === "") {
                            swal('Required', 'Stop Time for CPT "' + this.claimCharges[count].claimCharges.Procedure_Code + '" Charges is required!', 'error');
                            return false;
                        }
                    }
                    // if((this.claimCharges[count].claimCharges.Deleted == false || this.claimCharges[count].claimCharges.Deleted == null) && (this.claimCharges[count].claimCharges.Start_Time != undefined || this.claimCharges[count].claimCharges.Start_Time !=null) ){

                    //      let timies = this.claimCharges[count].claimCharges.Start_Time.split("");
                    //      let newTime=timies[0] + timies[1] + ":"+timies[2]+ timies[3]
                    //     var timeArr:any =newTime.split(":");

                    //     let dt = new Date();
                    //     dt.setHours(timeArr[0])
                    //     dt.setMinutes(timeArr[1])
                    //     dt.setSeconds(0);
                    //     this.claimCharges[count].claimCharges.Start_Time=dt.toLocaleString('en-US');
                    // }
                    // if((this.claimCharges[count].claimCharges.Deleted == false || this.claimCharges[count].claimCharges.Deleted == null) && (this.claimCharges[count].claimCharges.Stop_Time != undefined || this.claimCharges[count].claimCharges.Stop_Time !=null) ){
                    //     let timies = this.claimCharges[count].claimCharges.Stop_Time.split("");
                    //      let newTime=timies[0] + timies[1] + ":"+timies[2]+ timies[3]
                    //     var timeArr:any =newTime.split(":");

                    //     let dt = new Date();
                    //     dt.setHours(timeArr[0])
                    //     dt.setMinutes(timeArr[1])
                    //     dt.setSeconds(0);
                    //     this.claimCharges[count].claimCharges.Stop_Time=dt.toLocaleString('en-US');
                    // }

                }
                if (!hasCPT) {
                    swal('Failed', "Atleast one CPT is required.", 'error');
                    return false;
                }
                if (!validFromDate) {
                    swal('Failed', "From Date must be equal or greater than DOS.", 'error');
                    return false;
                }
                if (!validToDate) {
                    swal('Failed', "To Date must be equal or greater than From Date.", 'error');
                    return false;
                }
                if (!hasDescripction) {
                    swal('Failed', "Invalid CPT.", 'error');
                    return false;
                }

                if (this.claimViewModel.ClaimModel.Is_Self_Pay != true) {
                    for (var i = 0; i < this.claimViewModel.claimInusrance.length; i++) {

                        if (this.claimViewModel.claimInusrance[i].claimInsurance.Pri_Sec_Oth_Type == "P") {
                            if (this.claimViewModel.ClaimModel.Pri_Status == undefined || this.claimViewModel.ClaimModel.Pri_Status == "" || this.claimViewModel.ClaimModel.Pri_Status == null) {
                                swal('Failed', "Please set Pri. Insurance Status.", 'error');
                                return false;

                            }

                        } else if (this.claimViewModel.claimInusrance[i].claimInsurance.Pri_Sec_Oth_Type == "S") {
                            if (this.claimViewModel.ClaimModel.Sec_Status == undefined || this.claimViewModel.ClaimModel.Sec_Status == "" || this.claimViewModel.ClaimModel.Sec_Status == null) {
                                swal('Failed', "Please set Sec. Insurance Status.", 'error');
                                return false;

                            }

                        } else if (this.claimViewModel.claimInusrance[i].claimInsurance.Pri_Sec_Oth_Type == "O") {
                            if (this.claimViewModel.ClaimModel.Oth_Status == undefined || this.claimViewModel.ClaimModel.Oth_Status == "" || this.claimViewModel.ClaimModel.Oth_Status == null) {
                                swal('Failed', "Please set Oth. Insurance Status.", 'error');
                                return false;

                            }

                        }
                    }
                }

                if (this.claimViewModel.claimPayments != undefined) {
                    for (var i = 0; i < this.claimViewModel.claimPayments.length; i++) {

                        // if (this.claimViewModel.claimPayments[i].claimPayments.Sequence_No) {
                        //     if ((!this.claimViewModel.claimPayments[i].claimPayments.Amount_Paid) || (!this.claimViewModel.claimPayments[i].claimPayments.Amount_Approved)) {
                        //         swal('Failed', "Amount paid and Amount Approved can't be null", 'error');
                        //         return false;
                        //     }
                        // }

                        if (this.claimViewModel.claimPayments[i].claimPayments.Reject_Amount > 0) {
                            if (this.claimViewModel.claimPayments[i].claimPayments.Reject_Type == undefined || this.claimViewModel.claimPayments[i].claimPayments.Reject_Type == null || this.claimViewModel.claimPayments[i].claimPayments.Reject_Type == "") {
                                swal('Failed', "Please enter Payment Rejection Type.", 'error');
                                return false;
                            }
                        }


                        //console.log(this.claimViewModel.claimPayments[i].claimPayments.Payment_Source);
                        if (this.claimViewModel.claimPayments[i].claimPayments.Payment_Source == "1" && this.claimViewModel.claimPayments[i].claimPayments.Reject_Amount > 0) {
                            if (this.claimViewModel.ClaimModel.Pri_Status == "N") {
                                swal('Failed', "Please set Pri. Insurance Status.", 'error');
                                return false;
                            }

                        }
                        else if (this.claimViewModel.claimPayments[i].claimPayments.Payment_Source == "2" && this.claimViewModel.claimPayments[i].claimPayments.Reject_Amount > 0) {
                            if (this.claimViewModel.ClaimModel.Sec_Status == "N") {
                                swal('Failed', "Please set Sec. Insurance Status.", 'error');
                                return false;
                            }

                        }
                        else if (this.claimViewModel.claimPayments[i].claimPayments.Payment_Source == "3" && this.claimViewModel.claimPayments[i].claimPayments.Reject_Amount > 0) {
                            if (this.claimViewModel.ClaimModel.Oth_Status == "N") {
                                swal('Failed', "Please set Other. Insurance Status.", 'error');
                                return false;
                            }

                        }
                        else if (this.claimViewModel.claimPayments[i].claimPayments.Payment_Source == "P") {
                            if (this.claimViewModel.ClaimModel.Pat_Status == "N") {
                                swal('Failed', "Please set Patient Status.", 'error');
                                return false;
                            }

                        }
                        // Bug: ID=466

                        if (this.claimViewModel.claimPayments[i].claimPayments.Amount_Approved == null) {
                            this.claimViewModel.claimPayments[i].claimPayments.Amount_Approved = 0;
                        }
                        if (this.claimViewModel.claimPayments[i].claimPayments.Amount_Paid == null) {
                            this.claimViewModel.claimPayments[i].claimPayments.Amount_Paid = 0;
                        }
                        if (this.claimViewModel.claimPayments[i].claimPayments.Amount_Adjusted == "0.00") {
                            this.claimViewModel.claimPayments[i].claimPayments.Amount_Adjusted = "0";
                        }

                        let matchwithpervious: boolean = false;
                        this.claimviewmodel_default.claimPayments.forEach(x => {

                            if ((x.claimPayments.claim_payments_id == this.claimViewModel.claimPayments[i].claimPayments.claim_payments_id)) {
                                if ((x.claimPayments.Amount_Paid == this.claimViewModel.claimPayments[i].claimPayments.Amount_Paid) && (x.claimPayments.Amount_Approved == this.claimViewModel.claimPayments[i].claimPayments.Amount_Approved) && (x.claimPayments.Amount_Adjusted == this.claimViewModel.claimPayments[i].claimPayments.Amount_Adjusted)) {
                                    matchwithpervious = true;
                                }
                            }
                        })
                        if (this.claimViewModel.claimPayments[i].claimPayments.Amount_Adjusted == "" || this.claimViewModel.claimPayments[i].claimPayments.Amount_Adjusted == null && this.claimViewModel.claimPayments[i].claimPayments.Amount_Adjusted == "0"
                            && this.claimViewModel.claimPayments[i].claimPayments.Amount_Approved == 0
                            && this.claimViewModel.claimPayments[i].claimPayments.Amount_Paid == 0
                        ) {
                            debugger
                            swal('Failed', "Amount Paid / Amount Adjusted / Amount Approved can't be null.", 'error');
                            return false;
                        }


                    }

                }
            }
        }
        return true;
    }

    validateDate(fromDate: string, toDate: string, index: number) {
        if (fromDate) {
            if (this.validateD(fromDate)) {
                if (new Date(fromDate) > new Date(toDate)) {
                    swal('Validation', 'From Date cannot be greater than To Date', 'warning');
                    this.claimCharges[index].claimCharges.Dos_From = '';
                }
            }
            else {
                swal('Failed', "Invalid Date format.", 'error');
                this.claimCharges[index].claimCharges.Dos_From = '';
            }
        }
    }

    checkToDate(fromDate: string, toDate: string, index: number) {
        if (toDate) {
            if (this.validateD(toDate)) {
                this.daysDiff(fromDate, toDate, index);
                if (new Date(fromDate) > new Date(toDate)) {
                    swal('Validation', 'To Date cannot be less than From Date', 'warning');
                    this.claimCharges[index].claimCharges.Dos_To = '';
                }
            }
            else {
                swal('Failed', "Invalid Date format.", 'error');
                this.claimCharges[index].claimCharges.Dos_To = '';
            }
        }
    }

    validateDateFormat(dt: string, Type: string, ndx: number, event: KeyboardEvent = null) {
        if (event.code == "Backspace" || event.code == "Delete")
            return;
        if (dt == undefined || dt == null)
            return;

        if (dt.length == 2 || dt.length == 5) {
            if (Type == "FromDate")
                this.claimCharges[ndx].claimCharges.Dos_From = dt + "/";

            if (Type == "ToDate")
                this.claimCharges[ndx].claimCharges.Dos_To = dt + "/";

        }
    }

    daysDiff(fromDate: string, toDate: string, index: number, Type: string = "", event?: KeyboardEvent) {
        if (event == undefined || event.key != "Tab") {
            if (Type == "FromDate")
                this.validateDateFormat(fromDate, Type, index, event);
            else if (Type == "ToDate")
                this.validateDateFormat(toDate, Type, index, event);
            // this.checkDuplicateCPT(index);
            if ((fromDate == null || fromDate == undefined || fromDate == "") ||
                (toDate == null || toDate == undefined || toDate == "")) {
                if (index > -1) {
                    this.claimCharges[index].claimCharges.Units = 0;
                } else {
                    return 0;
                }
            } else {
                if (this.validateD(fromDate) && this.validateD(toDate) && (new Date(toDate) >= new Date(fromDate))) {
                    var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
                    var firstDate = new Date(fromDate);
                    var secondDate = new Date(toDate);
                    var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
                    if (index > -1) {
                        this.claimCharges[index].claimCharges.Units = (diffDays + 1);
                        this.CPTKeyPressEventUnit(null, this.claimCharges[index].claimCharges.Units.toString(), index);

                    } else {
                        return diffDays + 1;
                    }
                } else {
                    if (index > -1) {
                        this.claimCharges[index].claimCharges.Units = 0;
                    } else {
                        return 0;
                    }
                }
            }
        }
    }

    CPTKeyPressEventUnit(event = null, u: string, index: number, cptType: string = "") {
        let unit = "1";
        if (event === null || event.keycode !== 9) {
            unit = u == "" || u == "0" ? "1" : u;
            if (this.claimCharges[index].amt == "" || this.claimCharges[index].amt == null || this.claimCharges[index].amt == undefined)
                this.claimCharges[index].amt = "0";
            this.claimCharges[index].claimCharges.Amount = (parseFloat(this.claimCharges[index].amt) * parseFloat(unit)).toString();
            //..Below condition is Added by Tamour Ali on 14/08/2023, to check if the Cpt belongs to Anesthesia Practice.

            if (cptType != "" && cptType === "Anesthesia") {
                //.. If CPT belongs to Anesthesia then the total Charges amount will be increased by 200% to calculat the final charges for CPT.
                //.. As its Nobility own criteria to charge 200% of total amount in case on Anesthesia Cpt's, also the cptType optional parameter is added for this implementation.
                this.claimCharges[index].claimCharges.Amount = (Math.round((parseFloat(this.claimCharges[index].claimCharges.Amount) * 200) / 100)).toString();

            }
            // USER STORY 16 : commented by HAMZA & Date: 08/02/2023
            //   this.checkDuplicateCPT(index);
        }
    }

    onBlurUnit(index: number) {
        if (Common.isNullOrEmpty(this.claimCharges[index].claimCharges.Units)) {
            this.claimCharges[index].claimCharges.Units = 1;
        }
    }

    getNotificationFacility() {
        this.claimViewModel.ClaimModel.Facility_Code = this.Gv.FacilityCode;
        this.claimViewModel.ClaimModel.Facility_Name = this.Gv.FacilityName;
        document.getElementById("facilityClose").click();
    }
    showFacility() {

        document.getElementById("Facilities").click();
    }

    showAttachments() {
        document.getElementById("Attachments").click();
    }

    getSetStatus() {
        this.claimService.claimTabActive.next('claimsSummary');
        this.router.navigate(['/Patient/Demographics/ClaimSummary',
            Common.encodeBase64(JSON.stringify({
                Patient_Account: this.claimInfo.Patient_Account,
                PatientFirstName: this.claimInfo.PatientFirstName,
                PatientLastName: this.claimInfo.PatientLastName,
                claimNo: this.ClaimNumber,
                disableForm: false
            }))
        ]);
    }

    resetNotes() {
        this.ChildNotes.resetFields();
    }

    claimStatus_Changed(status: string) {

        debugger;

        if (status == "P") {
            var bit = false
            let counttheins: number = 0;
            this.InsChild.claimInsuranceModel.forEach(x => {

                if (x.claimInsurance.Pri_Sec_Oth_Type == 'P' && x.claimInsurance.Deleted == true) {
                    counttheins++
                }
            })
            if (this.InsChild.claimInsuranceModel.length == counttheins) {
                bit = true;
            }
            if (this.emptyOrNullstring(this.claimViewModel.ClaimModel.Pri_Status))
                return;
            if (this.InsChild.claimInsuranceModel == undefined || this.InsChild.claimInsuranceModel == null
                || this.InsChild.claimInsuranceModel.filter(x => x.claimInsurance.Pri_Sec_Oth_Type == "P").length == 0 || bit) {
                this.toast.info("Please enter Primary Insurance.", 'No Primary Insurance');
                $("#ddlPriStatus").val("");
                this.claimViewModel.ClaimModel.Pri_Status = "";
                return;
            }
            if (this.claimViewModel.ClaimModel.Pri_Status == "N") {
                this.claimViewModel.ClaimModel.Is_Self_Pay = false;
                this.claimViewModel.ClaimModel.Pat_Status = "W";
                for (var x = 0; x < this.InsChild.claimInsuranceModel.length; x++) {
                    if (this.InsChild.claimInsuranceModel[x].claimInsurance.Pri_Sec_Oth_Type == "S")
                        this.claimViewModel.ClaimModel.Sec_Status = "W";
                    if (this.InsChild.claimInsuranceModel[x].claimInsurance.Pri_Sec_Oth_Type == "O")
                        this.claimViewModel.ClaimModel.Oth_Status = "W";
                }
            }
        } //-- ---------------------------------------ENd Primary Status Primary insruance
        else if (status == "S") {
            if (this.emptyOrNullstring(this.claimViewModel.ClaimModel.Sec_Status))
                return;
            if (this.InsChild.claimInsuranceModel == undefined || this.InsChild.claimInsuranceModel == null
                || this.InsChild.claimInsuranceModel.filter(x => x.claimInsurance.Pri_Sec_Oth_Type == "S").length == 0) {
                this.toast.info("Please enter Secondary Insurance.", 'No Secondary Insurance');
                this.claimViewModel.ClaimModel.Sec_Status = "";
                $("#ddlSecStatus").val("");
                return;
            }
            this.claimViewModel.ClaimModel.Is_Self_Pay = false;
            if (this.claimViewModel.ClaimModel.Sec_Status == "N") {
                this.claimViewModel.ClaimModel.Pat_Status = "W";
                for (var x = 0; x < this.InsChild.claimInsuranceModel.length; x++) {
                    if (this.InsChild.claimInsuranceModel[x].claimInsurance.Pri_Sec_Oth_Type == "P")
                        this.claimViewModel.ClaimModel.Pri_Status = "W";
                    if (this.InsChild.claimInsuranceModel[x].claimInsurance.Pri_Sec_Oth_Type == "O")
                        this.claimViewModel.ClaimModel.Oth_Status = "W";
                }
            }
        } //-- ENd Secondary insurance Status

        else if (status == "O") {
            if (this.emptyOrNullstring(this.claimViewModel.ClaimModel.Oth_Status))
                return;
            if (this.InsChild.claimInsuranceModel == undefined || this.InsChild.claimInsuranceModel == null
                || this.InsChild.claimInsuranceModel.filter(x => x.claimInsurance.Pri_Sec_Oth_Type == "O").length == 0) {
                this.toast.info("Please Enter Other Insurance.", 'No Other Insurance');
                this.claimViewModel.ClaimModel.Oth_Status = "";
                $("#ddlOthStatus").val("");
                return;
            }
            this.claimViewModel.ClaimModel.Is_Self_Pay = false;
            if (this.claimViewModel.ClaimModel.Oth_Status == "N") {
                this.claimViewModel.ClaimModel.Pat_Status = "W";

                for (var x = 0; x < this.InsChild.claimInsuranceModel.length; x++) {
                    if (this.InsChild.claimInsuranceModel[x].claimInsurance.Pri_Sec_Oth_Type == "P")
                        this.claimViewModel.ClaimModel.Pri_Status = "W";
                    if (this.InsChild.claimInsuranceModel[x].claimInsurance.Pri_Sec_Oth_Type == "S")
                        this.claimViewModel.ClaimModel.Sec_Status = "W";
                }
            }
        } //-- ENd Other Insurance Status 
    }

    emptyOrNullstring(str: string) {
        if (str == undefined || str == null || $.trim(str) == "")
            return true;
        else return false;
    }

    chExp() {
        this.isChargesExpand = !this.isChargesExpand;
    }

    ClosePage() {
        this.API.confirmFun('Do you want to close this Patient Form?', '', () => {
            this.router.navigate(['/PatientSearch'])
        });
    }


    checkChange(event: KeyboardEvent, str: string) {
        if (event.keyCode == 9) {
            if (str == "DOS") {
                $('#dosScanD').focus();
                setTimeout(function () {
                    $('#inpReferal').focus();
                }, 500);
                setTimeout(function () {
                    $('#dosScanD').focus();
                }, 3300);
            }
        }
    }


    isnullOrEmpty(str: any): any {
        if (str == undefined || str == null || $.trim(str) == "") {
            return true;
        }
        else return false;
    }

    clearClaimAmount() {
        this.claimViewModel.ClaimModel.Pri_Ins_Payment = 0.00;
        this.claimViewModel.ClaimModel.Sec_Ins_Payment = 0.00;
        this.claimViewModel.ClaimModel.Oth_Ins_Payment = 0.00;
        this.claimViewModel.ClaimModel.Patient_Payment = 0.00;
        this.claimViewModel.ClaimModel.Adjustment = 0.00;
        this.claimViewModel.ClaimModel.Amt_Due = 0.00;
        this.claimViewModel.ClaimModel.Amt_Paid = 0.00;
        this.claimViewModel.ClaimModel.Claim_Total = 0.00;
        this.claimViewModel.ClaimModel.Hospital_From = "";
        this.claimViewModel.ClaimModel.Hospital_To = "";
        this.claimViewModel.ClaimModel.Bill_Date = "";
        this.claimViewModel.ClaimModel.DOS = "";


    }

    funDXCalculation() {
        var dxArray = $("#container td").map(function () {
            return $(this).text();
        });
        console.log(dxArray);
        this.claimViewModel.ClaimModel.DX_Code1 = this.isEmptyofNull($('#' + this.getdxID(dxArray[0])).val().toString());
        this.claimViewModel.ClaimModel.DX_Code2 = this.isEmptyofNull($('#' + this.getdxID(dxArray[1])).val().toString());
        this.claimViewModel.ClaimModel.DX_Code3 = this.isEmptyofNull($('#' + this.getdxID(dxArray[2])).val().toString());
        this.claimViewModel.ClaimModel.DX_Code4 = this.isEmptyofNull($('#' + this.getdxID(dxArray[3])).val().toString());
        this.claimViewModel.ClaimModel.DX_Code5 = this.isEmptyofNull($('#' + this.getdxID(dxArray[4])).val().toString());
        this.claimViewModel.ClaimModel.DX_Code6 = this.isEmptyofNull($('#' + this.getdxID(dxArray[5])).val().toString());
        this.claimViewModel.ClaimModel.DX_Code7 = this.isEmptyofNull($('#' + this.getdxID(dxArray[6])).val().toString());
        this.claimViewModel.ClaimModel.DX_Code8 = this.isEmptyofNull($('#' + this.getdxID(dxArray[7])).val().toString());
        this.claimViewModel.ClaimModel.DX_Code9 = this.isEmptyofNull($('#' + this.getdxID(dxArray[8])).val().toString());
        this.claimViewModel.ClaimModel.DX_Code10 = this.isEmptyofNull($('#' + this.getdxID(dxArray[9])).val().toString());
        this.claimViewModel.ClaimModel.DX_Code11 = this.isEmptyofNull($('#' + this.getdxID(dxArray[10])).val().toString());
        this.claimViewModel.ClaimModel.DX_Code12 = this.isEmptyofNull($('#' + this.getdxID(dxArray[11])).val().toString());
    }

    getdxID(dx: string): string {
        if (dx == 'DX 10' || dx == 'DX 11' || dx == 'DX 12')
            return dx.replace(' ', '0');
        else
            return dx.replace(' ', '');

    }

    dxValidation() {
        let check = 0;
        this.dxNumber = '';
        if (this.isEmptyofNull(this.claimViewModel.ClaimModel.DX_Code12) != '') check = 1;
        if (this.isEmptyofNull(this.claimViewModel.ClaimModel.DX_Code11) != '') check = 1;
        else if (check == 1) { this.dxNumber = "InvalidSeq"; return; }
        if (this.isEmptyofNull(this.claimViewModel.ClaimModel.DX_Code10) != '') check = 1;
        else if (check == 1) { this.dxNumber = "InvalidSeq"; return; }
        if (this.isEmptyofNull(this.claimViewModel.ClaimModel.DX_Code9) != '') check = 1;
        else if (check == 1) { this.dxNumber = "InvalidSeq"; return; }
        if (this.isEmptyofNull(this.claimViewModel.ClaimModel.DX_Code8) != '') check = 1;
        else if (check == 1) { this.dxNumber = "InvalidSeq"; return; }
        if (this.isEmptyofNull(this.claimViewModel.ClaimModel.DX_Code7) != '') check = 1;
        else if (check == 1) { this.dxNumber = "InvalidSeq"; return; }
        if (this.isEmptyofNull(this.claimViewModel.ClaimModel.DX_Code6) != '') check = 1;
        else if (check == 1) { this.dxNumber = "InvalidSeq"; return; }
        if (this.isEmptyofNull(this.claimViewModel.ClaimModel.DX_Code5) != '') check = 1;
        else if (check == 1) { this.dxNumber = "InvalidSeq"; return; }
        if (this.isEmptyofNull(this.claimViewModel.ClaimModel.DX_Code4) != '') check = 1;
        else if (check == 1) { this.dxNumber = "InvalidSeq"; return; }
        if (this.isEmptyofNull(this.claimViewModel.ClaimModel.DX_Code3) != '') check = 1;
        else if (check == 1) { this.dxNumber = "InvalidSeq"; return; }
        if (this.isEmptyofNull(this.claimViewModel.ClaimModel.DX_Code2) != '') check = 1;
        else if (check == 1) { this.dxNumber = "InvalidSeq"; return; }

        if (this.isEmptyofNull(this.claimViewModel.ClaimModel.DX_Code1) == '') {
            this.dxNumber = "At least one DX is required";
            return;
        }
    }
    isEmptyofNull(str: string) {
        if (str == undefined || str == null)
            return '';
        else
            return $.trim(str);
    }

    SetDiagnosis(e: any) {
        this.setE = e;
        debugger
        this.Diag.splice(e.index, 1, e.Diag);
        this.claimCharges.forEach(c => {
            if (e.index === 0)
                if (Common.isNullOrEmpty(c.claimCharges.DX_Pointer1)) {
                    c.claimCharges.DX_Pointer1 = 1;
                }
            if (e.index === 1)
                if (Common.isNullOrEmpty(c.claimCharges.DX_Pointer2)) {
                    c.claimCharges.DX_Pointer2 = 2;
                }
            if (e.index === 2)
                if (Common.isNullOrEmpty(c.claimCharges.DX_Pointer3)) {
                    c.claimCharges.DX_Pointer3 = 3;
                }
            if (e.index === 3)
                if (Common.isNullOrEmpty(c.claimCharges.DX_Pointer4)) {
                    c.claimCharges.DX_Pointer4 = 4;
                }

        })
    }

    RemoveDiagnosis(ndx: number) {
        var diagLength = this.Diag.length; // length before deletion
        this.claimCharges.forEach(c => {
            if (ndx === 3 && !Common.isNullOrEmpty(c.claimCharges.DX_Pointer4)) {
                console.log('4 ============', c.claimCharges.DX_Pointer4);
                c.claimCharges.DX_Pointer4 = null;
            }
            if (ndx === 2 && !Common.isNullOrEmpty(c.claimCharges.DX_Pointer3)) {
                console.log('3 ============', c.claimCharges.DX_Pointer3);
                c.claimCharges.DX_Pointer3 = c.claimCharges.DX_Pointer4;
                c.claimCharges.DX_Pointer4 = null;
            }
            if (ndx === 1 && !Common.isNullOrEmpty(c.claimCharges.DX_Pointer2)) {
                console.log('2 ============', c.claimCharges.DX_Pointer2);
                c.claimCharges.DX_Pointer2 = c.claimCharges.DX_Pointer3;
                c.claimCharges.DX_Pointer3 = c.claimCharges.DX_Pointer4;
                c.claimCharges.DX_Pointer4 = null;
            }
            if (ndx === 0 && !Common.isNullOrEmpty(c.claimCharges.DX_Pointer1)) {
                console.log('1 ============', c.claimCharges.DX_Pointer1);
                c.claimCharges.DX_Pointer1 = c.claimCharges.DX_Pointer2;
                c.claimCharges.DX_Pointer2 = c.claimCharges.DX_Pointer3;
                c.claimCharges.DX_Pointer3 = c.claimCharges.DX_Pointer4;
                c.claimCharges.DX_Pointer4 = null;
            }
        });
        console.log("diagnosis array", this.Diag);
        if (diagLength > 4) {
            debugger
            this.claimCharges.forEach(c => {
                c.claimCharges.DX_Pointer1 = 1;
                c.claimCharges.DX_Pointer2 = 2;
                c.claimCharges.DX_Pointer3 = 3;
                c.claimCharges.DX_Pointer4 = 4;
            });
        }

        else {
            debugger
            if (diagLength > 3) {

                this.claimCharges.forEach(c => {
                    c.claimCharges.DX_Pointer1 = 1;
                    c.claimCharges.DX_Pointer2 = 2;
                    c.claimCharges.DX_Pointer3 = 3;
                    c.claimCharges.DX_Pointer4 = null;
                });
            }
            else if (diagLength > 2) {

                this.claimCharges.forEach(c => {
                    c.claimCharges.DX_Pointer1 = 1;
                    c.claimCharges.DX_Pointer2 = 2;
                    c.claimCharges.DX_Pointer3 = null;
                    c.claimCharges.DX_Pointer4 = null;
                });
            }
            else if (diagLength > 1) {

                this.claimCharges.forEach(c => {
                    c.claimCharges.DX_Pointer1 = 1;
                    c.claimCharges.DX_Pointer2 = null;
                    c.claimCharges.DX_Pointer3 = null;
                    c.claimCharges.DX_Pointer4 = null;
                });
            }
            else if (diagLength > 0) {

                this.claimCharges.forEach(c => {
                    c.claimCharges.DX_Pointer1 = null;
                    c.claimCharges.DX_Pointer2 = null;
                    c.claimCharges.DX_Pointer3 = null;
                    c.claimCharges.DX_Pointer4 = null;
                });
            }
        }
    }


    setDateRange(beginDateStr: string, endDateStr: string): void {
        let beginDate = new Date(beginDateStr);
        let endDate = new Date(endDateStr);
        this.formControls['hospitalization'].patchValue({
            facilityDates: {
                beginDate: {
                    year: beginDate.getFullYear(),
                    month: beginDate.getMonth() + 1,
                    day: beginDate.getDate()
                },
                endDate: {
                    year: endDate.getFullYear(),
                    month: endDate.getMonth() + 1,
                    day: endDate.getDate()
                }
            }
        });
    }

    clearDateRange(): void {
        // Clear the date range using the patchValue function
        this.formControls['hospitalization'].get('facilityDates').patchValue({ myDateRange: '' });
    }

    isNewClaim() {
        return !(this.claimViewModel.ClaimModel.Claim_No !== null && this.claimViewModel.ClaimModel.Claim_No !== 0 && this.claimViewModel.ClaimModel.Claim_No !== undefined)
    }

    onChangeCorrectedClaim() {
        if (this.claimViewModel.ClaimModel.Is_Corrected) {
            this.formControls['correctedClaimGroup'].get('ICN_Number').setValidators([Validators.required]);
            this.formControls['correctedClaimGroup'].get('ICN_Number').updateValueAndValidity({ onlySelf: true, emitEvent: true });
            this.formControls['correctedClaimGroup'].get('RSCode').setValidators([Validators.required]);
            this.formControls['correctedClaimGroup'].get('RSCode').updateValueAndValidity({ onlySelf: true, emitEvent: true });
            if (this.isnullOrEmpty(this.claimViewModel.ClaimModel.RSCode))
                this.claimViewModel.ClaimModel.RSCode = this.claimViewModel.ResubmissionCodes[0].Id;
        } else {
            this.formControls['correctedClaimGroup'].get('ICN_Number').clearValidators();
            this.formControls['correctedClaimGroup'].get('ICN_Number').updateValueAndValidity({ onlySelf: true, emitEvent: true });
            this.formControls['correctedClaimGroup'].get('RSCode').clearValidators();
            this.formControls['correctedClaimGroup'].get('RSCode').updateValueAndValidity({ onlySelf: true, emitEvent: true });
        }
    }


    onChangeDrugCode(cptIndex) {
        this.claimCharges[cptIndex].claimCharges.NDC_Qualifier = this.claimCharges[cptIndex].claimCharges.NDCList.find(dc => dc.Name == this.claimCharges[cptIndex].Drug_Code).Meta.Qualifier;
    }
    setTimeStart(ndx: number, data: any) {
        if (data != null) {
            var timeArr = data.split(":");
            if ((Number(timeArr[0]) >= 0) && (Number(timeArr[0]) < 24) && (Number(timeArr[1]) >= 0) && (Number(timeArr[1]) < 60)) {
                this.claimCharges[ndx].claimCharges.Start_Time = data;
                return
            } else {
                this.claimCharges[ndx].claimCharges.Start_Time = null;
            }
        }
    }
    setTimeStop(ndx: number, data: any) {
        if (data != null) {
            var timeArr = data.split(":");
            if ((Number(timeArr[0]) >= 0) && (Number(timeArr[0]) < 24) && (Number(timeArr[1]) >= 0) && (Number(timeArr[1]) < 60)) {
                this.claimCharges[ndx].claimCharges.Stop_Time = data;
                return
            } else {
                this.claimCharges[ndx].claimCharges.Stop_Time = null;
            }
        }
    }
    onGenerateHcfa(isPrintable: boolean = false) {
        if (this.ClaimNumber) {
            this.API.downloadFile(`/hcfa/GenerateHcfa?claimNo=${this.ClaimNumber}&isPrintable=${isPrintable}`).subscribe(response => {
                if (response.type === 'application/json')
                    this.toast.warning("No record found");
                else {
                    if (isPrintable) {
                        let blob = new Blob([response], { type: 'application/pdf' });
                        const blobUrl = URL.createObjectURL(blob);
                        const iframe = document.createElement('iframe');
                        iframe.style.display = 'none';
                        iframe.src = blobUrl;
                        document.body.appendChild(iframe);
                        iframe.contentWindow.print();
                    }
                    else {
                        if (response.type === 'application/pdf') {
                            let blob = new Blob([response], { type: 'application/pdf' });
                            saveAs(blob, this.ClaimNumber + '.pdf');
                        } else if (response.type === 'application/zip') {
                            let blob = new Blob([response], { type: 'application/zip' });
                            saveAs(blob, this.ClaimNumber + '.zip');
                        }
                    }
                }
            });

        }
    }

    /* Below are the changes done by Tamour Ali on 08/Aug/2023 */
    /* Below methods are regarding Anesthesia Task for CPT Charges & Units calculations  */

    onPhysicalModifierChange(physicalModifier: any, cptIndex: number) {
        if (!this.claimCharges[cptIndex].amt) {
            this.claimCharges[cptIndex].amt = "0";
        }

        let unitCount = this.claimCharges[cptIndex].claimCharges.Units;

        const oldPhysicalModifier = this.claimCharges[cptIndex].claimCharges.Physical_Modifier;
        this.claimCharges[cptIndex].claimCharges.Physical_Modifier = physicalModifier;

        unitCount = this.adjustUnitsForPhysicalModifier(oldPhysicalModifier, physicalModifier, unitCount);

        this.claimCharges[cptIndex].claimCharges.Units = unitCount;
        this.CPTKeyPressEventUnit(null, unitCount.toString(), cptIndex, "Anesthesia");
    }

    adjustUnitsForPhysicalModifier(oldModifier: any, newModifier: any, unitCount: number): number {
        unitCount = this.removeUnitsForPhysicalModifier(oldModifier, unitCount);
        switch (newModifier) {
            case "P3":
                unitCount += 1;
                break;
            case "P4":
                unitCount += 2;
                break;
            case "P5":
                unitCount += 3;
                break;
            default:
                break;
        }
        return unitCount;
    }

    removeUnitsForPhysicalModifier(physicalModifier: any, unitCount: number): number {
        switch (physicalModifier) {
            case "P3":
                unitCount -= 1;
                break;
            case "P4":
                unitCount -= 2;
                break;
            case "P5":
                unitCount -= 3;
                break;
            default:
                break;
        }
        return unitCount;
    }


    calculateTimeDifference(ndx: number, time: any, type: any) {

        let startTimeOld: string = '';
        let stopTimeOld: string = '';
        let timeDifference: number | null = null;
        if (this.claimCharges[ndx].claimCharges.Start_Time != null && this.claimCharges[ndx].claimCharges.Start_Time != '') {
            startTimeOld = this.claimCharges[ndx].claimCharges.Start_Time;
        }
        if (this.claimCharges[ndx].claimCharges.Stop_Time != null && this.claimCharges[ndx].claimCharges.Stop_Time != '') {
            stopTimeOld = this.claimCharges[ndx].claimCharges.Stop_Time;
        }
        const propertyToUpdate = type === 'start' ? 'Start_Time' : 'Stop_Time';
        if (time === null || time === '') {
            this.calculateAndResetTimeDifference(ndx, startTimeOld, stopTimeOld);
            this.updateClaimChargesProperty(ndx, propertyToUpdate, time);
            return;
        }
        this.updateClaimChargesProperty(ndx, propertyToUpdate, time);
        let start = this.parseTime(this.claimCharges[ndx].claimCharges.Start_Time);
        let end = this.parseTime(this.claimCharges[ndx].claimCharges.Stop_Time);

        // Check if the start time is in PM and stop time is in AM
        if (start.getHours() >= 12 && end.getHours() < 12) {
            // Adjust the date for the stop time to the next day
            end.setDate(end.getDate() + 1);

        }
        if (start > end) {
            timeDifference = null;
            type == 'start' ? this.updateClaimChargesProperty(ndx, propertyToUpdate, startTimeOld) : null;
            type == 'stop' ? this.updateClaimChargesProperty(ndx, propertyToUpdate, stopTimeOld) : null;
            this.cd.detectChanges();

            this.showSwalError('Invalid input', 'Start time must be less than Stop time.', 'error');
            return;
        } else {
            this.calculateAndResetTimeDifference(ndx, startTimeOld, stopTimeOld);

            const timeDifference = this.calculateMinutesDifference(start, end);
            this.timeChargesCalculation(ndx, timeDifference);
        }
    }

    private parseTime(time: string): Date {
        const [hours, minutes] = time.split(':').map(Number);
        const date = new Date();
        date.setHours(hours);
        date.setMinutes(minutes);
        return date;
    }

    private calculateMinutesDifference(start: Date, end: Date): number {
        let diffInMilliseconds = end.getTime() - start.getTime();
        if (diffInMilliseconds < 0) {
            diffInMilliseconds = Math.abs(diffInMilliseconds);
        }
        return Math.floor(diffInMilliseconds / (1000 * 60)); // converting milliseconds to minutes
    }

    private showSwalError(title: string, text: string, alertType: string) {
        swal({
            type: alertType,
            title: title,
            text: text,
        });
    }

    oldTimeIndexReset(ndx: number, totalMinDifference: number) {
        if (totalMinDifference < 0) {
            totalMinDifference = Math.abs(totalMinDifference);
        }
        let unitCount = this.claimCharges[ndx].claimCharges.Units;
        let newUnitCount = (totalMinDifference / 15);
        const decimalDigits = (newUnitCount % 1).toFixed(1).substr(2);// Extracting the digits after the decimal point        
        const decimalPart = parseFloat(decimalDigits);// Converting the decimal digits to a number
        if (decimalPart >= 6) { newUnitCount += 1; }
        newUnitCount = Math.trunc(newUnitCount);
        unitCount = unitCount - newUnitCount;
        unitCount = Math.trunc(unitCount);
        this.claimCharges[ndx].claimCharges.Units = unitCount;
        this.CPTKeyPressEventUnit(null, unitCount.toString(), ndx, "Anesthesia"); //..this is added for remove feature testing
    }

    timeChargesCalculation(cptIndex: number, totalMinutes: any) {
        if (this.claimCharges[cptIndex].amt == "" || this.claimCharges[cptIndex].amt == null || this.claimCharges[cptIndex].amt == undefined)
            this.claimCharges[cptIndex].amt = "0";
        let unitCount = this.claimCharges[cptIndex].claimCharges.Units;
        unitCount = unitCount + (totalMinutes / 15);
        const decimalDigits = (unitCount % 1).toFixed(1).substr(2); // Extracting the digits after the decimal point
        const decimalPart = parseFloat(decimalDigits);        // Converting the decimal digits to a number
        if (decimalPart >= 6) { unitCount += 1; }
        unitCount = Math.trunc(unitCount);
        this.claimCharges[cptIndex].claimCharges.Units = unitCount;
        this.CPTKeyPressEventUnit(null, unitCount.toString(), cptIndex, "Anesthesia");
    }

    updateClaimChargesProperty(ndx: number, property: string, value: any) {

        this.claimCharges[ndx].claimCharges = {
            ...this.claimCharges[ndx].claimCharges,
            [property]: value || null,
        };
        this.cd.detectChanges();
    }

    calculateAndResetTimeDifference(ndx: number, startTimeOld: string, stopTimeOld: string) {
        if (startTimeOld !== '' && startTimeOld !== null && stopTimeOld !== '' && stopTimeOld !== null) {
            // Check if the start time is in PM and stop time is in AM
            let start = this.parseTime(startTimeOld);
            let end = this.parseTime(stopTimeOld);
            if (start.getHours() >= 12 && end.getHours() < 12) {
                // Adjust the date for the stop time to the next day
                end.setDate(end.getDate() + 1);
            }
            const oldTimeDifference = this.calculateMinutesDifference(start, end);
            // const oldTimeDifference = this.calculateMinutesDifference(this.parseTime(startTimeOld), this.parseTime(stopTimeOld));
            this.oldTimeIndexReset(ndx, oldTimeDifference);
        }
    }

    clearTime(ndx: number, property: string, value: any) {
        let startTimeOld: string = '';
        let stopTimeOld: string = '';
        if (this.claimCharges[ndx].claimCharges.Start_Time != null && this.claimCharges[ndx].claimCharges.Start_Time != '') {
            startTimeOld = this.claimCharges[ndx].claimCharges.Start_Time;
        }
        if (this.claimCharges[ndx].claimCharges.Stop_Time != null && this.claimCharges[ndx].claimCharges.Stop_Time != '') {
            stopTimeOld = this.claimCharges[ndx].claimCharges.Stop_Time;
        }
        swal({
            title: 'Are you sure?',
            text: "You want to remove the selected time!.",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result) {
                this.calculateAndResetTimeDifference(ndx, startTimeOld, stopTimeOld);
                this.updateClaimChargesProperty(ndx, property, value);
            }
        }).catch((error) => {
            console.log('Error:', error);
        });
    }

    /* Above methods are regarding Anesthesia Task for CPT Charges & Units calculations  */

}



