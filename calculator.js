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