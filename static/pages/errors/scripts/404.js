import { template } from './errorTemplate.js';

const errorData = {
  errorCode: '404',
  errorDescription: 'Страница не найдена',
}
const notFoundPage = template(errorData);

const rootClass = 'root';
const rootElement = document.querySelector(`.${rootClass}`);

rootElement.innerHTML = notFoundPage;
