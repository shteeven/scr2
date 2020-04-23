import { Component } from '@angular/core';
import { VideoPlayerService } from '../../shared/video-player/video-player.service';
import { FormGroup } from '@angular/forms';

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
          <form
            [formGroup]="formGroup"
            class="donate"
            target="_blank"
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
          >
            <!-- Identify your business so that you can collect the payments. -->
            <input type="hidden" name="business" value="seoulcommunityradio@gmail.com" />
            <!-- Specify a Donate button. -->
            <input type="hidden" name="cmd" value="_donations" />
            <!-- Specify details about the contribution -->
            <input type="hidden" name="item_name" value="Seoul Community Radio" />
            <input type="hidden" name="item_number" value="Support community radio" />
            <input type="hidden" name="currency_code" value="USD" />
            <!-- Display the payment button. -->
            <button class="listen" mat-stroked-button type="submit" name="submit">
              <i class="fas fa-beer"></i> Buy Us a Beer
            </button>
          </form>
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
      .donate button {
        /*cursor: pointer;*/
        background: #ffc400;
        /*border: none;*/
        /*padding: 0 0.5rem;*/
        /*line-height: 1.5rem;*/
        /*font-family: DIN Alternate;*/
        /*font-size: 14px;*/
        /*font-weight: 500;*/
        /*border-radius: 2px;*/
      }
    `
  ]
})
export class HeaderComponent {
  formGroup = new FormGroup({});

  constructor(private videoPlayer: VideoPlayerService) {}

  playLive() {
    this.videoPlayer.open({
      id: 'x6u83op'
    });
  }
}
