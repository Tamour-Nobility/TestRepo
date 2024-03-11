import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { TitleCasePipe, UpperCasePipe } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { groupModel } from '../../classes/ins-group-model';
import { InsurancePayerModelVM } from '../../classes/ins-payer-model';
import { SelectListViewModel } from '../../../../models/common/selectList.model';
import { InsModel } from '../../classes/insurance-setup-model';
import { APIService } from '../../../../components/services/api.service';
import { TableRefreshService } from '../../../../services/data/table-refresh.service';
import { Common } from '../../../../services/common/common';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-add-edit-ins-setup',
  templateUrl: './add-edit-ins-setup.component.html'
})
export class AddEditInsSetupComponent implements OnInit {
  strAddEditTitle: string = "";
  GroupModel: groupModel[];
  insPayerModel: InsurancePayerModelVM;
  insPayerList: SelectListViewModel[];
  insModel: InsModel;
  subsSearch: Subscription;
  insuranceForm: FormGroup;
  constructor(
    private activatedRoute: ActivatedRoute,
    private API: APIService,
    private route: Router,
    private tableRefreshService: TableRefreshService,
  ) {
    this.GroupModel = [];
    this.insPayerModel = new InsurancePayerModelVM();
    this.insModel = new InsModel();
    this.insPayerList = [];
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      let id = +params['id'];
      if (id) {
        this.GetInsuranceModel(id);
        this.strAddEditTitle = 'Edit Insurance Setup';
      }
      else {
        this.GetInsuranceModel();
        this.strAddEditTitle = 'Add New Insurance Setup';
      }
    });
    this.InitForm();
  }
  InitForm() {
    this.insuranceForm = new FormGroup({
      paName: new FormControl('', [
        Validators.required,
        Validators.maxLength(50)
      ]),
      zCode: new FormControl('', [
        Validators.required,
        Validators.maxLength(9)
      ]),
      iAddress: new FormControl('', [
        Validators.required,
        Validators.maxLength(1000)

      ]),
      zCity: new FormControl('', []),
      zState: new FormControl('', []),
      insDept: new FormControl('', []),
      pType: new FormControl('', []),
      pTypee: new FormControl('', []),
      phone: new FormControl('', []),
      phonee: new FormControl('', []),
      cFilling: new FormControl('', []),
      aFilling: new FormControl('', []),
      sec: new FormControl('', []),
      secPaper: new FormControl('', []),
      iActive: new FormControl('', []),
    });
  }

  GetInsuranceModel(InsuranceId?: any) {
    this.API.getData(`/InsuranceSetup/GetInsuranceModel?InsuranceId= ${InsuranceId}`).subscribe(
      d => {
        if (d.Status == "Sucess") {
          if (this.insPayerList == null) {
            this.insPayerList = [];
          }
          if (this.insPayerList.find(f => f.Id == d.Response.InsurancePayer.Id) == null) {
            this.insPayerList.push(d.Response.InsurancePayer);
          }
          this.insModel.ObjResponse = d.Response;
        }
        else {
          swal('Failed', d.Status, 'error');
        }
      })
  }


  getInsPayerList() {
    this.API.getData('/InsuranceSetup/GetInsPayerList').subscribe(
      d => {
        if (d.Status == "Sucess") {
          this.insPayerList = d.Response;
        }
        else {
          swal('Failed', d.Status, 'error');
        }
      })
  }
  onBlurMethod() {

    if (this.insModel.ObjResponse.Insurance_Zip == undefined || this.insModel.ObjResponse.Insurance_Zip == null || this.insModel.ObjResponse.Insurance_Zip == "" || this.insModel.ObjResponse.Insurance_Zip.length < 4) {
      this.insModel.ObjResponse.Insurance_City = "";
      this.insModel.ObjResponse.Insurance_State = "";
      return;
    }
    else {
      this.API.getData('/Demographic/GetCityState?ZipCode=' + this.insModel.ObjResponse.Insurance_Zip).subscribe(
        data => {
          if (data.Status == "Sucess") {
            this.insModel.ObjResponse.Insurance_City = data.Response.CityName;
            this.insModel.ObjResponse.Insurance_State = data.Response.State;

          }
          else {
            this.insModel.ObjResponse.Insurance_City = "";
            this.insModel.ObjResponse.Insurance_State = "";
          }
        }
      );
    }
  }

  onSaveClick() {
    if (this.canSave()) {
      this.API.PostData('/InsuranceSetup/SaveInsurance', this.insModel.ObjResponse, (d) => {
        if (d.Status == "Sucess") {
          swal('Add/Edit', 'Insurance has been saved successfully.', 'success');
          this.onCancelClick();
        }
      })
    }
  }

  canSave(): boolean {
    if (this.insModel.ObjResponse.InsPayer_Id == undefined || this.insModel.ObjResponse.InsPayer_Id == null || this.insModel.ObjResponse.InsPayer_Id == 0) {
      swal('Failed', "Please select Insurance Payer Name.", 'error');
      return false;
    }
    if (this.insModel.ObjResponse.Insurance_City == undefined || this.insModel.ObjResponse.Insurance_City == null || this.insModel.ObjResponse.Insurance_City == "") {
      swal('Failed', "Please enter Zip Code.", 'error');
      return false;
    }
    if (this.insModel.ObjResponse.Insurance_Zip == undefined || this.insModel.ObjResponse.Insurance_Zip == null || this.insModel.ObjResponse.Insurance_Zip == "") {
      swal('Failed', "Please enter Zip Code.", 'error');
      return false;
    }
    if (this.insModel.ObjResponse.Insurance_Address == undefined || this.insModel.ObjResponse.Insurance_Address == null || $.trim(this.insModel.ObjResponse.Insurance_Address) == "") {
      swal('Failed', "Please enter Insurance Address.", 'error');
      return false;
    }
    return true;
  }

  onCancelClick() {
    this.route.navigate(['/InsuranceSetup/insSetup']);
    this.tableRefreshService.refresh.next({ type: 'insSetup', value: this.insPayerList.find(f => f.Id == this.insModel.ObjResponse.InsPayer_Id) });
  }

  onTypeInsurancePayer(value: any) {
    if (!Common.isNullOrEmpty(value) && value.length >= 3) {
      if (!isNullOrUndefined(this.subsSearch)) {
        this.subsSearch.unsubscribe();
      }
      this.subsSearch = this.API.getData(`/InsuranceSetup/GetSmartInsurancePayersList?searchText=${value}`).subscribe(
        res => {
          if (res.Status == "Success") {
            this.insPayerList = res.Response;
          }
          else {
            swal('Failed', res.Status, 'error');
          }
        });
    }
  }
}