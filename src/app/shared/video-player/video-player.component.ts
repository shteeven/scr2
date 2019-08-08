import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-video-player',
  template: `
    <div class="video-wrapper">
      <div class="video-container">
        <iframe frameborder="0" [src]="videoStream" allowfullscreen allow="autoplay"></iframe>
      </div>
    </div>
  `,
  styles: [
    `
      .video-wrapper {
        width: 100%;
        max-width: 960px;
        margin: auto;
      }
      .video-container {
        position: relative;
        overflow: hidden;
        padding-top: 56.25%;
      }

      .video-container iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 0;
      }
    `
  ]
})
export class VideoPlayerComponent implements OnInit {
  @Input() videoId = 'x6u83op';
  videoStream;

  constructor(private sanitizer: DomSanitizer, @Optional() @Inject(MAT_DIALOG_DATA) private data) {
    if (data) {
      this.videoId = data.id;
    }
  }

  ngOnInit() {
    const url = 'https://www.dailymotion.com/embed/video/';
    this.videoStream = this.sanitizer.bypassSecurityTrustResourceUrl(url + this.videoId);
  }
}
