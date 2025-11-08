function add(num1, num2){
    return Math.round((num1 + num2)*100)/100
}

function subtract(num1,num2){
    return Math.round((num1 -num2)*100)/100
}

function multiply(num1, num2){
    return Math.round((num1 * num2)*100)/100
}

function divide(num1, num2){
    return Math.round((num1/num2)*100)/100
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
        if(num2 ===0){
            return "Error, do not divide by 0"
        }
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
        if (num1 && operator && display.textContent!=""){
            num2 = display.textContent
            const result = operate(operator, num1, num2)
    
            num1 = result
            operator = curr
            num2 = undefined
            display.textContent = result
        }
        else if(num1 && operator && display.textContent==""){
            operator = curr
            return
        }
        else{
            num1 = display.textContent;
            operator = curr;
            display.textContent =""
        }
    }
    else if(curr === "="){
        num2 = display.textContent
        display.textContent =""
        const result = operate(operator, num1, num2)
        display.textContent = result

        num1 = result
        num2 = undefined
        operator = undefined
    }
    else if(curr =="AC"){
        display.textContent=""
        num1 = undefined
        num2 = undefined
        operator = undefined
    }

    else {
        if(num1){
            display.textContent=""
        }
        display.textContent += curr;
    }
}
