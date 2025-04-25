// Importamos createBrowserRouter de react-router-dom para definir las rutas con historial del navegador (modo SPA)
import { createBrowserRouter } from "react-router-dom";

// Importamos los componentes principales que se usarán como rutas en la app
import { HomePage, AboutPage, LoginPage, MainApp } from "../09-useContext";

// Las siguientes líneas están comentadas. Son imports de otros componentes de ejemplo o pruebas,
// que podrían formar parte del proyecto o ejercicios anteriores, pero no se están usando actualmente.
//import { TodoApp } from "./08-useReducer/TodoApp";
//import "./08-useReducer/intro-reducer";
//import { Padre } from "./07-tarea-memo/Padre";
//import { CallbackHook } from "./06-memos/CallbackHook";
//import { MemoHook } from "./06-memos/MemoHook";
//import { Memorize } from "./06-memos/Memorize";
//import { Layout } from "./05-useLayoutEffect/Layout";
//import { FocusScreen } from "./04-useRef/FocusScreen";
//import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
//import { HooksApp } from "./HooksApp";
//import { CounterApp } from "./01-useState/CounterApp";
//import { SimpleForm } from "./02-useEffect/SimpleForm";
//import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
//import { FormWithCustomHook } from "./02-useEffect/FormWtihCustomHook";

// Comentario aclarando que este archivo es el de configuración del router
// router.js

// Creamos y exportamos el router utilizando createBrowserRouter
export const router = createBrowserRouter(
  [
    {
      // Ruta raíz de la aplicación
      path: "/",
      // Componente principal que actuará como layout o envoltorio para las rutas hijas
      element: <MainApp />,
      // Definimos las rutas hijas que se renderizarán dentro de MainApp usando <Outlet />
      children: [
        {
          // Ruta inicial (Home)
          path: "/",
          element: <HomePage />, // Componente que se mostrará en la ruta raíz
        },
        {
          path: "about", // Ruta /about
          element: <AboutPage />, // Componente que se muestra en /about
        },
        {
          path: "login", // Ruta /login
          element: <LoginPage />, // Componente que se muestra en /login
        },
        {
          path: "*", // Ruta comodín: si la ruta no coincide con ninguna anterior
          element: <AboutPage />, // Renderiza AboutPage como fallback (puede ser una especie de 404 personalizado)
        },
      ],
    },
  ],
  {
    // Configuración opcional para habilitar características futuras de React Router
    future: {
      v7_relativeSplatPath: true, // Mejora el manejo de rutas con splat '*' en versiones futuras
      v7_startTransition: true, // Soporte para transiciones concurrentes con startTransition de React 18+
    },
  }
);
