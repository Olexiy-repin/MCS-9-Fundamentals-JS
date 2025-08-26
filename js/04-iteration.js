/*
 * Ітерація по масиву
 *
 * - Ітерація по масиву циклом for
 * - Цикл for...of
 * - Різниця у використанні for и for...of
 */

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];

// console.log('courses:', courses);

//~ Через цикл for

// for (let i = 1; i < courses.length - 1; i += 2) {
//   const item = courses[i];

//   console.log(item);
// }

//~ Через цикл for...of

// for (const item of courses) {
//   console.log(item);
// }

/*
TODO: Напиши скрипт для перебора масиву fruits.
TODO: Для кожного елемента масиву виведи в консоль рядок
TODO: у форматі номер_елемента: значення_елемента.
TODO: Нумерація елементів повинна починатися з 1.
*/

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// console.log(fruits);

// for (let i = 0; i < fruits.length; i++) {
//   console.log(`${i + 1}: ${fruits[i]}`);
// }

// for (const fruit of fruits) {
//   const idxOfFruit = fruits.indexOf(fruit);

//   console.log(`${idxOfFruit + 1}: ${fruit}`);
// }
