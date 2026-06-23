function minMaxFromArray(arr){
    let min = arr[0];
    let max = arr[0];

    for(let i =1; i<arr.length; i++){
        if(min>arr[i]){
            min = arr[i]
        }
        if(max< arr[i]){
            max = arr[i]
        }
    }

    return [min, max]
}

console.log(minMaxFromArray([10, 25, 3, 18]))

function reverseArray(arr){
    let leftIndex = 0
    let rightIndex = arr.length - 1;

    while(leftIndex < rightIndex){
        let temp = arr[leftIndex];
        arr[leftIndex] = arr[rightIndex]
        arr[rightIndex] = temp
        leftIndex++
        rightIndex--
    }

    return arr

}

console.log(reverseArray([1, 2, 3, 4, 5, 6]))

function checkSortedArray(arr){
    for(let i = 0; i< arr.length-1; i++){
        if(arr[i] > arr[i+1]){
            return false
        }
    }
    return true 
}

console.log(checkSortedArray([1, 2, 3, 4, 5, 6]))

function removeDuplicate(arr){
    return arr.filter((ele,index) => arr.indexOf(ele) === index )
}

console.log(removeDuplicate([1, 2, 2, 3, 3, 4]))

function findSecondMaxElement(arr){
    let max = arr[0];
    let secondMax = arr[0]
    for(let i = 0; i<arr.length; i++){
        if(max<arr[i]){
            max = arr[i]
        }
    }

    for(let i=0; i<arr.length; i++){
        if(arr[i]<max){
            secondMax = arr[i]
        }
    }


    return {max, secondMax}
}

console.log(findSecondMaxElement([10, 20, 4, 45, 99]))

function rotateArrayByValueTimes(arr,k){
    let n = arr.length
    let value = k % n

    if(value>0){
        let part1 = arr.slice(-k)
        let part2 = arr.slice(0,n-k)

        return part1.concat(part2);
    }
}

console.log(rotateArrayByValueTimes([1, 2, 3, 4, 5], 2))

function checkEqualArray(arr1, arr2){
    for(let i=0; i<arr1.length; i ++){
        if(arr1[i]  !== arr2[i]){
            return false;
        }
    }
    return true
}

console.log(checkEqualArray([1, 2, 3] , [1, 2, 3]))

function countEvenOdd(arr){
    let even = []
    let odd = []
    for(let i = 0; i< arr.length; i++){
        if(arr[i]%2 === 0){
            even.push(arr[i])
        }else{
            odd.push(arr[i])
        }
    }

    return {"even":even.length,"odd": odd.length}
}

console.log(countEvenOdd([2, 5, 7, 8, 10]))

function findSumEqualtoValuePair(arr,value){
    let seen = new Set()
    let result = []
    for(let i=0; i<arr.length; i++){
        let complement = value - arr[i]
        if(seen.has(complement)){
            result.push([complement,arr[i]])
        }

        seen.add(arr[i])
    }

    return result
}

console.log(findSumEqualtoValuePair([1, 2, 3, 4, 5],6))

function shiftFirstToLast(arr){
    let arr1 = arr.slice(0,1)
    let arr2 = arr.slice(1,arr.length)
    return arr2.concat(arr1)
}


console.log(shiftFirstToLast([1, 2, 3, 4, 5]))

function countFreqofEl(arr,el){
    let count = 0
    for(let i = 0; i<arr.length-1; i++){
        if(arr[i] === el){
            count++
        }
    }
    return count
}


console.log(countFreqofEl([1, 4, 4, 4, 2],4))
