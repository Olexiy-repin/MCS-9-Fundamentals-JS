/*
 * Типи подій: keypress, keydown, keyup
 * - Обмеження keypress
 * - Властивості key та code
 */

// document.addEventListener('keyup', event => {
//   console.log(`code: ${event.code}, key: ${event.key}`);
// });

/*
 * Обробка комбінацій клавіш
 */

// document.addEventListener('keydown', event => {
//   if ((event.ctrlKey || event.metaKey) && event.code === 'KeyF') {
//     event.preventDefault();

//     console.log('ctrl + F');
//   }
// });
