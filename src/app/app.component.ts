import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div id="app-view">
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
      main {
        padding-bottom: 5rem;
      }
    `
  ]
})
export class AppComponent {}
