import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../08-useReducer/TodoItem";

describe("Pruebas en el componente TodoItem", () => {
  const todo = {
    id: 1,
    description: "priedra del alma",
    done: false,
  };
  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();
  beforeEach(() => jest.clearAllMocks());
  test("debe de mostrar el TODO pendiente de completar", () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onToggleTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );
    const Lielement = screen.getByRole("listitem");
    // console.log(Lielement.innerHTML);
    expect(Lielement.className).toBe(
      "list-group-item d-flex justify-content-between"
    );
    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toContain("align-self-center");
    expect(spanElement.className).not.toContain("text-decoration-line-through");
  });
  test("debe de mostrar el TODO completado", () => {
    todo.done = true;
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onToggleTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toContain("text-decoration-line-through");
  });
  test("span debe de llamar el ToggleTodo cuando se hace el click ", () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onToggleTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const spanElement = screen.getByLabelText("span");
    fireEvent.click(spanElement);
    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
  });
  test("el boton debe de llamar el onDeleteTodo ", () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const deleteButton = screen.getByRole("button", { name: "boton1" });
    fireEvent.click(deleteButton);
    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
  });
});
