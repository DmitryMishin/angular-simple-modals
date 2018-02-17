import {Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[modalView]',
})
export class ModalViewDirective implements OnInit, OnDestroy {
  private element;

  constructor(element: ElementRef,
              private templateRef: TemplateRef<any>,
              private renderer: Renderer2,
              private viewContainer: ViewContainerRef) {
    this.element = element.nativeElement;
  }

  ngOnInit() {
    this.element.parentNode.remove();
    this.renderer.appendChild(document.body, this.element);
  }

  ngOnDestroy() {
    this.renderer.removeChild(document.body, this.element);
    this.viewContainer.clear();
  }

  @Input() set modalView(condition: boolean) {
    if (condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
