import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';

export default class FetchJsonp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[]
        };
    }
    getData=()=>{
        let api="http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20";
        fetchJsonp(api).then( response => response.json()).then( (json) =>{
            this.setState({
                list:json.result
            })
        }).catch( (err)=>{
            console.log('parsing failed', err)
        })
    }
    render() {
        return (
            <div className="Jsonp-wrap">
                <button onClick={this.getData}>Jsonp Get Data</button><br/>
                <ul>              
                    {
                        this.state.list.map((value,key)=>{
                            return <li key={key}>{value.title}</li>
                        })
                    }                    
                </ul>
            </div>
        )
    }
}