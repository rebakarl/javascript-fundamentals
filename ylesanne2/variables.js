/**
 * Topic 1: Variables (const, let, var)
 *
 * Concepts covered:
 * 1. Declaring, assigning, and reassigning variables
 * 2. When to use const vs let
 * 3. Why older code uses var (function scope, hoisting)
 * 4. Block scope: how { } affects variable availability
 */

console.log("=== 1. Declaring, Assigning, and Reassigning ===");

// Declaring with let (value can change)
let score = 10;
console.log("Algne skoor:", score);
score = 25; // Reassignment
console.log("Uus skoor pärast muutmist:", score);

// Declaring with const (constant, cannot be reassigned)
const maxLives = 3;
console.log("Maksimaalsed elud (const):", maxLives);
// maxLives = 4; // TypeError: Assignment to constant variable.


console.log("\n=== 2. When to Use const vs let ===");
// Reegel: Kasuta alati vaikimisi 'const'.
// Kasuta 'let' ainult siis, kui tead kindlalt, et väärtus peab hiljem muutuma (nt loendurid, olekumuutused).
const appName = "MinuRakendus";
let loginAttempts = 0;
loginAttempts++;
console.log(`Rakendus: ${appName}, sisselogimiskatseid: ${loginAttempts}`);


console.log("\n=== 3. Why Older Code Uses var & Its Quirks ===");
// Enne ES6 (2015) oli olemas vaid 'var'.
// 'var' ei arvesta plokiskoopi (block scope), vaid funktsiooni skoopi, ja allub "hoistingule".
var oldSchool = "Olen var muutuja";
if (true) {
  var leakedVariable = "Lekkinud plokist välja";
}
console.log("var väljaspool if-plokki:", leakedVariable); // Töötab, sest var lekib!


console.log("\n=== 4. Block Scope: { } Mõju ===");
// 'let' ja 'const' on plokiskoobiga (block-scoped)
{
  let insideBlock = "Nähtav ainult siin plokis";
  const alsoInside = "Samuti kaitstud";
  console.log("Ploki sees:", insideBlock, "|", alsoInside);
}
// console.log(insideBlock); // ReferenceError: insideBlock is not defined

// Shadowing näide:
let city = "Tallinn";
if (true) {
  let city = "Tartu"; // Varjutab välise muutuja ploki sees
  console.log("Sisemise ploki city:", city); // Tartu
}
console.log("Välise ploki city:", city); // Tallinn
