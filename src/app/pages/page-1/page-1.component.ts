import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ModalsService} from "../../modules/modals/service/modals.service";

@Component({
  selector: 'app-page-1',
  templateUrl: './page-1.component.html',
  styleUrls: ['./page-1.component.styl'],
  encapsulation: ViewEncapsulation.None,
})
export class Page1Component implements OnInit {
  private subscriber;

  constructor(private m: ModalsService) {
    this.subscriber = this.m.onAnimation$.subscribe((state) => {
      console.log(state);
    });
  }

  open() {
    this.m.open('page1-modal');
  }

  open2() {
    this.m.open('page1-modal-2');
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }
}
