

// import {AppBar, Button, Toolbar, Typography}from '@material-ui/core';
import * as React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

const DivFrame= styled.div`
display: flex;
flex-direction: row;
`;

const DivImage= styled.div`
flex: 1;
`;

interface Track {
    id: string;

}

interface Props {
    tracks: Track[];
}

class LiveViewer extends React.Component<Props> {

  public render() {
    return (
        <DivFrame>
            <Grid container={true}>
                <Grid item={true} xs={12}>
                asdf
                </Grid>
            </Grid>
            <DivImage>
                left
            </DivImage>
            <DivImage>
                right
            </DivImage>

        </DivFrame>
    );
  }
}

export default LiveViewer;
