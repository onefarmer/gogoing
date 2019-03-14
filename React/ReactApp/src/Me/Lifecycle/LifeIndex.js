import React, { Component } from 'react';
import LifeCycle from './Lifecycle'

export default class LifeIndex extends Component {
    constructor(){
        super()
        this.state={
            title:'父级传入初始数据'
        }
    }
    changeProp=()=>{
        this.setState({
            title:'父级传入数据发生改变'
        })
    }
    render(){
        return(
            <div className="lifeCycleIndex">
                <LifeCycle title={this.state.title}/>
                <br/>
                <button onClick={this.changeProp}>父级传入props数据改变</button>
            </div>
        )
    }
}