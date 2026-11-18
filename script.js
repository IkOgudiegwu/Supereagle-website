function calculate(operator) {

    let num1 = Number(document.getElementById("num1").value);

    let num2 = Number(document.getElementById("num2").value);

    let result;

    if (operator === "+") {
        result = num1 + num2;
    }

    else if (operator === "-") {
        result = num1 - num2;
    }

    else if (operator === "*") {
        result = num1 * num2;
    }

    else if (operator === "/") {
        result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
    }

    document.getElementById("result").innerText =
        "Result: " + result;
}