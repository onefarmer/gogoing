
const path = require('path') // node自带,path模块引入，路径问题
const HtmlWebpackPlugin = require('html-webpack-plugin') // 自动打包
const CleanWebpackPlugin = require('clean-webpack-plugin') // 清楚打包
const webpack = require('webpack')

// 导出模块
module.exports = {
    entry:{
        index:'./src/index.js'
    },  
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].bundle.js'
    },
    // 插件
    plugins:[
        // https://www.npmjs.com/package/html-webpack-plugin 
        // CleanWebpackPlugin,HtmlWebpackPlugin等插件api官网具体查看
        new CleanWebpackPlugin(), // new CleanWebpackPlugin(['dist'])-报错 
        new webpack.HotModuleReplacementPlugin(), // 启动热更新，有的会报错，目前新版本不需要
        new HtmlWebpackPlugin({
            // 各个页面对应各自模板文件（打包的JS），如果没有所有打包的JS都会到这个页面
            chunks:['index'],
            filename:'index.html',// 生成文件名
            // 压缩
            minify:{
                //collapseWhitespace:true, //折叠空白区域
                //removeAttributeQuotes:true // 删除双引号
            },
            hash:true, // 消除缓存
            // <%= htmlWebpackPlugin.options.title%> <%%>全局输出,模板页面不能注释
            title:'i love u', // 页面标题，一定得在模板里面使用 
            template:'./src/index.html'// 模板地址       
        })
    ],
    devServer:{
        //设置服务器访问的基本目录
        contentBase:path.resolve(__dirname,'dist'),
        // 服务器IP地址 localhost
        host:'localhost',
        // 设置端口
        port:8090,
        // 或者可以在package.json文件中配置 "dev":"webpack-dev-server --mode development"
        open:true, // 自动打开页面
        // 热更新
        hot:true
    }
}