let display = document.getElementById("display");

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);  // Use eval() to calculate the result of the expression
  } catch (e) {
    display.value = "Error";  // Show error message if there's a syntax error
  }
}
