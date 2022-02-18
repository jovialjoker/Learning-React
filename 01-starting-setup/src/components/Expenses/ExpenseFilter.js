import React from "react";

import "./ExpenseFilter.css";

const { useState } = React;

const ExpensesFilter = ({ onFilter, dropdownYear }) => {
  const [selected, setSelected] = useState(false);

  const changeHandler = (event) => {
    if (event.target.value !== "default") {
      setSelected(true);
      onFilter(event.target.value);
    }
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select
          value={selected ? dropdownYear : "default"}
          onChange={changeHandler}
        >
          <option value="default">Select your year...</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
