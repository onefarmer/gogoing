import React,{Component} from 'react'

class Header extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    // 组件News getData Fnc
    getNews=()=>{
        this.props.news.getData();
    }
    render(){
        return(
            <div className="header_C">
                <h2 className="parentTitle">{this.props.title}</h2>
                <button onClick={this.props.run}>获取NEWS方法</button>
                <br/><br/>
                <button onClick={this.props.news.getData}>获取GETDATA方法</button>
                <br/><br/>
                <button onClick={this.getNews}>props调用NEWS组件方法</button>
                <br/><br/>
                <button onClick={ this.props.news.getChildData.bind(this,'Header=>News') }>改变NEWS父组件值</button>
            </div>
        )
    }
}

export default Header;