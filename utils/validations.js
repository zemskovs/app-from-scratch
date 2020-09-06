export const validateEmail = (value) => /\S+@\S+\.\S+/.test(value)

export const validatePassword = (value) => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}/.test(value);
