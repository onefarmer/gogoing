import React, { Component } from 'react';

class ReactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            msg:"请填写你的信息",
            name:'',  
            sex:'1',     
            city:'',      
            citys:[ 
                
                '北京','上海','深圳'            
            ],
            hobby:[   
                {  
                    'title':"睡觉",
                    'checked':true
                },
                {  
                    'title':"吃饭",
                    'checked':false
                },
                {  
                    'title':"敲代码",
                    'checked':true
                }
            ],
            info:''   
        };
        this.handleInfo=this.handleInfo.bind(this);
    }
    //阻止submit的提交事件
    handelSubmit=(e)=>{
        e.preventDefault();    
        this.refs.yourInfo.innerHTML += `
            姓名：${this.state.name}，
            性别：${this.state.sex===1?"男":"女"}，
            居住地：${this.state.city}，
            爱好：${this.state.hobby.map((item)=>{
                return item.checked?item.title:null
            })}，
            备注信息：${this.state.info}<br/>
        `
        console.log(this.state.name,this.state.sex,this.state.city,this.state.hobby,this.state.info);       
    }
    handelName=(e)=>{
        this.setState({
            name:e.target.value
        })
    }
    // 设置性别
    handelSex=(e)=>{
        this.setState({
            sex:e.target.value
        })
    }
    handelCity=(e)=>{
        this.setState({
            city:e.target.value
        })
    }
    handelHobby=(key)=>{
        var hobby=this.state.hobby;
        hobby[key].checked=!hobby[key].checked;
        this.setState({
            hobby:hobby
        })
    }
    handleInfo(e){
        this.setState({
            info:e.target.value
        })
    }
    render() {
        return (
            <div>
                <h5>{this.state.msg}</h5>
                <form onSubmit={this.handelSubmit} style={{"border":"1px solid #e0e0e0","padding":"10px"}}>
                    <span>用户名  </span>
                    <input type="text" value={this.state.name}  onChange={this.handelName}/> 
                    <br/><br/>
                    <span>性别  </span>
                    <input type="radio" value="1" checked={this.state.sex==1}  onChange={this.handelSex}/>男 
                    <input type="radio"  value="2" checked={this.state.sex==2}  onChange={this.handelSex}/>女
                    <br/><br/>
                    <span>居住城市  </span>  
                        <select value={this.state.city} onChange={this.handelCity}>
                            {
                                this.state.citys.map(function(value,key){
                                    return <option key={key}>{value}</option>
                                })
                            }                           
                        </select>
                    <br/><br/>
                    <span>爱好  </span>   
                    {
                        // 注意this指向
                        this.state.hobby.map((value,key)=>{
                            return (
                                <span key={key}>
                                    <input type="checkbox"  checked={value.checked}  onChange={this.handelHobby.bind(this,key)}/> {value.title} 
                                </span>
                            )
                        })
                    }
                    <br/><br/>
                    <span>备注：</span>
                    <textarea vlaue={this.state.info}  onChange={this.handleInfo} row='20' style={{"resize":"none" }} /><br/><br/>
                    <input type="submit"  defaultValue="提交"/>
                    <br/>
                </form>
                <div style={{"border":"1px solid #e0e0e0","padding":"10px","margin":"10px 0 0 0"}} ref='yourInfo'></div>
            </div>
        );
    }
}

export default ReactForm;
