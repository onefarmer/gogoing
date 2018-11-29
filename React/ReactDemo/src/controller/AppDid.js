import React, { Component } from 'react';
import DodoList from './DodoList'
import DodoActions from './DodoActions'
import Store from './store'

export default class AppDid extends Component{
    constructor(){
        super()
        this.state = {
            list:[]
        }
    }
    componentDidMount(){
        Store.addChangeListener(this.refreshData)
    }
    refreshData(){
        let listData =  Store.getDodoListData();
        this.setState({
            list:listData
        })
    }
    addDodo(data){
        // 调用Action
        DodoActions.addDodo(data);
    }
    render(){
        return(
            <div className = "AppDid">
            {/* 这里的onClick为属性 语义化*/}
                <DodoList onClick = {this.addDodo} list = {this.state.list}/>
            </div>
        )
    }
}