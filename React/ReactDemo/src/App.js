import React, { Component } from 'react';

import Message from './pages/message'// 留言板
import LifeCycle from './pages/lifeCycle' // 生命周期
import AnimateCont from './pages/AnimateCont' // 动画导航
import TodoList from  './pages/TodoList'// 列表
import RouterNav from './Router/router' // 路由

import './App.css'; // 样式


class App extends Component {
  constructor(){
    super();
    this.addTodo = this.addTodo.bind(this)
    this.addOne = this.addOne.bind(this)
    /*
      this.sendDataFromChild = this.sendDataFromChild.bind(this);
      this.state = {
        message:'网页标题'
      }
    */
  }
  /*
  sendDataFromChild(val){
    this.setState({
      message:val
    })
  }
  */
 addTodo(){
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
        {/* 
          <h1>{this.state.message}</h1>
          <TodoList title = "TodoList标题" sendDataFromChild={this.sendDataFromChild}/>
          <Message/>
          <hr/>
          <LifeCycle/>
          <hr/>
          <AnimateCont/>
          <hr/>
          <RouterNav/> 
        */}
        <input type="text" ref="todoVal"/>
        <button onClick = {this.addTodo}>ADD TODO</button>
        <hr/>
        {count}
        <button onClick={this.addOne}>+1</button>
        <ul>
          {
            list.map((item,index)=>{
              return <li key={item+index}>{item}</li>
            })
          }
        </ul>
      </div>
    );
  }
}
export default App;
