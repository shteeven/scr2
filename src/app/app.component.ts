import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--    <app-sidenav #sideNav="sideNav" (openedChange)="sideNavOpen = $event"> -->

    <div class="view" (scroll)="onWindowScroll($event)">
      <mat-toolbar class="scr-toolbar" [ngClass]="{ scrolled: isScrolled }">
        <div class="brand"></div>
        <div class="page-nav">
          <button mat-button>Main</button>
          <button mat-button>My Stuff</button>
          <button mat-button>Suggested</button>
        </div>
      </mat-toolbar>
      <main>
        <router-outlet></router-outlet>
      </main>
    </div>
    <!--    </app-sidenav>-->
  `,
  styles: [
    `
      .view {
        height: 100vh;
        overflow-y: auto;
      }
      .scr-toolbar {
        /*background-color: transparent;*/
        position: sticky;
        top: 0;
        display: grid;
        grid-template-columns: auto 1fr;
        z-index: 99;
        transition: ease-in-out 300ms;
        background-color: rgba(79, 79, 79, 0.85);
      }

      .scrolled {
        background-color: rgba(79, 79, 79, 0.7);
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
