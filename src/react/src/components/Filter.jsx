import React from 'react';
import { Input, Menu } from 'semantic-ui-react';
import Goods from './../containers/Goods';
import Basket from './../containers/Basket';

const Filter = ({ setFilter, filterBy, searchQuery, setSearchQuery, applyQuery })=>{
    return (
    <>
        <Menu secondary>
            <Menu.Item
                active={filterBy === 'all'}
                onClick={setFilter.bind(this, 'all')}
            >
                Все
            </Menu.Item>
            <Menu.Item
                active={filterBy === 'price_high'}
                onClick={setFilter.bind(this, 'price_high')}
            >
                Цена (дорогие)
            </Menu.Item>
            <Menu.Item
                active={filterBy === 'price_low'}
                onClick={setFilter.bind(this, 'price_low')}
            >
                Цена (дешевые)
            </Menu.Item>
            <Menu.Item
                active={filterBy === 'goods_type'}
                onClick={setFilter.bind(this, 'goods_type')}
            >
                Категория
            </Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item>
                    <Input 
                        icon={{ name: 'search', circular: true, link: true, onClick:(e)=>applyQuery(e.target.value) }}
                        onChange={e => setSearchQuery(e.target.value)}
                        value={searchQuery}
                        placeholder='Поиск...' 
                    />
                </Menu.Item>
                <Basket />
            </Menu.Menu>
        </Menu>
        <Goods/>
    </>
    )
}
export default Filter;