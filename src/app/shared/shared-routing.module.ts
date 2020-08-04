import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { fuelLogRoutes } from './fuel-log-popup/fuel-log-popup-routing.module';
import { costLogRoutes } from './cost-log-popup/cost-log-popup-routing.module';


export const sharedRoutes: Routes = [
  ...costLogRoutes,
  ...fuelLogRoutes
];

@NgModule({
  imports: [RouterModule.forChild(sharedRoutes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
