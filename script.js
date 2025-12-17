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

// let num1 = '';
// let num2 = '';
// let operator = null;

const operate = function(num1 ,num2 , operator) {
    switch (operator) {
        case "+": return add(num1, num2);
        break;
        case "-": return subtract(num1, num2);
        break;
        case "×": return multiply(num1, num2);
        break;
        case "^": return power(num1, num2);
        break;
    } 

}



const buttons = document.querySelectorAll("button");
const operators = ["+", "-", "×", "^", "/"];
// let operation = [];
let part1 = [];
let part2 = [];
let operator = null;
let isPart1 = true;

const display = document.querySelector(".display");
let firstPress = true;

buttons.forEach (button => {
    button.addEventListener ('click', () => {
        const value = button.textContent;
        
        if (value === "C") {
            display.textContent = "";
            // operation =[];
            isPart1 ? part1 = [] : part2 = [];
            firstPress = true;
        }
            
        else if (value === "=") {
             display.textContent = "";
             launch(operation);
             firstPress = true;
        }
           
        else { 

            if (firstPress === true) {
                display.textContent = "";
                part1 = part2 = [];
                firstPress = false;
            }

            if (!isNaN(Number(value))) {
                // operation.push(value);
                isPart1 ? part1.push(value) : part2.push(value);
                display.textContent += value; 
            }

            if (operators.includes(value)) {
                if (isPart1) {
                    operator = value;
                    isPart1 = false;
                } else {
                    result = operate (part1, part2, operator);
                    display.textContent = result;
                    part1 = result;
                    operator = value;
                }
            }
            console.log("part1", part1);
            console.log("part2", part2);
            console.log(operator);

            // console.log(value);
        }
    }
    )

})