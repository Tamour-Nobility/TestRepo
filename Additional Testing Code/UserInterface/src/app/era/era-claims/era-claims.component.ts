import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Common } from '../../services/common/common';
import { Location } from '@angular/common';

import { ERAClaimDetailsResponse } from '../models/era-claim-details-response.model';
import { APIService } from '../../components/services/api.service';
import { IMyDpOptions } from 'mydatepicker';
declare var $: any;


@Component({
  selector: 'app-era-claims',
  templateUrl: './era-claims.component.html',
  styleUrls: ['./era-claims.component.css']
})
export class ERAClaims implements OnInit {
  data: ERAClaimDetailsResponse;
  eraId: number;
  rowCount:any
  datatable: any;
  count:number;
  selectedClaimIds: number[];
  isSearchInitiated: boolean = false;
  dataTableEraClaims: any;
  depositDate: any;
  applyBtn:boolean=true;
  today = new Date();
  myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'mm/dd/yyyy',
    height: '25px',
    width: '100%',
    disableSince: {
      year: this.today.getFullYear(),
      month: this.today.getMonth() + 1,
      day: this.today.getDate() + 1,
    },
  };
  constructor(private chRef: ChangeDetectorRef,
    private route: ActivatedRoute,
    private toastService: ToastrService,
    private API: APIService,
    private _location: Location
  ) {
    this.data = new ERAClaimDetailsResponse();
    this.selectedClaimIds = [];
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id'] !== 0 && params['id'] !== '0') {
        this.eraId = params['id'];
        this.getClaimDetails();
      }
    });
  }

  dateMask(event: any) {
    Common.DateMask(event);
  }

  onDateChangedDd(event: any) {
    this.depositDate = event.formatted;

    if(this.depositDate==''){
      $('#AppyBtn').prop('disabled', true);
      $('#autoApplyBtn').prop('disabled', true);
    }else{
      
      if(this.count>=this.rowCount && this.depositDate !=null){
        $('#AppyBtn').prop('disabled', true);
        $('#autoApplyBtn').prop('disabled', false);

        
      }else if(this.count<this.rowCount && this.count>0 && this.depositDate !=null){
        $('#AppyBtn').prop('disabled', false);
        $('#autoApplyBtn').prop('disabled', true);

      }
      else{
        $('#AppyBtn').prop('disabled', true);
      }
    }
  }

  getClaimDetails() {
    if (!Common.isNullOrEmpty(this.eraId)) {
      this.API.PostData('/Submission/ERAClaimSummary', { eraId: this.eraId }, (res) => {
        this.isSearchInitiated = true;
        if (res.Status == "success") {
          if (this.datatable) {
            this.datatable.destroy();
            this.chRef.detectChanges();
          }
          this.data = res.Response;
          this.chRef.detectChanges();
          const table = $('.dataTableEraClaims');
          this.datatable = table.DataTable({
            lengthMenu: [[5, 10, 15, 20], [5, 10, 15, 20]],
            columnDefs: [{
              'targets': 0,
              'checkboxes': {
                'selectRow': true
              }
            },
            {
              targets: [1],
              visible: false,
              searchable: false
            },
            {
              className: 'control',
              orderable: false,
              targets: 0
            }],
            select: {
              style: 'multi'
            },
            language: {
              buttons: {
                emptyTable: "No data available"
              },
              select: {
                rows: ""
              }
            },
            order: [2, 'desc']
          });
          this.datatable.on('select',
            (e, dt, type, indexes) => this.onRowSelect(indexes));
          this.datatable.on('deselect',
            (e, dt, type, indexes) => this.onRowDeselect(indexes));

           
        } else if (res.Status === 'invalid-era-id')
          swal(res.status, res.Response, 'error');
        else
          swal(res.status, "An error occurred", 'error');
      });
    } else {
      this.toastService.warning('Please provide search criteria', 'Invalid Search Criteria');
    }
  }

  onRowDeselect(indexes: any) {
    let ndx = this.selectedClaimIds.findIndex(p => p === this.datatable.cell(indexes, 1).data());
    if (ndx > -1) {
      this.selectedClaimIds.splice(ndx, 1);
    }
    this.count = this.datatable.rows( { selected: true } ).count();
   
    if(this.count==this.rowCount && this.depositDate !=null){
      $('#AppyBtn').prop('disabled', true);
      $('#autoApplyBtn').prop('disabled', false);

      
    }else if(this.count<=this.rowCount && this.count>=1 && this.depositDate !=null){
      $('#AppyBtn').prop('disabled', false);
      $('#autoApplyBtn').prop('disabled', true);

    }
    else{
      $('#autoApplyBtn').prop('disabled', true);
      $('#AppyBtn').prop('disabled', true);
    }
    // console.log(this.count)
    // console.log(this.rowCount)
   
  }

  onRowSelect(indexes: any) {
    if (this.selectedClaimIds.findIndex(p => p == this.datatable.cell(indexes, 1).data()) < 0) {
      this.selectedClaimIds.push(this.datatable.cell(indexes, 1).data());
    }
    $('#AppyBtn').prop('disabled', false);
    this.count = this.datatable.rows( { selected: true } ).count();
    if(this.count==this.rowCount && this.depositDate !=null){
      $('#AppyBtn').prop('disabled', true);

      $('#autoApplyBtn').prop('disabled', false);
      $('#autoApplyBtn').addClass('btn-primary').removeClass('btn-default');

      
    }else if(this.count<=this.rowCount && this.count>0 && this.depositDate !=null){
      $('#AppyBtn').prop('disabled', false);

      $('#autoApplyBtn').prop('disabled', true);
   


    }
    else{
      $('#autoApplyBtn').prop('disabled', true);
      $('#AppyBtn').prop('disabled', true);
    }
    var rows = this.datatable.rows({ selected: true }).data();
    console.log(rows)
  }

  getAdjustmentAmount(amt1, amt2) {
    return parseFloat(amt1) + parseFloat(amt2);
  }

  goBack() {
    this._location.back();
  }

  onApply() {
    var filteredClaimIds = this.selectedClaimIds.filter(id => this.data.eraClaims.find(claim => Number(claim.CLAIMNO) === Number(id) && claim.CLAIMPOSTEDSTATUS === 'U'));
    if (this.selectedClaimIds.length > 0) {
      this.API.PostData('/Submission/ApplyERA', { eraId: this.eraId, claims: filteredClaimIds, depositDate: this.depositDate.formatted }, (res) => {
        if (res.Status == "success") {
          this.toastService.success('ERA Apply Success', 'Success');
          this.depositDate = '';
          if (this.datatable) {
            this.datatable.destroy();
            this.chRef.detectChanges();
          }
          this.data = res.Response;
          this.chRef.detectChanges();
          const table = $('.dataTableEraClaims');
          this.datatable = table.DataTable({
            lengthMenu: [[5, 10, 15, 20], [5, 10, 15, 20]],
            columnDefs: [{
              'targets': 0,
              'checkboxes': {
                'selectRow': true
              }
            },
            {
              targets: [1],
              visible: false,
              searchable: false
            },
            {
              className: 'control',
              orderable: false,
              targets: 0
            }],
            select: {
              style: 'multi'
            },
            language: {
              buttons: {
                emptyTable: "No data available"
              },
              select: {
                rows: ""
              }
            },
            order: [2, 'desc']
          });
          this.datatable.on('select',
            (e, dt, type, indexes) => this.onRowSelect(indexes));
          this.datatable.on('deselect',
            (e, dt, type, indexes) => this.onRowDeselect(indexes));
        }
        else {
          this.toastService.error('An error occurred while applying ERA', 'Failed to apply ERA');
        }
      });
    } else
      this.toastService.warning('Please select at least one claim to apply.', 'Invalid Selection');
  }

  onAutoPost() {
    this.API.PostData(`/Submission/AutoPost/`, { id: this.eraId, depositDate: this.depositDate.formatted }, (res) => {
      if (res.Status == "success") {
        this.toastService.success('ERA has been Auto Posted successfully.', 'ERA Auto Post Success');
        this.depositDate = '';
        if (this.datatable) {
          this.datatable.destroy();
          this.chRef.detectChanges();
        }
        if (res.Response.eraClaims.length > 0)
          this.data = res.Response;
        this.chRef.detectChanges();
        const table = $('.dataTableEraClaims');
        this.datatable = table.DataTable({
          lengthMenu: [[5, 10, 15, 20], [5, 10, 15, 20]],
          columnDefs: [{
            'targets': 0,
            'checkboxes': {
              'selectRow': true
            }
          },
          {
            targets: [1],
            visible: false,
            searchable: false
          },
          {
            className: 'control',
            orderable: false,
            targets: 0
          }],
          select: {
            style: 'multi'
          },
          language: {
            buttons: {
              emptyTable: "No data available"
            },
            select: {
              rows: ""
            }
          },
          order: [2, 'desc']
        });
        this.datatable.on('select',
          (e, dt, type, indexes) => this.onRowSelect(indexes));
        this.datatable.on('deselect',
          (e, dt, type, indexes) => this.onRowDeselect(indexes));
      }
      else {
        this.toastService.error('An error occurred while auto posting ERA', 'Failed to Auto Post ERA');
      }
    });
  }

  getEncodedUrl(claimNo, patientAccount, firstname, lastName) {
    return Common.encodeBase64(JSON.stringify({
      Patient_Account: patientAccount,
      PatientFirstName: firstname,
      PatientLastName: lastName,
      claimNo: claimNo,
      disableForm: false
    }));
  }

  isMismatched(patAccount) {
    return Common.isNullOrEmpty(patAccount);
  }

  canSelectAll() {
    this.data.eraClaims.filter(claim => claim.CLAIMPOSTEDSTATUS === 'U').length > 0 && this.data.era.ERAPOSTEDSTATUS !== 'P'
    this.rowCount=this.data.eraClaims.length
    return ( this.data.eraClaims)
  }

  canAutoPost() {
    return (this.data.era.ERAPOSTEDSTATUS !== 'P' && this.data.eraClaims.some(claim => claim.CLAIMPOSTEDSTATUS !== 'P'))
  }

  canApply() {
    return this.canSelectAll();
  }

}
