// console.log("hey");

// setTimeout(function(){
//     console.log('Hey 2');
    
// },1000);

// console.log("Hey 3");

// aapke code mein sabse pahle sychronous part chalta hai, synchronoous code ko js chalati hai main thread pe kyuki js single threaded hai , uska likha hua code chalna chaalu hota hai phale and main thred pe hamesha sabse pahle poora code finish hoga tab jaakar async code ke chalne ki baari aayegi


// sync code  main thread  mei chalna chaalu ho jaatta hai, and async code ko webAPI behind the scene  operate karna challu kar  deti hai,  jab ye code complete hota  hai tab ye code ka completion  move ho jata hai callback queue main.

console.log("hey");

setTimeout(() => {
    console.log("Hey 3");
    
}, 0);
Promise.resolve().then(function(){
    console.log("Hey  2");
    
})

console.log("Hey 4");

function abcd(cb){
    cb( )
}

abcd(function(){

})