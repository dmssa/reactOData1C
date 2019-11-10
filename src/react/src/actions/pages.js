import axios from 'axios';

export const setGoodsCount = (count)=>{
    return({ 
        type: 'SET_GOODS_COUNT',
        payload: count
    })
}
export const setActivePage = (numer)=>{
    return dispatch => {
        dispatch({ 
            type: 'SET_ACTIVE_PAGE',
            payload: numer
        });
        dispatch({
            type: 'REFRESH'
        });
    }
}

export const handlePaginationChange = ( e, props) => {
    const { activePage } = props;
    
    return dispatch => {
        dispatch(setActivePage(activePage));
    }
}
export const load = (config, itemsPerPage, searchQuery)=>{
    const filter = searchQuery ? `substringof('${searchQuery}',Description)` :''; 
    const url = config.getUrl(config,{
        key: 'goods',
        total: true,
        filter,
    });
    return (dispatch)=>{
        dispatch({
            type: 'GET_GOODS_COUNT',
        });
        axios.get(url)
             .then(res=>{
                 const pages = parseInt(parseInt(res.data)/itemsPerPage + 0.999999);
                 dispatch(setGoodsCount(pages))
             })
    }
}
