import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-sidenav #sideNav="sideNav" (openedChange)="sideNavOpen = $event">
      <router-outlet></router-outlet>
    </app-sidenav>
  `,
  styles: [``]
})
export class AppComponent {
  sideNavOpen = false;
}
