import {Component, Input, OnInit} from '@angular/core';
import {MediaItem} from '../services/media.service';

@Component({
  selector: 'app-player',
  template: `
    <div fxLayout fxLayoutAlign="center">
      <div class="media-player-wrapper" fxFlex >
        <div class="media-player" >
          Now playing: {{selectedStream.episode.label}} by {{selectedStream.show.label}}
        </div>
      </div>
    </div>
  `,
  styles: [
    `      
      .media-player-wrapper {
        max-width: 1250px;
        min-height: 250px;
        max-height: 703px;
        overflow: hidden;
      }
      .media-player {
        margin: 0 auto;

        width: 100%;
        padding-bottom: 56.25%;
        /*background: gold; !** <-- For the demo **!*/
        background-image: url('../../assets/brand/unnamed.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      }
    `
  ]
})
export class PlayerComponent implements OnInit {
  @Input() selectedStream: MediaItem;

  constructor() { }

  ngOnInit() {
  }

}
