import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { PublicComponent } from './public.component';
import { HeaderModule } from '../shared/header/header.module';
import { CostLogComponent } from './cost-log/cost-log.component';
import { CalculatorComponent } from './calculator/calculator.component';


@NgModule({
  declarations: [PublicComponent, CostLogComponent, CalculatorComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    HomeModule,
    HeaderModule
  ]
})
export class PublicModule { }
