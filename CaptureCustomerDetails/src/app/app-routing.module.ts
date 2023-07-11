import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaptureAndViewDetailsComponent } from './parent-child-example1/capture-and-view-details/capture-and-view-details.component';
import { CaptureAndViewDetails2Component } from './parent-child-example2/capture-and-view-details2/capture-and-view-details2.component';

const routes: Routes = [
  { path: "Capture-Customer-Details-Example-1", component: CaptureAndViewDetailsComponent },
  { path: "Capture-Customer-Details-Example-2", component: CaptureAndViewDetails2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
