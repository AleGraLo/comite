import React, { useState, useEffect } from 'react';
import CardDocumento from '../components/CardDocumento';
import documentosData from '../data/documentos.json'

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
        url={doc.url}
        />
      ))}
    </div>
  )
}

export default Documentacion