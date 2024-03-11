import { ChangeDetectorRef, Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IMyDrpOptions } from 'mydaterangepicker';
import { ToastrService } from 'ngx-toastr';
import { APIService } from '../../../components/services/api.service';
import { DatatableService } from '../../../services/data/datatable.service';
import { CtpWisePaymentDetailReport } from '../../classes/ctp-wise-payment-detail-report';

@Component({
  selector: 'app-ctp-wise-payment-details',
  templateUrl: './ctp-wise-payment-details.component.html',
  styleUrls: ['./ctp-wise-payment-details.component.css']
})
export class CtpWisePaymentDetailsComponent implements OnInit {
  PDForm: FormGroup;
  listPracticesList: any[];
  cptWisePaymentDetailList: CtpWisePaymentDetailReport[];
  dtCptWisePaymentDetail: any;
  ddlPracticeCode: string;
  strFromDate: string;
  strToDate: string;
  public myDatePickerOptions: IMyDrpOptions = {
    dateFormat: 'mm/dd/yyyy',
    height: '25px',
    width: '93%',
  };
  public placeholder: string = 'MM/DD/YYYY';
  Dateoptions = { year: "numeric", month: "2-digit", day: "2-digit" };
  isSearchInitiated: boolean = false;
  constructor(
    public API: APIService,
    private chRef: ChangeDetectorRef,
    public toaster: ToastrService,
    public datatableService: DatatableService
  ) {
    this.cptWisePaymentDetailList = [];
  }

  ngOnInit() {
    this.InitForm();
    this.getPractices();
    // this.getPaymentDetailReport();
  }

  InitForm() {
    this.PDForm = new FormGroup({
      practice: new FormControl('', [
        Validators.required,
      ]),
      dateFrom: new FormControl('', [
        Validators.required,
      ]),
      dateTo: new FormControl('', [
        Validators.required,
      ]),
    })
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

  onDateChanged(e, dType: string) {
    if (dType == 'From') {
      this.strFromDate = e.formatted;
    }
    else {
      this.strToDate = e.formatted;
    }
  }

  getCptWisePaymentDetailReport() {
    this.API.getData('/Report/CPTWisePaymentDetail?PracticeCode=' + this.ddlPracticeCode + '&DateFrom=' + this.strFromDate + '&DateTo=' + this.strToDate).subscribe(
      data => {
        if (data.Status == 'Success') {
          this.isSearchInitiated = true;
          if (this.dtCptWisePaymentDetail) {
            this.chRef.detectChanges();
            this.dtCptWisePaymentDetail.destroy();
          }
          this.cptWisePaymentDetailList = data.Response;
          this.chRef.detectChanges();
          const table: any = $('.dtCptWisePaymentDetail');
          this.dtCptWisePaymentDetail = table.DataTable({
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
            buttons: this.datatableService.getExportButtons(["CPT Wise Payment Details"])
          })
        }
        else {
          this.toaster.warning(data.Response + ' Found Againts the Given Criteria', '');
        }
      }
    )
  }

  onClear() {
    this.isSearchInitiated = false;
    this.chRef.detectChanges();
    if (this.dtCptWisePaymentDetail) {
      this.dtCptWisePaymentDetail.destroy();
    }
    this.PDForm.reset();
    this.cptWisePaymentDetailList = [];
  }
}
