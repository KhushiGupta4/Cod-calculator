const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.buttons button');

let currentOperand = '';
let previousOperand = '';
let operator = '';
let isNewOperand = true;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;

    if (buttonText >= '0' && buttonText <= '9' || buttonText === '.') {
      if (isNewOperand) {
        currentOperand = buttonText;
        isNewOperand = false;
      } else {
        currentOperand += buttonText;
      }
      display.textContent = currentOperand;
    } else if (buttonText === 'C') {
      currentOperand = '';
      previousOperand = '';
      operator = '';
      isNewOperand = true;
      display.textContent = '0';
    } else if (buttonText === '=') {
      if (operator && previousOperand !== '') {
        let result;
        switch (operator) {
          case '+':
            result = parseFloat(previousOperand) + parseFloat(currentOperand);
            break;
          case '-':
            result = parseFloat(previousOperand) - parseFloat(currentOperand);
            break;
          case '*':
            result = parseFloat(previousOperand) * parseFloat(currentOperand);
            break;
          case '/':
            result = parseFloat(previousOperand) / parseFloat(currentOperand);
            break;
          case '^':
            result = Math.pow(parseFloat(previousOperand), parseFloat(currentOperand));
            break;
        }
        currentOperand = result.toString();
        previousOperand = '';
        operator = '';
        isNewOperand = true;
        display.textContent = result;
      }
    } else {
      if (currentOperand !== '') {
        previousOperand = currentOperand;
        currentOperand = '';
        operator = buttonText;
        isNewOperand = true;
      }
    }
  });
});

