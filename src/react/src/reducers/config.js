const initialState = {
    isReady: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "GET_CONFIG":
            return {
                ...state,
                isReady: false
            };
        case "SET_CONFIG":
            return {
                ...state,
                ...action.payload,
                isReady: true
            };
      default:
        return state;
    }
};
