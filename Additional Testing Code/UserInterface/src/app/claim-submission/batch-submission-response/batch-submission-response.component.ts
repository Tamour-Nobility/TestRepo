import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { BatchesHistoryResponseModel, BatchesHistoryRequestModel, BatchDetails } from '../models/claims-submission.model';
import { SelectListViewModel } from '../../models/common/selectList.model';
import { saveAs } from 'file-saver';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';

import { APIService } from '../../components/services/api.service';
import { GvarsService } from '../../services/G_vars/gvars.service';
import { IMyDpOptions } from 'mydatepicker';
import { Common } from '../../services/common/common';
import { Subscription } from 'rxjs';
import { IMyDateRangeModel } from 'mydaterangepicker';
import { ModalDirective } from 'ngx-bootstrap/modal';
declare var $: any;

@Component({
  selector: 'app-batch-submission-response',
  templateUrl: './batch-submission-response.component.html',
  styleUrls: ['./batch-submission-response.component.css']
})
export class BatchSubmissionResponseComponent implements OnInit {
  dataTableBatchResponse: any;
  requestModel: BatchesHistoryRequestModel;
  batchResponseList: BatchesHistoryResponseModel[];
  batchDetailsList: BatchDetails[];
  subProviderSelectList: Subscription;
  providerSelectList: SelectListViewModel[];
  isSearchInitiated = false;
  isExpanded: boolean = false;
  dateRangeTypes = [
    { id: 'created_date', label: 'Creation Date' },
    { id: 'uploaded_date', label: 'Uploaded Date' }
  ];
  myDateRangePickerOptions: IMyDpOptions = {
    dateFormat: 'mm/dd/yyyy', height: '25px', width: '100%', componentDisabled: true
  }
  @ViewChild(ModalDirective) modalWindow: ModalDirective;
  errorTitle: String = "Batch Claim Errors";
  errorDescription: String;
  errors: any;
  confirmation: boolean = false;
  selectedBatchId: number = null;
  errorStatus: string = "";
  constructor(private _apiService: APIService,
    private chRef: ChangeDetectorRef,
    private _gv: GvarsService,
    private toastService: ToastrService) {
    this.batchResponseList = [];
    this.providerSelectList = [];
    this.requestModel = new BatchesHistoryRequestModel();
  }

  ngOnInit() {
    this.onTypeProvider();
  }

  GetBatchResponseList() {
    this.isSearchInitiated = true;
    if (!this.requestModel.Date_From || !this.requestModel.Date_To)
      this.requestModel.Date_Type = null;
    this._apiService.PostData(`/Submission/GetBatchesHistory`, { ...this.requestModel, Practice_Code: this._gv.currentUser.selectedPractice.PracticeCode }, (res) => {
      if (res.Status == "Success") {
        if (this.dataTableBatchResponse) {
          this.dataTableBatchResponse.destroy();
        }
        this.batchResponseList = res.Response.map(r => {
          console.log("batchResponseList",r)
          console.log("batchResponseList",r.Batch_Status999)
          switch (r.Batch_Status999) {
            case "A":
              r.Batch_Status999 = "Accepted";
              break;
            case "E":
              r.Batch_Status999 = "Partially accepted";
                break;
            case "M":
              r.Batch_Status999 = "Rejected";
              break;
            case "P":
              r.Batch_Status999 = "Partially accepted";
              break;
            case "R":
              r.Batch_Status999 = "Rejected";
                break;
            case "W":
              r.Batch_Status999 = "Rejected";
              break;
              case "X":
                r.Batch_Status999 = "Rejected";
                break;
            default:
              r.Batch_Status999
          }
          
          if (r.Provider_Code === null || r.Provider_Code === undefined || r.Provider_Code === "")
            return {
              ...r,
              Provider_Name: 'All'
            }
          else {
            return {
              ...r,
              Provider_Name: r.Provid_FName + ', ' + r.Provid_LName
            }
          }
        });
        this.chRef.detectChanges();
        const table: any = $('.dataTableBatchResponse');
        this.dataTableBatchResponse = table.DataTable({
          responsive: true,
          // order: [[8, "desc"]],
          columnDefs: [
            { targets: [0], orderable: false },
            { targets: [-2], orderable: false }
          ],
          language: {
            emptyTable: "No data available"
          }
        });
      }
    })
  }

