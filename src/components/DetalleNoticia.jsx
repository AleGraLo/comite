import React from 'react';
import { useParams } from 'react-router-dom';
import noticiasData from '../data/noticias.json';
import '../CSS/style.css'

function DetalleNoticia() {
  const { id } = useParams();
  const noticia = noticiasData.find(n => n.id.toString() === id);

  return (
    <div className='container'>
      <div className='card-detalle'>
        <div className='card-title'>
      {/* Mostrar los detalles de la noticia aquí */}
      <h1>{noticia?.titulo}</h1>
      </div>
      <div className='p-5'>
      <p>{noticia?.textoCompleto}</p>
      {/* ...otros detalles... */}
      </div>
    </div>
    </div>
  );
}

export default DetalleNoticia;


