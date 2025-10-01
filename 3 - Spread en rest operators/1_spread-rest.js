/**
 * Herschrijf sumArgs() in ES2015, gebruikmakend van een rest parameter, block scoped variables en arrow functions.
 * Het moet mogelijk zijn om het volgende uit te voeren: sumArgs(1, 2, 3, 4, 5, 6);
 */
var arguments = [1, 2, 3, 4, 5, 6]; // verwijder deze lijn

function sumArgs(arguments) {
  var result = 0;

  for (var i = 0; i < arguments.length; ++i) {
    result += arguments[i];
  }

  return result;
}

console.log(sumArgs(arguments));
