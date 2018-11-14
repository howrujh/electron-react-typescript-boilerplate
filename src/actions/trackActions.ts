import { Action, ActionCreator } from 'redux';

export const TRACK_IMG_UPDATED_1= 'TRACK_IMG_UPDATED_1';
export const TRACK_IMG_UPDATED_2= 'TRACK_IMG_UPDATED_2';
export const TRACK_IMG_UPDATED_3= 'TRACK_IMG_UPDATED_3';
export const TRACK_IMG_UPDATED_4= 'TRACK_IMG_UPDATED_4';

export interface TrackImageAction1 extends Action {
    type: 'TRACK_IMG_UPDATED_1';
    img1: string;
    img2: string;
}
export const trackImageUpdate1: ActionCreator<TrackImageAction1> = () => ({
    type: TRACK_IMG_UPDATED_1,
    img1: '',
    img2: ''
});

export interface TrackImageAction2 extends Action {
    type: 'TRACK_IMG_UPDATED_2';
    img1: string;
    img2: string;
}
export const trackImageUpdate2: ActionCreator<TrackImageAction2> = () => ({
    type: TRACK_IMG_UPDATED_2,
    img1: '',
    img2: ''
});

export interface TrackImageAction3 extends Action {
    type: 'TRACK_IMG_UPDATED_3';
    img1: string;
    img2: string;
}
export const trackImageUpdate3: ActionCreator<TrackImageAction3> = () => ({
    type: TRACK_IMG_UPDATED_3,
    img1: '',
    img2: ''
});

export interface TrackImageAction4 extends Action {
    type: 'TRACK_IMG_UPDATED_4';
    img1: string;
    img2: string;
}
export const trackImageUpdate4: ActionCreator<TrackImageAction4> = () => ({
    type: TRACK_IMG_UPDATED_4,
    img1: '',
    img2: ''
});

export type TrackAction =TrackImageAction1 | TrackImageAction2 | TrackImageAction3 | TrackImageAction4;
