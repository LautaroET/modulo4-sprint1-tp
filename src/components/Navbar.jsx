import React, { useState } from 'react';
import { navbarLink } from '../utils/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='w-full bg-blue-950 shadow-lg relative'> {/* Fondo Azul Medianoche: seriedad, elegancia, profundidad */}
      {/* Vista de escritorio */}
      <div className='flex justify-between items-center px-4 py-3 sm:px-12'>
        {/* Logo */}
        <div className='flex items-center gap-3'>
          <img
            src={'/public/peon.png'}
            alt='Logo de Ajedrez de Catamarca'
            className='w-16 h-16 object-contain'
          />
          <p className='text-white text-2xl font-extrabold tracking-wide'>
            Catamarca <span className='text-sky-300'>Ajedrez</span> {/* Acento Celeste Metálico: claridad, intelecto */}
          </p>
        </div>

        {/* Botón de hamburguesa */}
        <button
          className='md:hidden text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-300' // Ring de foco en celeste
          onClick={toggleMenu}
          aria-label='Abrir menú de navegación'
        >
          <svg
            className='w-7 h-7'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navegación de escritorio */}
        <div className='hidden md:block'>
          <ul className='flex space-x-6'>
            {navbarLink.map((link) => (
              <li key={link.id}>
                <a
                  href={link.link}
                  className='text-white text-base font-medium hover:text-sky-300 transition-colors duration-300 transform hover:scale-105 inline-block' // Hover en celeste
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Vista de celular - Menú desplegable */}
      <div
        className={`md:hidden absolute left-0 w-full bg-blue-900 z-10 overflow-hidden transition-all duration-300 ease-in-out ${ // Azul más claro para contraste sutil
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className='flex flex-col py-4 px-4'>
          {navbarLink.map((link) => (
            <li key={link.id} className='py-3 text-center border-b border-blue-800 last:border-b-0'> {/* Borde en azul intermedio */}
              <a
                href={link.link}
                className='text-white text-lg font-semibold hover:text-sky-300 transition-colors duration-200 block w-full' // Hover en celeste
                onClick={toggleMenu}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;