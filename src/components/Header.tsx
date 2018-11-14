

import {
    AppBar, 
    // Button, 
    // LinearProgress,
    IconButton,
    Toolbar, 
    Typography
} from '@material-ui/core';

import { Menu } from '@material-ui/icons';

import * as React from 'react';

import styled from 'styled-components';
import SideMenu from './SideMenu';
import Status from './Status';

const DivHeader = styled.div`
/* flex-grow: 1; */
`;

const TypoTitle= styled(Typography)`
/* flex-grow: 1; */
`;

const BtnConfig= styled(IconButton)`
margin-left: -12;
margin-right: 20;
`;

type Props = {
    onHiddenButton: () => void;
    debug: boolean;
}

type State = {
    openSideMenu: boolean;
}

class Header extends React.Component<Props, State> {

    public readonly state:State = {
        openSideMenu: false
    }

    public clickSideMenuButton = () => {
        this.setState({ ...this.setState, openSideMenu: !this.state.openSideMenu });
    }

    public onSideButtonClose= () => {
        this.setState({ ...this.setState, openSideMenu: false });
    }

    public render() {
        const { onHiddenButton, debug } = this.props;

        return (
            <DivHeader>
                <AppBar position="static">
                    <Toolbar>
                        <BtnConfig color="inherit" aria-label="Menu" onClick={this.clickSideMenuButton}>
                            <Menu />
                        </BtnConfig>

                        <TypoTitle onClick={onHiddenButton} variant={"h6"} color={"inherit"}>Vision System</TypoTitle>
                        {/* <Button color="inherit">Search</Button>
                    <Button color="inherit">Setting</Button> */}
                        {/* <Status /> */}
                    </Toolbar>
                </AppBar>
                <SideMenu showHiddenMenu={debug} isOpen={this.state.openSideMenu} onClose={this.onSideButtonClose} />
            </DivHeader>

        );
    }
}

export default Header;