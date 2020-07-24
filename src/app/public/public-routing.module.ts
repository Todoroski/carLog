import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { homeRoutes } from './home/home-routing.module';
import { costLogRoutes } from './cost-log/cost-log-routing.module';
import { calculatorRoutes } from './calculator/calculator-routing.module';


export const PUBLIC_ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  ...homeRoutes,
  ...costLogRoutes,
  ...calculatorRoutes
];

@NgModule({
  imports: [RouterModule.forChild(PUBLIC_ROUTES)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
