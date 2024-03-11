import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {
  ProviderCptPlan, ProviderCptPlan_Details, Practice, Post_ProviderCptPlan,
  check_providercptinformation, get_providercptinformation
} from '../fee-schedule-model';
import { APIService } from '../../components/services/api.service';
import { Common } from '../../services/common/common';

@Component({
  selector: 'app-provider-cptfee-schedule-temp',
  templateUrl: './provider-cptfee-schedule-temp.component.html',
  styleUrls: ['./provider-cptfee-schedule-temp.component.css']
})
export class ProviderCptfeeScheduleTempComponent implements OnInit {
  nSelectedRow: number = 0;
  dtProviderCPTFee: any;
  dtProviderDetailCPTFee: any;
  listProviderCPTFee: ProviderCptPlan[];
  listCPTDetail: ProviderCptPlan_Details[];
  listPractice: Practice[];
  ddlPracticeCode: number = 0;
  showPlanTable: boolean = false;
  isNewCPT: boolean;
  isNewCPT2: boolean;
  ProviderCptPDetailsModel: ProviderCptPlan_Details;
  postproviderplancpt: Post_ProviderCptPlan;
  check_info: check_providercptinformation;
  get_information: get_providercptinformation[];
  Provider_Code: number = 0;

  public providercode:Array<number>=[];
  public location_code: Array<number>=[];
  public Location_State:  Array<string>=[];
  public provid_FName:  Array<string>=[];
  public provid_LName: Array<string>=[];
  //public Name: Array<string>=[];
  

  constructor(private chRef: ChangeDetectorRef,
    public API: APIService) {
    this.listProviderCPTFee = [];
    this.listPractice = [];
    this.listCPTDetail = [];
    this.get_information = [];
  }

  ngOnInit() {
    this.getPractice();
  }

  selectRow(ndx: number) {
    this.nSelectedRow = ndx;
  }

  fillCPTDetails(Provider_Cpt_Plan_Id: any) {
    this.getCPTDetails(Provider_Cpt_Plan_Id);
  }

  getAgingSummaryReport(PracticeCode: any) {
    this.API.getData('/Setup/GetProviderFeeSchedule?PracticeCode=' + PracticeCode).subscribe(
      d => {
        if (d.Status == "Sucess") {
          if (this.dtProviderCPTFee) {
            this.dtProviderCPTFee.destroy();
          }
          this.listProviderCPTFee = d.Response;
          this.chRef.detectChanges();
          this.dtProviderCPTFee = $('.dtProviderCPTFee').DataTable({
            language: {
              emptyTable: "No data available"
            }
          });
        }
        else {
          swal('Failed', d.Status, 'error');
        }
        if (this.dtProviderDetailCPTFee) {
          this.dtProviderDetailCPTFee.destroy();
        }
        this.listCPTDetail = [];
        this.chRef.detectChanges();
        this.dtProviderDetailCPTFee = $('.dtProviderDetailCPTFee').DataTable({
          language: {
            emptyTable: "No data available"
          }
        });

      })
  }
  getPractice() {
    this.API.getData('/Setup/GetPracticeList').subscribe(
      d => {
        if (d.Status == "Sucess") {
          this.listPractice = d.Response;
          this.ddlPracticeCode = 0;
        }
        else {
          swal('Failed', d.Status, 'error');
        }
      })
  }

  onchangePractice() {
    if (this.ddlPracticeCode == undefined || this.ddlPracticeCode == null || this.ddlPracticeCode == 0) {
      swal('Failed', "Please Select Practice", 'error');
      return;
    }
    this.get_information=[];
    this.provid_FName=[];
    this.provid_LName=[];
    this.providercode=[];
    this.location_code=[];
    this.Location_State=[];
    this.isNewCPT = false;
    this.isNewCPT2 = false;
    this.getAgingSummaryReport(this.ddlPracticeCode);
  }

  getCPTDetails(ProviderCPTPlanId: any) {
    if (ProviderCPTPlanId == undefined || ProviderCPTPlanId == null || ProviderCPTPlanId == 0)
      return;
    this.showPlanTable = true;
    this.isNewCPT = false;
    this.API.getData('/Setup/GetProviderPlanDetails?ProviderCPTPlanId=' + ProviderCPTPlanId).subscribe(
      d => {
        if (d.Status == "Sucess") {
          if (this.dtProviderDetailCPTFee) {
            this.dtProviderDetailCPTFee.destroy();
          }
          this.listCPTDetail = d.Response;
          this.chRef.detectChanges();
          this.dtProviderDetailCPTFee = $('.dtProviderDetailCPTFee').DataTable({
            language: {
              emptyTable: "No data available"
            }
          });
        }
        else {
          swal('Failed', d.Status, 'error');
        }
      })
  }

