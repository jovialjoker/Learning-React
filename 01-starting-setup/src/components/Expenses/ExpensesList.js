import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
const ExpensesList = ({ expenses }) => {
  if (expenses.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found</h2>;
  }
  return (
    <ul className="expenses-list">
      {expenses.map((expense) => {
        const { id, date, title, amount } = expense;
        return (
          <ExpenseItem key={id} date={date} title={title} amount={amount} />
        );
      })}
    </ul>
  );
};
export default ExpensesList;
