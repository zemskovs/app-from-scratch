import { validateEmail } from '../../../../utils/validations.js';
import { inputErrorClass } from '../../../common/scripts/constants.js';

export const mail = (input) => {
  let isValid = false;
  let value = null;

  const validate = () => {
    const inputValue = input.value;
    const valid = validateEmail(inputValue);
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
