import { template } from './authTemplate.js';
import { buttonTemplate } from '../../../common/templates/button.js';
import { cart } from '../components/authCart.js';

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
