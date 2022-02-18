import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = ({ onSave }) => {
  const [showForm, setShowForm] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const ExpenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onSave(ExpenseData);
  };
  const cancelBtnHandler = () => {
    setShowForm(!showForm);
  };
  return (
    <div className="new-expense">
      {showForm ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelBtnHandler}
        />
      ) : (
        <button
          onClick={() => {
            setShowForm(!showForm);
          }}
        >
          Add new Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
