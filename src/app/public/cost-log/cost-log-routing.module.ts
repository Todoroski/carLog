import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CostLogComponent } from './cost-log.component';


export const costLogRoutes: Routes = [
  { path: 'costLog', component: CostLogComponent }
];

@NgModule({
  imports: [RouterModule.forChild(costLogRoutes)],
  exports: [RouterModule]
})
export class CostLogRoutingModule { }
