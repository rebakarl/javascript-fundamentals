/**
 * Topic 15: Fetching Data, JSON, and Error Handling
 *
 * Concepts covered:
 * 1. Requesting data with fetch()
 * 2. Checking response.ok (HTTP status 200-299)
 * 3. Reading JSON with await response.json()
 * 4. Difference between JSON (text format) and JavaScript object (in-memory data structure)
 * 5. Handling network vs HTTP errors with try/catch
 * 6. Why an HTTP 404/500 requires explicit response.ok check
 */

console.log("=== 1. Difference Between JSON and JavaScript Object ===");
// JavaScript objekt (mälus olev andmestruktuur):
const jsObject = {
  title: "Programmeerimine",
  lessons: 15,
  isActive: true
};

// JSON (JavaScript Object Notation) - standardne tekstiline andmevahetusformaat:
// Reeglid: võtmed peavad olema topeltjutumärkides "", funktsioone ega meetodeid ei tohi olla.
const jsonString = JSON.stringify(jsObject, null, 2);
console.log("JSON sõne kujul (JSON.stringify):");
console.log(jsonString);

const parsedBack = JSON.parse(jsonString);
console.log("Tagasi JS objektiks (JSON.parse):", parsedBack.title);


console.log("\n=== 2. Fetching Real Data & Checking response.ok ===");
// Kasutame usaldusväärset avalikku testimise API-t (JSONPlaceholder)
async function fetchPost(postId) {
  const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;

  try {
    console.log(`[Päring]: Saadan GET päringu aadressile: ${url}`);
    const response = await fetch(url);

    // OLULINE: fetch() EI viska viga ega lähe 'catch' plokki HTTP 404 või 500 korral!
    // 'fetch' rejectib Promise'i AINULT võrguühenduse täielikul katkemisel (DNS viga, offline jne).
    // Seetõttu peame ALATI kontrollima 'response.ok'!
    if (!response.ok) {
      throw new Error(`HTTP viga! Staatuse kood: ${response.status} (${response.statusText})`);
    }

    const data = await response.json();
    console.log("[Õnnestus]: Saadud andmed:");
    console.log({ id: data.id, title: data.title });
    return data;
  } catch (error) {
    console.error("[Veatöötlus (catch)]:", error.message);
  }
}

// 1. Edukas päring (postitus 1 eksisteerib)
console.log("--- Test 1: Edukas päring (ID 1) ---");
await fetchPost(1);

// 2. HTTP 404 päring (postitust 999999 pole olemas)
console.log("\n--- Test 2: HTTP 404 päring (ID 999999) ---");
await fetchPost(999999);
