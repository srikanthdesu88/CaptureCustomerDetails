import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaptureDetailsComponent } from './capture-details/capture-details.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { CaptureAndViewDetails2Component } from './capture-and-view-details2/capture-and-view-details2.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CaptureDetailsComponent,
    ViewDetailsComponent,
    CaptureAndViewDetails2Component
  ],
  imports: [
    CommonModule,
    SharedModule
  ], exports: [CaptureAndViewDetails2Component]
})
export class ParentChildExample2Module { }
