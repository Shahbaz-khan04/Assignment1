const ps = require("prompt-sync");
const prompt = ps({ sigint: true });

do {
  console.log("--------------Simple Calculator Application--------------\n");
  let num1 = prompt("Enter first number: ");
  num1 = Number(num1);
  let num2 = prompt("Enter second number: ");
  num2 = Number(num2);
  let op = prompt("Enter operation(+, -, *, /, %): ");
  switch (op) {
    case "+":
      console.log(num1 + " + " + num2 + " = " + (num1 + num2));
      break;
    case "-":
      console.log(num1 + " - " + num2 + " = " + (num1 - num2));
      break;
    case "*":
      console.log(num1 + " * " + num2 + " = " + num1 * num2);
      break;
    case "/":
      console.log(num1 + " / " + num2 + " = " + num1 / num2);
      break;
    case "%":
      console.log(num1 + " % " + num2 + " = " + (num1 % num2));
      break;
  }

  let again = prompt("Do you want to use calculator again? (yes/no)");
  again.toLowerCase();
  if (again === "yes") ans = 1;
  else ans = 0;
} while (ans === 1);
