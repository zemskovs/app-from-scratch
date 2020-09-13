import { inputErrorClass } from './constants.js';

export const validate = (input, validator) => {
  let isValid = false;
  let value = null;

  const validate = () => {
    value = input.value;
    isValid = validator(value);

    if (!isValid) {
      input.classList.add(inputErrorClass);
    }
  };

  const removeValidate = () => {
    input.classList.remove(inputErrorClass);
  };

  return {
    getIsValid: () => isValid,
    getValue: () => value,
    validate,
    removeValidate,
  };
};
