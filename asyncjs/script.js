console.log("hey");

setTimeout(function(){
    console.log('Hey 2');
    
},1000);

console.log("Hey 3");

// aapke code mein sabse pahle sychronous part chalta hai, synchronoous code ko js chalati hai main thread pe kyuki js single threaded hai , uska likha hua code chalna chaalu hota hai phale and main thred pe hamesha sabse pahle poora code finish hoga tab jaakar async code ke chalne ki baari aayegi
