/**
 * Topic 8: Objects and Handling Missing Data
 *
 * Concepts covered:
 * 1. Creating objects with properties and values
 * 2. Dot notation vs bracket notation
 * 3. Adding and updating properties
 * 4. Nested objects
 * 5. Accessing missing properties (returns undefined)
 * 6. Optional chaining: ?.
 * 7. Nullish coalescing: ??
 * 8. Comparing ?? vs || with falsy values (0, false, "")
 * 9. Practical example: displaying user profile with missing info
 */

console.log("=== 1. Creating and Accessing Objects ===");
const user = {
  id: 42,
  username: "karl_koodib",
  role: "developer"
};

// Dot notation
console.log("Punktinotatsioon:", user.username);

// Bracket notation (kasulik dünaamiliste võtmete või tühikutega võtmete puhul)
const keyToRead = "role";
console.log("Nurgelised sulud:", user[keyToRead]);


console.log("\n=== 2. Adding & Updating Properties ===");
user.role = "lead_developer"; // Uuendamine
user.isVerified = true;       // Lisamine
console.log("Uuendatud objekt:", user);


console.log("\n=== 3. Missing Properties & Optional Chaining (?.) ===");
console.log("Mitteeksisteeriv omadus:", user.phoneNumber); // undefined

const complexUser = {
  name: "Liina",
  address: {
    city: "Pärnu"
    // zipCode puudub
  }
  // contact info puudub
};

// Ilma valikulise ahelata (?.) tekitaks sügava puuduva välja lugemine vea:
// console.log(complexUser.contact.email); // TypeError: Cannot read properties of undefined (reading 'email')

// Valikulise ahelaga (?.) tagastatakse ohutult undefined:
console.log("Valikuline aheldamine (?.) contact?.email:", complexUser.contact?.email);
console.log("Valikuline aheldamine address?.city:", complexUser.address?.city);


console.log("\n=== 4. Nullish Coalescing (??) vs Logical OR (||) ===");
// '??' arvestab fallbacki AINULT siis, kui väärtus on null või undefined.
// '||' arvestab fallbacki IGASUGUSE falsy väärtuse puhul (0, false, "", null, undefined).

const scoreZero = 0;
const emptyBio = "";
const userStatus = false;

console.log("scoreZero || 10:", scoreZero || 10); // 10 (vale, sest 0 on kehtiv skoor!)
console.log("scoreZero ?? 10:", scoreZero ?? 10); // 0 (õige!)

console.log("emptyBio || 'Pole biograafiat':", emptyBio || "Pole biograafiat"); // Fallback aktiveerub
console.log("emptyBio ?? 'Pole biograafiat':", `"${emptyBio ?? "Pole biograafiat"}"`); // "" (tühi string säilib)


console.log("\n=== 5. Practical Example: Displaying User Profile ===");
function renderUserProfile(profile) {
  const name = profile.name ?? "Anonüümne kasutaja";
  const city = profile.address?.city ?? "Linn teadmata";
  const points = profile.stats?.points ?? 0;
  const bio = profile.bio ?? "Kirjeldus puudub.";

  return `
--- KASUTAJA PROFIIL ---
Nimi:    ${name}
Linn:    ${city}
Punktid: ${points}
Bio:     ${bio}
------------------------`;
}

const incompleteProfile = {
  name: "Markus",
  stats: {
    points: 0 // Punktid on 0, mitte puudu!
  }
};

console.log(renderUserProfile(incompleteProfile));
