import "./ExpensesFilter.css";

const ExpensesFilter = ({selected, onChangeFilter}) => {
  const changeHandler = (event) => {
    onChangeFilter(event.target.value)
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter-control">
        <label>Filtrar por años</label>
        <select selected={selected} onChange={changeHandler}>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
          <option value="2027">2027</option>
          <option value="all">Todos</option>
        </select>
      </div>
    </div>
  )
}

export default ExpensesFilter;