// Importamos React desde la librería de React
import React from "react";

/**
 * Componente funcional que recibe una función llamada `increment` como prop.
 *
 * Está envuelto en `React.memo`, lo que significa que React memoriza el resultado
 * del último render y **solo volverá a renderizar este componente si las props cambian**.
 *
 * En este caso, si `increment` no cambia de referencia, entonces este componente
 * **no se vuelve a renderizar**, lo cual optimiza el rendimiento.
 */
export const ShowIncrement = React.memo(({ increment }) => {
  // Este log se imprime cada vez que el componente se renderiza.
  // Sirve para verificar si el memo está funcionando o no.
  console.log("Me volví a generar :(");

  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        // Al hacer clic, ejecutamos la función pasada por props (incrementFather)
        increment(5);
      }}
    >
      Incrementar
    </button>
  );
});
