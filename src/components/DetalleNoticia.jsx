import React from 'react';
import { useParams } from 'react-router-dom';
import noticiasData from '../data/noticias.json';

function DetalleNoticia() {
  const { id } = useParams();
  const noticia = noticiasData.find(n => n.id.toString() === id);

  return (
    <div>
      {/* Mostrar los detalles de la noticia aquí */}
      <h1>{noticia?.titulo}</h1>
      <p>{noticia?.textoCompleto}</p>
      {/* ...otros detalles... */}
    </div>
  );
}

export default DetalleNoticia;


