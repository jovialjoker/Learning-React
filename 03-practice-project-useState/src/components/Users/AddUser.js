import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = ({ onAdd }) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState([]);
  const addUserHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (enteredUserAge.trim().length === 0 || enteredName.trim().length === 0) {
      setShowModal(!showModal);
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age",
      });
    } else if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (>0)",
      });
      setShowModal(!showModal);
    } else {
      onAdd(enteredName, enteredUserAge);
    }
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
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
          <input id="username" ref={nameInputRef}></input>
          <label htmlFor="age">Age(Years)</label>
          <input id="age" type="number" ref={ageInputRef}></input>
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </Wrapper>
  );
};
export default AddUser;
