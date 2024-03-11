import { Component, OnInit, ChangeDetectorRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { Insurancemodel, PatientInsuranceResponse, claimInusrance } from '../../Claims/Classes/ClaimsModel'
import { APIService } from '../../components/services/api.service';
import { insuranceResponseModel, insuranceSearchModel } from '../../Claims/Classes/InsuranceModel'
import { DatePipe } from '@angular/common'
import { SelectListViewModel } from '../../models/common/selectList.model';
import { GuarantorComponent } from '../../setups/Guarantor/guarantor.component';
import { ModalWindow } from '../../shared/modal-window/modal-window.component';
import { ListGuarantorsSharedComponent } from '../../shared/guarantors/list-guarantors-shared/list-guarantors-shared.component';
import { AddEditGuarantorSharedComponent } from '../../shared/guarantors/add-edit-guarantor-shared/add-edit-guarantor-shared.component';
import { Common } from '../../services/common/common';
import { GvarsService } from '../../services/G_vars/gvars.service';
import { InsuranceSearchComponent } from '../../shared/insurance-search/insurance-search.component';

declare var $: any

@Component({
    selector: 'app-claim-insurances',
    templateUrl: './claim-insurances.component.html',
    styleUrls: ['./claim-insurances.component.css']
})
export class ClaimInsurancesComponent implements OnInit {
    isInsExpand: boolean = false;
    dataTable: any;
    tempVariable: string = "";
    insSearchResponse: insuranceResponseModel;
    claimInsuranceModel: Insurancemodel[];
    showInsuranceNamePopup: boolean = false;
    claimInsurances: claimInusrance[];
    selectedInsName: number;
    InsuranceNames: any = [];
    nameData:any;
    PatientInsuranceResponse: PatientInsuranceResponse[];
    currentInsuranceNumber: number;
    relationsList: SelectListViewModel[];
    @ViewChild('insuranceSearch') insuranceModal: ModalWindow;
    @ViewChild('guarantorModalWindow') guarantorModal: ModalWindow;
    @ViewChild(AddEditGuarantorSharedComponent) guarantorAddEdit: AddEditGuarantorSharedComponent;
    @ViewChild(ListGuarantorsSharedComponent) guarantorList: ListGuarantorsSharedComponent;
    @ViewChild(InsuranceSearchComponent) ins: InsuranceSearchComponent;
    guarantorModalWindowProp: any;
    addGuarantor: boolean;
    eligiblityBtnColor: string = 'Grey';
    @Input() patAccount: any;
    @Input() providerCode: any;
    @Output() newItemEvent = new EventEmitter<any>()
    @Output() InsEvent = new EventEmitter<any>()
    newInsurances: boolean;
    isViewMode: boolean = false;
    isNewClaim: boolean;
    constructor(
        private API: APIService,
        private datePipe: DatePipe,
        private _gv: GvarsService) {
        this.insSearchResponse = new insuranceResponseModel;
        this.claimInsuranceModel = [];
        this.PatientInsuranceResponse = [];
        this.claimInsurances = [];
        this.relationsList = [];
    }
    ngOnInit() {
        this.getPatientInsurances();
        this.getRelations();
    }

    getRelations(): any {
        this.API.getData('/InsuranceSetup/GetRelationsSelectList').subscribe(
            res => {
                if (res.Status == "Success") {
                    this.relationsList = res.Response;
                }
                else {
                    swal("Relationships", res.Status, "error");
                }
            });
    }

    ShowInsuranceNamePopup(ndx: number) {
        // if (!this.disableForm) {
        this.insuranceModal.show();
        this.currentInsuranceNumber = ndx;
        // }
    }
    addNewItem(value: string) {
        this.newItemEvent.emit(value);
    }


    addNewIns(value:string)
    {
        this.InsEvent.emit(value)

    }
    AddNewInsurance() {
        let noofdel = 0;
        this.newInsurances = true;
        for (var i = 0; i < this.claimInsuranceModel.length; i++) {
            if (this.claimInsuranceModel[i].claimInsurance.Deleted) {
                noofdel++;
            }
        }
        if (this.claimInsuranceModel.length - noofdel == 3) {
            return;
        }
        var cp: claimInusrance;
        cp = new claimInusrance();
        cp.claimInsurance.Relationship
        cp.claimInsurance.Relationship = "7";
        cp.claimInsurance.Print_Center = false;
        cp.claimInsurance.Corrected_Claim = false;
        cp.claimInsurance.Late_Filing = false;
        cp.claimInsurance.Send_notes = false;
        cp.claimInsurance.Send_Appeal = false;
        cp.claimInsurance.Medical_Notes = false;
        cp.claimInsurance.Reconsideration = false;
        cp.claimInsurance.Returned_Hcfa = false;
        cp.claimInsurance.Deleted = false;
        //this.claimInsuranceModel.Response.push(new claimInsurance());
        this.claimInsuranceModel.push(cp);
    }

    NewRowInsurances(event: KeyboardEvent, ndx: number) {
        if (event.keyCode == 40) {
            let claimInsuranceLength = 0;
            for (var notDel = 0; notDel < this.claimInsuranceModel.length; notDel++) {
                if (!this.claimInsuranceModel[notDel].claimInsurance.Deleted)
                    claimInsuranceLength++;
            }
            let rowFlag: number = -1;
            var element = $("#insurance-section table tbody tr:visible");
            if (claimInsuranceLength - 1 > ndx) {
                var input = $($(element)[ndx]).find(":focus").is("input");
                if (input) {
                    $($($(element[ndx + 1]).find("input"))[0]).focus();
                    return;
                }
            }
            for (var i = 0; i < element.length - 1; i++) {
                var hasfocus = $($(element)[i]).find(":focus").length;
                var isInput = $($(element)[i]).find(":focus").is("input");
                if (hasfocus > 0 && isInput) {
                    this.AddNewInsurance();
                    rowFlag = i;
                }
            }
            if (rowFlag > -1) {
                setTimeout(function () {
                    $($($($("#insurance-section table tbody tr:visible")[rowFlag + 1]).find("input"))[0]).focus();
                }, 200);
            }
        }
    }

    getPatientInsurances() {
        // this.claimInsuranceModel = [];
        if (this.claimInsuranceModel.length == 0 && this.isNewClaim) {
            if (this.PatientInsuranceResponse != null) {
                for (var i = 0; i < this.PatientInsuranceResponse.length; i++) {
                    this.claimInsuranceModel.push(new claimInusrance());
                    this.claimInsuranceModel[i].claimInsurance.Co_Payment = this.PatientInsuranceResponse[i] == null ? "" : this.PatientInsuranceResponse[i].Co_Payment;
                    this.claimInsuranceModel[i].claimInsurance.Co_Payment_Per = this.PatientInsuranceResponse[i] == null ? 0 : this.PatientInsuranceResponse[i].Co_Payment_Per;
                    this.claimInsuranceModel[i].claimInsurance.Deductions = this.PatientInsuranceResponse[i].Deductions == null ? 0 : this.PatientInsuranceResponse[i].Deductions;
                    this.claimInsuranceModel[i].claimInsurance.Group_Name = this.PatientInsuranceResponse[i].Group_Name == null ? "" : this.PatientInsuranceResponse[i].Group_Name;
                    this.claimInsuranceModel[i].claimInsurance.Group_Number = this.PatientInsuranceResponse[i].Group_Number == null ? "" : this.PatientInsuranceResponse[i].Group_Number;
                    this.claimInsuranceModel[i].claimInsurance.Pri_Sec_Oth_Type = this.PatientInsuranceResponse[i].Pri_Sec_Oth_Type == null ? "" : this.PatientInsuranceResponse[i].Pri_Sec_Oth_Type;
                    this.claimInsuranceModel[i].claimInsurance.Insurance_Id = this.PatientInsuranceResponse[i].Insurance_Id == null ? 0 : this.PatientInsuranceResponse[i].Insurance_Id;
                    this.claimInsuranceModel[i].InsurancePayerName = this.PatientInsuranceResponse[i].PayerDescription
                    // this.claimInsurances[i].INSURANCE_NAME = this.PatientInsuranceResponse[i].INSURANCE_NAME == null ? "" : this.PatientInsuranceResponse[i].INSURANCE_NAME;
                    this.claimInsuranceModel[i].claimInsurance.Policy_Number = this.PatientInsuranceResponse[i].Policy_Number == null ? "" : this.PatientInsuranceResponse[i].Policy_Number;
                    this.claimInsuranceModel[i].claimInsurance.Relationship = this.PatientInsuranceResponse[i].Relationship == null ? "" : this.PatientInsuranceResponse[i].Relationship;
                    this.claimInsuranceModel[i].claimInsurance.Subscriber = this.PatientInsuranceResponse[i].Subscriber == null ? 0 : (this.PatientInsuranceResponse[i].Subscriber);
                    this.claimInsuranceModel[i].claimInsurance.Deleted = false;
                    this.claimInsuranceModel[i].SubscriberName = this.PatientInsuranceResponse[i].SubscriberName == null ? "" : this.PatientInsuranceResponse[i].SubscriberName;
                    this.claimInsuranceModel[i].claimInsurance.Effective_Date = this.datePipe.transform(this.PatientInsuranceResponse[i].Effective_Date, "MM/dd/yyyy");
                    this.claimInsuranceModel[i].claimInsurance.Termination_Date = this.datePipe.transform(this.PatientInsuranceResponse[i].Termination_Date, "MM/dd/yyyy");
                }
            }
            if (this.PatientInsuranceResponse.length == 0) {
                this.newInsurances = true;
            }
        }
        else {
            for (var x = 0; x < this.claimInsuranceModel.length; x++) {
                // if (this.claimInsuranceModel[x].claimInsurance.Pri_Sec_Oth_Type == "P")
                //     if (this.claimInsuranceModel[x].claimInsurance.Pri_Sec_Oth_Type == "S")
                //         if (this.claimInsuranceModel[x].claimInsurance.Pri_Sec_Oth_Type == "O")
                if (!Common.isNullOrEmpty(this.claimInsuranceModel[x].claimInsurance.Effective_Date))
                    this.claimInsuranceModel[x].claimInsurance.Effective_Date = this.datePipe.transform(this.claimInsuranceModel[x].claimInsurance.Effective_Date, 'MM/dd/yyyy');
                if (!Common.isNullOrEmpty(this.claimInsuranceModel[x].claimInsurance.Termination_Date))
                    this.claimInsuranceModel[x].claimInsurance.Termination_Date = this.datePipe.transform(this.claimInsuranceModel[x].claimInsurance.Termination_Date, 'MM/dd/yyyy');
                if (!Common.isNullOrEmpty(this.claimInsuranceModel[x].claimInsurance.Visits_Start_Date))
                    this.claimInsuranceModel[x].claimInsurance.Visits_Start_Date = this.datePipe.transform(this.claimInsuranceModel[x].claimInsurance.Visits_Start_Date, 'MM/dd/yyyy');
                if (!Common.isNullOrEmpty(this.claimInsuranceModel[x].claimInsurance.Visits_End_Date))
                    this.claimInsuranceModel[x].claimInsurance.Visits_End_Date = this.datePipe.transform(this.claimInsuranceModel[x].claimInsurance.Visits_End_Date, 'MM/dd/yyyy');
                if (!Common.isNullOrEmpty(this.claimInsuranceModel[x].claimInsurance.Created_Date))
                    this.claimInsuranceModel[x].claimInsurance.Created_Date = this.datePipe.transform(this.claimInsuranceModel[x].claimInsurance.Created_Date, 'MM/dd/yyyy');
            }
        }
    }

    showSubscriber(ndx: number) {
        if (+this.claimInsuranceModel[ndx].claimInsurance.Relationship !== 7) {
            this.currentInsuranceNumber = ndx;
            this.guarantorModalWindowProp = {
                title: 'Subscriber',
                description: 'Find or Add and Select Subscriber.',
                caller: 'CLAIM_INSURANCE'
            };
            this.guarantorModal.show();
        }
    }

    onSelectGuarantor(response) {
        if (response.for === 'CLAIM_INSURANCE') {
            const { guarantorCode, guarantorName } = response.data;
            this.claimInsuranceModel[this.currentInsuranceNumber].claimInsurance.Subscriber = guarantorCode;
            this.claimInsuranceModel[this.currentInsuranceNumber].claimInsurance.SubscriberName = guarantorName;
            this.claimInsuranceModel[this.currentInsuranceNumber].SubscriberName = guarantorName;

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

    RelationChange(relation: string, index: number) {
        if (relation == "7") {
            this.claimInsuranceModel[index].claimInsurance.SubscriberName = "";
            this.claimInsuranceModel[index].SubscriberName = "";
            this.claimInsuranceModel[index].claimInsurance.Subscriber = null;
            $("#disabledspan").css("pointer-events", "none");
        }
        else {
            $("#disabledspan").css("pointer-events", "auto");
        }
    }

    onSelectInsurance({ Insurance_Id, Inspayer_Description }) {
        this.claimInsuranceModel[this.currentInsuranceNumber].InsurancePayerName = Inspayer_Description;
        this.claimInsuranceModel[this.currentInsuranceNumber].claimInsurance.Insurance_Id = Number(Insurance_Id);

        this.insuranceModal.hide();
    }

    DeleteInsurance(ndx: number) {
        this.claimInsuranceModel[ndx].claimInsurance.Deleted = true;
    }

    CheckPercentage(ndx: number, p: number) {
        if (p < 0) {
            this.claimInsuranceModel[ndx].claimInsurance.Co_Payment_Per = 0;
        }
        if (p > 100) {
            this.claimInsuranceModel[ndx].claimInsurance.Co_Payment_Per = 100;
        }
    }

    InsuranceChange() {
        // for (var i = 0; i < this.claimCharges.length; i++) {
        //     if (oldValue == "P" && oldValue != value) {
        //         if (this.claimCharges[i].disableCPT == false) {
        //             this.claimCharges[i].reviewed = false;
        //         }
        //     }

        // }
        // this.addStatus();
    }

    validateDate(p: string, type: string, index: number) {
        if (p != undefined && p != "") {
            if (!this.validateD(p)) {
                swal('Failed', "Invalid Date format", 'error');
                if (type == "EffectiveDate")
                    this.claimInsuranceModel[index].claimInsurance.Effective_Date = "";
                if (type == "TerminationDate")
                    this.claimInsuranceModel[index].claimInsurance.Termination_Date = "";
            }
        }
    }

    validateD(testdate) {
        if (testdate.includes("T")) {
            testdate = testdate.substring(0, testdate.indexOf("T"));
            testdate = this.datePipe.transform(testdate, "MM/dd/yyyy")
        }
        var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)[0-9]{2}$/;
        return date_regex.test(testdate);
    }

    Tooltip(name: number, index: number) {
        if (index == undefined) {
            index = 0;
        }
        this.tempVariable = $.trim($($("select[name='" + name + "']")[index]).find("option:selected").text());
    }

    InsKeyDown(event: KeyboardEvent) {
        if (event.keyCode == 13) {
        }
    }

    keyUpEvent() {
        {
        }
    }

    insExpand() {
        this.isInsExpand = !this.isInsExpand;
    }

    validateDateFormat(dt: string, Type: string, ndx: number, event: KeyboardEvent) {
        if ((event.key == "Backspace" || event.key == "Delete") && (!dt))
            return;
        if (dt.length == 2 || dt.length == 5) {
            if (Type == "EffectiveDate")
                this.claimInsuranceModel[ndx].claimInsurance.Effective_Date = dt + "/";
            else if (Type == "TerminationDate")
                this.claimInsuranceModel[ndx].claimInsurance.Termination_Date = dt + "/";
            else if (Type == "StartDate")
                this.claimInsuranceModel[ndx].claimInsurance.Visits_Start_Date = dt + "/";
            else if (Type == "EndDate")
                this.claimInsuranceModel[ndx].claimInsurance.Visits_End_Date = dt + "/";
        }
    }

    checkCorrectedClaim(chkCorrectedClaim: boolean) {
        if (chkCorrectedClaim == true)
            swal('Claim Insurances', 'Please enter ICN Number.', 'error');
    }
mydata(){
    this.eligiblityBtnColor;
}

first(){
    this.mydata()
}
    checkEligibility(eligibilityData) {

        this.API.getData(`/Demographic/InquiryByPracPatProvider?PracticeCode=${this._gv.currentUser.selectedPractice.PracticeCode}&PatAcccount=${this.patAccount}&ProviderCode=${this.providerCode}&insurance_id=${eligibilityData.claimInsurance.Insurance_Id}`).subscribe(response => {
                this.nameData
            var obj = JSON.parse(response.Data)
            console.log("eligibilityData Response",obj)
            if (response.Status == 'Success' && response.Response == "Red") {
                this.eligiblityBtnColor = response.Response;
                this.first();
            }
            else if (response.Status == 'Success' && response.Response == "Green") {
                this.eligiblityBtnColor = response.Response;
                this.first();
            }
            else {
                swal("Eligibility Check", response.Response, 'error');
            }
        })
    }

    onCloseSearch() {
        this.ins.clearForm();
        
    }

}
