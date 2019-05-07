
import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link,NavLink,Redirect,Switch} from 'react-router-dom'
import {Navbar} from "react-bootstrap"

// 组件块
import LifeCycle from "../components/LifeCycle/LifeCycle"
import Transfer from "../components/Transfer/Transfer"
import Cpage from "../components/c"

export default class Nav extends Component {
    render(){
        return(          
            <Router>
                <div className="homePage">
                    <div className="nav">
                        <NavLink exact activeClassName="active" to="/">生命周期</NavLink>
                        <NavLink activeClassName="active" to="/transfer">参数传递</NavLink>
                        <NavLink activeClassName="active" to="/c">C页面</NavLink>                        
                    </div>        
                    <div className='pageContent'>
                        <Route exact path = "/" component = {LifeCycle}></Route>
                        <Route path = "/transfer" component = {Transfer}></Route>
                        <Route path = "/c" component = {Cpage}></Route>   
                    </div>               
                </div>               
            </Router>          
        )
    }
}