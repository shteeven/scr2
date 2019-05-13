import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCarouselItem]'
})
export class CarouselItemDirective {
  protected _elementClass: string[] = [];

  @Input('class')
  @HostBinding('class')
  get elementClass(): string {
    return this._elementClass.join(' ');
  }
  set elementClass(val: string) {
    this._elementClass = val.split(' ');
  }

  constructor() {
    this._elementClass.push('breadcrumbs');
  }
}
