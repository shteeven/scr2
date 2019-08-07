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

  constructor(private mediaService: MediaService, private videoPlayer: VideoPlayerService) {
    this.videos$ = mediaService.getVideoList();
  }

  ngOnInit() {}

  startStream(video) {
    console.log(video);
    this.videoPlayer.open(video);
  }
}
