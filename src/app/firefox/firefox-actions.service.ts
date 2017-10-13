import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { createAction } from '../createAction';
import { SharedService } from '../shared/shared.service';

@Injectable()
export class FirefoxActionsService {

  static SET_FIREFOX_CURRENT_VALUE = 'SET_FIREFOX_CURRENT_VALUE';

  static SET_STATE = 'SET_STATE';
  
  constructor(
    private store: Store<any>,
    private sharedService: SharedService) { }

  setCurrentValue(value: string) {
    this.store.dispatch(createAction(FirefoxActionsService.SET_FIREFOX_CURRENT_VALUE, {
      currentValue: value
    }));
    this.sharedService.state.firefox.firefox.currentValue = value;
  }

}
