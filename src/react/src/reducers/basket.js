const initialState = {
    items: [],
    totalPrice: 0,
    count:0,
  };
  
export default (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_BASKET':
        {
          const { card , id , price } = action.payload;
          let elemId = id || card.id;
          let items = [...state.items];
          let index = items.findIndex(elem => elem.id===elemId);
          
          if(index===-1){
            const current = {...card, price, count:1};
            items.push(current);
          }else{
            items[index].count++;
          }
          return {
            ...state,
            items,
            totalPrice: state.totalPrice + price,
            count: state.count + 1,
          };
        }
      case "REMOVE_FROM_BASKET":
        {
          const { card , id , price } = action.payload;
          let elemId = id || card.id;
          let items = [...state.items];
          let index = items.findIndex(elem => elem.id===elemId);
          
          if(index===-1) throw new Error('Ошибка состава массива покупок');
          items[index].count--;
          if(items[index].count === 0){
            items.splice(index, 1);
          } 
          return {
            ...state,
            items,
            totalPrice: state.totalPrice - price,
            count: state.count - 1,
          };
        }
      default:
        return state;
    }
};
  