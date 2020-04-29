import { Component } from '@angular/core';
import { VideoPlayerService } from '../../shared/video-player/video-player.service';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

// Stateful component

@Component({
  selector: 'app-header',
  template: `
    <mat-toolbar class="scr-toolbar">
      <div class="toolbar-items">
        <span class="branding show-gt-sm">Seoul Community Radio</span>
        <div class="scr-nav">
          <button class="listen" mat-flat-button color="warn" (click)="playLive()">
            LIVE
          </button>
          <a
            class="listen shop"
            mat-button
            href="https://seoul-community-radio.myshopify.com/collections/long-sleeves"
            target="_blank"
          >
            Shop
          </a>
          <button class="listen donate" mat-stroked-button (click)="onSubmit()">
            <i class="fas fa-beer"></i> Buy Us a Beer
          </button>
        </div>
      </div>
    </mat-toolbar>
  `,
  styles: [
    `
      .shop {
        color: white;
      }
      .branding {
        font-family: 'DIN Condensed', Roboto, 'Helvetica Neue', sans-serif;
        font-size: 2.25rem;
      }
      .listen {
        border-radius: unset;
        line-height: 1.75rem;
      }
      .scr-nav {
        text-align: end;
        display: grid;
        grid-template-columns: auto auto auto;
        grid-gap: 0.25rem;
        line-height: 1.75rem;
      }
      .toolbar-items {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        align-items: center;
        background-image: url('../../../assets/brand/brand-logo.jpg');
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
      }
      .scr-toolbar {
        padding: 0.5rem 1rem;
        background-color: black;
        border-bottom: rgba(79, 79, 79, 1) solid 1px;
      }
      .donate {
        background: #ffc400;
      }
    `
  ]
})
export class HeaderComponent {
  formGroup = new FormGroup({});

  constructor(private videoPlayer: VideoPlayerService, private http: HttpClient) {
    // this.formGroup.
  }

  playLive() {
    this.videoPlayer.open({
      id: 'x6u83op'
    });
  }

  onSubmit() {
    const form = document.createElement('form');
    form.target = '_blank';
    form.method = 'POST';
    form.action = 'https://www.paypal.com/cgi-bin/webscr';
    form.style.display = 'none';
    const data = [
      {
        name: 'business',
        value: 'seoulcommunityradio@gmail.com'
      },
      {
        name: 'cmd',
        value: '_donations'
      },
      {
        name: 'item_name',
        value: 'Seoul Community Radio'
      },
      {
        name: 'item_number',
        value: 'Support community radio'
      },
      {
        name: 'currency_code',
        value: 'USD'
      }
    ];

    data.forEach(({ name, value }) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = name;
      input.value = value;
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  }
}
