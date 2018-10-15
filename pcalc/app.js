if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js');
}

const numberButtons = document.querySelectorAll(".number");
const functionButtons = document.querySelectorAll(".function");
const function2Buttons = document.querySelectorAll(".function2");
const displayScreen = document.getElementById('display');

const calculator = new Calculator();

function play() {
    var audio = document.getElementById("audio");
    displayScreen.textContent = "KRAFTWERK";
    audio.play();
    setTimeout(function(){ updateDisplay(); }, 3000);
}

const updateDisplay = () => {
    displayScreen.textContent = calculator.display;
 } 

numberButtons.forEach( (el) => {
    el.addEventListener('click', 
        () => {
            if (calculator.display.length < 10) {
            calculator.display += el.textContent;
            updateDisplay();
            }
        });
});

functionButtons.forEach( (el) => {
    el.addEventListener('click', () => {
         if ( el.id == "equals" ) {
            calculator[calculator.function](parseFloat(calculator.display));
            calculator.display = calculator.firstNumber;
        } else {
            calculator[el.id](parseInt(calculator.display));
        }
        updateDisplay();
    });
});

function2Buttons.forEach( (el) => {
    el.addEventListener('click', () => {
        calculator.firstNumber = parseFloat(calculator.display);
        calculator.function = el.id;
        calculator.display = "0";
        console.log("Fun2 - " + el.id);
        updateDisplay();
    });
});