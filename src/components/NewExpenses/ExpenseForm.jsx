import { useState, useRef } from "react";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
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

const ExpenseForm = ({onSaveExpense}) => {
  const [error, setError] = useState(null);
  const [isDateValid, setIsDateValid] =useState(true);
  const [isTitleValid, setIsTitleValid] =useState(true);
  const [isAmountValid, setIsAmountValid] =useState(true);
  const [expense, setExpense] = useState({
    title: '',
    amount: '',
    date: ''
  });
  const titleRef = useRef(null);

  const toggleModal = () => setError(null);

  const dataChangeHandler = (event) => {
    setExpense((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  };

  const dateChangeHandler = (event) => {
    setIsDateValid(true)
    const { value } = event.target

    // comparacion de fechas
    const currentDate = new Date();
    const date = new Date(value);
    if (date > currentDate) {
      setIsDateValid(false);
      setError({
        title: 'Fecha inválida',
        message: `La fecha no debe ser mayor a ${date.toLocaleDateString()}`
      })
    }

    setExpense((prevState) => ({
      ...prevState,
      date: value
    }))
  }

  const validateFields = () => {
    if(expense.title.trim().length === 0) {
      setIsTitleValid(false);
      titleRef.current.focus()
    }

    if(expense.amount.trim().length === 0) {
      setIsAmountValid(false);
    }

    if(expense.date.trim().length === 0) {
      setIsDateValid(false);
    }
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseResult = {
      ...expense,
      title: expense.title,
      amount: Number(expense.amount),
      date: new Date(expense.date)
    }

    validateFields()
    // if (
    //   expense.title.trim().length === 0 ||
    //   expense.amount.trim().length === 0 ||
    //   expense.date.trim().length === 0
    // ) {
    //   setIsValid(false);
    //   return;
    // } else {
    //   setIsValid(true)
    // }

    if(isDateValid && isAmountValid && isTitleValid) {
      onSaveExpense(expenseResult);

      // Limpiar mi formulario
      setExpense({
        title: '',
        amount: '',
        date: ''
      })
    }
  };

  // Noten que a partir de la versión 5.1 de styled components se usan las transient props
  // agregando un simbolo $ antes de la prop en el Styled Component.
  // Por eso se tienen que señalar las props que no queremos en el DOM,como invalid

  return (
    <>
      <form onSubmit={submitHandler}>
        <FormControls>
          <FormControl $invalid={!isTitleValid}>
            <label>Descripción</label>
            <input
              name="title"
              type="text"
              value={expense.title}
              onChange={dataChangeHandler}
              ref={titleRef}
            />
          </FormControl>
          <FormControl $invalid={!isAmountValid}>
            <label>Monto</label>
            <input name="amount" type="number" min="1" step="1" value={expense.amount} onChange={dataChangeHandler} />
          </FormControl>
          <FormControl $invalid={!isDateValid}>
            <label>Fecha</label>
            <input name="date" type="date" min="2024-01-01" max="2027-12-31" value={expense.date} onChange={dateChangeHandler} />
          </FormControl>
        </FormControls>
        <FormActions>
          <Button type="submit">Agregar</Button>
        </FormActions>
      </form>
      {
        error && (
          <Modal title={error.title} message={error.message} onConfirm={toggleModal} />
        )
      }
    </>
  )
}

export default ExpenseForm;
