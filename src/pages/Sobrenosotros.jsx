import React from 'react';
import datosEquipo from '../data/equipo.json'; // Ajusta la ruta según la estructura de tu proyecto
import '../CSS/style.css'

function SobreNosotros() {
  return (
    <div className='container'>

      <section className="card-title ">
        <h2>Nuestro Equipo</h2>
        <div className="card">
          {datosEquipo.map(miembro => (
            <div key={miembro.id} className="miembro-equipo">
              <img src={miembro.foto} alt={`Foto de ${miembro.nombre}`} />
              <h3>{miembro.nombre}</h3>
              <p>{miembro.rol}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contacto o Llamada a la Acción */}
      <section className="card-title">
        <h2>Contáctanos</h2>
        <a href="mailto:Rt.malaga@bidafarma.es" className="text-dark">
          Rt.malaga@bidafarma.es
        </a>
      </section>
    </div>
  );
}

export default SobreNosotros;
