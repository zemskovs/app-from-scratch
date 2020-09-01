import { template } from './authTemplate.js';
import { cart } from '../components/authCart.js';
import { validatePassword, validateEmail } from '../helper.js';
import { inputErrorClass } from '../../../common/scripts/constants.js'

const rootClass = 'root';
const auth = template({ cartTemplate: cart() });

const rootElement = document.querySelector(`.${rootClass}`);

rootElement.innerHTML = auth;

// валидация полей
const mailInput = document.querySelector('.emailSelector');
const passWordInput = document.querySelector('.passwordSelector');

mailInput.addEventListener('blur', (event) => {
  const value = event.target.value;
  const isValid = validateEmail(value);

  if (!isValid) {
    event.target.classList.add(inputErrorClass);
  }
});

mailInput.addEventListener('focus', (event) => {
  event.target.classList.remove(inputErrorClass);
});

passWordInput.addEventListener('blur', (event) => {
  const value = event.target.value;
  const isValid = validatePassword(value);

  if (!isValid) {
    event.target.classList.add(inputErrorClass);
  }
});

passWordInput.addEventListener('focus', (event) => {
  event.target.classList.remove(inputErrorClass);
});
