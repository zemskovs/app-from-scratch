import { ErrorPage } from '../../components/errorPage/ErrorPage';
import { h } from '../../modules/templateEngine/index';

const errorData = {
  errorCode: '404',
  errorDescription: 'Страница не найдена',
};

export const Page404 = () => {
  return h(ErrorPage, { props: errorData });
};
