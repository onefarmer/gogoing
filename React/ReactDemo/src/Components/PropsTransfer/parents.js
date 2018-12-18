import React, { Component } from 'react'
import Children from './children'

class Parent extends Component{
    constructor(){
        super()
        this.sendDataFromChild = this.sendDataFromChild.bind(this)
        this.state = {
            title:'数据改变（从子传父）',
            num:999
          }
    }
    // 传入子组件的方法
    sendDataFromChild(val){
        this.setState({
            title:val
        })
    }
    render(){
        return(
            <div>
                {/* 传入方法于子组件 */}
                <Children sendDataFromChild = {this.sendDataFromChild} num = {this.state.num} />
                <h1>{this.state.title}</h1>
            </div>
            
        )
    }
}

export default Parent;