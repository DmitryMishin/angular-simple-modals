import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalComponent} from './components/modal/modal.component';
import {ModalViewDirective} from './directives/modal-view.directive';
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
  ],
  declarations: [
    ModalComponent,
    ModalViewDirective,
  ],
  exports: [
    ModalComponent,
  ]
})
export class ModalsModule {
}
