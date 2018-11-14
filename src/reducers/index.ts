import { Reducer, combineReducers } from 'redux';

import { CounterState, counterReducer } from './counterReducer';
import { DebugState, debugReducer } from './debugReducer';

export interface RootState {
    counter: CounterState;
    debug: DebugState;
}

export const rootReducer = combineReducers<RootState | undefined>({
    counter: counterReducer,
    debug: debugReducer
});
