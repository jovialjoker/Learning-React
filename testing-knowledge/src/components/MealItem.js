import React from "react";

export const MealItem = (props) => {
  return (
    <li>
      <h2>{props.name}</h2>
      <div>
        <p>{props.description}</p>
        <p>{props.price} lei</p>
      </div>
    </li>
  );
};
