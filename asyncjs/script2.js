// async js
// code do  parkar ka hata hai -> sync async

// sync code turant  chalta hai
// asynnc  code baad mein chalta hai

// async code sabse  pahle jaata hai webAPI pe, jab waha par ye resovle ho jaata hai to callstack me aa jata hai


function getDetails(user, cb){
    setTimeout(() => {
        console.log("Sending the request to intagram......");
        
    }, 1000);

    setTimeout(() => {
        console.log("Fetching Data.");
        
    }, 3000);

    setTimeout(() => {
       cb();
        
    }, 5000);

}


getDetails("Himanshu Verma",function(){
    console.log("Data saved in gallery");
    
})