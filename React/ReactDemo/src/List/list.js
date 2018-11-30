import React, { Component } from 'react';

class List extends Component{
    constructor(){
      // 执行父类构造器
      super();
      this.state = {
        list:["One","Two","Three"]
      }
    }
    render(){
      return (
        <div className="list">
          <h2>{this.props.title}</h2>
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
  export default List;