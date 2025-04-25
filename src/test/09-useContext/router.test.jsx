// Importa funciones necesarias para renderizar componentes y hacer pruebas en pantalla
import { render, screen } from "@testing-library/react";

// Importa componentes del enrutador de React para simular navegación
import { RouterProvider, createMemoryRouter } from "react-router-dom";

// Importa el enrutador definido en el proyecto, que contiene las rutas de la app
import { router as baseRouter } from "../../09-useContext/router";

// Importa extensiones para Jest que permiten hacer aserciones como "toBeInTheDocument"
import "@testing-library/jest-dom";

// Describe el grupo de pruebas para el enrutador principal de la aplicación
describe("Pruebas en el enrutador de MainApp", () => {
  // Función de utilidad para configurar el entorno de pruebas con una ruta específica
  const setup = (initialRoute) => {
    // Crea un enrutador en memoria (no usa la URL real del navegador)
    const memoryRouter = createMemoryRouter(baseRouter.routes, {
      initialEntries: [initialRoute], // Ruta inicial para la prueba
    });

    // Renderiza la aplicación con el enrutador en memoria
    render(<RouterProvider router={memoryRouter} />);
  };

  // Primera prueba: verifica que se muestre la página de inicio (HomePage) en la ruta "/"
  test("Debe mostrar HomePage en la ruta '/'", async () => {
    setup("/"); // Configura la prueba para navegar a "/"
    // Espera que el texto "Home Page" esté presente en el documento
    expect(await screen.findByText("Home Page")).toBeInTheDocument();
  });

  // Segunda prueba: verifica que se muestre la página de login en la ruta "/login"
  test("Debe mostrar LoginPage en la ruta '/login'", async () => {
    setup("/login");
    expect(await screen.findByText("Login Page")).toBeInTheDocument();
  });

  // Tercera prueba: verifica que se muestre la página "About" en la ruta "/about"
  test("Debe mostrar AboutPage en la ruta '/about'", async () => {
    setup("/about");
    expect(await screen.findByText("About Page")).toBeInTheDocument();
  });

  // Cuarta prueba: verifica que una ruta inexistente redirija a AboutPage
  test("Debe redirigir a AboutPage si la ruta no existe", async () => {
    setup("/ruta-inexistente"); // Ruta que no está definida
    expect(await screen.findByText("About Page")).toBeInTheDocument();
  });
});
