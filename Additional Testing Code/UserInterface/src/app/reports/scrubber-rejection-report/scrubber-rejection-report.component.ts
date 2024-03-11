import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { IMyDateRangeModel, IMyDrpOptions } from 'mydaterangepicker';
import { ToastrService } from 'ngx-toastr';
import { APIService } from '../../components/services/api.service';
import { ReportRequestModel } from '../../dynamic-reports/models/report-request.model';
import { Common } from '../../services/common/common';
import { DatatableService } from '../../services/data/datatable.service';
@Component({
  selector: 'app-scrubber-rejection-report',
  templateUrl: './scrubber-rejection-report.component.html',
  styleUrls: ['./scrubber-rejection-report.component.css']
})
export class ScrubberRejectionReportComponent implements OnInit {
  Clear = true;
  SearchForm: FormGroup;
  showHistory = false;
  DataTable: any;
  request: ReportRequestModel;
  public myDateRangePickerOptions: IMyDrpOptions = {
    dateFormat: 'mm/dd/yyyy',
    height: '25px',
    width: '167%',
  };
  scrubberrejectionhistory: any;
  ScrubberRejectionCountDetail: any;
  ScrubberRejectionCountDetailclaimwise: any;
  ScrubberRejectionReport: any = [];
  ScrubberRejectionCount: any = [];
  ScrubberRejectionCountClaimwise: any = [];
  totalChargeAmountSum: number = 0;
  totalClaim: number = 0;
  listPracticesList: any;
  requestPayload: any = {
    practiceCode: '',
    Date_From: '',
    Date_To: ''
  };

  @ViewChild(ScrubberRejectionReportComponent) patientAttachments;

  constructor(
    private chRef: ChangeDetectorRef,
    private toastService: ToastrService,
    private API: APIService,
    public datatableService: DatatableService,
    private httpClient: HttpClient,
    private formBuilder: FormBuilder
  ) {
    this.request = new ReportRequestModel();
    this.SearchForm = this.formBuilder.group({
      PracCode: ['0', Validators.required],
      DOSRange: [null],
    });
  }

  ngOnInit() {
    this.getPractices();
    this.InitForm();
  }

  onchangePractices(practiceCode: string) {
    this.requestPayload.practiceCode = practiceCode.toString();
    this.showHistory = false;
    if (this.scrubberrejectionhistory) {
      this.scrubberrejectionhistory.destroy();
      this.scrubberrejectionhistory = null;
    }

    if (this.ScrubberRejectionCountDetailclaimwise) {
      this.ScrubberRejectionCountDetailclaimwise.destroy();
      this.ScrubberRejectionCountDetailclaimwise = null;
    }

    if (this.ScrubberRejectionCountDetail) {
      this.ScrubberRejectionCountDetail.destroy();
      this.ScrubberRejectionCountDetail = null;
    }

    this.ScrubberRejectionReport = [];
    this.ScrubberRejectionCount = [];
    this.ScrubberRejectionCountClaimwise = [];
    this.totalChargeAmountSum = 0;
    this.totalClaim = 0;


    console.log(typeof this.requestPayload.practiceCode);
  }

  InitForm() {
    this.SearchForm = this.formBuilder.group({
      PracCode: ['', Validators.required],
      DOSRange: [null],
    });
  }

  onDateChanged(event: IMyDateRangeModel) {
    this.requestPayload.Date_From = Common.isNullOrEmpty(event.beginJsDate)
      ? null
      : moment(event.beginJsDate).format('MM/DD/YYYY');
    this.requestPayload.Date_To = Common.isNullOrEmpty(event.endJsDate)
      ? null
      : moment(event.endJsDate).format('MM/DD/YYYY');
  }

