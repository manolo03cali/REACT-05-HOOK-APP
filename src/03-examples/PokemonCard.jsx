// Muestra el nombre y número de un Pokémon (#id-nombre).
// Muestra sus imágenes (sprites).
// Mide el tamaño del título <h2> cada vez que cambia el nombre del Pokémon.
// Muestra esas medidas (alto y ancho) como texto y en la consola.
// Importa React y tres hooks: useLayoutEffect, useRef y useState
import React, { useLayoutEffect, useRef, useState } from "react";

// Componente funcional que muestra información de un Pokémon
// Recibe como props:
// - id: número del Pokémon
// - name: nombre del Pokémon
// - sprites: arreglo de URLs de imágenes del Pokémon
export const PokemonCard = ({ id, name, sprites = [] }) => {
  // Crea una referencia para acceder directamente al elemento <h2> en el DOM
  const h2Ref = useRef();

  // Estado para guardar el tamaño (ancho y alto) del <h2>
  const [boxSize, setboxSize] = useState({ width: 0, height: 0 });

  // useLayoutEffect se ejecuta justo después del renderizado,
  // ideal para leer o modificar el DOM sin parpadeos visuales
  useLayoutEffect(() => {
    // Obtiene las dimensiones actuales del <h2> y las guarda en el estado
    const { height, width } = h2Ref.current.getBoundingClientRect();
    setboxSize({ height, width });

    // Muestra las dimensiones en consola
    console.log({ height, width });
  }, [name]); // Se vuelve a ejecutar solo si cambia el nombre del Pokémon

  return (
    // Sección principal que contiene el nombre y las imágenes del Pokémon
    // ⚠️ Corregido: debe ser "height" (antes estaba mal escrito como "heigth")
    <section style={{ height: 200, display: "flex", flexDirection: "row" }}>
      {/* Título que muestra el número y nombre del Pokémon */}
      {/* `ref={h2Ref}` conecta el <h2> con el useRef para medirlo */}
      {/* `text-capitalize` pone en mayúscula la primera letra del nombre */}
      <h2 ref={h2Ref} className="text-capitalize">
        #{id}-{name}
      </h2>

      {/* Contenedor de imágenes del Pokémon */}
      <div>
        {/* Recorre el array de imágenes (sprites) y renderiza una <img> por cada una */}
        {sprites.map((sprite, idx) => (
          <img key={sprite || idx} src={sprite} alt={name} />
        ))}
      </div>

      {/* Muestra en pantalla el tamaño (alto y ancho) del <h2> como texto */}
      <div>{JSON.stringify(boxSize)};</div>
    </section>
  );
};
