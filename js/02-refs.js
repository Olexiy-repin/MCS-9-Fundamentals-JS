/*
 * Об'єкти
 *
 * - Тип даних за посиланням
 */

const user = {
  firstName: 'Oleksii',
  lastName: 'Repin',
};

const userCopy = user;

console.log('user:', user);
console.log('userCopy:', userCopy);

userCopy.age = 30;

console.log('user:', user);
console.log('userCopy:', userCopy);

console.log(user === userCopy);

const courseHTML = {
  title: 'HTML Fundamentals',
};

const courseHTMLCopy = {
  title: 'HTML Fundamentals',
};

console.log(courseHTML === courseHTMLCopy);
