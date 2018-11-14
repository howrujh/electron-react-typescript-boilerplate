import * as React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import Header from '../components/Header';
import { RootState } from '../reducers';
import { DebugAction, debugOn, debugOff} from '../actions/debugActions';

import { Dispatch } from 'redux';


const mapStateToProps = (state: RootState) => ({
    debug: state.debug.enable
});

const mapDispatchToProps = (dispatch: Dispatch<DebugAction>) => ({
    onHiddenButton: () => dispatch(debugOn())
    // debugOff: () => dispatch(debugOff())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

