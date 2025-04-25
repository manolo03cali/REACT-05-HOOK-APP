// Importa el hook personalizado useForm desde la carpeta hooks
import { useForm } from "../hooks/useForm";

// Componente que representa el formulario para agregar nuevos TODOs
export const TodoAdd = ({ onNewTodo }) => {
  // Utiliza el hook useForm para manejar el estado del formulario
  // description: valor actual del campo
  // onInputChange: función para actualizar el valor
  // onResetForm: función para limpiar el formulario
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  // Función que se ejecuta al enviar el formulario
  const onFormSubmit = (evento) => {
    evento.preventDefault(); // Previene el comportamiento por defecto del formulario

    // Validación: si el campo está vacío o tiene un solo carácter, no se hace nada
    if (description.length <= 1) return;

    // Se crea un nuevo objeto TODO con id único, descripción y estado 'done'
    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    };

    // Llama la función pasada por props para agregar el nuevo TODO
    onNewTodo(newTodo);
    // Limpia el formulario
    onResetForm();
  };

  // Renderiza el formulario de entrada de datos
  return (
    <form onSubmit={onFormSubmit}>
      {/* Campo de entrada para la descripción de la tarea */}
      <input
        type="text"
        placeholder="¿Qué hay que hacer?"
        className="form-control"
        name="description"
        value={description}
        onChange={onInputChange}
      />

      {/* Botón para enviar el formulario */}
      <button type="submit" className="btn btn-outline-primary mt-1">
        Agregar
      </button>
    </form>
  );
};
