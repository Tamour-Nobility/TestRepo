import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CalendarEvent } from 'calendar-utils';
import {
  startOfMonth, startOfWeek, startOfDay, endOfMonth, endOfWeek, endOfDay, format, isSameMonth, isSameDay, isThursday
} from 'date-fns';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';
import { IMyDpOptions } from 'mydatepicker';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { AppointmentViewModel, AppointmentsSearchViewModel } from '../models/scheduler.model';
import { SelectListViewModel } from '../../models/common/selectList.model';
import { APIService } from '../../components/services/api.service';
import { GvarsService } from '../../services/G_vars/gvars.service';
import { Common } from '../../services/common/common';
import { PracticeAppointmentReasonViewModel } from '../models/appointment-reason.model';
import { isNullOrUndefined } from 'util';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Popover } from 'ngx-popover';
import { CalendarView } from 'angular-calendar';

export interface OfficeTimeForDay {
  date?: Date,
  timeFrom?: Date;
  timeTo?: Date;
  BreakTimeFrom?: Date;
  BreakTimeTo?: Date;
  duration?: number;
  selectedTime?: Date;
}

export interface AppointmentForDay {
  Appointment_Id?: number,
  Patient_Account?: number,
  Patient_Name?: string,
  Appointment_Date_Time?: Date,
  Time_From?: string,
  Duration?: number
}

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {
  // template references
  @ViewChild(ModalDirective) bsModal: ModalDirective;
  // angular calendar
  viewDate: Date = new Date();
  CalendarView = CalendarView;
  view: CalendarView = CalendarView.Week;
  events: CalendarEvent[];
  dragToCreateActive = false;
  clickedDate: Date;
  activeDayIsOpen: boolean = false;
  clickedColumn: number;
  excludeDays: number[] = [];
  dayStartHour = "6";
  dayEndHour = "21";
  // form
  eventForm: FormGroup;
  patient: FormControl = new FormControl('', [Validators.required]);
  // date time picker
  public placeholder: string = 'MM/DD/YYYY';
  today = new Date();
  appointmentModel: AppointmentViewModel;
  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'mm/dd/yyyy', height: '25px', width: '100%',
    disableUntil: {
      year: this.today.getFullYear(),
      month: this.today.getMonth() + 1,
      day: this.today.getDate() - 1,
    },
  };
  // to add update appointment
  patientSelectList: SelectListViewModel[];
  reasonsSelectList: PracticeAppointmentReasonViewModel[];
  locationSelectList: SelectListViewModel[];
  providerSelectList: SelectListViewModel[];
  officeTimeForDay: OfficeTimeForDay;
  isAlreadyAppointed: boolean = false;
  isOfficeTiming: boolean = true;
  isBlockedTimming: boolean;
  appointmentForDay: AppointmentForDay;
  errorMessageTitle: string = '';
  errorMessage = '';
  // subscriptions
  subsPatientSelectList: Subscription;
  subAppointmentSlotAvailability: Subscription;
  subsLocationSelectList: Subscription;
  subProviderSelectList: Subscription;
  appointmentSearchViewModel: AppointmentsSearchViewModel;
  // multiselect dropdown
  locationsSettings = {};
  topLevelLocationSelectList: any = [];
  providerSettings = {};
  topLevelProviderSelectList: SelectListViewModel[];
  //popover 
  @ViewChild('myPopover') errorMessagePopover: Popover;
  eligibilityResponse: any;
  constructor(private _api: APIService,
    private _gv: GvarsService,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private toastService: ToastrService,
    private cdRef: ChangeDetectorRef) {
    this.events = [];
    this.patientSelectList = [];
    this.reasonsSelectList = [];
    this.locationSelectList = [];
    this.providerSelectList = [];
    this.topLevelProviderSelectList = [];
    this.topLevelLocationSelectList = [];
    this.appointmentModel = new AppointmentViewModel();
    // multi select dropdown
    this.locationsSettings = {
      text: "Select Locations",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: "myclass custom-class-ng2-multi-dropdown",
      primaryKey: "Id",
      labelKey: "Name",
      noDataLabel: "Search Locations...",
      enableSearchFilter: true,
      badgeShowLimit: 3
    };
    this.providerSettings = {
      text: "Select Providers",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: "myclass custom-class-ng2-multi-dropdown",
      primaryKey: "Id",
      labelKey: "Name",
      noDataLabel: "Search Providers...",
      enableSearchFilter: true,
      badgeShowLimit: 3
    };
    // multi select dropdown end
    this.appointmentSearchViewModel = new AppointmentsSearchViewModel();
  }

  ngOnInit() {
    this.InitForm();
    this.route.queryParams.subscribe(qs => {
      if (qs && qs['id']) {
        this.getAppointmentDetail(Number(qs['id']));
      } else {
        this.getProvidersAndLocations();
      }
    });
  }

  getAppointmentDetail(id: number) {
    this._api
      .getData(`/scheduler/GetAppointmentModel?practiceCode=${this._gv.currentUser.selectedPractice.PracticeCode}&id=${id}`)
      .subscribe(({ Response, Status }) => {
        if (Status === 'Success' && Response) {
          this.setProviderAndLocation(Response.Provider, Response.Location);
          this.getProvidersAndLocations(false);
          this.dayClicked({ date: new Date(Response.AppointmentDateTime) }).then(() => {
            this.handleEvent('clicked', this.events.find(e => e.meta.appointmentId == Response.AppointmentId));
          });
        }
      });
  }

  get formControls() {
    return this.eventForm.controls;
  }

  InitForm() {
    this.eventForm = this._formBuilder.group({
      notes: new FormControl('', [Validators.maxLength(500)]),
      date: new FormControl(null, [Validators.required]),
      timeFrom: new FormControl('', [Validators.required]),
      duration: new FormControl('', [Validators.required]),
      status: new FormControl(null, [Validators.required]),
      provider: new FormControl(null, [Validators.required]),
      location: new FormControl(null, [Validators.required]),
      reason: new FormControl(null, [Validators.required])
    });
  }

  //#region Events
  dayClicked({ date }: { date: Date; }): Promise<any> {
    this.view = CalendarView.Day;
    this.viewDate = date;
    return this.fetchEvents();
  }

  // view, edit and delete appointment
  handleEvent(action: string, event: CalendarEvent): void {
    this.appointmentModel = new AppointmentViewModel();
    if (action === 'delete') {
      this._api.confirmFun('Delete Confirm', 'Are you sure that you want to delete this appointment?', () => {
        this.events = this.events.filter(e => e !== event);
        this.appointmentModel.action = 'delete';
        this.DeleteAppointment(event.meta.appointmentId);
      })
    } else if (action === 'edit') {
      this.clearDate();
      this.appointmentModel = new AppointmentViewModel();
      this.GetAppointmentModel(event.meta.appointmentId).then(result => {
        this.appointmentModel = result;
        this.appointmentModel.action = action;
        if (this.appointmentModel.Reasons && this.appointmentModel.Reasons.length > 0)
          this.reasonsSelectList = this.appointmentModel.Reasons;
        this.setDate(new Date(this.appointmentModel.AppointmentDateTime));
        this.setSmartLists();
      }).catch(() => {
      });
      this.bsModal.show();
    } else if (action === 'clicked') {
      this.appointmentModel.action = 'clicked';
      this.appointmentModel.event = null;
      this.appointmentModel.event = event;
      this.bsModal.show();
    }
  }

  reload() {
    this.fetchEvents();
  }

  // add appointment
  hourSegmentClicked(event) {
    if (!this.isPastDateTime(event.date)) {
      this.appointmentModel = new AppointmentViewModel();
      this.clickedDate = event.date;
      this.GetAppointmentModel().then(result => {
        this.appointmentModel = result;
        this.clearDate();
        this.setDate(event.date);
        this.appointmentModel.AppointmentDateTime = event.date;
        this.appointmentModel.TimeFrom = this.datePipe.transform(event.date, 'HH:mm');
        this.appointmentModel.action = 'add';
        if (this.appointmentModel && this.appointmentModel.Statuses && this.appointmentModel.Statuses.length > 0) {
          let defaultStatus = this.appointmentModel.Statuses.find(s => s.Name.toLowerCase() === 'pending');
          if (defaultStatus != null) {
            this.appointmentModel.StatusId = defaultStatus.Id;
          }
        }
      }).catch(() => {
      });
      this.bsModal.show();
    } else {
      this.toastService.warning('Please select future date time to book an appointment.', 'Appointment Booking');
    }
  }

  isPastDateTime(eventDate: Date): boolean {
    return (new Date() > eventDate)
  }

  clearDate(): void {
    // Clear the date using the patchValue function
    this.eventForm.patchValue({ myDate: null });
  }

  onShown() {
  }

  setSmartLists() {
    // Patient
    if (this.patientSelectList == null)
      this.patientSelectList = [];
    if (this.patientSelectList.find(f => f.Id == this.appointmentModel.Patient.Id) == null)
      this.patientSelectList.push(this.appointmentModel.Patient);
  }

  onHidden() {
    this.eventForm.reset();
    this.patient.reset();
    // Resetting smartLists
    this.patientSelectList = [];
    this.reasonsSelectList = [];
    // appointment slot, and office timing
    this.appointmentForDay = null;
    this.officeTimeForDay = null;
    this.errorMessage = '';
    this.errorMessageTitle = '';
    this.isAlreadyAppointed = false;
    this.isOfficeTiming = true;
  }

  onPatientClick(patientObj) {
    let nameObj = Common.SplitFullName(patientObj.name);
    this._router.navigate(['/Patient/Demographics/Detail/',
      Common.encodeBase64(JSON.stringify({
        Patient_Account: patientObj.account,
        PatientFirstName: nameObj.firstName,
        PatientLastName: nameObj.lastName,
        claimNo: 0,
        disableForm: true
      }))
    ])
  }

  //#endregion

  //#region Methods
  fetchEvents() {
    return new Promise((resolve, reject) => {
      const getStart: any = {
        month: startOfMonth,
        week: startOfWeek,
        day: startOfDay
      }[this.view];

      const getEnd: any = {
        month: endOfMonth,
        week: endOfWeek,
        day: endOfDay
      }[this.view];
      const sDate = format(getStart(this.viewDate), 'YYYY-MM-DD');
      const eDate = format(getEnd(this.viewDate), 'YYYY-MM-DD');
      this.appointmentSearchViewModel.sDate = sDate;
      this.appointmentSearchViewModel.eDate = eDate;
      this.appointmentSearchViewModel.practiceCode = this._gv.currentUser.selectedPractice.PracticeCode;
      this._api.PostData(`/scheduler/events`, this.appointmentSearchViewModel, (events) => {
        if (events.Status === 'Success') {
          this.events = events.Response.results.map((e) => {
            return this.generateEventView(e);
          });
          resolve(true);
        }
      });
    })
  }

  setDefaultLocation(location: SelectListViewModel) {
    if (this.topLevelLocationSelectList == null)
      this.topLevelLocationSelectList = [];
    if (this.topLevelLocationSelectList.findIndex(l => l.Id == location.Id) < 0) {
      this.topLevelLocationSelectList.push(location);
      this.appointmentSearchViewModel.locations.push(location);
    } else {
      if (this.locationSelectList.findIndex(l => l.Id === location.Id) < 0) {
        this.appointmentSearchViewModel.locations.push(location);
      }
    }
  }

  fetchTimes(date, duration, time_from): any {
    // Time duration
    const dTimeObj = {
      hour: Math.floor(duration / 60),
      minutes: duration % 60
    }
    // Start time
    const sTime = time_from;
    const sTimeArray = sTime.split(':');

    const sTimeObj = {
      hours: sTimeArray[0] || 0,
      minutes: sTimeArray[1] || 0
    };

    let hours = parseInt(sTimeObj.hours) + dTimeObj.hour;
    let minutes = parseInt(sTimeObj.minutes) + dTimeObj.minutes;

    const eTimeObj = {
      hours: Math.floor(hours + minutes / 60),
      minutes: minutes % 60
    };

    let startDate = new Date(date);
    startDate.setHours(0, 0, 0, 0);
    startDate.setHours(sTimeObj.hours);
    startDate.setMinutes(sTimeObj.minutes);

    let endDate = new Date(date);
    endDate.setHours(0, 0, 0, 0);
    endDate.setHours(eTimeObj.hours);
    endDate.setMinutes(eTimeObj.minutes);

    return {
      start: startDate,
      end: endDate
    }
  }

  dateMaskGS(event: any) {
    var v = event.target.value;
    if (v.match(/^\d{2}$/) !== null) {
      event.target.value = v + '/';
    } else if (v.match(/^\d{2}\/\d{2}$/) !== null) {
      event.target.value = v + '/';
    }
  }

  GetAppointmentModel(appointmentId?: number): Promise<AppointmentViewModel> {
    return new Promise((resolve, reject) => {
      this._api.getData(`/scheduler/GetAppointmentModel?id=${appointmentId}&practiceCode=${this._gv.currentUser.selectedPractice.PracticeCode}`).subscribe(r => {
        if (r.Status === 'Success') {
          resolve(r.Response);
        } else {
          reject('not found');
        }
      })
    })
  }

  setDate(date: Date) {
    this.eventForm.patchValue({
      date: {
        date: {
          year: date.getFullYear(),
          month: date.getMonth() + 1,
          day: date.getDate()
        }
      }
    })
  }

  submit() {
    if (this.eventForm.valid && this.patient.valid) {
      this._api.PostData(`/Scheduler/Save`,
        {
          notes: this.appointmentModel.Notes,
          patientAccount: this.appointmentModel.PatientAccount,
          appointmentDateTime: new Date(this.appointmentModel.AppointmentDateTime).toDateString(),
          timeFrom: this.appointmentModel.TimeFrom,
          duration: this.appointmentModel.Duration,
          reasonId: this.appointmentModel.ReasonId,
          statusId: this.appointmentModel.StatusId,
          appointmentId: this.appointmentModel.AppointmentId,
          locationCode: this.appointmentModel.LocationCode,
          providerCode: this.appointmentModel.ProviderCode,
          practiceCode: this._gv.currentUser.selectedPractice.PracticeCode
        }, (r) => {
          if (r.Status === 'Success') {
            this.bsModal.hide();
            this.setProviderAndLocation(r.Response.Provider, r.Response.Location);
            this.fetchEvents();
            swal('Scheduler', r.Status, 'success');

          } else {
            swal('Scheduler', r.Status, 'error');
          }
        })
    }
  }

  setProviderAndLocation(provider: SelectListViewModel, location: SelectListViewModel) {
    // location
    if (this.appointmentSearchViewModel.locations === null)
      this.appointmentSearchViewModel.locations = [];
    if (this.topLevelLocationSelectList.findIndex(l => l.Id === location.Id) < 0) {
      this.topLevelLocationSelectList.push(provider);
      this.appointmentSearchViewModel.locations.push(location);
    } else {
      if (this.appointmentSearchViewModel.locations.findIndex(l => l.Id === location.Id) < 0)
        this.appointmentSearchViewModel.locations.push(location)
    }
    // provider
    if (this.appointmentSearchViewModel.providers === null)
      this.appointmentSearchViewModel.providers = [];
    if (this.topLevelProviderSelectList.findIndex(l => l.Id === provider.Id) < 0) {
      this.topLevelProviderSelectList.push(provider);
      this.appointmentSearchViewModel.providers.push(provider);
    } else {
      if (this.appointmentSearchViewModel.providers.findIndex(l => l.Id === provider.Id) < 0)
        this.appointmentSearchViewModel.providers.push(provider)
    }

  }

  DeleteAppointment(appointmentId: any) {
    this._api.getData(`/Scheduler/Delete?id=${appointmentId}`).subscribe(r => {
      if (r.Status !== 'Success') {
        swal('Delete', r.Status, 'error');
      }
    })
  }

  GetFormattedDateAndTime(date, time): Date {
    let theDate = new Date(date);
    let hoursMinutes = time.split(':');
    theDate.setHours(hoursMinutes[0]);
    theDate.setMinutes(hoursMinutes[1]);
    theDate.setSeconds(0);
    theDate.setMilliseconds(0);
    return theDate;
  }

  getEventTitle({ Patient_Name, Date_Of_Birth, notes }) {
    if (!Common.isNullOrEmpty(Date_Of_Birth)) {
      return `${Patient_Name}_${this.datePipe.transform(Date_Of_Birth, 'MM/dd/yyyy')} ${!isNullOrUndefined(notes) ? notes : ""}`;
    }
    else
      return `${Patient_Name} ${!isNullOrUndefined(notes) ? notes : ""}`;
  }

  generateEventView(eventData: any): any {
    const { start, end } = this.fetchTimes(eventData.appointment_date_time, eventData.duration, eventData.time_from);

    let eObj = {
      title: this.getEventTitle(eventData),
      color: {
        primary: eventData.ReasonColor,
        secondary: eventData.ReasonColor
      },
      start: start,
      end: end,
      meta: {
        appointmentId: eventData.appointment_id,
        patientAccount: eventData.patient_account,
        notes: eventData.notes,
        appointmentDateTime: eventData.appointment_date_time,
        timeFrom: eventData.time_from,
        duration: eventData.duration,
        practiceName: eventData.prac_name,
        providerName: eventData.Provider_Name,
        reasonDescription: eventData.reason_description,
        appointmentStatus: eventData.appointment_status_description,
        patientName: eventData.Patient_Name,
        start: start,
        end: end,
        gender: eventData.gender,
        dob: eventData.Date_Of_Birth,
        location_code: eventData.location_code,
        location_name: eventData.location_name,
        location_zip: eventData.location_zip,
        location_city: eventData.location_city,
        location_state: eventData.location_state,
        location_addres: eventData.location_address,
        eligibilityColor: eventData.eligibilityColor ? eventData.eligibilityColor : 'grey'
      }
    };
    if (eventData.appointment_status_description !== 'Completed') {
      return {
        ...eObj, actions: [
          {
            label: `<i class="fa fa-fw- fa-pencil fa-event title='Edit Appointment'"></i>`,
            onClick: ({ event }: { event: CalendarEvent }): void => {
              this.handleEvent('edit', event);
            }
          },
          {
            label: `<i class="fa fa-fw fa-trash fa-event" title="Delete Appointment"></i>`,
            onClick: ({ event }: { event: CalendarEvent }): void => {
              this.handleEvent('delete', event);
            }
          }
        ],
      };
    } else {
      return { ...eObj };
    }
  }

  //#endregion

  //#region ngx-select-ex
  onTypePatient(value: any) {
    if (!Common.isNullOrEmpty(value) && value.length > 2) {
      if (!Common.isNullOrEmpty(this.subsPatientSelectList)) {
        this.subsPatientSelectList.unsubscribe();
      }
      this.subsPatientSelectList = this._api.getDataWithoutSpinner(`/Demographic/GetPatientSelectList?searchText=${value}&practiceCode=${this._gv.currentUser.selectedPractice.PracticeCode}`).subscribe(
        res => {
          if (res.Status == "Success") {
            this.patientSelectList = res.Response;
          }
        });
    }
  }

  onTypeTopLevelProvider(value: any) {
    if (!Common.isNullOrEmpty(value) && value.length > 2) {
      if (!Common.isNullOrEmpty(this.subProviderSelectList)) {
        this.subProviderSelectList.unsubscribe();
      }
      this.subProviderSelectList = this._api.getDataWithoutSpinner(`/Demographic/GetProviderSelectList?searchText=${value}&practiceCode=${this._gv.currentUser.selectedPractice.PracticeCode}`).subscribe(
        res => {
          if (res.Status == "Success") {
            this.topLevelProviderSelectList = res.Response;
          }
        });
    }
  }
  //#endregion

  //#region Multiselect-Dropdown

  // locations and Providers

  getProvidersAndLocations(fetchEvents: boolean = true) {
    if (!Common.isNullOrEmpty(this.subsLocationSelectList))
      this.subsLocationSelectList.unsubscribe();
    this.subsLocationSelectList = this._api.getDataWithoutSpinner(`/Scheduler/GetProvidersAndLocations?practiceCode=${this._gv.currentUser.selectedPractice.PracticeCode}`).subscribe(
      res => {
        if (res.Status == "Success") {
          this.topLevelLocationSelectList = res.Response.Locations;
          this.topLevelProviderSelectList = res.Response.Providers;
          if (fetchEvents)
            this.setTopLevelProviderAndLocation();
          this.providerSelectList = res.Response.Providers;
          this.locationSelectList = res.Response.Locations;
        }
      });
  }


  setTopLevelProviderAndLocation(fetchEvents: boolean = true) {
    if (this.topLevelProviderSelectList && this.topLevelProviderSelectList.length > 0)
      this.appointmentSearchViewModel.providers = [...this.topLevelProviderSelectList];
    if (this.topLevelLocationSelectList && this.topLevelLocationSelectList.length > 0)
      this.appointmentSearchViewModel.locations = [...this.topLevelLocationSelectList];
    if (this.appointmentSearchViewModel.providers.length > 0 && this.appointmentSearchViewModel.locations.length > 0) {
      if (fetchEvents)
        this.fetchEvents();
    }
  }

  onLocationsSelect() {
    if (this.appointmentSearchViewModel.locations.length > 0 && this.appointmentSearchViewModel.providers.length > 0) {
      this.fetchEvents();
    }
  }

  onLocationsDeSelect() {
    if (this.appointmentSearchViewModel.locations.length > 0 && this.appointmentSearchViewModel.providers.length > 0) {
      this.fetchEvents();
    }
  }

  onLocationsSelectAll() {
    if (this.appointmentSearchViewModel.locations.length > 0 && this.appointmentSearchViewModel.providers.length > 0) {
      this.fetchEvents();
    }
  }

  onLocationsDeSelectAll(items: any) {
    if (items.length === 0)
      this.appointmentSearchViewModel.locations = [];
    if (this.appointmentSearchViewModel.locations.length > 0 && this.appointmentSearchViewModel.providers.length > 0) {
      this.fetchEvents();
    }
  }

  // providers

  onProvidersSelect() {
    if (this.appointmentSearchViewModel.providers.length > 0 && this.appointmentSearchViewModel.locations.length > 0) {
      this.fetchEvents();
    }
  }

  onProvidersDeSelect() {
    if (this.appointmentSearchViewModel.providers.length > 0 && this.appointmentSearchViewModel.locations.length > 0) {
      this.fetchEvents();
    }
  }

  onProvidersSelectAll() {
    if (this.appointmentSearchViewModel.providers.length > 0 && this.appointmentSearchViewModel.locations.length > 0) {
      this.fetchEvents();
    }
  }

  onProvidersDeSelectAll(items: any) {
    if (items.length === 0)
      this.appointmentSearchViewModel.providers = [];
    if (this.appointmentSearchViewModel.providers.length > 0 && this.appointmentSearchViewModel.locations.length > 0) {
      this.fetchEvents();
    }
  }

  //#endregion

  // on Provider or Location Select in Add/Edit
  onSelect() {
    this.appointmentModel.Reason = null;
    this.appointmentModel.ReasonId = null;
    if (Common.isNullOrEmpty(this.appointmentModel.LocationCode)) {
      this._api.getDataWithoutSpinner(`/Demographic/GetPracticeDefaultLocation?practiceCode=${this._gv.currentUser.selectedPractice.PracticeCode}`).subscribe(response => {
        if (response && response.Status == "Success" && !Common.isNullOrEmpty(response.Response)) {
          this.setLocation(response.Response);
          if (!Common.isNullOrEmpty(this.appointmentModel.ProviderCode) && !Common.isNullOrEmpty(this.appointmentModel.LocationCode)) {
            this.getAppointmentSlot();
          }
        }
      });
    } else {
      if (!Common.isNullOrEmpty(this.appointmentModel.ProviderCode) && !Common.isNullOrEmpty(this.appointmentModel.LocationCode)) {
        this.getAppointmentSlot();

      }
    }
  }

  // on date and time change get if already has appointment
  onDateTimeChanged(event: any, timeOrDate: string) {
    if (timeOrDate === 'date') {
      this.appointmentModel.AppointmentDateTime = event.formatted;
    }
    if (timeOrDate === 'time') {
    }
    if (!Common.isNullOrEmpty(this.appointmentModel.ProviderCode) && !Common.isNullOrEmpty(this.appointmentModel.LocationCode) && !Common.isNullOrEmpty(this.appointmentModel.AppointmentDateTime) && !Common.isNullOrEmpty(this.appointmentModel.TimeFrom))
      this.getAppointmentSlot();
  }

  onDurationChange() {
    if (!Common.isNullOrEmpty(this.appointmentModel.ProviderCode)
      && !Common.isNullOrEmpty(this.appointmentModel.LocationCode)
      && !Common.isNullOrEmpty(this.appointmentModel.AppointmentDateTime)
      && !Common.isNullOrEmpty(this.appointmentModel.TimeFrom)) {
      this.getAppointmentSlot();
    }
  }

  getAppointmentSlot() {
    let d = new Date(this.appointmentModel.AppointmentDateTime);
    d.setHours(+this.appointmentModel.TimeFrom.split(':')[0]);
    d.setMinutes(+this.appointmentModel.TimeFrom.split(':')[1]);
    if (!this.isPastDateTime(d)) {
      if (!Common.isNullOrEmpty(this.subAppointmentSlotAvailability)) {
        this.subAppointmentSlotAvailability.unsubscribe();
      }
      this.subAppointmentSlotAvailability = this._api.PostData(`/Scheduler/SlotAvailability`, {
        practiceCode: this._gv.currentUser.selectedPractice.PracticeCode,
        providerCode: this.appointmentModel.ProviderCode,
        locationCode: this.appointmentModel.LocationCode,
        date: new Date(this.appointmentModel.AppointmentDateTime).toDateString(),
        timeFrom: this.appointmentModel.TimeFrom,
        duration: this.appointmentModel.Duration,
        appointmentId: this.appointmentModel.AppointmentId
      }, (res) => {
        if (res.Status == "Success") {
          this.reasonsSelectList = res.Response.Reasons;
          if (isNullOrUndefined(res.Response.Appointment)) {
            // No appointment booked on the give date and time
            this.isAlreadyAppointed = false;
            if (!isNullOrUndefined(res.Response.OfficeTiming)) {
              // Office timing exists
              this.officeTimeForDay = {
                BreakTimeFrom: !Common.isNullOrEmpty(res.Response.OfficeTiming.Break_Time_From) ? this.setTimeInCurrentDate(res.Response.OfficeTiming.Break_Time_From) : null,
                BreakTimeTo: !Common.isNullOrEmpty(res.Response.OfficeTiming.Break_Time_To) ? this.setTimeInCurrentDate(res.Response.OfficeTiming.Break_Time_To) : null,
                date: this.appointmentModel.AppointmentDateTime,
                duration: res.Response.OfficeTiming.Time_slot_size,
                timeFrom: !Common.isNullOrEmpty(res.Response.OfficeTiming.Time_From) ? this.setTimeInCurrentDate(res.Response.OfficeTiming.Time_From) : null,
                timeTo: !Common.isNullOrEmpty(res.Response.OfficeTiming.Time_To) ? this.setTimeInCurrentDate(res.Response.OfficeTiming.Time_To) : null,
                selectedTime: this.stringTimeToCurrentDate(this.appointmentModel.TimeFrom)
              };
              this.isOfficeTiming = this.isValidOfficeTiming();
              this.isBlockedTimming = res.Response.IsBlocked;
              if (this.isOfficeTiming && !this.isBlockedTimming) {
                // If user already input slot time, don't update slot time from provider office timings
                if (Common.isNullOrEmpty(this.appointmentModel.Duration)) {
                  // matched office timing
                  this.appointmentModel.Duration = this.officeTimeForDay.duration;
                }
              } else {
                // has no matched office timing
                this.errorMessageTitle = 'No Office Timing Available';
                this.errorMessage = '';
                this.errorMessage = `<p>The Provider <b>${this.providerSelectList.find(p => p.Id == this.appointmentModel.ProviderCode).Name.split('|')[1]}</b> has </p>`;
                this.errorMessage = this.errorMessage + `<p><b>Office Timing</b></p> <p>From ${this.transform(this.officeTimeForDay.timeFrom)} To ${this.transform(this.officeTimeForDay.timeTo)} <p>`;
                if (!Common.isNullOrEmpty(this.officeTimeForDay.BreakTimeFrom) && !Common.isNullOrEmpty(this.officeTimeForDay.BreakTimeTo)) {
                  this.errorMessage = this.errorMessage + `<p><b>Break Timing</b></p> <p>From ${this.transform(this.officeTimeForDay.BreakTimeFrom)} To ${this.transform(this.officeTimeForDay.BreakTimeTo)}</p>`;
                  this.errorMessage = this.errorMessage + `<p><b>Slot Size</b></p> <p> of ${this.officeTimeForDay.duration} mins</p>`;
                }
                if (!Common.isNullOrEmpty(res.Response.BlockedTimes))
                  this.errorMessage = this.errorMessage + `<p><b>Blocked Timing</b></p> <p>From ${this.transform(res.Response.BlockedTimes.No_Appointments_Start_Time)} To ${this.transform(res.Response.BlockedTimes.No_Appointment_End_Time)}</p>`;
                this.errorMessage = this.errorMessage + `<p>on ${this.datePipe.transform(this.officeTimeForDay.date, 'MM/dd/yyyy')} against Location <b>${this.locationSelectList.find(p => p.Id == this.appointmentModel.LocationCode).Name.split('|')[1]}</b>, Please choose different appointment date time.</p>`;
              }
            } else {
              // null office timing
              this.isOfficeTiming = false;
              this.errorMessageTitle = 'No Office Timing Available';
              this.errorMessage = ``;
              this.errorMessage = `Provider has no office timing on ${this.datePipe.transform(this.appointmentModel.AppointmentDateTime, 'MM/dd/yyyy')}`;
              // this.errorMessagePopover.show();
            }
          } else {
            // not null appointment
            // already appointed
            this.isAlreadyAppointed = true;
            this.appointmentForDay = {
              Appointment_Date_Time: res.Response.Appointment.Appointment_Date_Time,
              Appointment_Id: res.Response.Appointment.Appointment_Id,
              Duration: res.Response.Appointment.Duration,
              Patient_Account: res.Response.Appointment.Patient_Account,
              Patient_Name: res.Response.Appointment.Patient_Name,
              Time_From: res.Response.Appointment.Time_From
            }
            this.errorMessageTitle = 'No Appointment Slot Available';
            this.errorMessage = '';
            this.errorMessage = this.errorMessage + `<p>The Patient <b>${this.appointmentForDay.Patient_Name}</b> has already occupied the appointment slot ${this.datePipe.transform(this.appointmentForDay.Appointment_Date_Time, 'MM/dd/yyyy')} ${this.transform(this.stringTimeToCurrentDate(this.appointmentForDay.Time_From))}</p>`;
            // this.errorMessagePopover.show();
            this.isOfficeTiming = this.isValidOfficeTiming();
          }
        } else {
          this.toastService.error(res.Status, 'Error');
        }
      })
    } else {
      this.toastService.warning('Please select future date time to book an appointment.', 'Appointment Booking');
    }
  }

  transformSlotSize(duration: number) {
    if (duration < 60) {
      return `${duration} min`;
    } else if (duration == 60) {
      return `${1} hr`;
    } else {
      return duration;
    }
  }

  transform(date: Date) {
    return this.datePipe.transform(date, 'h:mm a');
  }

  setTimeInCurrentDate(dateTime: string) {
    let date = new Date();
    date.setHours(new Date(dateTime).getHours());
    date.setMinutes(new Date(dateTime).getMinutes());
    date.setMilliseconds(0);
    return date;
  }

  stringTimeToCurrentDate(time: string) {
    let dummyDate = new Date();
    let hms = [];
    hms = time.split(':');
    dummyDate.setHours(hms[0]);
    dummyDate.setMinutes(hms[1]);
    dummyDate.setMilliseconds(0);
    return dummyDate;
  }

  isValidOfficeTiming(): boolean {
    // new point to implement -------- selected time+ duration should be less than break time from
    //  has time from, time to and break time from and break time to
    let timeToPlusDuration = new Date(this.officeTimeForDay.selectedTime.getTime() + this.officeTimeForDay.duration * 60000);
    if (!Common.isNullOrEmpty(this.officeTimeForDay.timeFrom)
      && !Common.isNullOrEmpty(this.officeTimeForDay.timeTo)
      && !Common.isNullOrEmpty(this.officeTimeForDay.BreakTimeFrom)
      && !Common.isNullOrEmpty(this.officeTimeForDay.BreakTimeTo)) {
      if ((this.officeTimeForDay.selectedTime >= this.officeTimeForDay.timeFrom
        && this.officeTimeForDay.selectedTime <= this.officeTimeForDay.BreakTimeFrom
        && timeToPlusDuration >= this.officeTimeForDay.timeFrom
        && timeToPlusDuration <= this.officeTimeForDay.BreakTimeFrom)
        || (this.officeTimeForDay.selectedTime >= this.officeTimeForDay.BreakTimeTo
          && this.officeTimeForDay.selectedTime <= this.officeTimeForDay.timeTo
          && timeToPlusDuration >= this.officeTimeForDay.BreakTimeTo
          && timeToPlusDuration <= this.officeTimeForDay.timeTo
        )) {
        return true;
      } else {
        return false;
      }
    }
    // new point to implement ----- > selected time + duration should be less than timeTo

    // has time from and time to
    if (!Common.isNullOrEmpty(this.officeTimeForDay.timeFrom) && !Common.isNullOrEmpty(this.officeTimeForDay.timeTo)) {
      if ((this.officeTimeForDay.selectedTime.getTime() >= this.officeTimeForDay.timeFrom.getTime() && this.officeTimeForDay.selectedTime.getTime() < this.officeTimeForDay.timeTo.getTime()) &&
        timeToPlusDuration.getTime() < this.officeTimeForDay.timeTo.getTime()) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }

  setLocation(location: any) {
    this.appointmentModel.LocationCode = location.Id;
  }

  get color() {
    let selectedReason = this.reasonsSelectList.find(i => i.ReasonId == this.appointmentModel.ReasonId);
    if (!isNullOrUndefined(selectedReason))
      return selectedReason.ReasonColor;
    else
      return '';
  }

  //#region eligibility

  checkEligibility(appointmentId,allData) {
    console.log("scheduler Data",allData)
    this._api.getData(`/scheduler/InquiryByAppointmentId?practiceCode=${this._gv.currentUser.selectedPractice.PracticeCode}&appointmentId=${appointmentId}`).subscribe(response => {
      if (response.Status === 'success') {
        if (this.appointmentModel.event.meta.appointmentId === appointmentId) {
          this.appointmentModel.event.meta.eligibilityColor = response.Response;
        }
      } else if (response.Status === 'error') {
        this.eligibilityResponse = response.Response;
        swal("Eligibility Check", response.Response, 'error');
      }
    })
  }
  //#endregion
  onSelectPatient(patAcc: number) {
    if (patAcc) {
      this._api.getData('/scheduler/CheckDeceasedPatient?PatAccount=' + patAcc).subscribe(response => {
        if (response.Response == "Deceased") {
          this.toastService.warning('Cannot add appointment for deceased patient', 'Validation');
          this.appointmentModel.PatientAccount = null;
          this.patientSelectList = [];
        }
      });
    }
  }
}