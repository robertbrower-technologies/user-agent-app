import { Action } from '@ngrx/store';
import { ChromeState, DefaultChromeState } from './chrome-state';
import { ChromeActionsService } from './chrome-actions.service';
import { ActionWithPayload } from '../action-with-payload';

export function chromeReducer(state: ChromeState = DefaultChromeState, action: Action): ChromeState {
    switch (action.type) {
        case ChromeActionsService.SET:
            let actionWithPayload = action as ActionWithPayload;
            return Object.assign({}, state, actionWithPayload.payload);
        case ChromeActionsService.RESET:
            return Object.assign({}, state, DefaultChromeState);
        default:
            return state;
    }
}