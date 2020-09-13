import { errorTemplate } from './errorTemplate.js';
import { getRoot } from '../../../../utils/helpers.js';

const errorData = {
  errorCode: '500',
  errorDescription: 'Произошла ошибка, мы уже работаем над ней',
}
const serverErrorPage = errorTemplate(errorData);

const rootElement = getRoot();

rootElement.innerHTML = serverErrorPage;
