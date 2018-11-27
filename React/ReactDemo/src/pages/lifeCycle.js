import React, { Component } from 'react';

class Child extends Component {
    componentWillMount(){
        console.log('子组件即将挂载')
    }
    render(){
        return(
            <div>
                子组件
            </div>            
        )        
    }
}

export default class LifeCycle extends Component{
    constructor(){
        super();
        this.state = {
            flag:false
        }
        this.toggle = this.toggle.bind(this)
    }
    componentWillMount(){
        console.log('父组件即将挂载：')
    }
    componentDidMount(){
        console.log('父组件挂载完成：')
    }
    // 切换flag
    toggle(){
        this.setState({
            flag:!this.state.flag
        })
    }
    // 通常不需要声明
    shouldComponentUpdate(){
        console.log('是否更新：')
        return true;
    }
    componentWillUpdate(){
        console.log('即将更新')
    }
    componentDidUpdate(){
        console.log('更新完毕')
    }
    render(){
        console.log('render');
        return(
            <div className = 'lifeApp'>
                <button onClick = {this.toggle}>切换</button>
                {this.state.flag ? <Child/> : null}
            </div>
        )
    }
}