// script.js

document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = Array.from(document.getElementsByClassName('btn'));
    const clearButton = document.getElementById('clear');
    const equalsButton = document.getElementById('equals');

    let currentInput = '';
    let operator = '';
    let operand1 = null;

    buttons.map(button => {
        button.addEventListener('click', (e) => {
            const value = e.target.getAttribute('data-value');

            if (value === '/' || value === '*' || value === '-' || value === '+') {
                if (currentInput) {
                    operand1 = parseFloat(currentInput);
                    operator = value;
                    currentInput = '';
                }
            } else {
                currentInput += value;
            }

            display.textContent = currentInput || '0';
        });
    });

    equalsButton.addEventListener('click', () => {
        if (operator && currentInput) {
            const operand2 = parseFloat(currentInput);
            let result;

            switch (operator) {
                case '+':
                    result = operand1 + operand2;
                    break;
                case '-':
                    result = operand1 - operand2;
                    break;
                case '*':
                    result = operand1 * operand2;
                    break;
                case '/':
                    result = operand1 / operand2;
                    break;
                default:
                    result = 0;
            }

            display.textContent = result;
            currentInput = result;
            operator = '';
            operand1 = null;
        }
    });

    clearButton.addEventListener('click', () => {
        currentInput = '';
        operator = '';
        operand1 = null;
        display.textContent = '0';
    });
});
