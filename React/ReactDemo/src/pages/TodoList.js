import React, { Component } from 'react';

class TodoList extends Component{
    constructor(){
      // 执行父类构造器
      super();
      this.state = {
        list:["第一个","第二个","第三个"]
      }
      // 推荐， 只执行一次，修正指针
      this.addTodo = this.addTodo.bind(this)
    }
    addTodo(){
        // 调用Action
        this.state.list.push(this.refs.todoVal.value);
        this.setState({
            list:this.state.list
        })
    }
    render(){
      return (
        <div className="todo-list">
          <h2>{this.props.title}</h2>
          <input type = "text" ref="todoVal"/>
          {/* ()=>{} props上附带的函数返回给匿名() 可传入参数 从子组件传递过来的sendDataFromChild方法*/}
          <button onClick = {()=>{this.props.sendDataFromChild("网页标题的修改（来组子组件）")}}>数据从子到父传递</button>
          <br/>
          <ul>
            {
              this.state.list.map((item,index)=>{
                return <li key={item}>{item}</li>
              })
            }
          </ul>
        </div>
      )
    }
  }
  export default TodoList;