// understanding function scope
function addNumbers(number) {
  let result = number + 10;
  return result;
}
// console.log(result);


// understanding function scope 2
let fixedNumber = 10;
function multiplyNumbers(number) {
  let result = number * fixedNumber;
  return result;
}
console.log(multiplyNumbers(5));


// understanding function scope 3
let newNumber = 20;
function subtractNumber(number) {

  function divideNumber() {
    let newNumber = 10;
    console.log('In Divide Number: ' + newNumber);
    return newNumber;
  }

  let result = number - divideNumber();
  console.log('In Subtract Number: ' + newNumber);
  return result;
}
console.log('Result: ' + subtractNumber(30));