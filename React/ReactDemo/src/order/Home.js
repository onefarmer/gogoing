import React, { Component } from 'react';
const axios = require('axios');

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            domain:'http://a.itying.com/',
            list:[]
        }
    }
    // api
    requestData = () =>{
        var api = this.state.domain+'api/productlist';
        axios.get(api).then( (response)=> {
            this.setState({
                list:response.data.result
            })
        }).catch( function(error) {
            console.log(error)
        })
    }
    componentDidMount(){
        this.requestData();
    }
    render(){
        return(
            <div>
                主页
            </div>
        )
    }
}

export default Home;