function rightAngleStarPattern(n){
    for(let i=1; i<=n;i++){
let str=''
        for(let j=1;j<=i;j++){
            str= str+"*"
        }
        console.log(str)
    }
}

rightAngleStarPattern(5)

function invertedRightAngleStarPattern(n){
    for(let i=5; i>=1;i--){
let str=''
        for(let j=i;j>=1;j--){
            str= str+"*"
        }
        console.log(str)
    }
}

invertedRightAngleStarPattern(5)