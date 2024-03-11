export class ClaimSearchViewModel {
    DOSFrom: string;
    DOSTo: string;
    PatientAccount: number[];
    Provider: number[];
    icd9: boolean;
    type: string;
    status: string;
    insurance: number[];
    location: number[];
    PracticeCode: number;
    /**
     *
     */
    constructor() {
        this.status = "unprocessed";
        this.location = [];
        this.PatientAccount = [];
        this.Provider = [];
        this.insurance = [];
    }
}
export class ClaimSearchResponseViewModel {
    Claim_No: number;
    Name: number;
    dos: Date;
    pri_ins: string;
    policy_number: string;
    Provider: string;
    facility: string;
    claim_total: number;
    date_created: Date;
    cpt: string;
    Patient_Account: number;
}

export class BatchViewModel {
    batch_id: number;
    batch_name: string;
    provider_id: number;
    date: Date;
    file_generated: boolean;
    file_path: string;
    downloaded_by: string;
    downloaded_date: Date;
    practice_id: number;
    deleted: boolean;
    created_user: number;
    date_created: Date;
    modified_user: number;
    date_modified: Date;
    client_date_created: Date;
    client_date_modified: Date;
    system_ip: string;
    batch_lock: boolean;
    batch_status: string;
    date_uploaded: Date;
    uploaded_user: number;
    date_processed: Date;
    response_file_path: string;
    batch_status_detail: string;
    batch_type: string;
}

export class BatchCreateViewModel {
    BatchId: number;
    BatchName: string;
    ProviderCode: number;
    Date: Date;
    DateStr: string;
    BatchType: string;
    PracticeCode: number;
    /**
     *
     */
    constructor() {
        this.BatchType = 'P';
    }
}

export class BatchListRequestViewModel {
    PracticeCode: number;
    ProviderCode: number;
}
export class BatchListResponseViewModel {
    TotalBatch: number;
    Batches: BatchListViewModel[];
    /**
     *
     */
    constructor() {
        this.Batches = [];
    }
}
export class BatchListViewModel {
    batch_id: number;
    batch_name: string;
    claimsTotal: number;
    batch_lock: boolean;
    practice_id: number;
    provider_id: number;
    date_created: Date;
}

export class AddInBatchRequestViewModel {
    ClaimIds: number[];
    BatchId: number;
    PracticeCode: number;
    /**
     *
     */
    constructor() {
        this.ClaimIds = [];
    }
}

export class LockBatchRequestViewModel {
    BatchId: number;
    UserId: number;
}

export class BatchErrorsRequestModel {
    practiceCode: number;
    bactchId: number;
    providerCode: number;
    dateFrom: string;
    dateTo: string;
}

export class BatchFileErrors {
    Error_Id: number;
    Batch_Id: number;
    Batch_Name: string;
    Patient_Account: number
    Claim_No: number;
    DOS: Date;
    Patient_Name: string;
    Errors: string;
    provider_id: number;
    Error_Date: Date;
    ErrorsArray: string[];
    First_Name: string;
    Last_Name: string;
}

export class BatchesHistoryRequestModel {
    Practice_Code: number;
    Provider_Code: number;
    Date_From: string;
    Date_To: string;
    Date_Type: string = null;
}

export class BatchesHistoryResponseModel {
    Batch_Id: number;
    Batch_Name: string;
    File_Generated: boolean;
    File_Path: string;
    Batch_Lock: boolean;
    Batch_Status: string;
    Process_Date: Date;
    Response_File_Path: string;
    Batch_Type: string;
    Uploaded_Date: Date;
    Uploaded_User_Id: number;
    Uploaded_User_Name: string;
    Created_User_Id: number;
    Created_Date: Date;
    Created_User_Name: string;
    Modified_User_Id: number;
    Modified_Date: Date;
    Modified_User_Name: string;
    Provider_Code: number;
    Provid_FName: string;
    Provid_LName: string;
}

export class BatchDetails {
    Batch_Details_Id: number;
    Batch_id: number;
    Claim_No: number;
    DOS: Date;
    Billed_Amount: number;
}

export class CustomValue {
    ID: number;
    Column_Name: string;
    Table_Name: string;
    Operator: string;
    Custom_Values: string;
    ErrorMessage: string;
    Practice_Code: string;
    Table_Name2: string;
  }