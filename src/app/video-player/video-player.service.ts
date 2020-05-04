import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { VideoPlayerComponent } from './video-player.component';

@Injectable({
  providedIn: 'root'
})
export class VideoPlayerService {
  constructor(private matDialog: MatDialog) {}

  open(video) {
    this.matDialog.open(VideoPlayerComponent, {
      panelClass: 'no-padding',
      width: '600px',
      data: video
    });
  }
}
