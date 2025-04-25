// Importa React (necesario para usar JSX)
import React from "react";

// Importa el componente TodoItem, que representa una tarea individual
import { TodoItem } from "./TodoItem";

// Componente funcional que representa una lista de tareas
// Recibe como props:
// - todos: un arreglo de tareas (por defecto es un arreglo vacío)
// - onDeleteTodo: función para eliminar una tarea
// - onToggleTodo: función para marcar una tarea como completada o no
export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
  return (
    <>
      {/* Lista de Bootstrap para agrupar los ítems */}
      <ul className="list-group">
        {/* Recorre cada tarea en el arreglo 'todos' */}
        {todos.map((todo) => (
          // Renderiza un TodoItem por cada tarea
          <TodoItem
            key={todo.id} // Se recomienda usar una key única para cada elemento al iterar
            todo={todo} // Pasa la tarea actual como prop
            onDeleteTodo={onDeleteTodo} // Pasa la función para eliminar tarea
            onToggleTodo={onToggleTodo} // Pasa la función para marcar tarea como completada
          />
        ))}
      </ul>
    </>
  );
};
