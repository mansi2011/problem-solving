function isSubString(str,subStr){
    for(let i=0; i<=str.length - subStr.length; i++){
        let match = true;
        for(let j=0; j<subStr.length;j++){
            if(str[i+j] !== subStr[j]){
                match = false
                break;
            }
        }
        if(match) return true
    }
    return false
}

console.log(isSubString("abcde", "cjd"));


function findIndexOf(str,subStr){
    for(let i=0; i<=str.length - subStr.length; i++){
        let match = true;
        for(let j=0; j<subStr.length;j++){
            if(str[i+j] !== subStr[j]){
                match = false
                break;
            }
        }
        if(match) return i
    }
    return -1
}

console.log(findIndexOf("abcde", "cd"));

function checkIsRotation(a,b){
    if(a.length !== b.length) return false;
    a = a+a
    for(i=0; i<= a.length - b.length; i++){
        let match = true;
        for(let j=0 ; j< b.length;j++){
            if(a[i+j] !== b[j]){
                match = false
            }
        }

        if(match) return true
    }

    return false
}

console.log(checkIsRotation("abcde", "eabcd"));


function frequencyOfWord(statement){
    let result = []
    let word = ''
    for(let i = 0; i < statement.length; i++){
        if(statement[i] !== ' '){
            word += statement[i]
        }else{
            if(word !== ''){
                result.push(word)
                word = ''
            }
        }
    }

    if(word!==''){
        result.push(word)
    }

    let frequency = {}
    for(i=0; i<=result.length-1;i++){
        frequency[result[i]] = (frequency[result[i]] || 0) + 1
    }
    return frequency
}

console.log(frequencyOfWord("i love coding and i love javascript"));

function isPangram(statement){
    let lowercaseStatement = statement.toLowerCase()
    let distinctSeen = {}

    for(i=0; i<= lowercaseStatement.length; i++){
        if(lowercaseStatement[i] >= "a" && lowercaseStatement[i] <= "z"){
            distinctSeen[lowercaseStatement[i]] = true
        }
    }
    if(Object.keys(distinctSeen).length === 26){
        console.log("pangram")
    }else{
        console.log("not pangram")
    }
    return [Object.keys(distinctSeen).length, distinctSeen]
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"));


function removeDuplicateWord(statement){
    let result = [];
    let word = ''
    for(let i=0; i<= statement.length-1; i++){
        if(statement[i] !== ' '){
            word += statement[i]
        }else{
            if(word !== ''){
                result.push(word)
                word = ''
            }
        }
    }

    if(word !== ''){
        result.push(word)
    }

    let frequency={}
    let uniqueWords=''
    for(let i=0; i<=result.length-1; i++){
        frequency[result[i]] = (frequency[result[i]] || 0 ) + 1;
    }

    for(let key in frequency){
        if(frequency[key] >=1){
            uniqueWords += key + " "
            frequency[key] = 0
        }

    }

    return uniqueWords

}

console.log(removeDuplicateWord("this is is a test test string"));


function findAnagramPairs(inputArr){
    let map ={}
    for(let i=0; i<inputArr.length; i++){
        let key = inputArr[i].split('').sort().join('')
        if(!map[key]){
            map[key] = []
        }
        map[key].push(inputArr[i])
    }

    let result = []
    for(key in map){
        if(map[key].length>1){
            result.push(...map[key])
        }
    }

    return {map,result}
}

console.log(findAnagramPairs(["cat", "tac", "act", "dog"]))