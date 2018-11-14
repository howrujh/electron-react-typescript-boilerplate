import * as React from 'react';

import CounterContainer from '../containers/CounterContainer';
import HeaderContainer from '../containers/HeaderContainer';
import FooterContainer from '../containers/FooterContainer';
import LiveViewerContainer from '../containers/LiveViewerContainer';

import styled from 'styled-components';

const DivHeader = styled.div`
`;

const DivBody = styled.div`
`;
const DivFooter= styled.div`
position: absolute;
bottom: 0;
width: 100%;
`;

const Application = () => (
    <React.Fragment>
        <DivHeader>
            <HeaderContainer />
        </DivHeader>

        <DivBody>
            Hello World from Electron 33333333333334!
        {/* <CounterContainer /> */}
            <LiveViewerContainer />

        </DivBody>

        <DivFooter>
            <FooterContainer />
        </DivFooter>
    </React.Fragment>
);

export default Application;
