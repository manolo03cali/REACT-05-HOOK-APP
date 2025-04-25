// Se importan funciones para renderizar componentes y consultar elementos en las pruebas
import { render, screen } from "@testing-library/react";

// Se importa el contexto de usuario, que será usado para simular diferentes estados del usuario
import { UserContext } from "../../09-useContext/context/UserContext";

// Se importa el componente que se desea probar
import { HomePage } from "../../09-useContext";

// Se define un grupo de pruebas con Jest para el componente <HomePage />
describe("Pruebas en <HomePgage/>", () => {
  // Se define un objeto de usuario simulado para usar en las pruebas
  const user = {
    id: 1,
    name: "Manuel",
  };

  // Primera prueba: el componente debe mostrarse sin un usuario (user: null)
  test("debe de mostrar el componente sin el usuario", () => {
    // Se renderiza el componente envolviéndolo en el UserContext.Provider con user: null
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );

    // Se obtiene el elemento con aria-label="pre" (se espera que sea una etiqueta <pre>)
    const preTag = screen.getByLabelText("pre");

    // screen.debug(); // (opcional) Muestra el HTML renderizado para depuración

    // Se espera que el contenido de la etiqueta <pre> sea exactamente "null"
    expect(preTag.innerHTML).toBe("null");
  });

  // Segunda prueba: el componente debe mostrar correctamente al usuario proporcionado
  test("debe de mostrar el componente con el usuario", () => {
    // Se renderiza el componente pero esta vez con un objeto user válido
    render(
      <UserContext.Provider value={{ user: user }}>
        <HomePage />
      </UserContext.Provider>
    );

    // Se obtiene el elemento <pre> con la misma etiqueta aria-label
    const preTag = screen.getByLabelText("pre");

    // Se convierte el contenido de <pre> de texto a un objeto para poder comparar
    const userFromPre = JSON.parse(preTag.textContent.trim());

    // Se muestra el usuario obtenido del <pre> en consola (para depuración)
    console.log(userFromPre);

    // screen.debug(); // (opcional) Ver el HTML renderizado

    // Se espera que el objeto extraído sea igual al objeto de usuario original
    expect(userFromPre).toEqual(user);
  });
});
