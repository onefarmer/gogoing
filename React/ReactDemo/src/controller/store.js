import {EventEmitter} from 'events'

const Store = Object.assign({},EventEmitter.prototype,{
    list = [],
    getDodoListData:function(){
        return this.list;
    },
    addDodoData:function(data){
        this.list.push(data)
    },
    emitChage:function(){
        // 通知-触发事件
        this.emit("change")
    },
    addChangeListener:function(callback){
        // 注册回调
        this.on("change",callback)
    }
})

export default Store;