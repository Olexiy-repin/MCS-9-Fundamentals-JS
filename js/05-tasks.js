/*
TODO: Напиши скрипт для обчислення площі прямокутника зі сторонами,
TODO: значення яких зберігаються у змінній values у вигляді рядка.
TODO: Значення гарантовано розділені пробілом.
 */

// const values = '8 11';
// const rectSidesArr = values.split(' ');
// const rectArea = Number(rectSidesArr[0]) * Number(rectSidesArr[1]);

// console.log('values:', values);
// console.log('rectSidesArr:', rectSidesArr);
// console.log('rectArea:', rectArea);

/*
TODO: Напиши скрипт, який підраховує суму всіх парних чисел у масиві.
*/

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;

// console.log('numbers:', numbers);

// for (const num of numbers) {
//   if (num % 2 === 0) {
//     total += num;
//   }
// }

// console.log('total:', total);

/*
TODO: Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
TODO: У змінних names та phones зберігаються рядки імен та телефонних номерів,
TODO: розділені комами. Порядковий номер імен та телефонів у рядках вказують на
TODO: відповідність. Кількість імен та телефонів гарантовано однакова.
*/

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// console.log('names:', names);
// console.log('phones:', phones);

// const namesArr = names.split(',');
// const phonesArr = phones.split(',');

// console.log('namesArr:', namesArr);
// console.log('phonesArr:', phonesArr);

// for (let i = 0; i < namesArr.length; i++) {
//   console.log(`${namesArr[i]}: ${phonesArr[i]}`);
// }

/*
TODO: Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати
TODO: для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
*/

// const values = [17, -10, 94, -30, 1, 23, -20];
// let min = values[0];

// console.log('values:', values);

// for (let i = 1; i < values.length; i++) {
//   if (values[i] < min) {
//     min = values[i];
//   }
// }

// console.log('min:', min);

/*
TODO: У нас є декілько масивів із зарплатами працівників із різних відділів,
TODO: потрібно порахувати загальну суму зарплат.
*/

// const managerSalaries = [100, 150, 250, 400, 500];
// const developersSalaries = [800, 1500, 4000];

// let totalSalary = 0;

// for (const managerSalary of managerSalaries) {
//   totalSalary += managerSalary;
// }

// console.log(totalSalary);

// for (const developerSalary of developersSalaries) {
//   totalSalary += developerSalary;
// }

// console.log(totalSalary);
