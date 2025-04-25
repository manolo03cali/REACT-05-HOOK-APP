// Importamos utilidades de testing-library para renderizar componentes y simular eventos
import { fireEvent, render, screen } from "@testing-library/react";

// Importamos el contexto UserContext
import { UserContext } from "../../09-useContext/context/UserContext";

// Importamos el componente que vamos a probar
import { LoginPage } from "../../09-useContext";

// Grupo de pruebas para el componente <LoginPage />
describe("Pruebas en <LoginPage/>", () => {
  // Primer test: comprobar el componente sin usuario
  test("Debe de mostrar el componente sin el usuario ", () => {
    // Renderizamos el componente dentro del contexto, pasando user: null
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );

    // screen.debug(); // Línea comentada que mostraría el DOM renderizado en consola

    // Buscamos el elemento <pre> con aria-label="pre"
    const preTag = screen.getByLabelText("pre");

    // Comprobamos que su contenido sea exactamente "null"
    expect(preTag.innerHTML).toBe("null");
  });

  // Segundo test: verificar que setUser se llama al hacer clic en el botón
  test("Debe de llamar el setUser cuando se hace click en el boton", () => {
    // Creamos un mock para setUser, que nos permite saber si fue llamado
    const setUserMock = jest.fn();

    // Renderizamos el componente dentro del contexto, pasando el mock
    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );

    // Buscamos el botón por su rol (accesibilidad)
    const boton = screen.getByRole("button");

    // Simulamos un clic en el botón
    fireEvent.click(boton);

    // Verificamos que la función mock (setUserMock) fue llamada
    expect(setUserMock).toHaveBeenCalled();

    // Verificamos que fue llamada con los datos correctos
    expect(setUserMock).toHaveBeenCalledWith({
      email: "manolo.ing@gmail.com",
      id: 1234,
      name: "Jose Manuel",
    });
  });
});
