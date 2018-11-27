import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class Home extends Component{
    constructor(){
        super();
        this.state = {
            list:["10010","10086","10000"]
        }
    }
    render(){
        return(
            <div>
                <h2>主页</h2>
                <ul>
                    {
                        this.state.list.map( (item) => {
                            return <li>
                                <Link to={`/detail/${item}`}>{item}</Link>
                            </li>;
                        })
                    }
                </ul>

            </div>
        )
    }
}
