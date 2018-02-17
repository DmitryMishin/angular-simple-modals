import {
  Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, ViewEncapsulation
} from '@angular/core';
import {ModalsService} from "../../service/modals.service";
import {ModalModel} from "../../models/modal.model";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {ModalEventModel} from "../../models/modal-event.model";

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.styl'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('showHideModal', [
      state('void', style({opacity: 0})),
      state('*', style({opacity: 1})),

      transition('* => *', animate('{{ duration }}'))
    ])
  ]
})
export class ModalComponent implements OnInit, ModalModel, OnDestroy {
  public readonly onAnimation$: EventEmitter<ModalEventModel> = new EventEmitter();

  @Input() id: string;

  @Input()
  set duration(value: string) {
    if (value) {
      this.updateParams({duration: value});
    }
  }

  public handleDoneAnimation = () => {
    this.onAnimation$.emit({state: 'done', id: this.id, isShow: this.modalView});
  };

  public handleStartAnimation = () => {
    this.onAnimation$.emit({state: 'start', id: this.id, isShow: this.modalView});
  };

  public options = {
    value: '*',
    params: {
      duration: '.2s'
    }
  };

  private element;
  public modalView = false;

  constructor(element: ElementRef,
              private modalsService: ModalsService) {
    this.element = element.nativeElement;
  }

  private updateParams(params) {
    this.options = {
      ...this.options,
      params: {
        ...this.options.params,
        ...params
      }
    };
  }

  ngOnInit() {
    this.modalsService.register(this);
  }

  ngOnDestroy() {
    this.modalsService.remove(this);
  }

  public close() {
    this.modalView = false;
  }

  public open() {
    this.modalView = true;
  }
}
