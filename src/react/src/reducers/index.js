import { combineReducers } from 'redux';

import goods from './goods';
import config from './config';
import pagination from './pagination';
import filter from './filter';
import basket from './basket';
import price from './price';

export default combineReducers({
    goods,
    config,
    pagination,
    filter,
    basket,
    price,
});
