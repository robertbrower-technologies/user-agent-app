import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { createAction } from '../createAction';

@Injectable()
export class ChromeActionsService {

  static CHROME_SET_CURRENT_VALUE = 'CHROME_SET_CURRENT_VALUE';

  constructor(
    private store: Store<any>) { }

  setCurrentValue(value: string) {
    this.store.dispatch(createAction(ChromeActionsService.CHROME_SET_CURRENT_VALUE, {
      value: value
    }));
  }

}
