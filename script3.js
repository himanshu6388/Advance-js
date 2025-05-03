function stepOne(){
    return new Promise((res,  rej)=>{
        console.log("Step 1");
        res();
        
    })
    
}
function stepTwo(){
    return new Promise((res,  rej)=>{
        console.log("Step 2");
        res();
    })
    
}
function stepthree(){
    return new Promise((res,  rej)=>{
        console.log("Step 3");
        res() ;       
    }
    )
    
}

// stepOne(()=>{
//     stepTwo(()=>{
//         stepthree(()=>{
//             console.log("all step completed");
            
//         })
//     })
// })


stepOne()
.then(stepTwo())
.then(stepthree())
.then(function(){
    console.log("All Step done.");
})




