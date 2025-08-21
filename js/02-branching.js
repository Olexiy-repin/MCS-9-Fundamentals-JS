/*
 * Розгалуження
 *
 * - Інструкція if
 * - Інструкція if...else
 * - Блок else...if
 * - Тернарний оператор
 */

/*
TODO: Перевірте чи є гроші на балансі, якщо є то виведіть до консолі 'Positive', інакше 'Negative'.
*/

// const balance = 0;

// if (balance > 0) {
//   console.log('Positive!');
// } else {
//   console.log('Negative!');
// }

/*
TODO: Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй if...else.
TODO:
TODO: Якщо до дедлайну 0 днів - виведи рядок "Today"
TODO: Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
TODO: Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
TODO: Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
TODO: В інших випадках - виведи рядок "Incorrect value of days"
 */

// const daysUntilDeadline = -10;

// if (daysUntilDeadline === 0) {
//   console.log('Today');
// } else if (daysUntilDeadline === 1) {
//   console.log('Tomorrow');
// } else if (daysUntilDeadline === 2) {
//   console.log('Overmorrow');
// } else if (daysUntilDeadline >= 3) {
//   console.log('Date in the future');
// } else {
//   console.log('Incorrect value of days');
// }

/*
TODO: Перепишіть конструкцію if з використанням тернарного оператора.
*/

// const numA = 1;
// const numB = 2;

// const result = numA + numB < 4 ? 'Мало' : 'Багато';

// // if (numA + numB < 4) {
// //   result = 'Мало';
// // } else {
// //   result = 'Багато';
// // }

// console.log(result);

/*
TODO:  Перепишіть if..else за допомогою декількох тернарних операторів.
*/

// const login = 'Директор';
// const message =
//   login === 'Співробітник' ? 'Привіт' : login === 'Директор' ? 'Вітаю' : login === '' ? 'Немає логіну' : '';

// // if (login === 'Співробітник') {
// //   message = 'Привіт';
// // } else if (login === 'Директор') {
// //   message = 'Вітаю';
// // } else if (login === '') {
// //   message = 'Немає логіну';
// // } else {
// //   message = '';
// // }

// console.log(message);
