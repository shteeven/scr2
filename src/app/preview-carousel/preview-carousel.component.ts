import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MediaItem, MediaService} from '../services/media.service';

@Component({
  selector: 'app-preview-carousel',
  templateUrl: './preview-carousel.component.html',
  styleUrls: ['./preview-carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreviewCarouselComponent implements OnInit {
  items: MediaItem[];
  // items = Array.from({length: 100000}).map((_, i) => ({
  //   label: `Item #${i}`,
  //   imageUrl: '../../assets/brand/brand-logo.jpg'
  // }));

  constructor(private media: MediaService) { }

  ngOnInit() {
    this.media.getLatest().subscribe((data) => {
      this.items = data;
    });
  }

}
