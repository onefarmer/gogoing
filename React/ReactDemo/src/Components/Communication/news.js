import React,{Component} from 'react'

import Footer from './footer'
import Header from './header'

export default class News extends Component{
    constructor(props){
        super(props)
        this.state = {
            title:'Communication',
            description:'News Component'
        }
    }
    run=()=>{
        alert('i am parent run func')
    }
    // 获取子组件数据
    getChildData=(result)=>{
        console.log(this,result)
        this.setState({
            description:result
        })
    }
    // 传入this 亦能获取子级数据
    getData=()=>{
        alert(this.state.title+'getData');    
    }
    // 获取Footer组件run方法
    getFooter=()=>{
        this.refs.footer.run()
    }
    render(){
        return(
            <div className='news_C'>
                <Header title={this.state.title}  run={this.run}  news={this} />
                <br/>
                <span>Home Content -- >Get Child data=> {this.state.description}</span>
                <br/>
                <button onClick={this.getFooter}>Get Footer Component run fnc</button>
                <br/>
                <Footer  ref='footer'/>
            </div>
        )
    }
}