import React, { Component } from 'react'
import Children from './children'

class Parent extends Component{
    constructor(){
        super()
        this.sendDataFromChild = this.sendDataFromChild.bind(this)
        this.state = {
            title:'Change Data From Child'
          }
    }
    sendDataFromChild(val){
        this.setState({
            title:val
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.title}</h1>
                <Children sendDataFromChild = {this.sendDataFromChild}/>
            </div>
            
        )
    }
}

export default Parent;