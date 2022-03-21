import { useInput } from "../hooks/useInput";

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: firstNameIsValid,
    hasErrors: firstNameHasErrors,
    changeHandler: firstNameChangeHandler,
    blurHandler: firstNameBlurHandler,
    reset: firstNameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    isValid: lastNameIsValid,
    hasErrors: lastNameHasErrors,
    changeHandler: lastNameChangeHandler,
    blurHandler: lastNameBlurHandler,
    reset: lastNameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasErrors: emailHasErrors,
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => {
    return (
      value.trim() !== "" &&
      value.indexOf("@") !== -1 &&
      value.indexOf(".") !== -1
    );
  });

  let formIsValid = false;
  if (firstNameIsValid && lastNameIsValid && emailIsValid) formIsValid = true;

  const firstNameStyle = firstNameHasErrors
    ? "form-control invalid"
    : "form-control";
  const lastNameStyle = lastNameHasErrors
    ? "form-control invalid"
    : "form-control";
  const emailStyle = emailHasErrors ? "form-control invalid" : "form-control";
  const submitHandler = (e) => {
    e.preventDefault();
    if (!firstNameIsValid && !lastNameIsValid && !emailIsValid) return;
    console.log({ enteredEmail, enteredFirstName, enteredLastName });
    firstNameReset();
    lastNameReset();
    emailReset();
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameStyle}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={enteredFirstName}
          />
          {firstNameHasErrors && <p>First name is not valid</p>}
        </div>
        <div className={lastNameStyle}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
          />
          {lastNameHasErrors && <p>Last name is not valid</p>}
        </div>
      </div>
      <div className={emailStyle}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailHasErrors && <p>Email is not valid</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
