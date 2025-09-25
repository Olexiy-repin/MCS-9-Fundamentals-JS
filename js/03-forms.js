/*
 * - Подія submit
 * - Дії браузера за замовчуванням
 * - Властивість elements
 */

/*
TODO: Оброби форму та збережи відгук користувача в об'єкт
*/

const refs = {
  feedbackForm: document.querySelector('.js-feedback-form'),
};

console.log(refs);
console.log(refs.feedbackForm.elements);

const onFeedbackFormSubmit = event => {
  event.preventDefault();

  const formData = {
    [refs.feedbackForm.elements.username.name]: refs.feedbackForm.elements.username.value,
    [refs.feedbackForm.elements.email.name]: refs.feedbackForm.elements.email.value,
    [refs.feedbackForm.elements.comment.name]: refs.feedbackForm.elements.comment.value,
  };

  const formDataValues = Object.values(formData);

  if (formDataValues.includes('')) {
    alert('All fields must be filled in!');

    return;
  }

  console.log(formData);
  refs.feedbackForm.reset();
};

refs.feedbackForm.addEventListener('submit', onFeedbackFormSubmit);
