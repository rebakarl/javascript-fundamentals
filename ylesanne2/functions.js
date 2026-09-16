/**
 * Topic 9: Functions: Reusable Behavior
 *
 * Concepts covered:
 * 1. Declaring and calling functions
 * 2. Parameters (placeholders) vs Arguments (actual values)
 * 3. Default parameter values
 * 4. Returning values with return
 * 5. Difference between return and console.log()
 * 6. What a function returns without explicit return (undefined)
 */

console.log("=== 1. Declaring & Calling Functions ===");
function sayHello() {
  console.log("Tere tulemast funktsioonide maailma!");
}
sayHello(); // Kutsume funktsiooni välja


console.log("\n=== 2. Parameters vs Arguments & Default Parameters ===");
// 'name' ja 'role' on PARAMEETRID (muutujad funktsiooni definitsioonis)
// 'role = "Külaline"' on VAIKIMISI PARAMEETER
function greetUser(name, role = "Külaline") {
  return `Tere, ${name}! Sinu roll on: ${role}.`;
}

// "Mati" ja "Admin" on ARGUMENDID (tegelikud väärtused väljakutsel)
console.log(greetUser("Mati", "Admin"));
// Kui argument puudub, rakendub vaikeväärtus:
console.log(greetUser("Kadri")); // "Tere, Kadri! Sinu roll on: Külaline."


console.log("\n=== 3. return vs console.log() ===");
// console.log() ainult KUVAB väärtuse ekraanile, kuid ei anna seda koodile edasi.
// return ANNA funktsioonist väärtuse tagasi, mida saab muutujasse salvestada.

function addAndLog(a, b) {
  console.log("Funktsiooni sees prinditud summa:", a + b);
  // Puudub 'return'
}

function addAndReturn(a, b) {
  return a + b;
}

const result1 = addAndLog(5, 5);
console.log("addAndLog tulemus muutujas result1:", result1); // undefined!

const result2 = addAndReturn(5, 5);
console.log("addAndReturn tulemus muutujas result2:", result2); // 10!
console.log("Seda saab edasi kasutada, nt korrutada kahega:", result2 * 2); // 20


console.log("\n=== 4. Return Value Without Explicit 'return' ===");
function emptyFunction() {
  const secret = 42;
}
console.log("Funktsiooni tagastusväärtus ilma 'return'-ita:", emptyFunction()); // undefined
