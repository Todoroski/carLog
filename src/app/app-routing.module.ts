import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public/public.component';
import { PUBLIC_ROUTES } from './public/public-routing.module';
import { HomeComponent } from './public/home/home.component';


const routes: Routes = [
  { path: '', component: PublicComponent, children: PUBLIC_ROUTES },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
