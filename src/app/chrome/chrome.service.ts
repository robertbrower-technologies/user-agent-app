import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';

@Injectable()
export class ChromeService {

  constructor(private store: Store<any>) { }

  getCurrentValue(): Observable<string> {
    return this.store.select(store => {
      return store.chrome.chrome.currentValue;
    })
    .filter(Boolean);
  }

  getValue(): Observable<string> {
    return this.store.select(store => {
      return store.appState.chrome && store.appState.chrome.chrome ?
        store.appState.chrome.chrome.currentValue :
        undefined;
    })
    .filter(Boolean);
  }

}
