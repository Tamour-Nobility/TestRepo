import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { APIService } from '../../components/services/api.service';
import { DatatableService } from '../../services/data/datatable.service';
import { ToastrService } from 'ngx-toastr';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-rollingsummaryreport',
  templateUrl: './rollingsummaryreport.component.html',
  styleUrls: ['./rollingsummaryreport.component.css']
})
export class RollingsummaryreportComponent implements OnInit {
  CPDForm: any;
  listPracticesList: any;

  isSearchInitiated: boolean;
  dtrollingReportdetials: any;
  rollingreport: any;

  constructor(private API: APIService,private chRef: ChangeDetectorRef,    public datatableService: DatatableService,public toaster: ToastrService,) { }

  ngOnInit() {
    this.InitForm();
    this.getPractices();
    
    
  }
  onClear() {
    this.isSearchInitiated = false;
    this.chRef.detectChanges();
    if (this.dtrollingReportdetials) {
      this.dtrollingReportdetials.destroy();
    }
    this.CPDForm.reset();
    this.rollingreport=[];

  }
  getPdf(){
   


    this.API.downloadFile('/ItemizedPatientStatment/GeneraterollingForDownload?prac_code=' + this.CPDForm.value.PracCode + '&duration=' + this.CPDForm.value.months ).subscribe(
      data => {
        console.log(data)
        if (data != null) {
       
          var bolb = new Blob([data], { type: 'application/pdf' });
          saveAs(bolb,  'AR_Summary.pdf');
        }
      
        
        else {
         
        }
      }
    )
  }
  getrollingsummaryreport() {
  
    this.API.getData('/Report/GetRollingSummaryReport?PracCode=' + this.CPDForm.value.PracCode + '&duration=' + this.CPDForm.value.months ).subscribe(
      data => {
        if (data.Status == 'success') {
         this.isSearchInitiated=true;

         if (this.dtrollingReportdetials) {
          this.chRef.detectChanges();
          this.dtrollingReportdetials.destroy();
       
        }
       this.rollingreport=data.Response;
         
         

         this.chRef.detectChanges();
         const table: any = $('.dtrollingReportdetials');
         this.dtrollingReportdetials = table.DataTable({
        
           language: {
             emptyTable: "No data available"
           },
           dom: this.datatableService.getDom(),
           buttons: this.datatableService.getExportButtons(["Summary of Accounts Receivables"])
         })

        }
        else {
          this.toaster.warning(data.Response + ' Found Againts the Given Criteria', '');
        }
      }
    )
  }
  onPdfClick(){
    if (this.CPDForm.value.PracCode == undefined || this.CPDForm.value.PracCode == null || this.CPDForm.value.PracCode == 0) {
      swal('Failed', "Select Practice", 'error');
      return;
    }else {
    
     
      this.getPdf();
    } 
  }
  onchangePractice(){
    if (this.CPDForm.value.PracCode == undefined || this.CPDForm.value.PracCode == null || this.CPDForm.value.PracCode == 0) {
      swal('Failed', "Select Practice", 'error');
      return;
    }else {
    
     
      this.getrollingsummaryreport();
    }
 
  }
  InitForm() {
    this.CPDForm = new FormGroup({
      PracCode: new FormControl('', [
        Validators.required,
      ]),
      months: new FormControl('', [
        Validators.required,
      ]),
   
    
    
    })
  }
  get f() {
    return this.CPDForm.controls;
  }
  getPractices() {
    this.API.getData('/Setup/GetPracticeList').subscribe(
      d => {
        if (d.Status == "Sucess") {
          this.listPracticesList = d.Response;
          this.f.months.setValue(12);
          this.f.PracCode.setValue(0);
        }
        else {
          swal('Failed', d.Status, 'error');

        }
      })
  }
}
