function findMax(a,b,c){
    if(a>b && a>c){
        console.log(a)
    }else if(b>a && b>c){
        console.log(b)
    }else{
        console.log(c)
    }

}

findMax(10,20,15)

function checkTypeOfNumber(num){
    if(num>0){
        console.log("positive")
    }else if(num<0){
        console.log("negative")
    }else{
        console.log("zero")
    }
}

checkTypeOfNumber(-9)

function calculateBill(unit){
    let finalBill =0;
    if(unit>=0 && unit<=100){
        finalBill += 5*unit
    }else if(unit>=101 && unit<=200){
        finalBill = 100*5 + (unit-100)*7
    }else if(unit>=201 && unit<=300){
        finalBill = 100*5 + (100)*7 + (unit-200)*10
    }else{
        finalBill = 100*5 + (100)*7 + 100*10+ (unit-300)*12
    }
    console.log(finalBill)
}

calculateBill(230)

function checkVowel(word){
    if(['a','e','i','o','u'].includes(word)){
        console.log("Vowel")
    }else{
        console.log("not Vowel")
    }
}

checkVowel('e')

function checkLeapYear(year){
    if((year % 4 === 0 && year %100 !==0) || year %400 === 0){
        console.log("it is leap year")
    }else{
        console.log("it is not a leap year")
    }
}

checkLeapYear(2024)

function calculateTax(unit){
    let finalTax =0;
    if(unit>=0 && unit<=250000 ){
        finalTax = 0;
    }else if(unit>250000 && unit<=500000 ){
        finalTax = 250000*0 + (unit-250000)*0.05
    }else if(unit>500000 && unit<=1000000 ){
        finalTax = 250000*0.05 + (unit-500000)*0.2
    }else{
        finalTax = 250000*0.05 + 500000*0.2 + (unit-1000000)*0.3
    }
    console.log(finalTax)
}

calculateTax(750000)
