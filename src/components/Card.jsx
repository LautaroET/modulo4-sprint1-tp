import React, { useState } from 'react';

function Card({ titulo, imagen, descripcion }) {
  const [mostrarDescripcion, setMostrarDescripcion] = useState(false);

  const handleClick = () => {
    setMostrarDescripcion(!mostrarDescripcion);
  };

  return (
    <div
      onClick={handleClick}
      className={`bg-gray-800 rounded-xl p-4 shadow-lg transition-all duration-300 cursor-pointer flex flex-col items-center
      ${mostrarDescripcion ? 'h-auto' : 'h-[220px]'} overflow-hidden`}
    >
      <img
        src={imagen}
        alt="imagen publicitaria de torneo"
        className="w-24 h-24 object-cover md:w-32 md:h-32 rounded-lg shadow-md"
      />
      <p className="mt-4 text-lg font-semibold text-blue-300 text-center">{titulo}</p>
      <div
        className={`transition-opacity duration-300 mt-2 text-sm text-white text-center ${
          mostrarDescripcion ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0'
        } overflow-hidden`}
      >
        {descripcion}
      </div>
    </div>
  );
}

export default Card;


