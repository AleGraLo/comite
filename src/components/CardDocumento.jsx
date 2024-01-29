import React from "react";

function CardDocumento({ titulo, resumen,contenido, url }) {
  return (
    <div className="card m-5">
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">{resumen}</p>
        <p className="card-text">{contenido}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">Abrir Documento</a>
      </div>
    </div>
  );
}

export default CardDocumento;
