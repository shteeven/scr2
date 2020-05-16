import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { MaterialModule } from './material.module';
import { AudioPlayerComponent } from './audio-player/audio-player.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, LandingComponent, VideoPlayerComponent, AudioPlayerComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [VideoPlayerComponent, AudioPlayerComponent]
})
export class AppModule {}
