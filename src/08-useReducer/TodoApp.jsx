// Importamos el hook personalizado que contiene toda la lógica relacionada con los TODOs
import { useTodos } from "../hooks";

// Importamos el componente que muestra la lista de tareas
import { TodoList } from "./TodoList";

// Importamos el componente que permite agregar nuevas tareas
import { TodoAdd } from "./TodoAdd";

// Componente principal de la aplicación de tareas
export const TodoApp = () => {
  // Usamos el hook useTodos para obtener:
  const {
    todos, // Lista actual de tareas (estado)
    handleDeleteTodo, // Función que elimina una tarea por su ID
    handleToggleTodo, // Función que cambia el estado "completado" de una tarea
    handleNewTodo, // Función que agrega una nueva tarea
    pendingTodosCount,
    todosCount,
  } = useTodos();

  return (
    <>
      {/* Título principal con contador general de tareas y tareas pendientes */}
      <h1>
        TodoApp: {todosCount}, <small>Pendientes: {pendingTodosCount}</small>
      </h1>
      <hr />

      {/* Contenedor principal en forma de fila, dividido en dos columnas */}
      <div className="row">
        {/* Columna izquierda (7 de 12 columnas) para mostrar la lista de tareas */}
        <div className="col-7">
          <TodoList
            todos={todos} // Lista de tareas para mostrar
            onDeleteTodo={handleDeleteTodo} // Función para eliminar tareas
            onToggleTodo={handleToggleTodo} // Función para marcar como completada
          />
        </div>

        {/* Columna derecha (5 de 12 columnas) para agregar una nueva tarea */}
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          {/* Componente que muestra el formulario para agregar una nueva tarea */}
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
