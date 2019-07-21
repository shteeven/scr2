import { AfterContentInit, Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-sidenav',
  exportAs: 'sideNav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  isAdmin = false;
  @ViewChild('drawer', { static: true }) drawer;
  @Output() openedChange = new EventEmitter<boolean>();

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  constructor(private breakpointObserver: BreakpointObserver) {}

  toggle() {
    this.drawer.toggle();
  }

  opened($event) {
    this.openedChange.emit($event);
  }
}
