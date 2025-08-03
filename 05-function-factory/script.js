// Starter examples (function output expectations are provided in README)

//  const double = makeMultiplier(2);
//     console.log(double(5)); // 10

//      const sayHi = makeGreeter("Hi");
//     console.log(sayHi("Mia")); // "Hi, Mia!"

// Start coding here...
// 1. Function 
const makeMultiplier = factor => num => num * factor;
const double = makeMultiplier(3);
const multiplierResult = double(5);

const makeGreeter = greeting => name => `${greeting}, ${name}!`;
const greetings = makeGreeter("Hello there");
const greeterResult = greetings("Ren");

// Display results in HTML
document.getElementById('multiplier-result').textContent = `Double (5): ${multiplierResult}`;
document.getElementById('greeter-result').textContent = greeterResult;