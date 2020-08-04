import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderModule } from '../shared/header/header.module';
import { CostLogPopupModule } from './cost-log-popup/cost-log-popup.module';
import { FuelLogPopupModule } from './fuel-log-popup/fuel-log-popup.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FuelLogPopupModule,
    CostLogPopupModule,
    HeaderModule,
  ],
  exports: [
    HeaderModule
  ]
})
export class SharedModule { }
