import React,{Component} from 'react'
import axios from 'axios';

class Axios extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[]
         };
    }
    getData=()=>{
        // 接口后台允许了跨域
        let api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20';
        axios.get(api).then( (response)=>{
            // this指向
            this.setState({
                list:response.data.result
            })
        }).catch(function(err){
            console.log(err)
        })
    }
    render(){
        return(
            <div className="Axios-Wrap">
                <button onClick={this.getData}>Axios Get Data</button><br/>
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
export default Axios;