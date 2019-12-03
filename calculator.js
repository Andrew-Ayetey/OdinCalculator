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

//functions
let addNumber = function(string, number){
    string += number
}
//Event Listeners

let numbersButtons = document.querySelectorAll(".number")
let numberButtonsArray = Array.from(numbersButtons)

let numberDisplay = document.getElementById('displayPrimary')
let numberDisplayValue = numberDisplay.innerHTML
for(var i = 0; i < 10; i++){
    numId= document.getElementById("number" + i)
    let innerId = numId.innerHTML
    numId.addEventListener('click', e => {
        if( numberDisplay.innerHTML == 0){
            numberDisplay.innerHTML = innerId
        }
        else{
            numberDisplay.innerHTML += innerId
            numberDisplayValue = numberDisplay.innerHTML
        }
    })
    
}








