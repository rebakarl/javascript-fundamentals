/**
 * Topic 3: Operators and Type Conversion
 *
 * Concepts covered:
 * 1. Arithmetic operators: +, -, *, /, %, and **
 * 2. Updating values with += and ++
 * 3. Converting values with Number() and String()
 * 4. Comparing "5" + 2 with Number("5") + 2
 * 5. What NaN means
 */

console.log("=== 1. Arithmetic Operators ===");
const a = 10;
const b = 3;

console.log(`Liitmine (${a} + ${b}):`, a + b);       // 13
console.log(`Lahutamine (${a} - ${b}):`, a - b);    // 7
console.log(`Korrutamine (${a} * ${b}):`, a * b);   // 30
console.log(`Jagamine (${a} / ${b}):`, a / b);      // 3.3333333333333335
console.log(`Jääk (${a} % ${b}):`, a % b);          // 1 (modulo)
console.log(`Astendamine (${a} ** ${b}):`, a ** b); // 10^3 = 1000


console.log("\n=== 2. Updating Values with += and ++ ===");
let count = 5;
count += 10; // Sama mis: count = count + 10;
console.log("count += 10 tulemus:", count); // 15

count++; // Suurendab 1 võrra (post-inkrement)
console.log("count++ tulemus:", count); // 16


console.log("\n=== 3. Type Conversion with Number() and String() ===");
const textNumber = "42";
const convertedNum = Number(textNumber);
console.log("Number('42'):", convertedNum, "| tüüp:", typeof convertedNum);

const realNumber = 123;
const convertedStr = String(realNumber);
console.log("String(123):", convertedStr, "| tüüp:", typeof convertedStr);


console.log("\n=== 4. Comparing '5' + 2 with Number('5') + 2 ===");
const concatResult = "5" + 2;
const mathResult = Number("5") + 2;

console.log(`"5" + 2 tulemus:`, concatResult, `(tüüp: ${typeof concatResult})`); // "52"
console.log(`Number("5") + 2 tulemus:`, mathResult, `(tüüp: ${typeof mathResult})`); // 7


console.log("\n=== 5. What NaN Means ===");
// NaN = "Not-a-Number". Tekib siis, kui matemaatilist tehet üritatakse teha mittearvulise väärtusega,
// mida ei saa numbriks teisendada.
const invalidMath = Number("tere") * 2;
console.log("Number('tere') * 2:", invalidMath); // NaN
console.log("Number.isNaN(invalidMath):", Number.isNaN(invalidMath)); // true
console.log("NaN tüüp (typeof NaN):", typeof NaN); // "number"
