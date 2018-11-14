// import {Map} from 'immutable';
import { createAction, handleActions } from 'redux-actions';

enum ActionTypes {
    INC_HIDDEN_CNT = 'control/INC_HIDDEN_CNT'
}

export const actionCreators = {
    incHiddenCnt: createAction(ActionTypes.INC_HIDDEN_CNT)
}

// export type ctrlActions = {
//     INC_HIDDEN_CNT: {
//         type: typeof INC_HIDDEN_CNT
//         content: string
//     }
// }

// function createAction<A extends ActionTypes>(type:A) : TypedAction<A>

// export const incHiddenMode = createAction(ActionTypes.INC_HIDDEN_CNT);

// const initialState = Map({
//     hiddenCnt: 0,
//     showHiddenMenu: false
// });



export interface CoreState  {
    hiddenCnt: number;
    showHiddenMenu: boolean;
}
const initialState: CoreState = {
    hiddenCnt: 0,
    showHiddenMenu: false
}

export default handleActions<CoreState>({
    [ActionTypes.INC_HIDDEN_CNT]: (state: CoreState) => {
        // console.log(action.payload);
        // const cnt = action.payload.get('cnt');

        // const cnt = state.get('hiddenCnt');
        const cnt = state.hiddenCnt;
        console.log(cnt);
        if(cnt > 5) {
            // state.set('showHiddenMenu', true);
            return { ...state, showHiddenMenu: true};
        }else {
            // return state.set('hiddenCnt', cnt + 1)
            return { ...state, hiddenCnt: state.hiddenCnt+1};
        }
    }

}, initialState);