import {Injectable} from '@angular/core';
import * as faker from 'faker';
import {Observable, of} from 'rxjs';

export interface MediaMetadata {
  label: string;
  id: any;
  imageUrl?: string;
  airDate?: Date;
  onAir?: boolean;
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
    const numberOnAir = Math.floor(Math.random() * 5) + 1;
    let currentNumber = 0;
    let onAir = true;
    const date = new Date();
    faker.seed(123);

    const items = Array.from({length: 1000}).map((_, i) => {
      const aRandomValue = Math.random();
      if (aRandomValue > .7) {
        date.setDate(date.getDate() - 1);
      }
      const newId = `${Math.floor(aRandomValue * 2000000000)}-${i}`;

      if (onAir) {
        currentNumber++;
        if (currentNumber > numberOnAir) {
          onAir = false;
        }
      }

      let imageUrl;
      switch (Math.floor(aRandomValue  * 10)) {
        case 9:
          imageUrl = faker.image.abstract();
          break;
        case 8:
          imageUrl = faker.image.nightlife();
          break;
        case 7:
          imageUrl = faker.image.cats();
          break;
        case 6:
          imageUrl = faker.image.technics();
          break;
        case 5:
          imageUrl = faker.image.nature();
          break;
        case 4:
          imageUrl = faker.image.people();
          break;
        case 3:
          imageUrl = faker.image.city();
          break;
        case 2:
          imageUrl = faker.image.food();
          break;
        case 1:
          imageUrl = faker.image.animals();
          break;
        default:
          imageUrl = '../../assets/brand/maxresdefault.jpg';
      }

      return {
        id: `${newId}-item`,
        show: {
          label: faker.name.findName(),
          id: `${newId}-show`,
          imageUrl,
        },
        episode: {
          label: faker.name.findName(),
          id: `${newId}-episode`,
          airDate: new Date(date),
          onAir: onAir
        }
      };
    });
    return of(items);
  }
}
