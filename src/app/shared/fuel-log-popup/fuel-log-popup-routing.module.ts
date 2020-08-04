import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FuelLogPopupComponent } from './fuel-log-popup.component';


export const fuelLogRoutes: Routes = [
  { path: 'fuel-log-popup', component: FuelLogPopupComponent },
];

@NgModule({
  imports: [RouterModule.forChild(fuelLogRoutes)],
  exports: [RouterModule]
})
export class FuelLogPopupRoutingModule { }
