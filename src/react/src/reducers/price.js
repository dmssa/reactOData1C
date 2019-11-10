const initialState = {
    price:0,
    isReady:false,
    isLoading:false
}

export default (state = initialState, action)=>{
    switch (action.type) {
        case "GET_PRICE":
            return {
                ...state,
                isReady: false,
                isLoading: true,
            }
        case "SET_PRICE":
            return {
                ...state,
                price: action.payload,
                isReady: true,
                isLoading: false,
            }
        default:
            return state;
    }
}