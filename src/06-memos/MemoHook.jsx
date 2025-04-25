// Importamos React y los hooks necesarios
import React, { useMemo, useState } from "react";
// Importamos un custom hook que nos da un contador
import { useCounter } from "../hooks";

// Función pesada (simula un proceso que consume recursos)
// Se ejecuta un bucle que solo imprime en consola (simulación de carga)
const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("Ahí vamos...");
  }
  return `${iterationNumber} iteraciones realizadas`;
};

// Componente funcional principal
export const MemoHook = () => {
  // Desestructuramos el valor actual del contador y la función para incrementarlo desde el custom hook
  const { counter, increment } = useCounter(4000);

  // Estado local que se usa para mostrar/ocultar algo (aunque no afecta visualmente el componente)
  const [show, setshow] = useState(true);

  // Memoriza el resultado de heavyStuff. Solo se volverá a ejecutar si cambia `counter`.
  // Esto evita que la función pesada se ejecute en cada render innecesariamente.
  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      {/* Título con el contador */}
      <h1>
        Counter:
        <small>{counter}</small>
      </h1>

      <hr />

      {/* Muestra el resultado de la función pesada (memorized) */}
      <h4>{memorizedValue}</h4>

      {/* Botón para incrementar el contador */}
      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>

      {/* Botón para alternar el estado `show` (no afecta la vista, pero fuerza un re-render) */}
      <button
        className="btn btn-outline-primary"
        onClick={() => setshow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
