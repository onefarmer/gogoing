
const path = require('path') // node自带,path模块引入，路径问题
const HtmlWebpackPlugin = require('html-webpack-plugin') // 自动打包

// 导出模块
module.exports = {
    entry:{
        index:'./src/index.js',
        index2:'./src/index2.js',
    },  
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].bundle.js'
    },
    // 插件
    plugins:[
        // https://www.npmjs.com/package/html-webpack-plugin
        new HtmlWebpackPlugin({
            // 压缩
            minify:{
                collapseWhitespace:true, //折叠空白区域
                removeAttributeQuotes:true // 删除双引号
            },
            hash:true, // 消除缓存
            // <%= htmlWebpackPlugin.options.title%> <%%>全局输出 模板页面不能注释
            title:'i love u', // 页面标题，一定得在模板里面使用 
            template:'./src/index.html'// 模板地址       
        })
    ]
}