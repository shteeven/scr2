import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollRegistryService {
  private _listenerRegistry: { [prop: string]: BehaviorSubject<boolean> } = {};

  constructor() {}

  scrollEvent(id, isScrolled) {
    if (this._listenerRegistry[id]) {
      this._listenerRegistry[id].next(isScrolled);
    }
  }

  listenForScroll(id) {
    if (!this._listenerRegistry[id]) {
      this._listenerRegistry[id] = new BehaviorSubject(false);
    }
    return this._listenerRegistry[id];
  }

  destroySubject(id) {
    delete this._listenerRegistry[id];
  }
}
