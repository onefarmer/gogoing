import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    //Link,
    NavLink,
    Redirect,
    Switch
  } from 'react-router-dom'

import Home from './NavPages/home'
import News from './NavPages/news'
import Others from './NavPages/others'
import Detail from './NavPages/detail'
import './nav.css';

export default class RouterNav extends Component{
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