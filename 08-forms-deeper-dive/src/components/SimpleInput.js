import { useInput } from "../hooks/use-input";
const SimpleInput = (props) => {
  const {
    value: enteredName,
    hasError: nameInputIsInvalid,
    valueIsValid: nameIsValid,
    valueInputChangeHandler: nameInputChangeHandler,
    valueInputBlurHandler: nameInputBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredEmail,
    hasError: emailInputIsInvalid,
    valueIsValid: emailIsValid,
    valueInputChangeHandler: emailInputChangeHandler,
    valueInputBlurHandler: emailInputBlurHandler,
    reset: resetEmail,
  } = useInput((value) => {
    return (
      value.trim() !== "" &&
      value.indexOf("@") !== -1 &&
      value.indexOf(".") !== -1
    );
  });

  let formIsValid = false;
  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmit = (e) => {
    e.preventDefault();
    if (!nameIsValid || !emailIsValid) {
      return;
    }
    resetName();
    resetEmail();
  };
  return (
    <form onSubmit={formSubmit}>
      <div
        className={`${
          nameInputIsInvalid ? "form-control invalid" : "form-control"
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && <p className="error-text">Input is not Valid</p>}
      </div>
      <div
        className={`${
          emailInputIsInvalid ? "form-control invalid" : "form-control"
        }`}
      >
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Input is not Valid</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
