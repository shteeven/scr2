import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ScrollRegistryService } from './scroll-registry.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appListenForScroll]'
})
export class ListenForScrollDirective implements OnInit, OnDestroy {
  @Input('appListenForScroll') scrollId: string;
  @Input() scrollClass = 'scrolled';
  private _isScrolled: Subscription;

  constructor(
    private scrollRegistryService: ScrollRegistryService,
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    this._isScrolled = this.scrollRegistryService.listenForScroll(this.scrollId).subscribe(value => {
      value ? this._addClass() : this._removeClass();
    });
  }

  ngOnDestroy(): void {
    this._isScrolled.unsubscribe();
  }
  private _addClass() {
    this.renderer.addClass(this.elementRef.nativeElement, this.scrollClass);
  }

  private _removeClass() {
    this.renderer.removeClass(this.elementRef.nativeElement, this.scrollClass);
  }
}
