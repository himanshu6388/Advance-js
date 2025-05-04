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



let result = document.getElementById('result')
document.getElementById('myform').addEventListener("submit",function(event){
    event.preventDefault();

    

    const input = document.getElementById('inputText').value;
document.querySelector('.btn').addEventListener("click",function(){

fetch(`https://api.github.com/users/${input}`)
.then(res => res.json()) 
.then(data =>{
    result.innerHTML= `
    <h2>${data.name || data.login}</h2>
     <img src="${data.avatar_url}" alt="Avatar" width="100">
        <p><strong>Username:</strong> ${data.login}</p>
        <p><strong>Bio:</strong> ${data.bio || 'No bio available'}</p>
        <p><strong>Followers:</strong> ${data.followers}</p>
        <p><strong>Following:</strong> ${data.following}</p>
        <p><strong>Public Repos:</strong> ${data.public_repos}</p>
        <a href="${data.html_url}" target="_blank">View Profile</a>
    `
})
})



})

