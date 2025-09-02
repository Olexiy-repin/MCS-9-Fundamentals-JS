/*
TODO: Напиши скрипт, який для об'єкта user, послідовно:
TODO: - додає поле mood зі значенням 'happy'
TODO: - замінює значення hobby на 'skydiving'
TODO: - замінює значення premium на false
TODO: - виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
*/

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = !user.premium;

// console.log('user:', user);

// const userKeys = Object.keys(user);

// console.log('userKeys:', userKeys);

// for (const key of userKeys) {
//   console.log(`${key}: ${user[key]}`);
// }

//TODO: Зведіть у квадрат кожен елемент цього об'єкта.

// const coordinates = { x: 2, y: 3, z: 4 };

// console.log('coordinates:', coordinates);

// const coordinatesKeys = Object.keys(coordinates);

// console.log('coordinatesKeys:', coordinatesKeys);

// for (const key of coordinatesKeys) {
//   coordinates[key] = coordinates[key] ** 2;
// }

// console.log('coordinates:', coordinates);

/*
TODO: У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
TODO: підсумовування всіх зарплат і збережіть результат у змінній totalSalary.
TODO: Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
*/

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

console.log('salaries:', salaries);

let totalSalary = 0;

const salariesValues = Object.values(salaries);

console.log('salariesValues:', salariesValues);

for (const salary of salariesValues) {
  totalSalary += salary;
}

console.log('totalSalary:', totalSalary);
