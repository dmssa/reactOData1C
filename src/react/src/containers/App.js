import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AppActions from '../actions/config';
import App from '../components/App.jsx';

const mapStateToProps = ({config:{ isReady, config }}) => {
    return ({ 
        isReady, 
        config, 
    })
};

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(AppActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);