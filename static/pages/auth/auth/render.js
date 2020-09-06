import { loginTemplate } from '../templates/loginTemplate.js';
import { buttonTemplate } from '../../../common/templates/button.js';
import { cart } from '../templates/authCart.js';
import { getRoot } from '../../../../utils/helpers.js';

const loginButtonTemplate = buttonTemplate({
  largeButton: true,
  text: 'Войти',
  buttonClasses: 'login-button',
});

const auth = loginTemplate({
  cartTemplate: cart({
    loginButton: loginButtonTemplate,
  }),
});

const rootElement = getRoot();

export const renderAuth = () => {
  rootElement.innerHTML = auth;
};
