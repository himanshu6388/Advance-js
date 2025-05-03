// Chained Promises : User -> Posts ->  Comments

// Task:
// 1. Create getUser()- > resolves with {id:1, name:"Himanshu"}
// 2. getPosts(userId) -> resolves with list of  post titles
// 3. getComments(postId) -> resovles with comments
// Chain them togather using .then() and log the final output.


// function getUser(){
//     return new Promise((res,rej)=>{
//        setTimeout(() => {
//         res({id:1,  name:"Himanshu"}); 
//        }, 1000);
//     })
// }

// function getPosts(userId){
//     return new Promise((res, rej)=>{
//         res(["title1","title2"]);
//     })
// }

// function getComments(){
//     return new  Promise((res, rej)=>{
//         setTimeout(function(){
//             res(["great post"])
//         },1000)
//     })
// }

// getUser()
// .then(function(data){
//     console.log(`data fatched: ${data.name}`);
//     return getPosts(data.id)
// })
// .then(function(titles){
//     console.log(titles);
//     return getComments("adifjdfi")
// })
// .then(function(cmts){
//     console.log(cmts);
    
// })
// .finally(function(){
//     console.log("All data fatched");
// })



function fakeapicall(endpoint){
    const data= {
        users: ["Himanshu","deepak","Virendra"],
        post:["Hello","Hey","Namaste"]
    }

    let dealy = Math.random*2000+1000;
    return new Promise((res, rej)=>{
        setTimeout(() => {
            res(data[endpoint])
        },dealy);
    })
}

fakeapicall("users").then(function(data){
    console.log(data);
    
})
fakeapicall("post").then(function(data){
    console.log(data);
    
})