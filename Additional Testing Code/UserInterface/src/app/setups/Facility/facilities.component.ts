import { Component, OnInit, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { zipdata } from '../../patient/Classes/patientInsClass';
import { searchFacilty } from './Classes/searchFacility';
import { responseFacility, saveFacilityModel } from './Classes/responseFacility';
import { APIService } from '../../components/services/api.service';
import { GvarsService } from '../../services/G_vars/gvars.service';
import { isNullOrUndefined } from 'util';

declare var $: any;

@Component({
    selector: 'app-facilities',
    templateUrl: './facilities.component.html',
    styleUrls: ['./facilities.component.css']
})
export class FacilitiesComponent implements OnInit {
    showHideFacilityElements: boolean = false;
    @Output() notifyParent: EventEmitter<any> = new EventEmitter();
    @Output() onSelectFacility: EventEmitter<any> = new EventEmitter();
    
    zipData: any = [];
    dtSearchFacility: any;
    // haserror:boolean=false;
    editClick: boolean = false;
    copyEdit: any = [];
    checkedit: boolean = false;
    PageNo: number;
    firstRow: number = 1;
    FacilityMode: string;
    focusTimeFrameFS: boolean = false;
    selectedRow: number = 0;
    deleteIndex: number;
    currentRow: string;
    highlightedRow: string;
    sControl: string;
    bIsRecordFound: boolean = false;
    PageIndex: number;
    selectedFS: number = 0;
    pageString: number;
    totalPages: number;
    focusFacilityType: boolean = false;
    selectedFac: number = 0;
    isSearched: boolean = false;
    CityStateLst: zipdata[];
    FaciCodeTemp: string = "";
    searchCriteria: searchFacilty;
    deleteRecord: boolean = true;
    responseFacility: responseFacility[];
    saveFacilityModel: saveFacilityModel;
    DatePickerOptions = {
        dateFormat: 'mm/dd/yyyy',
        height: '20px',
        width: '100%',
        border: 'none',
        inline: false,
        disabledDatePicker: false,
        selectionTxtFontSize: '14px',
        disableSince: { year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() + 1, indicateInvalidDate: true }
    };
    Dateoptions = { year: "numeric", month: "2-digit", day: "2-digit" };
    isSearchInitiated: boolean = false;

    constructor(private chRef: ChangeDetectorRef, public API: APIService, public Gv: GvarsService) {
        this.searchCriteria = new searchFacilty();
        this.responseFacility = [];
        this.CityStateLst = [];
        this.saveFacilityModel = new saveFacilityModel;
    }

    ngOnInit() {
    }

    SelectRow(index: number) {
        if (!this.editClick) {
            if (this.showHideFacilityElements) {
                this.showHideFacilityElements = false;
                this.deleteRecord = true;
            }
        }
        this.editClick = false;
        this.selectedFS = index;

    }
    SelectFS(index: number) {
        this.selectedFS = index;
    }
    searchFacility(event: KeyboardEvent) {
        if (event.keyCode == 13) { //Enter key
            this.getFacilities('true');
        }
    }
    ClearFields() {
        if (this.dtSearchFacility)
            this.dtSearchFacility.destroy();
        this.responseFacility = [];
        this.chRef.detectChanges();
        this.dtSearchFacility = $('.dtSearchFacility').DataTable({
            language: {
                emptyTable: "No data available"
            }
        });

        this.saveFacilityModel.Response.Created_By = "";
        this.saveFacilityModel.Response.Created_Date = "";
        this.saveFacilityModel.Response.Facility_Address = "";
        this.saveFacilityModel.Response.Facility_City = "";
        this.saveFacilityModel.Response.Facility_Code = undefined;
        this.saveFacilityModel.Response.Facility_Contact_Name = "";
        this.saveFacilityModel.Response.facility_id_number = "";
        this.CityStateLst = [];
        this.saveFacilityModel.Response.Facility_Name = "";
        this.saveFacilityModel.Response.Facility_Phone = "";
        this.saveFacilityModel.Response.Facility_State = "";
        this.saveFacilityModel.Response.Facility_Type = "";
        this.saveFacilityModel.Response.Facility_ZIP = "";
        this.saveFacilityModel.Response.IS_DEMO = false;
        this.saveFacilityModel.Response.NPI = "";
        this.saveFacilityModel.Response.Modified_By = "";
        this.saveFacilityModel.Response.Created_By = "";
    }

    formatNumber(phone: string) {
        var newphone = "";
        if (phone != undefined && phone != "") {
            newphone = '(' + phone.substring(0, 3) + ') ' + phone.substring(3, 6) + '-' + phone.substring(6);
        }
        return newphone;
    }
    unformatNumber(phone: string) {
        var newphone = "";
        if (phone != undefined && phone != "") {
            newphone = phone.replace('(', '').replace(')', '').replace('-', '').replace(' ', '');
        }
        return newphone;
    }
    formatPhoneNumber(phone: string, type: string) {

        var value = phone;
        if (phone.length >= 10) {
            value = this.formatNumber(phone);
        }
        if (type == "facility") {
            this.saveFacilityModel.Response.Facility_Phone = "";
            this.saveFacilityModel.Response.Facility_Phone = value;
        }
        else if (type == "search") {
            this.searchCriteria.Response.Phone = "";
            this.searchCriteria.Response.Phone = value;
        }

    }

    EnableDisableFacilityElements(NewModifyCancel: string) {
        if (NewModifyCancel == "New") {
            this.ClearFields();
            this.ClearSearchFields();
            this.FacilityMode = "New Facility Setup";
            this.responseFacility = [];
            setTimeout(function () {
                $("#saveFaciNameID").focus();
            }, 500);
            this.showHideFacilityElements = true;
        }
        else if (NewModifyCancel == "Search") {
            this.responseFacility = [];
        }
        else if (NewModifyCancel == "Modify") {
            //  this.haserror=false;
            this.showHideFacilityElements = true;
            setTimeout(function () {
                $("#saveFaciNameID input").focus()
            }, 500);
            // this.showHideFacilityElements = true;
        }
        else if (NewModifyCancel == "Cancel") {
            this.ClearFields();
            this.showHideFacilityElements = false;
            this.deleteRecord = true;
            this.getFacilities('true');
            this.editClick = false;
            this.checkedit = false;
            //   this.haserror=false;
            setTimeout(function () {
                $("#Code").focus();
            }, 1000);
        }
        else {
            this.showHideFacilityElements = false;
        }
    }

    unformatZIPNumber_Search(zip: string, typee: string) {
        var val = "";
        if (typee == "search") {
            val = this.unformatZip(zip);
            this.searchCriteria.Response.ZIP = val;
        }
    }

    unformatZIPNumber(zip: string, typee: string) {
        var val = "";
        if (typee == "facility") {
            val = this.unformatZip(zip);
            this.saveFacilityModel.Response.Facility_ZIP = val;
        }
    }

    unformatPhoneNumber(phone: string, type: string) {
        var value = "";
        if (type == "facility") {
            value = this.unformatNumber(phone);
            this.saveFacilityModel.Response.Facility_Phone = value;
        }
        else if (type == "search") {
            value = this.unformatNumber(phone);
            this.searchCriteria.Response.Phone = value;
        }

    }

    unformatZip(zip: string) {
        var newzip = "";
        if (zip != undefined && zip != "") {
            newzip = zip.replace('-', '').replace(' ', '');
        }
        return newzip;
    }

    ClearSearchFields() {
        this.searchCriteria = new searchFacilty();
        this.bIsRecordFound = false;
        // this.haserror=false;
        this.responseFacility = [];
        this.totalPages = 1;
        setTimeout(function () {
            $("#Code").focus();

        }, 1000);
        this.ClearFields();
    }

    GetCityState_Search(zipp: string) {
        this.searchCriteria.Response.ZIP = this.formatZip(zipp);
    }

    formatZip(zip: string) {
        var newzip = zip;
        if (zip.length > 5 && zip.length < 10) {
            newzip = zip.substring(0, 5) + '-' + zip.substring(5);
        }
        return newzip;
    }

    getFacilities(button: string) {
        if ($.trim(this.searchCriteria.Response.FacilityCode) == ""
            && $.trim(this.searchCriteria.Response.FacilityName) == ""
            && $.trim(this.searchCriteria.Response.FacilityType) == ""
            && $.trim(this.searchCriteria.Response.ZIP) == ""
            && $.trim(this.searchCriteria.Response.City) == ""
            && $.trim(this.searchCriteria.Response.State) == ""
            && $.trim(this.searchCriteria.Response.Phone) == ""
            && $.trim(this.searchCriteria.Response.FacilityCode) == ""
            && $.trim(this.searchCriteria.Response.NPI) == "") {
            $('#Code').focus();
            //this.haserror=true;
            swal('Facility Search', "Please enter any search criteria.", 'warning');
            this.ClearFields();
            //  this.responseFacility = [];
            return;
        }
        this.isSearchInitiated = true;
        this.API.PostData('/Demographic/SearchFacilities/', this.searchCriteria.Response, (d) => {
            if (d.Status == "Sucess") {
                // this.haserror=false;
                if (this.dtSearchFacility) {
                    this.chRef.detectChanges();
                    this.dtSearchFacility.destroy();
                }
                this.responseFacility = d.Response;
                this.chRef.detectChanges();
                this.dtSearchFacility = $('.dtSearchFacility').DataTable({
                    language: {
                        emptyTable: "No data available"
                    }
                });
            }
        });
    }

    GetCityState(zip: string) {
        this.API.getData('/Demographic/GetCityState?ZipCode=' + zip).subscribe(
            data => {
                if (data.Status == "Sucess") {
                    this.zipData = data.Response;
                    this.saveFacilityModel.Response.Facility_City = this.zipData.CityName;
                    this.saveFacilityModel.Response.Facility_State = this.zipData.State;
                }
                else {
                    this.saveFacilityModel.Response.Facility_City = "";
                    this.saveFacilityModel.Response.Facility_State = "";
                }
            }
        );
    }
   

    SaveData() {
        
        if (!this.canSave())
            return;
        this.API.PostData('/Setup/SaveFacility/', this.saveFacilityModel.Response, (d) => {
            if (d.Status == "Sucess") {
                swal('', 'Facility has been saved.', 'success');
                this.EnableDisableFacilityElements('New');
                this.showHideFacilityElements = false;
            }
            else {
                swal('Error', 'Facility was not saved', 'error');
            }
        })
    }
    
    canSave(): boolean {
        if (isNullOrUndefined(this.saveFacilityModel.Response.Facility_Name) || $.trim(this.saveFacilityModel.Response.Facility_Name) == '') {
            swal('Facility', 'Please enter Facility Name.', 'error');
            return false;
        }
        
        if (isNullOrUndefined(this.saveFacilityModel.Response.Facility_Address) || $.trim(this.saveFacilityModel.Response.Facility_Address) == '') {
            swal('Facility', 'Please enter Facility Address.', 'error');
            return false;
        }
        if (isNullOrUndefined(this.saveFacilityModel.Response.Facility_Type) || $.trim(this.saveFacilityModel.Response.Facility_Type) == '' || $.trim(this.saveFacilityModel.Response.Facility_Type) == '0') {
            swal('Facility', 'Please enter Facility Type.', 'error');
            return false;
        }
        if (isNullOrUndefined(this.saveFacilityModel.Response.Facility_ZIP) || $.trim(this.saveFacilityModel.Response.Facility_ZIP) == '' || $.trim(this.saveFacilityModel.Response.Facility_ZIP) == '0') {
            swal('Facility', 'Please enter Facility Zip Code.', 'error');
            return false;
        }
        if (isNullOrUndefined(this.saveFacilityModel.Response.NPI) || $.trim(this.saveFacilityModel.Response.NPI) == '') {
            swal('Facility', 'Please enter NPI Code.', 'error');
            return false;
        }

        return true;

    }

    EditRow(row: number) {
        if (row != undefined) {
            this.EnableDisableFacilityElements('Modify');
            // document.getElementById("Modifybtn").click();
            this.copyEdit = this.responseFacility[row];
            this.saveFacilityModel.Response = this.copyEdit;
        }

    }
    sendNotification() {
        this.notifyParent.emit('Close Model');
    }

    FillFacility(name: string, ID: number) {
        this.Gv.FacilityCode = ID;
        this.Gv.FacilityName = name;
        this.sendNotification();
        this.onSelectFacility.emit({ ID, name });
        this.ClearSearchFields();
    }

    deleteFacility(FacilityId: number) {
        if (FacilityId == undefined || FacilityId == null || FacilityId == 0)
            return;
        this.API.confirmFun('Do you want to delete selected Facility?', '', () => {
            this.API.getData('/Setup/DeleteFacility?FacilityId=' + FacilityId).subscribe(
                data => {
                    swal({ position: 'top-end', type: 'success', title: 'Selected Facility has been Deleted.', showConfirmButton: false, timer: 1500 })
                    this.getFacilities("");
                });
        });

    }
}
