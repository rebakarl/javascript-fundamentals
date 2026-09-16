/**
 * Topic 6: Numbers and the Math Object
 *
 * Concepts covered:
 * 1. Rounding: Math.round(), Math.floor(), Math.ceil()
 * 2. Finding extremes: Math.min() and Math.max()
 * 3. Range of Math.random() (0 <= x < 1)
 * 4. Practical example: generating random whole number from 1 to 6 (dice roll)
 */

console.log("=== 1. Rounding Methods ===");
const val = 4.7;
const val2 = 4.3;

console.log("Math.round(4.7) (lähima täisarvuni):", Math.round(val)); // 5
console.log("Math.round(4.3):", Math.round(val2));                   // 4

console.log("Math.floor(4.7) (alati alla):", Math.floor(val));        // 4
console.log("Math.ceil(4.3) (alati üles):", Math.ceil(val2));         // 5


console.log("\n=== 2. Finding Extremes: Math.min & Math.max ===");
console.log("Math.min(10, 5, 42, -3, 8):", Math.min(10, 5, 42, -3, 8)); // -3
console.log("Math.max(10, 5, 42, -3, 8):", Math.max(10, 5, 42, -3, 8)); // 42

// Massiivi puhul kasutatakse tihti spread operaatorit (...)
const prices = [19.99, 5.50, 49.00, 12.30];
console.log("Madalaim hind massiivist:", Math.min(...prices)); // 5.5


console.log("\n=== 3. Understanding Math.random() ===");
// Math.random() tagastab ujukomaarvu vahemikus [0, 1) ehk 0 on kaasatud, aga 1 EI OLE.
const randomVal = Math.random();
console.log("Juhuslik väärtus [0, 1):", randomVal);


console.log("\n=== 4. Practical Example: Dice Roll (1 kuni 6) ===");
function rollDice() {
  // Math.random() * 6 annab arvu vahemikus [0, 6)
  // Math.floor() teeb sellest täisarvu 0 kuni 5
  // + 1 nihutab vahemiku 1 kuni 6 peale
  return Math.floor(Math.random() * 6) + 1;
}

console.log("Täringuvisked:");
for (let i = 1; i <= 5; i++) {
  console.log(`  Vise ${i}: ${rollDice()}`);
}