  onSearch() {
    if (this.scrubberrejectionhistory) {
      this.scrubberrejectionhistory.destroy();
      this.scrubberrejectionhistory = null;
    }

    if (
      this.requestPayload.practiceCode &&
      this.requestPayload.Date_From &&
      this.requestPayload.Date_To
    ) {
      this.showHistory = true;

      this.API.PostData(`/Scrubber/GetScrubberReport?PracticeCode=${this.requestPayload.practiceCode}&Date_From=${this.requestPayload.Date_From}&Date_To=${this.requestPayload.Date_To}`, '', (res) => {
        if (res.Status === 'Success') {
          if (this.scrubberrejectionhistory) {
            this.chRef.detectChanges();
            this.scrubberrejectionhistory.destroy();
          }
          this.ScrubberRejectionReport = res.Response;

          // this.totalChargeAmountSum = 0;
          // this.ScrubberRejectionReport.forEach((rejection: any) => {
          //   this.totalChargeAmountSum += rejection.Chargeamount as number;
          // });
          this.totalClaim = this.ScrubberRejectionReport.length;
          this.totalClaim = this.ScrubberRejectionReport.reduce((sum: number, rejection: any) => sum + rejection.ClaimNumber as number, 0);
          this.totalClaim = new Set(this.ScrubberRejectionReport.map((rejection: any) => rejection.ClaimNumber)).size;
          
          const uniqueClaimNumbers = new Set<number>();
          this.totalChargeAmountSum = 0;
          this.ScrubberRejectionReport.forEach(rejection => {
            const claimNumber = rejection.ClaimNumber as number;
            if (!uniqueClaimNumbers.has(claimNumber)) {
              uniqueClaimNumbers.add(claimNumber);
              this.totalChargeAmountSum += rejection.Chargeamount as number;
            }
          });
          this.chRef.detectChanges();
          const table: any = $('.scrubberrejectionhistory');
          this.scrubberrejectionhistory = table.DataTable({

            language: {
              emptyTable: "No data available"
            },
            dom: this.datatableService.getDom(),
            buttons: this.datatableService.getExportButtons(["Scrubber report"])
          });
        } else {
          console.log('my error message');
          this.scrubberrejectionhistory = $(
            '.scrubberrejectionhistory'
          ).DataTable({
            columnDefs: [{ orderable: false, targets: -1 }],
            language: {
              emptyTable: 'No data available',
            },
          });
        }
      }
      );
      if (this.ScrubberRejectionCountDetail) {
        this.ScrubberRejectionCountDetail.destroy();
        this.ScrubberRejectionCountDetail = null;
      }
      this.showHistory = true;
      this.API.PostData(`/Scrubber/GetScrubberRejectionDetail?PracticeCode=${this.requestPayload.practiceCode}&Date_From=${this.requestPayload.Date_From}&Date_To=${this.requestPayload.Date_To}`, '', (res) => {
        if (res.Status === 'Success') {
          this.ScrubberRejectionCount = res.Response;
          if (this.ScrubberRejectionCountDetail) {
            this.chRef.detectChanges();
            this.ScrubberRejectionCountDetail.destroy();
          }
          this.ScrubberRejectionCount = res.Response;
          this.totalChargeAmountSum = 0;
          this.chRef.detectChanges();
          const table: any = $('.ScrubberRejectionCountDetail');
          this.ScrubberRejectionCountDetail = table.DataTable({
            language: {
              emptyTable: "No data available"
            },
            dom: this.datatableService.getDom(),
            buttons: this.datatableService.getExportButtons(["Scrubber report"])
          });
        } else {
          swal(res.status, res.Response, 'error');
          this.ScrubberRejectionCountDetail = $(
            '.ScrubberRejectionCountDetail'
          ).DataTable({
            columnDefs: [{ orderable: false, targets: -1 }],
            language: {
              emptyTable: 'No data available',
            },
          });
        }
      }
      );
    }
    else {
      swal("Failed", "Please select  " + (this.requestPayload.practiceCode === '' ? 'Practice' :this.requestPayload.Date_From == '' && this.requestPayload.Date_To == '' ? 'Date' : ''), "error");
    }
  }

  getPractices() {
    this.API.getData('/Setup/GetPracticeList').subscribe(
      (d) => {
        if (d.Status === 'Sucess') {
          this.listPracticesList = d.Response;
        } else {
          console.log('Error');
          swal('Failed', d.Status, 'error');
        }
      }
    );
  }
  onClear() {
    this.showHistory = false;
    this.chRef.detectChanges();

    if (this.scrubberrejectionhistory) {
      this.scrubberrejectionhistory.destroy();
      this.scrubberrejectionhistory = null;
    }

    if (this.ScrubberRejectionCountDetailclaimwise) {
      this.ScrubberRejectionCountDetailclaimwise.destroy();
      this.ScrubberRejectionCountDetailclaimwise = null;
    }

    if (this.ScrubberRejectionCountDetail) {
      this.ScrubberRejectionCountDetail.destroy();
      this.ScrubberRejectionCountDetail = null;
    }

    this.ScrubberRejectionReport = [];
    this.ScrubberRejectionCount = [];
    this.ScrubberRejectionCountClaimwise = [];

    setTimeout(() => {
      this.InitForm();
      this.requestPayload = {
        practiceCode: '',
        Date_From: '',
        Date_To: ''
      };
    }, 100);
  }
  onCloseButtonClick(event: Event) {
    event.stopPropagation();
    this.patientAttachments.hide();
  }

}