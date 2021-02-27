import { h } from '../../modules/templateEngine/index';

export const Profile = () => {
  return h(
    'div',
    { className: 'profile' },
    h(
      'div',
      {
        className: 'profile__body',
      },
      h(
        'div',
        { className: 'profile__top bottom-indent-xxl' },
        h('div', {
          className: 'avatar-image profile__avatar-size bottom-indent-sm',
        }),
        h('div', { className: 'profile__user-name' }, h('h3', {}, 'Петр')),
      ),
      h(
        'div',
        { className: 'user-main-info w-100 bottom-indent-xl' },
        h(
          'div',
          {
            className: 'user-main-info__item profile__mail bottom-indent-sm',
          },
          h('span', {}, 'Почта'),
          h('input', {
            className: 'user-main-info__value emailSelector',
            type: 'email',
            value: 'mail@pochta.ru',
          }),
        ),
        h(
          'div',
          { className: 'user-main-info__item profile__user-name' },
          h('span', {}, 'Пароль'),
          h('input', {
            className: 'user-main-info__value passwordSelector',
            type: 'password',
            placeholder: 'Ваш пароль',
          }),
        ),
      ),
      h(
        'div',
        { className: 'profile__control-links bottom-indent-xl' },
        h('a', { href: '#' }, 'Изменить данные'),
        h('a', { classname: 'danger-link', href: '#' }, 'Выйти'),
      ),
      h(
        'div',
        { className: 'profile__back-link' },
        h('a', { href: '#' }, 'Назад'),
      ),
    ),
  );
};
