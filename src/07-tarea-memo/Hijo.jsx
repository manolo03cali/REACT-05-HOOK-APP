// Importamos la función 'memo' desde React, la cual se utiliza para memorizar un componente y evitar renders innecesarios
import { memo } from "react";

// Exportamos el componente funcional 'Hijo' envuelto en 'memo'
// 'memo' hará que el componente solo se vuelva a renderizar si cambian sus props
export const Hijo = memo(({ numero, incrementar }) => {
  // Este mensaje se imprimirá en la consola cada vez que el componente se vuelva a renderizar
  console.log("  Me volví a generar :(  ");

  // Retornamos un botón que al hacer clic llama a la función 'incrementar', pasando como argumento el número recibido por props
  return (
    <button
      className="btn btn-primary mr-3" // Clase de Bootstrap para estilo del botón
      onClick={() => incrementar(numero)} // Evento onClick que llama a la función incrementar con el número actual
    >
      {numero} {/* Mostramos el número dentro del botón */}
    </button>
  );
});
