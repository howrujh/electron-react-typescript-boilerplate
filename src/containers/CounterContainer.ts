import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Counter from '../components/Counter';
import { RootState } from '../reducers';
import { CounterAction, decrement, increment } from '../actions/counterActions';

import {ipcRenderer} from 'electron';


const handle = (dispatch: Dispatch<CounterAction>) => {

    const echoMsg = ipcRenderer.sendSync('echo', 'click') as string;
    console.log(`ipc:  ${echoMsg}`);

    return dispatch(decrement());
}

const mapStateToProps = (state: RootState) => ({
    value: state.counter.value
});

const mapDispatchToProps = (dispatch: Dispatch<CounterAction>) => ({
    incrementValue: () => dispatch(increment()),
    decrementValue: () => handle(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
