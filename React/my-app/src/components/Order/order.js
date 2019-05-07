import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './home';
import Pcontent from './pcontent';
import './order.css'; 

export default class Order extends Component {
    render() {
        return(
            <Router>
                <div>
                    <Route exact path="/order" component={Home} />
                    <Route path="/pcontent/:id" component={Pcontent} />                    
                </div>
            </Router>
        )
    }
}