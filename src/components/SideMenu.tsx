

import {
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemText
}from '@material-ui/core';

import * as React from 'react';
import styled from 'styled-components';


const DivDrawer= styled.div`
width: 250;
`;


type Props = {
    isOpen: boolean;
    onClose: () => void;
    showHiddenMenu: boolean;
}

class SideMenu extends React.Component<Props> {

    public drawHiddenListItem = () => {
        if(this.props.showHiddenMenu) {
            return (
              <ListItem button={true}>
                  <ListItemText primary='Debug Mode'/>
              </ListItem>
            )
        }
        return null;
    }


  public render() {
      const {isOpen, onClose} = this.props;


    return (
        <Drawer open={isOpen} onClose={onClose}>
            <DivDrawer>
                <List>
                    <ListItem button={true}>
                        <ListItemText primary='Search' />
                    </ListItem>
                    <ListItem button={true}>
                        <ListItemText primary='Export' />
                    </ListItem>
                <Divider />
                    <ListItem button={true}>
                        <ListItemText primary='Product Manager' />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button={true}>
                        <ListItemText primary='MLP Config' />
                    </ListItem>
                    {
                        this.drawHiddenListItem()
                    }
                </List>

            </DivDrawer>
        </Drawer>
    );
  }
}

export default SideMenu;