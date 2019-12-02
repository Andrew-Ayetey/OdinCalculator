let addFunction = function(x, y){
    return x + y
}
let subtractFunction = function(x, y){
    return x - y
}
let multiplyFunction = function(x, y){
    return x * y
}
let divideFunction = function(x, y){
    return x / y
} 
let operator = function(operate, value1, value2){
    switch(operate){
    case "+":
        return value1 + value2
        break;
    case "-":
        return value1 - value2
        break;
    case "/":
        return value1 / value2
        break;
    case "*":
        return value1 * value2
        break;
    default:
        break;

    }
}

//Equations
let addNumber = function(string, number){
    string += number
}
//Event Listeners

let numbersButtons = document.querySelectorAll(".number")
let numberButtonsArray = Array.from(numbersButtons)
console.log(numberButtonsArray)

let clickFunction = function(){
    console.log("click")
}

for(var i = 0; i < numberButtonsArray.length; i++){
    b = i
    console.log(numberButtonsArray[i])
    numberButtonsArray[i].addEventListener('click', e => {
        console.log(numberButtonsArray[b])
    })
}








