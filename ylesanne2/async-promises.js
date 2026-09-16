/**
 * Topic 14: Asynchronous JavaScript: Promises and async/await
 *
 * Concepts covered:
 * 1. Why operations finish later (I/O, network, timers)
 * 2. What a Promise represents (future value placeholder)
 * 3. Promise states: pending, fulfilled, rejected
 * 4. Using async and await for clean readable asynchronous code
 * 5. Why an async function ALWAYS returns a promise
 * 6. Practical example: awaiting simulated database/network query
 */

console.log("=== 1. Why Async? The Event Loop & Delays ===");
console.log("[1] Koodi algus (sünkroonne)");

// Simuleerime toimingut, mis võtab aega (nt võrgupäring)
setTimeout(() => {
  console.log("[3] setTimeout lõppes (asünkroonne tagasikutse)");
}, 100);

console.log("[2] Koodi lõpp (sünkroonne - käivitub ENNE taimerit!)");


// Ootame hetke, et esimesed logid tuleksid enne järgmist demo
await new Promise(res => setTimeout(res, 150));


console.log("\n=== 2. Promises & Their States ===");
// Lubadus (Promise) võib olla ühes kolmest olekust:
// 1. Pending (ootel)
// 2. Fulfilled (edukalt täidetud - resolve)
// 3. Rejected (vigane/katkestatud - reject)

function fetchUserFromDB(userId) {
  return new Promise((resolve, reject) => {
    console.log(`[DB]: Otsin kasutajat ID-ga ${userId}... (olek: PENDING)`);
    setTimeout(() => {
      if (userId > 0) {
        resolve({ id: userId, name: "Tanel Tamm", role: "Kasutaja" }); // FULFILLED
      } else {
        reject(new Error("Vigane kasutaja ID! ID peab olema positiivne arv.")); // REJECTED
      }
    }, 200);
  });
}


console.log("\n=== 3. Using async / await ===");
// 'async' funktsioon võimaldab sees kasutada 'await' võtmesõna.
// 'async' funktsioon tagastab ALATI Promise'i, isegi kui tagastame tavalise väärtuse!

async function getUserData() {
  try {
    console.log("Kutsun välja fetchUserFromDB...");
    // 'await' peatab selle funktsiooni sisese täitmise kuni Promise laheneb
    const user = await fetchUserFromDB(5);
    console.log("[DB Vastus edukas]:", user.name, "-", user.role);
    return user;
  } catch (error) {
    console.error("[Viga]:", error.message);
  }
}

// async funktsiooni tagastusväärtus on Promise:
const promiseObj = getUserData();
console.log("getUserData() kohene tagastusväärtus:", promiseObj); // Promise { <pending> }

await promiseObj; // Ootame ära, et konsool oleks puhas järgmisteks teemadeks
