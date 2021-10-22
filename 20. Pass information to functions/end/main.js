// pass information to function
function myMessage(message) {
  console.log(message);
}
myMessage('My first message');
myMessage('My second message');

// pass multiple parameters 
function greetings(greet, name) {
  console.log(greet + ' ' + name);
}
greetings('Hello', 'John');