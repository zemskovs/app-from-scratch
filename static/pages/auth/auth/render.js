import { template } from '../templates/loginTemplate.js';
import { buttonTemplate } from '../../../common/templates/button.js';
import { cart } from '../templates/authCart.js';

const loginButtonTemplate = buttonTemplate({
  largeButton: true,
  text: 'Войти',
  buttonClasses: 'login-button',
});

const rootClass = 'root';
const auth = template({
  cartTemplate: cart({
    loginButton: loginButtonTemplate,
  }),
});

const rootElement = document.querySelector(`.${rootClass}`);

export const renderAuth = () => {
  rootElement.innerHTML = auth;
}