import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PageActions from '../actions/pages';
import Pages from '../components/Pagination.jsx';


const mapStateToProps = ({ pagination, config, goods:{itemsPerPage}, filter:{searchQuery} }) => {
    return ({
        ...pagination, 
        config,
        itemsPerPage,
        searchQuery,
    })
};

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(PageActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Pages);