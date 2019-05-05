
const path = require('path') // node自带,path模块引入，路径问题
console.log( path.resolve(__dirname,'dist') )
// 导出模块
module.exports = {
    // 入口配置
        // entry:['./src/index.js','./src/index2.js'] // 多入口
    /*
        entry:{
            entry:'./src/index.js'// 入口文件，命名随意
        },
    // 出口配置
        output:{
            //path:__dirname+'/dist',// Node提供的__dirname为绝对路径，
            path:path.resolve(__dirname,'dist'), // 绝对路径合并,需要require('path')
            filename:'bundle.js'// 出口文件,不需要写文件前缀
        },
    */
      
        // 多入口,webpack4不得取名index
        entry:{
            index:'./src/index.js',
            index2:'./src/index2.js',
        },  
        output:{
            path:path.resolve(__dirname,'dist'),
            filename:'[name].bundle.js'
        },
    
    // module 模块， 配置rules规则 loaders
    module:{

    },
    // 插件
    plugins:[],
    // 开发服务器
    devServer:{}
}