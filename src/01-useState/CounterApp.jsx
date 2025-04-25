import { useState } from "react";

// Definimos un componente funcional llamado CounterApp
export const CounterApp = () => {
  // Definimos el estado 'contadores' con useState, que almacena un objeto con tres contadores
  const [contadores, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  // Extraemos los valores de los contadores del estado para facilitar su uso en el JSX
  const { counter1, counter2, counter3 } = contadores;

  return (
    <>
      {/* Mostramos los valores de los contadores en la interfaz */}
      <h1>Counter1: {counter1}</h1>
      <h1>Counter2: {counter2}</h1>
      <h1>Counter3: {counter3}</h1>
      <hr />

      {/* Botón que incrementa 'counter1' en 1 al hacer clic */}
      <button
        className="btn btn-primary"
        onClick={() =>
          setCounter({
            ...contadores, // Mantenemos los valores actuales de los otros contadores
            //spread operator para copiar todas las propiedades del objeto al nuevo objeto que estamos pasando
            counter1: counter1 + 1, // Solo actualizamos 'counter1'
          })
        }
      >
        +1
      </button>
    </>
  );
};
