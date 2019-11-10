import React, { Component } from 'react';
import { Icon, Button } from 'semantic-ui-react';
import axios from 'axios';



class Price extends Component {
    state = {
        id: this.props.id,
        isReady: false,
        isLoading: false,
        addToBasket: this.props.addToBasket,
        price:null
    }
    load = ()=>{
        const { id, isLoading } = this.state;
        if(isLoading) return;
        this.setState({isLoading:true, isReady:false});
        const { config } = this.props;
        if(!config){
            console.error('Нет параметров подключения для получения Цены')
            return;
        }
        const url = config.getUrl(config, {
            key:'prices', 
            sliceLast:{
                Condition:`Номенклатура_Key=guid'${id}'`
            }
        });
        axios.get(url)
            .then(({data}) => {
                if(data.value.length > 0){
                    const price = data.value[0].Цена;
                    this.setState({
                        price,
                        isReady: true,
                        isLoading: false,
                    });
                }else{
                    this.setState({
                        isLoading: false,
                        isReady: false
                    });
                }
            })
    }
    componentDidMount = this.load;
    render = ()=>{
        const { isReady, addToBasket, price } = this.state;
        if(isReady){
            return <>
                <Icon name='rub' />{price}
                <br/>
                <Button onClick = { addToBasket.bind(this, this.state.price) } >
                    Добавить в корзину 
                </Button>
            </>
        }
        return <></>
    }
}
export default Price