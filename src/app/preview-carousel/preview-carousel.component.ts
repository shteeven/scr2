import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-preview-carousel',
  templateUrl: './preview-carousel.component.html',
  styleUrls: ['./preview-carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreviewCarouselComponent implements OnInit {
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);

  constructor() { }

  ngOnInit() {
  }

}
