/*
React生命周期函数：
组件加载的时候触发的函数：  constructor 、componentWillMount、 render 、componentDidMount
组件数据更新的时候触发的生命周期函数：shouldComponentUpdate、componentWillUpdate、render、componentDidUpdate
你在父组件里面改变props传值的时候触发的：componentWillReceiveProps
组件销毁的时候触发的：componentWillUnmount
*/

import React, { Component } from 'react';

export default class Lifecycle extends Component {
    constructor(props) {
        super(props);
        console.log('生命周期：','constructor','01构造函数');
        this.state = { 
            message:'初始化数据'
         };
    }
    // 组件将要挂载
    componentWillMount(){
        console.log('生命周期：','componentWillMount=> ','02组件将要挂载');
    }
    // 组件完成挂载，Dom操作、请求数据也放在这个里面
    componentDidMount(){
        console.log('生命周期：','componentWillMount=> ','04组件将要挂载');
    }
    // 是否要更新数据，返回true才会执行更新数据的操作
    shouldComponentUpdate(nextProps, nextState){
        console.log('生命周期：','shouldComponentUpdate=> ','001是否要更新数据');
        console.log('生命周期：','nextProps=> ',nextProps);
        console.log('生命周期：','nextState=> ',nextState);
        return true;
    }
    // 更新数据
    componentWillUpdate(){
        console.log('生命周期：','componentWillUpdate=> ','02组件将要更新');
    }
    // 更新完成
    componentDidUpdate(){
        console.log('生命周期：','componentDidUpdate=> ','04组件数据更新完成');
    }
    // 父组件里面改变props传值的时候触发的
    componentWillReceiveProps(){
        console.log('生命周期：','componentWillReceiveProps=> ','父子组件传值，父组件里面改变了props的值触发的方法')
    }
    // 改变数据方法
    setMsg=()=>{
        this.setState({
            message:'已改变后的数据'
        })
    }
    // 数据渲染
    render() {
        console.log('生命周期：','render','03数据渲染render');     
        return (
            <div className="lifeCycle">
                <h3>Lifecycle State：{this.state.message}</h3>
                <h3>Lifecycle 父级传入：{this.props.title}</h3>
                <button onClick={this.setMsg}>更新数据</button>
            </div>
        );
    }
}