import {Component, OnDestroy, OnInit} from '@angular/core';
import {ModalsService} from "../modals/service/modals.service";

@Component({
  selector: 'app-test-comp2',
  templateUrl: './test-comp2.component.html',
  styleUrls: ['./test-comp2.component.styl']
})
export class TestComp2Component implements OnInit, OnDestroy {
  private subscriber;

  constructor(private m: ModalsService) {
    this.subscriber = this.m.onAnimation$.subscribe((state) => {
      console.log(state);
    });
  }

  open() {
    this.m.open('qwe');
  }

  close() {
    this.m.close('qwe');
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }
}
