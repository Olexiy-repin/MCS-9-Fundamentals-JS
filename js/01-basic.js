/*
 * Деструктуризація об'єкта
 */

/*
TODO: Напишіть деструктуруюче присвоєння, яке:
TODO: властивість firstName присвоє до змінної firstName.
TODO: властивість lastName присвоє до змінної lastName.
TODO: властивість age присвоє до змінної userAge.
TODO: властивість isAdmin присвоє до змінної isAdmin (false, якщо немає такої властивості)
*/

// const user = {
//   firstName: 'John',
//   lastName: 'Reese',
//   age: 30,
// };

// console.log('user:', user);

// const { firstName, lastName, age: userAge, isAdmin = false } = user;

// console.log('firstName:', firstName);
// console.log('lastName:', lastName);
// console.log('userAge:', userAge);
// console.log('isAdmin:', isAdmin);

/*
 * Глибока деструктуризація об'єкта
 */

//~ Без глибокої деструктуризації
// const user = {
//   username: 'Jacob name',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// console.log('user:', user);

// const { username } = user;
// const { html, css, js } = user.skills;

// console.log('username:', username);
// console.log('html:', html);
// console.log('css:', css);
// console.log('js:', js);

//~ З глибокою деструктуризацією
// const user = {
//   username: 'Jacob name',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// console.log('user:', user);

// const {
//   username,
//   skills: { html, css, js },
// } = user;

// console.log('username:', username);
// console.log('html:', html);
// console.log('css:', css);
// console.log('js:', js);

/*
 * Деструктуризація масива
 */

// const usernames = ['Trevor', 'Howard', 'Marian', 'Christina'];

// console.log('usernames:', usernames);

// const [userTrevor, , userMarian] = usernames;

// console.log('userTrevor:', userTrevor);
// console.log('userHoward:', userHoward);
// console.log('userMarian:', userMarian);

// const getUserCoordinate = () => {
//   const longitude = 50.426857;
//   const latitude = 30.56368;

//   return [longitude, latitude];
// };

// const [userLongitude, userLatitude] = getUserCoordinate();

// console.log(userLongitude);
// console.log(userLatitude);

//* Операція rest при деструктуризації

// const user = {
//   firstName: 'John',
//   lastName: 'Reese',
//   age: 30,
//   isAdmin: true,
// };

// console.log('user:', user);

// const { firstName, lastName, ...otherProps } = user;

// console.log('firstName', firstName);
// console.log('lastName:', lastName);
// console.log('otherProps:', otherProps);
