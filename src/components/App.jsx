import Expenses from "./Expenses";

function App() {
  const expenses = [
    {
      id: Math.random(),
      date: new Date(2022, 4, 23),
      title: "Libros",
      amount: 250,
    },
    {
      id: Math.random(),
      date: new Date(2022, 2, 20),
      title: "Café",
      amount: 50,
    },
    {
      id: Math.random(),
      date: new Date(2022, 3, 18),
      title: "Comida",
      amount: 600,
    },
  ];

  return (
    <div>
      <h1>Hola mundo!</h1>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
