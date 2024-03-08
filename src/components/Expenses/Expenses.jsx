import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = ({expenses}) => {
  const [year, setYear] = useState('2024');

  const filterChangeHandler = (selectedYear) => {
    setYear(selectedYear);
  }

  const filteredExpenses = expenses.filter(expense => {
    // Esta opcion es para regresar todos los gastos sin importar el año
    if (year === 'all') return expense;

    // Esta parte regresa solo los elementos filtrados por año
    return expense.date.getFullYear().toString() === year;
  })

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onChangeFilter={filterChangeHandler} />
      {!filteredExpenses.length ? <h3>No se encontraron resultados</h3> : (
        // Este fue el problema. Use expenses, que tiene todos los elementos.
        // Debi usar filteredExpenses, que solo tiene el array con los elementos filtrados
        filteredExpenses.map(elem =>
            <ExpenseItem
              key={elem.id}
              date={elem.date}
              title={elem.title}
              amount={elem.amount}
            />
        )
      )}
    </Card>
  )
}

export default Expenses;
