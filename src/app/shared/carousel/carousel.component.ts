import {Component, Input, OnChanges, SimpleChanges, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styles: []
})
export class CarouselComponent {

  @Input() items: Array<any> = [];
  @Input() width = 500;
  childIndex = 0;
  amount = 0;
  startPress = 0;
  lastX = 0;

  onMousedown(e: MouseEvent) {
    if (e.button === 1) {
      this.startPress = e.clientX;
      this.lastX = this.amount;
    }
  }

  onTouchdown(e: TouchEvent) {
    if (navigator.userAgent.indexOf('Android') >= 0) {
      e.preventDefault();
    }
    this.startPress = e.targetTouches[0].clientX;
    this.lastX = this.amount;
  }

  onMousemove(e: MouseEvent, maxWidth: number) {
    if (e.button === 1) {
      const amount = this.lastX - (this.startPress - e.clientX);
      if (amount > 0 || amount < -(maxWidth - this.width)) {
        return;
      }
      this.amount = amount;
    }
  }

  onTouchmove(e: TouchEvent, maxWidth: number) {
    if (navigator.userAgent.indexOf('Android') >= 0) {
      e.preventDefault();
    }
    const amount = this.lastX - (this.startPress - e.targetTouches[0].clientX);
    if (amount > 0 || amount < -(maxWidth - this.width)) {
      return;
    }
    this.amount = amount;
  }

  onMouseup(e: MouseEvent, elem: any) {
    if (e.button === 1) {
      this.startPress = 0;
      this.snap(elem);
    }
  }

  onTouchup(e: TouchEvent, elem: any) {
    if (navigator.userAgent.indexOf('Android') >= 0) {
      e.preventDefault();
    }
    this.startPress = 0;
    this.snap(elem);
  }

  snap(elem: any) {
    let counter = 0;
    let lastVal = 0;
    for (let i = 0; i < this.items.length; i++) {
      const el = elem.children[i];
      const style = el.currentStyle || window.getComputedStyle(el);
      counter += el.offsetWidth + (parseFloat(style.marginLeft) + parseFloat(style.marginRight));
      if (this.amount <= lastVal && this.amount >= -counter) {
        this.amount = -lastVal;
        this.childIndex = i;
        return;
      }
      lastVal = counter;
    }
    return counter;
  }

  scroll(forward: boolean, elem: any) {
    this.childIndex += forward ? 1 : -1;
    this.amount = -(this.calcScroll(elem));
  }

  calcScroll(elem: any) {
    let counter = 0;
    for (let i = this.childIndex - 1; i >= 0; i--) {
      const el = elem.children[i];
      const style = el.currentStyle || window.getComputedStyle(el);
      counter += el.offsetWidth + (parseFloat(style.marginLeft) + parseFloat(style.marginRight));
    }
    return counter;
  }
}
