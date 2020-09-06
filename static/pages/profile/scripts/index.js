import { profileTemplate } from './profileTemplate.js';
import { getRoot } from '../../../../utils/helpers.js';
import { validateEmail, validatePassword } from '../../../../utils/validations.js';
import { addOnBlurAndOnFocus } from '../../../../utils/helpers.js';

const profilePage = profileTemplate();
const rootElement = getRoot();

rootElement.innerHTML = profilePage;

// валидация полей
const mailInput = document.querySelector('.emailSelector');
const passwordInput = document.querySelector('.passwordSelector');

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

