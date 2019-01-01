/*
    react获取服务器APi接口的数据：
    react中没有提供专门的请求数据的模块。但是我们可以使用任何第三方请求数据模块实现请求数据

    1、axios
        https://github.com/axios/axios
        axios的作者觉得jsonp不太友好，推荐用CORS方式更为干净（后端运行跨域）

        1、安装axios模块npm install axios  --save   /  npm install axios  --save
        2、引入 import axios from 'axios'
*/

import React, { Component } from 'react';
import axios from 'axios'; // ajax

export default class Axios extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[]
         };
    }
    getData=()=>{
        //通过axios获取服务器数据，接口后台允许了跨域 
        var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20';
        axios.get(api).then( (response)=>{
            //用到this要注意this指向
            this.setState({
                list:response.data.result
            })
        }).catch(function(error){
            console.log(error);
        })
    }
    // 渲染
    render(){
        return (
            <div className="axiosWrap">
                <h2>axios</h2>
                <button onClick={this.getData}>获取服务器api接口数据</button>          
                <ul>         
                    {
                        this.state.list.map((value,key)=>{
                            return <li key={key}>{value.title}</li>
                        })
                    }   
                </ul>
            </div>
        )
    }
}