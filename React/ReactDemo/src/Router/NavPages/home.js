import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class Home extends Component{
    constructor(){
        super();
        this.state = {
            list:["10010","10086","10000"]
        }
    }
    render(){
        return(
            <div>
                <h2>主页</h2>
                <ul>
                    {
                        this.state.list.map( (item) => {
                            return <li key={item}>
                                {/* $传参 10000 10086 10010*/}
                                <Link to={`/detail/${item}`}>{item}</Link>
                            </li>;
                        })
                    }
                    <li><Link to="/detail">无参数链接</Link></li>
                    <li><Link to="/detail/abc">非数字测试链接</Link></li>
                    <li><Link to="/detail/101">三位数链接测试</Link></li>
                </ul>

            </div>
        )
    }
}
