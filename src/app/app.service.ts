import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';

@Injectable()
export class AppService {

  constructor(private store: Store<any>) { }
  
  getAppState(key?: string): Observable<any> {
    return this.store.select(store => {
      return key ? store[key] : store;
    })
    .filter(Boolean);
  }

}
