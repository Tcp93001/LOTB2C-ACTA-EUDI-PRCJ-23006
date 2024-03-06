import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "../styles/Expenses.css";

const Expenses = ({expenses}) => {
  return (
    <Card className="expenses">
      {expenses.map(elem =>
          <ExpenseItem
            key={elem.id}
            date={elem.date}
            title={elem.title}
            amount={elem.amount}
          />
      )}
    </Card>
  )
}

export default Expenses;