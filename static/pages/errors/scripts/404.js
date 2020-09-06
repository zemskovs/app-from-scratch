import { errorTemplate } from './errorTemplate.js';
import { getRoot } from '../../../../utils/helpers.js';

const errorData = {
  errorCode: '404',
  errorDescription: 'Страница не найдена',
}
const notFoundPage = errorTemplate(errorData);

const rootElement = getRoot();

rootElement.innerHTML = notFoundPage;
