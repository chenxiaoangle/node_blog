/*
* api server for recognizing ajax request or some special requests.此处是服务端
* */

module.exports=(url)=>{
    let apiMap={
        '/list.action':['guitar','达拉蹦吧','books'],
        '/user.action':['myname','myage','myweight']
    }


    return apiMap[url];

}