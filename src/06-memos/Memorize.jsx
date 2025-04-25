// Importamos React y el hook useState para manejar el estado local del componente
import React, { useState } from "react";

// Importamos un custom hook llamado useCounter desde la carpeta de hooks
import { useCounter } from "../hooks";

// Importamos el componente Small que probablemente muestra un número
import { Small } from "./Small";

// Componente funcional principal
export const Memorize = () => {
  // Usamos el custom hook useCounter, inicializando el contador en 10
  // Este hook nos devuelve el valor actual del contador y una función para incrementarlo
  const { counter, increment } = useCounter(10);

  // Creamos un estado booleano llamado 'show' para controlar si se muestra o no algo
  const [show, setshow] = useState(true);

  // JSX que se renderiza en la interfaz
  return (
    <>
      {/* Título con el contador, usando el componente Small para mostrar el valor */}
      <h1>
        Counter:
        <Small value={counter} />
      </h1>

      <hr />

      {/* Botón que incrementa el contador al hacer clic */}
      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>

      {/* Botón que cambia el estado de 'show' entre true y false */}
      {/* También muestra el estado actual como texto usando JSON.stringify */}
      <button
        className="btn btn-outline-primary"
        onClick={() => setshow(!show)}
      >
        Show/Hide{JSON.stringify(show)}
      </button>
    </>
  );
};
