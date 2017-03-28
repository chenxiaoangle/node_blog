//主要核心逻辑入口


const fs = require('fs');
const path = require('path')
const staticServer = require('./static-server')
const apiServer = require('./api')
class App {
    constructor(){
    }
    initServer(){
        return (request,response)=>{
            let { url } = request;

            //所有以action结尾的请求认为是ajax


            if(url.match('action')){
                let body = apiServer(url);
                response.writeHead(200,'resolve ok',{'X-powered-by':'node.js'})
                response.end(body)
            }else{
                let body = staticServer(url)
                response.writeHead(200,'resolve ok',{'X-powered-by':'node.js'})
                response.end(body)
            }
            //每个请求逻辑 根据url进行分发

        }
    }
};





module.exports= App;