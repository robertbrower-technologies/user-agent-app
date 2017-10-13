import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { createAction } from '../createAction';
import { SharedService } from '../shared/shared.service';

@Injectable()
export class ChromeActionsService {

  static SET_CHROME_CURRENT_VALUE = 'SET_CHROME_CURRENT_VALUE';

  static SET_STATE = 'SET_STATE';
    
  constructor(
    private store: Store<any>,
    private sharedService: SharedService) { }

  setCurrentValue(value: string) {
    this.store.dispatch(createAction(ChromeActionsService.SET_CHROME_CURRENT_VALUE, {
      currentValue: value
    }));
    this.sharedService.state.chrome.chrome.currentValue = value;
  }

}
