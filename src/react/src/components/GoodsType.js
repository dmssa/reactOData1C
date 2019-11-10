import React, { Component } from 'react';
import axios from 'axios';

export default class GoodsType extends Component {
    componentDidMount = () => {
        const { config } = this.props;
        if(!config){
            console.error('Нет параметров подключения для получения ВидаНоменклатуры')
            return;
        }
        const { id } = this.props;
        const url = config.getUrl(config, {
            key:'goodsTypes',
            id 
        });
        axios.get(url)
             .then(({data}) => {
                const gType = data.Description;
                this.setState({
                    isReady:true, 
                    gType
                })
             })
    }
    state = {
        isReady: false, 
        gType: null, 
    };
    
    render=()=>{
        if(this.state.isReady){
            return <div>
                {this.state.gType}
            </div>
        }
        return <></>
    }
}
