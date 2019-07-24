import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MediaItem, MediaService } from '../../services/media.service';

@Component({
  selector: 'app-preview-carousel',
  templateUrl: './preview-carousel.component.html',
  styleUrls: ['./preview-carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreviewCarouselComponent implements OnInit {
  items: MediaItem[];
  @Output() streamSelected = new EventEmitter<MediaItem>();

  constructor(private media: MediaService) {}

  ngOnInit() {}

  playItem(item) {
    this.streamSelected.emit(item);
  }
}
