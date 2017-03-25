/**
 * Created by tomchou on 2017/3/25.
 */



//学习Promise
//typeof Promise === 'function'


//prototype ==> then/catch

//static methods ==> all/race/resolve/reject

//first step: new Promise

let p = new Promise((resolve,reject)=>{
    resolve(1)
});
console.log(p)

p.then(val=>{
    console.log(`then val is ${val}`)
})