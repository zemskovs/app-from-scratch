import { h, useState, useEffect } from '../../modules/templateEngine/index';

export function Search(props?) {
  const [state, setState] = useState('');

  const handleSearch = (e) =>
    setState(() => {
      return e.target.value;
    });

  return h(
    'div',
    { className: 'search' },
    h('input', {
      className: 'search__input',
      placeholder: 'Поиск',
      value: state,
      onInput: handleSearch,
    }),
  );
}
