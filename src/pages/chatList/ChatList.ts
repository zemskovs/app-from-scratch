import { h } from '../../modules/templateEngine/index';
import { ChatListItem } from '../../components/chatListItem/ChatListItem';
import { Search } from './Search';
import { ChatListUsers } from './constants';
import { pages, router } from '../..';

export function ChatList() {
  // const [state, setState] = useState('123');

  // const handleSearch = (e) => setState(e.target.value);

  const handleMenuClick = () => {
    router.go(pages.profile);
  };

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
          { className: 'menu-icon', onClick: handleMenuClick },
          h('div', { className: 'menu-icon__line' }),
          h('div', { className: 'menu-icon__line' }),
          h('div', { className: 'menu-icon__line menu-icon__line-last' }),
        ),
        h(Search, {}),
      ),
    ),
    h(
      'div',
      { className: 'chat-list_list' },
      ...ChatListUsers.map((user) => h(ChatListItem, { props: user })),
    ),
  );
}
