// import { renderRegistration } from './render.js';
import { render } from '../../../../templateEngine/index.js';
import { RegistrationView } from './Registration.js';
import { Model } from '../../../../model/model.js';
// import { mail } from '../components/mail.js';
// import { password } from '../components/password.js';

const rootClass = 'root';
const rootElement = document.querySelector(`.${rootClass}`);

const initState = {
  mail: '',
  mailError: '',
  password: '',
  passwordError: '',
  repeatPassword: '',
};

export const model = new Model({
  container: rootElement,
  initState,
  render,
  component: RegistrationView,
});

render(RegistrationView(), rootElement);

// const mailInput = document.querySelector('.emailSelector');
// const passwordInput = document.querySelector('.passwordSelector');
// const repeatPasswordInput = document.querySelector('.repeatPasswordSelector');

// const Mail = mail(mailInput);
// const Password = password(passwordInput);
// const RepeatPassword = password(repeatPasswordInput);

// mailInput.addEventListener('blur', () => {
//   Mail.validate();
// });

// mailInput.addEventListener('focus', () => {
//   Mail.removeValidate();
// });

// passwordInput.addEventListener('blur', (event) => {
//   Password.validate();
// });

// passwordInput.addEventListener('focus', (event) => {
//   Password.removeValidate();
// });

// repeatPasswordInput.addEventListener('blur', (event) => {
//   const value = event.target.value;
//   const password = Password.getValue();
//   const isEqual = password === value;

//   if (!isEqual) {
//     event.target.classList.add(inputErrorClass);
//   }
// });

// repeatPasswordInput.addEventListener('focus', (event) => {
//   RepeatPassword.removeValidate();
// });
