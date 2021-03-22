import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'angular-test-project';

  @ViewChild(MatSidenav, {static: false}) sidenav: MatSidenav;
  events: string[] = [];
  opened: boolean = true;

}
