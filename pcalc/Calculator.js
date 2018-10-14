class Calculator  {
    constructor () {
        this.display = "";
        this.firstNumber = 0;
        this.memory = 0;
        this.function = "";
        this.screen = document.getElementById('display');
    }

// Buttons
    memoryRecall() { this.display = this.memory;  updateDisplay(); };
    memoryPlus() { this.memory += parseFloat(this.display); console.log("+" + this.display);};
    memoryMinus() { this.memory -= parseFloat(this.display); };
    memoryClear() { this.memory = 0;};
    play() { document.getElementById("audio").play(); };

    sin(number) { this.display = Math.round(Math.sin(number) * 10000000) / 10000000; };
    cos(number) { this.display = Math.round(Math.cos(number) * 10000000) / 10000000; };
    tan(number) { this.display = Math.round(Math.tan(number) * 10000000) / 10000000; };
    log(number) { this.display = Math.round(Math.log10(number) * 10000000) / 10000000; };
    sqr(number) { this.display = Math.round(Math.sqrt(number) * 10000000) / 10000000; };

    pow(number) { this.display = Math.pow(firstNumber, number); };
    mod() { console.log("mod"); };
    exp() {console.log("exp");};
    percent() {console.log("%");};

    pi() { this.display = "3.14158926";updateDisplay();};

    backspace() {console.log("delete");};
    clear() {calculator.display = "";updateDisplay();};
    clearAll() {            
        calculator.firstNumber = 0;
        calculator.function = ""; 
        calculator.display = "";
    };
    plusMinus() {console.log("+/-");};

    add2() {
        this.firstNumber = parseFloat(this.display);
        this.function = "add";
        this.display = "";
    };

    // Calculations
    multiplyNumbers(number) { this.firstNumber = this.memory * number; };
    divideNumbers(number) { this.firstNumber = this.memory / number; };
    subtractNumbers(number) { this.firstNumber -= number; };
    addNumbers(number) { this.firstNumber += number;console.log(this.firstNumber) };
}