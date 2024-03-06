import "../styles/ExpenseDate.css";

function ExpenseDate(props) {
  // LOGICA
  const month = props.date.toLocaleString('es-MX', {month: 'long'});
  const day = props.date.toLocaleString('es-MX', {day: '2-digit'});
  const year = props.date.getFullYear();

  return (
    // PRESENTACION
    <div className="expense-date">
      <div className="expense-date-month">{month}</div>
      <div className="expense-date-year">{year}</div>
      <div className="expense-date-day">{day}</div>
    </div>
  );
}

export default ExpenseDate;