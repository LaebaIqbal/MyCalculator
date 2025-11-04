function add(num1, num2){
    return num1 + num2
}

function subtract(num1,num2){
    return num1 -num2
}

function multiply(num1, num2){
    return num1 * num2
}

function divide(num1, num2){
    return num1/num2
}
 let num1;
 let num2;
 let operator;

 function operate(operator, number1, number2){
    let num1 =parseInt(number1)
    let num2 =parseInt(number2)
    if (operator == "+"){
        return add(num1, num2)
    }
    else if (operator==="-"){
        return subtract(num1, num2)
    }
    else if (operator === "×"){
        return multiply(num1, num2)
    }
    else if (operator === "÷"){
        return divide(num1, num2)
    }
 }

function displaySth(e){
    let display = document.querySelector("#display")
    saveNumOp(e.target.textContent)

}
 const buttons = document.querySelectorAll("button")
    buttons.forEach((button)=>{
    button.addEventListener("click",displaySth)
 })

function saveNumOp(curr){
    let display = document.querySelector("#display")
    
    if (curr === "+" || curr === "-" || curr ==="×" || curr === "÷"){
        num1 = display.textContent;
        operator = curr;
        display.textContent =""
    }
    else if(curr === "="){
        num2 = display.textContent
        display.textContent =""
        const result = operate(operator, num1, num2)
        display.textContent = result
    }
    else {
        display.textContent += curr;
        

    }
}
