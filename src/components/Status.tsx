import * as React from 'react';

import {CheckCircle} from '@material-ui/icons';
import styled from 'styled-components';

const DivStatus = styled.div`

`;


// class Status extends React.Component {


//   public render() {

//     return (
//         <DivStatus>
//             {/* <CircularProgress size={68}/> */}
//             <CheckCircle color={"action"}/>
//             Status
//         </DivStatus>

//     );
//   }
// }

const Status: React.SFC = () => {
    return (
        <DivStatus>
            <CheckCircle color={"action"}/>
            Status
        </DivStatus>
    )
}

export default Status;