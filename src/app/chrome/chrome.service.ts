import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';

@Injectable()
export class ChromeService {

  constructor(private store: Store<any>) { }

  getCurrentValue(): Observable<string> {
    debugger;
    return this.store.select(store => {
      return store.appFeature.chrome.currentValue;
    })
    .filter(Boolean);
  }

}
