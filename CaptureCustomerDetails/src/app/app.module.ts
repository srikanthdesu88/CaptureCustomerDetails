import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParentChildExample1Module } from './parent-child-example1/parent-child-example1.module';
import { ParentChildExample2Module } from './parent-child-example2/parent-child-example2.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,       
    ParentChildExample1Module,
    ParentChildExample2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
