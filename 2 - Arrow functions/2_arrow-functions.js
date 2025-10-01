/**
 * Vorm onderstaande 'praise' om tot een arrow function van één lijn.
 */
var praise = function() {
  console.log("🙌");
};

praise();

/**
 * Vorm 'convertIntoMilliseconds' om tot een arrow function van één lijn.
 */
var convertIntoMilliseconds = function(seconds) {
  return seconds * 1000;
};

console.log(convertIntoMilliseconds(5));

/**
 * Schrijf een nieuwe arrow function met drie parameters: id, name, isStudent. isStudent is optioneel, met default "true".
 * Geef een object terug met ingevulde waarden, bijvoorbeeld:
 * {
 *  id: 4,
 *  name: 'Thomas',
 *  student: true
 * }
 */

console.log(setNameIds(4, "Thomas"));