import React  from 'react';
import storage from '../model/storage';

class GodoList extends React.Component{
    constructor(){
        super();  // 用在构造函数中，必须在使用this之前调用
        this.state = {                     
            username:'',
            list: [

            ]
        } 
    }
    addData=(e)=>{
            var temp = this.state.list;  /*获取list的值*/
            temp.push({
                title:this.refs.username.value,
                checked: true
            });
            this.setState({  /*改变数据*/
                list:temp
            })
            this.refs.username.value = ''; // 清空
            storage.set('MyKey',temp);
    }        
    removeData=(key)=>{
        var temp = this.state.list;  /*获取list的值*/
        temp.splice(key,1);
         this.setState({  /*重新复制*/
            list:temp
        })    
        //执行缓存数据
        storage.set('MyKey',temp);
    }
    checkboxChange(key,checked){
        var list=this.state.list;
        list[key].checked=!checked;
        this.setState({
            list:list
        })
        //执行缓存数据
        storage.set('MyKey',list);
    }
    componentDidMount(){
        let todolist=storage.get('MyKey');
        if(todolist){
            this.setState({
                list:todolist
            })
        }
    }
    render() {      
        return (
            <div className="GotoList" title={this.props.title}>
                <h2>{this.props.title}</h2>
                <input type="text" ref="username"/>
                <button onClick={this.addData}>+增加</button>
                <br />
                <h2>进行中</h2>
                <ul>
                    {
                        this.state.list.map((value,key)=>{
                            // 判断选中状态
                            if(value.checked){
                                return(                                    
                                    <li key={key}>
                                        <input type="checkbox" checked={value.checked} onChange={this.checkboxChange.bind(this,key,value.checked)}/>                                        
                                        {value.title}                                                                                        
                                        ----- <button onClick={this.removeData.bind(this,key)}>删除</button>                                                                                     
                                    </li>                             
                                )
                            }
                        })
                    }
                </ul>
                <h2>已完成</h2>
                <ul>
                    {
                        this.state.list.map((value,key)=>{
                            if(!value.checked){
                                return(                                    
                                    <li key={key}>
                                        <input type="checkbox" checked={value.checked} onChange={this.checkboxChange.bind(this,key,value.checked)}/>                                      
                                        {value.title}                                              
                                        ----- <button onClick={this.removeData.bind(this,key)}>删除</button>                                                                                 
                                    </li>                                        
                                )
                            }
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default GodoList;