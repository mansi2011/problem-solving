function reverseString(str){
    let reverseStr=''
    for(let i=str.length-1; i>=0; i--){
        reverseStr+=str[i]
    }

    console.log(reverseStr)
}

reverseString('javascript')


function isPalindrome(str){
    let reverseStr=''
    for(let i=str.length-1; i>=0; i--){
        reverseStr+=str[i]
    }
    if(reverseStr === str){
        console.log("true")
    }else{
        console.log("false")
    }
}

isPalindrome('racecark')

function frequencyChar(str){
    let frequency = {}
    for(let i = 0; i<=str.length-1; i++){
        frequency[str[i]] = (frequency[str[i]] || 0) + 1
    }

    console.log(frequency)
}

frequencyChar('banana')

function maxCharFrequency(str){
    let frequency = {}
    let maxCount=0
    let maxChar
    for(let i=0; i<str.length-1; i++){
        frequency[str[i]] = (frequency[str[i]] || 0) + 1
        
    if(frequency[str[i]]> maxCount){
        maxCount = frequency[str[i]]
        maxChar = str[i]
    }

    }

    console.log(frequency,maxChar)
}

maxCharFrequency('success')


function checkAnagrams(str1, str2) {
    if (str1.length !== str2.length) return false;

    let frequency = {};

    for (let i = 0; i < str1.length; i++) {
        frequency[str1[i]] = (frequency[str1[i]] || 0) + 1;
    }

    for (let i = 0; i < str2.length; i++) {
        if (!frequency[str2[i]]) {
            return false;
        }
        frequency[str2[i]]--;
    }

    return true;
}

// Example
console.log(checkAnagrams('listen', 'silent'));


function firstNonRepeatingChar(str1) {

    let frequency = {};

    for (let i = 0; i < str1.length; i++) {
        frequency[str1[i]] = (frequency[str1[i]] || 0) + 1;
    }

    for (let i = 0; i < str1.length; i++) {
        if (frequency[str1[i]] === 1) {
            return [str1[i],i]; 
        }    }

}

// Example
console.log(firstNonRepeatingChar('aabbcddeff'));

function removeDuplicate(str1) {

    let frequency = {};
    let result=''

    for (let i = 0; i < str1.length; i++) {
        frequency[str1[i]] = (frequency[str1[i]] || 0) + 1;
    }

    for (let i = 0; i < str1.length; i++) {
        if (frequency[str1[i]] >=1) {
            result+= str1[i]
            frequency[str1[i]] = 0
        }    
    }

    return result 



}

// Example
console.log(removeDuplicate('programming'));

function longestWordInSentence(statement){
    let word = ''
    let result = []
    for(let i=0; i<=statement.length-1;i++){
        if(statement[i] !== " "){
            word += statement[i]
        }else{
            if(word !==''){
                result.push(word)
                word = ''
            }
        }
    }

    if(word !== ''){
        result.push(word)
    }

    let longestLength = 0
    let longestWord = ''
    for(i=0; i<=result.length-1; i++){
        if(result[i].length > longestLength){
            longestLength= result[i].length
            longestWord = result[i]
        }
    }

    return longestWord
}

console.log(longestWordInSentence("coding is beautiful"))


function countWords(statement){
    let word=''
    let result = []
    for(i=0; i<statement.length; i++){
        if(statement[i] !== " "){
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
    return `${result.length} words`
}

console.log(countWords("  hi   there  world "))


function compressString(word){
    let frequency={}
    let result =''
    for(i=0; i<=word.length-1; i++){
        frequency[word[i]] = (frequency[word[i]] || 0) + 1
    }
    for (let key in frequency) {
        result += `${key}${frequency[key]}`
    }
    return result
    
}

console.log(compressString("aaabbccccd"))

