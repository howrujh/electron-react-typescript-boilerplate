import { Reducer } from 'redux';

import { DEBUG_MODE_OFF, DEBUG_MODE_ON, DebugAction } from '../actions/debugActions';

export interface DebugState {
    readonly enable: boolean;
}

const defaultState: DebugState = {
    enable: false
};

export const debugReducer: Reducer<DebugState> = (
    state = defaultState,
    action: DebugAction
) => {
    switch (action.type) {
        case DEBUG_MODE_ON:
            return {
                ...state,
                enable: true
            };
        case DEBUG_MODE_OFF:
            return {
                ...state,
                value: false
            };
        default:
            return state;
    }
};
