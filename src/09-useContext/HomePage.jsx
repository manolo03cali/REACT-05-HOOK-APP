// Importamos React y el hook useContext que nos permite acceder a un contexto desde cualquier componente.
import React, { useContext } from "react";

// Importamos el contexto de usuario que previamente creamos y exportamos.
import { UserContext } from "./context/UserContext";

// Definimos y exportamos el componente HomePage.
export const HomePage = () => {
  // Usamos el hook useContext para obtener el objeto 'user' desde UserContext.
  const { user } = useContext(UserContext);

  // Devolvemos el JSX que se va a renderizar en pantalla.
  return (
    <>
      {/* Título principal de la página, mostrando el nombre del usuario si existe (uso de optional chaining) */}
      <h1>
        Home Page <small>{user?.name}</small>
      </h1>

      {/* Línea divisoria */}
      <hr />

      {/* Mostramos el objeto 'user' como texto en formato JSON, con sangría de 3 espacios */}
      <pre aria-label="pre">{JSON.stringify(user, null, 3)}</pre>
    </>
  );
};
