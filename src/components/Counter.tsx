import * as React from 'react';
import styled from 'styled-components';

import { IncrementAction, DecrementAction, CounterAction } from '../actions/counterActions';

// require('./Counter.scss');
// const redCubeImg = require('./RedCube.jpg');

const DivCounter = styled.div`
background-color: orange;
`;


export interface Props {
    value: number;

    incrementValue: () => any;
    decrementValue: () => any;
}

const Counter: React.SFC<Props> = ({ value, incrementValue, decrementValue }) => (
    <DivCounter>
        <p>
            {/* <img src={redCubeImg} /> */}
            RED CUBE
        </p>
        <p id="counter-value">Current123 value: {value}</p>
        <p>
            <React.Fragment>
                <button id="increment" onClick={incrementValue}>
                    Increment
                </button>
                <button id="decrement" onClick={decrementValue}>
                    Decrement
                </button>
            </React.Fragment>
        </p>
    </DivCounter>
);

export default Counter;
