import React from 'react';
import { Card as CardUI, Image, Item, Button,Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Price from './../containers/Price';
import GoodsType from "./GoodsType";
  
const convert1CToJS = (e)=>{
      const { size, Ref_Key, config } = e;
      const item = {
          size,
          image: 'data:image/png;base64, ' + e.Изображение_Base64Data,
          name : e.Description,
          price: { id: Ref_Key, config },
          id: Ref_Key,
          gType: { id: e.ВидНоменклатуры_Key, config },
          description: e.Описание,
      };
      return item;
  }
const Card = (data) => {
    let {props, addToBasket} = data;
    let propsByLink = data.location && data.location.card;
      
    props = props && convert1CToJS(props);
    let card = {...props, ...propsByLink};
    
    if(addToBasket){
      addToBasket = addToBasket.bind(this, card);
    }else{
      addToBasket = addToBasket || data.location.card.addToBasket;
    }
    
    
    
    
    const {image,name,price,gType,description,size} = card;
    
    

    if(size === 'item'){
        const newTo = { 
          pathname: `/profile/${name}`, 
          card: {...card, addToBasket, size:'list'}, 
        };    

        return(
          <CardUI style={{width:'250px'}}>
              <Image src={ image } wrapped ui={false}/>
            <CardUI.Content>
              <Link to={ newTo } params={{  name:name }}>
                <CardUI.Header>
                  { name }
                </CardUI.Header>
              </Link>
              <CardUI.Meta>
                <GoodsType {...gType}/> 
              </CardUI.Meta>
              <CardUI.Description>
                { description }
              </CardUI.Description>
            </CardUI.Content>
            <CardUI.Content extra>
              <Price {...price} addToBasket={addToBasket}/>
            </CardUI.Content>
          </CardUI>
         );
    }
    
    return (
      <>
        <Segment vertical>
          <Item.Group>
            <Item 
                childKey = {0}
                image = { image }
                header = { name }
                meta = { <GoodsType {...gType}/> }
                description = { description }
                extra = { <Price {...price} addToBasket={addToBasket}/> }
            /> 
          </Item.Group>
        </Segment>
        <Segment vertical textAlign='center'>
          <Link to={{pathname:'/'}}>
            <Button>
              Назад
            </Button>
          </Link>
        </Segment>
      </>
      )
}
export default Card
