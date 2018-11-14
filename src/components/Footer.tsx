
import {
    LinearProgress
} from '@material-ui/core';


import * as React from 'react';

import styled from 'styled-components';

type Props = {
    debug: boolean;
}

const DivFooter = styled.div`
width: 100%;
`;


// class Footer extends React.Component<IProps, undefined> {


//   public render() {
//     const { showHiddenMenu } = this.props;

//     return (
//         <DivFooter>
//             {
//                 (showHiddenMenu) && <LinearProgress />
//             }
//         </DivFooter>

//     );
//   }
// }
const Footer : React.SFC<Props> = (props) => {
    const { debug } = props;
    return (
        <DivFooter>
            {
                (debug) && <LinearProgress />
            }
        </DivFooter>
    )
}

export default Footer;