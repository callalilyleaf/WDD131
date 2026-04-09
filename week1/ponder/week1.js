// week1.js - WK1b Ponder: JS Variables and Constants
// Output goes to the browser console (F12 > Console tab)

// ── Variables ────────────────────────────────────────────────
// Variables are containers for storing data.
// The value assigned to a variable CAN change (reassigned).

let num = 6;
console.log('num:', num);   // 6

num = 10;
console.log('num reassigned:', num);  // 10

// ── Constants ────────────────────────────────────────────────
// Constants also store data, but the value CANNOT change.

const password = 'R3d1ng!';
console.log('password:', password);  // R3d1ng!

// Uncommenting the next line would cause a TypeError:
// password = 'newpass';   // TypeError: Assignment to constant variable

// ── Type Coercion ────────────────────────────────────────────
// JavaScript automatically converts types in some operations.

const one = 1;
const two = '2';

console.log('\n--- Type Coercion ---');
console.log('1 + "2" =', one + two);           // "12" (string concatenation)
console.log('typeof result:', typeof (one + two)); // "string"

// Other arithmetic operators convert strings to numbers:
console.log('1 * "2" =', one * two);           // 2 (number)
console.log('1 - "2" =', one - two);           // -1 (number)

// ── Scope ────────────────────────────────────────────────────
// Where a variable is declared determines where it can be accessed.

let course = "CSE131"; // global scope — accessible anywhere

console.log('\n--- Scope ---');

if (true) {
    let student = "John";
    console.log(course);   // works — course is global
    console.log(student);  // works — accessed inside the block
}

console.log(course); // works — course is global

// Uncommenting next line would cause a ReferenceError:
// console.log(student);  // ReferenceError: student is not defined
