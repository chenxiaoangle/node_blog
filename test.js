/**
 * Created by tomchou on 2017/3/25.
 */



//学习Promise
//typeof Promise === 'function'


//prototype ==> then/catch

//static methods ==> all/race/resolve/reject

//first step: new Promise

let p = new Promise((resolve,reject)=>{
        setTimeout(reject,1000,'hello world')
    });
console.log(p)
console.log(1)
//then has two parameters , first is dealing with resolve,second is dealing with reject
p.then(val=>
    //deal with resolve
    console.log(`resolve then val is ${val}`),
        val=>
        //deal with reject
        console.log(`reject val is ${val}`)
);
//catch is dealing with the reject result.

setTimeout(()=>p.catch(val=>console.log(`another val is ${val}`)),2000)
