import React, { Component } from 'react'
import Children from './children'

class Parent extends Component{
    constructor(){
        super()
        this.sendDataFromChild = this.sendDataFromChild.bind(this)
        this.state = {
            num:1,
            title:'初始父级原始数据'
          }
    }
    // 传入子组件的方法
    sendDataFromChild(val){
        this.setState({
            title:val
        })
    }
    // 子级执行
    run=()=>{
        alert('子级执行父传子Run函数，非bind')
    }
    // 传入this 亦能获取子级数据
    getData=()=>{
        alert('子级执行父级GetData函数');    
    }
    render(){
        return(
            <div className='parentsWarp'>
                <p>{this.state.title}</p>
                <Children sendDataFromChild = {this.sendDataFromChild} num = {this.state.num} run={this.run} myself={this}/>             
            </div>
        )
    }
}

export default Parent;