import React, { Component } from 'react';
import { Button,Icon } from 'antd';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return(
            <div className="home">
                <h3>Home</h3>
                <Button type="primary">antd的按钮</Button><br/>
                <Icon type="pic-right" theme="outlined" /><br/>
                <Icon type="forward" className="red" theme="outlined" /><br/>
            </div>
        )
    }
}
export default Home;