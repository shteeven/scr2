import { Directive, HostListener, Input, OnDestroy } from '@angular/core';
import { ScrollRegistryService } from './scroll-registry.service';

@Directive({
  selector: '[appIsScrolled]'
})
export class IsScrolledDirective implements OnDestroy {
  @Input() id;
  @HostListener('scroll', ['$event'])
  onWindowScroll({ target }) {
    this.scrollRegistry.scrollEvent(this.id, target.scrollTop > 10);
  }

  constructor(private scrollRegistry: ScrollRegistryService) {}

  ngOnDestroy(): void {
    this.scrollRegistry.destroySubject(this.id);
  }
}
