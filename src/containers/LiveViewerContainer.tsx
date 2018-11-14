
import * as React from 'react';
import { connect } from 'react-redux';
import LiveViewer from '../components/LiveViewer';

import { RootState } from '../reducers';

const mapStateToProps = (state: RootState) => ({
    debug: state.debug.enable
});


export default connect(mapStateToProps, null)(LiveViewer);
