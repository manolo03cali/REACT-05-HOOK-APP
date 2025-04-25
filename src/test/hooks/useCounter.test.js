// Importamos funciones necesarias desde Testing Library:
// - act: para simular acciones que cambian el estado.
// - renderHook: para renderizar y testear hooks personalizados.
import { act, renderHook } from "@testing-library/react";

// Importamos nuestro hook personalizado useCounter.
import { useCounter } from "../../hooks";

// Definimos una suite de pruebas para el hook useCounter.
describe("Pruebas en el componente useCounter", () => {
  // Primera prueba: verificar valores por defecto.
  test("Debe de retornar los valores por defecto", () => {
    const { result } = renderHook(() => useCounter()); // Ejecutamos el hook sin argumentos.
    const { counter, increment, decrement, reset } = result.current; // Extraemos valores y funciones.

    expect(counter).toBe(10); // Verificamos que el valor inicial del contador sea 10.
    expect(decrement).toEqual(expect.any(Function)); // Verificamos que decrement sea una función.
    expect(increment).toEqual(expect.any(Function)); // Verificamos que increment sea una función.
    expect(reset).toEqual(expect.any(Function)); // Verificamos que reset sea una función.
  });

  // Segunda prueba: comprobar inicialización personalizada.
  test("Debe de generar el counter con el valor de 100", () => {
    const { result } = renderHook(() => useCounter(100)); // Inicializamos el contador con 100.
    const { counter } = result.current;
    expect(counter).toBe(100); // Verificamos que el valor inicial sea 100.
  });

  // Tercera prueba: verificar que increment funciona correctamente.
  test("Debe de incrementar el contador", () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment } = result.current;

    // Utilizamos act para simular cambios de estado.
    act(() => {
      increment(); // +1
      increment(2); // +2
    });

    expect(result.current.counter).toBe(103); // Esperamos que el contador sea 103.
  });

  // Cuarta prueba: verificar que decrement funciona correctamente.
  test("Debe de decrementar el contador", () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;

    act(() => {
      decrement(); // -1
      decrement(2); // -2
    });

    expect(result.current.counter).toBe(97); // Esperamos que el contador sea 97.
  });

  // Quinta prueba: verificar que reset vuelve al valor inicial.
  test("Debe de resetear al valor inicial", () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement, increment, reset } = result.current;

    act(() => {
      decrement(2); // -2
      decrement(2); // -2
      decrement(2); // -2
      decrement(2); // -2
      increment(5); // +5
      reset(); // vuelve a 100
    });

    expect(result.current.counter).toBe(100); // Verificamos que vuelva al valor inicial.
  });
});
