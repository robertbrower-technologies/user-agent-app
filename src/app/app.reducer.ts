import { Action } from '@ngrx/store';
import { ActionReducerMap } from '@ngrx/store';
import { AppState, DefaultAppState } from './app-state';
import { AppActionsService } from './app-actions.service';
import { ActionWithPayload } from './action-with-payload';

export function appReducer(state: AppState = DefaultAppState, action: Action): AppState {
debugger;
  let actionWithPayload = action as ActionWithPayload;
  switch (action.type) {
    case AppActionsService.SET_STATE:
    return actionWithPayload.payload.firefox ?
        Object.assign({}, state, actionWithPayload.payload) :
        state;
    default:
        return state;
  }
}