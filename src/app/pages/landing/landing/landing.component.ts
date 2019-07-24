import { Component, OnInit } from '@angular/core';
import { MediaService } from '../../../services/media.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  videos$;

  constructor(private mediaService: MediaService) {
    this.videos$ = mediaService.getVideoList();
  }

  ngOnInit() {}
}
