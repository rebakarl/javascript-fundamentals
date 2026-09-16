/**
 * JavaScripti praktiline kordamisülesanne: Kasutajate massiiv ja meetodid
 * 
 * Kõik punktid 3.1 kuni 3.12 lahendatuna töötava koodiga.
 */

// Algne kasutajate massiiv
const users = [
  { id: 1, name: "Mari", age: 22, active: true },
  { id: 2, name: "Jüri", age: 17, active: false },
  { id: 3, name: "Kati", age: 31, active: true },
  { id: 4, name: "Martin", age: 19, active: false },
  { id: 5, name: "Laura", age: 26, active: true }
];

console.log("=== Algne kasutajate massiiv ===");
console.log(users);


// 3.1. Kuva console.log() abil kõikide kasutajate nimed.
console.log("\n=== 3.1. Kõikide kasutajate nimed ===");
users.forEach(user => {
  console.log(user.name);
});


// 3.2. Kasuta .filter() meetodit, et leida kõik aktiivsed kasutajad.
console.log("\n=== 3.2. Aktiivsed kasutajad (.filter) ===");
const activeUsers = users.filter(user => user.active);
console.log(activeUsers);


// 3.3. Kasuta .filter() meetodit, et leida kõik vähemalt 18-aastased kasutajad.
console.log("\n=== 3.3. Vähemalt 18-aastased kasutajad (.filter) ===");
const adultUsers = users.filter(user => user.age >= 18);
console.log(adultUsers);


// 3.4. Kasuta .map() meetodit, et luua uus massiiv, mis sisaldab ainult kasutajate nimesid.
console.log("\n=== 3.4. Ainult kasutajate nimed (.map) ===");
const userNames = users.map(user => user.name);
console.log(userNames);


// 3.5. Kasuta .find() meetodit, et leida kasutaja, kelle id on 3.
console.log("\n=== 3.5. Kasutaja, kelle id on 3 (.find) ===");
const userWithId3 = users.find(user => user.id === 3);
console.log(userWithId3);


// 3.6. Kirjuta tavaline funktsioon getUserStatus(user), mis tagastab:
//      "Aktiivne", kui kasutaja on aktiivne;
//      "Mitteaktiivne", kui kasutaja ei ole aktiivne.
console.log("\n=== 3.6. Funktsioon getUserStatus(user) ===");
function getUserStatus(user) {
  if (user.active) {
    return "Aktiivne";
  } else {
    return "Mitteaktiivne";
  }
}
console.log(`Mari staatus: ${getUserStatus(users[0])}`);
console.log(`Jüri staatus: ${getUserStatus(users[1])}`);


// 3.7. Kirjuta arrow function getGreeting(user), mis kasutab template literal'it ja tagastab näiteks:
//      "Tere, Mari! Sa oled 22 aastat vana."
console.log("\n=== 3.7. Noolefunktsioon getGreeting(user) ===");
const getGreeting = user => `Tere, ${user.name}! Sa oled ${user.age} aastat vana.`;
console.log(getGreeting(users[0]));
console.log(getGreeting(users[2]));


// 3.8. Kasuta destructuring'ut, et võtta ühe kasutaja objektist välja name ja age.
console.log("\n=== 3.8. Destructuring (name ja age) ===");
const { name, age } = users[0];
console.log(`Lahtipakitud andmed: Nimi = ${name}, Vanus = ${age}`);


// 3.9. Kasuta spread-süntaksit, et luua uus kasutaja, kelle andmed on:
//      { id: 6, name: "Karl", age: 24, active: true }
//      Lisa uus kasutaja uude massiivi nii, et esialgne users massiiv ei muutuks.
console.log("\n=== 3.9. Spread süntaksiga uue kasutaja lisamine uude massiivi ===");
const newUser = { id: 6, name: "Karl", age: 24, active: true };
const updatedUsers = [...users, newUser];

console.log("Uus massiiv (6 kasutajat):", updatedUsers);
console.log("Algse massiivi pikkus jäi puutumatuks:", users.length); // 5


// 3.10. Lisa ühele kasutajale valikuline omadus address:
//       address: { city: "Tallinn" }
//       Kuva kasutaja linn optional chaining'u abil: user.address?.city
//       Kui linna ei ole, kuva nullish coalescing'u abil "Linn puudub": user.address?.city ?? "Linn puudub"
console.log("\n=== 3.10. Optional chaining (?.) ja Nullish coalescing (??) ===");
// Loome koopia esimesest kasutajast, kellel on aadress:
const userWithAddress = {
  ...users[0],
  address: { city: "Tallinn" }
};
// Teisel kasutajal (Jüri) aadress puudub:
const userWithoutAddress = users[1];

console.log(`${userWithAddress.name} linn:`, userWithAddress.address?.city ?? "Linn puudub");
console.log(`${userWithoutAddress.name} linn:`, userWithoutAddress.address?.city ?? "Linn puudub");


// 3.11. Käi kasutajad läbi .forEach() abil ja kuva iga kasutaja kohta:
//       Mari – Aktiivne
//       Jüri – Mitteaktiivne
console.log("\n=== 3.11. forEach läbikäimine koos staatusega ===");
users.forEach(user => {
  console.log(`${user.name} – ${getUserStatus(user)}`);
});


// 3.12. Sorteeri kasutajad vanuse järgi noorimast vanimani.
console.log("\n=== 3.12. Kasutajate sorteerimine noorimast vanimani ===");
// Teeme enne sorteerimist massiivist koopia [...users], et mitte muteerida algset massiivi:
const sortedUsers = [...users].sort((a, b) => a.age - b.age);
console.log(sortedUsers);
