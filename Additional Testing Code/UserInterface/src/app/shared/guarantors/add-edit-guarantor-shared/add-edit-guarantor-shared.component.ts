import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GurantorResponse } from '../../../setups/guarantors/classes/responseMedel';
import { IMyDpOptions } from 'mydatepicker';
import { APIService } from '../../../components/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Common } from '../../../services/common/common';
import { BaseComponent } from '../../../core/base/base.component';

@Component({
  selector: 'app-add-edit-guarantor-shared',
  templateUrl: './add-edit-guarantor-shared.component.html',
  styleUrls: ['./add-edit-guarantor-shared.component.css']
})
export class AddEditGuarantorSharedComponent extends BaseComponent implements OnInit {
  @Input() caller: string;
  @Input() mode: string = "page";
  @Output() onCancelEvent = new EventEmitter<boolean>();
  GurantorModel: GurantorResponse;
  private today = new Date();
  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'mm/dd/yyyy',
    height: '25px',
    width: '100%',
    disableSince: {
      year: this.today.getFullYear(),
      month: this.today.getMonth() + 1,
      day: this.today.getDate() + 1
    }
  };
  title = "";
  @Output() onAddGuarantor: EventEmitter<any> = new EventEmitter();;

  constructor(
    private API: APIService,
    private router: Router,
    private route: ActivatedRoute,
    public datepipe: DatePipe) {
    super();
    this.GurantorModel = new GurantorResponse;
  }

  ngOnInit() {
    if (this.caller === 'PATIENT_FINANCIAL_GUARANTOR')
      return;
    this.route.params.subscribe(params => {
      let id = +params['id'];
      if (id) {
        this.title = "Edit Guarantor";
        this.getGuarantor(id);
      }
      else
        this.title = "Add Guarantor";
    })
  }

  getGuarantor(id: number) {
    this.API.getData(`/Setup/GetGurantor?GurantorId=${id}`).subscribe(
      data => {
        if (data.Status == "Sucess") {
          this.GurantorModel = data;
          this.GurantorModel.Response.Guarant_Dob = this.datepipe.transform(this.GurantorModel.Response.Guarant_Dob, 'MM/dd/yyyy');
        }
        else {
          swal('Error', "An error occurred while getting the Guarantor");
        }
      }
    );
  }

  AddGurantor() {
    this.GurantorModel.Status = "Success";
    this.API.PostData('/Setup/SaveGurantor/', this.GurantorModel.Response, (d) => {
      if (d.Status == "Sucess") {
        if (this.caller == 'PATIENT_FINANCIAL_GUARANTOR') {
          this.handleSaveClick(d.Response);
          return;
        }
        swal('Success', `Guarantor has been ${this.title === "Edit Guarantor" ? 'updated' : 'added'} successfully`, 'success');
        this.router.navigate(['/guarantors']);
      } else {
        swal('Failure', `An error occurred while ${this.title === "Edit Guarantor" ? 'updating' : 'adding'} Guarantor.`, 'error');
      }
    })
  }

  onBlurMethod(param: any) {
    var id = this.GurantorModel.Response.Guarant_Zip;
    if (id == undefined || id == null || id == "" || id.length < 4)
      return;
    this.API.getData('/Demographic/GetCityState?ZipCode=' + id).subscribe(
      data => {
        if (data.Status == "Sucess") {
          this.GurantorModel.Response.Guarant_City = data.Response.CityName;
          this.GurantorModel.Response.Guarant_State = data.Response.State;
        }
        else {
          this.GurantorModel.Response.Guarant_City = "";
          this.GurantorModel.Response.Guarant_State = "";
        }
      }
    );
  }

  dateMaskGS(event: any) {
    var v = event.target.value;
    if (v) {
      if (v.match(/^\d{2}$/) !== null) {
        event.target.value = v + '/';
      } else if (v.match(/^\d{2}\/\d{2}$/) !== null) {
        event.target.value = v + '/';
      }
    }
  }

  isnullorEmpty(str: any): boolean {
    if (str == undefined || str == null)
      return true;
    if ($.trim(str) == "")
      return true;
    else return false;
  }

  onDateChangedDOBAddUpdate(event) {
    this.GurantorModel.Response.Guarant_Dob = event.formatted;
  }

  canSave() {
    if (Common.isNullOrEmpty(this.GurantorModel.Response.Guarant_Lname)) {
      return swal('Validation Error', 'Last name is Required.', 'error');
    }
    if (Common.isNullOrEmpty(this.GurantorModel.Response.Guarant_Fname)) {
      return swal('Validation Error', 'First name is Required.', 'error');
    }
    if (Common.isNullOrEmpty(this.GurantorModel.Response.Guarant_Gender)) {
      return swal('Validation Error', 'Gender is Required.', 'error');
    }
    if (Common.isNullOrEmpty(this.GurantorModel.Response.Guarant_Address)) {
      return swal('Validation Error', 'Address is Required.', 'error');
    }
    else {
      this.AddGurantor();
    }
  }

  onCancel() {
    if (this.mode == "page")
      this.router.navigate([`/guarantors`]);
    else if (this.mode == "modal") {
      this.onCancelEvent.emit();
    }
  }

  handleSaveClick({ Guarantor_Code, Guarant_Fname, Guarant_Lname }) {
    if (this.caller === 'PATIENT_FINANCIAL_GUARANTOR') {
      this.onAddGuarantor.emit({
        for: 'PATIENT_FINANCIAL_GUARANTOR',
        data: {
          guarantorName: Guarant_Lname + ' , ' + Guarant_Fname,
          guarantorCode: Guarantor_Code
        }
      });
    }
  }

  resetForm() {
    this.GurantorModel = new GurantorResponse();
  }
}
