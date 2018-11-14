
import * as React from 'react';
import styled from 'styled-components';

// import Header from '../containers/HeaderContainer';
// import Footer from '../containers/FooterContainer';
// import LiveViewer from '../containers/LiveViewerContainer';


const DivBody= styled.div`
flex-grow: 1;
`;

const DivFooter= styled.div`
position: absolute;
bottom: 0;
width: 100%;
`;


class MainPage extends React.Component {
    public onHiddenButton = () => {
        console.log('on hidden button');
    }
    public render() {
        return (
            <React.Fragment>
                {/* <Header /> */}
                HEADER
            <DivBody>
                    {/* <LiveViewer /> */}
                    BODY
    
            </DivBody>
                <DivFooter>
                    FOOTER
                {/* <Footer /> */}
                </DivFooter>

            </React.Fragment>
        );
    }
}

export default MainPage;
