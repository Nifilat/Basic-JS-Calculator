document.write("Welcome to a basic arithmetic Calculator");
function Calculator() {
  const OPERATOR = prompt("Enter operator ( either +, -, * or / ): ");
  const num1 = parseFloat(prompt("Enter first number: "));
  const numb2 = parseFloat(prompt("Enter second number: "));

  let result;

  if (isNaN(num1) || isNaN(numb2)) {
    alert("This is not a number, refresh the page and try again");
  } else {
    if (OPERATOR == "+") {
      result = num1 + numb2;
    } else if (OPERATOR == "-") {
      result = num1 - numb2;
    } else if (OPERATOR == "*") {
      result = num1 * numb2;
    } else {
      result = num1 / numb2;
    }
    alert(`${num1} ${OPERATOR} ${numb2} = ${result}`);
  }
}

Calculator();
