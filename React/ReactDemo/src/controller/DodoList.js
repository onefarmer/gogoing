import React, { Component } from 'react';


export default class DodoList extends Component{

    render(){
        return(
            <div>
                <input type="text" ref="DodoVal" />
                <button onClick = {() => this.props.onClick(this.refs.DodoVal.value) }>Add Dodo</button>
                <ul>
                    {
                        this.props.list.map( (item)=>{
                            return <li key={item}>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}