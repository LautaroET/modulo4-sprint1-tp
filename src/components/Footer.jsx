import React from 'react'

function Footer() {
  return (
    <footer class="bg-blue-950 py-8 text-center text-gray-300 shadow-inner">
      <div class="container mx-auto px-4"> {/* Contenedor para centrar y añadir padding lateral */}
        <p class="text-lg md:text-xl font-medium tracking-wide"> {/* Tamaño de texto responsivo y ajuste de fuente */}
          &copy; <span class="text-sky-300">Catamarca Ajedrez</span> - Desarrollado por <span class="text-sky-300">Lautaro Tapia</span> - 2025
        </p>
        <p class="text-sm mt-1 text-gray-400">
          Módulo 4 - Sprint 1 Trabajo Practico
        </p>
      </div>
</footer>
  )
}

export default Footer