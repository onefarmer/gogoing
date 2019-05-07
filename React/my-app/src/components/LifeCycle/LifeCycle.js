import React, { Component } from 'react';
/*
    React生命周期函数：
    组件加载的时候触发的函数：  constructor 、componentWillMount、 render 、componentDidMount
    组件数据更新的时候触发的生命周期函数：shouldComponentUpdate、componentWillUpdate、render、componentDidUpdate
    你在父组件里面改变props传值的时候触发的：componentWillReceiveProps
    组件销毁的时候触发的：componentWillUnmount
*/
export default class LifeCycle extends Component{
    constructor(props) {
        super(props);
        console.log('01构造函数','constructor');
        this.state = { 
            message:'初始化数据...'
         };
    }
    // 组件将要挂载
    componentWillMount(){
        console.log('02组件将要挂载','componentWillMount');
    }
    // 组件完成挂载，Dom操作、请求数据也放在这个里面
    componentDidMount(){
        console.log('04组件挂载完成','componentDidMount ');
    }
    // 是否要更新数据，返回true才会执行更新数据的操作
    shouldComponentUpdate(nextProps, nextState){
        console.log('001是否要更新数据','shouldComponentUpdate=> ');
        console.log('shouldComponentUpdate','nextProps=> ',nextProps);
        console.log('shouldComponentUpdate','nextState=> ',nextState);
        return true;
    }
    // 更新数据
    componentWillUpdate(){
        console.log('02组件将要更新','componentWillUpdate=> ');
    }
    // 更新完成
    componentDidUpdate(){
        console.log('04组件数据更新完成','componentDidUpdate=> ');
    }
    // !!父组件!! 里面改变props传值的时候触发的
    componentWillReceiveProps(nextProps, nextState){
        console.log('父组件里面改变了props的值触发的方法','componentWillReceiveProps=> ')
        console.log('componentWillReceiveProps','nextProps=> ',nextProps);
        console.log('componentWillReceiveProps','nextState=> ',nextState);
    }
    // 改变数据方法
    setMsg=()=>{
        this.setState({
            message:'改变后的数据...'
        })
    }
    render(){
        console.log('03数据渲染','render'); 
        return(
            <div className="lifeCycle">
                <p>Lifecycle State：{this.state.message}</p>
                <button onClick={this.setMsg}>更新数据</button>
            </div>
        )
    }
}
