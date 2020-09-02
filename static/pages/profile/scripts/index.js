import { template } from './profileTemplate.js';
import {
  validatePassword,
  validateEmail,
} from '../../../../utils/validations.js';
import { inputErrorClass } from '../../../common/scripts/constants.js';

const profilePage = template();

const rootClass = 'root';
const rootElement = document.querySelector(`.${rootClass}`);

rootElement.innerHTML = profilePage;

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
