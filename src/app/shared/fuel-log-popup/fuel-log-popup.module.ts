import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuelLogPopupRoutingModule } from './fuel-log-popup-routing.module';
import { FuelLogPopupComponent} from './fuel-log-popup.component';
import { ReactiveFormsModule  } from '@angular/forms';


@NgModule({
  declarations: [
    FuelLogPopupComponent
  ],
  imports: [
    CommonModule,
    FuelLogPopupRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    FuelLogPopupComponent
  ]
})
export class FuelLogPopupModule { }
