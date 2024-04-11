# Syntax and Basics:
# Difference between == and ===: The == operator compares two values for equality after performing type conversion if necessary, while the === operator compares both value and type without type conversion.

Hoisting in JavaScript: Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use a variable or call a function before it is declared.

Purpose of use strict directive: The "use strict"; directive enables strict mode in JavaScript, which helps catch common coding errors and enforce more stringent parsing and error handling rules.

Commenting in JavaScript: JavaScript supports two types of comments: single-line comments using // and multi-line comments using /* */.

Functions:
Difference between function declarations and function expressions: Function declarations are defined with the function keyword and are hoisted, while function expressions are assigned to variables and are not hoisted.

Returning a value from a function: You can return a value from a function using the return statement followed by the value you want to return.

Function scope vs block scope: Function scope means that variables declared inside a function are only accessible within that function, while block scope means that variables declared within a block (e.g., if statement or loop) are only accessible within that block.

Arrays:
Adding elements to an array: You can add elements to an array using methods like push(), unshift(), or by directly assigning values to specific indexes.

Difference between forEach, map, filter, and reduce:

forEach: Executes a provided function once for each array element.
map: Creates a new array with the results of calling a provided function on every element in the array.
filter: Creates a new array with all elements that pass the test implemented by the provided function.
reduce: Executes a reducer function on each element of the array, resulting in a single output value.
Checking if an element exists in an array: You can use methods like indexOf() or includes() to check if an element exists in an array.

Objects:
Prototypal inheritance in JavaScript: Prototypal inheritance is a mechanism where objects inherit properties and methods from their prototype. JavaScript objects have a hidden internal property called [[Prototype]] that is either another object or null.

Cloning an object in JavaScript: You can clone an object using methods like Object.assign({}, obj) or the spread operator ({...obj}).

Difference between hasOwnProperty and in operator:

hasOwnProperty: Checks if an object has a property with the specified name and returns a boolean value.
in operator: Checks if an object has a property with the specified name, including properties inherited from its prototype chain.
Loops and Conditionals:
Ternary operator in JavaScript: The ternary operator (condition ? expression1 : expression2) is a concise way to write conditional statements. It evaluates the condition and returns either expression1 or expression2 based on the result of the condition.

Breaking out of a loop in JavaScript: You can use the break statement to exit a loop prematurely.

Difference between == and === in conditionals: The == operator performs type coercion, while the === operator performs strict equality comparison without type conversion.

DOM Manipulation:
Creating a new HTML element: You can create a new HTML element using the document.createElement() method.

Difference between innerHTML and textContent:

innerHTML: Sets or returns the HTML content (including tags) of an element.
textContent: Sets or returns the text content (excluding tags) of an element.
Removing an element from the DOM: You can remove an element from the DOM using the remove() method or by removing its parent node.

Asynchronous Programming:
Callback hell and how to avoid it: Callback hell refers to the nesting of multiple asynchronous callback functions, leading to difficult-to-read and maintain code. You can avoid it by using promises, async/await, or modularizing your code.

Event loop in JavaScript: The event loop is a mechanism in JavaScript that handles asynchronous operations. It continuously checks the call stack for functions to execute and processes messages from the event queue when the call stack is empty.

Handling multiple asynchronous operations sequentially: You can handle multiple asynchronous operations sequentially using promises, async/await, or by chaining .then() methods.