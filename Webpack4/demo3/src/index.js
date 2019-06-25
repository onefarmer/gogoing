import "./css/index.css"
import './less/style.less'

import React,{Component} from 'react' // 模块
import ReactDOM from 'react-dom'

ReactDOM.render(
    <span>React</span>,
    document.getElementById('root')
)
//import './scss/style.scss'

// webpack4.x默认自带支持ES6语法
import {a,b,c} from "./js/a.js";

console.log(a*b)
console.log(c) // jsx

import youImg from '../src/images/you.jpg' // 引入图片
let oImg = new Image() // IMG对象
oImg.onload = function(){
    document.body.appendChild(oImg)
}
oImg.src = youImg;
document.write(' == nmb, this is your father,mother,and GrandFather ......')