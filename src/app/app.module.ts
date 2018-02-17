import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {ModalsModule} from "./modules/modals/modals.module";
import {ModalsService} from "./modules/modals/service/modals.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {ModalDefaultComponent} from './components/modals/modal-default/modal-default.component';
import {Page1Component} from './pages/page-1/page-1.component';
import {Page2Component} from './pages/page-2/page-2.component';


@NgModule({
  declarations: [
    AppComponent,
    ModalDefaultComponent,
    Page1Component,
    Page2Component,
  ],
  imports: [
    BrowserModule,
    ModalsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: 'page1', component: Page1Component},
      {path: 'page2', component: Page2Component},
    ])
  ],
  providers: [ModalsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
