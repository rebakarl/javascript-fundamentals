/**
 * Topic 4: Strings and Template Literals
 *
 * Concepts covered:
 * 1. Creating strings with single quotes, double quotes, and backticks
 * 2. Using .length, .trim(), .toLowerCase(), and .includes()
 * 3. Inserting values with ${variable} (string interpolation)
 * 4. Example: cleaning up a name and building a greeting
 */

console.log("=== 1. String Creation Syntax ===");
const singleQuote = 'Ühekordsed jutumärgid';
const doubleQuote = "Topeltjutumärgid";
const backticks = `Graavis ehk tagurpidi jutumärk (Template Literal)`;

console.log(singleQuote);
console.log(doubleQuote);
console.log(backticks);


console.log("\n=== 2. Useful String Methods ===");
const messyText = "   JavaScript on VägeV!   ";

console.log("Algne tekst:", `"${messyText}"`);
console.log("Pikkus (.length):", messyText.length); // 26 (arvestab ka tühikuid)

const cleanedText = messyText.trim();
console.log("Puhastatud (.trim()):", `"${cleanedText}"`);
console.log("Uus pikkus:", cleanedText.length);

const lowerText = cleanedText.toLowerCase();
console.log("Väiketähtedega (.toLowerCase()):", lowerText);

console.log("Kas sisaldab 'script'? (.includes()):", lowerText.includes("script")); // true
console.log("Kas sisaldab 'python'? (.includes()):", lowerText.includes("python")); // false


console.log("\n=== 3. Template Literals & Interpolation ===");
const user = "Kadri";
const course = "Veebirakendused";
const lessonNum = 1;

// Vana viis (+ märgiga):
const oldGreeting = "Tere, " + user + "! Tere tulemast kursusele " + course + " (tund " + lessonNum + ").";
console.log("Vana viis (+):", oldGreeting);

// Kaasaegne viis (tagurpidi jutumärgid ja ${}):
const modernGreeting = `Tere, ${user}! Tere tulemast kursusele ${course} (tund ${lessonNum}).`;
console.log("Uus viis (${}):", modernGreeting);


console.log("\n=== 4. Practical Example: Cleaning Name & Building Greeting ===");
function createPersonalGreeting(rawInputName, role) {
  // 1. Eemaldame liigsed tühikud algusest ja lõpust
  const trimmed = rawInputName.trim();
  
  // 2. Teeme nime esimese tähe suureks ja ülejäänud väikeseks
  const formattedName = trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
  
  // 3. Koostame tervituse kasutades mallilitseraali
  return `Tere, austatud ${formattedName}! Teie roll süsteemis on: ${role}.`;
}

const userInput = "   jOhAnNeS   ";
console.log(createPersonalGreeting(userInput, "Arendaja"));
