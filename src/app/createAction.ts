import {Action} from '@ngrx/store';

export function createAction(type, payload?): Action {
    let action = { type, payload };
    return action;
}