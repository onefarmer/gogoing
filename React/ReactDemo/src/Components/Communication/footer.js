import React,{Component} from 'react'

export default class Footer extends Component{
    constructor(props){
        super(props)
        this.state = {
            description:'Footer Component'
        }
    }
    run(){
        alert('Footer组件 Run方法')
    }
    render(){
        return(
            <div className = "footer">
                <h2>Footer组件</h2>
            </div>
        )
    }
}