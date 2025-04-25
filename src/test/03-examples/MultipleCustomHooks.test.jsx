// Importamos herramientas necesarias para testear componentes en React
import { fireEvent, render, screen } from "@testing-library/react";

// Importamos el componente que vamos a probar
import { MultipleCustomHooks } from "../../03-examples/MultipleCustomHooks";

// Importamos los hooks personalizados que utiliza el componente
import { useFetch } from "../../hooks/useFetch";
//import React from "react";
import { useCounter } from "../../hooks/useCounter";

// Simulamos (mockeamos) los hooks personalizados para tener control sobre sus respuestas durante las pruebas
jest.mock("../../hooks/useFetch");
jest.mock("../../hooks/useCounter");

// Creamos un grupo de pruebas para el componente
describe("Pruebas en el componente MultipleCustomHooks", () => {
  // Creamos funciones simuladas para los métodos de incremento y decremento
  const mockIncrement = jest.fn();
  const mockDecrement = jest.fn();
  const mockReset = jest.fn();

  // Antes de cada test, limpiamos cualquier llamada anterior a los mocks para evitar interferencias
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Función auxiliar que configura la respuesta del hook useCounter simulado
  const setupMocks = (counter = 1) => {
    useCounter.mockReturnValue({
      counter,
      increment: mockIncrement,
      decrement: mockDecrement,
      reset: mockReset,
    });
  };

  // PRIMER TEST: Comportamiento del componente por defecto
  test("Debe de mostrar el componente por defecto", () => {
    setupMocks(); // Preparamos el hook useCounter con valores iniciales
    // Simulamos que useFetch no tiene datos todavía y está en error
    useFetch.mockReturnValue({ data: null, hasError: true, isLoading: null });

    // Renderizamos el componente
    render(<MultipleCustomHooks />);

    // Verificamos que se muestre el texto "Loading..." (indicando que está cargando)
    expect(screen.getByText("Loading..."));

    // Verificamos que también se muestre el título del componente
    expect(screen.getByText("Información del Pokémon"));

    // Verificamos que el botón "Siguiente" esté presente y habilitado
    const nextButton = screen.getByRole("button", { name: "Siguiente" });
    expect(nextButton.disabled).toBeFalsy();
  });

  // SEGUNDO TEST: Mostrar información de un Pokémon con imagen
  test("Debe de mostrar una imagen", () => {
    setupMocks(); // También podríamos llamarlo aquí para mantener consistencia

    // Simulamos que useFetch devuelve datos válidos de un Pokémon (pikachu)
    useFetch.mockReturnValue({
      data: {
        name: "pikachu",
        sprites: {
          front_default: "https://img.pokemondb.net/sprites/pikachu.png",
        },
      },
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />); // Renderizamos el componente

    // Buscamos el botón "Siguiente"
    const nextButton = screen.getByRole("button", { name: "Siguiente" });

    // Verificamos que haya al menos una imagen con alt="pikachu"
    expect(screen.getAllByAltText("pikachu")).toBeTruthy();

    // Verificamos que el botón esté habilitado
    expect(nextButton.disabled).toBeFalsy();
  });

  // TERCER TEST: Verificar que al hacer clic en "Siguiente" se llame la función de incrementar
  test("Debe de llamar la función de incrementar", () => {
    setupMocks(1); // Preparamos el contador con valor 1

    // Simulamos respuesta exitosa de useFetch con datos del Pokémon
    useFetch.mockReturnValue({
      data: {
        name: "pikachu",
        sprites: {
          front_default: "https://img.pokemondb.net/sprites/pikachu.png",
        },
      },
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />); // Renderizamos el componente

    // Buscamos el botón "Siguiente"
    const nextButton = screen.getByRole("button", { name: "Siguiente" });

    // Simulamos el click en ese botón
    fireEvent.click(nextButton);

    // Verificamos que se haya llamado la función simulada de incremento
    expect(mockIncrement).toHaveBeenCalled();
  });

  // CUARTO TEST: Verificar que al hacer clic en "Anterior" se llame la función de decrementar
  test("Debe de llamar la función de Decrementar", () => {
    setupMocks(2); // Contador con valor 2 para permitir retroceder

    // Simulamos una respuesta válida del fetch
    useFetch.mockReturnValue({
      data: {
        name: "pikachu",
        sprites: {
          front_default: "https://img.pokemondb.net/sprites/pikachu.png",
        },
      },
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />); // Renderizamos el componente

    // Buscamos el botón "Anterior"
    const prevButton = screen.getByRole("button", { name: "Anterior" });

    // Simulamos el clic
    fireEvent.click(prevButton);

    // Verificamos que se haya llamado la función simulada de decremento
    expect(mockDecrement).toHaveBeenCalled();
  });
});
