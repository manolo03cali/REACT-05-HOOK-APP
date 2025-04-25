// Importamos 'act' y 'renderHook' de React Testing Library para probar hooks personalizados
import { act, renderHook } from "@testing-library/react";
// Importamos nuestro hook personalizado useForm, estamos usando archivo de barril
import { useForm } from "../../hooks";

// Agrupamos las pruebas bajo una misma descripción
describe("Pruebas sobre el hook userForm", () => {
  // Primera prueba: verificar que el hook retorna los valores por defecto correctamente
  test("debe de regresar los valores por defecto", () => {
    // Valores iniciales simulados para el formulario
    const initialForm = {
      name: "manuel",
      email: "manolo.ing@gmail.com",
    };

    // Ejecutamos el hook con esos valores iniciales
    const { result } = renderHook(() => useForm(initialForm));

    // Verificamos que el resultado contenga las propiedades esperadas
    expect(result.current).toEqual({
      name: initialForm.name, // valor del input 'name'
      email: initialForm.email, // valor del input 'email'
      formState: initialForm, // el estado completo del formulario
      onInputChange: expect.any(Function), // funciones disponibles
      onResetForm: expect.any(Function),
    });
  });

  // Segunda prueba: verificar que se puede cambiar el valor de un input
  test("debe de cambiar el nombre en el formulario", () => {
    const initialForm = {
      name: "manuel",
      email: "manolo.ing@gmail.com",
    };
    const newValue = "Laura"; // nuevo valor que se usará para el input 'name'

    // Renderizamos el hook
    const { result } = renderHook(() => useForm(initialForm));

    // Extraemos la función para manejar cambios de input
    const { onInputChange } = result.current;

    // Usamos act() para simular el cambio de valor como lo haría un input real
    act(() => {
      onInputChange({
        target: {
          name: "name", // input que se está modificando
          value: newValue, // nuevo valor a asignar
        },
      });
    });

    // Verificamos que el estado se haya actualizado correctamente
    expect(result.current.formState.name).toBe(newValue);
    expect(result.current.name).toBe(newValue);
  });

  // Tercera prueba: verificar que el formulario se puede resetear
  test("debe de aplicar reset en el formulario", () => {
    const initialForm = {
      name: "manuel",
      email: "manolo.ing@gmail.com",
    };
    const newValue = "Laura"; // nuevo valor temporal para 'name'

    // Renderizamos el hook
    const { result } = renderHook(() => useForm(initialForm));

    // Extraemos funciones del hook
    const { onInputChange, onResetForm } = result.current;

    // Simulamos el cambio de valor y luego el reset
    act(() => {
      onInputChange({
        target: {
          name: "name",
          value: newValue,
        },
      });
      onResetForm(); // aquí se reinicia el formulario a sus valores iniciales
    });

    // Verificamos que el valor haya vuelto al estado original
    expect(result.current.formState.name).toBe(initialForm.name);
    expect(result.current.name).toBe(initialForm.name);
  });
});
