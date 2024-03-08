import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css"

function ExpenseItem(props) {

  // console.log('props >>>>> ', props);
  return (
    <Card className="expense-item">
      {/* <div>{props.date.toLocaleDateString()}</div> */}
      <ExpenseDate date={props.date}/>
      <div className="expense-item-description">
        <h2>{props.title}</h2>
        <div className="expense-item-price">${props.amount}</div>
      </div>
    </Card>
  )
}

export default ExpenseItem;