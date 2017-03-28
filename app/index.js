//此处是服务端主要核心逻辑入口


const fs = require('fs');
const path = require('path');
const staticServer = require('./static-server');
const apiServer = require('./api');
class App {
    constructor(){
    }
    initServer(){
        return (request,response)=>{
            let { url } = request;

            //所有以action结尾的请求认为是ajax
            //body 是返回的字符串
            let body='';
            let headers={};
            if(url.match('action')){
                apiServer(url).then(val=>{
                    body = JSON.stringify(val)
                    headers = {
                        'Content-Type':'application/json'
                    };
                    let finalHeader = Object.assign(headers,{'X-powered-by':'node.js'});
                    response.writeHead(200,'resolve ok',finalHeader);
                    response.end(body);
                });

            }else{
                 staticServer(url).then((body)=>{
                    let finalHeader = Object.assign(headers,{'X-powered-by':'node.js'});
                    response.writeHead(200,'resolve ok',finalHeader);
                    response.end(body);
                })

            }

            //每个请求逻辑 根据url进行分发

        };
    }
}





module.exports= App;