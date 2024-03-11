
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainReportsComponent } from './main-reports.component';
import { AgingSummaryReportComponent } from './aging-summary-report/aging-summary-report.component';
import { AgingSummaryPatientWiseComponent } from './aging-summary-patient-wise/aging-summary-patient-wise.component';
import { FinancialSummaryProviderWiseComponent } from './financial-summary-provider-wise/financial-summary-provider-wise.component';
import { FinancialSummaryCPTWiseComponent } from './financial-summary-cptwise/financial-summary-cptwise.component';
import { RecallVisits } from './recall-visits/recall-visits.component';
import { PracticeAnalysisComponent } from './practice-analysis/practice-analysis.component';
import { PracticeAnalysisByProviderComponent } from './practice-analysis-by-provider/practice-analysis-by-provider.component';
import { PatientBirthDays } from './patient-birth-days/patient-birth-days.component';
import { PaymentDetail } from './payment-detail/payment-detail.component';
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

const routes: Routes = [
    {
        path: '',
        component: MainReportsComponent,
        children: [
            {
                path: 'AgingSummary',
                component: AgingSummaryReportComponent
            },
            {
                path: 'AgingSummaryPat',
                component: AgingSummaryPatientWiseComponent
            },
            {
                path: 'FinancialSummaryProvider',
                component: FinancialSummaryProviderWiseComponent
            },
            {
                path: 'FinancialSummaryCPT',
                component: FinancialSummaryCPTWiseComponent
            },
            {
                path: 'RecallVisits',
                component: RecallVisits
            },
            {
                path: 'practice-analysis-by-facility',
                component: PracticeAnalysisComponent
            },
            {
                path: 'practice-analysis-by-provider',
                component: PracticeAnalysisByProviderComponent
            },
            {
                path: 'patient-birth-days',
                component: PatientBirthDays
            },
            {
                path: 'payment-detail',
                component: PaymentDetail
            },
            {
                path: 'ctp-wise-payment-details',
                component: CtpWisePaymentDetailsComponent
            },
            {
                path: 'appointment-detail',
                component: AppointmentDetailComponent
            },
            {
                path: 'missing-appointment-detail',
                component: MissingAppointmentDetailComponent
            },
            {
                path: 'claim-payment-report',
                component: ClaimPaymentReportComponent
            },
            {
                path: 'insurance-detail-report',
                component: InsuranceDetailReportComponent
            }
            ,
            {
                path: 'hold-claims-report',
                component: HoldclaimsComponent

            },
            {
                path : 'claim-assignmentreport',
                component : ClaimAssignmentreportComponent
            }
    
             ,
             {
                    path : 'acount-assignmentreport',
                    component : AccountAssignmentreportComponent
             }

            
            ,
            {
                path: 'user-report',
                component: UserReportComponent
            }
            ,
            {
                path: 'rollingsummary',
                component: RollingsummaryreportComponent
            },
            {
                path:'scrubber-rejection-report',
                component:ScrubberRejectionReportComponent
            }
            ,
            {
                path : 'patient-statement-report',
                component : PatientStatementReportComponent
            }

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class reportRoutingModule { }