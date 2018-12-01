import React, { Component } from 'react';
// import yoona from '../assets/images/yoona.jpg'

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
        <div className="list" title={this.props.title}>
          <h2>{this.props.title}</h2>
          {/* {yoona} 本地图片 非png，jpg格式 浏览器格式*/}
          <br/>
          <img alt="yooNa" src={require('../assets/images/yoona.jpg')} style={{'width':'100px'}}/>
          {/* <img src="https://www.baidu.com/img/xinshouye_353af22a7f305e1fb6cfa259394dea9b.png" /> */}
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