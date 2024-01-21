import React from 'react'
import { useParams } from 'react-router-dom'
import documentosData from '../data/documentos.json'

function DetalleDocumento() {
    const {id} = useParams();
    const docuento = documentosData.find(doc => doc.id.toString()=== id);

  return (
    <div>
        {documento ? (
            <div>
                <h1>{documento.titulo}</h1>
                <p>{documento.contenido}</p>
            </div>    
        ) : (
            <p>Documento no encontrado</p>
        )}
    </div>
  )
}

export default DetalleDocumento