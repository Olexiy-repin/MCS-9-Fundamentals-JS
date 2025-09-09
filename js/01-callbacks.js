/*
 * Функція зворотнього виклика (callback)
 *
 * - Функція як значення
 * - Колбек-функції
 * - Інлайн-колбеки
 */

// const fn1 = function (callback) {
//   console.log('Hello from fn1');

//   console.log(callback);

//   callback();
// };

// const fn2 = function () {
//   console.log('Hello from fn2');
// };

// fn1(fn2);

// fn1(function () {
//   console.log('Hello from inline callback!');
// });

/*
TODO: Напишіть функцію each(array, callback), яка першим параметром очікує масив,
TODO: а другим - функцію, яка застосовується до кожного елемента масиву. Функція
TODO: each повинна повернути новий масив, елементами якого будуть
TODO: результати виклику коллбека.
 */

// const each = function (array, callback) {
//   const newArr = [];

//   for (const el of array) {
//     newArr.push(callback(el));
//   }

//   return newArr;
// };

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   })
// );

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   })
// );

// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   })
// );
