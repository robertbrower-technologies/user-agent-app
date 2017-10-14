import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { createAction } from '../createAction';

@Injectable()
export class FirefoxActionsService {

  static FIREFOX_SET_CURRENT_VALUE = 'FIREFOX_SET_CURRENT_VALUE';

  constructor(
    private store: Store<any>) { }

  setCurrentValue(value: string) {
    this.store.dispatch(createAction(FirefoxActionsService.FIREFOX_SET_CURRENT_VALUE, {
      value: value
    }));
  }

}
