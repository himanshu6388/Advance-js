// function getUserInfo(){
//     return new Promise((res,  rej)=>{
//         setTimeout(() => {
//             res({id:1, name:"himanshu"})
//         }, 1000);
//     })
// }


// function getUserPic(id){
//     return new Promise((res, rej)=>{
//         setTimeout(() => {
//             res(["pic1","pic2","pic3"])
//         }, 2000);
//     })
// }

// getUserInfo().then(function(data){
//     console.log(data);
//     return getUserPic(data.id)
// })
// .then(function(data){
//     console.log(data);
    
// })



//fetch
// github api

document.querySelector('.btn').addEventListener("click",function(){
    
fetch("https://api.github.com/users/himanshu6388")
.then(res => res.json()) 
.then(data =>{
    console.log(data);
    
})
})