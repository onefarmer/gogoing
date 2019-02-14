import React, { Component } from 'react';
import url from 'url'; //url模块来解析url地址 npm install url --save

class ProductContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query:''
        }
    }
    //生命周期函数
    componentDidMount(){
        // 获取get传值
        console.log(url.parse(this.props.location.search,true));
        let query = url.parse(this.props.location.search,true).query.id;
        this.setState({
            query:query
        })
    }
    render() {
        return (        
            <div>
                我是商品详情组件（传入的params：{this.state.query}）
            </div>
        );
    }
}

export default ProductContent;