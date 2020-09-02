//functions

let addFunction = function(x, y){
    return Number(x) + Number(y)
}
let subtractFunction = function(x, y){
    return x - y
}
let multiplyFunction = function(x, y){
    return x * y
}
let divideFunction = function(x, y){
    if (y == 0){
        window.alert("You can't divide by zero, are you trying to kill us all!")
        return 0
    }
    else {
    return x / y
    }
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

function computeArray(storageArray){
    if (storageArray.length < 3){
        return
    }
    else{
    let firstVariable = Number(storageArray[0])
    console.log(firstVariable)
    let secondVariable = Number(storageArray[2])
    let operation = storageArray[1]
    let output = operatorFunction(operation, firstVariable, secondVariable)
    return output
    }
}

function PEMDASparser(array){
    newArray = []
    for (i = 0; i < array.length; i++){
        if (array[i] == "*"){

            let before = array.slice(0, i-1)
            let after = array.slice(i+2)
            console.log(before, after)
            before.forEach(element => newArray.push(element))
            newArray.push(operatorFunction(array[i],array[i-1],array[i+1]))
            after.forEach(element => newArray.push(element))
            console.log("At Multiplication the new Array is", newArray)
            array = newArray
        }
    
    }
    
    console.log("Divison: At Beginning The array is currently", array)
    for (i = 0; i < array.length; i++){
        if (array[i] == "/"){
            newArray = []
            let before = array.slice(0, i-1)
            let after = array.slice(i+2)
            
            before.forEach(element => newArray.push(element))
            newArray.push(operatorFunction(array[i],array[i-1],array[i+1]))
            after.forEach(element => newArray.push(element))
            console.log("At dviision end the new Array is", newArray)
            array = newArray
        }
    }
   
        for (i = 0; i < array.length; i++){
            if (array[i] == "+"){
                console.log(operatorFunction(array[i],array[i-1], array[i+1]))
                newArray = []
                let before = array.slice(0, i-1)
                let after = array.slice(i+2)

                before.forEach(element => newArray.push(element))
                newArray.push(operatorFunction(array[i],array[i-1],array[i+1]))
                after.forEach(element => newArray.push(element))
                console.log("Here the new Array is", newArray)
                array = newArray
            }
    
    }


 for (i = 0; i < array.length; i++){
            if (array[i] == "-"){
                console.log(operatorFunction(array[i],array[i-1], array[i+1]))
                newArray = []
                let before = array.slice(0, i-1)
                let after = array.slice(i+2)

                before.forEach(element => newArray.push(element))
                newArray.push(operatorFunction(array[i],array[i-1],array[i+1]))
                after.forEach(element => newArray.push(element))
                console.log("Here the new Array is", newArray)
            }
    
    }
console.log(newArray)
    return newArray
    
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
let historyArray = []
let operationsArray = ["+", "-", "/", "*"]
let firstEntry = new Boolean(true)

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

        if( numberDisplayValue == 0 && firstEntry == true){
            numberDisplay.innerHTML = innerId
            numberDisplayValue = numberDisplay.innerHTML
        }
        else if (numberDisplayValue == historyArray[historyArray.length - 1]){
            numberDisplay.innerHTML = innerId
            numberDisplayValue = numberDisplay.innerHTML
            console.log("System recognizes the current number equals the output of previous number")
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
            historyArray.push(storageArray)
            

            
        }

    })
}

//clear
clearEvent.addEventListener('click', e =>{
    numberDisplay.innerHTML = 0
    numberDisplayValue = 0
    storageArray = []
    firstEntry = true
})

//equals
equalsEvent.addEventListener('click', e =>{
    if (storageArray.length < 3){
        return
    }
    else {
        if (storageArray.length % 2 == 0){
            return
        }
        else{
            historyArray.push(storageArray)
            firstEntry = false

            storageArray = PEMDASparser(storageArray)
            
            // while(storageArray.length > 3){
            //     //Change below, Display should not do work functions ought to.
            //     let newValue = computeArray(storageArray.slice(0,3))
                
            //     storageArray.shift()
            //     storageArray.shift()
            //     storageArray.shift()
            //     storageArray.unshift(Number(newValue))
            //     historyArray.push(storageArray)

            // }
            let output = storageArray
            numberDisplay.innerHTML = output
            numberDisplayValue = "" + output
            
            historyArray.push(output)
        }
    }
    
})




// testing

let testArray = [12, "+", "7", "-", "5", "*", "6", "/", "2"]










