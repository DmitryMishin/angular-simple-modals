import {Component, ElementRef, Input, ViewEncapsulation} from '@angular/core';
import {ModalComponent} from "../../../modules/modals/components/modal/modal.component";
import {ModalsService} from "../../../modules/modals/service/modals.service";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'modal-default',
  templateUrl: './modal-default.component.html',
  styleUrls: ['./modal-default.component.styl'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('showHideModal', [
      state('void', style({opacity: 0})),
      state('*', style({opacity: 1})),

      transition('* => *', animate('{{ duration }}'))
    ])
  ]
})
export class ModalDefaultComponent extends ModalComponent {
  @Input() classes = '';

  constructor(modalsService: ModalsService, element: ElementRef) {
    super(modalsService, element);
  }
}
