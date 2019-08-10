import { Component, OnInit } from '@angular/core';
import { MediaService } from '../../../services/media.service';
import { VideoPlayerService } from '../../../shared/video-player/video-player.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  videos$;
  featured$;
  limit;

  constructor(private mediaService: MediaService, private videoPlayer: VideoPlayerService) {
    this.videos$ = mediaService.getVideoList();
    this.featured$ = mediaService.getPlaylist();
  }

  ngOnInit() {}

  startStream(video) {
    this.videoPlayer.open(video);
  }
}
