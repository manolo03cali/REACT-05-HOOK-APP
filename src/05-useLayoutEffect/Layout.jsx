import React from "react";
// Importa dos custom hooks: useCounter y useFetch
import { useCounter, useFetch } from "../hooks";

// Importa un componente que se muestra cuando los datos están cargando
//Esta importación la realizamos de manera diferente porque ahora el Layout se encuentra en otro
//Directorio entonces usamos un archivo de barril en 03-examplas y desestrusturamos los
//componentes que necesitamos
import { LoadingMessage, PokemonCard } from "../03-examples";

// Componente principal que usa múltiples hooks personalizados
export const Layout = () => {
  // useCounter gestiona un contador, inicializado en 1
  const { counter, decrement, increment } = useCounter(1);

  // useFetch consulta la API de Pokémon usando el número del contador
  const { data, hasError, isLoading } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );

  return (
    <>
      <h1>Información del Pokémon</h1>
      <hr />

      {/* Si está cargando, se muestra el componente de cargando */}
      {isLoading ? (
        <LoadingMessage />
      ) : (
        // Si ya se tienen los datos, se muestra la tarjeta del Pokémon
        <PokemonCard
          id={counter}
          name={data.name}
          sprites={[
            data.sprites.front_default, // Imagen frontal normal
            data.sprites.front_shiny, // Imagen frontal shiny
            data.sprites.back_default, // Imagen trasera normal
          ]}
        />
      )}

      {/* Botón para ir al Pokémon anterior, evita bajar de 1 */}
      <button
        onClick={() => (counter > 1 ? decrement() : null)}
        className="btn btn-primary mt-2"
      >
        Anterior
      </button>

      {/* Botón para ir al siguiente Pokémon */}
      <button onClick={() => increment()} className="btn btn-primary mt-2">
        Siguiente
      </button>
    </>
  );
};
