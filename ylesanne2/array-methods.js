/**
 * Topic 11: Array Methods: map, filter, and find
 *
 * Concepts covered:
 * 1. Transforming items with .map() -> returns new array of same length
 * 2. Selecting matching items with .filter() -> returns new array of matching items (or [])
 * 3. Getting first matching item with .find() -> returns the item itself (or undefined)
 * 4. Practical example: transforming and searching product catalog
 */

const products = [
  { id: 1, name: "Sülearvuti", price: 1200, inStock: true },
  { id: 2, name: "Juhtmevaba Hiir", price: 25, inStock: true },
  { id: 3, name: "Klaviatuur", price: 80, inStock: false },
  { id: 4, name: "Monitor 27\"", price: 300, inStock: true },
  { id: 5, name: "USB-C Kaabel", price: 15, inStock: false }
];


console.log("=== 1. Transforming with .map() ===");
// .map() loob UUE massiivi, kus iga algne element on teisendatud.
// Ei muuda algset massiivi!
const productTitles = products.map(p => `${p.name} - ${p.price}€`);
console.log("Tootenimed ja hinnad:", productTitles);

// Teeme soodushinnad (kõik 10% odavamad):
const discountedProducts = products.map(p => ({
  ...p,
  discountPrice: p.price * 0.9
}));
console.log("Esimene soodustootega objekt:", discountedProducts[0]);


console.log("\n=== 2. Selecting with .filter() ===");
// .filter() tagastab UUE massiivi ainult neist elementidest, mille puhul tagasikutse tagastab true.
// Kui vasteid pole, tagastab tühja massiivi []!
const availableProducts = products.filter(p => p.inStock);
console.log("Laos olevad tooted (kogus):", availableProducts.length);
console.log("Laotooted:", availableProducts.map(p => p.name));

const luxuryItems = products.filter(p => p.price > 5000);
console.log("Tooted üle 5000€ (pole vasteid):", luxuryItems); // []


console.log("\n=== 3. Finding First Match with .find() ===");
// .find() tagastab ESIMESE sobiva elemendi otse.
// Kui ühtegi vastet pole, tagastab 'undefined'!
const mouse = products.find(p => p.name.includes("Hiir"));
console.log("Leitud hiir:", mouse);

const nonExistent = products.find(p => p.id === 999);
console.log("Otsing id 999 järgi:", nonExistent); // undefined


console.log("\n=== 4. Method Chaining (Meetodite aheldamine) ===");
// Leiame kõik laos olevad tooted, mis maksavad alla 100€, ja teeme neist nimekirja
const affordableInStockNames = products
  .filter(p => p.inStock && p.price < 100)
  .map(p => p.name);

console.log("Taskukohased laotooted:", affordableInStockNames);
