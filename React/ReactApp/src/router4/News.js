import React, { Component } from 'react';
import { Link } from "react-router-dom"; // BrowserRouter as Link 错误

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[
                {id:'1',title:'内容1'},
                {id:'2',title:'内容2'},
                {id:'3',title:'内容3'},
                {id:'4',title:'内容4'}
            ]
        };
    }
    render() {
        return (
            <div>
                <h3>News</h3>
                <ul>
                    {
                        this.state.list.map((value,key)=>{
                            return (
                                <li key={key}>                                   
                                    <Link to={`/newsDetail/${value.id}`}>{value.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}
export default News;