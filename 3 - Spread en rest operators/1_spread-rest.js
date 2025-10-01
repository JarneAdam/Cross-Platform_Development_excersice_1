/**
 * Herschrijf sumArgs() in ES2015, gebruikmakend van een rest parameter, block scoped variables en arrow functions.
 * Het moet mogelijk zijn om het volgende uit te voeren: sumArgs(1, 2, 3, 4, 5, 6);
 */

const sumArgs = (...args) => args.reduce((result, number) => result + number, 0)

console.log(sumArgs(1, 2, 3, 4, 5, 6));
