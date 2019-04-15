import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MediaItem, MediaService} from '../services/media.service';

@Component({
  selector: 'app-preview-carousel',
  templateUrl: './preview-carousel.component.html',
  styleUrls: ['./preview-carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreviewCarouselComponent implements OnInit {
  items: MediaItem[];
  @Output() streamSelected = new EventEmitter<MediaItem>();

  constructor(private media: MediaService) { }

  ngOnInit() {
    this.media.getLatest().subscribe((data) => {
      this.items = data;
      this.playItem(data[0]);
    });
  }

  playItem(item) {
    this.streamSelected.emit(item);
  }

}
