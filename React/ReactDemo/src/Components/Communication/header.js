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
                <button onClick={this.props.run}>Get parent's News fnc run</button>
                <br/><br/>
                <button onClick={this.props.news.getData}>Get news Component's getData Fnc</button>
                <br/><br/>
                <button onClick={this.getNews}>get News Comnponent Fnc</button>
                <br/><br/>
                <button onClick={ this.props.news.getChildData.bind(this,'Header=>News') }>Child Comnponent send data to Parent</button>
            </div>
        )
    }
}

export default Header;