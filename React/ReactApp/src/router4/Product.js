import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[
                {id:'A1',title:'商品1'},
                {id:'A2',title:'商品2'},
                {id:'A3',title:'商品3'},
                {id:'A4',title:'商品4'}
            ]
        };
    }
    render() {
        return (         
            <div>
                <h3>Product</h3>
                <ul>
                    {
                        this.state.list.map((value,key)=>{
                            return (
                                <li key={key}>                                   
                                    <Link to={`/productDetail?id=${value.id}`}>{value.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}
export default Product;