import React from 'react';
import { List, Button, Menu, Popup, Image } from 'semantic-ui-react';


const CardComponent = ({ id, name, count, image, removeFromBasket,price }) => {
  return(
    <List selection divided verticalAlign="middle">
      <List.Item>
        <List.Content floated="right">
          <Button onClick={ removeFromBasket.bind(this, {id,price} ) } color="red">
            Удалить
          </Button>
        </List.Content>
        <Image avatar src={image} />
        <List.Content>{name + (count > 1 ? `(${count})` : '')}</List.Content>
      </List.Item>
    </List>
  )};

const Basket = ({totalPrice, items, count,removeFromBasket}) => {
    if(!totalPrice) return (<Menu.Item name="basket">Корзина</Menu.Item>)
    return(
        <>
            <Menu.Item name='total'>
                Итого: &nbsp; <b>{totalPrice}</b>&nbsp;руб.
            </Menu.Item>
            <Popup
                trigger={
                      <Menu.Item name="basket">
                          Корзина&nbsp;<b>{count}</b>
                      </Menu.Item>
                    }
                    content = {items.map(item =>{
                      return(
                        <CardComponent 
                          key = {item.id}
                          {...item} 
                          removeFromBasket={removeFromBasket} 
                          />
                      )}
                    )
                }
                on = "click"
                hideOnScroll
            />
        </>);
}

export default Basket;