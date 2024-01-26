import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/style.css'

function CardComponent({ id, title, subtitle, fechaPublicacion }) {
  return (
    <div className="card " >
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
        <div className="fecha-publicacion">
          {fechaPublicacion}
        </div>
        <Link to={`/noticias/${id}`}>Leer más...</Link>
      </div>
    </div>   
  );
}

export default CardComponent;


