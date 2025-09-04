/*
 * Синтаксис spread і rest
 *
 * - Залишкові параметри
 * - Збір частини аргументів
 * - Входження параметрів
 * - Створення масиву
 * - Створення об'єкта
 */

/*
TODO: Створення копії масиву примітивів
*/

// const values = [23, 34, 4, 5];
// const valuesCopy = [...values];

// console.log('values:', values);
// console.log('valuesCopy:', valuesCopy);

// valuesCopy[0] = 100;

// console.log('values:', values);
// console.log('valuesCopy:', valuesCopy);

/*
TODO: Створення копії масиву зі складними типами даних
*/

// const users = [
//   {
//     firstName: 'Tillie',
//     lastName: 'McGee',
//   },
//   {
//     firstName: 'Mathilda',
//     lastName: 'Perkins',
//   },
//   {
//     firstName: 'Nathan',
//     lastName: 'Pratt',
//   },
// ];
// const usersCopy = structuredClone(users);

// console.table(users);
// console.table(usersCopy);

// usersCopy.push({
//   firstName: 'Bruce',
//   lastName: 'Henderson',
// });

// usersCopy[0].lastName = 'McDaniel';

// console.table(users);
// console.table(usersCopy);

/*
TODO: Поєднуємо декілька масивів в один через spread
*/

// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const allTemps = [100, ...lastWeekTemps, 200, ...currentTemps, 300, ...nextWeekTemps, 400];

// console.log('allTemps:', allTemps);

/*
TODO: Пошук найменшої або найбільшої температури (числа)
*/

// const temps = [18, 14, 12, 21, 17, 29, 24];

// const minTemp = Math.min(...temps);
// const maxTemp = Math.max(...temps);

// console.log('temps: ', temps);
// console.log('minTemp: ', minTemp);
// console.log('maxTemp: ', maxTemp);

/*
TODO: Створення копії об'єкта
*/

// const obj = { x: 1, y: 2 };
// const objCopy = {
//   ...obj,
// };

// console.log('obj: ', obj);
// console.log('objCopy: ', objCopy);

// objCopy.x = 10;

// console.log('obj: ', obj);
// console.log('objCopy: ', objCopy);

/*
TODO: Поєднуємо декілько обʼєктів в один через spread
*/

// const objA = { x: 1, y: 2 };
// const objB = { x: 0, z: 3 };
// const objC = {
//   ...objA,
//   ...objB,
// };

// console.log('objA: ', objA);
// console.log('objB: ', objB);
// console.log('objC: ', objC);

/*
TODO: Оновлюємо налаштування користувача
*/

// const defaultSettings = {
//   theme: 'light',
//   showNotifications: true,
//   hideSidebar: false,
// };

// const userSettings = {
//   showNotifications: false,
//   hideSidebar: true,
// };

// const finalSettings = {
//   ...defaultSettings,
//   ...userSettings,
// };

// console.log(finalSettings);

// TODO: Напишіть функцію sum, яка складає довільну кількість аргументів

// const sum = function (...args) {
//   console.log(args);

//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }

//   return total;
// };

// console.log(sum(1, 2, 3, 4, 5));
// console.log(sum(10, 40, 60));
// console.log(sum(10, 40, 60, 100, 200, 300, 4000, 5));
