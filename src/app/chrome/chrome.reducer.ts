import { Action } from '@ngrx/store';
import { ChromeState, DefaultChromeState } from './chrome-state';
import { ChromeActionsService } from './chrome-actions.service';
import { ActionWithPayload } from '../action-with-payload';

export function chromeReducer(state: ChromeState = DefaultChromeState, action: Action): ChromeState {
debugger;
    let actionWithPayload = action as ActionWithPayload;
    switch (action.type) {
        case ChromeActionsService.SET_CHROME_CURRENT_VALUE:
            return Object.assign({}, state, actionWithPayload.payload);
        case ChromeActionsService.SET_STATE:           
            return Object.assign({}, state, actionWithPayload.payload.chrome.chrome);
        default:
            return state;
    }
}