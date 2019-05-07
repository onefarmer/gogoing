import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom'

import Home from "./home"
import Detail from "./Detail"

export default class RouteDemo extends Component{
    constructor(props){
        super(props)
        this.state = {
            name:'faker',
            num:888,
            num2:9999,
            list:[
                {id:'1',title:'内容1'},
                {id:'2',title:'内容2'}
            ],
            list2:[
                {id:'A1',title:'商品1'},
                {id:'A2',title:'商品2'}
            ]
        }
    }
    render(){
      return(
        <div className="routerNav">
            <Router>
                <div>
                    <div className='nav'>
                        <Link to="/routedemo/home">主页</Link>
                        <Link to={`/routedemo/detail/${this.state.name}`}>路由</Link>
                        <Link to={`/routedemo/detailNum/${this.state.num}`}>数字</Link>
                        <Link to={`/routedemo/detailNumLimit/${this.state.num2}`}>限制</Link>
                        {
                            this.state.list.map((value,key)=>{
                                return (                                                      
                                    <Link key={key} to={`/routedemo/detailList/${value.id}`}>{value.title}</Link>
                                )
                            })
                        }
                        {
                            this.state.list2.map((value,key)=>{
                                return (                                                      
                                    <Link key={key} to={`/routedemo/detailShop?id=${value.id}`}>{value.title}</Link>
                                )
                            })
                        }
                    </div>
                    <Switch>
                        {/* 
                            变量名  :tel 传
                            问号? 判断有无参数，后接参数，可写可不写
                            判断数字 -正则(/d)，
                            (\d{3}) 限制为3位数字
                        */}
                        <Route path = "/routedemo/home" component = {Home}></Route>
                        <Route path = "/routedemo/detail/:tel?" component = {Detail}></Route>
                        <Route path = "/routedemo/detailNum/:tel(\d+)" component = {Detail}></Route>
                        <Route path = "/routedemo/detailNumLimit/:tel(\d{3})" component = {Detail}></Route>
                        <Route path="/routedemo/detailList/:id" component={Detail} /> 
                        <Route path="/routedemo/detailShop" component={Detail} /> 
                        {/* 
                            当以上所有链接都不生效时，重定向，配合Switch使用。
                            from匹配规则 => 没有匹配到 /* 时候 to-> 回到主页，链接
                        */}
                        <Redirect from='/*' to='/routedemo/home' />
                    </Switch>
                </div>
            </Router>
        </div>
      )
    }
  }