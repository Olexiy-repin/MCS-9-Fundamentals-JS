/*
 * Подія сlick
 *
 * - Іменування колбеків для слухачів
 * - handle*: handleSubjectEvent
 * - *Handler: subjectEventHandler
 * - on*: onSubjectEvent
 */

/*
TODO: Натискаючи на кнопку "Click me" змусь
TODO: червоний квадрат зміщуватись на 50px по діагоналі
*/

const refs = {
  moveBtn: document.querySelector('.js-click'),
  box: document.querySelector('.js-box'),
  resetBtn: document.querySelector('.js-reset'),
};

console.log(refs);

let step = 0;

const onMoveBtnClick = () => {
  step += 50;

  refs.box.style.transform = `translate(${step}px, ${step}px)`;

  if (step === 200) {
    refs.moveBtn.removeEventListener('click', onMoveBtnClick);
  }
};

const onResetBtnClick = () => {
  step = 0;

  refs.box.style.transform = `translate(${step}px, ${step}px)`;

  refs.moveBtn.addEventListener('click', onMoveBtnClick);
};

refs.moveBtn.addEventListener('click', onMoveBtnClick);
refs.resetBtn.addEventListener('click', onResetBtnClick);
