import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { MatDialog } from '@angular/material/dialog';
import { AudioPlayerComponent } from './audio-player/audio-player.component';

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

const baseUrl = 'https://api.dailymotion.com';

export const liveStreamId = 'x6u83op';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  limit = 8;

  constructor(private http: HttpClient, private matDialog: MatDialog) {
    this.http
      .get<{ list: any[] }>(`${baseUrl}/videos?limit=1&live_onair=true&fields=id`)
      .pipe(tap(val => console.log(val)))
      .subscribe();
  }

  getLiveStatus() {
    return this.http.get<any>(`${baseUrl}/videos?limit=1&live_onair=true&ids=${liveStreamId}&fields=id`).pipe(
      tap(val => console.log(val)),
      map(({ total }) => !!total)
    );
  }

  openPlayer(video) {
    this.matDialog.open(VideoPlayerComponent, {
      panelClass: 'no-padding',
      width: '600px',
      data: video
    });
  }

  openVideoPlayer(video) {
    this.matDialog.open(VideoPlayerComponent, {
      panelClass: 'no-padding',
      width: '600px',
      data: video
    });
  }

  openAudioPlayer() {
    this.matDialog.open(AudioPlayerComponent, {
      width: '600px',
      panelClass: 'audio-frame'
    });
  }

  getVideoList() {
    return this.http
      .get<{ list: any[] }>(
        `${baseUrl}/user/scr/videos?limit=${this.limit}&fields=id,title,thumbnail_240_url,description`
      )
      .pipe(map(({ list }) => list));
  }

  getPlaylist(id) {
    return this.http
      .get<{ list: any[] }>(`${baseUrl}/playlist/${id}/videos?limit=8&fields=id,title,thumbnail_240_url,description`)
      .pipe(
        map(({ list }) => {
          console.log(list);
          return list;
        })
      );
  }

  getVideoDetails(id) {
    return this.http.get(`${baseUrl}/video/${id}`);
  }
}
