import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { createAction } from '../createAction';
import { DefaultFirefoxState } from './firefox-state';

@Injectable()
export class FirefoxActionsService {

  static SET = 'FIREFOX_SET';
  
  static RESET = 'FIREFOX_RESET';

  constructor(private store: Store<any>) { }

  set(value: string) {
    this.store.dispatch(createAction(FirefoxActionsService.SET, {
      currentValue: value
    }));
  }

  reset() {
    this.store.dispatch(createAction(FirefoxActionsService.RESET, DefaultFirefoxState));
  }

}
