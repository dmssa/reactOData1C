import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as GoodsActions from '../actions/goods';
import Goods from '../components/Goods.jsx';

const mapStateToProps = ({ goods, filter:{filterBy, searchQuery}, config, pagination:{activePage} }) => {
    const page = activePage ? activePage - 1 : 0;
    return ({
        ...goods,
        filterBy,
        config,
        page,
        searchQuery
    })
};

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(GoodsActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Goods);