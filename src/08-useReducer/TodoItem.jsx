// Componente funcional que representa un ítem de la lista de tareas (Todo)
export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <>
      {/* Elemento de lista con clases de Bootstrap para estilo y diseño en fila */}
      <li className="list-group-item d-flex justify-content-between">
        {/* Texto de la tarea (todo.description) */}
        {/* Si la tarea está marcada como hecha (todo.done), se le aplica una clase que la tacha */}
        <span
          className={`align-self-center ${
            todo.done ? "text-decoration-line-through" : ""
          }`}
          // Al hacer clic, se ejecuta la función para marcar como hecho o no hecho
          onClick={() => onToggleTodo(todo.id)}
          aria-label="span"
        >
          {todo.description}
        </span>

        {/* Botón para eliminar la tarea */}
        <button
          aria-label="boton1"
          className="btn btn-danger"
          // Al hacer clic, se ejecuta la función que elimina la tarea
          onClick={() => onDeleteTodo(todo.id)}
        >
          Borrar
        </button>
      </li>
    </>
  );
};
