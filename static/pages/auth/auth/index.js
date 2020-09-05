import { renderAuth } from './render.js';
import { mail } from '../components/mail.js';
import { password } from '../components/password.js';
import { nav } from '../../../common/scripts/navigationManager.js';

renderAuth();

const mailInput = document.querySelector('.emailSelector');
const passwordInput = document.querySelector('.passwordSelector');
const loginButton = document.querySelector('.login-button');

const Mail = mail(mailInput);
const Password = password(passwordInput);

mailInput.addEventListener('blur', () => {
  Mail.validate();
});

mailInput.addEventListener('focus', () => {
  Mail.removeValidate();
});

passwordInput.addEventListener('blur', () => {
  Password.validate();
});

passwordInput.addEventListener('focus', () => {
  Password.removeValidate();
});

// логин
loginButton.addEventListener('click', () => {
  Mail.validate();
  Password.validate();
  const isValid = Password.getIsValid() && Mail.getIsValid();

  if (isValid) {
    console.log(Mail.getValue(), Mail.getValue());
    nav.toChatList(); 
  }
});
