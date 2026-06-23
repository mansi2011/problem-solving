// function printNumber(n){
//     for (let i=1; i<=n; i++){
//         console.log(i)
//     }

// }

// printNumber(5)

// function printNumberInReverse(n){
//     for (let i=1; i<=n; i++){
//         console.log(n-i +1)
//     }

// }

// printNumberInReverse(5)

function checkEvenNumbers(n){
    let sum = 0
    for(let i=1; i<=n; i++){
        if(i%2 === 0){
            sum = sum+i
        }
    }
    console.log(sum)
}
checkEvenNumbers(10)

function sumOfNumbers(n){
    let sum =0;
    for(let i =1; i<=n;i++){
        sum= sum+i

    }
    console.log(sum)
}

sumOfNumbers(5)

function factorialOfNum(n){
    let result = 1
    for(let i=1; i<=n; i++){
        result= result * i
    }

    console.log(result)
}

factorialOfNum(5)

function printSquare(n){
    let result
    for(let i=1; i<=n; i++){
        result = i*i
        console.log(result)
    }

}

printSquare(5)


function divisibleBy3and5(n){
    for(let i=1; i<=n; i++){
        if(i%3 ===0 && i%5 ===0){
            console.log(i)
        }
    }

}

divisibleBy3and5(30)

function sumOfOddNum(n){
    let sum =0
    for(let i =1; i<=n; i++){
        if(i%2 !== 0){
            sum = sum +i
        }
    }

    console.log(sum)
}

sumOfOddNum(10)

function cubeOfNum(n){
    let result 
    for(let i =1; i<=n; i++){
            result = i*i*i
            console.log(result)
    }

}

cubeOfNum(5)

function printPerfectSquare(n){
    for(let i=2; i*i<=n; i+=2){
            console.log(i*i,"perfect square")
    }
}

printPerfectSquare(20)