  //Backend_Team


  addNewProviderCptPlan(e: any) {
    this.isNewCPT2 = true;
    this.postproviderplancpt = new Post_ProviderCptPlan();
    this.check_info = new check_providercptinformation();
    this.get_information=[];
    this.postproviderplancpt.Cpt_Plan = "CUSTM";
    this.postproviderplancpt.Provider_Code = 0;
    this.postproviderplancpt.Percentage_Higher = 0;
    this.postproviderplancpt.Facility_Code = 0;
    this.postproviderplancpt.InsPayer_Id = 0;
    this.postproviderplancpt.Practice_Code = this.ddlPracticeCode;
    this.getpracticeinfo_ForCPTPlan(this.ddlPracticeCode);

    $('.dtProviderCPTFee tr:last').after($('#cpt'));
    $('.dtProviderCPTFee tr:last').after($('#cptTr'));
  }

  getpracticeinfo_ForCPTPlan(Practicecode: number) {

    this.API.getData('/Setup/getpracticeinformationforcptplan?Practicecode=' + Practicecode).subscribe(
      data => {
        if (data.Status == "Success") {
          this.get_information = data.Response;
          this.location_code= [...new Set(this.get_information.map(item => item['location_code']))];
          this.Location_State= [...new Set(this.get_information.map(item => item['Location_State']))];
          //this.provid_FName=  [...new Set(this.get_information.map(item => item['provid_FName']))];
         // this.provid_LName=[...new Set(this.get_information.map(item => item['provid_LName']))];
          this.providercode=[...new Set(this.get_information.map(item => item['Provider_Code']))];
        }
        else {
          swal('Failed', data.Status, 'error');
        }
      });
  }

  SetProvider(value: any) {
    this.postproviderplancpt.Provider_Code = value;
  }

  SetInsstate(value: any) {
    this.postproviderplancpt.Insurance_State = value;
  }

  Setlocationcode(value: any) {
    this.postproviderplancpt.Location_Code = value;
  }
  Setselfpay(value:any){
    this.postproviderplancpt.self_pay = value;
  }

  saveNewProviderCptPlan(model: Post_ProviderCptPlan) {
    if (this.canSaveNewProviderCptPlan()) {

      model.Provider_Cpt_Plan_Id = "0";
      model.Cpt_Plan = "CUSTM";
      model.Facility_Code = 0;
      model.Percentage_Higher = 0;
      model.InsPayer_Id = 0;
      this.check_info.Practice_Code = model.Practice_Code;
      this.check_info.Provider_Code = model.Provider_Code;
      this.check_info.Location_Code = model.Location_Code;
      this.check_info.Location_State = model.Insurance_State;
      this.API.PostData('/Setup/checkproviderFeeinformation', this.check_info, (result) => {
        if (result.Status == "Success") {
          this.API.PostData('/Setup/PostproviderFeeSchedule', model, (result) => {
            if (result.Status == "Success") {
              this.getAgingSummaryReport(model.Practice_Code);
              swal('Success', result.Status, 'success');
              this.get_information=[];
              this.provid_FName=[];
              this.provid_LName=[];
              this.providercode=[];
              this.location_code=[];
              this.Location_State=[];
              this.isNewCPT2 = false;
            }else if(result.Status == "dup"){
              swal('Failed',"Duplication error" , 'error');
            }
            else {
              swal('Failed', result.Status, 'error');
            }
          });
        }
        else {
          swal('Failed', result.Status, 'error');
        }
      });
    }
    else{
      swal('Failed', "ERROR Fields are missing", 'error');
    }

  }


