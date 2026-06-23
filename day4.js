function splitNumToDigit(n){
    let arr= []
    let num = `${n}`
    for(let i =0; i< num.length; i++){
        arr.push(Number(num[i]))
    }
    console.log(arr)
}

splitNumToDigit(438593985)


function removeDecimalPoint(n){
        let num = `${n}`
        let result = ''
    for (let i = 0 ; i<num.length; i++){
        if(num[i]==='.') continue;
        result+=num[i]
    }
    console.log(Number(result))
}
removeDecimalPoint(12.34)