import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-budget-app';
  isNotifOn: boolean = false;
  isUserOn: boolean = false;

  turnNotifOn() {
    this.isNotifOn = true;
  }

  turnNotifOff() {
    this.isNotifOn = false;
  }

  turnUserOn() {
    this.isUserOn = true;
  }

  turnUserOff() {
    this.isUserOn = false;
  }
}
