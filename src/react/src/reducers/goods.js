const initialState = {
    itemsPerPage: 4,
    page: 0,
    query: '',
    isReady: false,
    list: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_GOODS":
            return {
                ...state,
                list: action.payload,
                isReady: true
            };
        case 'SET_PAGE':
            return {
                ...state,
                isReady: false,
                page: action.payload
            }
        case 'REFRESH':
            return {
                ...state,
                isReady: false,
            }
        default:
            return state;
            
    }
};