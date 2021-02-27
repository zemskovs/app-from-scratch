import { h } from '../../modules/templateEngine/index';

export const Registration = () => {
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
                className: `custom-input auth-form__item `,
                placeholder: 'Введите e-mail',
                type: 'email',
                //   value: state.mail,
                //   onInput: (e) => setState({ ...state, mail: e.target.value }),
                //   onBlur: controller.validateMail,
                //   onFocus: controller.focusMail,
              }),
              h('input', {
                className: `custom-input auth-form__item`,
                placeholder: 'Ввердите пароль',
                type: 'password',
                //   value: state.password,
                //   onInput: (e) =>
                // setState({ ...state, password: e.target.value }),
                //   onBlur: controller.validatePassword,
                //   onFocus: controller.focusPassword,
              }),
              h('input', {
                className: `custom-input auth-form__item `,
                placeholder: 'Повторите пароль',
                type: 'password',
                //   value: state.repeatPassword,
                //   onInput: (e) =>
                // 	setState({ ...state, repeatPassword: e.target.value }),
                //   onBlur: controller.validateRepeatPassword,
                //   onFocus: controller.focusRepeatPassword,
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
                    //   onClick: controller.registration
                  },
                  'Регистрация',
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
