import { validatePassword } from '../../../../utils/validations.js';
import { inputErrorClass } from '../../../common/scripts/constants.js';

export const password = (input) => {
  let isValid = false;
  let value = null;

  const validate = () => {
    const inputValue = input.value;
    const valid = validatePassword(inputValue);
    isValid = valid;
    value = inputValue;
    if (!valid) {
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
