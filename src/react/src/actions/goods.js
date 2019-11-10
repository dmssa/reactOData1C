import axios from 'axios';

export const setGoods = (list)=>{
    return({ 
        type: 'SET_GOODS',
        payload: list
    })
}
export const setPage = (page)=>{
    return ({
        type: 'SET_PAGE',
        payload:page
    })
}

export const addToBasket = (card,price)=>{
    return dispatch => {
        dispatch({
            type: 'ADD_TO_BASKET',
            payload:{card,price}
        });
    }
}

export const loadGoods = ({ itemsPerPage, page, config, filterBy, searchQuery })=>{
    let order = '';
    let url = '';
    let key = '';
    let sliceLast = '';
    let skip = itemsPerPage * page;
    let count = itemsPerPage;
    let filter = searchQuery ? `substringof('${searchQuery}',Description)` : '';
    
    switch(filterBy){
        case 'price_high':
            key = 'prices';
            order = "Цена desc";
            sliceLast = {};
            if(filter){
                filter = '';
                count = '';
                skip = '';
            }
        break;
        case 'price_low':
            key = 'prices';
            order = "Цена asc"
            sliceLast = {};
            if(filter){
                filter = '';
                count = '';
                skip = '';
            }
        break;
        case 'goods_type':
            key = 'goods';
            order = 'ВидНоменклатуры_Key';
            // skip = '';
            // count = '';
            //order = 'Description asc';
        break;
        default: // 'all'
            key = 'goods';
            order = 'Description asc';
        break;
    };
    url = config.getUrl(config, {
        key,
        sliceLast,
        skip,
        count,
        order,
        filter
    });
    
    return dispatch => {
        return axios.get(url)
            .then(({data}) => {
                switch(filterBy){
                    case 'all':
                        dispatch(setGoods(data.value));
                    break;
                    case 'goods_type':
                        dispatch(setGoods(data.value));
                    
                        // console.log(data.value.map(elem=>elem.Ref_Key));
                        // const url = config.getUrl(config,{
                        //     key:'goods',
                        //     order:'',
                        //     skip: itemsPerPage * page,
                        //     count: itemsPerPage,
                        // })
                        // axios.get(url)
                        //     .then(({data}) => {dispatch(setGoods(data.value))})
                    break;
                    default:
                        
                        const links = data.value.map((elem)=>{
                            const url = config.getUrl(config,{
                                key:'goods',
                                id: elem['Номенклатура_Key']
                            })
                            return axios.get(url);
                        });
                        axios.all(links)
                            .then((response) => {
                                    let data = response.map(elem=>elem.data);
//!!!!!!!!!!!!!!!
                                    if(!!searchQuery){
                                        const query = searchQuery.toLowerCase();
                                        data = data.filter(elem=>{
                                                let name = elem.Description.toLowerCase();
                                                return name.search(query) > -1
                                            })
                                            .slice(itemsPerPage * page, itemsPerPage * (page + 1))
                                    }
//!!!!!!!!!!!!!!!
                                    dispatch(setGoods(data))
                                }
                            );
                    break;
                }
            })
    }
}