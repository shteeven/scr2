import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-audio-player',
  template: `
    <iframe
      class="audio-frame"
      src="http://188.166.198.223/public/seoulcommunityradio/embed"
      frameborder="0"
      allowtransparency="true"
    ></iframe>
  `,
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent {}
