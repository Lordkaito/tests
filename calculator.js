// create a simple calculator using classes

class Calculator {
  add(numberOne, numberTwo) {
    return numberOne + numberTwo;
  }
  subtract(numberOne, numberTwo) {
    return numberOne - numberTwo;
  }
  multiply(numberOne, numberTwo) {
    return numberOne * numberTwo;
  }
  divide(numberOne, numberTwo) {
    return numberOne / numberTwo;
  }
}

const calculator = new Calculator();
// console.log(calculator.add(3,5));
// console.log(calculator.subtract(2,1));

module.exports = calculator;