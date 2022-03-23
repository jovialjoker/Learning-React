import React, { useState } from "react";

export const ItemForm = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [btnDisable, setBtnDisable] = useState(false);
  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const priceChangeHandler = (e) => {
    setPrice(e.target.value);
  };
  const descriptionChangeHandler = (e) => {
    setDescription(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      name.trim().length === 0 ||
      price.trim().length === 0 ||
      description.trim().length === 0
    )
      return;
    const id = new Date().getTime().toString();
    props.onAddItem({ id, name, price, description });
    setBtnDisable(true);
    setTimeout(() => {
      setBtnDisable(false);
    }, 3000);
    setName("");
    setDescription("");
    setPrice("");
  };
  return (
    <form onSubmit={submitHandler}>
      <h2>MEALS FORM</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          onChange={nameChangeHandler}
          value={name}
        ></input>
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          id="price"
          type="text"
          onChange={priceChangeHandler}
          value={price}
        ></input>
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          id="description"
          type="text"
          onChange={descriptionChangeHandler}
          value={description}
        ></input>
      </div>
      <button disabled={btnDisable}> ADD item</button>
    </form>
  );
};
