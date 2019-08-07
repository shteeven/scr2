import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MediaChatComponent } from './media-chat/media-chat.component';
import { MediaViewerComponent } from './media-viewer/media-viewer.component';
import { MediaWrapperComponent } from './media-wrapper/media-wrapper.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { MatDialogModule } from '@angular/material';

const exportModules = [CommonModule, MaterialModule, ReactiveFormsModule, MatDialogModule];
const exportComponents = [MediaChatComponent, MediaViewerComponent, MediaWrapperComponent, VideoPlayerComponent];

@NgModule({
  declarations: [...exportComponents],
  imports: [...exportModules],
  exports: [...exportModules, ...exportComponents],
  entryComponents: [VideoPlayerComponent]
})
export class SharedModule {}
