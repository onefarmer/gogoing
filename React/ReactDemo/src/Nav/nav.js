import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import routes from './navRouter';
import './nav.css';

export default class routerShop extends Component {
    render(){
        return(
            <Router>
                <div className='navWrap'>
                    <nav>
                        <Link to = "/">父子传值实例</Link>
                        <Link to = "/message">父子传值实例</Link>
                    </nav>
                    <div className='contentWrap'>
                    {
                        routes.map((route,key)=>{
                            if(route.exact){
                                return <Route key={key} exact path={route.path}                     
                                render={props => (
                                <route.component {...props} routes={route.routes} />
                                )}
                                />
                            }
                            else{
                                return <Route  key={key}  path={route.path} 
                                render={props => (
                                <route.component {...props} routes={route.routes} />
                                )}
                                />
                            }
                        })
                    }   
                    </div>
                </div>
            </Router>
        )
    }
}
