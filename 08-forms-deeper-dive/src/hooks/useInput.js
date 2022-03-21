import { useState } from "react";

export const useInput = (validateValue) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const isValid = validateValue(value);
  const hasErrors = !isValid && isTouched;

  const changeHandler = (e) => {
    setValue(e.target.value);
  };
  const blurHandler = (e) => {
    setIsTouched(true);
  };
  const reset = () => {
    setValue("");
    setIsTouched(false);
  };
  return {
    value,
    isValid,
    hasErrors,
    blurHandler,
    changeHandler,
    reset,
  };
};
