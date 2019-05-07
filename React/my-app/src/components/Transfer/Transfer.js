import React, { Component } from 'react'
import Item from './Item'

class Parent extends Component{
    constructor(){
        super()
        this.sendDataFromChild = this.sendDataFromChild.bind(this)
        this.state = {
            num:1,
            title:'父级当前状态'
          }
    }
    // 传入子组件，由子组件执行此方法
    sendDataFromChild(val){
        this.setState({
            title:val
        })
    }
    // 子级执行
    run=()=>{
        alert('子级执行父级-run函数')
    }
    // 传入this 亦能获取子级数据
    getData=()=>{
        alert('子级执行父级GetData函数');    
    }
    render(){
        return(
            <div className='parentsWarp'>
                <p>初始状态：{this.state.title}</p>
                <Item sendDataFromChild = {this.sendDataFromChild} num = {this.state.num} run={this.run} myself={this}/>             
            </div>
        )
    }
}

export default Parent;