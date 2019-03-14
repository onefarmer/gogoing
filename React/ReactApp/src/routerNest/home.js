import React, { Component } from 'react';
const axios = require('axios');

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:'我是一个home组件'
         };
    }    
    render() {
        return (
            <div className="home">
                Home
            </div>
        );
    }
}

export default Home;
