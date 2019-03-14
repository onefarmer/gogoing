import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:'我是一个User组件'
         }
    }    
    render() {
        return (
            <div className="user">
               <div className="content">
                   <div className="left">
                        <Link to="/user/">个人中心</Link>
                        <br/><br/>
                        <Link to="/user/info">用户信息</Link>
                        <br/><br/>
                        <Link to="/user/list">用户列表</Link>
                        <br/><br/>
                        <Link to="/user/add">增加用户</Link>
                        <br/><br/>
                        <Link to="/user/edit">编辑用户</Link>
                    </div>
                    <div className="right">                                          
                        {
                            this.props.routes.map((route,key)=>{
                                return  <Route key={key} exact path={route.path} component={route.component} />
                            })
                        }
                    </div>
               </div>
            </div>
        );
    }
}

export default User;
