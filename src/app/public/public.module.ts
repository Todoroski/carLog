import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { PublicComponent } from './public.component';
import { HeaderModule } from '../shared/header/header.module';
import { CostLogComponent } from './cost-log/cost-log.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FuelLogPopupModule } from '../shared/fuel-log-popup/fuel-log-popup.module';
import { CostLogModule } from './cost-log/cost-log.module';
import { CalculatorModule } from './calculator/calculator.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PublicComponent, CostLogComponent, CalculatorComponent],
  imports: [
    CommonModule,
    FormsModule,
    PublicRoutingModule,
    HomeModule,
    HeaderModule,
    FuelLogPopupModule,
    CostLogModule,
    CalculatorModule
  ]
})
export class PublicModule { }
