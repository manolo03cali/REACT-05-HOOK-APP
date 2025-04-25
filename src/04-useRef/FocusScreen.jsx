import React, { useRef } from "react";

// Componente funcional llamado FocusScreen
export const FocusScreen = () => {
  // useRef permite crear una referencia mutable a un elemento del DOM
  const inputRef = useRef();

  // Función que se ejecuta cuando se hace clic en el botón
  const onClick = () => {
    // Selecciona el contenido del input referenciado
    // Esto hace que el input reciba el foco automáticamente
    inputRef.current.select();
  };

  return (
    <>
      <h1>focus Screen</h1>
      <hr />

      {/* Campo de texto que se referenciará con inputRef */}
      <input
        ref={inputRef} // Asocia el input con la referencia
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control"
      />

      {/* Botón que activa la función para enfocar el input */}
      <button onClick={onClick} className="btn btn-primary mt-2">
        Set focus
      </button>
    </>
  );
};
