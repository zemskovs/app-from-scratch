import { Block } from '../../modules/block/block';
import { h } from '../../modules/templateEngine/index';
import { ChatListItem } from '../../components/chatListItem/ChatListItem';

export class ChatList extends Block {
  constructor(props = {}) {
    super('root', props);
  }

  render() {
    return h(
      'div',
      { className: 'chat-list' },
      h(
        'div',
        { className: 'chat-list__top' },
        h(
          'div',
          { className: 'chat-list__header' },
          h(
            'div',
            { className: 'menu-icon' },
            h('div', { className: 'menu-icon__line' }),
            h('div', { className: 'menu-icon__line' }),
            h('div', { className: 'menu-icon__line menu-icon__line-last' }),
          ),
          h(
            'div',
            { className: 'search' },
            h('input', { className: 'search__input', placeholder: 'Поиск' }),
          ),
        ),
      ),
      h('div', { className: 'chat-list_list'})
    );
  }
}
