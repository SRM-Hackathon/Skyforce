import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlanridePage } from './planride';

@NgModule({
  declarations: [
    PlanridePage,
  ],
  imports: [
    IonicPageModule.forChild(PlanridePage),
  ],
})
export class PlanridePageModule {}
