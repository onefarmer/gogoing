import React, { Component } from 'react';
import url from 'url'; //url模块来解析url地址 npm install url --save

export default class Detail1 extends Component{
    constructor(props) {
        super(props);
        this.state = {
            query:''
        }
    }
    componentWillReceiveProps(nextProps, nextState){
        let query = url.parse(this.props.location.search,true).query.id;
        this.setState({
            query:query
        })
    }
    componentWillUnmount(){
        console.log('卸载...')
    }
    render(){
        return(
            <div>
                <h5>详情页</h5>
                {/* match.params.tel传参*/}
                <p>
                    {
                        this.props.match.params.tel?this.props.match.params.tel:null
                    }
                </p>
                <p>
                    {
                        this.props.match.params.id?
                        `传入的params：${this.props.match.params.id}`:
                        null                 
                    }
                </p>
                <p>
                    {
                        this.state.query?
                        `url获取传入的params：${this.state.query}`:
                        null                 
                    }
                </p>
            </div>
        )
    }
}
