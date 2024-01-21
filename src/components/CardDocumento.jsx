import React from "react";

function CardDocumento({ titulo, resumen, url }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">{resumen}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">Abrir Documento</a>
      </div>
    </div>
  );
}

export default CardDocumento;
