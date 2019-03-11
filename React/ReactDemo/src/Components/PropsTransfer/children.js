import React, { Component } from 'react'
import PropTypes from 'prop-types'; // 类型定义

class Children extends Component{
    render(){
        return(
            <div className="ChildTitle">
                <p>defaultProps：{this.props.title}</p>
                <p>PropTypes.number：{this.props.num}</p>
                <button onClick = { this.props.sendDataFromChild.bind(this,"子执行父级方法-更新内容") }>子级执行父级函数</button><br/><br/>
                <button onClick = { this.props.run }>子级执行父级Run，非bind</button><br/><br/>    
                <button onClick = { this.props.myself.getData}>父级传入this,子级执行</button> 
            </div>
        )
    }
}
// 父调子时不给子组件传值，可以在子组件中使用defaultProps定义的默认值
Children.defaultProps={
    title:'DataChange'
}
// 定义父子传值类型
Children.propTypes={
    num:PropTypes.number
}
export default Children;