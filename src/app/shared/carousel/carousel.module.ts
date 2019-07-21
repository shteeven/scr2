import { NgModule } from '@angular/core';
import { CarouselComponent } from './carousel.component';
import { CarouselPreviousDirective } from './carousel-previous.directive';
import { CarouselNextDirective } from './carousel-next.directive';
import { CommonModule } from '@angular/common';
import { CarouselItemDirective } from './carousel-item.directive';

const exportComponents = [CarouselComponent, CarouselPreviousDirective, CarouselNextDirective];

@NgModule({
  declarations: [...exportComponents, CarouselComponent, CarouselItemDirective],
  imports: [CommonModule],
  exports: [...exportComponents]
})
export class CarouselModule {}
