import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PriceActions from '../actions/price';
import Price from '../components/Price.jsx';

const mapStateToProps = ({ price }) => {
    return (price)
};

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(PriceActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Price);