import React from 'react'
import { noticia } from '../utils/noticia'
import Card from './Card'

function Main() {
  return (
    <main className="bg-gray-900 text-white min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-blue-400">
          Noticias
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {noticia.map((noticia) => (
            <Card
              key={noticia.id}
              titulo={noticia.titulo}
              imagen={noticia.image}
              descripcion={noticia.descripcion}
            />
          ))}
        </div>
      </div>
    </main>
  )
}

export default Main
