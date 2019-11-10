import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as FilterActions from '../actions/filter';
import Filter from '../components/Filter.jsx';

const mapStateToProps = ({filter}) => {
    return ({
        ...filter,
    })
};

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(FilterActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Filter);