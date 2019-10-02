import { Component } from '@angular/core';
import { VideoPlayerService } from '../../shared/video-player/video-player.service';

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
        </div>
      </div>
    </mat-toolbar>
    <!--    <mat-toolbar class="control-toolbar">-->
    <!--      <span>controls</span>-->
    <!--      <mat-form-field class="search-field">-->
    <!--        <input type="text" matInput />-->
    <!--        <mat-icon matSuffix>search</mat-icon>-->
    <!--      </mat-form-field>-->
    <!--    </mat-toolbar>-->
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
        padding: 0;
        border-radius: unset;
        line-height: 1.5rem;
      }
      .scr-nav {
        text-align: end;
        display: grid;
        grid-template-columns: auto auto;
        grid-gap: 0.25rem;
      }
      .toolbar-items {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        align-items: center;
        background-image: url(https://gftfc5lwyu-mrg.preview.forestry.io//images/scr_logo.png);
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
      }
      .scr-toolbar {
        padding: 0.5rem 1rem;
        background-color: black;
        border-bottom: rgba(79, 79, 79, 1) solid 1px;
      }
      .action-row {
        display: flex;
        justify-content: space-between;
      }
      .search-field {
        font-size: 0.75rem;
        margin-bottom: -0.5rem;
      }
      .control-toolbar {
        display: flex;
        justify-content: space-between;
        height: 3rem;
        background-color: black;
      }
    `
  ]
})
export class HeaderComponent {
  constructor(private videoPlayer: VideoPlayerService) {}

  playLive() {
    this.videoPlayer.open({
      id: 'x6u83op'
    });
  }
}
