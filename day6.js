function isPrime(num){
    let factorsCount = 0;
    let factors = [];
    for(let i=1 ; i<=Math.sqrt(num); i++){
        if(num % i === 0){
            factors.splice(factors.length/2,0,i)
            const otherPair = num/i
            if(i!==otherPair){
            factors.splice(factors.length/2+1,0,otherPair)
            }
        }

    }

    if(factors.length === 2){console.log("Prime")} else {console.log( "not Prime")}
// console.log(factors)

}

isPrime(18)

function findPrimeNumbers(num,limit){
    for(let i=1;i<=Math.sqrt(num);i++){
        
    }

}