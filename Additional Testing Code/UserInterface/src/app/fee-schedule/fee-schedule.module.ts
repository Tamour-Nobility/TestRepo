import { NgModule } from '@angular/core';
import { NobilityCPTFeeScheduleComponent } from './nobility-cptfee-schedule/nobility-cptfee-schedule.component';
import { ProviderCPTFeeScheduleComponent } from './provider-cptfee-schedule/provider-cptfee-schedule.component';
import { StandardCPTFeeScheduleComponent } from './standard-cptfee-schedule/standard-cptfee-schedule.component';
import { ProviderCptfeeScheduleTempComponent } from './provider-cptfee-schedule-temp/provider-cptfee-schedule-temp.component';
import { SharedModule } from '../shared/shared.module';
import { FeeScheduleMainComponent } from './fee-schedule-main.component';
import { feeScheduleRoutingModule } from './feeScheduleRouting.module';



@NgModule({
  declarations: [
    NobilityCPTFeeScheduleComponent,
    ProviderCPTFeeScheduleComponent,
    StandardCPTFeeScheduleComponent,
    ProviderCptfeeScheduleTempComponent,
    FeeScheduleMainComponent,
 
   
  ],
  imports: [
    SharedModule,
    feeScheduleRoutingModule
  ]
})
export class FeeScheduleModule { }
