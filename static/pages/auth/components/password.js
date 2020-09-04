import { validatePassword } from '../../../../utils/validations.js';
import { inputErrorClass } from '../../../common/scripts/constants.js';

export const password = (input) => {
  let isValid = false;
  let value = null;

  const validate = () => {
    value = input.value;
    isValid = validatePassword(value);

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
