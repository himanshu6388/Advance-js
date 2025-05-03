// async js
// code do  parkar ka hata hai -> sync async

// sync code turant  chalta hai
// asynnc  code baad mein chalta hai

// async code sabse  pahle jaata hai webAPI pe, jab waha par ye resovle ho jaata hai to callstack me aa jata hai


// function getDetails(user, cb){
//     setTimeout(() => {
//         console.log("Sending the request to intagram......");
        
//     }, 1000);

//     setTimeout(() => {
//         console.log("Fetching Data.");
        
//     }, 3000);

//     setTimeout(() => {
//        cb();
        
//     }, 5000);

// }


// getDetails("Himanshu Verma",function(){
//     console.log("Data saved in gallery");
    
// })



// function stepOne(cb){
//     console.log("Step 1");
//     cb();
    
// }
// function stepTwo(cb){
//     console.log("Step 2");
//     cb();
    
// }
// function stepThree(cb){
//     console.log("Step 3");
//     cb()
    
// }
// function stepFour(cb){
//     console.log("Step 4");
//     cb();
    
// }

// stepOne(()=>{
//     stepTwo(()=>{
//         stepThree(()=>{
//             stepFour(()=>{
//                 console.log("All function Executed.");
                
//             })
//         })
//     })
// })









// 
new Promise(function(res,  rej){
    console.log("Instagram jao data lao");
    console.log("Instagram mein data collect mein error aaya");

});