// Importamos los hooks useEffect y useState desde React
import { useEffect, useState } from "react";

// Definimos un componente funcional llamado Message
export const Message = () => {
  // Definimos un estado llamado "coords" con un objeto inicial { x: 0, y: 0 }
  // Este estado se usará para guardar las coordenadas del mouse
  const [coords, setcoords] = useState({ x: 0, y: 0 });

  // useEffect se ejecuta una vez cuando el componente se monta
  useEffect(() => {
    // console.log("Message Mounted"); // Comentado: se usaría para depurar el montaje del componente

    // Definimos una función que se ejecuta cada vez que se mueve el mouse
    // Esta función actualiza el estado "coords" con las coordenadas actuales del mouse
    const onMouseMove = ({ x, y }) => {
      setcoords({ x, y });
      // console.log(coords); // Comentado: se usaría para ver los valores de coords en cada movimiento
    };

    // Registramos el event listener para el evento "mousemove" en el objeto window
    window.addEventListener("mousemove", onMouseMove);

    // La función de retorno del useEffect se ejecuta cuando el componente se desmonta
    // Aquí removemos el event listener para evitar fugas de memoria
    return () => {
      // console.log("Message unmounted"); // Comentado: útil para depurar el desmontaje
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []); // El array vacío indica que este efecto solo se ejecuta al montar y desmontar el componente

  // Renderizamos el componente
  return (
    <>
      {/* Título indicando que el usuario ya existe */}
      <h3>Usuario ya existe</h3>
      {/* Mostramos las coordenadas del mouse en formato JSON porque es un objeto*/}
      <h2>{JSON.stringify(coords)}</h2>
    </>
  );
};
