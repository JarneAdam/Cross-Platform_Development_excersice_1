/**
 * Gebruik ES2015 classes (met overerving) om een Developer aan te maken.
 */
class Person {
  constructor(firstname, lastname) {
    this.fname = firstname;
    this.lname = lastname;
  }
}

class Developer extends Person {
  constructor(firstname, lastname, preferredLanguage) {
    super(firstname, lastname);
    this.preferredLanguage = preferredLanguage;
  }
}

const jan = new Developer("Jan", "Modaal", "JavaScript");

console.log(jan.fname); // 'Jan'
console.log(jan.preferredLanguage); // 'JavaScript'