import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CostLogPopupRoutingModule } from './cost-log-popup-routing.module';
import { CostLogPopupComponent } from './cost-log-popup.component';
import { ReactiveFormsModule  } from '@angular/forms';


@NgModule({
  declarations: [
    CostLogPopupComponent
  ],
  imports: [
    CommonModule,
    CostLogPopupRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    CostLogPopupComponent
  ]
})
export class CostLogPopupModule { }
