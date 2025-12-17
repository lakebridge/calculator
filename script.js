const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
	return array.reduce((sum, current) => sum + current, 0);
};

const multiply = function(array) {
  return array.reduce((total, current) => total*current, 1);
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(n) {
	if (n<=1) return 1;
  return n*factorial(n-1);
};

let num1 = '';
let num2 = '';
let operator = null;

const operate = function(num1 ,num2 , operator) {
    switch (operator) {
        case "+": return add(num1, num2);
        break;
        case "-": return subtract(num1, num2);
        break;
        case "*": return multiply(num1, num2);
        break;
        case "**": return power(num1, num2);
        break;
    } 

}



const buttons = document.querySelectorAll("button");
let operation = [];
const display = document.querySelector(".display");
let firstpress = true;

buttons.forEach (button => {
    button.addEventListener ('click', () => {
        const value = button.textContent;
        
        if (value === "C") {
            display.textContent = "";
            operation =[];
            firstpress = true;
        }
            
        
        else if (value === "=") {
             display.textContent = "";
             launch(operation);
             firstpress = true;
        }
           
        else { 

            if (firstpress === true) {
                display.textContent = "";
                operation =[];
                firstpress = false;
            }

            if (!isNaN(Number(value))) {
                console.log("It's a number");
            }
            operation.push(value);
            display.textContent += value; 
            // console.log(value);
        }
    }
    )

})