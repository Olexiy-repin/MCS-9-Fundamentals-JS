/*
 * - Подія input
 * - Подія blur
 * - Подія change
 */

const refs = {
  field: document.querySelector('.js-user-name'),
  checkbox: document.querySelector('.js-policy-checkbox'),
};

console.log(refs);

/*
TODO: Виводь в консоль все що користувач вводить в input
*/

// refs.field.addEventListener('input', () => {
//   console.log(refs.field.value);
// });

/*
TODO: Користувач вводить в input своє ім'я, після втрати
TODO: фокусу отримує alert з повідомленням-привітанням
 */

// refs.field.addEventListener('blur', () => {
//   const firstName = refs.field.value;

//   alert(`Welcome ${firstName}!`);
// });

// refs.field.addEventListener('change', () => {
//   const firstName = refs.field.value;

//   alert(`Welcome ${firstName}!`);
// });

/*
TODO: Після того, як користувач активує чекбокс, виводиться alert
*/

// refs.checkbox.addEventListener('change', () => {
//   if (refs.checkbox.checked) {
//     console.log('Done!');
//   }
// });
