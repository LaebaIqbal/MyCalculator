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
 let number1;
 let number2
 let operator;

 function operate(operator, num1, num2){
    if (operator == "+"){
        add(num1, num2)
    }
    else if (operator=="-"){
        subtract(num1, num2)
    }
    else if (operator == "×"){
        multiply(num1, num2)
    }
    else if (operator == "÷"){
        divide(num1, num2)
    }
 }

function displaySth(e){
    let display = document.querySelector("#display")
    display.textContent += e.target.textContent
    let curr_num = display.textContent 


}
 const buttons = document.querySelectorAll("button")
    buttons.forEach((button)=>{
    button.addEventListener("click",displaySth)
 })

