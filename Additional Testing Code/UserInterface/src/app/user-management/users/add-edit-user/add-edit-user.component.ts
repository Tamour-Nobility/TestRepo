import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { User, UserSelectListsViewModel } from '../../classes/requestResponse';
import { ZipCityStateViewModel } from '../../../models/common/zipCityState.model';
import { APIService } from '../../../components/services/api.service';
import { TableRefreshService } from '../../../services/data/table-refresh.service';
import { ValidateWhiteSpace } from '../../../validators/validateWhiteSpace.validator';
import { MatchPassword } from '../../../validators/password.validator';
import { ZipCodeLength } from '../../../validators/zipcode.validator';
import { ToastrService } from 'ngx-toastr';

const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&-_\*])(?=.{8,})");
const emailRegx = new RegExp("^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})");

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent implements OnInit {
  activatedRouteSub: Subscription;
  subscZipCityState: Subscription;
  subEmail: Subscription;
  UserForm: FormGroup;
  objUser: User;
  isEmailAlreadyExist: boolean = false;
  zipCityStateViewModel: ZipCityStateViewModel;
  iboxAddEditTitle = '';
  userSelectListsViewModel: UserSelectListsViewModel;
  // Multiselect dropdown
  practicesDropdownList = [];
  dropdownSettings = {};
  // Multiselect dropdown
  constructor(private activatedRoute: ActivatedRoute,
    private toaster: ToastrService,
    private apiService: APIService,
    private route: Router,
    private refreshGrid: TableRefreshService) {
    this.objUser = new User();
    this.zipCityStateViewModel = new ZipCityStateViewModel();
    this.userSelectListsViewModel = new UserSelectListsViewModel();
    this.practicesDropdownList = [];
  }

  ngOnInit() {
    this.InitializeForm();
    this.getDropdownsList();
    this.activatedRouteSub = this.activatedRoute.params.subscribe(params => {
      let id = +params['id'];
      if (id) {
        this.getById(id);
        this.iboxAddEditTitle = 'Edit User';

      }
      else {
        this.iboxAddEditTitle = 'Add User';
        this.objUser.IsActive = true;
      }
    });
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'Id',
      textField: 'Name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 2,
      allowSearchFilter: true,
      maxHeight: 250
    };
  }

  getDropdownsList(): any {
    this.apiService.getData(`/Company/GetCompaniesAndRolesSelectList`)
      .subscribe(res => {
        if (res.Status === 'Sucess') {
          this.userSelectListsViewModel = res.Response;
        }
        else {
          this.toaster.error(res.Status, 'Error');
        }
      });
  }

  InitializeForm(): any {
    this.UserForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.maxLength(25), ValidateWhiteSpace]),
      mi: new FormControl('', [Validators.maxLength(1)]),
      lastName: new FormControl('', [Validators.required, Validators.maxLength(25), ValidateWhiteSpace]),
      email: new FormControl('', [Validators.required, Validators.maxLength(256), ValidateWhiteSpace, Validators.pattern(emailRegx)]),
      pGroup: new FormGroup({
        password: new FormControl('', [Validators.required, Validators.maxLength(100), Validators.minLength(8), Validators.pattern(strongRegex)]),
        confirmPassword: new FormControl('', [Validators.required, Validators.maxLength(100), Validators.minLength(8)])
      }, { validators: MatchPassword }),
      company: new FormControl(''),
      role: new FormControl('', [Validators.required]),
      isActive: new FormControl(''),
      isEmployee: new FormControl(''),
      zip: new FormControl('', [Validators.required, Validators.maxLength(10), ZipCodeLength]),
      city: new FormControl('', [Validators.required, Validators.maxLength(50), ValidateWhiteSpace]),
      state: new FormControl('', [Validators.required, Validators.maxLength(50), ValidateWhiteSpace]),
      address: new FormControl('', [Validators.required, Validators.maxLength(250), ValidateWhiteSpace]),
      ngMultiSelect: new FormControl()
    });
  }

  getById(id: number): any {
    this.apiService.getData(`/UserManagementSetup/GetUser?id=${id}`)
      .subscribe(res => {
        if (res.Status === 'Success') {
          this.objUser = res.Response;
          this.UserForm.controls['email'].disable();
          this.RemoveValidationOfPassword();
        }
        else {
          this.toaster.success(res.Status, 'Error');
        }
      });
  }

  RemoveValidationOfPassword(): any {
    (<FormGroup>this.UserForm.controls['pGroup']).controls['password'].clearValidators();
    (<FormGroup>this.UserForm.controls['pGroup']).controls['confirmPassword'].clearValidators();
    (<FormGroup>this.UserForm.controls['pGroup']).controls['password'].updateValueAndValidity();
    (<FormGroup>this.UserForm.controls['pGroup']).controls['confirmPassword'].updateValueAndValidity();
    (<FormGroup>this.UserForm.controls['pGroup']).controls['password'].updateValueAndValidity();
    this.UserForm.controls['pGroup'].clearValidators();
    this.UserForm.controls['pGroup'].updateValueAndValidity();
  }

  onSaveClick() {
    if (this.UserForm.valid && !this.isEmailAlreadyExist) {
      this.apiService.PostData('/UserManagementSetup/SaveUser', this.objUser, (response) => {
        if (response.Status === 'Success') {
          this.toaster.success('User has been saved successfully.', 'Success');
          this.route.navigate(['/users/users']);
          // this.refreshGrid.refresh.next('users');
        } else {
          this.toaster.error('Failure to add detail', 'Error');
        }
      });
    } else {
      this.toaster.warning('Enter User details.', 'Validation Error');
      return;
    }
  }

  onCancelClick() {
    this.UserForm.reset();
    this.route.navigate(['/users/users']);
  }

  GetCityState(zipCode: string) {
    if (zipCode.length > 0 && (zipCode.length == 5 || zipCode.length == 10)) {
      if (this.subscZipCityState != null) {
        this.subscZipCityState.unsubscribe();
      }
      if (zipCode.indexOf('-') > 0) {
        zipCode = zipCode.replace('-', "");
      }
      this.subscZipCityState = this.apiService.getDataWithoutSpinner(`/Demographic/GetCityState?ZipCode=${zipCode}`).subscribe(
        res => {
          if (res.Status == 'Sucess') {
            this.zipCityStateViewModel = res.Response;
            this.objUser.City = this.zipCityStateViewModel.CityName;
            this.objUser.State = this.zipCityStateViewModel.State;
          } else {
            this.zipCityStateViewModel = new ZipCityStateViewModel();
            this.objUser.City = '';
            this.objUser.State = '';
          }
        });
    }
    else {
      this.zipCityStateViewModel = new ZipCityStateViewModel();
      this.objUser.City = '';
      this.objUser.State = '';
    }
  }
  // Multiselect dropdown
  // onItemSelect(item: any) {
  //   this.objUser.Practices.push(item);
  // }

  // onItemDeSelect(items: any) {
  //   let ndx = this.objUser.Practices.findIndex(t => t.Id == items.Id);
  //   if (ndx > -1) {
  //     this.objUser.Practices.splice(ndx, 1);
  //   }
  // }

  // onSelectAll(items: any) {
  //   this.objUser.Practices = [];
  //   this.objUser.Practices = items;
  // }

  // onDeSelectAll(items: any) {
  //   this.objUser.Practices = [];
  // }
  // Multiselect dropdown
  verifyEmail(email: string) {
    if (this.UserForm.get('email').valid) {
      if (this.subEmail != null) {
        this.subEmail.unsubscribe();
      }
      this.subEmail = this.apiService.getDataWithoutSpinner(`/UserManagementSetup/VerifyEmail?vEmail=${email}`).subscribe(
        res => {
          if (res.Status == 'Success') {
            this.isEmailAlreadyExist = res.Response;
          }
        });
    }
  }
}
