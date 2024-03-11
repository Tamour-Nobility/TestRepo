import { SelectListViewModel } from '../../models/common/selectList.model';

class AppointmentModalData {
    event: any;
    action: string;
}
export class AppointmentViewModel extends AppointmentModalData {
    Notes: string;
    PatientAccount: number;
    AppointmentDateTime: Date;
    TimeFrom: string;
    Duration: number;
    ReasonId: number;
    StatusId: number;
    AppointmentId: number;
    LocationCode: number;
    ProviderCode: number;
    AttendingPhysician: number;
    Patient: SelectListViewModel;
    Reason: SelectListViewModel;
    Statuses: SelectListViewModel[];
    Location: SelectListViewModel;
    Provider: SelectListViewModel;
    Reasons: any[];
    Status: string;
    constructor() {
        super();
        this.Statuses = [];
        this.ProviderCode = null;
        this.LocationCode = null;
        this.StatusId = null;
        this.Reasons = [];
        this.PatientAccount = null;
    }
}

export class AppointmentsSearchViewModel {
    sDate: string;
    eDate: string;
    practiceCode: number;
    providers: SelectListViewModel[];
    locations: SelectListViewModel[];
    /**
     *
     */
    constructor() {
        this.locations = [];
        this.providers = [];
    }
}