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

function outer(){
    let x=0
    function inner(){
        return x
    }

    return inner
}

const call = outer()
console.log(call())

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
