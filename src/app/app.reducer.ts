import { Action } from '@ngrx/store';
import { AppState, DefaultAppState } from './app-state';
import { AppActionsService } from './app-actions.service';
import { ActionWithPayload } from './action-with-payload';

export function appReducer(state: AppState = DefaultAppState, action: Action): AppState {
  switch (action.type) {
    default:
        return state;
  }
}

export function combinePersistedAndLocalState(reducer) {
  return function (state, action: Action) {
    if (action.type === AppActionsService.SET_STATE) {
      let updateAction = action as ActionWithPayload;
      return Object.assign({}, state, updateAction.payload); 
    }
    return reducer(state, action);
   }
};