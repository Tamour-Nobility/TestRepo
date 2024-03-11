export class ReportRequestModel {
       practiceCode: number;
       dateTo: string
       dateFrom: string
       locationCode?: number[];
       month: string;
       dateType: string;
       dataType: string;
       /**
        *
        */
       constructor() {
              this.locationCode = [];
       }
}