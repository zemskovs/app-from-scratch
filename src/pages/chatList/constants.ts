import { User } from '../../components/chatListItem/ChatListItem';

export const ChatListUsers: User[] = [
  {
    id: 1,
    imgSrc: '',
    name: 'Виталий',
    lastMessage: {
      times: new Date(),
      message: 'Привет мой старый друг',
      from: 'anotherUser',
    },
  },
  {
    id: 2,
    imgSrc: '',
    name: 'Петр',
    lastMessage: {
      times: new Date(),
      message: 'Привет мой старый друг',
      from: 'you',
    },
  },
];
