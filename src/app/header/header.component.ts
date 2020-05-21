import { Component } from '@angular/core';
import { MediaService } from '../media.service';

const FEATURE_VIDEO_STREAM_ID = 'x6u83op';

// Stateful component
@Component({
  selector: 'app-header',
  template: `
    <mat-toolbar class="scr-toolbar">
      <div class="toolbar-items">
        <!--        <span class="branding show-gt-sm">Seoul Community Radio</span>-->
        <div class="scr-nav">
          <button
            *ngIf="isLive$ | async; else listenBtn"
            class="listen"
            mat-flat-button
            color="warn"
            (click)="playLive()"
          >
            LIVE
          </button>
          <ng-template #listenBtn>
            <button class="listen" mat-flat-button color="warn" (click)="playAudioLive()">
              Listen
            </button>
          </ng-template>
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
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isLive$ = this.mediaService.getLiveStatus();
  constructor(private mediaService: MediaService) {}

  playLive() {
    this.mediaService.openPlayer({
      id: FEATURE_VIDEO_STREAM_ID
    });
  }

  playAudioLive() {
    this.mediaService.openAudioPlayer();
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
