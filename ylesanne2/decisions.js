/**
 * Topic 5: Comparisons, Logical Operators, and Decisions
 *
 * Concepts covered:
 * 1. Comparison operators: ===, !==, >, <, >=, <=
 * 2. Why prefer === over == (strict vs loose equality)
 * 3. Logical operators: && (AND), || (OR), ! (NOT)
 * 4. Truthy and falsy values ("", 0, null, undefined, NaN, false)
 * 5. Control flow: if, else if, else
 * 6. Ternary operator: condition ? valueA : valueB
 * 7. Practical example: checking age and login status
 */

console.log("=== 1. Strict (===) vs Loose (==) Equality ===");
// '==' teeb varjatud tüübimuunduse (coercion), mis viib ootamatute vigadeni.
// '===' kontrollib nii tüüpi kui ka väärtust ilma muunduseta.
console.log(`5 == "5":`, 5 == "5");     // true (ohtlik!)
console.log(`5 === "5":`, 5 === "5");   // false (ohutu, eelistatud)
console.log(`0 == false:`, 0 == false); // true
console.log(`0 === false:`, 0 === false); // false


console.log("\n=== 2. Logical Operators (&&, ||, !) ===");
const hasTicket = true;
const isVIP = false;

console.log("Ticket AND VIP (&&):", hasTicket && isVIP); // false
console.log("Ticket OR VIP (||):", hasTicket || isVIP);  // true
console.log("NOT Ticket (!):", !hasTicket);              // false


console.log("\n=== 3. Truthy and Falsy Values ===");
// Falsy väärtused JS-is: false, 0, -0, "", null, undefined, NaN
const falsyList = [false, 0, "", null, undefined, NaN];
falsyList.forEach(val => {
  console.log(`Kas ${String(val)} on truthy?`, Boolean(val)); // Kõik on false
});

// Kõik muu on Truthy (sh tühjad massiivid [] ja objektid {})
console.log("Kas [] on truthy?", Boolean([])); // true!
console.log("Kas {} on truthy?", Boolean({})); // true!


console.log("\n=== 4. Ternary Operator (condition ? A : B) ===");
const userScore = 85;
const resultStatus = userScore >= 50 ? "Sooritatud" : "Läbi kukkunud";
console.log("Eksami tulemus:", resultStatus);


console.log("\n=== 5. Practical Example: Age & Login Check ===");
function checkAccess(age, isLoggedIn) {
  if (!isLoggedIn) {
    return "Palun logi esmalt sisse.";
  } else if (age < 18) {
    return "Ligipääs piiratud: oled alla 18 aasta vana.";
  } else {
    return "Tere tulemast! Ligipääs lubatud täiskasvanute portaalile.";
  }
}

console.log(checkAccess(25, false)); // Palun logi esmalt sisse.
console.log(checkAccess(15, true));  // Ligipääs piiratud: oled alla 18 aasta vana.
console.log(checkAccess(21, true));  // Tere tulemast! Ligipääs lubatud täiskasvanute portaalile.
