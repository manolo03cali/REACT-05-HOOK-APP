// Importa funciones para renderizar componentes y buscar elementos en la pantalla de pruebas
import { render, screen } from "@testing-library/react";

// Importa el componente que se va a probar
import { TodoApp } from "../../08-useReducer/TodoApp";

// Importa el hook personalizado que utiliza el componente
import { useTodos } from "../../hooks/useTodos";

// Mockea el hook personalizado para poder controlar su comportamiento durante la prueba
jest.mock("../../hooks/useTodos");

// Grupo de pruebas para el componente <TodoApp />
describe("Pruebas en <TodoApp/>", () => {
  // Antes de cada prueba, se define qué devolverá el hook `useTodos` cuando sea llamado
  useTodos.mockReturnValue({
    todos: [
      { id: 1, description: "Todo #1", done: false },
      { id: 2, description: "Todo #2", done: true },
    ], // Lista simulada de tareas
    handleDeleteTodo: jest.fn(), // Función simulada para eliminar una tarea
    handleToggleTodo: jest.fn(), // Función simulada para alternar el estado de completado
    handleNewTodo: jest.fn(), // Función simulada para agregar una nueva tarea
    pendingTodosCount: 1, // Conteo simulado de tareas pendientes
    todosCount: 2, // Conteo total de tareas
  });

  // Se define una prueba específica
  test("Debe de mostrar el componente correctamente ", () => {
    // Renderiza el componente <TodoApp /> usando Testing Library
    render(<TodoApp />);

    // Verifica que se muestre el texto de la primera tarea
    expect(screen.getByText("Todo #1")).toBeTruthy();

    // Verifica que se muestre el texto de la segunda tarea
    expect(screen.getByText("Todo #2")).toBeTruthy();

    // Verifica que exista un textbox en el componente (probablemente para añadir tareas)
    expect(screen.getByRole("textbox")).toBeTruthy();
  });
});
