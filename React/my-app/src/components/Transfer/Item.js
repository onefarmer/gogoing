import React, { Component } from 'react'
import PropTypes from 'prop-types'; // 类型定义

class Children extends Component{
    render(){
        return(
            <div className="ChildTitle">
                <p>定义的默认值：{this.props.title}</p>
                <p>定义父子传值类型：{this.props.num}</p>
                <button onClick = { this.props.sendDataFromChild.bind(this,"内容获得二次更新") }>子级执行父级传入函数-更新父级状态</button><br/>
                <button onClick = { this.props.run }>子级执行父级-run函数</button><br/>
                <button onClick = { this.props.myself.getData}>父级传入this-子级执行父级函数</button> 
            </div>
        )
    }
}
// 父调子时不给子组件传值，可以在子组件中使用defaultProps定义的默认值
Children.defaultProps={
    title:'默认值'
}
// 定义父子传值类型
Children.propTypes={
    num:PropTypes.number
}
export default Children;