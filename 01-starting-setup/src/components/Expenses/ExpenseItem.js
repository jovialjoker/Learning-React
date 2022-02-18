import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import React, { useState } from "react";
function ExpenseItem({ date, title, amount }) {
  const [titles, setTitles] = useState(title);
  const clickHandler = () => {
    setTitles("Updated!");
  };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{titles}</h2>
          <div className="expense-item__price">{amount} lei</div>
        </div>
        <button onClick={clickHandler}>Change title</button>
      </Card>
    </li>
  );
}
export default ExpenseItem;
