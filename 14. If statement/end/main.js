// example 1
if(true) {
  console.log('Hello World 1');
}

// example 2
if(false) {
  console.log('Hello World 2');
}

// example 3 - Use !==
if(5 === 5) {
  console.log('Hello World 3');
}

// example 4 - Use <, >=, <=
let cost = 20;
if(cost > 10) {
  console.log('Hello World 4');
}

// using floating point number
var number = 1.1 + 1.3;
if(+number.toFixed(2) === 2.4) {
  console.log('Hello World 5');
}