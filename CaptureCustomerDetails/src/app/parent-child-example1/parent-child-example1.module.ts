import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaptureDetailsComponent } from './capture-details/capture-details.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { CaptureAndViewDetailsComponent } from './capture-and-view-details/capture-and-view-details.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [CaptureDetailsComponent,
    ViewDetailsComponent,
    CaptureAndViewDetailsComponent],
  imports: [
    CommonModule,
    SharedModule
  ], exports: [CaptureAndViewDetailsComponent]
})
export class ParentChildExample1Module { }
