/*
    官方文档 https://reacttraining.com/react-router/web/example/basic
    安装 npm install react-router-dom --save
    import { BrowserRouter as Router, Route, Link } from "react-router-dom";
*/

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import routes from './model/router.js';
import './index.css';
class routerShop extends Component {
    render() {
      return (
        <Router>
          <div>
            <header className="title">
                <Link to="/">首页组件</Link>  
                <Link to="/user">用户页面</Link>
                <Link to="/shop">商户</Link> 
                <Link to="/news">新闻</Link> 
            </header>       
            {
              /* 
              <Route exact path="/" component={Home} />
              <Route path="/user" component={User} />
              <Route path="/shop" component={Shop} /> 
              */
            }

            {
              routes.map((route,key)=>{
                  if(route.exact){
                    return <Route key={key} exact path={route.path}                     
                    render={props => (
                      <route.component {...props} routes={route.routes} />
                    )}
                    />
                  }else{
                    return <Route  key={key}  path={route.path} 
                    render={props => (
                      <route.component {...props} routes={route.routes} />
                    )}
                    />
                  }
              })
            }     
          </div>
        </Router>
      );
    }
  }
  
  export default routerShop;
