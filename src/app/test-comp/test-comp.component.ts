import { Component, OnInit } from '@angular/core';
import {ModalsService} from "../modals/service/modals.service";

@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.styl']
})
export class TestCompComponent implements OnInit {

  duration = '1s';

  constructor(private m: ModalsService) {
  }

  open() {
    this.m.open('hello');
  }

  close() {
    this.m.close('hello');
  }

  ngOnInit() {
  }

}
