// Estado inicial del reducer: una lista con un solo "todo" (tarea)
const initialState = [
  {
    id: 1,
    todo: "Recolectar la piedra del Alma", // Descripción de la tarea
    done: false, // Estado de la tarea (false = no completada)
  },
];

/*
    Definición del reducer: una función que gestiona el estado basado en una acción.
  
    - Recibe dos argumentos:
      1. state: el estado actual (por defecto es initialState si no se pasa ninguno).
      2. action: un objeto que indica qué tipo de cambio hacer (debe tener al menos una propiedad 'type').
  
    - Si la acción es de tipo "[TODO] add todo", entonces:
      - Retorna un nuevo arreglo con todos los elementos del estado actual (...state)
      - Y agrega la nueva tarea desde action.payload.
      
    - Si la acción no es reconocida, simplemente devuelve el estado tal como está.
  */
const todoReducer = (state = initialState, action = {}) => {
  if (action.type === "[TODO] add todo") {
    return [...state, action.payload];
  }
  return state;
};

// Llama al reducer sin ninguna acción para obtener el estado inicial
let todos = todoReducer(); // Resultado: lista con solo una tarea (la del initialState)

// Se define una nueva tarea a agregar
const newTodo = {
  id: 2,
  todo: "Recolectar la piedra del poder",
  done: false,
};

// Se define una acción con tipo "[TODO] add todo" y se pasa la nueva tarea en payload
const addTodoAction = {
  type: "[TODO] add todo",
  payload: newTodo,
};

// Se llama al reducer con el estado actual y la nueva acción para agregar la tarea
todos = todoReducer(todos, addTodoAction);

// Se imprime el nuevo estado, que ahora incluye las dos tareas
console.log({ state: todos });
