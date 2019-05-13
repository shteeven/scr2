import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {MediaChatComponent} from './media-chat/media-chat.component';
import {MediaViewerComponent} from './media-viewer/media-viewer.component';
import {MediaWrapperComponent} from './media-wrapper/media-wrapper.component';

const exportModules = [
  CommonModule,
  MaterialModule,
  ReactiveFormsModule
];
const exportComponents = [
  MediaChatComponent,
  MediaViewerComponent,
  MediaWrapperComponent
];

@NgModule({
  declarations: [...exportComponents],
  imports: [
    ...exportModules
  ],
  exports: [
    ...exportModules,
    ...exportComponents
  ]
})
export class SharedModule {
}
