/**
 * Importeer de default class uit person.js.
 * Importeer de twee functies uit vivesLib.js.
 * Importeer het object uit vivesLib.js en geef het een alias.
 * Schrijf een arrow function genaamd 'sort' (zonder implementatie);
 * Exporteer de nieuwe 'sort' functie als default.
 */

import Person from './exports/person.js';
import { firstFunction, secondFunction, myObject as libObject } from './exports/vivesLib.js';

const person = new Person('John');
console.log(person);

firstFunction();
secondFunction();

console.log(libObject);

const sort = () => { };

export default sort;