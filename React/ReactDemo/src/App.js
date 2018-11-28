import React, { Component } from 'react';

// 留言板
import Message from './pages/message'
// 生命周期
import LifeCycle from './pages/lifeCycle'
// 动画添加导航
import AnimateCont from './pages/AnimateCont'
// 列表
import TodoList from  './pages/TodoList'
// 路由
import RouterNav from './Router/router'

// 样式文件
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.sendDataFromChild = this.sendDataFromChild.bind(this);
    this.state = {
      message:'网页标题'
    }
  }
  sendDataFromChild(val){
    this.setState({
      message:val
    })
  }
  render() {
    return (
      <div className = "App">
        <h1>{this.state.message}</h1>
        <TodoList title = "TodoList标题" sendDataFromChild={this.sendDataFromChild}/>
        <Message/>
        <hr/>
        <LifeCycle/>
        <hr/>
        <AnimateCont/>
        <hr/>
        {/* 路由NAV*/}
        <RouterNav/>
      </div>
    );
  }
}
export default App;
