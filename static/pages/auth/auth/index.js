import { renderAuth } from './render.js';
import { mail } from './mail.js';
import { password } from './password.js';

renderAuth();

// валидация полей
const mailInput = document.querySelector('.emailSelector');
const passwordInput = document.querySelector('.passwordSelector');
const loginButton = document.querySelector('.login-button');

const mailHelper = mail(mailInput);
const passwordHelper = password(passwordInput);

mailInput.addEventListener('blur', () => {
  mailHelper.validate();
});

mailInput.addEventListener('focus', () => {
  mailHelper.removeValidate();
});

passwordInput.addEventListener('blur', () => {
  passwordHelper.validate();
});

passwordInput.addEventListener('focus', () => {
  passwordHelper.removeValidate();
});

// логин
loginButton.addEventListener('click', () => {
  mailHelper.validate();
  passwordHelper.validate();
  const isValid = passwordHelper.getIsValid() && mailHelper.getIsValid();

  if (isValid) {
    console.log(mailHelper.getValue(), mailHelper.getValue());
  }
});
