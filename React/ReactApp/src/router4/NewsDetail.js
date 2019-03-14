import React, { Component } from 'react';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    //生命周期函数
    componentDidMount(){
        //获取动态路由的传值
        console.log(this.props.match.params.id);  
    }
    render() {
        return (
            <div>
                NewDetail（传入的params：{this.props.match.params.id}）
            </div>
        );
    }
}

export default Content;