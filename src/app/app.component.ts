import { Component } from '@angular/core';
import {ModalsService} from "./modals/service/modals.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private m: ModalsService) {

  }

  open() {
    this.m.open('hello');
  }

  close() {
    this.m.close('hello');
  }
}
