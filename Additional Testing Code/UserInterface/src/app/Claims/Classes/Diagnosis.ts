export class DiagnosisRequest {
    Description: string;
    DiagnoseCode: string;
    Version: string;
}
export class DiagnosisResponse {
    TOTAL_PAGES: number;
    Diag_Chk: boolean;
    Diag_Code: string;
    Diag_Description: string;
    ROW: number;
    Isfound: any;
}
export class ClaimDiagnosisRequest {
    claimNo: string;
    isClaimEdit: number;
    patientAccount: string;
    DOS: string;
}
export class Diagnosis {
    id: number;
    Code: string;
    Description: string;
    Deleted: boolean;
}
export class Diag {
    Diagnosis = new Diagnosis();
}
export class claimDiagnosis {
    Diagnosis = new Diagnosis;
    constructor() {
        this.Diagnosis = new Diagnosis();
    }
}