import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { EpisodeListComponent } from './episode-list/episode-list.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {SharedModule} from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { PreviewCarouselComponent } from './preview-carousel/preview-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EpisodeListComponent,
    PlaylistComponent,
    SidenavComponent,
    SignUpComponent,
    UsersComponent,
    HomeComponent,
    PreviewCarouselComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
