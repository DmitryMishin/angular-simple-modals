import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ModalsModule} from "./modals/modals.module";
import {ModalsService} from "./modals/service/modals.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import { TestCompComponent } from './test-comp/test-comp.component';
import {TestComp2Component} from "./test-comp2/test-comp2.component";


@NgModule({
  declarations: [
    AppComponent,
    TestCompComponent,
    TestComp2Component,
  ],
  imports: [
    BrowserModule,
    ModalsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: TestCompComponent },
      { path: 'hello', component: TestComp2Component },
    ])
  ],
  providers: [ModalsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
