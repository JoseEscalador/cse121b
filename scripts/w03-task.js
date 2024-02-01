/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (n1, n2) {
    return n1 + n2;
}

function addNumbers () {
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);
    document.querySelector("#sum").value = add(addNumber1, addNumber2);
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
const minus = function subtract (n1, n2) {
    return n1 - n2;
}

function subtractNumbers () {
    let subtractNumber1 = Number(document.querySelector("#subtract1").value);
    let subtractNumber2 = Number(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value = minus(subtractNumber1, subtractNumber2);

}

document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);


/* Arrow Function - Multiply Numbers */

const multiply = (n1, n2) => n1*n2;

function multiplyNumbers () {
    let multiplyNumber1 = Number(document.querySelector("#factor1").value);
    let multiplyNumber2 = Number(document.querySelector("#factor2").value);
    document.querySelector("#product").value = multiply(multiplyNumber1, multiplyNumber2);
}

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */

const divide = (n1, n2) => n1 / n2;

const divideNumbers = () => {
    let dividend = parseFloat(document.querySelector("#dividend").value);
    let divisor = parseFloat(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value = divide(dividend, divisor);
}

document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */


function getTotalDue() {
    let subtotal = parseFloat(document.querySelector("#subtotal").value);
    if (document.getElementById("member").checked) {
        subtotal = subtotal * 0.8;
    }
    document.querySelector("#total").textContent = subtotal.toFixed(2);   
}

document.querySelector("#getTotal").addEventListener("click", getTotalDue);



/* ARRAY METHODS - Functional Programming */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13]
/* Output Source Array */
document.getElementById("array").innerHTML = numbersArray;
/* Output Odds Only Array */
let oddsArray = numbersArray.filter(num => num % 2 !== 0);
document.getElementById("odds").innerHTML = oddsArray;
/* Output Evens Only Array */
let newArray2 = numbersArray.filter(num => num % 2 === 0);
document.getElementById("evens").innerHTML = newArray2;
/* Output Sum of Org. Array */
let sumArray = numbersArray.reduce((sum, num) => sum + num);
document.getElementById("sumOfArray").innerHTML = sumArray;

/* Output Multiplied by 2 Array */
let multipliedArray = numbersArray.map(num => num * 2)
document.getElementById("multiplied").innerHTML = multipliedArray;

/* Output Sum of Multiplied by 2 Array */

let sumOfMultipliedArray = multipliedArray.reduce((sum, num) => sum + num);
document.getElementById("sumOfMultiplied").innerHTML = sumOfMultipliedArray;
