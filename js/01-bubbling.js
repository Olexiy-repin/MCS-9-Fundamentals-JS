/*
 * Спливання подій
 * event.target - цільовий (вихідний) елемент
 * event.currentTarget - поточний елемент, на слухачі якого спіймали подію
 */

const refs = {
  parentDiv: document.querySelector('.js-parent'),
  childDiv: document.querySelector('.js-child'),
  innerChildDiv: document.querySelector('.js-inner-child'),
};

console.log(refs);

refs.parentDiv.addEventListener('click', event => {
  console.group('Parent div handler!');
  console.log('event.target:', event.target);
  console.log('event.currentTarget', event.currentTarget);
  console.groupEnd();
});

refs.childDiv.addEventListener('click', event => {
  console.group('Child div handler!');
  console.log('event.target:', event.target);
  console.log('event.currentTarget', event.currentTarget);
  console.groupEnd();
});

refs.innerChildDiv.addEventListener('click', event => {
  console.group('Inner child handler!');
  console.log('event.target:', event.target);
  console.log('event.currentTarget', event.currentTarget);
  console.groupEnd();
});
