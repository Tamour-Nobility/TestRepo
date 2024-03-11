import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as moment from 'moment';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IMyDrpOptions } from 'mydaterangepicker';
import { ToastrService } from 'ngx-toastr';
import { ReportforAccountasssignee} from '../../Claims/Classes/ClaimAssignee';

import { Aging_Summary_Analysis_Report_Result, PracticesList } from '../classes/aging-summary-report-model'
import { APIService } from '../../components/services/api.service';
import { DatatableService } from '../../../app/services/data/datatable.service';
import { ActivatedRoute } from '@angular/router';
import { GvarsService } from '../../services/G_vars/gvars.service';


@Component({
  selector: 'app-account-assignmentreport',
  templateUrl: './account-assignmentreport.component.html',
 
})
export class AccountAssignmentreportComponent implements OnInit {

  listPracticesList: PracticesList[];
  isRouted: boolean = false;
  AccountAssigneeReports :ReportforAccountasssignee[];
  ddlPracticeCode: number = 0;
  AccountAssigneeReportDetail: any;
  dataTable: any;
  PDForm: FormGroup;
  strFromDate: string;
  strToDate: string;
  isSearchInitiated: boolean = false;
  public myDatePickerOptions: IMyDrpOptions = {
    dateFormat: 'mm/dd/yyyy',
    height: '25px',
    width: '93%',
  };

  constructor(private chRef: ChangeDetectorRef,
    public API: APIService,
    private datatableService: DatatableService,
    private route: ActivatedRoute,
    public toaster: ToastrService,
    private Gv: GvarsService) { 

      this.AccountAssigneeReports = [];
    }

  ngOnInit() {
    this.InitForm();
    this.getPractices();
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

  onDateChanged(e, dType: string) {
    if (dType == 'From') {
      this.strFromDate = e.formatted;
    }
    else {
      this.strToDate = e.formatted;
    }
  }
 

  getAccountAssignmentReport() {
      

    this.API.getData('/Report/AccounAssignmentReport?PracticeCode=' +
   this.ddlPracticeCode+ '&DateFrom=' + this.strFromDate + '&DateTo=' + this.strToDate).subscribe(
     data => {
      
       if (data.Status == 'Sucess') {
        this.isSearchInitiated=true;
        console.log("mydata" + data)
      
        if (this.AccountAssigneeReportDetail) {
          this.chRef.detectChanges();
          this.AccountAssigneeReportDetail.destroy();
        }
        this.AccountAssigneeReports = data.Response;
      


        


        
        this.chRef.detectChanges();
        const table: any = $('.AccountAssigneReportDetail');
        this.AccountAssigneeReportDetail = table.DataTable({
          width: '100%',
          columnDefs: [
            {
              type: 'date', targets: [5]
            },
            {
              width: '15%', targets: [1]
            },
            {
              width: '15%', targets: [0, 2, 5]
            }
    
          ],
          language: {
            emptyTable: "No data available"
          },
          autoWidth: false,
          paging: true,
          scrollX: true,
          scrollY: '290',
          dom: this.datatableService.getDom(),
          buttons: this.datatableService.getExportButtons(["Account Assignment Report"])
        })


        

       }
      
     }
   )
 }


 onchangePractice() {
  if (this.ddlPracticeCode == undefined || this.ddlPracticeCode == null || this.ddlPracticeCode == 0)
    return;
  this.getAccountAssignmentReport();
}


  getPractices() {

    this.API.getData('/Setup/GetPracticeList').subscribe(
      
      d => {
          
        if (d.Status == "Sucess") {
          this.listPracticesList = d.Response;
          console.log(this.listPracticesList)
        }
        else {
          swal('Failed', d.Status, 'error');
        }
      })
  }

}