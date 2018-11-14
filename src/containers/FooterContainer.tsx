
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import { RootState } from '../reducers';

const mapStateToProps = (state: RootState) => ({
    debug: state.debug.enable
});


export default connect(mapStateToProps, null)(Footer);
