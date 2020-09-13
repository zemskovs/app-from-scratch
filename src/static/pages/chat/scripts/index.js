import { chatTemplate } from './chatTemplate.js';
import { userTemplate } from '../../../common/templates/user.js';
import { inputErrorClass } from '../../../common/scripts/constants.js';
import { buttonTemplate } from '../../../common/templates/button.js';
import { getRoot } from '../../../../utils/helpers.js';

const authUserTemplate = userTemplate({
  name: 'Виктор',
  lastDate: '2 минуты назад',
});

const chatSettingsButtonTemplate = buttonTemplate({
  iconButton: true,
  buttonClasses: 'ellipsis',
});

const attachButtonTemplate = buttonTemplate({
  iconButton: true,
  buttonClasses: 'paperclip',
});

const sendButtonTemplate = buttonTemplate({
  iconButton: true,
  buttonClasses: 'paperPlane',
});

const chatPage = chatTemplate({
  userTemplate: authUserTemplate,
  chatSettingsButton: chatSettingsButtonTemplate,
  attachButton: attachButtonTemplate,
  sendButton: sendButtonTemplate,
});


const rootElement = getRoot();

rootElement.innerHTML = chatPage;

const sendMessageInput = document.querySelector('.sendMessageSelector');

sendMessageInput.addEventListener('blur', (event) => {
  const value = event.target.value;
  const isValid = !value.match('спам');
  if (!isValid) {
    event.target.classList.add(inputErrorClass);
  }
});

sendMessageInput.addEventListener('focus', (event) => {
  event.target.classList.remove(inputErrorClass);
});
