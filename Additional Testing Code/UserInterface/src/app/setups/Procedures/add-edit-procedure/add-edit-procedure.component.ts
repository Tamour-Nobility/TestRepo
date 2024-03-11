import { Component, OnInit, AfterViewInit, AfterContentChecked, AfterViewChecked } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IMyDpOptions, IMyDateModel } from 'mydatepicker';
import { APIService } from '../../../components/services/api.service';
import { Subscription } from 'rxjs';
import { isNullOrUndefined } from 'util';
import { ProcedureViewModel, ProcedureDropdownListViewModel } from '../models/procedures.model';
import { ValidateWhiteSpace } from '../../../validators/validateWhiteSpace.validator';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
declare var $: any;

@Component({
  selector: 'app-add-edit-procedure',
  templateUrl: './add-edit-procedure.component.html',
  styleUrls: ['./add-edit-procedure.component.css']
})
export class AddEditProcedureComponent implements OnInit {
  ProcedureForm: FormGroup;
  subscriptionDublicateProcedure: Subscription
  ObjProcedure: ProcedureViewModel;
  EffectiveDate: string;
  POSEffectiveDate: string;
  DropdownLists: ProcedureDropdownListViewModel;
  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'mm/dd/yyyy', height: '25px', width: '93%'
  }
  isDublicateProc: boolean = false;
  title: string;
  constructor(private apiService: APIService,
    private activatedRoute: ActivatedRoute,
    private datePipe: DatePipe,
    private router: Router) {
    this.ObjProcedure = new ProcedureViewModel();
    this.DropdownLists = new ProcedureDropdownListViewModel();
  }

  ngOnInit() {
    this.InitForm();
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.title = 'Edit Procedure';
        this.getById(id);

      }
      else {
        this.title = 'Add Procedure';
      }
    });
    this.GetDropdownsListForProcedures();

  }

  GetDropdownsListForProcedures(): any {
    this.apiService.getData(`/Setup/GetDropdownsListForProcedures`).subscribe(
      res => {
        if (res.Status === 'Success') {
          this.DropdownLists = res.Response;
        }
        else {
          swal('Error', res.Status, 'error');
        }
      }
    );
  }

  getById(code): any {
    const encCode = encodeURIComponent(code);
    this.subscriptionDublicateProcedure = this.apiService.getDataWithoutSpinner(`/Setup/GetProcedure?procedureCode=${encCode}`).subscribe(
      res => {
        if (res && res.Status == 'Success') {
          this.ProcedureForm.get('proCode').disable({ emitEvent: true });
          this.ObjProcedure = res.Response;
          this.EffectiveDate = this.datePipe.transform(this.ObjProcedure.EffectiveDate, 'MM/dd/yyyy');
          this.POSEffectiveDate = this.datePipe.transform(this.ObjProcedure.ProcedureEffectiveDate, 'MM/dd/yyyy');
        }
        else {
          this.ObjProcedure = new ProcedureViewModel();
          swal('Procedure', 'Error Occured', 'error');
        }
      }, error => {
        swal('Procedure', 'Error Occured', 'error');
      }, () => {

      });
  }

  InitForm(): any {
    this.ProcedureForm = new FormGroup({
      proCode: new FormControl('', [Validators.required, ValidateWhiteSpace, Validators.maxLength(10)]),
      description: new FormControl('', [Validators.required, ValidateWhiteSpace, Validators.maxLength(255)]),
      longDescription: new FormControl(''),
      defaultCharge: new FormControl('', [Validators.required, Validators.maxLength(8)]),
      defaultModifier: new FormControl('', [Validators.maxLength(2)]),
      posCode: new FormControl('', [Validators.maxLength(2)]),
      tosCode: new FormControl('', [Validators.maxLength(2)]),
      effectiveDate: new FormControl('', [Validators.required]),
      genderAppliedOn: new FormControl(''),
      ageCategory: new FormControl(''),
      ageRange: new FormControl(''),
      ageFrom: new FormControl('', [Validators.maxLength(4)]),
      ageTo: new FormControl('', [Validators.maxLength(4)]),
      proEffectiveDate: new FormControl(''),
      cliaNumber: new FormControl(''),
      qualifier: new FormControl(''),
      mxUnits: new FormControl('', [Validators.maxLength(4)]),
      inclInEDI: new FormControl(''),
      componentCode: new FormControl('', [Validators.maxLength(4)]),
      CPTDosage: new FormControl('', [Validators.maxLength(10)])
    });
  }

  onProcedureCodeChange(event: any) {
    let code = event.target.value;
    if (code && code.length > 0) {
      this.isDublicateProc = true;
      if (!isNullOrUndefined(this.subscriptionDublicateProcedure)) {
        this.subscriptionDublicateProcedure.unsubscribe();
      }
      this.subscriptionDublicateProcedure = this.apiService.getDataWithoutSpinner(`/Setup/GetProcedure?procedureCode=${code}`).subscribe(
        res => {
          if (res && res.Status == 'Success') {
            if (!isNullOrUndefined(res.Response)) {
              this.isDublicateProc = true;
            }
            else {
              this.isDublicateProc = false;
            }
          }
          else {
            this.isDublicateProc = false;
          }
        }, error => {
          swal('Procedure', 'Error Occured', 'error');
        }, () => {

        });
    }
  }

  onSave() {
    if (this.ProcedureForm.valid) {
      this.apiService.PostData('/Setup/SaveProcedure', this.ObjProcedure, (data) => {
        if (data.Status == 'Success') {
          swal('Procedures', 'Procedure Saved Successfully', 'success');
          this.router.navigate(['procedures']);
        } else {
          swal('Procedures', data.Status, 'error');
        }
      });
    } else {
      swal('Validation Error', 'Please provide required values', 'info');
    }
  }

  onChangeGenderAppliedOn(selectedValue: any) {
    if (selectedValue === "Male") {
      if (this.ObjProcedure.AgeCategory === "Meternity") {
        this.ProcedureForm.get('ageCategory').reset();
        this.ProcedureForm.get('ageCategory').updateValueAndValidity();
      }
    }
  }

  onAgeRangeChange(selectedValue: any) {
    // if (selectedValue == 'Between') {
    //   this.ProcedureForm.get('ageFrom').setValidators([Validators.required]);
    //   this.ProcedureForm.get('ageFrom').updateValueAndValidity({ onlySelf: true, emitEvent: true });
    //   this.ProcedureForm.get('ageTo').setValidators([Validators.required]);
    //   this.ProcedureForm.get('ageTo').updateValueAndValidity({ onlySelf: true, emitEvent: true });
    // }
    // else {
    //   this.ProcedureForm.get('ageFrom').clearValidators();
    //   this.ProcedureForm.get('ageTo').clearValidators();
    //   this.ProcedureForm.get('ageFrom').setValidators([Validators.maxLength(4)]);
    //   this.ProcedureForm.get('ageFrom').updateValueAndValidity({ onlySelf: true, emitEvent: true });
    //   this.ProcedureForm.get('ageTo').setValidators([Validators.maxLength(4)]);
    //   this.ProcedureForm.get('ageTo').updateValueAndValidity({ onlySelf: true, emitEvent: true });

    // }
  }

  // my date picker methods
  dateMaskGS(event: any) {
    var v = event.target.value;
    if (v.match(/^\d{2}$/) !== null) {
      event.target.value = v + '/';
    } else if (v.match(/^\d{2}\/\d{2}$/) !== null) {
      event.target.value = v + '/';
    }
  }

  onEffectiveDateChanged(event: IMyDateModel) {
    this.ObjProcedure.EffectiveDate = new Date(event.formatted);
  }

  onProcEffectiveDateChanged(event: IMyDateModel) {
    this.ObjProcedure.ProcedureEffectiveDate = new Date(event.formatted);
  }
  // my date picker methods
}
