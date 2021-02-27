import { h } from '../../modules/templateEngine/index';
import { router } from '../../index';

type ErrorPageProps = {
  errorCode: string;
  errorDescription: string;
};

export const ErrorPage = (data: { props: ErrorPageProps }) => {
  const props = data.props;

  const handleBackClick = (event: Event) => {
    event.preventDefault();
    router.back();
  };

  return h(
    'div',
    { className: 'error' },
    h('div', { className: 'error__code' }, h('h1', {}, props.errorCode)),
    h(
      'div',
      { className: 'error__text bottom-indent-xxl' },
      h('p', {}, props.errorDescription),
    ),
    h(
      'div',
      { className: 'error__link' },
      h('a', { href: '#', onClick: handleBackClick }, 'Назад'),
    ),
  );
};
