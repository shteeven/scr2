import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--    <app-sidenav #sideNav="sideNav" (openedChange)="sideNavOpen = $event"> -->

    <div class="view" (scroll)="onWindowScroll($event)">
      <mat-toolbar class="scr-toolbar" [ngClass]="{ scrolled: isScrolled }">
        <button class="listen" mat-flat-button color="warn">
          <mat-icon>headset</mat-icon>
          Listen
        </button>

        <div class="brand"></div>
        <!--        <div class="page-nav">-->
        <!--          <button mat-button>Main</button>-->
        <!--          <button mat-button>My Stuff</button>-->
        <!--          <button mat-button>Suggested</button>-->
        <!--        </div>-->
      </mat-toolbar>
      <main>
        <router-outlet></router-outlet>
      </main>
    </div>
    <!--    </app-sidenav>-->
  `,
  styles: [
    `
      .listen {
        font-size: 1.1rem;
      }
      .view {
        height: 100vh;
        overflow-y: auto;
      }
      .scr-toolbar {
        /*background-color: transparent;*/
        position: sticky;
        top: 0;
        display: grid;
        /*grid-template-columns: auto 1fr;*/
        grid-template-columns: auto 1fr;
        justify-items: center;
        z-index: 99;
        transition: ease-in-out 300ms;
        background-color: rgba(79, 79, 79, 1);
      }

      .scrolled.scr-toolbar {
        background-color: rgba(79, 79, 79, 0.7);
        height: 3rem;
      }

      .scrolled .brand {
        height: 2rem;
        width: 2.25rem;
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
export class AppComponent {
  isScrolled: boolean;

  onWindowScroll({ target }) {
    this.isScrolled = target.scrollTop > 10;
  }
}
