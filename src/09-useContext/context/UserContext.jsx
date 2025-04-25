// Importamos la función createContext desde React.
// Esta función nos permite crear un nuevo contexto que se puede compartir entre componentes sin pasar props manualmente.
import { createContext } from "react";

// Creamos y exportamos un nuevo contexto llamado UserContext.
// Este contexto se usará para compartir datos del usuario (como sesión, nombre, etc.) entre distintos componentes de la app.
// Al usar createContext sin valor inicial, el contexto por defecto es 'undefined' hasta que se le asigne un value con un Provider.
export const UserContext = createContext();
