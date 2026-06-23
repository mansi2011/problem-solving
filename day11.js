function findMissingNum(arr){
    let n = arr.length + 1
    let expectedSum = n*(n+1)/2
    let actualSum = 0

    for( let i = 0; i < arr.length; i++ ){
        actualSum += arr[i] 
    }

    let missingNum = expectedSum - actualSum
    return missingNum;
}

console.log(findMissingNum([1, 5, 2, 4]))

function moveAllZeroToEnd(arr){
    let position = 0
    for(const el of arr){
        if(el !== 0){
            arr[position] = el
            position ++
        }
    }

    while(position<arr.length){
        arr[position] = 0
        position ++
    }

    return arr
}

console.log(moveAllZeroToEnd([0, 1, 0, 3, 12]))

function findFirstRepeatingEl(arr){
    let frequency={}
    for(const el of arr){
        frequency[el] = (frequency[el] || 0) + 1;
    }
    for(const el of arr){
        if(frequency[el] > 1 ){
            return el
        }
    }
}

console.log(findFirstRepeatingEl([10, 10, 3, 4, 3, 5, 6]))

//Kadane Algorithm
function findMaxSumArr(arr){
    let maxSum = -Infinity;
    let currSum = 0

    for(const el of arr){
        currSum += el

    if(currSum > maxSum){
        maxSum = currSum;
    }

    if(currSum < 0){
        currSum = 0
    }

    }

    return maxSum
}

console.log(findMaxSumArr([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

function findLongestSubarray(arr,k){
    let maxSum = -Infinity;
    let currSum = 0;
    let maxSubArr = []

    for(let i = 0; i<arr.length; i++){
        currSum += arr[i] 

        if(currSum > maxSum){
            maxSum = currSum
        }

        if(currSum < 0){
            currSum = 0
        }

        console.log(maxSum)
        if(maxSum === k){
        maxSubArr.push(arr[i])
        }
    }

    return maxSubArr
}

console.log(findLongestSubarray([1, 2, 3, 4, 5],9))