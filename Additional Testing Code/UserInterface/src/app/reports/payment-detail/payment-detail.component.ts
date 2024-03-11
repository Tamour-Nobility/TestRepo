import { ChangeDetectorRef, Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IMyDrpOptions } from 'mydaterangepicker';
import { ToastrService } from 'ngx-toastr';
import { DatatableService } from '../../services/data/datatable.service';
import { APIService } from '../../components/services/api.service';
import { PaymentDetailReport } from '../classes/payment-detail-report-model';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-payment-detail',
    templateUrl: './payment-detail.component.html',
    styleUrls: ['../reports.css']
})

export class PaymentDetail implements OnInit {
    PDForm: FormGroup;
    listPracticesList: any[];
    paymentDetailList: PaymentDetailReport[];
    dtPaymentDetail: any;
    ddlPracticeCode: string;
    strFromDate: string;
    strToDate: string;
    patientAccount: string;
    public myDatePickerOptions: IMyDrpOptions = {
        dateFormat: 'mm/dd/yyyy',
        height: '25px',
        width: '93%',
    };
    public placeholder: string = 'MM/DD/YYYY';
    Dateoptions = { year: "numeric", month: "2-digit", day: "2-digit" };
    isSearchInitiated: boolean = false;
    isRouted: boolean = false;
    constructor(
        public API: APIService,
        private chRef: ChangeDetectorRef,
        public toaster: ToastrService,
        public datatableService: DatatableService,
        private route: ActivatedRoute
    ) {
        this.paymentDetailList = [];
    }

    ngOnInit() {
        this.InitForm();
        this.getPractices();
        this.route.queryParams.subscribe(pqs => {
            if (pqs && pqs['PracticeCode'] && pqs['DateFrom'] && pqs['DateTo']) {
                this.isRouted = true;
                this.ddlPracticeCode = pqs['PracticeCode'];
                this.strFromDate = pqs['DateFrom'];
                this.strToDate = pqs['DateTo'];
                let date = new Date();
                this.PDForm.setValue({
                    practice: pqs['DateFrom'],
                    dateFrom: {
                        year: date.getFullYear(),
                        month: date.getMonth() - 5,
                        day: date.getDate()
                    },
                    dateTo: {
                        year: date.getFullYear(),
                        month: date.getMonth(),
                        day: date.getDate()
                    },
                    patAccount: ''
                });
                this.getPaymentDetailReport();
            }
        })
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
            patAccount: new FormControl(),
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

    getPaymentDetailReport() {
        this.API.getData('/Report/PaymentDetail?PracticeCode=' + this.ddlPracticeCode + '&DateFrom=' + this.strFromDate + '&DateTo=' + this.strToDate + '&PatientAccount=' + this.patientAccount).subscribe(
            data => {
                if (data.Status == 'Success') {
                    this.isSearchInitiated = true;
                    if (this.dtPaymentDetail) {
                        this.chRef.detectChanges();
                        this.dtPaymentDetail.destroy();
                    }
                    this.paymentDetailList = data.Response;
                    this.chRef.detectChanges();
                    const table: any = $('.dtPaymentDetail');
                    this.dtPaymentDetail = table.DataTable({
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
                        dom: this.datatableService.getDom(),
                        buttons: this.datatableService.getExportButtons(["Payment Details"])
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
        if (this.dtPaymentDetail) {
            this.dtPaymentDetail.destroy();
        }
        this.PDForm.reset();
        this.paymentDetailList = [];
    }

    keyPressNumbers(event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        // Only Numbers 0-9
        if ((charCode < 48 || charCode > 57)) {
            event.preventDefault();
            return false;
        } else {
            return true;
        }
    }
}