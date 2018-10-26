
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js');
}
const calculator = new Calculator();

const numberButtons = document.querySelectorAll(".number");
const functionButtons = document.querySelectorAll(".function");
const operatorButtons = document.querySelectorAll(".operator");
const displayScreen = document.getElementById('display');

numberButtons.forEach( (el) => {
    el.addEventListener('click', () => calculator.number(el) );
});

functionButtons.forEach( (el) => {
    el.addEventListener('click', () => {
        calculator[el.id](parseFloat(calculator.display));
        calculator.updateDisplay();
    });
});

operatorButtons.forEach( (el) => {
    el.addEventListener('click', () => {
        calculator.firstNumber = parseFloat(calculator.display);
        calculator.function = el.id;
        calculator.updateDisplay2("0");
    });
});
