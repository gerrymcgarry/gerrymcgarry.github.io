if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js');
}
  
const numberButtons = document.querySelectorAll(".number");
const functionButtons = document.querySelectorAll(".function");
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
            let method = calculator.function;
            calculator[method+"Numbers"](parseInt(calculator.display));
            calculator.display = calculator.firstNumber;
        } else if ( el.id == "add" ){
            calculator.firstNumber = parseFloat(calculator.display);
            calculator.function = el.id;
            console.log(calculator.function );
            calculator.display = "";
        } else {
            console.log(calculator.memory);
            calculator[el.id](parseInt(calculator.display));
        }
        updateDisplay();
    });
});