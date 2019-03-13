import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import routes from './navRouter';
import './nav.css';

export default class routerShop extends Component {
    render(){
        return(
            <Router>
                <div className='navWrap'>
                    <nav>
                        <Link to = "/">父子传值实例</Link>
                        <Link to = "/message">留言板</Link>
                        <Link to = "/animate">动画导航</Link>
                        <Link to = "/routeNav">路由</Link>
                        <Link to = "/routeNew">新路由</Link>
                        <Link to = "/form">表单</Link>
                        <Link to = "/gotoList">列表</Link>
                        <Link to = "/fetchjsonp">跨域</Link>
                        <Link to = "/axios">数据驱动</Link>
                        <Link to = "/lifeStyle">生命周期</Link>
                        <Link to = "/order">点餐</Link>
                        <Link to = "/shop">路由组件</Link>
                    </nav>
                    <div className='contentWrap'>
                    {
                        routes.map((route,key)=>{
                            if(route.exact){
                                return <Route key={key} exact path={route.path}                     
                                render={props => (
                                <route.component {...props} routes={route.routes} />
                                )}
                                />
                            }
                            else{
                                return <Route  key={key}  path={route.path} 
                                render={props => (
                                <route.component {...props} routes={route.routes} />
                                )}
                                />
                            }
                        })
                    }   
                    </div>
                </div>
            </Router>
        )
    }
}
