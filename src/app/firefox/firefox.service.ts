import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';

@Injectable()
export class FirefoxService {

  constructor(private store: Store<any>) { }

  getCurrentValue(): Observable<string> {
    return this.store.select(appState => {
        return appState.firefox.firefox.currentValue;
    })
    .filter(Boolean);
  }

}
