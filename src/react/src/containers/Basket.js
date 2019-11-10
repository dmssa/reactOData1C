import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as BasketActions from '../actions/basket';
import Basket from '../components/Basket.jsx';

const mapStateToProps = ({basket}) => {
    return ({
        ...basket,
    })
};

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(BasketActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Basket);