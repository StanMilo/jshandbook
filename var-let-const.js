/** var, let, const **/

// var - examples:
var a = 5
console.log(a) // 5
var a = 6
console.log(a) // 6

b = 7 // BAD -  it's allowed declare variable without var (it's attached to global scope)

//Hoisting
//Variables declared using var are always hoisted to the top of their scope
console.log(j); // ReferenceError: j is not defined
console.log(i); // undefined
var i = 0;


/** let - examples: **/
// let variables are block-scoped! Specific scope = less mistakes.
let i = 0;
if (i === 0) {
  let i = 1;
}
console.log(i); // 0

// declared variable it's not allowed declare again
let i = 2 // Uncaught SyntaxError: Identifier 'i' has already been declared

if (true) {
  let a = 'hello'
  console.log(a) // hello
}
console.log(a) // var-let-const.js:25 Uncaught ReferenceError: a is not defined

/** const - examples: **/
const NUMBER = 5;
console.log(NUMBER) // 5
NUMBER = 6 // Uncaught TypeError: Assignment to constant variable

const DICT = {a: 1, b: 2}
console.log(DICT) // {a: 1, b: 2}
DICT.b = 3
console.log(DICT) // {a: 1, b: 3} // It's allowed to change value inside json
