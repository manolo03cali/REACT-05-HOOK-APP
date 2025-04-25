// Importamos los hooks useCallback, useState y useEffect desde React
import { useCallback, useState, useEffect } from "react";

// Importamos el componente hijo ShowIncrement
import { ShowIncrement } from "./ShowIncrement";

// Componente principal CallbackHook
export const CallbackHook = () => {
  // Definimos un estado llamado counter con valor inicial 10
  const [counter, setCounter] = useState(10);

  /**
   * Creamos una función memorizada con useCallback llamada incrementFather.
   *
   * Esta función incrementa el contador en 1 cada vez que se llama.
   *
   * Al usar la forma setCounter((value c) => value c + 1), nos aseguramos
   * de obtener siempre el valor actualizado del estado, incluso si
   * se ejecutan múltiples actualizaciones seguidas o asincrónicas.
   *
   * El array de dependencias está vacío ([]), lo que significa que
   * esta función se memoriza una única vez y su referencia no cambia
   * mientras el componente no se desmonte o reinicie.
   */
  const incrementFather = useCallback((value) => {
    setCounter((c) => c + value);
  }, []);

  /**
   * Este efecto se ejecuta una sola vez (cuando se monta el componente),
   * porque la dependencia es `incrementFather`, y como está memorizada,
   * no cambiará de referencia pero OJO si no estuviera memorizada genera un bucle infinito.
   *Porque apuntan a un espacio de memoria diferente.
   * Aquí simplemente llamamos a incrementFather para aumentar el contador.
   */
  useEffect(() => {
    incrementFather();
  }, [incrementFather]);

  return (
    <>
      {/* Mostramos el valor actual del contador en pantalla */}
      <h1>useCallback Hook: {counter}</h1>
      <hr />

      {/*
        Renderizamos el componente hijo ShowIncrement y le pasamos
        la función incrementFather como prop llamada `increment`.

        Como `incrementFather` está memorizada, su referencia no cambia,
        y si el componente hijo está envuelto en React.memo,
        se evitarán renders innecesarios.
      */}
      <ShowIncrement increment={incrementFather} />
    </>
  );
};
