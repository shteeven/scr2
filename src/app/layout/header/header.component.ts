import { Component } from '@angular/core';

// Stateful component

@Component({
  selector: 'app-header',
  template: `
    <mat-toolbar class="scr-toolbar" appListenForScroll="app-view">
      <span>Seoul Community Radio</span>
      <div class="brand"></div>
      <button class="listen" mat-flat-button color="warn">
        <mat-icon>headset</mat-icon>
        Listen
      </button>
    </mat-toolbar>
  `,
  styles: [
    `
      .listen {
        font-size: 1.1rem;
      }
      .scr-toolbar {
        position: sticky;
        top: 0;
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        justify-items: center;
        z-index: 99;
        transition: ease-in-out 150ms;
        background-color: rgba(79, 79, 79, 1);
      }

      .scrolled.scr-toolbar {
        background-color: rgba(79, 79, 79, 0.7);
        height: 3rem;
      }

      .brand {
        height: 3rem;
        width: 3.375rem;
        background-image: url('https://gftfc5lwyu-mrg.preview.forestry.io//images/scr_logo.png');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        transition: ease-in-out 300ms;
      }
    `
  ]
})
export class HeaderComponent {}
