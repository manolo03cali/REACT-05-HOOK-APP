// Importamos los hooks useEffect y useState desde React
import { useEffect, useState } from "react";

// Importamos el componente Message
import { Message } from "./Message";

// Definimos el componente funcional SimpleForm
export const SimpleForm = () => {
  // Estado que maneja los valores del formulario
  const [formState, setformState] = useState({
    username: "manuel2",
    email: "manolo.ing@gmail.com",
  });

  // Desestructuramos los valores del estado para usarlos más fácilmente
  const { username, email } = formState;

  // Función que se ejecuta cada vez que cambia un input
  const onInputChange = ({ target }) => {
    const { name, value } = target;

    // Actualizamos el estado del formulario sin perder los otros campos
    setformState({
      ...formState,
      [name]: value, // Solo se actualiza el campo que cambió
    });
  };

  // Este useEffect se ejecuta una sola vez al montar el componente
  useEffect(() => {
    // console.log("useEffet called");
  }, []);

  // Este useEffect se ejecuta cada vez que cambia el estado completo del formulario
  useEffect(() => {
    // console.log("FormState change");
  }, [formState]);

  // Este useEffect se ejecuta solo cuando cambia el valor del campo "email"
  useEffect(() => {
    // console.log("Email change");
  }, [email]);

  // Renderizamos el formulario
  return (
    <>
      <h1>Formulario simple</h1>
      <hr />

      {/* Campo de entrada para el nombre de usuario */}
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange} // Se actualiza al escribir
      />

      {/* Campo de entrada para el email */}
      <input
        type="email"
        className="form-control mt-3"
        placeholder="manuel@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange} // Se actualiza al escribir
      />

      {/* Si el username es "manuel2", mostramos el componente Message */}
      {username === "manuel2" && <Message />}
    </>
  );
};
