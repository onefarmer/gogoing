/*
    react获取服务器APi接口的数据：
    react中没有提供专门的请求数据的模块。但是我们可以使用任何第三方请求数据模块实现请求数据

    2、fetch-jsonp    
        https://github.com/camsong/fetch-jsonp

            1、安装 npm install fetch-jsonp  --save
            2、引入 import fetchJsonp from 'fetch-jsonp'
*/


import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';

export default class FetchJsonp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[]
        };
    }
    getData=()=>{
        let api="http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20";
        fetchJsonp(api).then( response => response.json()).then( (json) =>{
            this.setState({
                list:json.result
            })
        }).catch( (err)=>{
            console.log(err)
        })
    }
    render() {
        return (
            <div className="Jsonp-wrap">
                <button onClick={this.getData}>Jsonp获取数据</button><br/>
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