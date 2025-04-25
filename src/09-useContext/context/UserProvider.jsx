// Importamos useState desde React para poder manejar el estado del usuario.
import { useState } from "react";

// Importamos el contexto que creamos previamente.
import { UserContext } from "./UserContext";

// Este es un ejemplo comentado de un posible usuario inicial.
// Puedo usarlo si deseo establecer un valor inicial por defecto en lugar de dejar el estado vacío.
// const user = {
//   id: 123,
//   name: "Manuel Quintero",
//   email: "manolo.ing@gmail.com",
// };

// Creamos y exportamos el componente UserProvider, que será un proveedor del contexto.
// Recibe 'children', es decir, todos los componentes hijos que estarán envueltos dentro del provider.
export const UserProvider = ({ children }) => {
  // Creamos un estado llamado 'user' y su función para actualizarlo 'setUser'.
  // Inicialmente, el usuario no tiene valor (undefined), pero puede ser actualizado luego.
  const [user, setUser] = useState();

  return (
    // Aquí envolvemos a los hijos con el UserContext.Provider.
    // Pasamos como valor el objeto con 'user' y 'setUser' para que estén disponibles globalmente
    // en cualquier componente que use useContext(UserContext).
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
