// function stepOne(){
//     return new Promise((res,  rej)=>{
//         console.log("Step 1");
//         res();
        
//     })
    
// }
// function stepTwo(){
//     return new Promise((res,  rej)=>{
//         console.log("Step 2");
//         res();
//     })
    
// }
// function stepthree(){
//     return new Promise((res,  rej)=>{
//         console.log("Step 3");
//         res() ;       
//     }
//     )
    
// }

// stepOne(()=>{
//     stepTwo(()=>{
//         stepthree(()=>{
//             console.log("all step completed");
            
//         })
//     })
// })


// stepOne()
// .then(stepTwo())
// .then(stepthree())
// .then(function(){
//     console.log("All Step done.");
// })




//1.✅ Simulate a food delivery step
// Task: Create a function orderFood that  returns a Promise. It  should resolve after 2 seconds with "🍕 Pizza delivered !"

// Bouns: Add a chance to reject with "🚫 delivery faild"


function orderFood(){
    return new Promise((res, rej)=>{
        setTimeout(() => {
           
            let chance = Math.random()<0.7;
            if(chance) res();
            else rej();
        }, 2000);
    })
}


orderFood().then(function(){
    console.log("🍕 Pizza Delivered!");
})
.catch(function(){
    console.log("🚫 delivery faild");
    
})



