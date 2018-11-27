import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom'
import './App.css';
import Home from './pages/home'
import News from './pages/news'
import Others from './pages/others'
import Detail from './pages/detail'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <div className='navbar'>
              <NavLink exact activeClassName="active" to="/">主页</NavLink>
              <NavLink activeClassName="active" to="/news">新闻</NavLink>
              <NavLink activeClassName="active" to="/others">其他</NavLink>
            </div>
            <Route exact path = "/" component = {Home}></Route>
            <Route path = "/news" component = {News}></Route>
            <Route path = "/others" component = {Others}></Route>
            <Route path = "/detail/:tel" component = {Detail}></Route>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
