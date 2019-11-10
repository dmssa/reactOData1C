export const removeFromBasket = (idAndPrice)=>{
    return({
        type: 'REMOVE_FROM_BASKET',
        payload: idAndPrice
    })
}
export const addToBasket = (cardAndPrice)=>{
    console.log(cardAndPrice)
    return({
        type: 'ADD_TO_BASKET',
        payload: cardAndPrice
    })
}