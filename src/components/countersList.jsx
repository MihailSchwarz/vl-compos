import react, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 1, value: 0, name: "Ложка" },
    { id: 2, value: 4, name: "вилка" },
    { id: 3, value: 0, name: "нож" },
    { id: 4, value: 4, name: "тарелка" },
    { id: 5, value: 0, name: "набор" },
  ];

  const [counters, setCounters] = useState(initialState);
  //удаление строки
  const handleDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id);
    setCounters(newCounters);
  };
  // метод сброса параметров
  const handleReset = () => {
    console.log("handle reset");
    setCounters(initialState);
  };

  // добавляет значение
  const handleIncrement = (id) => {
    const elementIndex = counters.findIndex((c) => c.id === id);
    const newCounters = [...counters];
    newCounters[elementIndex].value++;
    setCounters(newCounters);
  };

  const handleDecrement = (id) => {
    const elementIndex = counters.findIndex((c) => c.id === id);
    const newCounters = [...counters];
    newCounters[elementIndex].value--;
    setCounters(newCounters);
  };
  // обновить состояние
  /*
  const handleUpdate = () => {
    const updatedState = [
      { id: 1, value: 1, name: "Ложка" },
      { id: 2, value: 2, name: "вилка" },
      { id: 3, value: 3, name: "нож" },
      { id: 4, value: 4, name: "тарелка" },
      { id: 5, value: 5, name: "набор" },
    ];
    setCounters(updatedState);
  };*/
  return (
    <>
      {counters.map((count) => (
        // ...count сразу передаём много параметров из массива
        <Counter
          key={count.id}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          {...count}
        />
      ))}
      <button className="btn-primary btn-sm m-2" onClick={handleReset}>
        Reset
      </button>

      <button className="btn-primary btn-sm m-2">Update</button>
    </>
  );
};
export default CountersList;
