import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div id="app-view" appIsScrolled>
      <app-header></app-header>
      <main>
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [
    `
      #app-view {
        height: 100vh;
        overflow-y: auto;
      }
    `
  ]
})
export class AppComponent {}
