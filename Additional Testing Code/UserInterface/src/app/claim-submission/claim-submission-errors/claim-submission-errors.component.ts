import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { BatchFileErrors, BatchErrorsRequestModel } from '../models/claims-submission.model';
import { Subscription } from 'rxjs';
import { FormControl, Validators } from '@angular/forms';
import { SelectListViewModel } from '../../models/common/selectList.model';
import { APIService } from '../../components/services/api.service';
import { GvarsService } from '../../services/G_vars/gvars.service';
import { Common } from '../../services/common/common';
import { IMyDpOptions } from 'mydatepicker';
import { IMyDateRangeModel } from 'mydaterangepicker';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-claim-submission-errors',
  templateUrl: './claim-submission-errors.component.html',
  styleUrls: ['./claim-submission-errors.component.css']
})
export class ClaimSubmissionErrorsComponent implements OnInit {
  batchFileErrorsList: BatchFileErrors[];
  dataTableErrors: any;
  subProviderSelectList: Subscription;
  subBatchSelectList: Subscription;
  batchesSelectList: SelectListViewModel[];
  providerSelectList: SelectListViewModel[];
  providerSelectControl = new FormControl('', [Validators.required]);
  batchSelectControl = new FormControl('', [Validators.required]);
  requestModel: BatchErrorsRequestModel;
  isSearchInitiated = false;
  myDateRangePickerOptions: IMyDpOptions = {
    dateFormat: 'mm/dd/yyyy', height: '25px', width: '100%'
  }
  constructor(private apiService: APIService,
    private chRef: ChangeDetectorRef,
    private GV: GvarsService,
    private router: Router) {
    this.batchFileErrorsList = [];
    this.providerSelectList = [];
    this.batchesSelectList = [];
    this.requestModel = new BatchErrorsRequestModel();
  }

  ngOnInit() {
    if (this.providerSelectList.find(p => p.Name == 'All') == null) {
      this.providerSelectList.push(new SelectListViewModel(-1, 'All'));
    }
    this.requestModel.providerCode = -1;
    this.onTypeProvider();
  }

  GetBatchFileErrors(): any {
    this.isSearchInitiated = true;
    this.apiService.PostData(`/Submission/GetBatchFileErrors`, { ...this.requestModel, practiceCode: this.GV.currentUser.selectedPractice.PracticeCode }, (response) => {
      if (response.Status == "Success") {
        if (this.dataTableErrors) {
          this.dataTableErrors.destroy();
        }
        this.batchFileErrorsList = response.Response.map(e => ({ ...e, ErrorsArray: e.Errors.split(';') }));
        this.chRef.detectChanges();
        const table: any = $('.dataTableErrors');
        this.dataTableErrors = table.DataTable({
          language: {
            emptyTable: "No data available"
          }
        });
      }
    });
  }

  //#region ngx-select

  onTypeProvider() {
    if (!Common.isNullOrEmpty(this.subProviderSelectList)) {
      this.subProviderSelectList.unsubscribe();
    }
    this.subProviderSelectList =
      this.apiService
        .getDataWithoutSpinner(`/Demographic/GetProviderSelectList?practiceCode=${this.GV.currentUser.selectedPractice.PracticeCode}&all=${true}&searchText=${''}`).subscribe(
          res => {
            if (res.Status == "Success") {
              this.providerSelectList = res.Response;
              if (this.providerSelectList.find(p => p.Name == 'All') == null) {
                this.providerSelectList = [new SelectListViewModel(-1, 'All'), ...this.providerSelectList]
              }
              this.requestModel.providerCode = -1;
              this.onTypeBatch()
            }
          });
  }

  onTypeBatch(e?: any) {
    if (!Common.isNullOrEmpty(this.subBatchSelectList)) {
      this.subBatchSelectList.unsubscribe();
    }
    this.subBatchSelectList =
      this.apiService.getDataWithoutSpinner(`/Submission/GetPendingBatchSelectList?practiceCode=${this.GV.currentUser.selectedPractice.PracticeCode}&providerCode=${this.requestModel.providerCode}`).subscribe(
        res => {
          if (res.Status == "Success") {
            this.batchesSelectList = res.Response;
          }
        });
  }

  resetBatchSelectList() {
    this.batchesSelectList = [];
    this.batchSelectControl.reset();
  }
  //#endregion

  onDateRangeChanged(event: IMyDateRangeModel) {
    this.requestModel.dateFrom = Common.isNullOrEmpty(event.beginJsDate) ? null : moment(event.beginJsDate).format("MM/DD/YYYY");
    this.requestModel.dateTo = Common.isNullOrEmpty(event.endJsDate) ? null : moment(event.endJsDate).format("MM/DD/YYYY");
  }

  editClaim(claimNo, patientAccount, firstName, lastName) {
    this.router.navigate(['/Patient/Demographics/ClaimDetail/',
      Common.encodeBase64(JSON.stringify({
        Patient_Account: patientAccount,
        claimNo: claimNo,
        disableForm: false,
        PatientLastName: lastName,
        PatientFirstName: firstName
      }))]);
  }

}
