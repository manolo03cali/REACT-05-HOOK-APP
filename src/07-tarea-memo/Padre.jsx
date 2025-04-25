// Importa el componente hijo desde el archivo Hijo.js
import { Hijo } from "./Hijo";

// Importa los hooks useState y useCallback desde React
import { useState, useCallback } from "react";

// Componente funcional llamado Padre
export const Padre = () => {
  // Arreglo de números que se pasarán como props a cada componente Hijo
  const numeros = [2, 4, 6, 8, 10];

  // Hook useState para almacenar el valor acumulado que se mostrará en pantalla
  const [valor, setValor] = useState(0);

  /*
    Definición de la función 'incrementar' usando useCallback para memorizarla.
    - Esto evita que se cree una nueva función en cada renderizado del componente.
    - Es útil cuando se pasa la función como prop a componentes hijos memorizados,
      ya que previene renderizados innecesarios.

    La función recibe un número 'num' y lo suma al valor actual del estado 'valor'.
    Se utiliza la forma funcional de setValor para asegurarse de trabajar con el valor
    más reciente del estado, evitando errores causados por closures.
  */
  const incrementar = useCallback((num) => {
    setValor((oldValor) => oldValor + num);
  }, []);

  // Renderizado del componente Padre
  return (
    <div>
      {/* Título del componente padre */}
      <h1>Padre</h1>

      {/* Muestra el valor acumulado por los hijos al hacer clic */}
      <p> Total: {valor} </p>

      <hr />

      {/* 
        Mapea el array de números y renderiza un componente Hijo por cada número.
        - key={n}: clave única para que React maneje eficientemente la lista.
        - numero={n}: prop que representa el valor individual enviado al hijo.
        - incrementar={incrementar}: función que permite al hijo modificar el estado del padre.
      */}
      {numeros.map((n) => (
        <Hijo key={n} numero={n} incrementar={incrementar} />
      ))}
    </div>
  );
};
