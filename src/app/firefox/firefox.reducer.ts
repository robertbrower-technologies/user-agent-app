import { Action } from '@ngrx/store';
import { FirefoxState, DefaultFirefoxState } from './firefox-state';
import { FirefoxActionsService } from './firefox-actions.service';
import { ActionWithPayload } from '../action-with-payload';

export function firefoxReducer(state: FirefoxState = DefaultFirefoxState, action: Action): FirefoxState {
  switch (action.type) {
    case FirefoxActionsService.SET:
        let actionWithPayload = action as ActionWithPayload;
        return Object.assign({}, state, actionWithPayload.payload);
    case FirefoxActionsService.RESET:
        return Object.assign({}, state, DefaultFirefoxState);
    default:
        return state;
  }
}