import { Action } from '@ngrx/store';
import { AppState, DefaultAppState } from './app-state';
import { AppActionsService } from './app-actions.service';
import { ActionWithPayload } from './action-with-payload';

export function appReducer(state: AppState = DefaultAppState, action: Action): AppState {
debugger;
  switch (action.type) {
    case AppActionsService.SET_STATE:
        let actionWithPayload = action as ActionWithPayload;
        return Object.assign({}, actionWithPayload.payload);
    default:
        return state;
  }
}