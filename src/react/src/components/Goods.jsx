import React, {Component} from 'react';
import { Card as Item , Segment } from 'semantic-ui-react'
import Card from './Card';
import Pages from './../containers/Pagination';

const item = (cardItem, addToBasket)=>{
    //const cardItem = {...card};
    cardItem.size = 'item';
    return (
            <Card className='ui column'
                props = { cardItem }
                addToBasket = { addToBasket } 
                key = {  cardItem.Ref_Key }
                />
    )
}

class Goods extends Component {
    //constructor(props){
    //    super(props);
    //    this.refresh = this.refresh.bind(this)
    //}

    // refresh = (page)=>{
    //     console.log(this.props.filter)
    //     this.props.setPage(page)
    // }

    render = () => {
        const { isReady, list, itemsPerPage, page, config, filterBy, searchQuery } = this.props;
        
        if(!isReady){
            this.props.loadGoods({itemsPerPage, page, config, filterBy, searchQuery});
            return <></>
        }
        if(list === undefined){
            return <></>
        }
        const items = list.map(elem => ({...elem, config}))
                          .map(elem => item(elem, this.props.addToBasket));

        return(
            <>
                <Segment vertical>
                    <Item.Group className='ui centered grid'>
                        {items}
                    </Item.Group>
                </Segment>
                <Segment vertical className='ui centered grid'>
                    <Pages className='ui column' />
                </Segment>
            </>
        )
    }
}

export default Goods