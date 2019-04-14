import {Injectable} from '@angular/core';
import faker from 'faker';
import {Observable, of} from 'rxjs';

export interface MediaMetadata {
  label: string;
}

export interface MediaItem {
  id: string;
  show: MediaMetadata;
  episode: MediaMetadata;
  imageUrl?: string;
}

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor() {
  }

  getLatest(): Observable<MediaItem[]> {
    const items = Array.from({length: 100}).map((_, i) => ({
      id: `${i}`,
      show: {
        label: faker.name.findName()
      },
      imageUrl: '../../assets/brand/brand-logo.jpg',
      episode: {
        label: faker.name.findName()
      }
    }));
    return of(items);
  }
}
