import React, { Component } from 'react'
import PropTypes from 'prop-types'; // 类型定义

class Children extends Component{
    render(){
        return(
            <div className="ChildTitle">
                <h3>标题：{this.props.title}</h3>
                <h3>对应显示数据类型：{this.props.num}</h3>
                {/* 改变This ()=>{}*/}
                <button onClick = { this.props.sendDataFromChild.bind(this," 执行父组件方法") }>改变数据</button>
            </div>
        )
    }
}
// defaultProps  父调子时不给子组件传值，可以在子组件中使用defaultProps定义的默认值
Children.defaultProps={
    title:'DataChange'
}
// propTypes定义父给子传值的类型
Children.propTypes={
    num:PropTypes.number
}
export default Children;