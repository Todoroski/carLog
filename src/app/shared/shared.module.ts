import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderModule } from '../shared/header/header.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    HeaderModule
  ],
  exports: [
    HeaderModule
  ],
})
export class SharedModule { }
