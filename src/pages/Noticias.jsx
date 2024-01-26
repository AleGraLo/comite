import React, { useState, useEffect } from 'react';
import CardComponent from '../components/CardComponent';
import noticiasData from '../data/noticias.json';
import '../CSS/style.css'


function Noticias() {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    setNoticias(noticiasData);
  }, []);

  return (
    <div className='container'>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4'>
        {noticias.map(noticia => (
          <div className="col" key={noticia.id}> {/* Clase "col" para cada tarjeta */}
            <CardComponent 
              id={noticia.id}
              title={noticia.titulo} 
              subtitle={noticia.subtitulo}
              fechaPublicacion={noticia.fechaPublicacion} // Asegúrate de que este campo exista en tus datos
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Noticias;
