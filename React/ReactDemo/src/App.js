import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect,
  Switch
} from 'react-router-dom'
// import logo from './logo.svg';
import Message from './pages/message'
import LifeCycle from './pages/lifeCycle'
import AnimateCont from './pages/AnimateCont'
import Home from './pages/home'
import News from './pages/news'
import Others from './pages/others'
import Detail from './pages/detail'
import './themes/nav.css';
import './App.css';

class TodoList extends Component{
  constructor(){
    // 执行父类构造器
    super();
    this.state = {
      list:["第一个","第二个","第三个"]
    }
    // 推荐， 只执行一次，修正指针
    this.addTodo = this.addTodo.bind(this)
  }
  addTodo(){
    console.log( this.refs.todoVal.value );
    this.state.list.push(this.refs.todoVal.value);
    this.setState({
      list:this.state.list
    })
  }
  render(){
    return (
      <div className="app-content">
        <h2>{this.props.title}</h2>
        <input type = "text" ref="todoVal"/>
        <button onClick = {this.addTodo}>ADD TODO</button>
        <button onClick = {()=>{this.props.sendDataFromChild("来自于子组件的问候")}}>数据从子到父传递</button>
        <br/>
        <ul>
          {
            this.state.list.map((item,index)=>{
              return <li key={item}>{item}</li>
            })
          }
        </ul>
      </div>
    )
  }
}
class RouterNav extends Component{
  render(){
    return(
      <div className="routerNav">
        <Router>
          <div>
            <div className='navbar'>
              <NavLink exact activeClassName="active" to="/">主页</NavLink>
              <NavLink activeClassName="active" to="/news">新闻</NavLink>
              <NavLink activeClassName="active" to="/others">其他</NavLink>
            </div>
            <Switch>
            <Route exact path = "/" component = {Home}></Route>
            <Route path = "/news" component = {News}></Route>
            <Route path = "/others" component = {Others}></Route>
            {/* :tel :变量名 传递参数 ?判断有无参数，可写不可写 正则(/d)，判断数字 {3}只能3位数字*/}
            {/* <Route path = "/detail/:tel?" component = {Detail}></Route> */}
            {/* <Route path = "/detail/:tel(\d+)" component = {Detail}></Route> */}
            <Route path = "/detail/:tel(\d{3})" component = {Detail}></Route>
            {/* 当以上所有链接都不生效时，重定向，配合Switch使用。from匹配规则 都无匹配到/*时候 to-> 回到主页，链接*/}
            <Redirect from='/*' to='/'/>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}
class App extends Component {
  constructor(){
    super();
    this.sendDataFromChild = this.sendDataFromChild.bind(this);
    this.state = {
      message:'hello baby'
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
