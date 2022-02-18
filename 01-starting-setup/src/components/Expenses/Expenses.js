import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import "./Expenses.css";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expenses({ expenses, filter }) {
  const [filteredYear, setFilteredYear] = useState(2020);
  const filterHandler = (YearValue) => {
    setFilteredYear(YearValue);
    filter(YearValue);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onFilter={filterHandler} dropdownYear={filteredYear} />
        <ExpensesChart expenses={expenses} />
        <ExpensesList expenses={expenses} />
      </Card>
    </div>
  );
}

export default Expenses;