  GetBatchDetailsList(Batch_Id: any) {
    this.isExpanded = !this.isExpanded;
    if (Batch_Id && this.isExpanded) {
      this._apiService.getData('/Submission/GetBatcheDetalis?batchId=' + Batch_Id).subscribe(
        res => {
          if (res.Status == 'Success') {
            this.batchDetailsList = res.Response;
          }
          else {
            swal('Error', res.Status, 'error');
          }
        }
      )
    }
  }

  onTypeProvider() {
    if (!Common.isNullOrEmpty(this.subProviderSelectList)) {
      this.subProviderSelectList.unsubscribe();
    }
    this.subProviderSelectList =
      this._apiService
        .getDataWithoutSpinner(`/Demographic/GetProviderSelectList?practiceCode=${this._gv.currentUser.selectedPractice.PracticeCode}&all=${true}&searchText=${''}`).subscribe(
          res => {
            if (res.Status == "Success") {
              this.providerSelectList = res.Response;
              if (this.providerSelectList.find(p => p.Name == 'All') == null) {
                this.providerSelectList = [new SelectListViewModel(-1, 'All'), ...this.providerSelectList]
              }
              this.requestModel.Provider_Code = -1;
            }
          });
  }

  onDateRangeChanged(event: IMyDateRangeModel) {
    this.requestModel.Date_From = Common.isNullOrEmpty(event.beginJsDate) ? null : moment(event.beginJsDate).format("MM/DD/YYYY");
    this.requestModel.Date_To = Common.isNullOrEmpty(event.endJsDate) ? null : moment(event.endJsDate).format("MM/DD/YYYY");
  }

  onDownload(batchId, batchName) {
    this._apiService.downloadFile(`/Submission/DownloadEDIFile?batchId=${batchId}`).subscribe(response => {
      let blob: any = new Blob([response], { type: 'text/plain; charset=utf-8' });
      saveAs(blob, `${batchName}.txt`);
    }), error => {
      console.info('File download error');
    },
      () => console.info('File downloaded successfully');
  }

  onRegenerate(batchId) {
    this.errors = [];
    this.errorStatus = "";
    this.errorDescription = "";
    this.modalWindow.hide();
    this.selectedBatchId = batchId;
    this._apiService.PostData(`/Submission/RegenerateBatchFile`, {
      Practice_Code: this._gv.currentUser.selectedPractice.PracticeCode,
      Batch_Id: batchId,
      Confirmation: this.confirmation
    }, (response => {
      this.confirmation = false;
      this.errorStatus = response.Status;
      if (response.Status === '1') {
        // Some claims has errors, User confirmation is required to process perfect claims
        this.errorDescription = 'Batch has errors in following claims, do you want regenerate?';
        this.errors = response.Response;
        this.modalWindow.show();
      } else if (response.Status === '2') {
        // All claims has errors, Can't regenerate and upload batch
        this.errorDescription = "Batch has errors in all claims. Batch file can't be regenerated.";
        this.errors = response.Response;
        this.modalWindow.show();
      } else if (response.Status === '3') {
        // No valid claim to regenerate and upload batch
        swal(this.errorTitle, "No valid claim in batch, batch file can't be regenerated.", 'error');
      }
      else if (response.Status === 'success') {
        // File regenerated and uploaded to FTP
        swal("Batch File Regenerated", "File regeneration has been completed successfully", 'success');
      } else if (response.Status === '4') {
        // Claims has errors while creating file
        swal(this.errorTitle, response.Response, 'error');
      }
      else if (response.Status === 'error') {
        swal('Error', response.Response)
      }
    }))
  }

  show() {
    this.modalWindow.show();
  }

  hide() {
    this.modalWindow.hide();
  }

  onConfirm() {
    this.confirmation = true;
    this.onRegenerate(this.selectedBatchId);
  }

  onChangeDateType() {
    if (this.requestModel.Date_Type === null) {
      this.myDateRangePickerOptions = { ...this.myDateRangePickerOptions, componentDisabled: true };
      this.requestModel.Date_To = null;
      this.requestModel.Date_From = null;
    } else {
      this.myDateRangePickerOptions = { ...this.myDateRangePickerOptions, componentDisabled: false };
    }
  }
}