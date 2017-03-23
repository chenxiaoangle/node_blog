//主要核心逻辑入口


const fs = require('fs');

class App {
    constructor(){
    }
    initServer(){
        return (request,response)=>{
            let { url } = require;
            //每个请求逻辑
            if (url == '/css/index.css'){
                fs.readFile('./public/css/index.css', 'utf-8',(err,data)=>{
                    response.end(data)
                })
            }
            if (url == '/js/index.js'){
                fs.readFile('./public/js/index.js', 'utf-8',(err,data)=>{
                    response.end(data)
                })
            }
            if (url == '/'){
                fs.readFile('./public/index.html', 'utf-8',(err,data)=>{
                    response.end(data)
                })
            }
        }
    }
};





module.exports= App