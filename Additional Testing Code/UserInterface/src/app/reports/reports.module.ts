import { NgModule } from '@angular/core';
import { AgingSummaryPatientWiseComponent } from './aging-summary-patient-wise/aging-summary-patient-wise.component';
import { AgingSummaryReportComponent } from './aging-summary-report/aging-summary-report.component';
import { FinancialSummaryCPTWiseComponent } from './financial-summary-cptwise/financial-summary-cptwise.component';
import { FinancialSummaryProviderWiseComponent } from './financial-summary-provider-wise/financial-summary-provider-wise.component';
import { MainReportsComponent } from './main-reports.component';
import { SharedModule } from '../shared/shared.module';
import { reportRoutingModule } from './reportsRouting.module';
import { RecallVisits } from './recall-visits/recall-visits.component';
import { PracticeAnalysisComponent } from './practice-analysis/practice-analysis.component';
import { PracticeAnalysisByProviderComponent } from './practice-analysis-by-provider/practice-analysis-by-provider.component';
import { PatientBirthDays } from './patient-birth-days/patient-birth-days.component';
import { PaymentDetail } from './payment-detail/payment-detail.component'
import { CtpWisePaymentDetailsComponent } from './ctp-wise-payment-details/ctp-wise-payment-details/ctp-wise-payment-details.component';
import { AppointmentDetailComponent } from './appointment-detail/appointment-detail.component';
import { MissingAppointmentDetailComponent } from './missing-appointment-detail/missing-appointment-detail/missing-appointment-detail.component';
import { ClaimPaymentReportComponent } from './claim-payment-report/claim-payment-report/claim-payment-report.component';
import { InsuranceDetailReportComponent } from './Insurance-Detail-Report/insurance-detail-report/insurance-detail-report.component';
import { HoldclaimsComponent } from './holdclaims/holdclaims.component';

import { ClaimAssignmentreportComponent } from './claim-assignmentreport/claim-assignmentreport.component';
import { AccountAssignmentreportComponent } from './account-assignmentreport/account-assignmentreport.component';
import { ScrubberRejectionReportComponent } from './scrubber-rejection-report/scrubber-rejection-report.component';

import { UserReportComponent } from './user-report/user-report.component';
import { RollingsummaryreportComponent } from './rollingsummaryreport/rollingsummaryreport.component';
import { PatientStatementReportComponent } from './patient-statement-report/patient-statement-report.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FilterPipe } from '../pipes/filter.pipe';


@NgModule({
  declarations: [
    AgingSummaryPatientWiseComponent,
    AgingSummaryReportComponent,
    FinancialSummaryCPTWiseComponent,
    FinancialSummaryProviderWiseComponent,
    MainReportsComponent,
    RecallVisits,
    PracticeAnalysisComponent,
    PracticeAnalysisByProviderComponent,
    PatientBirthDays,
    PaymentDetail,
    CtpWisePaymentDetailsComponent,
    AppointmentDetailComponent,
    MissingAppointmentDetailComponent,
    ClaimPaymentReportComponent,
    InsuranceDetailReportComponent,
    HoldclaimsComponent,
    FilterPipe,
    ClaimAssignmentreportComponent,
    AccountAssignmentreportComponent,

    UserReportComponent,
    ScrubberRejectionReportComponent,
    RollingsummaryreportComponent,
    PatientStatementReportComponent

  ],
  imports: [
    SharedModule,
    Ng2SearchPipeModule,
    reportRoutingModule
  ]
})
export class ReportsModule { }
