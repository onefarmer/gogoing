import React, { Component } from 'react';
//import yoona from '../assets/images/yoona.jpg'

class ImgShow extends Component{
    render(){
      return (
        <div className="img-wrap">
            <h3>{this.props.title}↓</h3>
            <br/>
            <img alt="yooNa" src={require('../assets/images/yoona.jpg')} style={{'width':'100px'}}/>
            <br/>
            <img alt="BAIDU" src="https://www.baidu.com/img/xinshouye_353af22a7f305e1fb6cfa259394dea9b.png" />
        </div>
      )
    }
  }
  export default ImgShow;