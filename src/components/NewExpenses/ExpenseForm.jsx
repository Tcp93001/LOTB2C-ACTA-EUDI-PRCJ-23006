import { useState } from "react";
import styled from "styled-components";

// Los styled components pueden ir en un archivo desde donde se importen, o se pueden dejar
// ANTES de la declaración del componente principal (en este archivo, ExpenseForm)

const FormControl = styled.div`
  & label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
    color: ${(props) => props.$invalid ? '#AD0000' : '#000' }
  }

  & input {
    font: inherit;
    padding: 0.5rem;
    border-radius: 6px;
    border: 1px solid #ccc;
    width: 20rem;
    max-width: 100%;
    border-color: ${(props) => props.$invalid ? '#AD0000' : '#AFAFAF' }
  }
`;

const FormControls = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  text-align: left;
  justify-content: space-between;
  flex-direction: column;

  @media(min-width: 768px) {
    flex-direction: row;
  }
`;

const FormActions = styled.div`
  text-align: right;
`;

const Button = styled.button`
font: inherit;
cursor: pointer;
padding: 0.5rem 1rem;
border: 1px solid #464646;
background-color: #464646;
color: #e5e5e5;
border-radius: 12px;
margin-right: 1rem;
width: 100%;

&:hover,
&:active {
  background-color: #AFAFAF;
  border-color: #AFAFAF;
  color: black;
  font-weight: 600;
}

@media(min-width: 768px) {
  width: auto;
}
`;

const ExpenseForm = ({onSaveExpense}) => {
  const [isValid, setIsValid] = useState(true);
  const [expense, setExpense] = useState({
    title: '',
    amount: '',
    date: ''
  });

  const dataChangeHandler = (event) => {
    setExpense((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseResult = {
      ...expense,
      title: expense.title,
      amount: Number(expense.amount),
      date: new Date(expense.date)
    }

    if (
      expense.title.trim().length === 0 ||
      expense.amount.trim().length === 0 ||
      expense.date.trim().length === 0
    ) {
      setIsValid(false);
      return;
    } else {
      setIsValid(true)
    }

    onSaveExpense(expenseResult);

    // Limpiar mi formulario
    setExpense({
      title: '',
      amount: '',
      date: ''
    })
  };

  // Noten que a partir de la versión 5.1 de styled components se usan las transient props
  // agregando un simbolo $ antes de la prop en el Styled Component.
  // Por eso se tienen que señalar las props que no queremos en el DOM,como invalid

  return (
    <form onSubmit={submitHandler}>
      <FormControls>
        <FormControl $invalid={!isValid}>
          <label>Descripción</label>
          <input name="title" type="text" value={expense.title} onChange={dataChangeHandler} />
        </FormControl>
        <FormControl $invalid={!isValid}>
          <label>Monto</label>
          <input name="amount" type="number" min="1" step="1" value={expense.amount} onChange={dataChangeHandler} />
        </FormControl>
        <FormControl $invalid={!isValid}>
          <label>Fecha</label>
          <input name="date" type="date" min="2024-01-01" max="2027-12-31" value={expense.date} onChange={dataChangeHandler} />
        </FormControl>
      </FormControls>
      <FormActions>
        <Button type="submit">Agregar</Button>
      </FormActions>
    </form>
  )
}

export default ExpenseForm;
