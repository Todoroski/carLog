import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './calculator.component';


export const calculatorRoutes: Routes = [
  { path: 'calculator', component: CalculatorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(calculatorRoutes)],
  exports: [RouterModule]
})
export class CalculatorRoutingModule { }
