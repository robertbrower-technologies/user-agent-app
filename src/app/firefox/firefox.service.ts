import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';

@Injectable()
export class FirefoxService {

  constructor(private store: Store<any>) { }

  getCurrentValue(): Observable<string> {
    return this.store.select(store => {
      return store.firefox.firefox.currentValue;
    })
    .filter(Boolean);
  }

  getValue(): Observable<string> {
    return this.store.select(store => {
      return store.appState.firefox ? 
        store.appState.firefox.firefox.currentValue :
        undefined;
    })
    .filter(Boolean);
  }

}
