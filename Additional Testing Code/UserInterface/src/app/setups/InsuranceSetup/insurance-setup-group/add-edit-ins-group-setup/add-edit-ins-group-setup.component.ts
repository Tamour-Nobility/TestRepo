import { Component, OnInit } from '@angular/core';
//import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { FormGroup, Validators, FormControl } from '@angular/forms';
import { groupModel } from '../../classes/ins-group-model';
import { APIService } from '../../../../components/services/api.service';
import { TableRefreshService } from '../../../../services/data/table-refresh.service';
import { ValidateWhiteSpace } from '../../../../validators/validateWhiteSpace.validator';


@Component({
  selector: 'app-add-edit-ins-group-setup',
  templateUrl: './add-edit-ins-group-setup.component.html'
})
export class AddEditInsGroupSetupComponent implements OnInit {
  strAddEditTitle: string = "";
  objInsGroupRsp: groupModel;
  addeditForm: FormGroup;
  constructor(
    private activatedRoute: ActivatedRoute,
    private API: APIService,
    private route: Router,
    private refreshGrid: TableRefreshService
  ) {
    this.objInsGroupRsp = new groupModel();
  }

  ngOnInit() {
    this.InitForm();
    this.activatedRoute.params.subscribe(params => {
      let id = +params['id'];
      if (id) {
        this.getInsGroup(id);
        this.strAddEditTitle = 'Edit Insurance Group';
      }
      else {
        this.strAddEditTitle = 'Add New Insurance Group';
      }
    });
  }

  InitForm() {
    this.addeditForm = new FormGroup({
      groupName: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
        ValidateWhiteSpace
      ]),
    });
  }
  getInsGroup(insGroupId: any) {
    this.API.getData('/InsuranceSetup/GetInsuranceGroup?InsuranceGroupId=' + insGroupId + '').subscribe(
      d => {
        if (d.Status == "Sucess") {
          $('.datatables').DataTable().destroy();
          this.objInsGroupRsp = d;
        }
        else {
          swal('Failed', d.Status, 'error');
        }
      })
  }

  onSaveClick() {
    if (this.canSave()) {
      this.API.PostData('/InsuranceSetup/SaveInsuranceGroup/', this.objInsGroupRsp.Response, (d) => {
        if (d.Status == "Sucess") {
          swal('Add/Edit', 'Insurance name has been saved successfully.', 'success');
          this.onCancelClick();
        }
      })
    }
  }
  canSave(): boolean {
    if ($.trim(this.objInsGroupRsp.Response.Insgroup_Name) == "") {
      swal('Failed', "Please enter Insurance Group Name.", 'error');
      return false;
    }
    return true;
  }
  onCancelClick() {
    this.route.navigate(['/InsuranceSetup/insGroup/']);
    this.refreshGrid.refresh.next('insGroup');
  }

}
