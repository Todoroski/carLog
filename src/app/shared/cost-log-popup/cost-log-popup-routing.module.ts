import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CostLogPopupComponent } from './cost-log-popup.component';


export const costLogRoutes: Routes = [
  { path: 'fuel-log-popup', component: CostLogPopupComponent },
];

@NgModule({
  imports: [RouterModule.forChild(costLogRoutes)],
  exports: [RouterModule]
})
export class CostLogPopupRoutingModule { }
