import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { GvarsService } from '../../services/G_vars/gvars.service';
import { CurrentUserViewModel } from '../../models/auth/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatchPassword } from '../../validators/password.validator';
import { ResetPasswordForUserViewModel } from '../../../app/user-management/classes/requestResponse';
import { ToastrService } from 'ngx-toastr';
import { APIService } from '../../components/services/api.service';
import { ClaimService } from '../../services/claim/claim.service';
import {  ClaimAssigneeNotifications, AccountAssigneeNotifications } from '../../Claims/Classes/ClaimAssignee';
declare var $: any;
const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&-_\*])(?=.{8,})");
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  loggedInUser: CurrentUserViewModel;
  @ViewChild('setups') setups: ElementRef;
  isSetup: boolean = false;
  collapse: boolean = true;
  PasswordResetForm: FormGroup;
  objResetPasswordViewModel: ResetPasswordForUserViewModel;

  count:number=0;
  countclaimnotifications:number=0;
  countaccountnotifications:number=0;
  claimuser: ClaimAssigneeNotifications[];
 accountuse: AccountAssigneeNotifications[];
  constructor(private authService: AuthService,
    private apiService: APIService,
    private gvService: GvarsService,
    private cd: ChangeDetectorRef,
    private toaster: ToastrService,
    private claimservice:ClaimService
    ) {
      this.objResetPasswordViewModel = new ResetPasswordForUserViewModel();
      this.claimuser=[]; 
      this.accountuse=[];

      this.claimservice.claimassigneenotifications.subscribe(res =>{
          this.countclaimnotifications =res;
      });

      this.claimservice.accountassigneenotifications.subscribe(res =>{
          this.countaccountnotifications =res;
      });

     }

  ngOnInit() {
    // $('#setups').on('shown.bs.collapse', function () {
    //   $(".servicedrop").addClass('fa fa-minus').removeClass('fa fa-plus');
    // });

    // $('#setups').on('hidden.bs.collapse', function () {
    //   $(".servicedrop").addClass('fa fa-plus').removeClass('fa fa-minus');
    // });
    this.InitializeForm();
    debugger;
    this.PasswordResetForm.reset();
    this.loggedInUser = this.gvService.currentUser;
    this.objResetPasswordViewModel.UserName=this.loggedInUser.unique_name;
   // this.GetUsers();
   this.claimservice.GetUsersClaimNotifications(this.gvService.currentUser.selectedPractice.PracticeCode, true);
   this.claimservice.GetUsersAccountNotifications(this.gvService.currentUser.selectedPractice.PracticeCode, true); 
  }




  ngAfterViewInit(): void {
    if (this.setups.nativeElement.children.length > 0)
      this.isSetup = true;
    this.isSetup = false;
  }

  onClickUnderDevModule() {
    return swal('Coming Soon', 'Selected module is under development.', 'info');
  }
  InitializeForm(): any {
    this.PasswordResetForm = new FormGroup({
      pGroup: new FormGroup({
        userName:new FormControl('',[Validators.required]),
        OldPassword: new FormControl('', [Validators.required, Validators.maxLength(100), Validators.minLength(8), Validators.pattern(strongRegex)]),
        password: new FormControl('', [Validators.required, Validators.maxLength(100), Validators.minLength(8), Validators.pattern(strongRegex)]),
        confirmPassword: new FormControl('', [Validators.required, Validators.maxLength(100), Validators.minLength(8)])
      }, { validators: MatchPassword })
    })
  }
  show(): any {
    this.PasswordResetForm.reset();
    // $('#passwordResetModal').modal('show');
  }

  hide(): any {
    // $('#passwordResetModal').modal('hide');
  }

  onClickLogout() {
    this.authService.Logout();
  }
  onClickChangePassword() {
    this.PasswordResetForm.reset();
    this.objResetPasswordViewModel.UserName=this.loggedInUser.unique_name;
    this.PasswordResetForm.get('pGroup.userName').setValue(this.loggedInUser.unique_name)
    $('#passwordResetfORUserModal').modal('toggle');
  }

  onSaveClick() {
    if (this.PasswordResetForm.valid) {
      this.objResetPasswordViewModel.UserId = this.loggedInUser.userId;
      this.apiService.PostData('/UserManagementSetup/ResetPasswordByUser', this.objResetPasswordViewModel, (response) => {
        if (response.Status === 'Success') {
          this.hide();
          this.toaster.success('Password has been reset successfully.', 'Reset Password');
        } else {
          this.toaster.error(response.Status, 'Error');
        }
      });
    } else {
      this.toaster.warning('Enter password details.', 'Validation');
      return;
    }
}
  Hide(moduleName: string): boolean {

 
    if (this.loggedInUser.Menu.findIndex(t => t.toLowerCase().trim() === moduleName.toLowerCase().trim()) > -1) {

      if (this.setups.nativeElement.children.length > 0) {
        this.isSetup = true;
      } else {
        this.isSetup = false;
      }
      return false;
    }
    if (this.setups.nativeElement.children.length > 0) {
      this.isSetup = true;
    } else {
      this.isSetup = false;
    }
    return true;
  }

  ComingSoon() {
    swal('Coming Soon', 'Selected module in under development', 'info');
  }

  isReportingPerson() {
    return this.gvService.isReportingPerson();
  }

}
