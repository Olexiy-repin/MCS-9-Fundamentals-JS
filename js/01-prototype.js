/*
 * Прототип об'єкта
 *
 * - Object.create()
 * - Власні і невласні властивості
 * - Перебір власних властивостей з hasOwnProperty()
 * - Ланцюжки прототипів
 */

/*
 * Object.create() та ланцюжки прототипів
 */

// const userMethods = {
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },

//   isAdult() {
//     return this.age >= 18;
//   },
// };

// const userTom = Object.create(userMethods);

// userTom.firstName = 'Tom';
// userTom.lastName = 'Watson';
// userTom.age = 23;

// console.log(userTom);
// console.log(userTom.getFullName());
// console.log(userTom.isAdult());

// const userTrevor = Object.create(userMethods);

// userTrevor.firstName = 'Trevor';
// userTrevor.lastName = 'Fletcher';
// userTrevor.age = 17;

// console.log(userTrevor);
// console.log(userTrevor.getFullName());
// console.log(userTrevor.isAdult());

/*
 * Перебір власних властивостей з hasOwnProperty()
 */

// const objC = {
//   c: 'Object C',
// };

// const objB = Object.create(objC);

// objB.b = 'Object B';

// const objA = Object.create(objB);

// objA.a = 'Object A';

// console.log(objA);

// for (const key in objA) {
//   if (objA.hasOwnProperty(key)) {
//     console.log(`${key}: ${objA[key]}`);
//   }
// }

// console.log(objA.hasOwnProperty('a'));
// console.log(objA.hasOwnProperty('b'));
// console.log(objA.hasOwnProperty('c'));
