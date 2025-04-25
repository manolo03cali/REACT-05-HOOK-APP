// Importamos React y el hook useContext para acceder a contextos en componentes funcionales.
import React, { useContext } from "react";

// Importamos el contexto que contiene la información del usuario.
import { UserContext } from "./context/UserContext";

// Definimos y exportamos el componente LoginPage.
export const LoginPage = () => {
  // Obtenemos el objeto 'user' y la función 'setUser' desde el contexto UserContext.
  const { user, setUser } = useContext(UserContext);

  // Devolvemos el JSX que se va a renderizar.
  return (
    <>
      {/* Título de la página */}
      <h1>Login Page</h1>

      {/* Línea divisoria */}
      <hr />

      {/* Mostramos el objeto user como JSON en pantalla */}
      <pre aria-label="pre">{JSON.stringify(user, null, 3)}</pre>

      {/* Botón que, al hacer clic, establece un nuevo usuario usando la función setUser */}
      <button
        className="btn btn-primary"
        onClick={() =>
          setUser({
            id: 1234,
            name: "Jose Manuel",
            email: "manolo.ing@gmail.com",
          })
        }
      >
        Set user
      </button>
    </>
  );
};
