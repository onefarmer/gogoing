import React,{Component} from 'react'

import Footer from './footer'
import Header from './header'

export default class News extends Component{
    constructor(props){
        super(props)
        this.state = {
            title:'父子传值',
            description:'News Component'
        }
    }
    // 箭头写法不需要BIND
    run=()=>{
        alert('NewsPage Run 方法')
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
        alert('我是NEWS GETDATA');    
    }
    // 通过ref => 获取Footer组件run方法
    getFooter=()=>{
        this.refs.footer.run()
    }
    render(){
        return(
            <div className='news_C'>
                <Header title={this.state.title}  run={this.run}  news={this} />
                <br/>
                <span>获取子组件值： {this.state.description}</span>
                <br/><br/>
                <button onClick={this.getFooter}>Get Footer Component run fnc</button>
                <br/>
                <Footer ref='footer'/>
            </div>
        )
    }
}