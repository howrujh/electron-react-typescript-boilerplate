import { Reducer } from 'redux';

import { TRACK_IMG_UPDATED_1, TRACK_IMG_UPDATED_2, TRACK_IMG_UPDATED_3, TRACK_IMG_UPDATED_4, TrackAction} from '../actions/trackActions';

export interface TrackState {
    readonly img1: boolean;
}

const defaultState: TrackState = {
    // isUpdated: false
};

export const debugReducer: Reducer<TrackState> = (
    state = defaultState,
    action: TrackAction
) => {
    switch (action.type) {
        case TRACK_IMG_UPDATED_1:
            return {
                ...state,
                isUpdated: true
            };
        case TRACK_IMG_UPDATED_2:
            return {
                ...state,
                isUpdated: true
            };
        case TRACK_IMG_UPDATED_3:
            return {
                ...state,
                isUpdated: true
            };
        case TRACK_IMG_UPDATED_4:
            return {
                ...state,
                isUpdated: true
            };
        default:
            return state;
    }
};
