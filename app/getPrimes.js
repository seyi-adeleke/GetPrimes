'use strict';


exports.getPrimes = function(n){
    let primes=[];
    if(n=undefined){
        return primes;
    }
    if(n<0 || n == 0){
        return primes;

    }
    if(typeof n !== "number"){
        return primes
    }
    for(let i=0;i<=n;i++){
        if(isPrime(i)){
            primes.push(i);
        }
    }
    return primes;
};



const isPrime = (number) =>{
    if (number == 2){
        return true
    }
    if (number < 2 || number % 2 == 0){
        return false
    }

    for (var i = 2; i <= Math.sqrt(number); i++){
        if (number % i == 0) {
            return false;
        }
    }

    return true;
};

