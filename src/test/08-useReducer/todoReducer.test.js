// Importamos el reducer que queremos probar
import { todoReducer } from "../../08-useReducer/todoReducer";

// Grupo de pruebas (describe agrupa tests relacionados)
describe("Pruebas sobre el hook todoReducer", () => {
  //  Prueba: debe retornar el mismo estado si la acción no es válida
  test("Debe de regresar el estado inicial", () => {
    // Estado inicial con un solo TODO
    const initialState = [
      {
        id: 1,
        description: "Demo Todo",
        done: false,
      },
    ];

    // Llamamos al reducer con una acción vacía (sin type)
    const newState = todoReducer(initialState, {});

    // Esperamos que el estado no haya cambiado (retorna el mismo objeto)
    expect(newState).toBe(initialState);
  });

  // Prueba: debe agregar un nuevo TODO
  test("Debe de agregar un todo", () => {
    const initialState = [
      {
        id: 1,
        description: "Demo Todo",
        done: false,
      },
      {
        id: 2,
        description: "Laura Todo",
        done: false,
      },
    ];

    // Creamos una acción con tipo "[TODO]Add Todo" y un nuevo TODO como payload
    const action = {
      type: "[TODO]Add Todo",
      payload: {
        id: 3,
        description: "Nuevo todo#3",
        done: false,
      },
    };

    // Reducer procesa el estado y la acción
    const newState = todoReducer(initialState, action);

    // Comprobamos que ahora hay 3 TODOs (se añadió uno)
    expect(newState.length).toBe(3);

    // Verificamos que el nuevo TODO esté incluido en el estado actualizado
    expect(newState).toContain(action.payload);
  });

  //  Prueba: debe eliminar un TODO por ID
  test("Debe de eliminar el TODO", () => {
    const initialState = [
      {
        id: 1,
        description: "Demo Todo",
        done: false,
      },
      {
        id: 2,
        description: "Laura Todo",
        done: false,
      },
    ];

    // Acción para eliminar el TODO con id = 2
    const action = {
      type: "[TODO] Remove Todo",
      payload: 2,
    };

    // Reducer elimina el TODO con ese id
    const newState = todoReducer(initialState, action);

    // Debe quedar solo 1 TODO
    expect(newState.length).toBe(1);

    // Y ese TODO no debe tener id 2
    expect(newState).not.toContainEqual(expect.objectContaining({ id: 2 }));
  });

  // Prueba: debe hacer toggle (cambiar true/false) en el campo done de un TODO
  test("Debe de realizar el Toggle del todo", () => {
    const initialState = [
      {
        id: 1,
        description: "Demo Todo",
        done: false,
      },
      {
        id: 2,
        description: "Laura Todo",
        done: false,
      },
    ];

    // Acción para hacer toggle en el TODO con id 2
    const action = {
      type: "[TODO]Toggle Todo",
      payload: 2,
    };

    // Primer toggle: done pasa de false → true
    const newState = todoReducer(initialState, action);
    expect(newState[1].done).toBe(true);

    // Segundo toggle: done vuelve de true → false
    const newState2 = todoReducer(newState, action);
    expect(newState2[1].done).toBe(false);
  });
});
