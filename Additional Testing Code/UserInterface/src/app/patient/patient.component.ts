import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common'
import { APIService } from '../components/services/api.service';
import { GvarsService } from '../services/G_vars/gvars.service';
import { Router, ActivatedRoute } from '@angular/router';
import { patientModel } from './Classes/patientClass'
import { zipdata } from './Classes/patientInsClass'
import { IMyDpOptions, IMyDate } from 'mydatepicker';
import { Common } from '../services/common/common';
import { isNullOrUndefined } from 'util';
import { ValidateAddreesRequestViewModel, ValidateAddressResponseViewModel } from './Classes/validateAddrees.model';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { ValidateWhiteSpace } from '../validators/validateWhiteSpace.validator';
import { Subscription } from 'rxjs';
import { environment } from '../../environments/environment';
import { FileHandlerService } from '../components/services/file-handler/filehandler.service';
import { PatientNotesComponent } from './Patient/patient-notes/patient-notes.component';
import { ModalWindow } from '../shared/modal-window/modal-window.component';
import { AddEditGuarantorSharedComponent } from '../shared/guarantors/add-edit-guarantor-shared/add-edit-guarantor-shared.component';
import { ListGuarantorsSharedComponent } from '../shared/guarantors/list-guarantors-shared/list-guarantors-shared.component';
import { BaseComponent } from '../core/base/base.component';
import { PatientInsuranceResponse } from '../Claims/Classes/ClaimsModel';
import { PatientRouteInfo } from './Classes/patient-route-info';
import { PatientAttachmentsComponent } from '../shared/patient-attachments/patient-attachments.component';
import { DataService } from '.././data.service'
import { AccountassignmentComponent } from './accountassignment/accountassignment.component';
import { AlertAssignmentComponent } from './alerts/alert.component';
import { BsModalRef, BsModalService, ModalDirective, ModalOptions } from 'ngx-bootstrap/modal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from '../services/data/Alert.service';

declare var $: any

@Component({
    selector: 'app-patient',
    templateUrl: './patient.component.html',
    styleUrls: ['./patient.component.css'],
})
export class PatientComponent extends BaseComponent implements OnInit {
    @ViewChild(AccountassignmentComponent) accountassignment;
    @ViewChild(AlertAssignmentComponent) alerts;
    @ViewChild(ModalDirective) modalWindow: ModalDirective;
    dataLoading: boolean = false;
    // @ViewChild('modalWindow') modalWindow: ModalDirective;


    data(value: any) {
        this.dataService.sharedData = value
    }
    // set data(value:any){
    //     alert()
    //      this.dataService.sharedData=value
    // }
    validateAddressResponse: ValidateAddressResponseViewModel[];
    dataTable: any;
    today = new Date();
    public myDatePickerOptionForDOBAndDeath: IMyDpOptions = {
        dateFormat: 'mm/dd/yyyy', height: '25px', width: '100%',
        disableSince: {
            year: this.today.getFullYear(),
            month: this.today.getMonth() + 1,
            day: this.today.getDate() + 1,
        }
    };
    public myDatePickerOptionForStartAndTerm: IMyDpOptions = {
        dateFormat: 'mm/dd/yyyy', height: '25px', width: '100%',
        openSelectorOnInputClick: true,
    };
    url: any = "../../../assets/Images/pic.png";
    someDataProperty: string = 'H';
    someOtherDataProperty: string = 'Pir Ubaid';
    alertMessage: string = 'Test message here.';
    zipData: zipdata[];
    InsuranceNames: any = [];
    selectedInsName: number;
    patient: patientModel;
    @Input() EligibilityDetials: any;
    PatientFullNamee: string;
    disableForm: boolean = false;
    PatientForm: FormGroup;
    patientInsurancesControl: FormArray;
    PatientAlreadyExist: boolean = false;
    dublicatePatientCheckSubs: Subscription;
    disabledSave: boolean = true;
    disabledSaveAsDraft: boolean = true;
    emergencyGroupRequired: boolean = false;
    deathGroupRequired: boolean = false;
    subsZipCode: Subscription;
    selDateDOB: IMyDate = {
        day: 0,
        month: 0,
        year: 0
    };
    selectedFile: File;
    bsModalRef: BsModalRef;
    @Output() modalClosed = new EventEmitter();
    @ViewChild('guarantorModalWindow') guarantorModal: ModalWindow;
    @ViewChild('insuranceSearch') insuranceModal: ModalWindow;
    @ViewChild(AddEditGuarantorSharedComponent) guarantorAddEdit: AddEditGuarantorSharedComponent;
    @ViewChild(ListGuarantorsSharedComponent) guarantorList: ListGuarantorsSharedComponent;
    @ViewChild(PatientNotesComponent) patientNotesWindow: PatientNotesComponent
    currentInsuranceNumber: number = 0;
    patientInsurances: PatientInsuranceResponse[];
    patientInfo: PatientRouteInfo;
    guarantorModalWindowProp: any;
    addGuarantor: boolean = false;
    // Subscription
    generalLastNameSub: Subscription;
    accountInfo: any;
    generalFirstNameSub: Subscription;
    generalDobSub: Subscription;
    emailNotAvailableSub: Subscription;
    guarantorSub: Subscription;
    emailSub: Subscription;
    emergencyNameSub: Subscription;
    emergencyRelationshipSub: Subscription;
    emergencyPhoneSub: Subscription;
    deathDeceasedSub: Subscription;
    eligiblityBtnColor: string = '';
    newRowInsurances: boolean;
    eligbilityDetails: any = []
    eligiblityModel: boolean = false;
    eligiblityError: any = "";
    showEligiblityDetails: any = "";
    patientFirstName: any = "";
    patientMiddleName: any = "";
    patientLastName: any = "";
    patientSex: any = "";
    patientDateofBirth: any = "";
    patientAddress: any = "";
    patientCity: any = "";
    patientState: any = "";
    patientZip: any = "";
    providerFirstName: any = "";
    providerLastName: any = "";
    NPI: any = "";
    insurance_idGreen: any = [];
    insurance_idRed: any = [];
    date: any = [];
    team: any = [];
    providerList: any = [];
    firstAlert: any;
    @ViewChild(PatientAttachmentsComponent) patientAttachments;

    constructor(private datepipe: DatePipe,
        private dataService: DataService,
        private router: Router,
        private route: ActivatedRoute,
        private API: APIService,
        private Gv: GvarsService,
        private toastr: ToastrService,
        private fileHandler: FileHandlerService,
        private formBuilder: FormBuilder,
        private modalService: NgbModal,
        private alertService: AlertService,
        private _gv: GvarsService) {
        super();
        this.patient = new patientModel();
        this.zipData = [];
        this.validateAddressResponse = [];

        this.patient.PatientInsuranceList = [];
        this.team = [{ name: 'Nav Metro TC', value: 0 }, { name: 'Nav UH', value: 1 }, { name: 'Nav WRH IPCC', value: 2 }, { name: 'Navigator', value: 3 }]
    }


