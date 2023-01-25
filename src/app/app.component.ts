import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation],
})
export class AppComponent {
  title = 'angular-budget-app';
  isNotifOn: boolean = false;
  isUserOn: boolean = false;

  constructor(private contexts: ChildrenOutletContexts) {}

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }

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