  canSaveNewProviderCptPlan() {

    if (Common.isNullOrEmpty(this.postproviderplancpt.Provider_Code)) {
      swal('Validation Error', 'Provider Code is Missing', 'error');
      return;
    }
    // else if (Common.isNullOrEmpty(model.InsPayer_Id.toString())) {
    //   swal('Validation Error', 'InsPayer_ID is Missing', 'error');
    //   return;
    // }
    else if (Common.isNullOrEmpty(this.postproviderplancpt.Insurance_State)) {
      swal('Validation Error', 'Insurance_State is Missing', 'error');
      return;
    }
    else if (Common.isNullOrEmpty(this.postproviderplancpt.Location_Code)) {
      swal('Validation Error', 'Location_Code is Missing', 'error');
      return;
    }
    // else if (Common.isNullOrEmpty(model.Facility_Code.toString())) {
    //   swal('Validation Error', 'Facility_Code is Missing', 'error');
    //   return;
    // }

    else if (Common.isNullOrEmpty(this.postproviderplancpt.Cpt_Plan)) {
      swal('Validation Error', 'Cpt_Plan is Missing', 'error');
      return;
    }
    // else if (Common.isNullOrEmpty(model.Percentage_Higher.toString())) {
    //   swal('Validation Error', 'Percentage_Higher is Missing', 'error');
    //   return;
    // }
    else if (Common.isNullOrEmpty(this.postproviderplancpt.self_pay)) {
      swal('Validation Error', 'self_pay is Missing', 'error');
      return;
    }

    else {
      return true;
    }
  }

  onCanclenewprovidercptplan() {
    this.isNewCPT2 = false;
  }


  addNewCPT(e: any) {
    this.isNewCPT = true;
    this.ProviderCptPDetailsModel = new ProviderCptPlan_Details();
    this.ProviderCptPDetailsModel.Provider_Cpt_Plan_Id = this.listProviderCPTFee[this.nSelectedRow].Provider_Cpt_Plan_Id;
    $('.dtProviderCPTFee tr:last').after($('#cpt'));
    $('.dtProviderCPTFee tr:last').after($('#cptTr'));
  }

  onKeypressCpt(event: any) {
    if (event.key == "Enter" || event.key == "Tab") {
      let pCPTCode = event.target.value;
      this.checkCPTDuplicate(pCPTCode, this.ProviderCptPDetailsModel.Provider_Cpt_Plan_Id);
      if (pCPTCode) {
        this.API.getData('/Setup/GetDescriptionByCPT?ProviderCPTPCode=' + pCPTCode).subscribe(
          d => {
            if (d.Status == "Sucess") {
              if (this.ProviderCptPDetailsModel.Cpt_Description) {
                this.ProviderCptPDetailsModel.Cpt_Description = '';
              }
              this.ProviderCptPDetailsModel.Cpt_Description = d.Response;
            }
            else {
              swal('Faild', d.Status, 'error');
            }
          }
        )
      }
    }
  }

  checkCPTDuplicate(pCPTCode: string, pCPTPlanId: string) {
    if (pCPTCode && pCPTPlanId) {
      this.API.getData('/Setup/CheckDuplicateCPT?ProviderCPTCode=' + pCPTCode + '&&ProviderCPTPlainId=' + pCPTPlanId).subscribe(
        d => {
          if (d.Status == "Duplicate") {
            swal('Validation', 'CPT already exists', 'warning');
            this.ProviderCptPDetailsModel.Cpt_Code = '';
            this.ProviderCptPDetailsModel.Cpt_Description = '';
          }
        }
      );
    }
  }

  saveCPT(model: ProviderCptPlan_Details) {
    if (this.canSaveCPT(model)) {
      this.API.PostData('/Setup/PostProviderCptPlanDetails', model, (result) => {
        if (result.Status == "Success") {
          swal('Success', 'CPT Added', 'success');
          this.getCPTDetails(model.Provider_Cpt_Plan_Id);
          this.isNewCPT = false;
        }
      });
    }
  }

  canSaveCPT(model: ProviderCptPlan_Details) {
    if (!model.Cpt_Code) {
      swal('Validation Error', 'CPT Code is Missing', 'warning');
      return;
    }
    else if (!model.Cpt_Description) {
      swal('Validation Error', 'CPT Description is Missing', 'warning');
      return;
    }
    else if (!model.Non_Facility_Participating_Fee) {
      swal('Validation Error', 'Non Facility Participating Fee is Missing', 'warning');
      return;
    }
    else if (!model.Non_Facility_Non_Participating_Fee) {
      swal('Validation Error', 'Non Facility Non Participating Fee is Missing', 'warning');
      return;
    }
    else if (!model.Facility_Participating_Fee) {
      swal('Validation Error', 'Facility Participating Fee is Missing', 'warning');
      return;
    }
    else if (!model.Facility_Non_Participating_Fee) {
      swal('Validation Error', 'Facility Non Participating Fee is Missing', 'warning');
      return;
    }
    else {
      return true;
    }
  }

  onCancleCPT() {
    this.isNewCPT = false;
  }
}

