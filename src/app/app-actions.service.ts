import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { createAction } from './createAction';

@Injectable()
export class AppActionsService {
  static SET_STATE = 'SET_STATE';
  constructor(private store: Store<any>) { }
  setState(state: any) {
    this.store.dispatch(createAction(AppActionsService.SET_STATE, state));
  }
}
