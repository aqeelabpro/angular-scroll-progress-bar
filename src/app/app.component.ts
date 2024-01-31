import { Component, NgModule, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string;
  constructor() {
    this.name = `Angular! v${VERSION.full}`;
  }
}
