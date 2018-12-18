import React, { Component } from 'react';

import PropsTransfer from './Components/PropsTransfer/parents' // 父子传值与方法，以及定义值与类型
import Communication from './Components/Communication/news'
import Message from './Components/Message'// message board
import LifeCycle from './Components/lifecycle' // 生命周期
import AnimateCont from './Components/TransitionGroup/animateLsit' // Animate List
import RouterNav from './Router/router' // Router
// New Lesson
import ImgShow from './Components/imgShow'
import Form from './Components/form'
import GotoList from './Components/GodoList'
import Axios from './Components/Data/Axios'
import FetchJsonp from './Components/Data/FetchJsonp'
// 样式
import './assets/css/App.css'; 



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
        <PropsTransfer/>
        <hr/>     
        <Communication/>
        <hr/>
        <ImgShow title = "img output"/>
        <hr/>
        <GotoList title = "GotoList Data"/>
        <hr/>
        <Message/>
        <hr/>
        <LifeCycle/>
        <hr/>
        <AnimateCont/>
        <hr/>
        <RouterNav/> 
        <hr/>
        <Form/>
        <hr/>
        <Axios/>
        <FetchJsonp/>
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
