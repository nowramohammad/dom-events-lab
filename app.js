/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/

/*const display = document.getElementById('display') 
function appendToDisplay(input){
  display.value += input;

}
function clearDisplay() { 
display.value = " ";
}
function caculate(){
try {display.value = eval(display.value);
}
catch(error){
  display.value = "Error"; 
}
}

const numberButtons = document.querySelectorAll(['number'])
const operationButtons = document.querySelectorAll(['operation'])
const equalsButton = document.querySelector(['equals'])
const previousOperandandTextElement = document.querySelector(['previous-operand'])
const currentOperandTextElement = document.querySelector(['current-operand'])
const calculator = new calculator(previousOperandTextElement, currentOperandTextElement)

clear() {
this.currentOperand = '';
this.previousOperand = '';
this.operation = undefined;
}

appendNumber(number) {
  if (number === '.' && this.currentOperand.includs('.')) return
  this.currentOperand = this.currentOperand.toString() + number.toString()
}
getDispalyNumber(number) {
  const stringNumber = number.toString()
  const intergerDigits = parseFloat(stringNumber.split('.')[0])
  const decimalDigits = stringNumber.split('.')[1]
  let integerDisplay
  if (isNaN(integerDigits)) {
    integerDisplay = ''
  } else {
    intergerDisplay = integerDigits.toLocaleString('en', {
      maximumFractionDigits: 0 })
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    } else{
      return integerDisplay
    }
    }
updateDisplay() {
this.curreNTOperandTextElement.innerText = this.currentOperand
if (this.operation != null) {
this.previousOperandTextElement.innerText = 
`${this.previousOperand} ${this.operation}`
}
}
chooseOperation(operation) {
  if (this.currentOperand === '') return
  if (this.previousOperand !== '') {
    this.compute()
  }
  this.operation = operation
  this.previousOperand = this.currentOperand
  this.currentOperand = ''
}
Compute() {
let computation
const prev = parseFloat(this.previousOperand)
const current = parseFloat(this.currentOperand)
if (isNaN(prev) || isNaN(current)) return
switch (this.operation) {
  case '-':
    result = prev + current;
    break;
    case '+':
      result = prev + current;
      break;
      case '*':
        result = prev * current;
        break;
        case '/':
          result = prev / current;
          break; 
          default:
            return;

}
this.currentOperand = computataion
this.operation = undefined
this.previousOperand = ''
}

numberButtons.forEach(button => {
  button.addEventLListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})
operationButtons.forEach(button => {
  button.addEventLListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})
equalsBotton.addEventListener('click', button => {
  calculator.compute()
  calculator.updateDisplay()
})
allClearButton.addEventListener('click', button => {
  calculator.clear()
  calculator.updateDisplay()
}); */

const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
     
      console.log(event.target.innerText);
      
    });
  });
  calculator.addEventListener('click', (event) => {
    
    console.log(event.target.innerText);
  
    if (event.target.classList.contains('equal')) {
      console.log('Equal button clicked')
    }
    if (event.target.classList.contains('clear')) {
      console.log('Clear button clicked');
    }
  });
let currentInput = ``;
let previousInput = ``;
let operation = null;
calculator.addEventListener('click', (event) => {
  const target = event.target;
  const value = target.innerText;
  if (target.classList.contains('number')) {
    currentInput += value;
    console.log('Current Input:=', currentInput);
  
  }
  if (target.classList.contains('operator')) {
    operation = value;
    previousInput = currentInput;
    currentInput = ``;
    console.log('operation:', operation);
  }
  if (target.classList.contains('equal')) {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    switch (operation) {
      case '-':
        result = prev + current;
        break;
        case '+':
          result = prev + current;
          break;
          case '*':
            result = prev * current;
            break;
            case '/':
              result = prev / current;
              break; 
              default:
                return;
    
    }
    currentInput = result.toString();
    operation = null;
    previousInput = '';
    console.log('Result:', result);
  }
  if (target.classList.contains('clear')) {
    currentInput = "";
    previousInput = "";
  operation = null;
console.log('Cleared');
  }

});




  
