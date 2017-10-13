import { Action } from '@ngrx/store';
import { FirefoxState, DefaultFirefoxState } from './firefox-state';
import { FirefoxActionsService } from './firefox-actions.service';
import { ActionWithPayload } from '../action-with-payload';

export function firefoxReducer(state: FirefoxState = DefaultFirefoxState, action: Action): FirefoxState {
debugger;
    let actionWithPayload = action as ActionWithPayload;
    switch (action.type) {
        case FirefoxActionsService.SET_FIREFOX_CURRENT_VALUE:
            return Object.assign({}, state, actionWithPayload.payload);
        case FirefoxActionsService.SET_STATE:
            return actionWithPayload.payload.firefox ?
                Object.assign({}, state, actionWithPayload.payload.firefox.firefox) :
                state;
        default:
            return state;
  }
}