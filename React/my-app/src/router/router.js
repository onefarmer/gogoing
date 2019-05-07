
import React,{Component} from 'react';
// Switch Redirect Link
import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom'
//import {Navbar} from "react-bootstrap"

// 组件块
import LifeCycle from "../components/LifeCycle/LifeCycle"
import Transfer from "../components/Transfer/Transfer"
import Message from "../components/Message/Message"
import GodoList from "../components/GodoList/GodoList"
import Form from "../components/Form/form"
import Getdata from "../components/Getdata/getdata"
import RouteDemo from "../components/RouteDemo/RouteDemo"
import Order from "../components/Order/order"

export default class Nav extends Component {
    render(){
        return(          
            <Router>
                <div className="homePage">
                    <div className="nav">
                        <NavLink exact activeClassName="active" to="/">生命周期</NavLink>
                        <NavLink activeClassName="active" to="/transfer">组件通信</NavLink>
                        <NavLink activeClassName="active" to="/message">留言板</NavLink>                        
                        <NavLink activeClassName="active" to="/godolist">列表</NavLink>                        
                        <NavLink activeClassName="active" to="/form">表单</NavLink>                        
                        <NavLink activeClassName="active" to="/getdata">数据</NavLink>                        
                        <NavLink activeClassName="active" to="/routedemo">路由</NavLink>                        
                        <NavLink activeClassName="active" to="/order">点餐系统</NavLink>                        
                    </div>        
                    <div className='pageContent'>
                        <Route exact path = "/" component = {LifeCycle}></Route>
                        <Route path = "/transfer" component = {Transfer}></Route>
                        <Route path = "/message" component = {Message}></Route>   
                        <Route path = "/godolist" component = {GodoList}></Route>   
                        <Route path = "/form" component = {Form}></Route>   
                        <Route path = "/getdata" component = {Getdata}></Route>   
                        <Route path = "/routedemo" component = {RouteDemo}></Route>   
                        <Route path = "/order" component = {Order}></Route>   
                    </div>               
                </div>               
            </Router>          
        )
    }
}