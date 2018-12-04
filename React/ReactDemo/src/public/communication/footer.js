import React,{Component} from 'react'

export default class Footer extends Component{
    constructor(props){
        super(props)
        this.state = {
            description:'Footer Component'
        }
    }
    run(){
        alert('I am footer,s run fnc')
    }
    render(){
        return(
            <div className = "footer">
                <h2>I am Foot Component</h2>
            </div>
        )
    }
}