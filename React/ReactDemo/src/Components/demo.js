import React from 'react';

class Home extends React.Component{
    // 子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。如果不调用super方法，子类就得不到this对象
    constructor(props){
        super(props);   //固定写法
        this.state={  
            username:'coco'
        }   
    }
    getName=()=>{
        alert(this.state.username);
    }
    //第三种改变this指向的方法
    setData=()=>{
        //改变state的值
        this.setState({
            msg:"我是一个home组件 这是改变后的值"
        })
    }
    // 等同于 -> setName(str){}
    setName=(str)=>{
        //改变state的值
        this.setState({
            username:str
        })
    }
    render(){
        return(
            <div>
                <button onClick={this.getName}>获取数据--第三种改变this指向的方法</button>
                <br />
                <button onClick={this.setData}>改变state里面的值</button>
                <br />
                <h2>{this.state.username}</h2>
                <button onClick={this.setName.bind(this,'张三')}>执行方法传值</button>
               {/* <button onClick={this.setName.bind(this,'张三','李四')}>执行方法传值</button> */}                 
            </div>
        )
    }    
}
export default Home;
