import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { createAction } from '../createAction';
import { DefaultChromeState } from './chrome-state';

@Injectable()
export class ChromeActionsService {

  static SET = 'CHROME_SET';
  
  static RESET = 'CHROME_RESET';

  constructor(private store: Store<any>) { }

  set(value: string) {
    this.store.dispatch(createAction(ChromeActionsService.SET, {
      currentValue: value
    }));
  }

  reset() {
    this.store.dispatch(createAction(ChromeActionsService.RESET));
  }

}
