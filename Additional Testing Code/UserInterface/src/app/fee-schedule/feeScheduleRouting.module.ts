
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeeScheduleMainComponent } from './fee-schedule-main.component';
import { StandardCPTFeeScheduleComponent } from './standard-cptfee-schedule/standard-cptfee-schedule.component';
import { NobilityCPTFeeScheduleComponent } from './nobility-cptfee-schedule/nobility-cptfee-schedule.component';
import { ProviderCptfeeScheduleTempComponent } from './provider-cptfee-schedule-temp/provider-cptfee-schedule-temp.component';




const routes: Routes = [
    {
        path: '',
        component: FeeScheduleMainComponent ,
        children: [
            { path: 'Standard', component: StandardCPTFeeScheduleComponent },
            { path: 'NobilityCPT', component: NobilityCPTFeeScheduleComponent },
            { path: 'ProviderCPT', component: ProviderCptfeeScheduleTempComponent },
        
       
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class feeScheduleRoutingModule { }