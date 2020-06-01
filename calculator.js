//functions

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

function computeArray(storageArray){
    let firstVariable = Number(storageArray[0])
    console.log(firstVariable)
    let secondVariable = Number(storageArray[2])
    let operation = storageArray[1]
    let output = operatorFunction(operation, firstVariable, secondVariable)
    return output
}

function PEMDASparser(array){
    newArray = []
    for (i = 0; i < array.length; i++){
        if (array[i] == "*"){


            console.log(array.slice(0, i-2))
            let before = array.slice(0, i-1)
            let after = array.slice(i+2)
            console.log(before, after)
            newArray.push(before, operatorFunction(array[i],array[i-1],array[i+1]), after)
        }
    }
//         for (i = 0; i < array.length; i++){
//             if (array[i] == "/"){
//                 console.log(i)
//                 console.log(array[i-1], array[i+1])
//                 newArray.push(array[i], array[i+1])
//             }
        
//     }
//     for (i = 0; i < array.length; i++){
//         if (array[i] == "+"){
//             console.log(i)
//             console.log(array[i-1], array[i+1])
//             newArray.push(array[i], array[i+1])
//         }
    
// }
// for (i = 0; i < array.length; i++){
//     if (array[i] == "-"){
//         console.log(i)
//         console.log(array[i-1], array[i+1])
//         newArray.push(array[i], array[i+1])
//     }

// }
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
            historyArray.push(storageArray)
            

            
        }

    })
}

//clear
clearEvent.addEventListener('click', e =>{
    numberDisplay.innerHTML = 0
    numberDisplayValue = 0
    storageArray = []
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
            
            storageArray = PEMDASparser(storageArray)
            while(storageArray.length > 3){
                let newValue = computeArray(storageArray.slice(0,3))
                
                storageArray.shift()
                storageArray.shift()
                storageArray.shift()
                storageArray.unshift(Number(newValue))
                historyArray.push(storageArray)
                console.log(storageArray)
                console.log(historyArray)
            }
            let output = computeArray(storageArray)
            numberDisplay.innerHTML = output
            numberDisplayValue = "" + output
            historyArray.push(storageArray)
            historyArray.push(output)
        }
    }
    
})




// testing

let testArray = [12, "+", "7", "-", "5", "*", "6", "/", "2"]










