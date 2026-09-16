/**
 * Topic 12: Destructuring and Spread Syntax
 *
 * Concepts covered:
 * 1. Extracting values: object and array destructuring
 * 2. Copying arrays and objects with spread (...)
 * 3. Adding an item to a new array using spread
 * 4. Updating a property in a new object using spread
 * 5. Why a 'const' object can still be modified (reference vs value)
 * 6. Why spread creates a shallow copy (nested objects share reference)
 */

console.log("=== 1. Destructuring (Objektid ja Massiivid) ===");
// Objekti lahtipakkimine (destructuring)
const user = { id: 10, username: "karl", email: "karl@example.com", country: "Eesti" };
const { username, email } = user;
console.log("Lahtipakitud:", username, email);

// Massiivi lahtipakkimine
const rgb = [255, 128, 0];
const [red, green, blue] = rgb;
console.log(`Värvid: Red=${red}, Green=${green}, Blue=${blue}`);


console.log("\n=== 2. Spread (...) with Arrays & Adding Items ===");
const originalFruits = ["Õun", "Banaan"];
// Loome uue massiivi, kopeerides vanad ja lisades uue
const updatedFruits = [...originalFruits, "Kirss"];

console.log("Algne massiiv:", originalFruits); // Säilis muutmata
console.log("Uus massiiv lisaelemendiga:", updatedFruits);


console.log("\n=== 3. Spread (...) with Objects & Updating Properties ===");
const originalSettings = { theme: "dark", notifications: true, fontSize: 14 };

// Loome uue objekti, kirjutades üle 'fontSize' ja lisades 'language'
const newSettings = {
  ...originalSettings,
  fontSize: 16,
  language: "et"
};

console.log("Algne seadistus:", originalSettings);
console.log("Uuendatud seadistus:", newSettings);


console.log("\n=== 4. Why a 'const' Object Can Be Modified ===");
// 'const' kaitseb MUUTUJA VIIDET (memory address), mitte objekti sisemisi väärtusi!
const car = { brand: "Toyota", year: 2020 };
car.year = 2023; // Lubatud! Objekt muteerub.
console.log("Muudetud const objekt:", car);

// car = { brand: "BMW" }; // VIGA: TypeError: Assignment to constant variable.


console.log("\n=== 5. Shallow Copy vs Deep Copy ===");
// Spread (...) teeb PINNAPEALSE KOOPIA (shallow copy).
// Pesastatud objektid viitavad endiselt samale mäluaadressile!
const originalPerson = {
  name: "Priit",
  details: { city: "Tartu" }
};

const copiedPerson = { ...originalPerson };
copiedPerson.name = "Madis"; // Muudab vaid koopiat
copiedPerson.details.city = "Tallinn"; // HOIATUS: Muudab ka algset objekti!

console.log("Algne linna väärtus:", originalPerson.details.city); // "Tallinn"! (sest details on viidatud)
console.log("Koopia linna väärtus:", copiedPerson.details.city);   // "Tallinn"
