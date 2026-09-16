/**
 * Topic 13: Modules (helpers.js)
 *
 * Demonstrates:
 * 1. Named exports (export const / export function)
 * 2. Default export (export default)
 */

// 1. NIMEGA EKSPORDID (Named exports) - saab olla mitu faili kohta
export const APP_VERSION = "2.4.0";

export function formatCurrency(amount, currency = "EUR") {
  return `${amount.toFixed(2)} ${currency}`;
}

export function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// 2. VAIKIMISI EKSPORT (Default export) - saab olla vaid ÜKS faili kohta
export default class Logger {
  static log(message) {
    console.log(`[LOG ${new Date().toLocaleTimeString()}]: ${message}`);
  }
}
