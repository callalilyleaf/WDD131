// week1.js - WK1b Ponder: JS Variables and Constants
// All output goes to the browser console (F12 > Console)

// ── 1. Constants and Variables ──────────────────────────────
// A constant: value cannot be reassigned after declaration
const PI = 3.14159;

// A variable: value can be reassigned
let radius = 5;

const area = PI * radius * radius;
console.log('--- Constants and Variables ---');
console.log('PI:', PI);
console.log('radius:', radius);
console.log('area of circle:', area);

// Reassigning the variable is allowed
radius = 10;
console.log('radius reassigned to:', radius);

// Uncommenting the line below would cause a TypeError:
// PI = 3;  // Cannot assign to constant

// ── 2. Type Coercion ────────────────────────────────────────
console.log('\n--- Type Coercion ---');

const num = 1;
const str = '2';

// + with a string triggers string concatenation (coercion)
console.log('1 + "2" =', num + str);          // "12" (string)
console.log('typeof result:', typeof (num + str)); // "string"

// Other operators force numeric conversion
console.log('1 * "2" =', num * str);          // 2 (number)
console.log('1 - "2" =', num - str);          // -1 (number)

// Explicit conversion avoids surprise coercion
console.log('Number("2") + 1 =', Number(str) + num); // 3

// ── 3. Scope ────────────────────────────────────────────────
console.log('\n--- Scope ---');

// Global scope: accessible anywhere in this file
let globalMessage = 'I am global';

function showScope() {
    // Block (function) scope: only accessible inside this function
    let blockMessage = 'I am block scoped';
    console.log('Inside function - globalMessage:', globalMessage);  // accessible
    console.log('Inside function - blockMessage:', blockMessage);    // accessible
}

showScope();

console.log('Outside function - globalMessage:', globalMessage);    // accessible

// Uncommenting the line below would cause a ReferenceError:
// console.log('Outside function - blockMessage:', blockMessage);   // NOT accessible

// Block scope inside an if statement
if (true) {
    let ifScoped = 'I only exist inside this if block';
    console.log('Inside if block:', ifScoped);  // accessible
}

// Uncommenting would throw ReferenceError:
// console.log('Outside if block:', ifScoped);  // NOT accessible
