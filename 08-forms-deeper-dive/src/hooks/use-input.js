import { useState } from "react";

export const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [valueWasTouched, setValueWasTouched] = useState(false);
  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && valueWasTouched;
  const valueInputChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };
  const valueInputBlurHandler = (e) => {
    setValueWasTouched(true);
  };
  const reset = () => {
    setEnteredValue("");
    setValueWasTouched(false);
  };
  return {
    value: enteredValue,
    valueIsValid,
    hasError,
    valueInputChangeHandler,
    valueInputBlurHandler,
    reset,
  };
};
