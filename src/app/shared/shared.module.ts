import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderModule } from '../shared/header/header.module';
import { FuelLogPopupComponent } from './fuel-log-popup/fuel-log-popup.component';


@NgModule({
  declarations: [FuelLogPopupComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    HeaderModule
  ],
  exports: [
    HeaderModule
  ],
})
export class SharedModule { }
