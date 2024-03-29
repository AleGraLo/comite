import React, { useState, useEffect } from 'react';
import CardDocumento from '../components/CardDocumento';
import documentosData from '../data/documentos.json'
import '../CSS/style.css'; 


function Documentacion() {
  const [documentos, setDocumentos]= useState([]);

  useEffect(()=> {
    setDocumentos(documentosData);
  }, []);

  return (
    <div>
      {documentos.map(doc =>(
        <CardDocumento
        key={doc.id}
        titulo={doc.titulo}
        resumen={doc.resumen}
        contenido={doc.contenido}
        url={doc.url}
        />
      ))}
    </div>
  )
}

export default Documentacion