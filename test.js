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
//then has two premeters , first is dealing with resolve,second is dealing with reject
p.then(val=>
    //deal with resolve
    console.log(`resolve then val is ${val}`),
        val=>
        //deal with reject
        console.log(`reject val is ${val}`)
);
setTimeout(()=>p.catch(val=>console.log(`another val is ${val}`)),2000)
