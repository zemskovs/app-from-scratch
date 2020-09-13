export function addOnBlurAndOnFocus(el, { onBlur, onFocus }) {
  el.addEventListener('blur', () => {
    onBlur();
  });

  el.addEventListener('focus', () => {
    onFocus();
  });
}

export const getRoot = () => document.querySelector(".root");
