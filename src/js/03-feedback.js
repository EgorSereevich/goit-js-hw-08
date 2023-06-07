import throttle from 'lodash.throttle';
const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('.feedback-form input');
const textEl = document.querySelector('.feedback-form textarea');
const buttonEl = document.querySelector('.feedback-form button ');
const formData = {};
const zeroForm = '';
const STR_KEY = 'feedback-form-state';
onReturnForm();
function onReturnForm() {
  const form = JSON.parse(localStorage.getItem(STR_KEY));
  if (form) {
    inputEl.value = form.email;
    textEl.value = form.message;
  }
}
formEl.addEventListener('input', throttle(onFormInput, 500));
function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STR_KEY, JSON.stringify(formData));
}

formEl.addEventListener('submit', onRemoveForm);
function onRemoveForm(evt) {
  evt.preventDefault();
  if (
    evt.target.elements.email.value === '' ||
    evt.target.elements.message.value === ''
  ) {
    return alert('Заповніть усі поля');
  }
  console.log(JSON.parse(localStorage.getItem(STR_KEY)));
  localStorage.removeItem(STR_KEY);
  evt.currentTarget.reset();
}
function returnFeedback() {
  const preMassage = JSON.parse(localStorage.getItem(STR_KEY));

  if (preMassage) {
    inputEl.value = preMassage.email;
    textEl.value = preMassage.message;
  }
}
