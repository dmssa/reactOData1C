export const setFilter = ( payload )=>{
    return dispatch=>{
        dispatch({
            type: 'SET_FILTER',
            payload,
        });
        dispatch({
            type: 'SET_ACTIVE_PAGE',
            payload: 0
        });
        dispatch({
            type: 'REFRESH_PAGES'
        });
        dispatch({ 
            type:'REFRESH' 
        });
    }
}
export const setSearchQuery = value => ({
    type: 'SET_QUERY',
    payload: value,
});
export const applyQuery = ()=>{
    return dispatch=>{
        dispatch({
            type: 'SET_ACTIVE_PAGE',
            payload: 0
        });
        dispatch({
            type: 'REFRESH_PAGES'
        })
        dispatch({ 
            type: 'REFRESH' 
        });
    }
}
  