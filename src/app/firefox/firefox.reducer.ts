import { Action } from '@ngrx/store';
import { FirefoxState, DefaultFirefoxState } from './firefox-state';
import { FirefoxActionsService } from './firefox-actions.service';
import { ActionWithPayload } from '../action-with-payload';

export function firefoxReducer(state: FirefoxState = DefaultFirefoxState, action: Action): FirefoxState {
    let actionWithPayload = action as ActionWithPayload;
    switch (action.type) {
        case FirefoxActionsService.FIREFOX_SET_CURRENT_VALUE:
            return Object.assign({}, state, actionWithPayload.payload);
        default:
            return state;
  }
}