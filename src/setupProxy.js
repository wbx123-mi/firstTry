const createProxyMiddleware = require("http-proxy-middleware")//初始化react时候已经引进来了 
//proxy代理   
module.exports = function(app){
    app.use(
        createProxyMiddleware('/api',{ //匹配到  /api 就触发代理  代理到目标target上面去
            target:'http://localhost:5001',//请求转发到这里
            changeOrigin:true,//请求发起源头 不加的话服务器会识别原始端口 加上之后服务器识别的是target端口 
            pathRewrite:{'^/api':''}//请求时添加api来匹配 之后再重写去掉 不然请求的时候把api带进了url中 会导致报错
        })
    )
}