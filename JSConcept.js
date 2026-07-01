//pass by value -- primitive value when passed in function and changes happen in variable is not going to affect its original value.
function getSum(x){
    console.log(x)
    x = x+10
    return x
}

const a = 2
const result = getSum(a)
console.log(result)
console.log(a)

//pass by reference -- non primitive data such as object when passed in a function and any changes happen will affect the original object as well because both points to same object in memory .
function update(obj) {
    console.log(obj)
    // obj.name = "Rahul";
    obj = {name: "Rahul"}
    console.log(obj)
}

let user = { name: "Ravi" };
update(user);
console.log(user.name);

//spread operator - use to expand element of an iterable like array in its individual element.

function checkSpread(args1,args2){
    console.log("param", args1, args2 )
}

checkSpread(...[1,3])

//rest operator - use to condense the individual value into an array 

function checkRest(...args){
    console.log(args)
}

checkRest(1,3)

//destructuring- it is a way where we  assigned each value of array or object properties to a distinct variable

const obj = {
    name: "Mansi",
    age: 29
}
const { name, age} = obj
console.log(name,age,"value")

//promise.all -- it will resolve if all resolved until any one is failed eg- dashboard apis 
//promise.allsettled -- it will give response either resolved or failed when all is settled eg- uploading 5 image will know later which one is success and failed
//promise.race-- give response as soon as it give settled either failed or success eg- api request timeout 
//promise.any -- give response whenever the first success response achieved eg- multiple backup servers - used when we need first working response.


//closure - closure is a function along with its lexical scope bundled together.as in when this function is called some where outer scope it still remembers the outer lexical environment where it was originally present in the code.
//it is a concept in javascript where an inner function is lexically bound to its lexical environment as in the inner function has the reference to the outer function variable if the variable are used inside the inner function
function outer(){
    let x=0
    function inner(){
        return x
    }

    return inner
}

const call = outer()
// console.log(call())

// shallow copy -- it is a way where we can copy object and array properties in new variable but it only copy the top level values also both point to same reference.

const object = {
    name: "mansi",
    address:{
        city:"Pune"
    }
}

const userObj = {...object}
userObj.name = "Somy"
userObj.address.city = "Patna"
console.log(userObj.name,object.name)
console.log(userObj.address.city, object.address.city)


//Deep Clone - deep clone also copy the object also beyond the top level recusrively so any change in the value will not reflect in original object as it is dependent

const newObj = {
    name : "Mansi",
    address:{
        city:"Pune"
    }
}

// const deepCopyObj = structuredClone(newObj) 
const deepCopyObj = JSON.parse(JSON.stringify(newObj))

deepCopyObj.name = "Somy"
deepCopyObj.address.city = "Patna"

console.log(deepCopyObj.name,newObj.name)
console.log(deepCopyObj.address.city,newObj.address.city)

//Clouser related practical type questions:
//1. Module pattern in closure
//2. memoised function
//3. once function in js

// ONCE Function - fn that execute only once even called more then once

function once(fn){
    let executed = false
    return function(...args){
        if(!executed){
            executed= true;
            return fn(...args)
        }
        return undefined
    }
}
 
const initialize = once(()=> {return "initialised"})
console.log(initialize())
console.log(initialize())


// MEMOISE FUNCTION

function memoised(fn){
    let context = {}
    return function(...args){
        if(context[args]){
            console.log("cache")
            return context[args]
        }
        console.log("here",context)
        const result = fn(...args)
        context[args] =  result
        return result

    }
}

const add = (x,y) => { return x+y}
const addResult = memoised(add)
console.log(addResult(2,3))
console.log(addResult(2,3))


//MODULE PATTERN IN JS is basically the combination of immediately invoked function and closure.
//and variable/method defined there is private and can not be accessed out side the function

const CounterModule = (function(){
    let count = 1;
    function logCurrent(){
        return `current ${count}`;
    }

    return {
        increment: function(){
            count++;
            return logCurrent()
        },
        decrement: function(){
            count--;
            return logCurrent()
        },
        reset: function(){
            count = 0;
            return logCurrent()
        }
    }
})();

console.log(CounterModule.increment())
console.log(CounterModule.decrement())
console.log(CounterModule.reset())

function counter(){
    let num =0;
    function increment(){
        return num++
    }
    return increment
}

const res = counter()
console.log(res())
console.log(res())
console.log(res())

let arr = [1,2,3,4,5]
Array.prototype.myMap = function(callback){
    let temp = [];
    for(let i=0;i<=this.length-1;i++){
        temp.push(callback(this[i],i,this))
    }
    return temp
}

const newArr = arr.myMap((i) => {  return i })
console.log(newArr)



const objm = {
    name:"Mansi"
}

function getFullName(lastname) {
    return `firstname : ${this.name} and lastName: ${lastname}`
}

Function.prototype.myBind = function(context ={},...args){
    if(typeof this !== "function"){
        throw new Error("can not be bounded")
    }
    context.fn = this;
    return function(...newargs) {
        return context.fn(...args,...newargs)
    }
}

console.log(getFullName.myBind(objm)('Srivastava'))
// console.log(result("Srivastava"))


// function outer(){
    for(var i=0; i<=5; i++){

    function closure(x){
        setTimeout(()=>{
            console.log(x)
        },x*1000)
    }

    
        closure(i)
}
// }

// outer()


Array.prototype.myFilter = function(callback){
    let filterArray = []
    for(let i=0; i<=this.length -1 ; i++){
        if(callback(this[i],i,this)){
            filterArray.push(callback(this[i]))
        }
    }
    return filterArray
}

const filterResult = arr.myFilter((item) => { if(item%2 === 0){
    return item
}})
console.log(filterResult,"filterResult")

Array.prototype.myReduce = function(callback,intialValue){
    let startIndex = 0;
    let accumulator;
    if(intialValue !== undefined){
        accumulator = intialValue
    }else{
        accumulator = this[startIndex];
        startIndex = 1
    }

    for(let i=0; i<=this.length-1; i++){
        accumulator = callback(accumulator,this[i],i,this)
    }
    return accumulator
}


console.log(arr.myReduce((accumulator,current) => {return accumulator+current},0 ))


function debounce(fn,delay){
    let timer;
    return function(...args){
        clearTimeout(timer)
        timer = setTimeout(()=>{
            fn(...args)
        },delay)
    }
}


function throttle(fn,delay){
    let lastTime = 0;
    return function(...args){
        setTimeout(() => {
            if(Date.now()-lastTime>=delay){
                fn(...args)
                lastTime=Date.now()
            }
        },delay)
    }

}


function createBase(num){
    return function(n){
        return num+n
    }
}
var addSix = createBase(6)
console.log(addSix(10))
console.log(addSix(21))


const computeAmount = (function(){
    let amount = 0
    
    return{
        
        lacs : function lacs(a){
         amount+=a*100000
         return this
        },
        crore: function crore(b){
            amount+=b*10000000
            return this
        },
        thousand: function thousand(c){
             amount+=c*1000
             return this
        },
        value: function value(){
            return amount
        }
    }
})()



const value = computeAmount.lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value()
console.log(value)