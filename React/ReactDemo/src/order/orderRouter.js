import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Pcontent from './components/Pcontent';

class Order extends Component {
    render() {
        return(
            <Router>
                <Route exact path="/" component={Home} />
                <Route path="/pcontent/:id" component={Pcontent} />
            </Router>
        )
    }
}