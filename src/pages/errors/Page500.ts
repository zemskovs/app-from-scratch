import { ErrorPage } from '../../components/errorPage/ErrorPage';
import { h } from '../../modules/templateEngine/index';

const errorData = {
  errorCode: '500',
  errorDescription: 'Произошла ошибка, мы уже работаем над ней',
};

export const Page500 = () => {
  return h(ErrorPage, { props: errorData });
};
