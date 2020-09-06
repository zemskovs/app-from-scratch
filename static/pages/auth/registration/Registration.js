import { h } from '../../../../templateEngine/index.js';
import { model } from './index.js';

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
          h(
            'div',
            { className: 'cart__header header' },
            h('h1', {}, 'Регистрация'),
          ),
          h(
            'form',
            { className: 'auth-form' },
            h(
              'div',
              { className: 'auth-form__body' },
              h('input', {
                className: 'custom-input auth-form__item',
                placeholder: 'Введите e-mail',
                type: 'email',
                value: state.mail,
                onInput: (e) => setState({ ...state, mail: e.target.value }),
              }),
              h('input', {
                className: 'custom-input auth-form__item',
                placeholder: 'Ввердите пароль',
                type: 'password',
                value: state.password,
                onInput: (e) =>
                  setState({ ...state, password: e.target.value }),
              }),
              h('input', {
                className: 'custom-input auth-form__item',
                placeholder: 'Повторите пароль',
                type: 'password',
                value: state.password,
                onInput: (e) =>
                  setState({ ...state, repeatPassword: e.target.value }),
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
                  href: './index.html',
                },
                'Назад',
              ),
            ),
          ),
        ),
      ),
    ),
  );
};

{
  /* <div class="cart">
    <div class="cart__body">
      <div class="cart__header header">
        <h1>Регистрация</h1>
      </div>
      <form class="auth-form">
        <div class="auth-form__body">
          <input class="custom-input auth-form__item emailSelector" placeholder="Введите e-mail" type="email">
          <input class="custom-input auth-form__item passwordSelector" placeholder="Ввердите пароль" type="password">
          <input class="custom-input auth-form__item repeatPasswordSelector" placeholder="Повторите пароль" type="password">
          <div class="auth-form__footer">
            {{{loginButton}}}
          </div>
        </div>
      </form>
      <div class="cart__footer">
        <a href="./index.html">Назад</a>
      </div>
    </div>
  </div> */
}
