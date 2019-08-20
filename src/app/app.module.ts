import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersComponent } from './pages/users/users.component';
import { EpisodeListComponent } from './components/episode-list/episode-list.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { PreviewCarouselComponent } from './components/preview-carousel/preview-carousel.component';
import { PlayerComponent } from './components/player/player.component';
import { ChatComponent } from './components/chat/chat.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './layout/header/header.component';
import { IsScrolledDirective } from './directive/scrolling/is-scrolled.directive';
import { ListenForScrollDirective } from './directive/scrolling/listen-for-scroll.directive';
import { ArticleEntryComponent } from './components/article-entry/article-entry.component';

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
    PreviewCarouselComponent,
    PlayerComponent,
    ChatComponent,
    HeaderComponent,
    IsScrolledDirective,
    ListenForScrollDirective,
    ArticleEntryComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
