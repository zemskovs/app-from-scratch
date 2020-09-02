export function validateEmail(value) {
  const regEx = /\S+@\S+\.\S+/;
  const isValid = regEx.test(value);
  return isValid;
}

export function validatePassword(value) {
  const regEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}/;
  const isValid = regEx.test(value);
  return isValid;
}
