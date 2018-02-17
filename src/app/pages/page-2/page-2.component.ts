import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ModalsService} from "../../modals/service/modals.service";

@Component({
  selector: 'app-page-2',
  templateUrl: './page-2.component.html',
  styleUrls: ['./page-2.component.styl'],
  encapsulation: ViewEncapsulation.None,
})
export class Page2Component implements OnInit {
  private subscriber;

  constructor(private m: ModalsService) {
    this.subscriber = this.m.onAnimation$.subscribe((state) => {
      console.log(state);
    });
  }

  open() {
    this.m.open('page2-modal');
  }

  close() {
    this.m.close('page2-modal');
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }
}
