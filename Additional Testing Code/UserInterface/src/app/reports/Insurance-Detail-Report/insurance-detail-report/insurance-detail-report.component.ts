import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IMyDrpOptions } from 'mydaterangepicker';
import { ToastrService } from 'ngx-toastr';
import { APIService } from '../../../components/services/api.service'
import { DatatableService } from '../../../services/data/datatable.service';

@Component({
  selector: 'app-insurance-detail-report',
  templateUrl: './insurance-detail-report.component.html',
  styleUrls: ['./insurance-detail-report.component.css']
})
export class InsuranceDetailReportComponent implements OnInit {
  listPracticesList: any[];
  isSearchInitiated: boolean = false;
  insuranceDetailReport:any[]
  dtInsuranceDetail: any;
  CPDForm: FormGroup;
  strFromDate: string;
  strToDate: string;
  public myDatePickerOptions: IMyDrpOptions = {
    dateFormat: 'mm/dd/yyyy',
    height: '25px',
    width: '93%',
  };
  public placeholder: string = 'MM/DD/YYYY';
  Dateoptions = { year: "numeric", month: "2-digit", day: "2-digit" };
  constructor(private API: APIService,
    public toaster: ToastrService,
    private chRef: ChangeDetectorRef,
    public datatableService: DatatableService) { 
    }

  ngOnInit() {
    this.InitForm();
    this.getPractices();
  }
  InitForm() {
    this.CPDForm = new FormGroup({
      PracCode: new FormControl('', [
        Validators.required,
      ])
    
    })
  }
  get f() {
    return this.CPDForm.controls;
  }
  
  onDateChanged(e, dType: string) {
    if (dType == 'From') {
      this.f.dateFrom.setValue(e.formatted);
    }
    else {
      this.f.dateTo.setValue(e.formatted);
    }
  }

  getInsuranceReportDetail() {
    this.API.getData('/Report/GetInsuranceDetailReport?PracCode=' + this.CPDForm.value.PracCode  ).subscribe(
      data => {
        if (data.Status == 'success') {
          this.isSearchInitiated = true;
          if (this.dtInsuranceDetail) {
            this.chRef.detectChanges();
            this.dtInsuranceDetail.destroy();
          }
          this.insuranceDetailReport = data.Response;
          this.chRef.detectChanges();
          const table: any = $('.dtInsuranceDetail');
          this.dtInsuranceDetail = table.DataTable({
            columnDefs: [
              {
                type: 'date', targets: [3, 7, 13]
              },
              {
                width: '14.5em', targets: [1]
              },
              {
                width: '10em', targets: [9, 10]
              },
              {
                width: '8.5em', targets: [0, 4, 5, 6, 8, 11, 12, 13, 14]
              },
              {
                width: '7.5em', targets: [2, 3, 7]
              }
            ],
            language: {
              emptyTable: "No data available"
            },
            paging: true,
            scrollX: true,
            scrollY: '290',
            dom: this.datatableService.getDom(),
            buttons: this.datatableService.getExportButtons(["Insurance Aging Analysis"])
          })
        }
        else {
          this.toaster.warning(data.Response + ' Found Againts the Given Criteria', '');
        }
      }
    )
  }
  getPractices() {
    this.API.getData('/Setup/GetPracticeList').subscribe(
      d => {
        if (d.Status == "Sucess") {
          this.listPracticesList = d.Response;
        }
        else {
          swal('Failed', d.Status, 'error');
        }
      })
  }
  onClear() {
    this.isSearchInitiated = false;
    this.chRef.detectChanges();
    if (this.dtInsuranceDetail) {
      this.dtInsuranceDetail.destroy();
    }
    this.CPDForm.reset();
    this.insuranceDetailReport = [];
  }
  onchangePractice() {
    if (this.CPDForm.value.PracCode == undefined || this.CPDForm.value.PracCode == null || this.CPDForm.value.PracCode == 0) {
      swal('Failed', "Select Practice", 'error');
      return;
    }
    this. getInsuranceReportDetail();
  }

}
