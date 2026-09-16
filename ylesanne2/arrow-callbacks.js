/**
 * Topic 10: Arrow Functions and Callbacks
 *
 * Concepts covered:
 * 1. Function expressions and arrow function syntax
 * 2. Implicit returns vs explicit return
 * 3. Comparing x => x * 2 with x => { return x * 2; }
 * 4. Callbacks: passing a function as an argument
 * 5. Practical example: using callback with .forEach()
 */

console.log("=== 1. Function Expression vs Arrow Function ===");
// Tavaline funktsiooniavaldis:
const greetClassic = function(name) {
  return `Tere, ${name}!`;
};

// Noolefunktsioon (Arrow function):
const greetArrow = (name) => {
  return `Tere, ${name}!`;
};

console.log(greetClassic("Anneli"));
console.log(greetArrow("Anneli"));


console.log("\n=== 2. Implicit Return vs Explicit Return ===");
// 1. Üherealine implitsiitne (kaudne) return:
// Kui loogelisi sulge {} pole, tagastatakse avaldise tulemus automaatselt!
const doubleImplicit = x => x * 2;

// 2. Eksplitsiitne (otsene) return:
// Kui kasutatakse loogelisi sulge {}, on 'return' KOHUSTUSLIK!
const doubleExplicit = (x) => {
  return x * 2;
};

console.log("doubleImplicit(5):", doubleImplicit(5)); // 10
console.log("doubleExplicit(5):", doubleExplicit(5)); // 10


console.log("\n=== 3. Common Pitfall: {} Ilma Returnita ===");
const brokenArrow = x => { x * 2 }; // Sulud ilma 'return'-ita
console.log("brokenArrow(5):", brokenArrow(5)); // undefined!


console.log("\n=== 4. Callbacks: Passing Functions ===");
// Tagasikutse (callback) on funktsioon, mis antakse argumendina teisele funktsioonile
function processUserInput(name, callback) {
  console.log("Andmete eeltöötlus...");
  callback(name);
}

function showNotification(text) {
  console.log(`[TEAVITUS]: Kasutaja ${text} logis sisse.`);
}

processUserInput("Martin", showNotification);


console.log("\n=== 5. Practical Example: .forEach() with Arrow Callback ===");
const scores = [80, 95, 60, 100];

console.log("Tulemused:");
scores.forEach((score, index) => {
  console.log(`  Õpilane #${index + 1}: ${score} punkti (${score >= 75 ? "Kiitus!" : "Tubli!"})`);
});
