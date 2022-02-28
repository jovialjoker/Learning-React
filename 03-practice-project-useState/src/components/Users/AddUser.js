import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = ({ onAdd }) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState([]);
  const addUserHandler = (e) => {
    e.preventDefault();
    if (enteredAge.trim().length === 0 || enteredUsername.trim().length === 0) {
      setShowModal(!showModal);
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age",
      });
    } else if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (>0)",
      });
      setShowModal(!showModal);
    } else {
      onAdd(enteredUsername, enteredAge);
    }
    setEnteredAge("");
    setEnteredUsername("");
  };
  const usernameHandler = (e) => {
    setEnteredUsername(e.target.value);
  };
  const ageHandler = (e) => {
    setEnteredAge(e.target.value);
  };
  const okayHandler = () => {
    setShowModal(!showModal);
  };

  return (
    <Wrapper>
      {showModal && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onOkay={okayHandler}
        ></ErrorModal>
      )}

      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input
            id="username"
            value={enteredUsername}
            onChange={usernameHandler}
          ></input>
          <label htmlFor="age">Age(Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageHandler}
          ></input>
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </Wrapper>
  );
};
export default AddUser;
