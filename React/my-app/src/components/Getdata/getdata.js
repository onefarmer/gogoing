/*
    react获取服务器APi接口的数据：
    react中没有提供专门的请求数据的模块。但是我们可以使用任何第三方请求数据模块实现请求数据

    1、axios
        https://github.com/axios/axios
        axios的作者觉得jsonp不太友好，推荐用CORS方式更为干净（后端运行跨域）

        1、安装axios模块npm install axios  --save   /  npm install axios  --save
        2、引入 import axios from 'axios'
        
    2、fetch-jsonp    
        https://github.com/camsong/fetch-jsonp

            1、安装 npm install fetch-jsonp  --save
            2、引入 import fetchJsonp from 'fetch-jsonp'
*/

import React, { Component } from 'react';
import axios from 'axios'; 
import fetchJsonp from 'fetch-jsonp';
var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20';

export default class Getdata extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[],
            list2:[],
         };
    }
    // 获取数据
    useAxios=()=>{
         //通过axios获取服务器数据，接口后台允许了跨域 
        axios.get(api).then( (response)=>{
            //用到this要注意this指向
            this.setState({
                list:response.data.result
            })
        }).catch(function(error){
            console.log(error);
        })

    }
    uesfetchJsonp=()=>{
         //通过fetchJsonp获取服务器数据，
        fetchJsonp(api).then( response => response.json()).then( (json) =>{
            this.setState({
                list2:json.result
            })
        }).catch( (err)=>{
            console.log(err)
        })
    }
    // 渲染
    render(){
        return (
            <div className="axiosWrap">
                <button onClick={this.useAxios}>useAxios</button><br/>    
                <button onClick={this.uesfetchJsonp}>uesFetchJsonp</button>          
                <ul>         
                    {
                        this.state.list.map((value,key)=>{
                            return <li key={key}>{value.title}</li>
                        })
                    }   
                </ul>
                <ul>         
                    {
                        this.state.list2.map((value,key)=>{
                            return <li key={key}>{value.title}</li>
                        })
                    }   
                </ul>
            </div>
        )
    }
}