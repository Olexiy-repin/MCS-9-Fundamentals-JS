/*
 TODO: Що буде виведено до консолі
 */

// console.log(true && 3); // 3

// console.log(false && 3); // false

// console.log(true && 4 && 'kiwi'); // 'kiwi'

// console.log(true && 0 && 'kiwi'); // 0

// console.log(true || 3); // true

// console.log(true || 3 || 4); // true

// console.log(true || false || 7); // true

// console.log(null || 2 || undefined); // 2

// console.log(null || (2 && 3) || 4); // 3

/*
TODO: У змінній minutes лежить число від 0 до 59.
TODO: Визначте, в яку чверть години потрапляє це число (у першу, другу, третю чи четверту).
TODO: [0 до 15) - перша чверть години
TODO: [15 до 30) - друга чверть години
TODO: [30 до 45) - третя чверть години
TODO: [45 до 60) - четверта чверть години
*/

// const minutes = 15;

// if (minutes >= 0 && minutes < 15) {
//   console.log('Перша чверть години!');
// } else if (minutes >= 15 && minutes < 30) {
//   console.log('Друга чверть години!');
// } else if (minutes >= 30 && minutes < 45) {
//   console.log('Тертя чверть години!');
// } else if (minutes >= 45 && minutes < 60) {
//   console.log('Четверта чверть години!');
// }

/*
TODO:  Перепишіть код за допомогою однієї конструкції switch:
*/

// const number = Number(prompt('Введіть число між 0 та 3'));

// switch (number) {
//   case 0: {
//     console.log('Ви ввели число 0');

//     break;
//   }

//   case 1: {
//     console.log('Ви ввели число 1');

//     break;
//   }

//   case 2:
//   case 3: {
//     console.log('Ви ввели число 2, а може й 3');

//     break;
//   }

//   default: {
//     console.log('Ви ввели якесь інше число');
//   }
// }

/*
TODO: Напиши скрипт, який перевіряє можливість відкрити чат з користувачем.
TODO: Для цього, користувач має бути:
TODO: - другом
TODO: - онлайн
TODO: - без режима не турбувати
 */

// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// let canOpenChat = isFriend && isOnline && !isDnd;

// console.log('Чи можна відкрити чат? ', canOpenChat);

/*
TODO: Форматування посилання (includes та логічне «І»)
TODO: Напиши скрипт який перевіряє чи закінчується значення
TODO: змінної link символом /. Якщо ні, додай до кінця
TODO: значення link цей символ, але тільки в тому випадку,
TODO: якщо в link є підрядок "my-site".
*/

// let link = 'https://my-site.com/about';

// if (!link.endsWith('/') && link.includes('my-site')) {
//   link += '/';
// }

// console.log(link);

/*
TODO: Напишіть програму, яка виводить через console.log усі числа від 1 до 100, з трьома винятками.
TODO: Для чисел, що націло діляться на 3, вона повинна виводити 'Fizz',
TODO: а для чисел, що діляться на 5 – 'Buzz'.
TODO: Для чисел які кратні 3 та 5 = 'FizzBuzz'
*/

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('FizzBuzz');
//   } else if (i % 3 === 0) {
//     console.log('Fizz');
//   } else if (i % 5 === 0) {
//     console.log('Buzz');
//   } else {
//     console.log(i);
//   }
// }
