import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { fuelLogRoutes } from './fuel-log-popup/fuel-log-popup-routing.module';


export const sharedRoutes: Routes = [
  ...fuelLogRoutes
];

@NgModule({
  imports: [RouterModule.forChild(sharedRoutes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
