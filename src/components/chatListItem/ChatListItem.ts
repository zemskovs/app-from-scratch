import { h } from '../../modules/templateEngine/index';

type Message = {
  times: Date;
  message: string;
  from: 'you' | 'anotherUser';
};

type User = {
  id: number;
  imgSrc: string;
  name: string;
  lastMessage: Message;
};

export const ChatListItem = (props: User) =>
  h(
    'div',
    { className: 'chat-list__item' },
    h(
      'div',
      { className: 'chat-preview' },
      h(
        'div',
        { className: 'user' },
        h('div', { className: 'user__img' }),
        h('div', { className: 'user__description'},
          h('h4', {}, props.name),
          h('p', { className: 'user__caption' }, 
            h('span', { className: 'chat-preview__sender' })
          )
        ),
      ),
    ),
  );
