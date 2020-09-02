import { template } from '../auth/authTemplate.js';
import { buttonTemplate } from '../../../common/templates/button.js';
import { cart } from '../components/registrationCart.js';
import {
  validatePassword,
  validateEmail,
} from '../../../../utils/validations.js';
import { inputErrorClass } from '../../../common/scripts/constants.js';

const loginButtonTemplate = buttonTemplate({
  largeButton: true,
  text: 'Регистрация',
  buttonClasses: 'registration-button',
});

const rootClass = 'root';
const registration = template({
  cartTemplate: cart({
    loginButton: loginButtonTemplate,
  }),
});

const rootElement = document.querySelector(`.${rootClass}`);

rootElement.innerHTML = registration;

// валидация полей
const mailInput = document.querySelector('.emailSelector');
const passWordInput = document.querySelector('.passwordSelector');
const repeatPasswordInput = document.querySelector('.repeatPasswordSelector');

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

let password = null;
const getPassword = () => password;

passWordInput.addEventListener('blur', (event) => {
  const value = event.target.value;
  const isValid = validatePassword(value);
  password = value;

  if (!isValid) {
    event.target.classList.add(inputErrorClass);
  }
});

passWordInput.addEventListener('focus', (event) => {
  event.target.classList.remove(inputErrorClass);
});

repeatPasswordInput.addEventListener('blur', (event) => {
  const value = event.target.value;
  const password = getPassword();
  const isEqual = password === value;
  const isValid = validatePassword(value) && isEqual;

  if (!isValid) {
    event.target.classList.add(inputErrorClass);
  }
});

repeatPasswordInput.addEventListener('focus', (event) => {
  event.target.classList.remove(inputErrorClass);
});
