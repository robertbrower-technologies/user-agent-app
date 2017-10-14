import { Action } from '@ngrx/store';
import { ChromeState, DefaultChromeState } from './chrome-state';
import { ChromeActionsService } from './chrome-actions.service';
import { ActionWithPayload } from '../action-with-payload';

export function chromeReducer(state: ChromeState = DefaultChromeState, action: Action): ChromeState {
    let actionWithPayload = action as ActionWithPayload;
    switch (action.type) {
        case ChromeActionsService.CHROME_SET_CURRENT_VALUE:
            return Object.assign({}, state, actionWithPayload.payload);
        default:
            return state;
    }
}