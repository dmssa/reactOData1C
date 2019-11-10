const initialState = {
    activePage: 1,
    boundaryRange: 0,
    siblingRange: 2,
    showEllipsis: false,
    showFirstAndLastNav: true,
    showPreviousAndNextNav: true,
    totalPages: 10,
    isReady: false,
    isLoading: false,
};

export default (state = initialState, action) => {

    switch (action.type) {
        case "SET_ACTIVE_PAGE":
            return {
                ...state,
                activePage: action.payload
            }
        case "GET_GOODS_COUNT":
            return {
                ...state,
                isReady: false,
                isLoading: true,
            }
        case "SET_GOODS_COUNT":
            return {
                ...state,
                totalPages: action.payload,
                isReady: true,
                isLoading: false,
            }
        case 'REFRESH_PAGES':
                return {
                    ...state,
                    isReady: false,
                    activePage: 1,
                }
        default:
            return state;
    }
};