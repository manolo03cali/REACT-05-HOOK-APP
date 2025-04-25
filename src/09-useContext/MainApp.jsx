// Importamos React (aunque ya no es obligatorio en versiones modernas de React)
import React from "react";

// Importamos `Outlet` de react-router-dom.
// `Outlet` se utiliza para renderizar el componente hijo correspondiente a la ruta actual.
import { Outlet } from "react-router-dom";

// Importamos el componente Navbar, que usualmente contiene el menú de navegación.
import { Navbar } from "./Navbar";

// Importamos el `UserProvider`, que es un contexto personalizado para compartir datos de usuario.
import { UserProvider } from "./context/UserProvider";

// Definimos el componente `MainApp`, que servirá como componente principal de la aplicación.
export const MainApp = () => {
  return (
    <>
      {/* Envolvemos toda la app dentro del `UserProvider` para que todos los componentes hijos
          tengan acceso al contexto del usuario */}
      <UserProvider>
        {/* Mostramos la barra de navegación en la parte superior de la app */}
        <Navbar />

        {/* Línea horizontal para separar visualmente el navbar del contenido */}
        <hr />

        {/* `Outlet` renderiza el componente correspondiente a la ruta actual dentro de este layout */}
        <Outlet />
      </UserProvider>
    </>
  );
};