    ngOnInit() {
        this.initForm();
        this.route.params.subscribe(qp => {
            if (qp) {
                this.patientInfo = JSON.parse(Common.decodeBase64(qp['param']));
                this.patient.Patient_Account = +this.patientInfo.Patient_Account;
                this._gv.Patient_Account = this.patient.Patient_Account;
                if (this.patient.Patient_Account > 0) {

                    this.PatientForm.disable();
                    this.PatientFullNamee = this.patientInfo.PatientFirstName + ',' + this.patientInfo.PatientLastName;
                    this.disableForm = true;
                    this.getPatient(this.patient.Patient_Account);

                }
                else {
                    this.newRowInsurances = true;
                    this.getPatientModel();
                }
            }
        })
        this.dynamicValidation();
        this.onDublicatePatientCheckChanges();

        if (this.accountInfo.A_ID != null) {
            debugger
            this.movetoclaim(this.PatientFullNamee, this.patientInfo.Patient_Account, this.patientInfo.A_ID);

        }
        // console.log('PatientComponent initialized');
        // this.alertNotificationModal.show();

    }
     // Added by Pir Ubaid (USER STORY 204 : NPM ALERT )
//     ngAfterViewInit() {debugger
//         this.alertService.getAlert().subscribe((data) => {
//             if (data.Status === 'Success' && data.Response && data.Response.length > 0) {
//                 this.firstAlert = data.Response[0];
//                 console.log('Received alert data:', this.firstAlert);
//                 console.log('this.firstAlert.ClaimSummary', this.firstAlert.ClaimSummary);
//                 console.log('this.firstAlert.ApplicableFor', this.firstAlert.ApplicableFor);
//                 console.log('this.firstAlert.Created_By', this.firstAlert.Created_By);
//                 console.log('selected claim is/are : ',this.firstAlert.ClaimText);
//                 console.log('current user login:', this.Gv.currentUser.userId);
//                 console.log('Values:', {
//                     ApplicableFor: this.firstAlert.ApplicableFor,
//                     UserId: this.Gv.currentUser.userId,
//                     CreatedBy: this.firstAlert.Created_By,
//                     Demographics: this.firstAlert.Demographics
//                 });
// debugger
//                 if (
//                     this.firstAlert.ApplicableFor == 'S' &&
//                     this.Gv.currentUser.userId == this.firstAlert.Created_By &&
//                     this.firstAlert.Demographics == true
//                 ) {
//                     this.show();
//                 } else if (this.firstAlert.ApplicableFor == 'A') {
//                     this.show();
//                 }
//                 else {
//                     console.log('Conditions not met.');
//                 }


//             } else {
//                 console.log('No alert data available.');
//                 debugger;
//             }
//         });
//     }
ngAfterViewInit() {
    debugger;
    this.alertService.getAlert().subscribe((data) => {
      if (data.Status === 'Success' && data.Response && data.Response.length > 0) {
        this.firstAlert = data.Response[0];
        console.log('Received alert data:', this.firstAlert);
        console.log('this.firstAlert.ClaimSummary', this.firstAlert.ClaimSummary);
        console.log('this.firstAlert.ApplicableFor', this.firstAlert.ApplicableFor);
        console.log('this.firstAlert.Created_By', this.firstAlert.Created_By);
        console.log('selected claim is/are : ', this.firstAlert.ClaimText);
        console.log('current user login:', this.Gv.currentUser.userId);
        console.log('Values:', {
          ApplicableFor: this.firstAlert.ApplicableFor,
          UserId: this.Gv.currentUser.userId,
          CreatedBy: this.firstAlert.Created_By,
          Demographics: this.firstAlert.Demographics
        });
        debugger;
        
        // Check if the alert is not expired
        if (this.isAlertNotExpired()) {
          if (
            this.firstAlert.ApplicableFor == 'S' &&
            this.Gv.currentUser.userId == this.firstAlert.Created_By &&
            this.firstAlert.Demographics == true
          ) {
            this.show();
          } else if (this.firstAlert.ApplicableFor == 'A' && this.firstAlert.Demographics == true) {
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


    //#region Form Handling
    initForm() {
          
        this.PatientForm = new FormGroup({
            image: new FormGroup({
                profilePic: new FormControl(null),
            }),
            general: new FormGroup({

                chartId: new FormControl(null),
                alternateAccount: new FormControl(null, [Validators.maxLength(18)]),
                lastName: new FormControl(null, [Validators.required, Validators.maxLength(50), ValidateWhiteSpace]),

                mi: new FormControl(null, [Validators.maxLength(1)]),
                firstName: new FormControl(null, [Validators.required, Validators.maxLength(50), ValidateWhiteSpace]),
                dob: new FormControl(null, [Validators.required]),
                gender: new FormControl(null, [Validators.required]),
                ssn: new FormControl(null, [Validators.maxLength(9), Validators.minLength(9)]),
                maritalStatus: new FormControl(null, [Validators.required]),
                prefLanguage: new FormControl(null),
                race: new FormControl(null),
                ethnicity: new FormControl(null)
            }),
            contact: new FormGroup({
                address: new FormControl(null, [Validators.required, Validators.maxLength(500)]),
                addressType: new FormControl(null, [Validators.required]),
                zip: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(9)]),
                city: new FormControl(null, [Validators.required]),
                state: new FormControl(null, [Validators.required]),
                homePhone: new FormControl(null, [Validators.maxLength(10)]),
                cellPhone: new FormControl(null, [Validators.maxLength(10)]),
                workPhone: new FormControl(null, [Validators.maxLength(10)]),
                email: new FormControl(null, [Validators.maxLength(256), Validators.email, Validators.required, ValidateWhiteSpace]),
                emailNotAvailable: new FormControl(null),
                ccp: new FormControl(null)
            }),
            emergency: new FormGroup({
                name: new FormControl(null, [Validators.maxLength(100)]),
                relationship: new FormControl(),
                phone: new FormControl(null, [Validators.maxLength(10), Validators.minLength(10)])
            }),
            death: new FormGroup({
                deceased: new FormControl(null),
                deceasedDate: new FormControl(null)
            }),
            guarantor: new FormGroup({
                name: new FormControl(null, [Validators.required, Validators.maxLength(100), ValidateWhiteSpace]),
                relationship: new FormControl(null, [Validators.required])
            }),
            additional: new FormGroup({
                provider: new FormControl(null, [Validators.required]),
                location: new FormControl(null, [Validators.required]),
                refPhy: new FormControl(null),
            }),
            patientInsurance: this.formBuilder.array([])
        });
    }


    get formControls() {
        return this.PatientForm.controls;
    }


    onAddPatientInsuranceRow(insurance: PatientInsuranceResponse) {
        this.patientInsurancesControl = this.PatientForm.get('patientInsurance') as FormArray;
        let subscriberNameControl;
        if (!Common.isNullOrEmpty(insurance.Relationship) && insurance.Relationship == '7')
            subscriberNameControl = new FormControl(insurance.SubscriberName);
        else
            subscriberNameControl = new FormControl(insurance.SubscriberName, [Validators.required]);
        this.patientInsurancesControl.push(this.formBuilder.group({
            payerDescription: [insurance.PayerDescription, [Validators.required]],
            insuranceMode: [insurance.Pri_Sec_Oth_Type, [Validators.required]],
            policyNumber: [insurance.Policy_Number, [Validators.required, Validators.maxLength(24)]],
            coPay: [insurance.Co_Payment, Validators.maxLength(8)],
            deDuctible: [insurance.Deductions, Validators.maxLength(8)],
            coPaymentPer: [insurance.Co_Payment_Per, Validators.maxLength(4)],
            ccn: [insurance.CCN, Validators.maxLength(24)],
            groupNumber: [insurance.Group_Number, Validators.maxLength(24)],
            groupName: [insurance.Group_Name, Validators.maxLength(59)],
            effectiveDate: [insurance.Effective_Date],
            terminationDate: [insurance.Termination_Date],
            subscriberName: subscriberNameControl,
            relation: [insurance.Relationship, Validators.required],
            accCarolinaNumber: [insurance.Access_Carolina_Number, Validators.maxLength(34)],
            isCapitated: [insurance.Is_Capitated_Patient],
            insurance_id: [insurance.Insurance_Id]
        }));
        if (this.disableForm)
            this.PatientForm.disable();
        else {
            this.PatientForm.enable();
            if (this.patient.emailnotonfile) {
                let emailCtrl = this.formControls['contact'].get('email');
                emailCtrl.disable({ onlySelf: false, emitEvent: true });
            }
        }
    }

    ValidateDeath() {
        if (this.formControls['death'].get('deceased').value === false) {
            this.patient.DeathDate = null;
        }
    }

    validateGuarantorRelationships() {
        if (this.formControls['guarantor'].get('relationship').value === null || this.formControls['guarantor'].get('relationship').value === undefined || this.formControls['guarantor'].get('relationship').value.toString() !== '7') {
            this.formControls['guarantor'].get('name').setValidators([Validators.required]);
            this.formControls['guarantor'].get('name').updateValueAndValidity({ emitEvent: false, onlySelf: true });
        } else {
            this.formControls['guarantor'].get('name').clearValidators();
            this.formControls['guarantor'].get('name').updateValueAndValidity({ emitEvent: false, onlySelf: true });
            this.formControls['guarantor'].get('name').setValue('');
            this.patient.Financial_Guarantor_Name = null;
            this.patient.Financial_Guarantor = null;
        }
    }

    ValidateEmergencyContact() {
        if (this.formControls['emergency'].get('relationship').value !== null &&
            this.formControls['emergency'].get('relationship').value === '7') {
            this.emergencyGroupRequired = false;
            this.formControls['emergency'].get('name').clearValidators();
            this.formControls['emergency'].get('name').updateValueAndValidity({ emitEvent: false, onlySelf: true });
            this.formControls['emergency'].get('phone').clearValidators();
            this.formControls['emergency'].get('phone').updateValueAndValidity({ emitEvent: false, onlySelf: true });
            this.formControls['emergency'].get('relationship').clearValidators();
            this.formControls['emergency'].get('relationship').updateValueAndValidity({ emitEvent: false, onlySelf: true });
            this.formControls['emergency'].get('name').setValue(null);
            this.formControls['emergency'].get('phone').setValue(null);
        } else if (this.formControls['emergency'].get('relationship').value !== null &&
            this.formControls['emergency'].get('relationship').value !== '7') {
            this.emergencyGroupRequired = true;
            this.formControls['emergency'].get('name').setValidators([Validators.required, Validators.maxLength(100)]);
            this.formControls['emergency'].get('name').updateValueAndValidity({ emitEvent: false, onlySelf: true });
            this.formControls['emergency'].get('relationship').setValidators([Validators.required]);
            this.formControls['emergency'].get('relationship').updateValueAndValidity({ emitEvent: false, onlySelf: true });
            this.formControls['emergency'].get('phone').setValidators([Validators.required, Validators.minLength(10), Validators.maxLength(10)]);
            this.formControls['emergency'].get('phone').updateValueAndValidity({ emitEvent: false, onlySelf: true });
        } else if (!Common.isNullOrEmpty(this.formControls['emergency'].get('phone').value) ||
            !Common.isNullOrEmpty(this.formControls['emergency'].get('name').value)) {
            this.emergencyGroupRequired = true;
            this.formControls['emergency'].get('name').setValidators([Validators.required, Validators.maxLength(100)]);
            this.formControls['emergency'].get('name').updateValueAndValidity({ emitEvent: false, onlySelf: true });
            this.formControls['emergency'].get('relationship').setValidators([Validators.required]);
            this.formControls['emergency'].get('relationship').updateValueAndValidity({ emitEvent: false, onlySelf: true });
            this.formControls['emergency'].get('phone').setValidators([Validators.required, Validators.minLength(10), Validators.maxLength(10)]);
            this.formControls['emergency'].get('phone').updateValueAndValidity({ emitEvent: false, onlySelf: true });
        } else {
            this.emergencyGroupRequired = false;
            this.formControls['emergency'].get('name').clearValidators();
            this.formControls['emergency'].get('name').updateValueAndValidity({ emitEvent: false, onlySelf: true });
            this.formControls['emergency'].get('phone').clearValidators();
            this.formControls['emergency'].get('phone').updateValueAndValidity({ emitEvent: false, onlySelf: true });
            this.formControls['emergency'].get('relationship').clearValidators();
            this.formControls['emergency'].get('relationship').updateValueAndValidity({ emitEvent: false, onlySelf: true });
        }
    }

    onDublicatePatientCheckChanges() {
        if (this.generalLastNameSub != null && this.generalLastNameSub != undefined)
            this.generalLastNameSub.unsubscribe();
        this.generalLastNameSub = this.PatientForm.controls['general'].get('lastName').valueChanges.subscribe(() => {
            this.checkforDublicatePatient();
        });
        if (this.generalFirstNameSub != null && this.generalFirstNameSub != undefined)
            this.generalFirstNameSub.unsubscribe();
        this.generalFirstNameSub = this.PatientForm.controls['general'].get('firstName').valueChanges.subscribe(() => {
            this.checkforDublicatePatient();
        });
        if (this.generalDobSub != null && this.generalDobSub != undefined)
            this.generalDobSub.unsubscribe();
        this.generalDobSub = this.PatientForm.controls['general'].get('dob').valueChanges.subscribe(() => {
            this.checkforDublicatePatient();
        });
    }

    ValidToSaveAsDraft(): boolean {
        let formArray = <FormArray>this.PatientForm.controls['patientInsurance'];
        let valid = true;
        for (let i = 0; i < formArray.controls.length; i++) {
            if (formArray.controls[i].invalid) {
                valid = false;
                break;
            }
        }
        return !(this.formControls['general'].get('firstName').valid && this.formControls['general'].get('lastName').valid && (!this.emergencyGroupRequired || (this.emergencyGroupRequired && this.formControls['emergency'].valid)) && valid);
    }

    onChangeEmailCheckbox({ checked }) {
        if (checked) {
            this.patient.Email_Address = null;
            this.formControls['contact'].get('email').disable();
            this.patient.emailnotonfile = true;
            this.formControls['contact'].get('email').clearValidators();
            this.formControls['contact'].get('email').updateValueAndValidity({ emitEvent: true, onlySelf: false });
        }
        else {
            this.formControls['contact'].get('email').enable();
            this.patient.emailnotonfile = false;
            this.formControls['contact'].get('email').setValidators([Validators.email, Validators.maxLength(256), Validators.required]);
            this.formControls['contact'].get('email').updateValueAndValidity({ emitEvent: true, onlySelf: false });
        }
    }

    onChangeDeceasedCheck({ checked }) {
        if (checked) {
            this.patient.IsDeceased = true;
            this.formControls['death'].get('deceasedDate').enable();
            this.formControls['death'].get('deceasedDate').setValidators([Validators.required]);
            this.formControls['death'].get('deceasedDate').updateValueAndValidity({ emitEvent: true, onlySelf: false });
        }
        else {
            this.patient.DeathDate = null;
            this.patient.IsDeceased = false;
            this.formControls['death'].get('deceasedDate').disable();
            this.formControls['death'].get('deceasedDate').clearValidators();
            this.formControls['death'].get('deceasedDate').updateValueAndValidity({ emitEvent: true, onlySelf: false });
        }
    }

    ValidateEmail() {
        try {
            if (this.formControls['contact'].get('email').value) {
                this.formControls['contact'].get('emailNotAvailable').setValue(false);
                this.formControls['contact'].get('emailNotAvailable').updateValueAndValidity({ emitEvent: false, onlySelf: true });
            }
            if (this.formControls['contact'].get('emailNotAvailable').value) {
                this.formControls['contact'].get('email').clearValidators();
                this.formControls['contact'].get('email').updateValueAndValidity({ emitEvent: false, onlySelf: true });
                this.patient.Email_Address = "";
            } else {
                this.formControls['contact'].get('email').setValidators([Validators.email, Validators.maxLength(256), Validators.required]);
                this.formControls['contact'].get('email').updateValueAndValidity({ emitEvent: false, onlySelf: true });
            }
        } catch (error) {

        }
    }

    dynamicValidation() {
        //#region email
        // if (this.emailNotAvailableSub != null && this.emailNotAvailableSub != undefined)
        //     this.emailNotAvailableSub.unsubscribe();
        // this.emailNotAvailableSub = this.formControls['contact'].get('emailNotAvailable').valueChanges.subscribe(() => {
        //     this.ValidateEmail();
        // });
        // if (this.emailSub != null && this.emailSub != undefined)
        //     this.emailSub.unsubscribe();
        // this.emailSub = this.formControls['contact'].get('email').valueChanges.subscribe(() => {
        //     this.ValidateEmail();
        // });
        //#endregion

        //#region emergency
        this.emergencyNameSub = this.formControls['emergency'].get('name').valueChanges.subscribe(() => {
            this.ValidateEmergencyContact();
        })
        if (this.emergencyRelationshipSub != null && this.emergencyRelationshipSub != undefined)
            this.emergencyRelationshipSub.unsubscribe();
        this.emergencyRelationshipSub = this.formControls['emergency'].get('relationship').valueChanges.subscribe(() => {
            this.ValidateEmergencyContact();
        })
        if (this.emergencyPhoneSub != null && this.emergencyPhoneSub != undefined)
            this.emergencyPhoneSub.unsubscribe();
        this.emergencyPhoneSub = this.formControls['emergency'].get('phone').valueChanges.subscribe(() => {
            this.ValidateEmergencyContact();
        })
        //#endregion

        //#region death
        if (this.deathDeceasedSub != null && this.deathDeceasedSub != undefined)
            this.deathDeceasedSub.unsubscribe();
        this.deathDeceasedSub = this.formControls['death'].get('deceased').valueChanges.subscribe(() => {
            this.ValidateDeath();
        })
        //#endregion

        //#region 
        if (this.guarantorSub)
            this.guarantorSub.unsubscribe();
        this.formControls['guarantor'].get('relationship').valueChanges.subscribe(() => {
            this.validateGuarantorRelationships();
        });
        //#endregion
    }

    setDate(date: string) {
        if (!Common.isNullOrEmpty(date)) {
            let dDate = new Date(date);
            this.selDateDOB = {
                year: dDate.getFullYear(),
                month: dDate.getMonth() + 1,
                day: dDate.getDate()
            };
        }
    }

    checkforDublicatePatient() {
        if (this.formControls['general'].get('lastName').valid &&
            this.formControls['general'].get('firstName').valid &&
            this.formControls['general'].get('dob').valid &&
            this.formControls['contact'].get('zip').valid) {
            if (!isNullOrUndefined(this.dublicatePatientCheckSubs))
                this.dublicatePatientCheckSubs.unsubscribe();
            this.dublicatePatientCheckSubs = this.API.PostDataWithoutSpinner(`/Demographic/IsPatientAlreadyExist`, {
                FirstName: this.formControls['general'].get('firstName').value,
                LastName: this.formControls['general'].get('lastName').value,
                zip: this.formControls['contact'].get('zip').value,
                DOB: this.patient.Date_Of_Birth,
                PatientAccount: this.patient.Patient_Account,
                PracticeCode: this.Gv.currentUser.selectedPractice.PracticeCode,
                PTLStatus: this.patient.PTL_STATUS
            },
                (data) => {
                    if (data.Response) {
                        this.PatientAlreadyExist = true;
                        this.toastr.error("Patient already exist.", "Duplicate Patient");
                        return;
                    }
                    else
                        this.PatientAlreadyExist = false;
                })
        }
    }

    getZipCityState(event: any) {
        if (this.patient.ZIP.length == 5 || this.patient.ZIP.length == 9) {
            this.API.getData('/Demographic/GetCitiesByZipCode?ZipCode=' + this.patient.ZIP).subscribe(
                data => {
                    if (data.Status == "Sucess") {
                        this.zipData = data.Response;
                        if (this.zipData.length > 0) {
                            this.patient.City = this.zipData[0].CityName;
                            this.patient.State = this.zipData[0].State;
                        } else {
                            this.patient.City = null;
                            this.patient.State = null;
                        }
                        this.checkforDublicatePatient();

                    }
                    else {
                        this.patient.City = "";
                        this.patient.State = "";
                    }
                });
        } else {
            this.patient.City = null;
            this.patient.State = null;
        }
    }

    //#endregion

    //#region Patient

    dateMask(event: any) {
        var v = event.target.value;
        if (v.match(/^\d{2}$/) !== null) {
            event.target.value = v + '/';
        } else if (v.match(/^\d{2}\/\d{2}$/) !== null) {
            event.target.value = v + '/';
        }
    }

    onValidateAddress() {
        if (this.canValidateAddress()) {
            let validateAddressRequest: ValidateAddreesRequestViewModel = new ValidateAddreesRequestViewModel();
            validateAddressRequest.zipcode = this.patient.ZIP;
            validateAddressRequest.city = this.patient.City;
            validateAddressRequest.state = this.patient.State;
            validateAddressRequest.street = this.patient.Address;
            this.API.PostData("/Demographic/ValidateAddress", validateAddressRequest, (res) => {
                if (res.Status == 'Success') {
                    this.validateAddressResponse = res.Response;
                    if (this.validateAddressResponse && this.validateAddressResponse.length > 0) {
                        this.patient.ZIP = this.validateAddressResponse[0].components.zipcode || this.patient.ZIP;
                        this.patient.ZIP = this.patient.ZIP + this.validateAddressResponse[0].components.plus4_code || '';
                        this.patient.City = this.validateAddressResponse[0].components.city_name || this.patient.City;
                        this.patient.State = this.validateAddressResponse[0].components.state_abbreviation || this.patient.State;
                        this.patient.Address = this.validateAddressResponse[0].delivery_line_1 || this.patient.Address;
                        swal("Address Validation", "Address is valid", "success");
                    }
                    else {
                        swal("Address Validation", "Address is not valid", "error");
                    }
                } else {
                    swal("Address Validation", res.Status, "error");
                }
            });
        } else {
            swal("Address Validation", "Please provide complete address to validate.", 'info');
        }
    }

    canValidateAddress(): boolean {
        if (!Common.isNullOrEmpty(this.patient.ZIP) &&
            !Common.isNullOrEmpty(this.patient.City) &&
            !Common.isNullOrEmpty(this.patient.State) &&
            !Common.isNullOrEmpty(this.patient.Address)) {
            return true;
        } else {
            return false;
        }
    }
    onDateChangedDOB(event) {
        this.patient.Date_Of_Birth = event.formatted;
    }
    onDateChangedDecessed(event) {
        if (event.formatted == "") {
            this.formControls['death'].get('deceasedDate').setValue(null);
            this.formControls['death'].get('deceasedDate').setValidators([Validators.required]);
            this.formControls['death'].get('deceasedDate').updateValueAndValidity({ emitEvent: true, onlySelf: false });
        }
        else {
            this.patient.DeathDate = event.formatted;
            this.formControls['death'].get('deceasedDate').setValue(this.patient.DeathDate);
            this.formControls['death'].get('deceasedDate').updateValueAndValidity({ emitEvent: true, onlySelf: false });
        }
    }

    onDateChangedTerminationDate(event, index) {
        this.patient.PatientInsuranceList[index].Termination_Date = event.formatted;
    }

    onDateChangedEffectiveDate(event, index) {
        this.patient.PatientInsuranceList[index].Effective_Date = event.formatted;
    }

    // Bind Fields with Empty Model all Combos etc
    getPatientModel() {
        this.API.getData(`/Demographic/GetPatientModel?practiceCode=${this.Gv.currentUser.selectedPractice.PracticeCode}`).subscribe(
            data => {
                this.patient = data.Response;
                console.log("test here :", data.Response);
                this.patient.Referral_Physicians = data.Response.ReferringPhysicianList.map(i => {
                    return {
                        Referral_Code: i.Referral_Code,
                        Referral_Fname: i.Referral_Fname,
                        Referral_Lname: i.Referral_Lname,
                        In_Active: i.In_Active
                    }
                });
                ////////////////////////////////////////////////////////////////
                this.providerList = this.patient.ProviderList;
                this.patient.ProviderList = data.Response.ProviderList.filter(p => p.Is_Active !== false);

                // this.patient.ProviderList =data.Response.Is_Active
                this.currentInsuranceNumber = 0;
            }
        );
    }
    // Bind Image Fuction

    readUrl(event: any) {
        // if (event.target.files && event.target.files[0]) {
        //     var reader = new FileReader();
        //     reader.onload = (event: ProgressEvent) => this.url = (event.target as FileReader).result;
        //     reader.readAsDataURL(event.target.files[0]);
        // }
    }




        movetoclaim(PatientFullNamee: any, Patient_Account: any, ID: any) {
            
              
            console.log(PatientFullNamee);
            var n= PatientFullNamee.split(',');
            var First_Name= n[0];
            var Last_Name= n[1];
            const url = this.router.serializeUrl(this.router.createUrlTree(['/Patient/Demographics/',
              Common.encodeBase64(JSON.stringify({
                Patient_Account: Patient_Account,
                disableForm: false,
                PatientLastName: Last_Name,
                PatientFirstName: First_Name,
                A_ID: ID,
            }))]));
        const url_var = window.location.origin;
        const newurl = url_var + '/#' + url;
        //const newurl = environment.localUrl + url;
        //window.open(newurl, '_blank');
        window.open(newurl, '_parent');
    }


    // Get the Data of Edit Patient




    AddPatient(type: string) {
       
        debugger;
        if (this.canAddPatient() == true) {
            this.preparePatientInsurances();
            if (type === 'draft')
                this.patient.PTL_STATUS = true;
            else
                this.patient.PTL_STATUS = false;
            if (this.patient.Family_Id === "null")
                this.patient.Family_Id = null;
            if (this.patient.SSN && this.patient.SSN.trim().length === 0)
                this.patient.SSN = null;
                debugger;
            this.patient.Practice_Code = this.Gv.currentUser.selectedPractice.PracticeCode;


            this.API.PostData('/Demographic/AddEditPatient', this.patient, (d) => {
                if (d.Status == "Sucess") {
                    if (+this.patient.Patient_Account === 0) {
                        this.patient.Patient_Account = d.Response;
                    }
                    this.router.navigate(['/Patient/Demographics/Detail/', Common.encodeBase64(JSON.stringify({
                        Patient_Account: this.patient.Patient_Account,
                        PatientFirstName: this.patient.First_Name,
                        PatientLastName: this.patient.Last_Name,
                        claimNo: 0,
                        A_ID: this.patientInfo.A_ID,
                        disableForm: true
                    }))])
                    .then(() => {

                        if(this.accountInfo.A_ID!=null)
                        {
                            debugger
                            this.movetoclaim( this.PatientFullNamee, this.patientInfo.Patient_Account ,this.patientInfo.A_ID );

                        }
                        else{
                        location.reload();
                    }
                      });
                }
                else {
                    let errors = d.Status.replace(/;/g, "<br>");
                    console.log(d.Response)
                    this.toastr.error(errors, "Invalid Form", {
                        enableHtml: true,
                        closeButton: true,
                        progressBar: true
                    });
                }
            })
        }
    }

    canAddPatient() {
        if (this.checkDuplicateInsurance() == true) {
            this.toastr.warning('Duplicate Insurance', 'Validation');
            return false;
        }
        else if (this.patient.IsDeceased) {
            if (!this.patient.DeathDate) {
                this.toastr.warning('Enter death date', 'Validation');
                return false;
            }
            else
                return true;
        }
        else
            return true;
    }

    checkDuplicateInsurance() {
        let formArray = <FormArray>this.PatientForm.controls['patientInsurance'];
        if (formArray.controls.length <= 1) {
            return false;
        }
        else if (formArray.controls.length > 1) {
            let a = formArray.controls.length;
            for (let i = 0; i < a; i++) {
                let group = formArray.controls[i];
                this.patient.PatientInsuranceList[i].PayerDescription = group.get('payerDescription').value;
                this.patient.PatientInsuranceList[i].Pri_Sec_Oth_Type = group.get('insuranceMode').value;
                this.patient.PatientInsuranceList[i].Policy_Number = group.get('policyNumber').value;
            }
            switch (a) {
                case a = 2: {
                    if (
                        (
                            // this.patient.PatientInsuranceList[0].PayerDescription == this.patient.PatientInsuranceList[1].PayerDescription &&
                            (this.patient.PatientInsuranceList[0].Pri_Sec_Oth_Type == "P" &&
                                this.patient.PatientInsuranceList[1].Pri_Sec_Oth_Type == "P") ||
                            (this.patient.PatientInsuranceList[0].Pri_Sec_Oth_Type == "S" &&
                                this.patient.PatientInsuranceList[1].Pri_Sec_Oth_Type == "S") ||
                            (this.patient.PatientInsuranceList[0].Pri_Sec_Oth_Type == "O" &&
                                this.patient.PatientInsuranceList[1].Pri_Sec_Oth_Type == "O")
                            // this.patient.PatientInsuranceList[0].Policy_Number == this.patient.PatientInsuranceList[1].Policy_Number
                        )
                    )
                        return true;
                    break;
                }
                case a = 3: {
                    if (
                        (
                            // this.patient.PatientInsuranceList[0].PayerDescription == this.patient.PatientInsuranceList[1].PayerDescription &&
                            (this.patient.PatientInsuranceList[0].Pri_Sec_Oth_Type == "P" &&
                                this.patient.PatientInsuranceList[1].Pri_Sec_Oth_Type == "P") ||
                            (this.patient.PatientInsuranceList[0].Pri_Sec_Oth_Type == "S" &&
                                this.patient.PatientInsuranceList[1].Pri_Sec_Oth_Type == "S") ||
                            (this.patient.PatientInsuranceList[0].Pri_Sec_Oth_Type == "O" &&
                                this.patient.PatientInsuranceList[1].Pri_Sec_Oth_Type == "O")
                            //&& this.patient.PatientInsuranceList[0].Policy_Number == this.patient.PatientInsuranceList[1].Policy_Number
                        ) ||
                        (
                            // this.patient.PatientInsuranceList[0].PayerDescription == this.patient.PatientInsuranceList[2].PayerDescription &&
                            (this.patient.PatientInsuranceList[0].Pri_Sec_Oth_Type == "P" &&
                                this.patient.PatientInsuranceList[2].Pri_Sec_Oth_Type == "P") ||
                            (this.patient.PatientInsuranceList[0].Pri_Sec_Oth_Type == "S" &&
                                this.patient.PatientInsuranceList[2].Pri_Sec_Oth_Type == "S") ||
                            (this.patient.PatientInsuranceList[0].Pri_Sec_Oth_Type == "O" &&
                                this.patient.PatientInsuranceList[2].Pri_Sec_Oth_Type == "O")
                            // && this.patient.PatientInsuranceList[0].Policy_Number == this.patient.PatientInsuranceList[2].Policy_Number
                        ) ||
                        (
                            // this.patient.PatientInsuranceList[1].PayerDescription == this.patient.PatientInsuranceList[2].PayerDescription &&
                            (this.patient.PatientInsuranceList[1].Pri_Sec_Oth_Type == "P" &&
                                this.patient.PatientInsuranceList[2].Pri_Sec_Oth_Type == "P") ||
                            (this.patient.PatientInsuranceList[1].Pri_Sec_Oth_Type == "S" &&
                                this.patient.PatientInsuranceList[2].Pri_Sec_Oth_Type == "S") ||
                            (this.patient.PatientInsuranceList[1].Pri_Sec_Oth_Type == "O" &&
                                this.patient.PatientInsuranceList[2].Pri_Sec_Oth_Type == "O")
                            // && this.patient.PatientInsuranceList[1].Policy_Number == this.patient.PatientInsuranceList[2].Policy_Number
                        )
                    )
                        return true;
                    break;
                }
                default: {
                    return false;
                    break;
                }
            }
        }
    }

    preparePatientInsurances() {
        let formArray = <FormArray>this.PatientForm.controls['patientInsurance'];
        for (let i = 0; i < formArray.controls.length; i++) {
            let group = formArray.controls[i];
            this.patient.PatientInsuranceList[i].PayerDescription = group.get('payerDescription').value;
            this.patient.PatientInsuranceList[i].Pri_Sec_Oth_Type = group.get('insuranceMode').value;
            this.patient.PatientInsuranceList[i].Policy_Number = group.get('policyNumber').value;
            this.patient.PatientInsuranceList[i].Co_Payment = group.get('coPay').value;
            this.patient.PatientInsuranceList[i].Deductions = group.get('deDuctible').value;
            this.patient.PatientInsuranceList[i].Co_Payment_Per = group.get('coPaymentPer').value;
            this.patient.PatientInsuranceList[i].CCN = group.get('ccn').value;
            this.patient.PatientInsuranceList[i].Group_Number = group.get('groupNumber').value;
            this.patient.PatientInsuranceList[i].Group_Name = group.get('groupName').value;
            this.patient.PatientInsuranceList[i].Relationship = group.get('relation').value;
            this.patient.PatientInsuranceList[i].Access_Carolina_Number = group.get('accCarolinaNumber').value;
            this.patient.PatientInsuranceList[i].Is_Capitated_Patient = group.get('isCapitated').value;
        }
    }


    onChangeProfilePhoto(event) {
        const { files } = event.target;
        if (files.length === 0) {
            this.toastr.warning('Please choose photo to upload.', 'File Missing');
            return;
        }
        const file = files[0];
        const { size, type } = file;
        if (type !== "image/jpg" && type !== "image/png" && type !== "image/gif" && type !== "image/jpeg") {
            this.toastr.error('Please choose JPG, PNG or GIF', 'File Type');
            return false;
        }
        else if (size > environment.maxImageUploadSize) {
            this.toastr.error('Maximum file size exceeded.', 'File Size');
            // this.url="../../../assets/Images/pic.png";
            // this.PatientForm.get('image').patchValue({profilePic:null
            // });
            return;
        }
        else {
            if (event.target.files && event.target.files[0]) {
                var reader = new FileReader();
                reader.onload = (event: ProgressEvent) => this.url = (event.target as FileReader).result;
                reader.readAsDataURL(event.target.files[0]);
            }
            this.selectedFile = file;
            this.saveImage(event);
        }

        this.selectedFile = file;
        this.saveImage(event);
    }



    saveImage(event) {
        const formData = new FormData();
        formData.append("Files", this.selectedFile);
        this.fileHandler.UploadFile(formData, '/Demographic/UploadImage').subscribe(
            (res) => {
                if (res.Status === "success") {
                    this.readUrl(event);
                    this.patient.PicturePath = res.Response;
                    this.toastr.info('Save or Save as Draft to Submit Picture.', 'Picture Uploaded');
                }
                else {
                    this.patient.PicturePath = null;
                    this.selectedFile = null;
                }
            }, (err) => {
                this.patient.PicturePath = null;
                this.selectedFile = null;
            }
        )
    }

    //#endregion
    goBack() {
        this.router.navigate(['/patient/PatientSearch']);
    }

    close() {
        this.API.confirmFun('Do you wnat to delete this Item ?', '', () => {
            this.router.navigate(['/Demographic/SearchPatient/'])
        });
    }

    keyUpEvent() {
        //   var date_regex = /^[ 0-9 ]*$/gm;
        //         if (!date_regex.test($("#" + id).val())) {
        //             $("#" + id).val("");
        //             $("#btnEmptyField").trigger("click");
        //         }
    }

    setFocus(event: KeyboardEvent) {
        if (event.keyCode == 9) {
            event.preventDefault();
            $('#txtSSN').focus();
        }
    }

    toggleEdit() {
        // this.patient.ProviderList = this.patient.ProviderList.filter(p => p.Is_Active==true);
        console.log("his.patient.ProviderList :", this.patient.ProviderList);
        this.router.navigate(['/Patient/Demographics/Edit/',
            Common.encodeBase64(JSON.stringify({
                Patient_Account: this.patient.Patient_Account,
                PatientFirstName: this.patient.First_Name,
                PatientLastName: this.patient.Last_Name,
                claimNo: 0,
                disableForm: false
            }))
        ]);
    }

    togglePatientInsuranceRowEdit(index: number) {
        if (this.disableForm)
            return;
        alert(`Row ${index} can be edit now`);
    }

    // validateDateFormat(dt: string, Type: string, ndx: number, event: KeyboardEvent = null) {
    //     if (event.keyCode == 8 || event.keyCode == 46)
    //         return;

    //     if (dt == undefined || dt == null)
    //         return;
    //     if (dt.length == 2 || dt.length == 5) {
    //         if (Type == "EffectiveDate")
    //             this.patient.PatientInsuranceList.Response[ndx].Effective_Date = dt + "/";
    //         else if (Type == "TerminationDate")
    //             this.patient.PatientInsuranceList.Response[ndx].Termination_Date = dt + "/";
    //     }
    // }

    //#region Guarantor & Subscriber

    showGuarantor() {
        this.guarantorModalWindowProp = {
            title: 'Guarantor',
            description: 'Find or Add and Select Guarantor.',
            caller: 'PATIENT_FINANCIAL_GUARANTOR'
        };
        this.guarantorModal.show();
    }

    showSubscriber(ndx: number) {
        if (this.patient.PatientInsuranceList[ndx].Relationship != '7') {
            this.currentInsuranceNumber = ndx;
            this.guarantorModalWindowProp = {
                title: 'Subscriber',
                description: 'Find or Add and Select Subscriber.',
                caller: 'PATIENT_INSURANCE'
            };
            this.guarantorModal.show();
        }
    }

    onSelectGuarantor(response) {
        if (response.for === 'PATIENT_FINANCIAL_GUARANTOR') {
            const { guarantorCode, guarantorName } = response.data;
            this.patient.Financial_Guarantor = guarantorCode;
            this.patient.Financial_Guarantor_Name = guarantorName;
            this.addGuarantor = false;
            this.guarantorModal.hide();
        } else if (response.for === 'PATIENT_INSURANCE') {
            const { guarantorCode, guarantorName } = response.data;
            (<FormArray>this.PatientForm.controls['patientInsurance']).at(this.currentInsuranceNumber).get('subscriberName').setValue(guarantorName);
            (<FormArray>this.PatientForm.controls['patientInsurance']).at(this.currentInsuranceNumber).get('relation').setValidators([Validators.required]);
            (<FormArray>this.PatientForm.controls['patientInsurance']).at(this.currentInsuranceNumber).get('relation').updateValueAndValidity({ emitEvent: false, onlySelf: true });
            this.patient.PatientInsuranceList[this.currentInsuranceNumber].Subscriber = guarantorCode;
            this.addGuarantor = false;
            this.guarantorModal.hide();
        }
    }

    onGuarantorHidden(event: any) {
        this.addGuarantor = false;
        if (!Common.isNullOrEmpty(this.guarantorAddEdit))
            this.guarantorAddEdit.resetForm();
        if (!Common.isNullOrEmpty(this.guarantorList))
            this.guarantorList.ClearSearchFields();
    }

    //#endregion

    //#region Patient Notes

    showNotes() {
        this.patientNotesWindow.show();
    }

    //#endregion

    //#region Patient Insurance

    ShowInsuranceNamePopup(ndx: number) {
        if (!this.disableForm) {
            this.insuranceModal.show();
            this.currentInsuranceNumber = ndx;
        }
    }

    onAddNewPatientInsurance() {
        if (!this.disableForm) {
            this.newRowInsurances = true;
            if (this.patient.PatientInsuranceList == null)
                this.patient.PatientInsuranceList = [];
            if (this.patient.PatientInsuranceList.length < 3) {
                let newPatientInsurance = new PatientInsuranceResponse();
                newPatientInsurance.Patient_Insurance_Id = 0;
                newPatientInsurance.Relationship = "7";
                this.onAddPatientInsuranceRow(newPatientInsurance);
                this.patient.PatientInsuranceList.push(newPatientInsurance);
            }
        }
    }

    onDeletePatientInsuranceRow(ndx: number) {
        if (this.patient.Patient_Account == 0 || this.patient.PatientInsuranceList[ndx].Patient_Insurance_Id == 0) {
            this.patientInsurancesControl.removeAt(ndx);
            this.patient.PatientInsuranceList.splice(ndx, 1);
        } else {
            this.API.confirmFun("Delete Insurance", "Are you sure you want to delete this Insurance?", () => {
                this.API.getData(`/Demographic/DeletePatientInsurance?PatientAccount=${this.patient.Patient_Account}&PatientInsuranceId=${this.patient.PatientInsuranceList[ndx].Patient_Insurance_Id}`).subscribe(
                    data => {
                        if (data.Status == "Sucess") {
                            this.patientInsurancesControl.removeAt(ndx);
                            this.patient.PatientInsuranceList.splice(ndx, 1);
                            this.toastr.success('Insurance has been deleted successfully.', 'Patient Insurance');
                        }
                    });
            });
        }
    }

    onSelectInsurance({ Insurance_Id, Inspayer_Description }) {
        this.patient.PatientInsuranceList[this.currentInsuranceNumber].PayerDescription = Inspayer_Description;
        this.patient.PatientInsuranceList[this.currentInsuranceNumber].Insurance_Id = Number(Insurance_Id);
        (<FormArray>this.PatientForm.controls['patientInsurance']).at(this.currentInsuranceNumber).get('payerDescription').setValue(Inspayer_Description);
        this.insuranceModal.hide();
    }

    savePatientInsurance(ndx: number, str: string = "") {
        if (Common.isNullOrEmpty(this.patientInfo.Patient_Account)) {
            this.toastr.warning('To manage patient insurances, please save patient first.', 'Notes Management');
            return;
        }
        if (!this.canSaveIns(ndx))
            return;

        this.patient.PatientInsuranceList[ndx].Patient_Account = this.Gv.Patient_Account;

        this.API.PostData('/Demographic/SavePatientInsurance/', this.patient.PatientInsuranceList[ndx], (d) => {
            if (d.Status == "Sucess") {
                this.patient.PatientInsuranceList[ndx].Patient_Insurance_Id = d;
                if (str == "") {
                    swal('Patient Insurance has been saved.', '', 'success');
                    // this.blnEditDemoChk = !this.blnEditDemoChk;
                }
            }
            else {
                swal('Failed', d.Status, 'error');
            }
        })
    }

    canSaveIns(ndx: number): boolean {
        if (Common.isNullOrEmpty(this.patient.PatientInsuranceList[ndx].PayerDescription)) {
            swal('Failed', "Select Insurance Description.", 'error');
            return false;
        }

        if (Common.isNullOrEmpty(this.patient.PatientInsuranceList[ndx].Pri_Sec_Oth_Type)) {
            swal('Failed', "Select Insurance Mode.", 'error');
            return false;
        }

        if (Common.isNullOrEmpty(this.patient.PatientInsuranceList[ndx].Policy_Number)) {
            swal('Failed', "Enter Policy Number.", 'error');
            return false;
        }
        if (Common.isNullOrEmpty(this.patient.PatientInsuranceList[ndx].Relationship)) {
            swal('Failed', "Select Insurance Relationship", 'error');
            return false;
        }

        return true;
    }

    onSubscriberRelationChange(relation: string, index: number) {
        this.currentInsuranceNumber = index;
        this.patient.PatientInsuranceList[index].Relationship = relation;
        if (relation == '7') {
            (<FormArray>this.PatientForm.controls['patientInsurance']).at(index).get('subscriberName').setValue('');
            this.patient.PatientInsuranceList[index].SubscriberName = undefined;
            this.patient.PatientInsuranceList[index].Subscriber = null;
            (<FormArray>this.PatientForm.controls['patientInsurance']).at(this.currentInsuranceNumber).get('subscriberName').clearValidators();
            (<FormArray>this.PatientForm.controls['patientInsurance']).at(this.currentInsuranceNumber).get('subscriberName').updateValueAndValidity({ emitEvent: false, onlySelf: true });
            (<FormArray>this.PatientForm.controls['patientInsurance']).at(this.currentInsuranceNumber).get('subscriberName').disable();
        }
        else {
            (<FormArray>this.PatientForm.controls['patientInsurance']).at(this.currentInsuranceNumber).get('subscriberName').setValidators([Validators.required]);
            (<FormArray>this.PatientForm.controls['patientInsurance']).at(this.currentInsuranceNumber).get('subscriberName').updateValueAndValidity({ emitEvent: false, onlySelf: true });
            (<FormArray>this.PatientForm.controls['patientInsurance']).at(this.currentInsuranceNumber).get('subscriberName').enable();
        }
    }

    //#endregion

    //#region Patient
    shouldHide(provider: any): boolean {
        // if(this.claimInfo.claimNo > 0){

        //     return provider.Is_Active;
        // }
        return !provider.Is_Active;
    }
    getInactiveProvider(provide_code: any) {
        return this.providerList.find(x => x.Provider_Code == provide_code);
    }
    getPatient(id) {
        this.dataLoading = true;
        this.getImage(id);
        this.API.getData('/Demographic/GetPatient?PatientAccount=' + id).subscribe(
            data => {
                this.zipData = data.Response.ZipCodeCities;
                this.patient = data.Response;
                this.dataLoading = false;
                console.log("Referral physicians", this.patient.Referral_Physicians);
                this.patient.Referral_Physicians = data.Response.ReferringPhysicianList.map(i => {
                    return {
                        Referral_Code: i.Referral_Code,
                        Referral_Fname: i.Referral_Fname,
                        Referral_Lname: i.Referral_Lname,
                        In_Active: i.In_Active
                    }
                });
                debugger
                // this.PatientForm.get('additional').patchValue({provider: this.patient.Provider_Code
                // });
                // this.patient.Provider_Code 
                this.providerList = this.patient.ProviderList;
                // this.patient.ProviderList = this.patient.ProviderList.filter(p => p.Is_Active==true); 

                this.patient.Date_Of_Birth = this.datepipe.transform(this.patient.Date_Of_Birth, 'MM/dd/yyyy');
                this.setDate(this.patient.Date_Of_Birth);
                if (this.patient && this.patient.Financial_Guarantor_Name)
                    this.formControls['guarantor'].get('name').setValue(this.patient.Financial_Guarantor_Name);
                this.patient.DeathDate = this.datepipe.transform(this.patient.DeathDate, 'MM/dd/yyyy');
                this.patient.PatientInsuranceList.forEach((insurance, index) => {
                    insurance.Effective_Date = this.datepipe.transform(insurance.Effective_Date, 'MM/dd/yyyy');
                    insurance.Termination_Date = this.datepipe.transform(insurance.Termination_Date, 'MM/dd/yyyy');
                    this.onAddPatientInsuranceRow(insurance);
                    this.onSubscriberRelationChange(insurance.Relationship, index);
                });
                if (this.patient.PrimaryInsuranceName != undefined || this.patient.PrimaryInsuranceName != "")
                    this.InsuranceNames[0] = this.patient.PrimaryInsuranceName;
                if (this.patient.SecondaryInsuranceName != undefined || this.patient.SecondaryInsuranceName != "")
                    this.InsuranceNames[1] = this.patient.SecondaryInsuranceName;
                if (this.patient.OtherInsuranceName != undefined || this.patient.OtherInsuranceName != "")
                    this.InsuranceNames[2] = this.patient.OtherInsuranceName;
                if (this.patient.Family_Id === "")
                    this.patient.Family_Id = null;

                if (!this.patientInfo.disableForm) {
                    this.PatientForm.enable();
                    this.disableForm = false;
                }

                debugger
                if (this.patient.Cell_Phone == "" || this.patient.Cell_Phone == " ")
                    this.patient.Cell_Phone = null;
                if (this.patient.Home_Phone == "" || this.patient.Home_Phone == " ")
                    this.patient.Home_Phone = null;
                if (this.patient.Business_Phone == "" || this.patient.Business_Phone == " ")
                    this.patient.Business_Phone = null;




                this.PatientForm.get(['contact', 'email'])[this.patient.emailnotonfile == true ? 'disable' : 'enable']();
                if (this.patient.PatientInsuranceList.length == 0)
                    this.newRowInsurances = true;
            },
            error =>{
                this.dataLoading = false;
                console.error('Error found',error)
            }
        );
    }

    getImage(id) {
        debugger
        if (!Common.isNullOrEmpty(this.patient.Patient_Account)) {
            this.API.getData('/Demographic/GetImage?PatientAccount=' + id).subscribe(
                data => {
                    if (data.Status == "success") {
                        this.url = 'data:image/jpeg;base64,' + data.Response;
                    }
                }
            );
        }
    }

    isGuarantorRelationshipSelf() {
        return (Number(this.patient.Gurantor_Relation) === 7);
    }

    isFamilyIdSelf() {
        return (Number(this.patient.Family_Id) === 7);
    }
    //#endregion

    checkEligibility(insurance_id: any, indexValue) {
        var insurance_id = insurance_id
        var indexValue = indexValue
        this.eligbilityDetails = [];
        this.eligiblityError = "";
        this.showEligiblityDetails = "";
        this.eligiblityModel = false;
        this.date = []

        console.log(indexValue)
        debugger
        this.API.getData(`/Demographic/InquiryByPracPatProvider?PracticeCode=${this._gv.currentUser.selectedPractice.PracticeCode}&PatAcccount=${this.patient.Patient_Account}&ProviderCode=${this.patient.Provider_Code}&insurance_id=${insurance_id}`).subscribe(response => {
            console.log(response)
            if (response.Status === 'Success') {
                console.log("green Message", response)
                // this.eligiblityBtnColor = response.Response;
                localStorage.setItem("mydata", response.Data);
                var obj = JSON.parse(response.Data)
                console.log("sjkfsjkdfhsk", obj);
                switch (response.SuccessCode) {
                    case 0:
                        console.log("benefit data", obj.eligibilityresponse)
                        if (obj.eligibilityresponse.inforeceiver.rejection) {
                            this.eligiblityError = obj.eligibilityresponse.inforeceiver.rejection.rejectreason + " ,  " + obj.eligibilityresponse.inforeceiver.rejection.followupaction;
                            this.insurance_idRed.push(indexValue);
                        }

                        if(obj.eligibilityresponse.hasOwnProperty('dependent')){
                            this.eligbilityDetails=[]
                                this.eligbilityDetails.push(obj) ;
                                this.eligiblityModel=true
                                this.showEligiblityDetails=this.eligbilityDetails[0].eligibilityresponse.dependent.benefit.info;
                                this.patientFirstName=this.eligbilityDetails[0].eligibilityresponse.dependent.patientname.first;
                                debugger;
                                this.patientMiddleName=this.eligbilityDetails[0].eligibilityresponse.dependent.patientname.middle;
                                this.patientLastName=this.eligbilityDetails[0].eligibilityresponse.dependent.patientname.last;
                                this.patientSex=this.eligbilityDetails[0].eligibilityresponse.dependent.sex;
                                this.patientDateofBirth=this.eligbilityDetails[0].eligibilityresponse.dependent["date-of-birth"];
                                this.patientDateofBirth=this.patientDateofBirth.slice(4, 6)+'-'+this.patientDateofBirth.slice(6, 8)+'-'+this.patientDateofBirth.slice(0, 4);
                                this.patientAddress=this.eligbilityDetails[0].eligibilityresponse.dependent.patientname.patientaddress;
                                this.patientCity=this.eligbilityDetails[0].eligibilityresponse.dependent.patientname.patientcity;
                                this.patientState=this.eligbilityDetails[0].eligibilityresponse.dependent.patientname.patientstate;
                                this.patientZip=this.eligbilityDetails[0].eligibilityresponse.dependent.patientname.patientzip;
                                if(obj.eligibilityresponse.inforeceiver.hasOwnProperty('providername')){
                                    this.providerFirstName=this.eligbilityDetails[0].eligibilityresponse.inforeceiver.providername.first;
                                    this.providerLastName=this.eligbilityDetails[0].eligibilityresponse.inforeceiver.providername.last;
                                }
                                // NPI="";

                            if (this.eligbilityDetails[0].eligibilityresponse.dependent.hasOwnProperty('date')) {

                                if (this.eligbilityDetails[0].eligibilityresponse.dependent.date.length > 0) {
                                    for (let i = 0; i < this.eligbilityDetails[0].eligibilityresponse.dependent.date.length; i++) {
                                        let dateofservice = this.eligbilityDetails[0].eligibilityresponse.dependent.date[i]["date-of-service"]
                                        this.eligbilityDetails[0].eligibilityresponse.dependent.date[i]["date-of-service"] = dateofservice.slice(4, 6) + '-' + dateofservice.slice(6, 8) + '-' + dateofservice.slice(0, 4);
                                        this.date.push(this.eligbilityDetails[0].eligibilityresponse.dependent.date[i]);
                                    }
                                } else {
                                    let dateofservice = this.eligbilityDetails[0].eligibilityresponse.dependent.date["date-of-service"];
                                    this.eligbilityDetails[0].eligibilityresponse.dependent.date["date-of-service"] = dateofservice.slice(4, 6) + '-' + dateofservice.slice(6, 8) + '-' + dateofservice.slice(0, 4);
                                    this.date.push(this.eligbilityDetails[0].eligibilityresponse.dependent.date)
                                }
                            }

                            if (obj.eligibilityresponse.dependent.benefit.hasOwnProperty('info')) {
                                this.showEligiblityDetails = this.eligbilityDetails[0].eligibilityresponse.dependent.benefit.info;
                                if (this.showEligiblityDetails != 'Inactive') {
                                    this.insurance_idGreen.push(indexValue);
                                }
                                else {
                                    this.insurance_idRed.push(indexValue);
                                }
                            }
                            if (!obj.eligibilityresponse.dependent.benefit.hasOwnProperty('info')) {
                                console.log("dependent.benefit[0]");
                                this.showEligiblityDetails = this.eligbilityDetails[0].eligibilityresponse.dependent.benefit[0].info;
                                if (this.showEligiblityDetails != 'Inactive') {
                                    this.insurance_idGreen.push(indexValue);
                                }
                                else {
                                    this.insurance_idRed.push(indexValue);
                                }
                            }

                        }

                        if (obj.eligibilityresponse.hasOwnProperty('subscriber')) {
                            if (obj.eligibilityresponse.subscriber.hasOwnProperty('rejection')) {
                                this.insurance_idRed.push(indexValue);
                                if (obj.eligibilityresponse.subscriber.rejection.length > 0) {
                                    this.eligiblityError = obj.eligibilityresponse.subscriber.rejection[0].rejectreason + " ,  " + obj.eligibilityresponse.subscriber.rejection[0].followupaction;
                                }
                                else {
                                    this.eligiblityError = obj.eligibilityresponse.subscriber.rejection.rejectreason + " ,  " + obj.eligibilityresponse.subscriber.rejection.followupaction;
                                }

                            }

                            if(obj.eligibilityresponse.subscriber.hasOwnProperty('benefit')){
                                this.eligbilityDetails=[]
                                
                                    this.eligbilityDetails.push(obj) ;
                                    this.eligiblityModel=true;
                                    this.patientFirstName=this.eligbilityDetails[0].eligibilityresponse.subscriber.patientname.first;
                                   debugger;
                                    this.patientMiddleName=this.eligbilityDetails[0].eligibilityresponse.subscriber.patientname.middle;
                                    this.patientLastName=this.eligbilityDetails[0].eligibilityresponse.subscriber.patientname.last;
                                    this.patientSex=this.eligbilityDetails[0].eligibilityresponse.subscriber.sex;
                                    this.patientDateofBirth=this.eligbilityDetails[0].eligibilityresponse.subscriber["date-of-birth"];
                                    this.patientDateofBirth=this.patientDateofBirth.slice(4, 6)+'-'+this.patientDateofBirth.slice(6, 8)+'-'+this.patientDateofBirth.slice(0, 4);
                                    this.patientAddress=this.eligbilityDetails[0].eligibilityresponse.subscriber.patientname.patientaddress;
                                    this.patientCity=this.eligbilityDetails[0].eligibilityresponse.subscriber.patientname.patientcity;
                                    this.patientState=this.eligbilityDetails[0].eligibilityresponse.subscriber.patientname.patientstate;
                                    this.patientZip=this.eligbilityDetails[0].eligibilityresponse.subscriber.patientname.patientzip;
    
                                    if(this.eligbilityDetails[0].eligibilityresponse.subscriber.hasOwnProperty('date')){
                
                                        if(this.eligbilityDetails[0].eligibilityresponse.subscriber.date.length>0){
                                         for(let i=0;i<this.eligbilityDetails[0].eligibilityresponse.subscriber.date.length;i++){
                                           let dateofservice =this.eligbilityDetails[0].eligibilityresponse.subscriber.date[i]["date-of-service"]
                                           this.eligbilityDetails[0].eligibilityresponse.subscriber.date[i]["date-of-service"]=dateofservice.slice(4, 6)+'-'+dateofservice.slice(6, 8)+'-'+dateofservice.slice(0, 4);
                                           this.date.push(this.eligbilityDetails[0].eligibilityresponse.subscriber.date[i]);
                                         }
                                        }else{
                                         let dateofservice=this.eligbilityDetails[0].eligibilityresponse.subscriber.date["date-of-service"];
                                           this.eligbilityDetails[0].eligibilityresponse.subscriber.date["date-of-service"]=dateofservice.slice(4, 6)+'-'+dateofservice.slice(6, 8)+'-'+dateofservice.slice(0, 4);
                                           this.date.push(this.eligbilityDetails[0].eligibilityresponse.subscriber.date)
                                        }
                                     }
    
    
                                    if(obj.eligibilityresponse.inforeceiver.hasOwnProperty('providername')){
                                        this.providerFirstName=this.eligbilityDetails[0].eligibilityresponse.inforeceiver.providername.first;
                                        this.providerLastName=this.eligbilityDetails[0].eligibilityresponse.inforeceiver.providername.last;
                                    }
                                    if(obj.eligibilityresponse.subscriber.benefit.hasOwnProperty('info')){
                                        this.showEligiblityDetails=this.eligbilityDetails[0].eligibilityresponse.subscriber.benefit.info;
                                        if(this.showEligiblityDetails!='Inactive'){
                                            this.insurance_idGreen.push(indexValue);
                                        }
                                        else{
                                            this.insurance_idRed.push(indexValue);
                                        }
                                    }
                                    if(!obj.eligibilityresponse.subscriber.benefit.hasOwnProperty('info')){
                                        console.log("subscriber.benefit[0]");
                                        this.showEligiblityDetails=this.eligbilityDetails[0].eligibilityresponse.subscriber.benefit[0].info;
                                        if(this.showEligiblityDetails!='Inactive'){
                                            this.insurance_idGreen.push(indexValue);
                                        }
                                        else{
                                            this.insurance_idRed.push(indexValue);
                                        }
                                    }
                            }
                        }



                        break;
                    case 2:
                        this.eligiblityError = "Could not connect to server, please try later";
                        this.insurance_idRed.push(indexValue);
                        break;
                    case 3:
                        this.eligiblityError = "Eligibility not supported for this payer";
                        this.insurance_idRed.push(indexValue);
                        break;
                    case 5:
                        this.eligiblityError = response.SuccessCodeText[0];
                        this.insurance_idRed.push(indexValue);
                        break;
                    case 6:
                        this.eligiblityError = response.SuccessCodeText[0];
                        this.insurance_idRed.push(indexValue);
                        break;
                    default:
                        this.eligbilityDetails = []
                        this.eligbilityDetails.push(obj);
                        this.eligiblityModel = true
                        this.showEligiblityDetails = this.eligbilityDetails[0].eligibilityresponse.subscriber.benefit[0].info;
                        this.insurance_idGreen.push(indexValue);
                }


            }
            else {
                swal("Eligibility Check", response.Response, 'error');
                $('#exampleModal').modal('hide');
            }
        })
    }

    // getRowColor(row){
    //     console.log("row color",row)
    //     if (row.status_1 === '1') {
    //       return "red";
    //     } else if (row.status_2 === '1') {
    //       return "green";
    //     }
    //   }

    getRowGreen(idValue) {
        if (this.insurance_idGreen.includes(idValue)) {
            return true
        }
        else {
            return false
        }
    }
    getRowRed(idValue) {
        if (this.insurance_idRed.includes(idValue)) {
            return true
        }
        else {
            return false
        }
    }

    onHidePatientAttachments(event: any) {

    }
}