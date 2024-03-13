import styles from "./ExpenseDate.module.css";

function ExpenseDate(props) {
  // LOGICA
  const month = props.date.toLocaleString('es-MX', {month: 'long'});
  const day = props.date.toLocaleString('es-MX', {day: '2-digit'});
  const year = props.date.getFullYear();

  return (
    // PRESENTACION
    <div className={styles["expense-date"]}>
      <div className={styles["expense-date-month"]}>{month}</div>
      <div className={styles["expense-date-year"]}>{year}</div>
      <div className={styles["expense-date-day"]}>{day}</div>
    </div>
  );
}

export default ExpenseDate;
