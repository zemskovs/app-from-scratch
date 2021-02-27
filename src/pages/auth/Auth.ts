import { pages, router } from '../..';
import { h } from '../../modules/templateEngine/index';

export function Auth() {
  const handleCome = () => {
    router.go(pages.chatlist);
  };

  const handleRegistration = (event: Event) => {
    event.preventDefault();
    router.go(pages.registration);
  };

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
                    tabIndex: 1,
                    onClick: handleCome,
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
                  href: '#',
                  onClick: handleRegistration,
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
