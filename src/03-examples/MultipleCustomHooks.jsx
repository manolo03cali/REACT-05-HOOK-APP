import React from "react";
// Importa dos custom hooks: useCounter y useFetch
import { useCounter, useFetch } from "../hooks";

// Importa un componente que se muestra cuando los datos están cargando
import { LoadingMessage } from "./LoadingMessage";

// Importa un componente que muestra la información del Pokémon
import { PokemonCard } from "./PokemonCard";

// Componente principal que usa múltiples hooks personalizados
export const MultipleCustomHooks = () => {
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

      {isLoading || !data ? (
        <LoadingMessage />
      ) : (
        <PokemonCard
          id={counter}
          name={data.name}
          sprites={[
            data.sprites.front_default,
            data.sprites.front_shiny,
            data.sprites.back_default,
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
