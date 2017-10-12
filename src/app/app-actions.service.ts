import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { createAction } from './createAction';

@Injectable()
export class AppActionsService {
  static SET_DEFAULT_STATE = 'SET_DEFAULT_STATE';
  constructor(private store: Store<any>) { }
  setRootState(value: any) {
    this.store.dispatch(createAction(AppActionsService.SET_DEFAULT_STATE, value));
  }
}
