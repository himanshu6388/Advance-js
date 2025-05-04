function getUserInfo(){
    return new Promise((res,  rej)=>{
        setTimeout(() => {
            res({id:1, name:"himanshu"})
        }, 1000);
    })
}


function getUserPic(id){
    return new Promise((res, rej)=>{
        setTimeout(() => {
            res(["pic1","pic2","pic3"])
        }, 2000);
    })
}

getUserInfo().then(function(data){
    console.log(data);
    return getUserPic(data.id)
})
.then(function(data){
    console.log(data);
    
})