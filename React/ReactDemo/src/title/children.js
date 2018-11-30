import React, { Component } from 'react'

class Children extends Component{
    render(){
        return(
            <div className="ChildTitle">
                {/* ()=>{} props上附带的函数返回给匿名() 可传入参数 从父组件传递过来的sendDataFromChild方法*/}
                <button onClick = { ()=>{this.props.sendDataFromChild(" This Data have changed by Child Component")} }>Change Parent Data</button>
            </div>
        )
    }
}

export default Children;