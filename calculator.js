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
let operatorFunction = function(operate, value1, value2){
    switch(operate){
    case "+":
        return addFunction(value1, value2)
    case "-":
        return subtractFunction(value1, value2)
    case "/":
        return divideFunction(value1, value2)
    case "*":
        return multiplyFunction(value1, value2)
    default:
        break;

    }
}

//objects
function operation(firstVariable, operator, secondVariable){
    operationsList = ["+", "-", "/", "*"]
    this.firstVariable = firstVariable;
    this.operator = operator;
    this.secondVariable = secondVariable;
    this.result = null;
    while(operationsList.includes(operator) == false){
        this.operator = prompt("operator must be one of the operations listed on the calculator")
    }
    this.operateMethod = function(){
        x = Number(this.firstVariable)
        y = Number(this.secondVariable)
        result = operatorFunction(this.operator,x,y)
        this.result = result
        return result
    }

}

let checkStorageArray = function(array){
    if(array.length > 3){
        console.log("array is greater than 3")
    }
}
//Elements and Variables

let storageArray = []
let operationsArray = ["+", "-", "/", "*"]

let numbersButtons = document.querySelectorAll(".number")
let numberButtonsArray = Array.from(numbersButtons)

let operatorButtons = document.querySelectorAll(".operator")

let numberDisplay = document.getElementById('displayPrimary')
let numberDisplayValue = numberDisplay.innerHTML

let equalsEvent = document.getElementById('equals')

let clearEvent = document.querySelector('.clear')

//Event Listeners
for(var i = 0; i < 10; i++){
    numId= document.getElementById("number" + i)
    let innerId = numId.innerHTML
    numId.addEventListener('click', e => {

        if( numberDisplayValue == 0){
            numberDisplay.innerHTML = innerId
            numberDisplayValue = numberDisplay.innerHTML
        }
        else{
            numberDisplay.innerHTML += innerId
            numberDisplayValue = numberDisplay.innerHTML
            storageArray = numberDisplayValue.split(" ")
        }
    })
    
}

for(var i = 0; i < operatorButtons.length; i++){
    let operatorInstance = operatorButtons[i]
    operatorInstance.addEventListener('click',e =>{
        operationNumber = 1
        if(numberDisplayValue == 0){
            return
        }
        else if(operationsArray.includes(storageArray[storageArray.length - 1])){
            return
        }
        else{
            
            numberDisplay.innerHTML += " "        
            numberDisplay.innerHTML += operatorInstance.innerHTML
            numberDisplay.innerHTML += " "
            numberDisplayValue = numberDisplay.innerHTML
            storageArray = numberDisplayValue.split(" ")
            storageArray.pop()
            

            
        }

    })
}

//clear
clearEvent.addEventListener('click', e =>{
    numberDisplay.innerHTML = 0
    numberDisplayValue = 0
})

//equals
equalsEvent.addEventListener('click', e =>{
    if (numberDisplayValue == 0){
        return
    }
    else{
    numberDisplay.innerHTML = "Temp"
    numberDisplayValue = 0
    }
})




// testing










