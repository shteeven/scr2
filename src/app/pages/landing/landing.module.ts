import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing/landing.component';
import { CarouselModule } from '../../shared/carousel/carousel.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [LandingComponent],
  imports: [CommonModule, LandingRoutingModule, CarouselModule, SharedModule]
})
export class LandingModule {}
