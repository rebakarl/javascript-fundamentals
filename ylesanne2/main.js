/**
 * Topic 13: Modules (main.js)
 *
 * Demonstrates:
 * 1. Importing named exports with { ... }
 * 2. Importing default export without { ... }
 * 3. Matching syntax to exports
 */

// Vaikimisi eksport imporditakse ilma loogeliste sulgedeta (nime saab ise valida):
import Logger from "./helpers.js";

// Nimega ekspordid imporditakse loogeliste sulgude vahel täpse nimega:
import { APP_VERSION, formatCurrency, capitalize } from "./helpers.js";

console.log("=== Modules Demo ===");
Logger.log(`Käivitatud rakenduse versioon: ${APP_VERSION}`);

const rawName = "peeter";
const formattedName = capitalize(rawName);
console.log(`Kasutaja nimi: ${formattedName}`);

const balance = 149.5;
console.log(`Kasutaja saldo: ${formatCurrency(balance)}`);
