export const isEmail = (email) => {
  const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(email.toLowerCase());
};

export const isValidName = (name) => {
  const reg = /^[A-Za-zА-Яа-я- ]+$/;
  return reg.test(name);
}

export const isNotEmpty = (value) => {
  return value != null && value.length;
}

export const isValidLength = (value, min, max) => {
  return value != null && value.trim().length >= min && value.trim().length <= max;
}

/*export const isNew = (newValue, oldValue) => newValue !== oldValue;*/

export const isDataChanged = (newValues, currentValues) => {
  const diff = Object.keys(newValues).map(key => newValues[key] !== currentValues[key])
  return diff.includes(true);
};
