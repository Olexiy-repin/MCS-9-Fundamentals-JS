/*
 * - Function expression
 * - Псевдомасив arguments та Array.from
 */

//~ Function declaration (Можна викликати до оголошення в коді)

// greetUser('Oleksii');

// function greetUser(firstName) {
//   alert(`Welcome ${firstName}!`);
// }

//~ Function expression (Викликати тільки після оголошення в коді)

// const greetUser = function (firstName) {
//   alert(`Welcome ${firstName}!`);
// };

// greetUser('Oleksii');

//~ Псевдомасив arguments

// const fn = function () {
//   console.log(arguments);

//   const args = Array.from(arguments);

//   console.log(args);

//   // console.log(arguments[0]);
//   // console.log(arguments[1]);

//   for (const el of arguments) {
//     console.log(el);
//   }
// };

// fn('Hello', 'world', '!');

/*
TODO: Напиши функцію add для складання довільної кількості аргументів (чисел)
*/

// const add = function () {
//   console.log(arguments);

//   let total = 0;

//   for (const num of arguments) {
//     total += num;
//   }

//   return total;
// };

// console.log(add(10, 20, 30)); // 60
// console.log(add(1, 2, 4, 5, 6)); // 18

/*
TODO: Створіть функцію calculateAverage(), яка приймає довільну кількість числових аргументів
TODO: та розраховує середнє арефметичне.
*/

// const calculateAverage = function () {
//   let total = 0;

//   for (const num of arguments) {
//     total += num;
//   }

//   return total / arguments.length;
// };

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2
