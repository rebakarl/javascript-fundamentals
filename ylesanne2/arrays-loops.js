/**
 * Topic 7: Arrays and Loops
 *
 * Concepts covered:
 * 1. Creating arrays and zero-based index access
 * 2. .length property
 * 3. Array mutation: .push() and .pop() (modify original), .includes() (pure query)
 * 4. Iterating with classic 'for' vs 'for...of'
 * 5. Counter, condition, update in 'for' loop
 * 6. Using 'break' to terminate loop early
 * 7. Practical example: names list creation, update, and printing
 */

console.log("=== 1. Creating Arrays & Zero-Based Indexing ===");
const fruits = ["Õun", "Banaan", "Pirn"];
console.log("Esimene element (indeks 0):", fruits[0]); // Õun
console.log("Teine element (indeks 1):", fruits[1]);   // Banaan
console.log("Elementide koguarv (.length):", fruits.length); // 3
console.log("Viimane element (fruits[fruits.length - 1]):", fruits[fruits.length - 1]); // Pirn


console.log("\n=== 2. Array Methods & Mutability ===");
// .push() lisab lõppu ja MUUDAB algset massiivi (muteerib)
fruits.push("Apelsin");
console.log("Pärast push('Apelsin'):", fruits);

// .pop() eemaldab viimase elemendi ja tagastab selle (muteerib algset massiivi)
const removedItem = fruits.pop();
console.log("Eemaldatud pop() abil:", removedItem);
console.log("Massiiv pärast pop():", fruits);

// .includes() EI muuda massiivi, vaid tagastab tõeväärtuse
console.log("Kas sisaldab 'Banaan'?:", fruits.includes("Banaan")); // true
console.log("Kas sisaldab 'Kiivi'?:", fruits.includes("Kiivi"));   // false


console.log("\n=== 3. Classic 'for' Loop ===");
// Struktuur: for (loendur; tingimus; samm/uuendus)
for (let i = 0; i < fruits.length; i++) {
  console.log(`Indeks ${i}: ${fruits[i]}`);
}


console.log("\n=== 4. Modern 'for...of' Loop & 'break' ===");
// Lihtsam ja loetavam, kui indeksit pole vaja
for (const fruit of fruits) {
  if (fruit === "Banaan") {
    console.log("Leiti Banaan, katkestame tsükli (break)!");
    break; // Katkestab tsükli koheselt, ennetades liigset kordamist
  }
  console.log("Puu-vili:", fruit);
}


console.log("\n=== 5. Practical Example: Managing Name List ===");
const names = ["Karl", "Mari", "Jaan"];
console.log("Algne nimekiri:", names);

// Lisame uue nime
names.push("Liis");

// Kontrollime, kas keegi on olemas
if (!names.includes("Peeter")) {
  names.push("Peeter");
}

console.log("Uuendatud nimekiri printimisel:");
let position = 1;
for (const name of names) {
  console.log(`  ${position}. ${name}`);
  position++;
}
