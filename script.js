const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
	return array.reduce((sum, current) => sum + current, 0);
};

const multiply = function(a,b) {
  return a*b;
};

const divide = function (a,b) {
    return a/b;
}
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
        case "/": return divide(num1, num2);
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
let result;
let num1;
let num2;

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
            
        else if (value === "=" && part2.length > 0) {
            if (!isPart1) {
            num1 = Number(part1.join(""));
            num2 = Number(part2.join(""));
            result = operate (num1, num2, operator);
            display.textContent = Math.round(result*1000)/1000;
            firstPress = true;
            part1 = [String(result)];
            part2 = [];
            operator = null;
            isPart1 = true;
            }
        }
           
        else { 

            if (firstPress === true && !isNaN(Number(value))) {
                display.textContent = "";
                firstPress = false;
                console.log ("firstPress happened");
            }

            // if (!isNaN(Number(value))) {
            //     if (isPart1) {
            //         part1.push(value);
            //     } else part2.push(value);

            //     display.textContent += value; 
            // }

             if (isPart1) {
                 if (operators.includes(value)) {
                    operator = value;
                    isPart1 = false;
                    firstPress = true;
                 } else {
                    part1.push(value);
                    display.textContent += value; 
                 }
             } else {
                 if (operators.includes(value)) {
                    console.log("value", value);
                    num1 = Number(part1.join(""));
                    num2 = Number(part2.join(""));
                    result = operate (num1, num2, operator);
                    display.textContent = Math.round(result*1000)/1000;
                    part1 = [];
                    part1.push(String(result));
                    part2 = [];
                    operator = value;
                    firstPress = true;
                    // isPart1 = true;
                 } else {
                    part2.push(value);
                    display.textContent += value; 
                 }
             }
            
            console.log("part1", part1);
            console.log("part2", part2);
            console.log("operator", operator);
            console.log("isPar1", isPart1);
            console.log("result", result);

            // console.log(value);
        }
    }
    )

})