/*
 * Логічні оператори
 *
 * - Перетворення типів: логічне
 * - Оператор &&
 * - Оператор ||
 * - Оператор !
 */

//~ 6 хибних значень: false, NaN, null, undefined, 0, ''.

/*
 * --------------------------------
 */

// console.log(Boolean(NaN));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(0));
// console.log(Boolean(''));

// console.log(Boolean(3.14));
// console.log(Boolean(-10));
// console.log(Boolean('hello'));
// console.log(Boolean('false'));

/*
 * Оператор &&
 */

// console.log(0 && 'Hello');

// const minutes = 65;

// if (minutes >= 0 && minutes < 60) {
//   console.log('Valid!');
// } else {
//   console.log('Invalid!');
// }

/*
 * Оператор ||
 */

// console.log('' || 0);

// const firstName = prompt('Введіть імʼя!') || 'anonumys';
// const firstName = prompt('Введіть імʼя!') ?? 'anonumys';

// console.log(firstName);

/*
 * Оператор !
 */

// console.log(!false);
// console.log(!'');
