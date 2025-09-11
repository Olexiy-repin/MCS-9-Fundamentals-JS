/*
 * Метод reduce
 *
 * - Поелементно перебирає оригінальний масив
 * - Значення, що повертається, залежить від розробника
 */

// const numbers = [5, 10, 15];

/*
  1 Ітерація
    acc = 0;
    el = 5;
    idx = 0;
    arr = [5, 10, 15];

    return 0 + 5;

  2 Ітерація
    acc = 5;
    el = 10;
    idx = 1;
    arr = [5, 10, 15];

    return 5 + 10;

  3 Ітерація
    acc = 15;
    el = 15;
    idx = 2;
    arr = [5, 10, 15];

    return 15 + 15;

  acc = 30;
*/

// const total = numbers.reduce((acc, el, idx, arr) => {
//   return acc + el;
// }, 0);

// console.log(numbers);
// console.log(total);

/*
TODO: Рахуємо загальну зарплату
 */

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// console.log(salary);

// const salaries = Object.values(salary);

// console.log(salaries);

// const totalSalary = salaries.reduce((acc, el) => acc + el);

// console.log(totalSalary);

/*
TODO: Рахуємо загальну кількість годин
 */

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//   { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
// ];

// console.table(players);

// const totalTimePlayed = players.reduce((acc, el) => {
//   return acc + el.timePlayed;
// }, 0);

// console.log(totalTimePlayed);

/*
TODO: Рахуємо загальну суму товарів кошика
 */

// const cart = [
//   { label: 'Apples', price: 100, quantity: 2 },
//   { label: 'Bananas', price: 120, quantity: 3 },
//   { label: 'Lemons', price: 70, quantity: 4 },
// ];

// console.table(cart);

// const totalAmount = cart.reduce((acc, el) => {
//   return acc + el.price * el.quantity;
// }, 0);

// console.log(totalAmount);
