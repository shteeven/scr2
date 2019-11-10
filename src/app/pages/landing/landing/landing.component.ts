import { Component } from '@angular/core';
import { MediaService } from '../../../services/media.service';
import { VideoPlayerService } from '../../../shared/video-player/video-player.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  videos$ = this.mediaService.getVideoList();
  featured$ = this.mediaService.getPlaylist('x6gd0m');
  interviews$ = this.mediaService.getPlaylist('x6iutn');

  constructor(private mediaService: MediaService, private videoPlayer: VideoPlayerService) {}

  startStream(video) {
    this.videoPlayer.open(video);
  }
}
