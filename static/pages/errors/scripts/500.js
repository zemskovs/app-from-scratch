import { template } from './errorTemplate.js';

const errorData = {
  errorCode: '500',
  errorDescription: 'Произошла ошибка, мы уже работаем над ней',
}
const serverErrorPage = template(errorData);

const rootClass = 'root';
const rootElement = document.querySelector(`.${rootClass}`);

rootElement.innerHTML = serverErrorPage;
