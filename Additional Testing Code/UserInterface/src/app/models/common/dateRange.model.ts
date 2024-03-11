export class DateRangeViewModel {
    BeginDate: Date;
    BeginDateStr: string;
    EndDate: Date;
    EndDateStr: string;
}
export class BatchUploadRequest {
    BatcheIds: number[];
    constructor() {
        this.BatcheIds = [];
    }
}