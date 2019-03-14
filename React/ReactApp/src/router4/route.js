
/*
    react路由的配置：
    1、官方文档 https://reacttraining.com/react-router/web/example/basic
    2、安装 npm install react-router-dom --save
    3、根组件引入react-router-dom
    import { BrowserRouter as Router, Route, Link } from "react-router-dom";
    exact表示严格匹配    
*/

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import News from './News';
import Product from './Product';
import ProductDetail from './ProductDetail'
import NewsDetail from './NewsDetail'

class RouteComponent extends Component {
    render() {
      return (
        <Router>
            <div>           
                <header className="header">
                    <Link to="/">首页</Link>
                    <Link to="/news">新闻</Link>
                    <Link to="/product">商品</Link>
                </header>       
                <Route exact path="/" component={Home} />
                <Route path="/news" component={News} />    
                <Route path="/newsDetail/:id" component={NewsDetail} /> 
                <Route path="/product" component={Product} />                 
                <Route path="/productDetail" component={ProductDetail} />                                 
            </div>
        </Router>
      );
    }
}
export default RouteComponent;
