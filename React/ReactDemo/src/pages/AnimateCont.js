import React, { Component } from 'react';
import ReactCSSTranstionGroup from 'react-addons-css-transition-group'
import './../themes/reactAnim.css';

export default class AnimateCont extends Component{
    constructor(){
        super();
        this.state = {
            list:['导航']
        }
        this.addTodo = this.addTodo.bind(this)
    }
    addTodo(){
        this.state.list.push( this.refs.todoVal.value);
        this.setState({
            list:this.state.list
        })
    }
    delateTodo(index){
        this.state.list.splice(index,1);
        this.setState({
            list:this.state.list
        })
    }
    render(){
        let items = this.state.list.map((item,index)=>{
            return <li key={item}>{item}<button onClick = {() => this.delateTodo(index)}>X</button></li>
        })
        return(
            <div className = "animateApp">
                <input type = "text" ref = "todoVal"/>
                <button onClick = {this.addTodo}>添加</button>
                <ul>
                    <ReactCSSTranstionGroup
                        transitionName = "reactAnim"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}>
                    {items}
                    </ReactCSSTranstionGroup>         
                </ul>
            </div>
        )
    }
}