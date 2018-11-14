import { Action, ActionCreator } from 'redux';

export const DEBUG_MODE_ON = 'DEBUG_MODE_ON';
export const DEBUG_MODE_OFF = 'DEBUG_MODE_OFF';

export interface DebugOnAction extends Action {
    type: 'DEBUG_MODE_ON';
}
export interface DebugOffAction extends Action {
    type: 'DEBUG_MODE_OFF';
}

export const debugOn: ActionCreator<DebugOnAction> = () => ({
    type: DEBUG_MODE_ON
});

export const debugOff: ActionCreator<DebugOffAction> = () => ({
    type: DEBUG_MODE_OFF
});

export type DebugAction = DebugOnAction | DebugOffAction;
