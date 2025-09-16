// TODO: Що буде виведено в консоль

// const foo = function () {
//   console.log('foo -> this', this);
// };

// foo(); // undefined

// TODO: Що буде виведено в консоль

// const book = {
//   title: 'React for beginners',

//   showThis: function () {
//     console.log('showThis -> this', this);
//   },

//   showTitle: function () {
//     console.log('showTitle -> this.title', this.title);
//   },
// };

// book.showThis(); // book

// const outerShowThis = book.showThis;

// outerShowThis(); // undefined

// book.showTitle(); // 'React for beginners'

// const outerShowTitle = book.showTitle;

// outerShowTitle(); // error

/*
TODO: Тут функція makeUser повертає об'єкт.
TODO: Яким буде результат при зверненні до властивості ref?
*/

// const makeUser = function () {
//   // let this = undefined;

//   return {
//     name: 'Джон',
//     ref: this,
//   };
// };

// const user = makeUser();

// console.log(user.ref.name); // error

// TODO: Що буде виведено в консоль

// const makeUser = function () {
//   // let this = undefined;

//   return {
//     name: 'Джон',

//     ref() {
//       return this;
//     },
//   };
// };

// const user = makeUser();

// console.log(user.ref().name); // 'Джон'

/*
TODO: Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і
TODO: розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та
TODO: кількістю з властивості stones.
 */

// const chopShop = {
//   stones: [
//     { name: 'Emerald', price: 1300, quantity: 4 },
//     { name: 'Diamond', price: 2700, quantity: 3 },
//     { name: 'Sapphire', price: 1400, quantity: 7 },
//     { name: 'Ruby', price: 800, quantity: 2 },
//   ],

//   calcTotalPrice(stoneName) {
//     const searchedStone = this.stones.find(stone => stone.name === stoneName);

//     if (searchedStone === undefined) {
//       return `${stoneName} не знайдено!`;
//     }

//     return searchedStone.price * searchedStone.quantity;
//   },
// };

// console.log(chopShop.calcTotalPrice('Emerald')); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// console.log(chopShop.calcTotalPrice('Ruby')); // 1600
// console.log(chopShop.calcTotalPrice('Aconit')); // Aconit не знайдено!
