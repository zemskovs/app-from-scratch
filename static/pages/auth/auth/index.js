import { renderAuth } from './render.js';
import { nav } from '../../../common/scripts/navigationManager.js';
import { validate } from '../../../common/scripts/validate.js';
import { validateEmail, validatePassword } from '../../../../utils/validations.js';
import { addOnBlurAndOnFocus } from '../../../../utils/helpers.js';

renderAuth();

const mailInput = document.querySelector('.emailSelector');
const passwordInput = document.querySelector('.passwordSelector');
const loginButton = document.querySelector('.login-button');

const Mail = validate(mailInput, validateEmail);
const Password = validate(passwordInput, validatePassword);

addOnBlurAndOnFocus(mailInput, {
  onBlur: Mail.validate,
  onFocus: Mail.removeValidate,
});
addOnBlurAndOnFocus(passwordInput, {
  onBlur: Password.validate,
  onFocus: Password.removeValidate,
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
