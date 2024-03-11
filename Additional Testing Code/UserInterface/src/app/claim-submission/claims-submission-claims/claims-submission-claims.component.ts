import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { IMyDpOptions, IMyDateModel } from 'mydatepicker';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClaimSearchViewModel, ClaimSearchResponseViewModel, BatchCreateViewModel, BatchListRequestViewModel, AddInBatchRequestViewModel, LockBatchRequestViewModel, BatchListViewModel } from '../models/claims-submission.model';
import { Subscription } from 'rxjs';
import { SelectListViewModel } from '../../models/common/selectList.model';
import { BatchUploadRequest } from '../../models/common/dateRange.model';
import { PatientSummaryVM } from '../../patient/Classes/patientSummary.model';

import { APIService } from '../../components/services/api.service';
import { GvarsService } from '../../services/G_vars/gvars.service';
import { Common } from '../../services/common/common';
import { ClaimSummaryVM } from '../../Claims/Classes/ClaimSummary.model';
import { isNullOrUndefined } from 'util';

declare var $: any;

@Component({
  selector: 'app-claims-submission-claims',
  templateUrl: './claims-submission-claims.component.html',
  styleUrls: ['./claims-submission-claims.component.css']
})
export class ClaimsSubmissionClaimsComponent implements OnInit {
  // tables
  dataTableClaimsSummary: any;
  // tables
  // form controls
  searchForm: FormGroup;
  batchForm: FormGroup;
  batchProviderControl = new FormControl('');
  batchAddEditProviderControl = new FormControl('', [Validators.required]);
  batchSelectControl = new FormControl('', [Validators.required]);
  AddInBatchProviderFormControl = new FormControl();
  // Select lists
  patientSelectList: SelectListViewModel[];
  insuranceSelectList: SelectListViewModel[];
  providerSelectList: SelectListViewModel[];
  addInBatchProviderSelectList: SelectListViewModel[];
  AddUpdateBatchProviderSelectList: SelectListViewModel[];
  locationSelectList: SelectListViewModel[];
  batchesSelectList: SelectListViewModel[];
  // Subscriptions
  subsPatientSelectList: Subscription;
  subInsuranceSelectList: Subscription;
  subProviderSelectList: Subscription;
  subAddUpdateBatchProviderSelectList: Subscription;
  subLocationSelectList: Subscription;
  subBatchSelectList: Subscription;
  batchCreateViewModel: BatchCreateViewModel;
  batchDetailsRequest: BatchListRequestViewModel;
  batchDetailsResponseList: BatchListViewModel[];
  claimsSearch: ClaimSearchViewModel;
  claimSearchResponse: ClaimSearchResponseViewModel[];
  addInBatchViewModel: AddInBatchRequestViewModel;
  AddInBatchProvider: number;
  // claimUploadDateRange: DateRangeViewModel;
  batchUploadRequest: BatchUploadRequest;
  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'mm/dd/yyyy', height: '25px', width: '100%'
  }
  public myDateRangePickerOptions: IMyDpOptions = {
    dateFormat: 'mm/dd/yyyy', height: '25px', width: '100%'
  }
  patientSummary: PatientSummaryVM;
  claimSummary: ClaimSummaryVM;
  dataTableBatches: any;
  //ng multiselect
  locationsSettings = {};
  providerSettings = {};
  insuranceSettings = {};
  patientSettings = {};
  selectedLocations: SelectListViewModel[];
  selectedProviders: SelectListViewModel[];
  selectedInsurances: SelectListViewModel[];
  selectedPatients: SelectListViewModel[];
  //subscriptions
  subsLocationSelectList: Subscription;
  patientSearchSubscription: Subscription;
  insuranceSearchSubscription: Subscription;
  constructor(public datepipe: DatePipe,
    public apiService: APIService,
    public GV: GvarsService,
    public router: Router,
    private chRef: ChangeDetectorRef) {
    this.claimsSearch = new ClaimSearchViewModel();
    this.claimSearchResponse = [];
    this.patientSelectList = [];
    this.insuranceSelectList = [];
    this.providerSelectList = [];
    this.addInBatchProviderSelectList = [];
    this.AddUpdateBatchProviderSelectList = [];
    this.locationSelectList = [];
    this.batchesSelectList = [];
    this.batchCreateViewModel = new BatchCreateViewModel();
    this.batchDetailsRequest = new BatchListRequestViewModel();
    this.batchDetailsResponseList = [];
    this.addInBatchViewModel = new AddInBatchRequestViewModel();
    this.patientSummary = new PatientSummaryVM();
    this.claimSummary = new ClaimSummaryVM();
    // this.claimUploadDateRange = new DateRangeViewModel();
    this.batchUploadRequest = new BatchUploadRequest();
  }

  ngOnInit() {
    this.InitForm();
    this.GetBatchesDetail();
    this.selectedLocations = [];
    this.selectedProviders = [];
    this.selectedInsurances = [];
    this.selectedPatients = [];
    this.locationsSettings = {
      text: "Select Locations",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: "myclass custom-class-ng2-multi-dropdown",
      primaryKey: "Id",
      labelKey: "Name",
      noDataLabel: "Search Locations...",
      enableSearchFilter: true,
      badgeShowLimit: 3
    };
    this.providerSettings = {
      text: "Select Providers",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: "myclass custom-class-ng2-multi-dropdown",
      primaryKey: "Id",
      labelKey: "Name",
      noDataLabel: "Search Providers...",
      enableSearchFilter: true,
      badgeShowLimit: 3
    };
    this.patientSettings = {
      text: "Select Patients",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: "myclass custom-class-ng2-multi-dropdown",
      primaryKey: "Id",
      labelKey: "Name",
      noDataLabel: "Search Patients...",
      enableSearchFilter: true,
      badgeShowLimit: 3
    };
    this.insuranceSettings = {
      text: "Select Insurances",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: "myclass custom-class-ng2-multi-dropdown",
      primaryKey: "Id",
      labelKey: "Name",
      noDataLabel: "Search Insurances...",
      enableSearchFilter: true,
      badgeShowLimit: 3
    };
    this.getProvidersAndLocations();
  }

  getProvidersAndLocations() {
    if (!Common.isNullOrEmpty(this.subsLocationSelectList))
      this.subsLocationSelectList.unsubscribe();
    this.subsLocationSelectList = this.apiService.getDataWithoutSpinner(`/Scheduler/GetProvidersAndLocations?practiceCode=${this.GV.currentUser.selectedPractice.PracticeCode}`).subscribe(
      res => {
        if (res.Status == "Success") {
          this.locationSelectList = res.Response.Locations;
          this.providerSelectList = res.Response.Providers;
          if (this.addInBatchProviderSelectList == null) {
            this.addInBatchProviderSelectList = [];
          }
          if (this.addInBatchProviderSelectList.find(p => p.Name == 'All') == null) {
            this.addInBatchProviderSelectList = [new SelectListViewModel(-1, 'All')]
          }
          this.addInBatchProviderSelectList = [...this.addInBatchProviderSelectList, ...JSON.parse(JSON.stringify(res.Response.Providers))]
        }
      });
  }

  InitForm(): any {
    this.searchForm = new FormGroup({
      dosFrom: new FormControl(''),
      dosTo: new FormControl(''),
      icd9: new FormControl(''),
      type: new FormControl(''),
      status: new FormControl(''),
      location: new FormControl([]),
      provider: new FormControl([]),
      patientAccount: new FormControl([]),
      insurance: new FormControl([])
    });
    this.batchForm = new FormGroup({
      type: new FormControl(),
      date: new FormControl('', [Validators.required])
    });
  }

  newBatchClick() {
    this.onTypeAddUpdateBatchProvider();
  }

  onSearch() {
    if (this.canSearch()) {
      this.setMultiSelectIdsInRequest();
      this.claimsSearch.status = "unprocessed";
      this.claimsSearch.PracticeCode = this.GV.currentUser.selectedPractice.PracticeCode;
      this.apiService.PostData(`/Submission/SearchClaim`, this.claimsSearch, (response) => {
        if (response.Status == "Success") {
          if (this.dataTableClaimsSummary) {
            this.dataTableClaimsSummary.destroy();
          }
          this.claimSearchResponse = response.Response;
          console.log(this.claimSearchResponse )
          this.chRef.detectChanges();
          const table: any = $('.dataTableClaimsSummary');
          this.dataTableClaimsSummary = table.DataTable({
            columnDefs: [{
              'targets': 0,
              'checkboxes': {
                'selectRow': true
              }
            }, {
              className: 'control',
              orderable: false,
              targets: 1
            }, {
              visible: false,
              targets: 2
            }],
            responsive: {
              details: {
                type: 'column',
                target: 1
              }
            },
            select: {
              style: 'multi',
            },
            order: [2, 'asc'],
            language: {
              buttons: {
                emptyTable: "No data available"
              },
              select: {
                rows: ""
              }
            }
          });
        }
        else {
          swal('Claim Search', 'No claim found.', 'info');
        }
      });
    } else {
      swal('Claim Search', 'Please provide any search criteria', 'warning');
    }
  }

  setMultiSelectIdsInRequest() {
    if (isNullOrUndefined(this.selectedInsurances))
      this.selectedInsurances = []
    this.claimsSearch.insurance = this.selectedInsurances.map(ins => ins.Id);
    if (isNullOrUndefined(this.selectedLocations))
      this.selectedLocations = []
    this.claimsSearch.location = this.selectedLocations.map(loc => loc.Id);
    if (isNullOrUndefined(this.selectedPatients))
      this.selectedPatients = []
    this.claimsSearch.PatientAccount = this.selectedPatients.map(pat => pat.Id);
    if (isNullOrUndefined(this.selectedProviders))
      this.selectedProviders = []
    this.claimsSearch.Provider = this.selectedProviders.map(pro => pro.Id);
  }


  onSearchPatients(value: any) {
    let searchText = value.trim() || "";
    if (!Common.isNullOrEmpty(searchText) && (searchText.length == 3 || searchText.length == 5 || searchText.length >= 7)) {
      if (!isNullOrUndefined(this.patientSearchSubscription))
        this.patientSearchSubscription.unsubscribe();
      this.patientSearchSubscription = this.apiService.getData(`/Demographic/GetPatientSelectList?searchText=${value}&practiceCode=${this.GV.currentUser.selectedPractice.PracticeCode}`).subscribe(r => {
        if (r.Status == "Success") {
          this.patientSelectList = r.Response;
        }
      })
    }
  }

  onSearchInsurances(value: any) {
    let searchText = value.trim() || "";
    if (!Common.isNullOrEmpty(searchText) && (searchText.length == 3 || searchText.length == 5 || searchText.length >= 7)) {
      if (!isNullOrUndefined(this.insuranceSearchSubscription))
        this.insuranceSearchSubscription.unsubscribe();
      this.insuranceSearchSubscription = this.apiService.getData(`/Demographic/GetInsuranceSelectList?searchText=${value}`).subscribe(r => {
        if (r.Status == "Success") {
          this.insuranceSelectList = r.Response;
        }
      })
    }
  }


  clearForm() {
    this.searchForm.reset();
    this.claimsSearch = new ClaimSearchViewModel();
    this.claimSearchResponse = [];
    this.selectedLocations = [];
    this.selectedPatients = [];
    this.selectedProviders = [];
    this.selectedInsurances = [];
    this.chRef.detectChanges();
  }

  canSearch(): boolean {
    if ((!Common.isNullOrEmpty(this.claimsSearch.DOSFrom)) && (!Common.isNullOrEmpty(this.claimsSearch.DOSTo)) ||
      (!Common.isNullOrEmpty(this.selectedPatients) && this.selectedPatients.length > 0) ||
      (!Common.isNullOrEmpty(this.selectedProviders) && this.selectedProviders.length > 0) ||
      !Common.isNullOrEmpty(this.claimsSearch.icd9) ||
      (!Common.isNullOrEmpty(this.selectedInsurances) && this.selectedInsurances.length > 0) ||
      (!Common.isNullOrEmpty(this.selectedLocations) && this.selectedLocations.length > 0)
    ) {
      return true;
    } else {
      return false;
    }
  }


  //#region Batch
  onAddInBatchSelect() {
    this.addInBatchViewModel.ClaimIds = [];
    this.AddInBatchProviderFormControl.reset();
    this.batchesSelectList = [];
    this.batchSelectControl.reset();
    let selectedRows = this.dataTableClaimsSummary.rows({ selected: true });
    let selectedClaimsIds = this.dataTableClaimsSummary.cells(selectedRows.nodes(), 2).data();
    for (let i = 0; i < selectedClaimsIds.length; i++) {
      this.addInBatchViewModel.ClaimIds.push(selectedClaimsIds[i]);
    }
    if (this.addInBatchViewModel && this.addInBatchViewModel.ClaimIds.length > 0) {
      $('#addInBatchClaimModal').modal('show');
      this.AddInBatchProvider = -1;
      this.onTypeBatch();
    }
    else {
      swal("Claims", 'Please select at least one claim to add in batch', 'info');
    }
  }

  onSaveNewBatch() {
    if (this.batchForm.valid) {
      this.batchCreateViewModel.PracticeCode = this.GV.currentUser.selectedPractice.PracticeCode;
      this.batchCreateViewModel.DateStr = this.batchCreateViewModel.Date.toDateString();
      this.apiService.PostData(`/Submission/AddUpdateBatch`, this.batchCreateViewModel, (res) => {
        if (res.Status == "Success") {
          $('#batchModal').modal('hide');
          this.resetBatchForm();
          this.GetBatchesDetail();
          swal('Claim Batch', 'Batch has been created successfully.', 'success');
        }
        else {
          swal('Claim Batch', res.Status, 'error');
        }
      });
    }
  }

  resetBatchForm(): any {
    this.batchForm.reset();
    this.batchAddEditProviderControl.reset();
    (<FormControl>this.batchForm.get('type')).setValue('P', { emitEvent: true });
  }

  resetAddInBatch() {
    this.AddInBatchProviderFormControl.reset();
    this.batchSelectControl.reset();
  }

  onAddInBatch() {
    if (this.batchSelectControl.valid) {
      this.addInBatchViewModel.PracticeCode = this.GV.currentUser.selectedPractice.PracticeCode;
      this.apiService.PostData(`/Submission/AddInBatch`, this.addInBatchViewModel, (res) => {
        if (res.Status == "Success") {
          $('#addInBatchClaimModal').modal('hide');
          this.resetAddInBatch();
          this.GetBatchesDetail();
          this.clearForm();
          swal('Claim Batch', 'Claim has been added to batch successfully.', 'success');
        }
        else {
          swal('Claim Batch', res.Status, 'error');
        }
      });
    }
  }

  GetBatchesDetail() {
    this.batchDetailsRequest.PracticeCode = this.GV.currentUser.selectedPractice.PracticeCode;
    this.apiService.PostData(`/Submission/GetBatchesDetail`, this.batchDetailsRequest, (response) => {
      if (response.Status == "Success") {
        if (this.dataTableBatches) {
          this.dataTableBatches.destroy();
        }
        this.batchDetailsResponseList = response.Response;
        this.chRef.detectChanges();
        const table: any = $('.dataTableBatches');
        this.dataTableBatches = table.DataTable({
          lengthMenu: [[5, 10, 15, 20], [5, 10, 15, 20]],
          columnDefs: [{
            orderable: false,
            className: 'select-checkbox',
            targets: 0
          },
          {
            visible: false,
            targets: 1
          }],
          select: {
            style: 'multi',
            selector: 'td:first-child'
          },
          order: [5, 'desc'],
          language: {
            emptyTable: "No data available"
          }
        })
      }
      else {
        swal('Batches', response.Status, 'error');
      }
    });
  }

  askToLockBatch(batchId: number, claimsCount: number) {
    if (claimsCount > 0) {
      this.apiService.confirmFun('Batch Submission', 'Are you sure that you want to lock the selected batch?', () => {
        let request = new LockBatchRequestViewModel();
        request.BatchId = batchId;
        this.apiService.PostData(`/Submission/LockBatch`, request, (res) => {
          if (res.Status == "Success") {
            this.GetBatchesDetail();
            swal('Batch Lock', 'Batch has been locked successfully', 'success');
          } else {
            swal('Batch Lock', res.Status, 'error');
          }
        })
      })
    } else {
      swal('Batch Lock', 'The batch should have at least one claim to lock.', 'warning');
    }
  }

  GetPatientSummary(PatientAccount: any): any {
    if (!Common.isNullOrEmpty(PatientAccount)) {
      this.apiService.getDataWithoutSpinner(`/Demographic/GetPatientSummary?patientAccount=${PatientAccount}&practiceCode=${this.GV.currentUser.selectedPractice.PracticeCode}`).subscribe((res) => {
        if (res.Status == "Success") {
          this.patientSummary = res.Response;
        } else {
          swal('Patient Summary', res.Status, 'error');
        }
      })
    }
  }

  GetClaimSummary(ClaimNo: any) {
    if (!Common.isNullOrEmpty(ClaimNo)) {
      this.apiService.getDataWithoutSpinner(`/Demographic/GetClaimSummaryByNo?claimNo=${ClaimNo}&practiceCode=${this.GV.currentUser.selectedPractice.PracticeCode}`).subscribe((res) => {
        if (res.Status == "Success") {
          this.claimSummary = res.Response;
        } else {
          swal('Claim Summary', res.Status, 'error');
        }
      })
    }
  }

  // UploadBatches() {
  //   if (this.claimUploadDateRange.BeginDate != null && this.claimUploadDateRange.EndDate != null) {
  //     this.apiService.PostData(`/Submission/UploadBatches`, this.claimUploadDateRange, (res) => {
  //       if (res.Status == "Success") {
  //         if (res.Response.Type == 1) {
  //           swal('Batch upload', res.Response.Message, 'success');
  //         } else if (res.Response.Type == 2) {
  //           swal('Batch upload', res.Response.Message, 'warning');
  //         } else if (res.Response.Type == 3) {
  //           swal('Batch upload', res.Response.Message, 'info');
  //         }
  //       } else {
  //         swal('Batch upload', res.Status, 'error');
  //       }
  //     })
  //   }
  // }

  UploadBatches() {
    this.batchUploadRequest.BatcheIds = [];
    let selectedRows = this.dataTableBatches.rows({ selected: true });
    let selectedBatchesIds = this.dataTableBatches.cells(selectedRows.nodes(), 1).data();
    for (let index = 0; index < selectedBatchesIds.length; index++) {
      this.batchUploadRequest.BatcheIds.push(selectedBatchesIds[index]);
    }
    if (this.batchUploadRequest != null && this.batchUploadRequest.BatcheIds && this.batchUploadRequest.BatcheIds.length > 0) {
      this.apiService.PostData(`/Submission/UploadBatches`, this.batchUploadRequest, (res) => {
        if (res.Status == "Success") {
          if (res.Response.Type == 1) {
            swal('Batch upload', res.Response.Message, 'success');
          } else if (res.Response.Type == 2) {
            swal('Batch upload', res.Response.Message, 'warning');
          } else if (res.Response.Type == 3) {
            swal('Batch upload', res.Response.Message, 'info');
          }
        } else {
          swal('Batch upload', res.Response, 'error');
        }
        this.GetBatchesDetail();
      })
    } else {
      swal("Batch Upload", "Please select at least one batch upload.", "warning");
    }
  }

  //#endregion

  //#region ngx-select-ex
  // onTypePatient(value: any) {
  //   if (!Common.isNullOrEmpty(value) && value.length > 2) {
  //     if (!Common.isNullOrEmpty(this.subsPatientSelectList)) {
  //       this.subsPatientSelectList.unsubscribe();
  //     }
  //     this.subsPatientSelectList = this.apiService.getDataWithoutSpinner(`/Demographic/GetPatientSelectList?searchText=${value}&practiceCode=${this.GV.currentUser.selectedPractice.PracticeCode}`).subscribe(
  //       res => {
  //         if (res.Status == "Success") {
  //           this.patientSelectList = res.Response;
  //         }
  //       });
  //   }
  // }

  // onTypeInsurance(value: any) {
  //   if (!Common.isNullOrEmpty(value) && value.length > 2) {
  //     if (!Common.isNullOrEmpty(this.subInsuranceSelectList)) {
  //       this.subInsuranceSelectList.unsubscribe();
  //     }
  //     this.subInsuranceSelectList = this.apiService.getDataWithoutSpinner(`/Demographic/GetInsuranceSelectList?searchText=${value}`).subscribe(
  //       res => {
  //         if (res.Status == "Success") {
  //           this.insuranceSelectList = res.Response;
  //         }
  //       });
  //   }
  // }

  // onTypeProvider(value: any) {
  //   if (!Common.isNullOrEmpty(value) && value.length > 2) {
  //     if (!Common.isNullOrEmpty(this.subProviderSelectList)) {
  //       this.subProviderSelectList.unsubscribe();
  //     }
  //     this.subProviderSelectList = this.apiService.getDataWithoutSpinner(`/Demographic/GetProviderSelectList?searchText=${value}&practiceCode=${this.GV.currentUser.selectedPractice.PracticeCode}`).subscribe(
  //       res => {
  //         if (res.Status == "Success") {
  //           this.providerSelectList = res.Response;
  //         }
  //       });
  //   }
  // }

  onTypeAddUpdateBatchProvider() {
    if (!Common.isNullOrEmpty(this.subAddUpdateBatchProviderSelectList)) {
      this.subAddUpdateBatchProviderSelectList.unsubscribe();
    }
    this.subAddUpdateBatchProviderSelectList = this.apiService.getDataWithoutSpinner(`/Demographic/GetProviderSelectList?searchText=${''}&practiceCode=${this.GV.currentUser.selectedPractice.PracticeCode}&all=${true}`).subscribe(
      res => {
        if (res.Status == "Success") {
          this.AddUpdateBatchProviderSelectList = res.Response;
          if (this.AddUpdateBatchProviderSelectList.find(p => p.Name == 'All') == null) {
            this.AddUpdateBatchProviderSelectList = [new SelectListViewModel(-1, 'All'), ...this.AddUpdateBatchProviderSelectList];
          }
          this.batchCreateViewModel.ProviderCode = -1;
        }
      });
  }

  // onTypeLocation(value: any) {
  //   if (!Common.isNullOrEmpty(value) && value.length > 2) {
  //     if (!Common.isNullOrEmpty(this.subLocationSelectList)) {
  //       this.subLocationSelectList.unsubscribe();
  //     }
  //     this.subLocationSelectList = this.apiService.getDataWithoutSpinner(`/Demographic/GetLocationSelectList?searchText=${value}&practiceCode=${this.GV.currentUser.selectedPractice.PracticeCode}`).subscribe(
  //       res => {
  //         if (res.Status == "Success") {
  //           this.locationSelectList = res.Response;
  //         }
  //       });
  //   }
  // }

  onTypeBatch() {
    if (!Common.isNullOrEmpty(this.subBatchSelectList)) {
      this.subBatchSelectList.unsubscribe();
    }
    this.subBatchSelectList =
      this.apiService.getDataWithoutSpinner(`/Submission/GetPendingBatchSelectList?practiceCode=${this.GV.currentUser.selectedPractice.PracticeCode}&providerCode=${this.AddInBatchProvider}`).subscribe(
        res => {
          if (res.Status == "Success") {
            this.batchesSelectList = res.Response;
          }
        });
  }

  onBatchSearchProviderSelect(e: any) {
    this.GetBatchesDetail();
  }

  resetBatchSelectList() {
    this.batchesSelectList = [];
    this.batchSelectControl.reset();
    this.onTypeBatch();
  }
  //#endregion

  //#region my-date-picker
  dateMaskGS(event: any) {
    var v = event.target.value;
    if (v.match(/^\d{2}$/) !== null) {
      event.target.value = v + '/';
    } else if (v.match(/^\d{2}\/\d{2}$/) !== null) {
      event.target.value = v + '/';
    }
  }

  onDateChange(value: IMyDateModel, type: string) {
    switch (type) {
      case 'dosFrom': {
        this.claimsSearch.DOSFrom = value.formatted;
        break;
      }
      case 'dosTo': {
        this.claimsSearch.DOSTo = value.formatted;
        break;
      }
      case 'date': {
        this.batchCreateViewModel.Date = new Date(value.formatted);
      }
    }

  }

  // onDateRangeChanged(event: IMyDateRangeModel) {
  //   this.claimUploadDateRange.BeginDate = event.beginJsDate;
  //   this.claimUploadDateRange.EndDate = event.endJsDate;
  //   this.claimUploadDateRange.BeginDateStr = event.beginJsDate.toDateString();
  //   this.claimUploadDateRange.EndDateStr = event.endJsDate.toDateString();
  // }
  //#endregion
}
