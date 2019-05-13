import {NgModule} from '@angular/core';
import {CarouselComponent} from './carousel.component';
import {CarouselPreviousDirective} from './carousel-previous.directive';
import {CarouselNextDirective} from './carousel-next.directive';

const exportComponents = [
  CarouselComponent,
  CarouselPreviousDirective,
  CarouselNextDirective
];

@NgModule({
  declarations: [...exportComponents, CarouselComponent],
  imports: [],
  exports: [
    ...exportComponents
  ]
})
export class CarouselModule {
}
