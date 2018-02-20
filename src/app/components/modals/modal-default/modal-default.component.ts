import {Component, Input, ViewEncapsulation} from '@angular/core';
import {ModalComponent} from '../../../modules/modals/components/modal/modal.component';
import {toggleModal} from '../../../modules/modals/animations/toggle-modal.animation';

@Component({
  selector: 'modal-default',
  templateUrl: './modal-default.component.html',
  styleUrls: ['./modal-default.component.styl'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    toggleModal()
  ]
})
export class ModalDefaultComponent extends ModalComponent {
  @Input() classes = '';
}
