import React,{Component} from 'react'

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            description:'Home Component',
            // 传入Header
            title:'Home'
        }
    }
    render(){
        return(
            <div>
                <Header title={this.state.title} />
                <br/><hr/><br/>
                <span>首页Home</span>
            </div>
        )
    }
}

export default Home;