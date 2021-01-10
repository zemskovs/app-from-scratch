import { Block } from '../../modules/block/block';
import { h } from '../../modules/templateEngine/index';

export class Auth extends Block {
  constructor(props = {}) {
    super('root', props);
  }

  render() {
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
                  className: `custom-input auth-form__item`,
                  placeholder: 'Введите e-mail',
                  type: 'email',
                }),
                h('input', {
                  className: `custom-input auth-form__item`,
                  placeholder: 'Ввердите пароль',
                  type: 'password',
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
  }
}
