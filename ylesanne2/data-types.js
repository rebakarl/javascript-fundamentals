/**
 * Topic 2: Data Types, null, and undefined
 *
 * Concepts covered:
 * 1. Strings, numbers, booleans, objects, and arrays
 * 2. Checking types with typeof
 * 3. Difference between null and undefined
 * 4. Difference between "5" (string) and 5 (number)
 * 5. Two quirks: typeof null and typeof []
 * 6. Checking arrays with Array.isArray()
 */

console.log("=== 1. Basic Data Types & typeof ===");
const userName = "Mari";            // string
const age = 22;                     // number
const isStudent = true;             // boolean
const userProfile = { id: 101 };    // object
const hobbies = ["lugemine", "ujumine"]; // array (is an object)

console.log(`userName (${userName}):`, typeof userName);
console.log(`age (${age}):`, typeof age);
console.log(`isStudent (${isStudent}):`, typeof isStudent);
console.log("userProfile:", typeof userProfile);
console.log("hobbies:", typeof hobbies); // "object"


console.log("\n=== 2. Difference Between null and undefined ===");
// undefined = muutuja on deklareeritud, kuid sellele pole veel väärtust antud (vaikimisi olek).
// null = programmeerija poolt teadlikult antud väärtus, mis tähistab "puuduvat" või "tühja" väärtust.
let notAssignedYet;
console.log("notAssignedYet:", notAssignedYet, "| typeof:", typeof notAssignedYet); // undefined, "undefined"

let chosenAddress = null; // Teadlikult pole aadressi sisestatud
console.log("chosenAddress:", chosenAddress, "| typeof:", typeof chosenAddress); // null, "object"


console.log("\n=== 3. Difference Between \"5\" and 5 ===");
const strFive = "5";
const numFive = 5;

console.log(`"5" === 5:`, strFive === numFive); // false (range võrdlus kontrollib ka tüüpi)
console.log(`"5" == 5:`, strFive == numFive);   // true (nõrk võrdlus teeb tüübimuunduse)
console.log(`"5" + 2:`, strFive + 2);           // "52" (stringide liitmine / konkatenatsioon)
console.log(`5 + 2:`, numFive + 2);             // 7 (matemaatiline liitmine)


console.log("\n=== 4. Two Famous Quirks ===");
// 1. typeof null === "object" (JavaScripti ajalooline bugi, mida ei parandata tagasiühilduvuse tõttu)
console.log("typeof null:", typeof null); // "object"

// 2. typeof [] === "object" (massiivid on JS-is tegelikult eriliigilised objektid)
console.log("typeof []:", typeof []); // "object"


console.log("\n=== 5. How to Check for Arrays: Array.isArray() ===");
console.log("Array.isArray(hobbies):", Array.isArray(hobbies));           // true
console.log("Array.isArray(userProfile):", Array.isArray(userProfile));   // false
console.log("Array.isArray(null):", Array.isArray(null));                 // false
