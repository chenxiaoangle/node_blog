//主要核心逻辑入口


const fs = require('fs');
const path = require('path')
const staticServer = require('./static-server')
class App {
    constructor(){
    }
    initServer(){
        return (request,response)=>{
            let { url } = request;
            //每个请求逻辑 根据url进行分发
            let body = staticServer(url)
            response.writeHead(200,'resolve ok',{'X-powered-by':'node.js'})
            response.end(body)
        }
    }
};





module.exports= App;