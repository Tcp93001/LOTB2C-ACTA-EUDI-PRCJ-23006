import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({onSaveExpense}) => {
  // const [title, setTitle] = useState('');
  // const [amount, setAmount] = useState('');
  // const [date, setDate] = useState('');

  // const titleChangeHandler = (event) => {
  //   setTitle(event.target.value);
  // };

  // const amountChangeHandler = (event) => {
  //   setAmount(event.target.value)
  // };

  // const dateChangeHandler = (event) => {
  //   setDate(event.target.value)
  // };

  const [expense, setExpense] = useState({
    title: '',
    amount: '',
    date: ''
  })

  const titleChangeHandler = (event) => {
    setExpense((prevState) => ({
      ...prevState,
      title: event.target.value
    }))
  };

  const amountChangeHandler = (event) => {
    setExpense((prevState) => ({
      ...prevState,
      amount: event.target.value
    }));
  };

  const dateChangeHandler = (event) => {
    setExpense((prevState) => ({
      ...prevState,
      date: event.target.value
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseResult = {
      ...expense,
      amount: Number(expense.amount),
      date: new Date(expense.date)
    }

    onSaveExpense(expenseResult);

    // Limpiar mi formulario
    setExpense({
      title: '',
      amount: '',
      date: ''
    })
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense-controls">
        <div className="new-expense-control">
          <label>Descripción</label>
          <input type="text" value={expense.title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense-control">
          <label>Monto</label>
          <input type="number" min="1" step="1" value={expense.amount} onChange={amountChangeHandler} />
        </div>
        <div className="new-expense-control">
          <label>Fecha</label>
          <input type="date" min="2024-01-01" max="2027-12-31" value={expense.date} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense-actions">
        <button type="submit">Agregar</button>
      </div>
    </form>
  )
}

export default ExpenseForm;
