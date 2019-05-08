
const path = require('path') // node自带,path模块引入，路径问题
const HtmlWebpackPlugin = require('html-webpack-plugin') // 自动打包
const CleanWebpackPlugin = require('clean-webpack-plugin') // 清除旧的打包文件
const webpack = require('webpack') // 模板
const Uglify = require('uglifyjs-webpack-plugin') // 压缩打包JS
const ExtractTextPlugin = require('extract-text-webpack-plugin') // 分离CSS
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 新的分离CSS插件

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
        new Uglify(),// 打包JS压缩
        //new ExtractTextPlugin('css/index.css'),// 分离CSS，打包到指定路径
        new MiniCssExtractPlugin({// 新插件分离CSS，效果同ExtractTextPlugin
            filename:'css/index.css',// 提取文件名
        }), 
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
    /*
        loader 加载器，转化器
        处理css style-loader css-loader
    */
    module:{
        // 规则
        rules:[
            {
                test:/\.css$/,  // 以.css结尾的正则
                //use:['style-loader','css-loader']
                //loader:['style-loader','css-loader'], // 第二种写法
                /*
                    第三种写法
                    use:[
                        {loader:"style-loader"},
                        {loader:"css-loader"},
                    ]
                */
               // 如果分离css，以上不需要，如果使用MiniCssExtractPlugin，此配置不需要
               /*
               use:ExtractTextPlugin.extract({
                   fallback:'style-loader', // 类似于回滚
                   use:'css-loader',
                   publicPath:'../'  //配置图片路径
               })
               */
              use:[
                  {
                      loader:MiniCssExtractPlugin.loader,
                      options:{
                          publicPath:'../'
                      }
                  },
                  'css-loader'
              ]
            },
            {
                test:/\.(.png|jpg|gif)$/,
                use:[
                        {
                            loader:'url-loader',
                            options:{
                                limit:50, // 转化Img,控制字节，取消base64 
                                outputPath:'image' // 图片出口文件
                            }   
                        }
                ]
            }
        ]
    },
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
    },
    //模板环境
    //mode:'development'  如果package.json 已配置--mode development"，无需要配置
}