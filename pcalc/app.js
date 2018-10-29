if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}
class Calculator {
  constructor() {
    this.display = '0';
    this.firstNumber = 0;
    this.memory = 0;
    this.function = '';
    this.answer = false;
    this.screen = document.getElementById('display');
    this.numberButtons = document.querySelectorAll('.number');
    this.functionButtons = document.querySelectorAll('.function');
    this.operatorButtons = document.querySelectorAll('.operator');
    this.editButtons = document.querySelectorAll('.edit');
    this.displayScreen = document.getElementById('display');
  }

  updateDisplay(value) {
    if (value) {
      this.display = value;
    }
    this.displayScreen.textContent = this.display;
  }

  equals() {
    this.display = this[this.function](parseFloat(this.display));
    this.firstNumber = 0;
    this.function = '';
    this.answer = true;
  }

  // Functions
  memoryRecall() { this.display = this.memory; this.updateDisplay(); }

  memoryPlus() { this.memory += parseFloat(this.display); }

  memoryMinus() { this.memory -= parseFloat(this.display); }

  memoryClear() { this.memory = 0; }

  play() { document.getElementById('audio').play(); }

  sin(number) { this.display = Math.sin(number * Math.PI / 180).toPrecision(9); }

  cos(number) { this.display = Math.cos(number * Math.PI / 180).toPrecision(9); }

  tan(number) { this.display = Math.tan(number * Math.PI / 180).toPrecision(9); }

  asin(number) { this.display = Math.round(Math.asin(number) * (180 / Math.PI) * 10000000) / 10000000; }

  acos(number) { this.display = Math.round(Math.acos(number) * (180 / Math.PI) * 10000000) / 10000000; }

  atan(number) { this.display = Math.round(Math.atan(number) * (180 / Math.PI) * 10000000) / 10000000; }

  log(number) { this.display = Math.round(Math.log10(number) * 10000000) / 10000000; }

  ln(number) { this.display = Math.round(Math.log(number) * 10000000) / 10000000; }

  sqr(number) { this.display = Math.round(Math.sqrt(number) * 10000000) / 10000000; }

  exp(number) { this.display = Math.round(Math.exp(number) * 10000000) / 10000000; }

  percent() { this.display = Math.round(this.display * 100000) / 10000000; }

  fac(number) {
    if (number === 0 || number === 1) { return 1; }
    for (let i = number - 1; i >= 1; i--) {
      number *= i;
    }
    this.display = number;
  }

  pi() { this.updateDisplay('3.14158926'); }

  backspace() {
    if (this.display.length !== 1) {
      this.display = this.display.substring(0, this.display.length - 1);
    } else if (this.display !== '0') {
      this.display = '0';
    }
  }

  clear() { this.updateDisplay('0'); }

  clearAll() {
    this.firstNumber = 0;
    this.function = '';
    this.updateDisplay('0');
  }

  plusMinus() {
    if (this.display !== '0') {
      if (this.display[0] !== '-') {
        this.display = '-'.concat(this.display);
      } else {
        this.display = this.display.substring(1, this.display.length);
      }
    }
  }

  number(el) {
    if (this.answer === false) {
      if (this.display.length < 10) {
        if (this.display !== '0') {
          this.display += el.textContent;
        } else {
          this.display = el.textContent;
        }
      }
    } else {
      this.display = el.textContent;
      this.answer = false;
    }
    this.updateDisplay();
  }

  // Operators
  multiply(secondNumber) { return this.firstNumber * secondNumber; }

  divide(secondNumber) { return this.firstNumber / secondNumber; }

  subtract(secondNumber) { return this.firstNumber - secondNumber; }

  add(secondNumber) { return this.firstNumber + secondNumber; }

  pow(secondNumber) { return Math.pow(this.firstNumber, secondNumber); }

  mod(secondNumber) { return this.firstNumber % secondNumber; }
}
const calculator = new Calculator();
calculator.numberButtons.forEach((el) => {
  el.addEventListener('click', () => calculator.number(el));
});

calculator.functionButtons.forEach((el) => {
  el.addEventListener('click', () => {
    calculator[el.id](parseFloat(calculator.display));
    calculator.updateDisplay();
    calculator.answer = true;
  });
});
calculator.editButtons.forEach((el) => {
  el.addEventListener('click', () => {
    calculator[el.id](parseFloat(calculator.display));
    calculator.updateDisplay();
  });
});
calculator.operatorButtons.forEach((el) => {
  el.addEventListener('click', () => {
    if (calculator.function === '') {
      calculator.firstNumber = parseFloat(calculator.display);
      calculator.function = el.id;
      calculator.updateDisplay('0');
    } else {
      calculator.firstNumber = calculator[calculator.function](parseFloat(calculator.display));
      calculator.display = 0;
      calculator.function = el.id;
      calculator.updateDisplay();
    }
  });
});
