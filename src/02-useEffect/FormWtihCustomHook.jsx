// Importamos los hooks useEffect y useState desde React
import { useEffect, useState } from "react";

// Importamos un hook personalizado llamado useForm desde la carpeta hooks
import { useForm } from "../hooks/useForm";

// Definimos el componente funcional llamado FormWithCustomHook
export const FormWithCustomHook = () => {
  // Usamos el custom hook useForm para manejar el estado del formulario
  // Desestructuramos las propiedades necesarias desde el hook: el estado completo del formulario (formState),
  // la función para manejar cambios en los inputs (onInputChange),
  // y los valores individuales de cada campo (username, email, password)
  const { formState, onInputChange, username, email, password, onResetForm } =
    useForm({
      username: "",
      email: "",
      password: "",
    });

  // También podríamos obtener los valores así: const { username, email, password } = formState;
  // Pero el custom hook ya nos los retorna individualmente para mayor comodidad

  // Renderizamos el formulario en JSX
  return (
    <>
      <h1>Formulario con custom hook</h1>
      <hr />

      {/* Campo de entrada para el nombre de usuario */}
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange} // Cuando cambia el input, se actualiza el estado del formulario
      />

      {/* Campo de entrada para el email */}
      <input
        type="email"
        className="form-control mt-3"
        placeholder="manuel@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange} // Se actualiza automáticamente desde el hook
      />

      {/* Campo de entrada para la contraseña */}
      <input
        type="password"
        className="form-control mt-3"
        placeholder="contrasena"
        name="password"
        value={password}
        onChange={onInputChange} // También se actualiza usando el mismo handler
      />
      <button onClick={onResetForm} className="btn btn-primary mt-3">
        Borrar
      </button>
    </>
  );
};
