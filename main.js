const checkBox = document.getElementById("checkbox");
const calculator = document.querySelector(".calculator");
const theme = document.querySelector(".theme");
const body = document.body;
const numberButtons = document.querySelectorAll(".data-number");
const operationButtons = document.querySelectorAll(".data-operation");
const equalsButton = document.querySelectorAll(".data-equals");
const deleteButton = document.querySelector(".data-delete");
const allClearButton = document.querySelector(".data-all-clear");
const currentOperand = document.querySelector(".current-operand");
const calcScreen = document.querySelector(".screen");
const buttonSpace = document.querySelector(".button-space");
const buttons = document.querySelectorAll(".btn");
const equal = document.querySelector(".long-btn1");

checkBox.addEventListener("change", () => {
  if (checkBox.checked) {
    body.style.backgroundColor = " #E6E6E6";
    theme.style.color = "#36362C";
    calcScreen.style.backgroundColor = " #EEEEEE";
    currentOperand.style.color = "#36362C";
    calculator.style.backgroundColor = "#E6E6E6";
    buttonSpace.style.backgroundColor = "#D2CDCD";
    buttons.forEach((button) => {
      button.style.color = "#36362C";
      button.style.backgroundColor = " #E5E4E1";
    });
    deleteButton.style.backgroundColor = "#378187";
    allClearButton.style.backgroundColor = "#378187";
    equal.style.backgroundColor = "#C85402";
  } else {
    body.style.backgroundColor = "#3A4663";
    theme.style.color = "#FFF";
    calcScreen.style.backgroundColor = "#181F33";
    currentOperand.style.color = "#FFF";
    calculator.style.backgroundColor = "#3A4663";
    buttonSpace.style.backgroundColor = "#242D44";
    buttons.forEach((button) => {
      button.style.color = "#434A59";
      button.style.backgroundColor = " #EAE3DC";
    });
    deleteButton.style.backgroundColor = "#647198";
    allClearButton.style.backgroundColor = "#647198";
    equal.style.backgroundColor = "#D03F2F";
  }
});

function addNumber(number) {
  currentOperand.textContent += number;
}

function addOperation(operation) {
  currentOperand.textContent += ` ${operation} `;
}

function clearCurrentOperand() {
  currentOperand.textContent = "";
}

function deleteLast() {
  currentOperand.textContent = currentOperand.textContent.slice(0, -1);
}

function computeResult() {
  const expression = currentOperand.textContent;
  if (expression === "") {
    return;
  }
  try {
    const result = eval(expression);
    currentOperand.textContent = result;
  } catch (error) {
    currentOperand.textContent = "Error";
  }
}

function addEventListeners() {
  numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
      addNumber(button.textContent);
    });
  });

  operationButtons.forEach((button) => {
    button.addEventListener("click", () => {
      addOperation(button.textContent);
    });
  });

  equalsButton.forEach((button) => {
    button.addEventListener("click", () => {
      computeResult();
    });
  });

  allClearButton.addEventListener("click", () => {
    clearCurrentOperand();
  });

  deleteButton.addEventListener("click", () => {
    deleteLast();
  });
}

addEventListeners();
