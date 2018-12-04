import React, { Component } from 'react'
import PropTypes from 'prop-types'; // 类型定义
class Children extends Component{
    render(){
        return(
            <div className="ChildTitle">
                <h3>{this.props.title}</h3>
                <h3>{this.props.num}</h3>
                {/* ()=>{} props上附带的函数返回给匿名() 可传入参数 从父组件传递过来的sendDataFromChild方法*/}
                <button onClick = { ()=>{this.props.sendDataFromChild(" This Data have changed by Child Component")} }>Change Parent Data</button>
            </div>
        )
    }
}
//defaultProps  父组件调用子组件的时不给子组件传值，可以在子组件中使用defaultProps定义的默认值
Children.defaultProps={
    title:'data change'
}
//同行propTypes定义父组件给子组件传值的类型
Children.propTypes={
    num:PropTypes.number
}
export default Children;