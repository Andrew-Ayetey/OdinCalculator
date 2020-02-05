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

// function valueStorage(){
//     var valueArray = []
//     if(valueArray > 3){
//         console.log("valueArray > 3")
//         f
//     }
// }

//functions
// let addNumber = function(string, number){
//     string += number
// }

// let newVariable = function(array){
//     let list = array.length
//     if(list == 0){
//         return "Variable" + 1
//     }
//     else{
//         return "Variable" + (list + 1)
//     }
// }

let checkStorageArray = function(array){
    if(array.length > 3){
        console.log("array is greater than 3")
    }
}
//Elements and Variables

let storageArray = []
let operationsArray = []

let numbersButtons = document.querySelectorAll(".number")
let numberButtonsArray = Array.from(numbersButtons)

let operatorButtons = document.querySelectorAll(".operator")

let numberDisplay = document.getElementById('displayPrimary')
let numberDisplayValue = numberDisplay.innerHTML
let EqualsEvent = document.getElementById('equals')
//Event Listeners
for(var i = 0; i < 10; i++){
    numId= document.getElementById("number" + i)
    let innerId = numId.innerHTML
    numId.addEventListener('click', e => {

        if( numberDisplay.innerHTML == 0){
            numberDisplay.innerHTML = innerId
            numberDisplayValue = numberDisplay.innerHTML
        }
        else{
            numberDisplay.innerHTML += innerId
            numberDisplayValue = numberDisplay.innerHTML
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
        else{
            storageArray = numberDisplayValue
            
            // storageArray.push(operatorInstance.innerHTML)
            // console.log("number display is not 0")
            numberDisplay.innerHTML += operatorInstance.innerHTML
            
        }
        // console.log(storageArray)
        // checkStorageArray(storageArray)
        // if(storageArray.length > 3){
        // CurrentOperation = new operation(storageArray[0],storageArray[1], storageArray[2])
        // operationsArray.push(CurrentOperation)
        // console.log(operationsArray)
        // console.log(CurrentOperation.operateMethod())
        // }
        // else{}

        

    })
}





// testing










