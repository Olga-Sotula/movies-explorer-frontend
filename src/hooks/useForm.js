import React, { useCallback, useState } from 'react';

const validate = (validators, values) => {
  const errors = validators
    .map(validator => validator(values))
    .filter(validator => typeof validator === 'object');
  const d = errors;
  return { newIsValid: !errors || errors.length === 0, newErrors: errors.reduce((errors, error) => ({ ...errors, ...error }), {}) };
}

//хук управления формой и валидации формы
export function useFormWithValidation(defaultValues, defaultTouched, validators = []) {
  const [values, setValues] = useState(defaultValues);
  const { isValid: defaultIsValid, errors: defaultErrors } = validate(validators, defaultValues);
  const [errors, setErrors] = useState(defaultErrors);
  const [isValid, setIsValid] = useState(defaultIsValid);
  const [touched, setTouched] = useState(defaultTouched);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    const newValues = { ...values, [name]: value };
    const { newIsValid, newErrors } = validate(validators, newValues);
    setValues(newValues);
    setErrors(newErrors);
    setIsValid(newIsValid);
    setTouched({ ...touched, [name]: true });
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(defaultValues);
      setErrors({});
      setIsValid(false);
      setTouched({});
    },
    [setValues, setErrors, setIsValid, setTouched]
  );

  return { values, handleChange, touched, errors, isValid, resetForm };
}

export default useFormWithValidation;
