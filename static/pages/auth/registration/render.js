import { template } from '../templates/loginTemplate.js';
import { buttonTemplate } from '../../../common/templates/button.js';
import { cart } from '../templates/registrationCart.js';

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

export const renderRegistration = () => {
  rootElement.innerHTML = auth;
}
