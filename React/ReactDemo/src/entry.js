import React, { Component } from 'react';
import PropsTransfer from './Components/PropsTransfer/parents' // 父子传值与方法，以及定义值与类型
import Message from './Components/Message'// message board
import AnimateCont from './Components/TransitionGroup/animateLsit' // Animate List
import Order from './order/orderRouter'
import Shop from './routerNest/routerShop'

export default class Entry extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className = "entryWarp">
                {/* <PropsTransfer/>
                <br/><hr/>
                <Message/>
                <br/><hr/>
                <AnimateCont/>
                <br/><hr/>
                <Order/>
                <br/><hr/>
                <Shop/> */}
            </div>
        )
    }
}