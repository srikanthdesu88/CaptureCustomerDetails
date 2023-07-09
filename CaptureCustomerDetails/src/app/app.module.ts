import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CaptureDetailsComponent } from './parent-child-example/capture-details/capture-details.component';
import { ViewDetailsComponent } from './parent-child-example/view-details/view-details.component';
import { AgGridModule } from 'ag-grid-angular';
import { CaptureAndViewDetailsComponent } from './parent-child-example/capture-and-view-details/capture-and-view-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CaptureDetailsComponent,
    ViewDetailsComponent,
    CaptureAndViewDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
