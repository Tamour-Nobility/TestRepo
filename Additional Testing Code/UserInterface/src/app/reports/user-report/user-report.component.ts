import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DatatableService } from '../../services/data/datatable.service';
import { APIService } from '../../components/services/api.service'
import { IMyDrpOptions } from 'mydaterangepicker';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-user-report',
  templateUrl: './user-report.component.html',
  styleUrls: ['./user-report.component.css']
})
export class UserReportComponent implements OnInit {

  CPDForm: FormGroup;
  isSearchInitiated: boolean;
  dtuserreportdetials: any;
  usersDetailReport: any;
  listUserList:any;  
  listPracticesList: any;
  DateF:any =null
  DateT:any=null
  public placeholder: string = 'MM/DD/YYYY';
  public myDatePickerOptions: IMyDrpOptions = {
    dateFormat: 'mm/dd/yyyy',
    height: '25px',
    width: '93%',
  };

  constructor(public toaster: ToastrService,
    private chRef: ChangeDetectorRef,
    private spinner: NgxSpinnerService,
    public datatableService: DatatableService,
    private API: APIService) { }

  ngOnInit() {
    this.InitForm();
    this.getPractices();
  }

  InitForm() {
    this.CPDForm = new FormGroup({
      PracCode: new FormControl('', [
        Validators.required,
      ]),
      userid: new FormControl('', [
        Validators.required,
      ]),
      dateFrom: new FormControl(null),
      dateTo: new FormControl(null)
    
    
    })
  }
  get f() {
    return this.CPDForm.controls;
  }
  
  onDateChanged(e, dType: string) {
    debugger
    if (dType == 'From') {
      this.DateF=e.formatted
    }
    else {
      this.DateT=e.formatted;
    }
  }

  getUserReportDetail() {
    this.API.getData('/Report/GetUserReport?PracCode=' + this.CPDForm.value.PracCode + '&userid=' + this.CPDForm.value.userid + '&DateFrom=' + this.DateF + '&DateTo=' + this.DateT).subscribe(
      data => {
        if (data.Status == 'success') {
          this.isSearchInitiated = true;
          if (this.dtuserreportdetials) {
            this.chRef.detectChanges();
            this.dtuserreportdetials.destroy();
          }
          this.usersDetailReport = data.Response;
    
          this.chRef.detectChanges();
          const table: any = $('.dtuserReportdetials');
          this.dtuserreportdetials = table.DataTable({
         
            language: {
              emptyTable: "No data available"
            },
            dom: this.datatableService.getDom(),
            buttons: this.datatableService.getExportButtons(["User report"])
          })
        }
        else {
          this.f.userid.setValue(0);
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
          this.f.userid.setValue(0);
        }
        else {
          swal('Failed', d.Status, 'error');
        }
      })
  }
  getUserList(){
    this.API.getData('/Setup/GetuserList?pracCode=' + this.CPDForm.value.PracCode).subscribe(
      d => {
        if (d.Status == "Sucess") {
          this.listUserList = d.Response;
     
        }
        else {
          swal('Failed', d.Status, 'error');
        }
      })
  }
  onClear() {
    this.isSearchInitiated = false;
    this.chRef.detectChanges();
    if (this.dtuserreportdetials) {
      this.dtuserreportdetials.destroy();
    }
    this.CPDForm.reset();
    this.usersDetailReport = [];
  }
  onchangePractice() {
    if (this.CPDForm.value.PracCode == undefined || this.CPDForm.value.PracCode == null || this.CPDForm.value.PracCode == 0) {
      swal('Failed', "Select Practice", 'error');
      return;
    }else {
    
     
      this.getUserReportDetail();
    }
    
  }
  onchangeuser(){
   
    this.f.userid.setValue(0);
    this.getUserList();
  }

}
