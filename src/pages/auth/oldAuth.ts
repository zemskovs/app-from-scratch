import { h } from '../../modules/templateEngine';
import { model } from './index.js';
import {
  validateEmail,
  validatePassword,
} from '../../modules/utils/validations';
import { inputErrorClass } from '../../static/common/scripts/constants.js';

const controller = {
  validateMail() {
    const isValid = validateEmail(model.state.mail);
    if (!isValid) {
      model.setState({ ...model.state, mailError: 'Введите корректную почту' });
    } else {
      model.setState({ ...model.state, mailError: '' });
    }
  },
  focusMail() {
    model.setState({ ...model.state, mailError: '' });
  },
  validatePassword() {
    const isValid = validatePassword(model.state.password);
    if (!isValid) {
      model.setState({
        ...model.state,
        passwordError:
          'Пароль должен быть длинее 4 символов, содержать маленькие и большие буквы, а также цифры',
      });
    } else {
      model.setState({ ...model.state, passwordError: '' });
    }
  },
  focusPassword() {
    model.setState({ ...model.state, passwordError: '' });
  },
  login() {
    this.validateMail();
    this.validatePassword();

    const errors = [model.state.passwordError, model.state.mailError];
    const noErrors = errors.every((el) => el.length === 0);

    if (noErrors) {
      console.log(model.state.mail, model.state.password);
    }
  },
};
controller.login = controller.login.bind(controller);

export const RegistrationView = () => {
  const [state, setState] = model.useState();

  return h(
    'div',
    { className: 'auth' },
    h(
      'div',
      { className: 'auth__body' },
      h(
        'div',
        { className: 'cart' },
        h(
          'div',
          { className: 'cart__body' },
          h('div', { className: 'cart__header header' }, h('h1', {}, 'Вход')),
          h(
            'form',
            { className: 'auth-form' },
            h(
              'div',
              { className: 'auth-form__body' },
              h('input', {
                className: `custom-input auth-form__item ${
                  state.mailError ? inputErrorClass : ''
                }`,
                placeholder: 'Введите e-mail',
                type: 'email',
                value: state.mail,
                onInput: (e) => setState({ ...state, mail: e.target.value }),
                onBlur: controller.validateMail,
                onFocus: controller.focusMail,
              }),
              h('input', {
                className: `custom-input auth-form__item ${
                  state.passwordError ? inputErrorClass : ''
                }`,
                placeholder: 'Ввердите пароль',
                type: 'password',
                value: state.password,
                onInput: (e) =>
                  setState({ ...state, password: e.target.value }),
                onBlur: controller.validatePassword,
                onFocus: controller.focusPassword,
              }),
              h(
                'div',
                {
                  className: 'auth-form__footer',
                },
                h(
                  'div',
                  {
                    className: 'custom-button',
                    role: 'button',
                    onClick: controller.login,
                  },
                  'Войти',
                ),
              ),
            ),
            h(
              'div',
              {
                className: 'cart__footer',
              },
              h(
                'a',
                {
                  href: './registration.html',
                },
                'Регистрация',
              ),
            ),
          ),
        ),
      ),
    ),
  );
};
