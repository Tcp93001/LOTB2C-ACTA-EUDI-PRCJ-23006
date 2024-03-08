import { useState } from "react";
import Expenses from "./Expenses/Expenses";
import NewExpense from "./NewExpenses/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: Math.random(),
      date: new Date(2025, 4, 23),
      title: "Libros",
      amount: 250,
    },
    {
      id: Math.random(),
      date: new Date(2024, 2, 20),
      title: "Café",
      amount: 50,
    },
    {
      id: Math.random(),
      date: new Date(2026, 3, 18),
      title: "Comida",
      amount: 600,
    },
  ])

  // const expenses = [
    // {
    //   id: Math.random(),
    //   date: new Date(2022, 4, 23),
    //   title: "Libros",
    //   amount: 250,
    // },
    // {
    //   id: Math.random(),
    //   date: new Date(2022, 2, 20),
    //   title: "Café",
    //   amount: 50,
    // },
    // {
    //   id: Math.random(),
    //   date: new Date(2022, 3, 18),
    //   title: "Comida",
    //   amount: 600,
    // },
  // ];

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => [expense, ...prevState]);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
