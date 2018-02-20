import {
  AfterViewInit, Component, ElementRef, EventEmitter, Injector, Input, OnDestroy, OnInit, Renderer2,
  ViewEncapsulation
} from '@angular/core';
import {ModalsService} from '../../service/modals.service';
import {ModalModel} from '../../models/modal.model';
import {ModalEventModel} from '../../models/modal-event.model';
import {toggleModal} from '../../animations/toggle-modal.animation';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.styl'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    toggleModal()
  ]
})
export class ModalComponent implements OnInit, ModalModel, OnDestroy, AfterViewInit {
  public readonly onAnimation$: EventEmitter<ModalEventModel> = new EventEmitter();

  private outsideClickListener;

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

  public modalView = false;

  protected element;

  constructor(protected modalsService: ModalsService,
              protected renderer: Renderer2,
              element: ElementRef) {
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

  ngAfterViewInit() {
  }

  public close() {
    this.modalView = false;

    this.outsideClickListener && this.outsideClickListener();
    this.outsideClickListener = null;
  }

  public open() {
    this.modalView = true;

    setTimeout(() => {
      this.outsideClickListener = this.renderer.listen('document', 'click', (event) => {
        if (!event.target.closest('.modal-content')) {
          this.close();
        }
      });
    });
  }
}
