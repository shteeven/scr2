import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div id="app-view">
      <app-header></app-header>
      <main>
        <router-outlet></router-outlet>
      </main>
      <div class="divider"></div>
      <footer class="mat-typography">
        <div class="grid-container social-container">
          Follow us on:
          <div class="grid-content">
            <a
              *ngFor="let link of socialLinks"
              class="links"
              mat-icon-button
              [href]="link.url"
              [matTooltip]="link.label"
              target="_blank"
            >
              <span class="mdi" [ngClass]="link.icon"></span>
            </a>
          </div>
        </div>
      </footer>
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
      footer {
        color: white;
        font-size: 1.5rem;
        display: grid;
        padding-left: 1rem;
        padding-right: 1rem;
      }
      footer a {
        font-size: 2.5rem;
      }
      .social-container {
        grid-template-columns: auto 1fr;
        align-items: center;
        justify-items: start;
      }
      /*.links {*/
      /*  color: white;*/
      /*}*/
    `
  ]
})
export class AppComponent {
  socialLinks = [
    {
      url: 'https://www.facebook.com/seoulcommunityradio/',
      icon: 'mdi-facebook-box',
      label: 'Facebook'
    },
    {
      url: 'https://twitter.com/radio_scr?lang=en',
      icon: 'mdi-twitter-box',
      label: 'Twitter'
    },
    {
      url: 'https://www.instagram.com/scr_radio/?hl=en',
      icon: 'mdi-instagram',
      label: 'Instagram'
    },
    {
      url: 'https://www.youtube.com/channel/UCUjB4nj0j-pYBaYI0sXekfw',
      icon: 'mdi-youtube',
      label: 'Youtube'
    },
    {
      url: 'https://soundcloud.com/seoulcommunityradio',
      icon: 'mdi-soundcloud',
      label: 'Soundcloud'
    },
    {
      url: 'https://www.mixcloud.com/SCR_Radio/stream/',
      icon: 'mdi-mixcloud',
      label: 'Mixcloud'
    }
  ];
}
