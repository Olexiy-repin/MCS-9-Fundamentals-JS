/*
 * Деструктуризація об'єкта в циклі
 */

const users = [
  {
    username: 'Kate',
  },
  {
    username: 'Alex',
  },
  {
    username: 'Mark',
  },
];

console.table(users);

/*
TODO: Виведіть до консолі імена користувачів
*/

//~ Без деструктуризації
// for (const user of users) {
//   console.log(user.username);
// }

// users.forEach(user => {
//   console.log(user.username);
// });

//~ З деструктуризацією
// for (const { username } of users) {
//   console.log(username);
// }

// users.forEach(({ username }) => {
//   console.log(username);
// });
