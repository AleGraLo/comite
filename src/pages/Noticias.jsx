import React, { useState, useEffect } from 'react';
import CardComponent from '../components/CardComponent';
import noticiasData from '../data/noticias.json';

function Noticias() {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    setNoticias(noticiasData);
  }, []);

  return (
    <div>
      {noticias.map(noticia => (
        <CardComponent 
          key={noticia.id}
          id={noticia.id}
          title={noticia.titulo} 
          subtitle={noticia.subtitulo}
          text={noticia.texto}
        />
      ))}
    </div>
  );
}

export default Noticias;


