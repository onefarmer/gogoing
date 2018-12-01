import React, { Component } from 'react';

import TitleChange from './title/parents' // Child Change Parent
import List from './List/list' // List Pros Send Data
import Message from './Message/message'// message board
import LifeCycle from './lifeCycle/lifecycle' // 生命周期
import AnimateCont from './AnimateList/animateLsit' // Animate List
import RouterNav from './Router/router' // Router
//
import Demo from './Components/demo'
import './App.css'; // 样式

class App extends Component {
  constructor(){
    super();
    //this.addTodo = this.addTodo.bind(this)
    this.addOne = this.addOne.bind(this)  
  }
  // 修改指针不需要bind
  addTodo=()=>{
    this.props.store.dispatch({
      type:"ADD_TODO",
      payload:this.refs.todoVal.value
    })
  }
  addOne(){
    // 中间件可以放置方法
    this.props.store.dispatch((dispatch,state)=>{
      //  异步
      setTimeout(function(){
        dispatch({
          type:'ADD_ONE',
          payload:-1
        })
      },2000)
    })
  }
  render() {
     const list = this.props.store.getState().list;
     const count = this.props.store.getState().count;
    return (  
      <div className = "App">      
        <TitleChange/>
        <hr/>
        <List title = "List Data" />
        <hr/>
        <Message/>
        <hr/>
        <LifeCycle/>
        <hr/>
        <AnimateCont/>
        <hr/>
        <RouterNav/> 
        <hr/>
        <Demo/>
        <hr/>
        <div className = "StoreApp">
          <input type="text" ref="todoVal"/>
          <button onClick = {this.addTodo}>ADD TODO</button>
          <ul>
            {
              list.map((item,index)=>{
                return <li key={item+index}>{item}</li>
              })
            }
          </ul>
          <hr/>
          {count}
          <button onClick={this.addOne}>+1</button>
        </div>
      </div>
    );
  }
}
export default App;
